/**
 * @author Martin Kattner <martin.kattner@gmail.com>
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

var page_create_backup_1 = {
	config : null,

	elements : null,

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

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		var promise = app.rc.getJson("getSources", {
			"expandConfigs" : false
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_1"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_1")
			}));
			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));
			$.each(resultObject, function(index, pluginJson) {
				// alert(JSON.stringify(pluginJson.authDataDescription.properties));
				var authRequired = null, authType = null, pluginId = pluginJson.pluginId, redirectUrl = null;
				// configuration type
				if (pluginJson.authDataDescription != undefined) {
					// needs to authenticate
					authRequired = true;
					authType = pluginJson.authDataDescription.configType;
					if (authType == "oauth") {
						redirectUrl = pluginJson.authDataDescription.redirectURL;
						app.sess.setObject(pluginId, pluginJson.authDataDescription.properties, "session_CreateSource");
					}
				} else {
					authRequired = false;
				}
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("source_" + pluginId),
					title : "",
					headline : pluginJson.title,
					text : pluginJson.description,
					classes : [ 'source', 'authRequired-' + authRequired ],
					attributes : {
						"data-html5-authRequired" : authRequired,
						"data-html5-oAuthUrl" : redirectUrl,
						"data-html5-pluginId" : pluginId,
						"data-html5-source-pluginId" : pluginId,
						"data-html5-authType" : authType,
						"data-html5-destinationType" : "source"
					}
				}));
			});
			content.append(list);

			app.notify.loader.remove();

			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_1.config.pageId).on("click", ".authRequired-false", function(event) {
			app.help.navigation.redirect("create_backup_1_newSource.html", "slide");
		});
		$(page_create_backup_1.config.pageId).on("click", ".authRequired-true", function(event) {
			var callerElement = $(this).clone(), promise;//, authDataList;
			// alert(callerElement.html());
			// get existing auths
			promise = app.rc.getJson("getAuthdataForPlugin", {
				"pluginId" : callerElement.attr("data-html5-pluginId")
			}, true);

			promise.fail(function() {
				alert("ws error");
			});

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));

				authDataList = app.ni.element.ul({
					"attributes" : {
						"data-role" : "listview",
						"data-inset" : "true"
					}
				});
				$.each(resultObject, function(key, currentAuthdata) {
					authDataList.append(app.ni.element.li({
						"text" : app.ni.element.a({
							"text" : currentAuthdata.name,
							"attributes" : {
								"href" : "create_backup_1_newSource.html",
								"data-transition" : "slide",
								"data-html5-authdataId" : currentAuthdata.id,
								"data-html5-authdataName" : currentAuthdata.name,
							},
							"classes" : []
						})
					}));

				});
				app.notify.dialog(authDataList, app.lang.string("choose_profile", "headlines"), false, app.lang.string("new_source_profile", "actions"), app.lang.string("cancel", "actions"), function(popup) {
					window.setTimeout(function() {
						switch (callerElement.attr("data-html5-authType")) {
						case 'oauth':
							var url = callerElement.attr("data-html5-oAuthUrl");
							// alert(url);
							var promise = null;
							// alert(url);
							promise = app.oa.generic(url);

							// app.store.localStorage.set("data-html5-themis-pluginid",
							// $(this).attr("data-html5-pluginId"));

							promise.done(function(oAuthQuery) {
								// alert(oAuthQuery);
								app.store.localStorage.set("data-html5-oAuthQuery", oAuthQuery);
								app.help.navigation.redirect("create_backup_1_oAuthFinished.html", "slide");

							});

							promise.fail(function(error) {
								alert("oAuth error: " + error);
							});

							break;

						case 'input':
							app.help.navigation.redirect("create_backup_1_inputAuth.html", "slide");
							break;
						default:
							alert("not implemented");
						}
					}, 10);
				}, function(popup) {
					;
				}, 100);
			});

		});

	},

	functions : {},

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