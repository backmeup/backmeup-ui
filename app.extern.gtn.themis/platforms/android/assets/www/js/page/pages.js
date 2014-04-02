var pages = {
	config : null,
	pageNames : [],
	constructor : function() {
		pages.loadPageConfig();
		if (!pages.verifyPageNames())
			alert("Fatal error: pages.verifyPageNames()");
		else if (!pages.loadPages())
			alert("Fatal error: pages.loadPages()");
		else if (!pages.setEvents())
			alert("Fatal error: pages.setEvents()");
	},

	loadPageConfig : function() {
		var success = null;
		var url = "../js/page/pages.json";
		$.ajax({
			url : url,
			async : false,
			dataType : "json",
			success : function(json) {
				pages.config = json;
				success = true;
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert("Fatal error in pages.js: Can't load page. Url: " + url + " Error: " + textStatus);
				success = false;
			}
		});
		return success;
	},

	verifyPageNames : function() {
		return true;
	},

	loadPages : function() {
		var success = true;
		$.each(pages.config, function(key, value) {
			var url = "../js/page/page." + key + ".js";
			$.ajax({
				url : url,
				async : false,
				dataType : "script",
				success : function(json) {
					if (window['page_' + key] == undefined) {
						alert("Fatal error: Page class is not defined: page_" + key);
						success = false;
						return;
					}

					try {
						window['page_' + key].config = JsonLoader("../js/page/page." + key + ".json");
						if (window['page_' + key].config.name == undefined) {
							alert("Fatal error: The property 'name' is not defined in JSON file: ../js/page." + key + ".json")
							return false;
						}
						if (window['page_' + key].config.shortname == undefined) {
							alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/page." + key + ".json")
							return false;
						}
					} catch (err) {
						alert("Fatal error: The page has no 'config' property: " + key);
						success = false;
						return;
					}

					try {
						window['page_' + key].constructor();
					} catch (err) {
						alert("Fatal error: The page has no constructor(): " + key);
						success = false;
						return;
					}

					try {
						app.addObject(window['page_' + key].config.name, window['page_' + key].functions);
						app.addObject(window['page_' + key].config.shortname, window['page_' + key].functions);
					} catch (err) {
						alert("Fatal error: The plugin has no functions{}: " + key);
						success = false;
						return;
					}

					pages.pageNames.push(key);
				},
				error : function() {
					alert("Fatal Error: Can't load page: " + url);
					success = false;
				}
			});
			if (!success)
				return false;
		});
		// set the plugins' events for pages
		if (!pages.callPluginPageEventFunctions())
			success = false;
		return success;
	},

	// call plugins' page functions
	// is called only once
	// use delegates in plugins
	callPluginPageEventFunctions : function() {
		app.debug.alert("pages.callPluginPageEventFunctions()", 6);
		var success = true;
		$.each(plugins.pluginNames, function(key, value) {
			try {
				app.debug.alert("try to call: plugin_" + value + ".pageSpecificEvents()", 6);
				window['plugin_' + value].pageSpecificEvents();
			} catch (err) {
				alert("Fatal error: Cant invoke plugin_" + value + ".pageSpecificEvents(). Error: "+ err.message);
				success = false;
			}
			if (!success)
				return false;
		});
		return success;
	},

	// call plugins' page functions
	// by pagebeforecreate
	callPluginsPageFunctions : function(container) {
		app.debug.alert("pages.callPluginsPageFunctions()", 5);
		var success = true;
		$.each(plugins.pluginNames, function(key, value) {
			try {
				window['plugin_' + value].afterHtmlInjectedBeforePageComputing(container);
			} catch (err) {
				alert("Fatal error: Cant invoke plugin_" + value + ".afterHtmlInjectedBeforePageComputing(). Error: " + err.message);
				success = false;
			}
			if (!success)
				return false;
		});
		return success;
	},

	setEvents : function() {
		var success = true;

		// jQuery Mobile Events
		$(document).on('pagebeforecreate', function(event) {
			app.debug.alert("pagebeforecreate for each page)", 5);

		});

		// jquery Mobile Events for specific pages
		$(document).on('pagebeforechange', '.app-page', function(event) {
			app.debug.alert("pagebeforechange for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagebeforechange(event, $(this));
		});
		$(document).on('pagebeforecreate', '.app-page', function(event) {
			app.debug.alert("pagebeforecreate for: " + $(this).attr('id'), 5);
			app.debug.alert('Call: page_' + $(this).attr('id') + "events.pagebeforecreate()", 5);
			window['page_' + $(this).attr('id')].events.pagebeforecreate(event, $(this));
			app.debug.alert('Call: page_' + $(this).attr('id') + "creator()", 5);
			window['page_' + $(this).attr('id')].creator($(this));
			app.debug.alert('Call: page_' + $(this).attr('id') + "setEvents()", 5);
			window['page_' + $(this).attr('id')].setEvents($(this));

			// call plugins' page functions
			app.debug.alert('Call: pages.callPluginsPageFunctions()', 5);
			pages.callPluginsPageFunctions($(this));
		});
		$(document).on('pagebeforehide', '.app-page', function(event) {
			app.debug.alert("pagebeforehide for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagebeforehide(event, $(this));
		});

		$(document).on('pagebeforeload', '.app-page', function(event) {
			app.debug.alert("pagebeforeload for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagebeforeload(event, $(this));
		});
		$(document).on('pagebeforeshow', '.app-page', function(event) {
			app.debug.alert("pagebeforeshow for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagebeforeshow(event, $(this));
		});
		$(document).on('pagechange', '.app-page', function(event) {
			app.debug.alert("pagechange for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagechange(event, $(this));
		});

		$(document).on('pagechangefailed', '.app-page', function(event) {
			app.debug.alert("pagechangefailed for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagechangefailed(event, $(this));
		});
		$(document).on('pagecreate', '.app-page', function(event) {
			app.debug.alert("pagecreate for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagecreate(event, $(this));
		});
		$(document).on('pagehide', '.app-page', function(event) {
			app.debug.alert("pagehide for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pagehide(event, $(this));
		});

		$(document).on('pageinit', '.app-page', function(event) {
			app.debug.alert("pageinit for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pageinit(event, $(this));
		});
		$(document).on('pageload', '.app-page', function(event) {
			app.debug.alert("pageload for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pageload(event, $(this));
		});
		$(document).on('pageloadfailed', '.app-page', function(event) {
			app.debug.alert("pageloadfailed for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pageloadfailed(event, $(this));
		});

		$(document).on('pageremove', '.app-page', function(event) {
			app.debug.alert("pageremove for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pageremove(event, $(this));
		});
		$(document).on('pageshow', '.app-page', function(event) {
			app.debug.alert("pageshow for: " + $(this).attr('id'), 5);
			window['page_' + $(this).attr('id')].events.pageshow(event, $(this));
		});

		return success;
	}
};

pages.constructor();