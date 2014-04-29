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
		else if (!pages.callPluginsPagesLoaded())
			alert("Fatal error: pages.callPluginsPagesLoaded()");
	},

	callPluginsPagesLoaded : function() {
		var success = null;
		$.each(plugins.pluginNames, function(key, value) {
			try {
				window['plugin_' + value].pagesLoaded();
				success = true;
				return;
			} catch (err) {
				alert("Fatal error: Cant call plugin_" + value + ".pagesLoaded()");
				success = false;
				return;
			}
		});
		return success;
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
		var success = true;

		$.each(plugins.pluginNames, function(key, value) {
			try {
				app.debug.alert("try to call: plugin_" + value + ".pageSpecificEvents()", 6);
				window['plugin_' + value].pageSpecificEvents();
			} catch (err) {
				alert("Fatal error: Cant invoke plugin_" + value + ".pageSpecificEvents(). Error: " + err.message);
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
		var success = true;
		// alert("plugin page functin");
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

		// jquery Mobile Events for specific pages
		$(document).on('pagebeforechange', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforechange for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagebeforechange(event, $(this));
			}
		});
		$(document).on('pagebeforecreate', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforecreate for: " + $(this).attr('id'), 5);
			// app.store.localStorage.log();
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file. You'll be redirected to the index.html page.");
				$(location).attr('href', "index.html");
			} else {
				if (plugin_WebServiceClient.config.useKeepAlive) {
					if (window['page_' + $(this).attr('id')].config.useKeepAlive != undefined) {
						if (window['page_' + $(this).attr('id')].config.useKeepAlive) {
							if (plugin_WebServiceClient.config.keepAlive.isAlive) {

								// try the GlobalPage plugin
								if (plugin_GlobalPage != undefined) {
									app.gp.pagebeforecreate(event, $(this));
								}
								// +++++++++++++++++++++++++++++++++++++++++++++

								/*

								setTimeout(function() {
								
									window['page_backup_jobs'].creator($(this));
									alert();
								}, 10000);

								*/

								window['page_' + $(this).attr('id')].events.pagebeforecreate(event, $(this));

								if (!window['page_' + $(this).attr('id')].creator($(this))) {
									alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".creator()");
								}
								if (!window['page_' + $(this).attr('id')].setEvents($(this))) {
									alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".setEvents()");
								}

								// call plugins' page functions
								app.debug.alert('Call: pages.callPluginsPageFunctions()', 5);
								if (!pages.callPluginsPageFunctions($(this)))
									alert("Fatal error in: pages.callPluginsPageFunctions()");

							} else {
								app.debug.alert("Can't load page because keepAlive failed. Check your connection. You'll be redirected to the index.html page.", 60);
								app.notify.add.alert(app.lang.string("bad_connection", "notifications"), app.lang.string("bad_connection", "headlines"), app.lang.string("bad_connection", "headlines"));
								app.store.localStorage.clearHtml5();
								$(document).off();
								$(location).attr('href', "index.html");
							}
						}

						else {
							// alert("no keep alive on page");

							// try the GlobalPage plugin
							if (plugin_GlobalPage != undefined) {
								app.gp.pagebeforecreate(event, $(this));
							}
							// +++++++++++++++++++++++++++++++++++++++++++++

							window['page_' + $(this).attr('id')].events.pagebeforecreate(event, $(this));
							if (!window['page_' + $(this).attr('id')].creator($(this))) {
								alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".creator()");
							}
							if (!window['page_' + $(this).attr('id')].setEvents($(this))) {
								alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".setEvents()");
							}
							// call plugins' page functions
							app.debug.alert('Call: pages.callPluginsPageFunctions()', 5);
							if (!pages.callPluginsPageFunctions($(this)))
								alert("Fatal error in: pages.callPluginsPageFunctions()");
						}
					} else {
						app.debug.alert("No useKeepAlive entry in your page_" + $(this).attr('id') + ".json. Please add it.", 60);

						// try the GlobalPage plugin
						if (plugin_GlobalPage != undefined) {
							app.gp.pagebeforecreate(event, $(this));
						}
						// +++++++++++++++++++++++++++++++++++++++++++++

						window['page_' + $(this).attr('id')].events.pagebeforecreate(event, $(this));
						if (!window['page_' + $(this).attr('id')].creator($(this))) {
							alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".creator()");
						}
						if (!window['page_' + $(this).attr('id')].setEvents($(this))) {
							alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".setEvents()");
						}

						// call plugins' page functions
						app.debug.alert('Call: pages.callPluginsPageFunctions()', 5);
						if (!pages.callPluginsPageFunctions($(this)))
							alert("Fatal error in: pages.callPluginsPageFunctions()");
					}
				} else {
					// alert("plugin keep alive false")
					// load the page and don't care about keep alive
					// 

					// try the GlobalPage plugin
					if (plugin_GlobalPage != undefined) {
						app.gp.pagebeforecreate(event, $(this));
					}
					// +++++++++++++++++++++++++++++++++++++++++++++

					window['page_' + $(this).attr('id')].events.pagebeforecreate(event, $(this));
					if (!window['page_' + $(this).attr('id')].creator($(this))) {
						alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".creator()");
					}
					if (!window['page_' + $(this).attr('id')].setEvents($(this))) {
						alert("Fatal error in: " + 'page_' + $(this).attr('id') + ".setEvents()");
					}

					// call plugins' page functions
					app.debug.alert('Call: pages.callPluginsPageFunctions()', 5);
					pages.callPluginsPageFunctions($(this));
				}
			}

		});
		$(document).on('pagebeforehide', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforehide for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagebeforehide(event, $(this));
			}
		});

		$(document).on('pagebeforeload', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforeload for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagebeforeload(event, $(this));
			}
		});
		$(document).on('pagebeforeshow', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforeshow for: " + $(this).attr('id'), 5);

			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagebeforeshow(event, $(this));
			}
		});
		$(document).on('pagechange', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagechange for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagechange(event, $(this));
			}
		});

		$(document).on('jQuery mobile event: pagechangefailed', '.app-page', function(event) {
			app.debug.alert("pagechangefailed for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagechangefailed(event, $(this));
			}
		});
		$(document).on('pagecreate', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagecreate for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagecreate(event, $(this));
			}
		});
		$(document).on('pagehide', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagehide for: " + $(this).attr('id'), 5);
			app.gp.pagehide(event, $(this));
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pagehide(event, $(this));
			}
		});

		$(document).on('pageinit', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageinit for: " + $(this).attr('id'), 5);
			app.gp.pageinit(event, $(this));
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pageinit(event, $(this));
			}
		});
		$(document).on('pageload', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageload for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pageload(event, $(this));
			}
		});
		$(document).on('pageloadfailed', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageloadfailed for: " + $(this).attr('id'), 5);
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pageloadfailed(event, $(this));
			}
		});

		$(document).on('pageremove', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageremove for: " + $(this).attr('id'), 5);
			app.gp.pageremove(event, $(this));
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pageremove(event, $(this));
			}
		});
		$(document).on('pageshow', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageshow for: " + $(this).attr('id'), 5);
			app.gp.pageshow(event, $(this));
			if (window['page_' + $(this).attr('id')] == undefined) {
				alert("Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file.");
				$(location).attr('href', "index.html");
			} else {
				window['page_' + $(this).attr('id')].events.pageshow(event, $(this));
			}
		});
		return success;
	}
};

pages.constructor();