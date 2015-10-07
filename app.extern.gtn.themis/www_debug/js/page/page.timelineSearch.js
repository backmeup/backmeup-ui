var page_timelineSearch = {
	config : null,
	include: null,
	include_once: null,

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
			"placeholder" : (app.store.localStorage.get("data-html5-themis-search-value")) ?
			  app.store.localStorage.get("data-html5-themis-search-value") :
				app.lang.string("search", "labels"),
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
		var resultGrid = app.ni.element.div({ "id" : "divStsResultGrid"});
    content.append(resultGrid);

		var sidebar = app.ni.element.div({ "id" : "divStsSidebar" });
		var map = app.ni.element.div({ "id" : "divStsMap" });
		sidebar.append(map);
		var histogram = app.ni.element.div({ "id" : "divStsHistogram" });
    sidebar.append(histogram);
		content.append(sidebar);
		
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
