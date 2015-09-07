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
		//this.elements.content.append("<h1>Hello World</h1>");
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