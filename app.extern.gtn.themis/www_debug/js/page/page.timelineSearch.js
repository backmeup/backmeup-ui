/**
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var page_timelineSearch = {

	config : null,
	include : null,
	include_once : null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_timelineSearch.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	creator : function(container) {
		app.debug.trace("page_timelineSearch.creator()");

		var content = $('div[data-role=content]');

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
			"placeholder" : (app.store.localStorage.get("data-html5-themis-timelinesearch-value")) ? app.store.localStorage.get("data-html5-themis-timelinesearch-value") : app.lang.string("search", "labels"),
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

		// Anchor elements for spatiotemporal result view
		var sidebar = app.ni.element.div({
			"id" : "divStsSidebar"
		});

		var map = app.ni.element.div({
			"id" : "divStsMap"
		});
		sidebar.append(map);

		var filterDropdown = app.ni.element.div({
			"id" : "divStsFilters"
		});
		sidebar.append(filterDropdown);

		var histogram = app.ni.element.div({
			"id" : "divStsHistogram"
		});
		sidebar.append(histogram);

		content.append(sidebar);

		var resultList = app.ni.element.div({
			"id" : "divStsResultList"
		});
		content.append(resultList);

		// Attach spatiotemporal UI to anchor elements
		this.spatioTemporalUI = new SpatioTemporalUI({
			resultList : resultList,
			map : map,
			timeHistogram : histogram,
			filters: filterDropdown,
			imagePath : '../ext/leaflet/images/',
			token : app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)
		});

		if (app.store.localStorage.get("data-html5-themis-timelinesearch-value") !== null) {
			window.setTimeout(function() {
				page_timelineSearch.update();
			}, 1000);
		}
	},

	async : {

		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_timelineSearch.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_timelineSearch.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_timelineSearch.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_timelineSearch.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_timelineSearch.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_timelineSearch.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_timelineSearch.setEvents()");

		// Scroll the fixed sidebar, up to position top=0
		jQuery(document).scroll(function() {
			var scrollTop = jQuery(window).scrollTop(), resultListTop = jQuery('#divStsResultList').offset().top;

			if (resultListTop > scrollTop)
				jQuery('#divStsSidebar').css('top', resultListTop - scrollTop);
			else
				jQuery('#divStsSidebar').css('top', 10);
		});

		jQuery(this.config.pageId).on('submit', '#frmSearch', function(e) {
			e.preventDefault();
			app.store.localStorage.set("data-html5-themis-timelinesearch-value", jQuery("#txtSearch").val());

			page_timelineSearch.update();
		});
	},

	update : function() {
		// TODO pagination - currently we just download the first 1.5k results
		app.rc.getJson('searchWithFilters', {
			query : app.store.localStorage.get('data-html5-themis-timelinesearch-value'),
			source : '',
			type : '',
			job : '',
			owner : '',
			tag : '',
			offset : 0,
			maxResults : 1500
		}, true).done(function(results) {
			this.spatioTemporalUI.update(results);
		}.bind(this));
	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_timelineSearch.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_timelineSearch.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_timelineSearch.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_timelineSearch.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_timelineSearch.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_timelineSearch.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_timelineSearch.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_timelineSearch.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_timelineSearch.pageshow()");
		}
	}
};
