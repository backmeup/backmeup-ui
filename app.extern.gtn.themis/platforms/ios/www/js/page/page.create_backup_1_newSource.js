var page_create_backup_1_newSource = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);

	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		if (app.detect.isDesktop()) {
			var url = window.location.href;
			var error = /\?error=(.+)$/.exec(url);
			var access_token = /\?oauth_token=(.+)$/.exec(url);
			var code = /\?code=(.+)$/.exec(url);
			app.store.localStorage.set("data-html5-themis-oAuthCode", "unused");
			app.store.localStorage.set("data-html5-themis-oAuthToken", "unused");
			if (access_token) {
				var access_token = (access_token + "").split("=");
				access_token = access_token[1] + "";
				access_token = access_token.split("&");
				app.store.localStorage.set("data-html5-themis-oAuthToken", access_token[0]);
			} else if (code) {
				var code = (code + "").split("=");
				code = code[1] + "";
				code = code.split("&");
				// alert(code[0]);
				app.store.localStorage.set("data-html5-themis-oAuthCode", code[0]);
			} else if (error) {
				alert("oauth error" + error);
			}

		}
		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources
		content.append(app.ni.element.h1({
			"text" : app.lang.string("new_datasource", "headlines"),
			"styles" : {
				"clear" : "both"
			}
		}));
		content.append(app.ni.text.text({
			"id" : "txtTitle",
			"placeholder" : app.lang.string("title", "labels"),
			"label" : true,
			"labelText" : app.lang.string("title", "labels"),
			"container" : true
		}));
		content.append(app.ni.button.button({
			"id" : "btnCreate",
			"placeholder" : app.lang.string("create_source", "labels"),
			"label" : true,
			"labelText" : app.lang.string("create_source", "labels"),
			"container" : true,
			"value" : app.lang.string("create_source", "actions")
		}));
		return true;
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		try {
			$(container).on("click", "#btnCreate", function() {
				app.template.append("div[data-role=content]", "app-loader-bubble");
				var configType = app.store.localStorage.get("data-html5-configtype");
				// alert(configType);
				if (configType == "input") {
					var promise = app.rc.getJson("createSourceProfile", {
						"pluginId" : app.store.localStorage.get("data-html5-themis-pluginid"),
						"title" : container.find("#txtTitle").val(),
						"configProperties" : {
							"text" : "true",
							"image" : "true",
							"pdf" : "true",
							"binary" : "true"
						},
						"options" : [ "" ]
					}, true);

					promise.done(function(resultObject) {
						 alert(JSON.stringify(resultObject));
						app.store.localStorage.set("data-html5-themis-source-profileid", resultObject.profileId);
						$(".app-loader").remove();
						$(location).attr("href", "create_backup_2.html");
					});

					promise.fail(function(error) {
						alert("webservice error: " + error);
					});

				} else if (configType == "oauth") {

					var promise = app.rc.getJson("createSourceProfile", {
						"pluginId" : app.store.localStorage.get("data-html5-themis-pluginid"),
						"title" : container.find("#txtTitle").val(),
						"configProperties" : {
							"token" : app.store.localStorage.get("data-html5-themis-oAuthToken"),
							"code" : app.store.localStorage.get("data-html5-themis-oAuthCode"),
						},
						"options" : [ "/Documents", "/Photos" ]
					}, true);

					promise.done(function(resultObject) {
						$(".app-loader").remove();
						$(location).attr("href", "create_backup_2.html");
					});

					promise.fail(function(error) {
						alert("webservice error: " + error);
					});
				}

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