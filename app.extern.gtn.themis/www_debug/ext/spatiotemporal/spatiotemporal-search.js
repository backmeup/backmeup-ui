var SpatioTemporalUI = function(props)  {

  var BASE_URL = 'http://localhost:9200/backmeup/_search?size=1500&q=',

      model = new Model(),

      resultListContainer = jQuery(props.resultList),
      resultList = new ResultList(resultListContainer, model),

      timeHistogramContainer = jQuery(props.timeHistogram),
      timeHistogram = new TimeHistogram(timeHistogramContainer, model),

      mapContainer = jQuery(props.map),
      map = new Map(mapContainer, model),

      dateFlipperContainer = (function() {
        var el = jQuery('<div id="dateflipper"></div>');
        resultListContainer.parent().append(el);
        return el;
      })(),
      dateFlipper = new DateFlipper(dateFlipperContainer[0]),

      dateFlipperDisplayTimer,

      update = function(query) {
        model.load(BASE_URL + encodeURIComponent(query), function() {
          map.render();
          resultList.render();
          timeHistogram.render();
        });
      },

      onSelectOnList = function(result) {
        console.log(result);
      },

      onSelectOnMap = function(results) {
        resultList.highlight(results);
        if (results.length > 0)
          resultList.scrollTo(results[0]);
      },

      onSelectTimeRange = function(e) {
        resultList.highlight(); // De-highlight
        resultList.scrollTo(model.getFirstResultBefore(e.to));
      };

      /*
      onScroll = function(e) {
        var winHeight = $(window).height(), latestVisible;

        if (dateFlipperDisplayTimer) {
          clearTimeout(dateFlipperDisplayTimer);
          dateFlipperDisplayTimer = false;
        }

        -dateFlipperContainer.fadeIn();
        dateFlipperDisplayTimer = setTimeout(function() {
          dateFlipperContainer.fadeOut();
        }, 1200);

        jQuery('.resultListSection').toArray().some(function(element) {
          var elementTop = element.getBoundingClientRect().top;

          if (elementTop < winHeight) {
            latestVisible = element;
            return false;
          } else {
            return true;
          }
        });

        dateFlipper.set(new Date(jQuery(latestVisible).data('date')));
      };
      */

  dateFlipperContainer.hide();
  // jQuery(window).scroll(onScroll);

  map.on('select', onSelectOnMap);
  timeHistogram.on('select', onSelectTimeRange);
  resultList.on('select', onSelectOnList);

  this.update = update;

};

/** A generic pub-sub trait **/
var HasEvents = function() {

  var handlers = {};

  this.on = function(event, handler) {
    handlers[event] = handler;
  };

  this.fireEvent = function(event, e, args) {
    if (handlers[event])
      handlers[event](e, args);
  };

};

var Map = function(container, model) {

  var self = this,

      baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }),

      map = L.map(container[0], {
        center: new L.LatLng(48.2, 16.4),
        zoom: 12,
        layers: [ baseLayer ]
      }),

      markerIndex = {},

      onSelect = function(results) {
        self.fireEvent('select', results);
        if (results.length > 0)
          selectFirst(results[0]);
      },

      render = function() {
        map.invalidateSize();

        jQuery.each(model.getResultsByCoordinate(), function(idx, tuple) {
          // Create marker
          var marker = L.marker([tuple.lat, tuple.lon])
           .on('click', onSelect.bind(null, tuple.results))
           .addTo(map);

          // Add results to index
          jQuery.each(tuple.results, function(idx, result) {
            markerIndex[result.key] = marker;
          });
        });
      },

      selectFirst = function(results) {
        if (results && results.length > 0) {
          var marker = markerIndex[results[0].key];
          if (marker) {
            marker
              .bindPopup('<strong>' + results[0].title + '</strong>')
              .openPopup();
          } else {
            map.closePopup();
          }
        } else {
          map.closePopup();
        }
      };

  L.Icon.Default.imagePath = '../ext/leaflet/images/';

  this.render = render;
  this.selectFirst = selectFirst;

  HasEvents.apply(this);
};

Map.prototype = Object.create(Map.prototype);

var Model = function() {

  var UNWANTED_RECORDS =
        [ 'album.html', 'albuminfo.xml', 'photo.jpg', 'commentinfo.xml',
          'groups.html', 'groupinfo.xml', 'postinfo.xml', 'user.xml' ],

      data = { results: [], resultsByDate: [], resultsByCoordinate: [] },

      fullTextCorpus = new WordList(),

      load = function(url, callback) {
        jQuery.getJSON(url, function(response) {
          data = processSearchResponse(response.hits.hits);
          if (callback)
            callback();
        });
      },

      /** A hack to 'beautify' THEMIS search result issues **/
      filterResults = function(results) {
        // Each Facebook photo has a 'photo.jpg' and a 'photoinfo.xml' record.
        // We want to throw away the photo.jpg record, and keep only the photoinfo.xml,
        // BUT first, we want to copy the image + thumbnail paths from 'photo.jpg' to
        // 'photoinfo.xml'. (Savvy?)
        jQuery.each(results, function(idx, result) {
          var photoPath, photoRecord;

          if (result.title === 'photoinfo.xml') {
            photoPath = result.path.replace('photoinfo.xml', 'photo.jpg');
            photoRecord = findByProperty('path', results)(photoPath);
            result.title = false;
            if (photoRecord) {
              result.createdAt = photoRecord.createdAt;
              result.path = photoRecord.path;
              result.contentType = photoRecord.contentType;
              result.thumbnail = photoRecord.thumbnail;
            } else {
              // Most of the time, the photo won't actually be part of the results.
              // So we need to make a stab in the dark...
              result.path = photoPath;
              result.contentType = 'image-jpeg';
              result.thumbnail = photoPath;
            }
          }
        });

        // Throw out all unwanted records
        return jQuery.grep(results, function(result) {
          return UNWANTED_RECORDS.indexOf(result.title) === -1;
        });
      },

      /** Helper to create a normalized result array from raw API response **/
      processSearchResponse = function(hits) {
        var results = (function() {
              var unfilteredResults = hits.map(function(hit, index) {
                    var s = hit._source;

                    if (s.fulltext)
                      fullTextCorpus.append(s.fulltext);

                    return {
                      key: index,
                      title: s.filename,
                      createdAt: (s.document_creation_date) ? s.document_creation_date : s.backup_at,
                      createdBy: s.authorName,
                      thumbnail: s.thumbnail_path,
                      dataSource: s.backup_source_plugin_id.replace(/\./g, '-'),
                      contentType: s['Content-Type'].replace(/\.|\/|\+/g, '-'),
                      lat: parseFloat(s.location_latitude),
                      lon: parseFloat(s.location_longitude),
                      path: s.path,
                      _source: s
                    };
                  });

              return filterResults(unfilteredResults);
            })(),

            // Grouped by date
            resultsByDate = (function() {
              var grouped = {}, sorted = [], days;

              // Put them into a hash map first...
              jQuery.each(results, function(idx, result) {
                var dayCreated = (result.createdAt) - (result.createdAt % 86400000);
                if (dayCreated in grouped) {
                  grouped[dayCreated].push(result);
                } else {
                  grouped[dayCreated] = [ result ];
                }
              });

              // ... then create a sorted array with { date: ..., results: } pairs
              days = Object.keys(grouped);
              days.sort(function(a,b) { return b - a; });
              sorted = days.map(function(day) {
                return { date: parseInt(day), results: grouped[day] };
              });

              // this.dateflipper.set(new Date(parseInt(days[0])));

              return sorted;
            })(),

            // Grouped by coordinate
            resultsByCoordinate = (function() {
              var grouped = {}, asArray = [], coords;

              // Put them into a hash map first...
              jQuery.each(results, function(idx, result) {
                var coordHash = (result.lat && result.lon) ? result.lat + ',' + result.lon : false;
                if (coordHash) {
                  if (coordHash in grouped)
                    grouped[coordHash].push(result);
                  else
                    grouped[coordHash] = [ result ];
                }
              });

              // ... then create an with { lat: ..., lon: ..., results: } triples
              coords = Object.keys(grouped);
              asArray = coords.map(function(coord) {
                var latLon = coord.split(','),
                    results = grouped[coord];

                // Sort results for this coordinate by time
                results.sort(function(a,b) { return b.createdAt - a.createdAt; });

                return {
                  lat: parseFloat(latLon[0]),
                  lon: parseFloat(latLon[1]),
                  results: results
                };
              });

              return asArray;
            })();

        return {
          results: results,
          resultsByDate: resultsByDate,
          resultsByCoordinate: resultsByCoordinate
        };
      },

      getData = function(key) {
        return function() { return data[key]; };
      },

      getKeywords = function(result) {
        var text = result._source.fulltext;

        if (text)
          return TFIDF.compute(fullTextCorpus, new WordList(text), 3, 0.45);
        else
          return [];
      },

      /** Gest the first result older than a specific timestamp **/
      getFirstResultBefore = function(date) {
        var first;

        data.resultsByDate.some(function(tuple) {
          if (tuple.date <= date) {
            first = tuple.results[0];
            return true;
          } else {
            return false;
          }
        });

        return first;
      },

      findByProperty = function(key, opt_results) {
        return function(value) {
          var results = (opt_results) ? opt_results : data.results,
              result;

          results.some(function(r) {
            if (r[key] === value) {
              result = r;
              return true;
            } else {
              return false;
            }
          });
          return result;
        };
      };

  this.load = load;
  this.getFirstResultBefore = getFirstResultBefore;
  this.getResults = getData('results');
  this.getKeywords = getKeywords;
  this.getResultsByDate = getData('resultsByDate');
  this.getResultsByCoordinate = getData('resultsByCoordinate');
  this.findByKey = findByProperty('key');
  this.findByPath = findByProperty('path');

};

var ResultList = function(container, model) {

  var self = this,

      THUMBNAIL_PLACEHOLDER =
        'https://pbs.twimg.com/profile_images/1814515189/picard1_400x400.jpg',

      MONTH_NAMES =
        [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],

      listSectionHeadHeight = jQuery('.resultListSection h3').first().outerHeight(),

      formatDate = function(date) {
        var d = new Date(date);
        return MONTH_NAMES[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
      },

      createSection = function(results, date) {
        var html = '<div class="resultListSection" data-date="' + date + '">' +
                     '<h3>' + formatDate(date) + '</h3>' +
                     '<ul>',

            wrappedHTML;

        jQuery.each(results, function(idx, result) {
          var title = (result.title) ? result.title : '',

              thumbnail = // (result.thumbnail) ?
                // '<img class="thumbnail" src="' + result.thumbnail +'">' :
                '<div class="thumbnail"></div>',

              classes = 'resultContainer ' +
                result.key + ' ' +
                result.dataSource + ' ' +
                result.contentType,

              keywords = model.getKeywords(result).map(function(keyword) {
                return '<span>' + keyword.term + '</span>';
              }).join('');

          html +=
            '<li>' + // TODO bind click event
              '<div class="' + classes  + '" data-key="' + result.key + '">' + thumbnail +
              '<span class="title">' + title + '</span>' +
              '<div class="date created">' +
                '<span class="label">Erstellt: </span>' + formatDate(result.createdAt) +
              '</div>' +
              '<div class="keywords">' + keywords + '</div>' +
            '</div>' +
          '</li>';
        });

        html += '</ul></div>';
        wrappedHTML = jQuery(html);
        wrappedHTML.find('img').on('error', function(e) {
          // Fallback placeholder
          e.target.src = THUMBNAIL_PLACEHOLDER;
        });

        return wrappedHTML;
      },

      highlight = function(results) {
        jQuery('.resultContainer').removeClass('selected');

        if (results) {
          var selector = results.map(function(result) {
            return '.' + result.key;
          }).join(', ');
          jQuery(selector).addClass('selected');
        }
      },

      scrollTo = function(result) {
        var element = jQuery('.resultContainer.' + result.key);
        jQuery('html, body').animate({
          scrollTop: element.position().top - listSectionHeadHeight
        }, 500);
      },

      render = function() {
        jQuery.each(model.getResultsByDate(), function(idx, tuple) {
          container.append(createSection(tuple.results, tuple.date));
        });
      };

  container.on('click', '.resultContainer', function(e) {
    var target = jQuery(e.target).closest('.resultContainer');
    self.fireEvent('select', model.findByKey(target.data('key')));
  });

  this.render = render;
  this.highlight = highlight;
  this.scrollTo = scrollTo;

  HasEvents.apply(this);
};

ResultList.prototype = Object.create(ResultList.prototype);

var WordList = function(text) {

  var countWords = function(text, opt_bagToAppend) {
        var bag = (opt_bagToAppend) ? opt_bagToAppend : {},

            clean = function(str) {
              return str.replace(/\[|\.|,|\]|:|\"/g, '').trim();
            },

            tokens = text.replace(/(?:\r\n|\r|\n)/g, ' ').replace(/\t/g, ' ').split(' ');

        // Remove dates, numbers and strings of length < 2
        tokens = jQuery.grep(tokens, function(token) {
          var len = token.trim().length,
              date = new Date(token),
              number = parseFloat(token);

          return (len > 1) && (token.indexOf('http://') !== 0) &&
            (token.indexOf('https://') !== 0) && (token.indexOf('href=') !== 0) &&
            (isNaN(date.getTime())) && (isNaN(number));
        });

        jQuery.each(tokens, function(idx, token) {
          var word = clean(token),
              count = bag[word];
          if (count)
            bag[word] = count + 1;
          else
            bag[word] = 1;
        });

        return bag;
      },

      append = function(text) {
        countWords(text, wordList);
      },

      wordList = (text) ? countWords(text) : {};

  this.terms = wordList;
  this.append = append;

};


var TFIDF = {

  compute: function(corpus, document, opt_limit, opt_threshold) {
    var corpusTerms = corpus.terms,
        docTerms = document.terms,
        unsorted = {}, sorted = [],
        term, countInDocument, countInCorpus;

    for (term in docTerms) {
      if (docTerms.hasOwnProperty(term)) {
        countInDocument = docTerms[term];
        countInCorpus = corpusTerms[term]; // Can never be null; if it is let's crash - would mean bug!
        unsorted[term] = countInDocument / countInCorpus;
      }
    }

    for (term in unsorted) {
      if (unsorted.hasOwnProperty(term))
        sorted.push({ term: term, score: unsorted[term] });
    }

    sorted.sort(function(a, b) {
      return b.count - a.count;
    });

    if (opt_threshold)
      sorted = jQuery.grep(sorted, function(val) {
        return val.score >= opt_threshold;
      });

    if (opt_limit)
      return sorted.slice(0, opt_limit);
    else
      return sorted;
  }

};

var TimeHistogram = function(container, model) {

  var self = this,

      MONTH_NAMES =
        [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],

      now = new Date().getTime(),

      /** Gets the data from the model and converts to SimpleHistogram format **/
      convertData = function() {
        return model.getResultsByDate().map(function(tuple) {
          return { x: now - tuple.date, y: tuple.results.length };
        });
      },

      histogram = (function () {
        var h = new SimpleHistogram(container, {
              data: convertData(),
              bins:36,
              logScale: true,
              align: 'right',
              tooltip: function(xFrom, xTo, y) {
                var toDate = new Date(now - xFrom),
                    fromDate = new Date(now - xTo);

                return y + ' results from ' +
                  MONTH_NAMES[fromDate.getMonth()] + ' ' + fromDate.getDate() + ', ' +
                  fromDate.getFullYear() + ' to ' + MONTH_NAMES[toDate.getMonth()] + ' ' +
                  toDate.getDate() + ', ' + toDate.getFullYear();
              }
            });

        h.on('click', function(xFrom, xTo, y) {
          var fromDate = now - xTo,
              toDate = now - xFrom;

          self.fireEvent('select', { from: fromDate, to: toDate });
        });

        return h;
      })(),

      render = function() {
        histogram.setData(convertData());
        histogram.redraw();
      };

  this.render = render;

  HasEvents.apply(this);
};

TimeHistogram.prototype = Object.create(TimeHistogram.prototype);
