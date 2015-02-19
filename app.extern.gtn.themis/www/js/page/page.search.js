/*
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * @author Martin Kattner <martin.kattner@gmail.com>
 */

var page_search = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		content.append(app.ni.element.h1({
			"text" : app.lang.string("search_in_backups", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmSearch",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtSearch",
			"placeholder" : (app.store.localStorage.get("data-html5-themis-search-value")) ? app.store.localStorage.get("data-html5-themis-search-value")
					: app.lang.string("search", "labels"),
			"label" : false,
			"labelText" : app.lang.string("search", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.a({
			"id" : "btnSearch",
			"text" : app.lang.string("search", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

		var searchResults = app.ni.element.div({
			"id" : "divSearchResults",
			"styles" : {
				"margin-top" : "15px",
				"border-top" : "1px solid #999"
			}
		});
		content.append(searchResults);

		if (app.store.localStorage.get("data-html5-themis-search-value") != null) {
			window.setTimeout(function() {
				page_search.updateSearchDiv(searchResults);
			}, 1000);
		}

	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(this.config.pageId).on("focus click", "#txtSearch", function(event) {
			$("#btnSearch").css("display", "block");
			if (app.store.localStorage.get("data-html5-themis-search-value") && $("#txtSearch").val() == "") {
				$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));
				this.select();
			}
		});

		$(this.config.pageId).on("submit", "#frmSearch", function(event) {
			event.preventDefault();
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

		$(this.config.pageId).on("click", "#btnSearch", function(event) {
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

	},

	singleResult : {
		getThumbnail : function(singleSearchResult) {
			if (singleSearchResult.thumbnailUrl != undefined) {
				return singleSearchResult.thumbnailUrl + "&accessToken=" + encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value));
			} else {
				return false;
			}
		},
		getResultUrl : function(singleSearchResult) {
			if (singleSearchResult.downloadUrl != undefined) {
				return singleSearchResult.downloadUrl + "&accessToken="
						+ encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value));
			} else {
				return false;
			}
		},
		getSearchDetails : function(singleSearchResult) {
			var div = app.ni.element.div({});
			if (page_search.singleResult.getResultUrl(singleSearchResult)) {
				div.append(app.ni.element.a({
					"text" : "Link zum Ergebnis",
					"attributes" : {
						"href" : "#",
						"onclick" : "javascript:window.open('" + page_search.singleResult.getResultUrl(singleSearchResult) + "','_blank', 'location=yes')"
					}
				}));
			}
			$.each(singleSearchResult, function(key, value) {
				if (typeof value === "object") {
					$.each(value, function(key, value) {
						div.append(app.ni.element.p({
							"text" : app.lang.string(key, "page.search") + ": " + value
						}));
					});
				} else {
					div.append(app.ni.element.p({
						"text" : app.lang.string(key, "page.search") + ": " + value
					}));
				}
			});
			return div;
		},
		openDetails : function(singleSearchResult) {

			// alert(JSON.stringify(singleSearchResult))
			app.notify.alert(page_search.singleResult.getSearchDetails(singleSearchResult), app.lang.string("searchDetails", "page.search"),
					singleSearchResult.title, app.lang.string("back", "actions"), function() {
					}, 50);

		}
	},

	updateSearchDiv : function(searchResults) {

		searchResults.empty();

		app.notify.loader.bubbleDiv(true, app.lang.string("loadingText", "page.search"), app.lang.string("loadingHeadline", "page.search"));

		var promise = app.rc.getJson("search", {
			// "userId" : 8,//
			// app.store.localStorage.get("data-html5-themis-username"),
			"query" : app.store.localStorage.get("data-html5-themis-search-value")
		}, true);

		promise.fail(function() {
			app.notify.alert(app.lang.string("search_error", "texts"), false, app.lang.string("search", "headlines"), app.lang.string("ok", "actions"));
		});

		promise.done(function(resultObject) {

			var list = $(app.template.get("listB", "responsive"));
			// alert(JSON.stringify(resultObject['files']));
			$.each(resultObject['files'], function(key, singleSearchResult) {
				var searchElement, textContainer;

				searchElement = app.ni.element.li();

				// image
				if (page_search.singleResult.getThumbnail(singleSearchResult)) {
					searchElement.append(app.ni.element.img({
						"attributes" : {
							"src" : page_search.singleResult.getThumbnail(singleSearchResult)
						}
					}));
				}

				textContainer = app.ni.element.div();

				// headline + link

				textContainer.append(

				app.ni.element.a({
					"attributes" : {
						"href" : "#",
						"onclick" : "page_search.singleResult.openDetails(" + JSON.stringify(singleSearchResult).split("\"").join("'") + ")"
					},
					"text" : app.ni.element.h2({
						"classes" : [ 'list-B-headline' ],
						"text" : singleSearchResult.title
					})

				}));

				textContainer.append(app.ni.element.p({
					"classes" : [ 'list-B-text' ],
					"text" : singleSearchResult.preview
				}));
				textContainer.append(app.ni.element.p({
					"classes" : [ 'list-B-status' ],
					"text" : app.ni.element.a({
						"text" : app.lang.string("jobName", "page.search") + ": " + singleSearchResult.jobName
					}) + " | " + app.ni.element.a({
						"text" : app.lang.string("timeStamp", "page.search") + ": " + date("F j, Y, g:i a", singleSearchResult.timeStamp / 1000)
					})
				}));
				searchElement.append(textContainer);
				list.append(searchElement);
			});

			searchResults.append(list);
		});
		promise.always(function() {
			app.notify.loader.remove();
		});
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};