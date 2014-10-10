var page_create_backup_1 = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);

	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		app.template.append("div[data-role=content]", "app-loader-bubble");

		var promise = app.rc.getJson("getSources", {
			"expandProfiles" : true
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("new_datasource", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));
			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));
			$.each(resultObject, function(index, pluginJson) {
				// alert(JSON.stringify(pluginJson));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : pluginJson.imageURL,
					title : "Id: " + pluginJson.datasourceProfileId,
					headline : pluginJson.title,
					text : pluginJson.pluginName,
					classes : [ 'source', 'configtype-' + pluginJson.config.configType ],
					attributes : {
						"data-html5-oAuthUrl" : pluginJson.config.redirectURL,
						"data-html5-themis-pluginid" : pluginJson.pluginId,
						"data-html5-configType" : pluginJson.config.configType
					}
				}));
			});
			content.append(list);
			content.append(app.ni.element.h1({
				"text" : app.lang.string("existing_datasources", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));
			$(".app-loader").remove();

			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		try {
			$(document).on("click", ".configtype-input", function(event) {

				app.notify.dialog("Hier Stehen die vorhandenen Profile. Welches Webservice?", app.lang.string("choose_profile", "headlines"), app.lang.string("choose_profile", "headlines"), app.lang.string("new_source_profile", "actions"), app.lang.string("cancel", "actions"), function(popup) {
					window.setTimeout(function() {
						// $(this).attr("data-html5-oAuthUrl")
						$(location).attr("href", "create_backup_1_newSource.html");
					}, 10);
				}, function(popup) {
					;
				}, 0);
			});

			$(document).on("click", ".configtype-oauth", function(event) {
				// alert($(this).attr("data-html5-oAuthUrl"));
				// var url =
				// $(this).attr("data-html5-oAuthUrl").replace("http://localhost:9998/oauth_callback/",
				// "http://themis-dev01.backmeup.at/page/create_backup_1_newSource.html");

				var url = $(this).attr("data-html5-oAuthUrl").replace("http://localhost:9998/oauth_callback/", "http://themis-dev01.backmeup.at/page/create_backup_1_newSource.html");
				app.notify.dialog("Hier Stehen die vorhandenen Profile. Welches Webservice?", app.lang.string("choose_profile", "headlines"), app.lang.string("choose_profile", "headlines"), app.lang.string("new_source_profile", "actions"), app.lang.string("cancel", "actions"), function(popup) {
					window.setTimeout(function() {

						var promise = null;
						//alert(url);
						if (url.indexOf("dropbox") > -1)
							promise = app.oa.dropbox(url);
						else if (url.indexOf("facebook") > -1)
							promise = app.oa.facebook(url);
						else
							alert("undefined oAuth page");

						// app.store.localStorage.set("data-html5-themis-pluginid",
						// $(this).attr("data-html5-pluginId"));

						promise.done(function(accessToken) {
							// alert(accessToken);
							app.store.localStorage.set("data-html5-themis-oAuthToken", accessToken);
							$(location).attr("href", "create_backup_1_newSource.html");

						});

						promise.fail(function(error) {
							alert("oAuth error: " + error);
						});
					}, 10);
				}, function(popup) {
					;
				}, 0);

			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;

	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};