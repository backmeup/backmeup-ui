var page_startToken = {
	config : null,
	include : null,
	include_once : null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_startToken.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	creator : function(container) {
		app.debug.trace("page_startToken.creator()");
		var content = container.find('div[data-role=content]');
		content.append("<h1>Erbe holen</h1>");

		content.append(app.ni.element.a({
			id : "btnDeadManSwitch",
			text : "Erbe holen",
			classes : [ 'ui-btn', 'ui-btn-inline' ]
		}));

	},

	async : {
		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_startToken.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_startToken.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_startToken.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_startToken.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_startToken.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_startToken.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_startToken.setEvents()");
		$(this.config.pageId).on('click', '#btnDeadManSwitch', function() {
			app.rc.getJson("deadManSwitch", {}, true).done(function() {
				alert("done");
			}).fail(function() {
				alert("fail");
			}).always()
		});
	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_startToken.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_startToken.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_startToken.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_startToken.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_startToken.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_startToken.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_startToken.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_startToken.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_startToken.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_startToken.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_startToken.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_startToken.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_startToken.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_startToken.pageshow()");
		}
	}
};