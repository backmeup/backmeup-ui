var page_create_backup_2_newSink = {
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

		var promise = app.rc.getJson("getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
			"expandConfigs" : true
		}, true);

		promise.done(function(resultObject) {
			// alert(JSON.stringify(resultObject));
			// datasources
			content.append(app.ni.element.h1({
				"text" : app.lang.string("new_datasink", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSink",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				},
				"label" : false
			});

			form.append(app.ni.text.text({
				"id" : "txtTitle",
				"placeholder" : app.lang.string("title", "labels"),
				"label" : true,
				"labelText" : app.lang.string("title", "labels"),
				"container" : true
			}));
			if (resultObject.propertiesDescription != undefined) {
				$.each(resultObject.propertiesDescription, function(key, value) {
					switch (value.type.toLowerCase()) {
					case 'number':
						form.append(app.ni.text.number({
							"name" : value.name,
							"placeholder" : app.lang.string(value.label, resultObject.pluginId),
							"label" : true,
							"labelText" : app.lang.string(value.label, resultObject.pluginId),
							"container" : true
						}));
						break;
					case 'bool':
						form.append(app.ni.checkbox.checkbox({
							"name" : value.name,
							"placeholder" : app.lang.string(value.label, resultObject.pluginId),
							"label" : true,
							"labelText" : app.lang.string(value.label, resultObject.pluginId),
							"container" : true
						}));
						break;
					default:
						// alert("Unknown type:" + value.type.toLowerCase());
						break;
					}
				});
			}
			form.append(app.ni.button.button({
				"id" : "btnCreate",
				"placeholder" : app.lang.string("create_sink", "labels"),
				"label" : true,
				"labelText" : app.lang.string("create_sink", "labels"),
				"container" : true,
				"value" : app.lang.string("create_sink", "actions")
			}));

			content.append(form);
			$(".app-loader").remove();
			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

		return true;
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		try {

			$(page_create_backup_2_newSink.config.pageId).on("click", "#btnCreate", function() {

				var formObject = app.help.form.serialize($("#frmCreateSink")), promise;

				if (app.store.localStorage.get("data-html5-authRequired")) {
					promise = app.rc.getJson("createSinkProfile", {
						"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
						"title" : container.find("#txtTitle").val(),
						/*
						"authData" : {
							"id" : app.store.localStorage.get("data-html5-authdataId")
						},*/
						"properties" : formObject,
						"options" : [ "" ]
					}, true);
				} else {
					promise = app.rc.getJson("createSinkProfile", {
						"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
						"title" : container.find("#txtTitle").val(),
						// "authData" : 1,
						"properties" : formObject,
						"options" : [ "" ]
					}, true);
				}

				promise.done(function(resultObject) {
					alert(JSON.stringify(resultObject));
					app.store.localStorage.set("data-html5-themis-sink-profileid", resultObject.profileId);
					$(".app-loader").remove();
					app.help.navigation.redirect("create_backup_3.html");
				});

				promise.fail(function() {
					alert("Quelle nicht angelegt. WS Error")
				});
				/*
				 * app.template.append("div[data-role=content]",
				 * "app-loader-bubble"); var configType =
				 * app.store.localStorage.get("data-html5-configtype"); //
				 * alert(configType); configType = "output"; if (configType ==
				 * "output") { var promise = app.rc.getJson("createSinkProfile", {
				 * "pluginId" :
				 * app.store.localStorage.get("data-html5-themis-pluginid"),
				 * "title" : container.find("#txtTitle").val(),
				 * "configProperties" : {}, "options" : [ "" ] }, true);
				 * 
				 * promise.done(function(resultObject) { //
				 * alert(JSON.stringify(resultObject));
				 * app.store.localStorage.set("data-html5-themis-sink-profileid",
				 * resultObject.profileId); $(".app-loader").remove();
				 * app.help.navigation.redirect("create_backup_3.html"); });
				 * 
				 * promise.fail(function(error) { alert("webservice error: " +
				 * error); });
				 *  } else if (configType == "oauth") {
				 * 
				 * var promise = app.rc.getJson("createSourceProfile", {
				 * "pluginId" :
				 * app.store.localStorage.get("data-html5-themis-pluginId"),
				 * "title" : container.find("#txtTitle").val(),
				 * "configProperties" : { "token" :
				 * app.store.localStorage.get("data-html5-themis-oAuthToken") },
				 * "options" : [ "/Documents", "/Photos" ] }, true);
				 * 
				 * promise.done(function(resultObject) {
				 * $(".app-loader").remove();
				 * app.help.navigation.redirect("create_backup_3.html"); });
				 * 
				 * promise.fail(function(error) { alert("webservice error: " +
				 * error); }); }
				 */
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