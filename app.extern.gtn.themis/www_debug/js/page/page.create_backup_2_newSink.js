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

var page_create_backup_2_newSink = {
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

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		var promise, hasOptions = null, hasProperties = null;

		if (app.store.localStorage.get("data-html5-authrequired")) {
			promise = app.rc.getJson("getPluginOptions", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"authData" : app.store.localStorage.get("data-html5-authdataId"),
				"expandConfigs" : true
			}, true);
		} else {
			promise = app.rc.getJson("getPlugin", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"expandConfigs" : true
			}, true);
		}
		promise.done(function(resultObject) {

			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_2_newSink"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_2_newSink")
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSink",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				},
				"label" : false
			});

			if (resultObject.propertiesDescription != undefined) {
				if (resultObject.propertiesDescription.length > 0) {
					$.each(resultObject.propertiesDescription, function(key, value) {
						form.append(app.bmu.print.formElement(value, resultObject.pluginId));
					});
					hasProperties = true;
				} else {
					hasProperties = false;
				}
			}

			if (resultObject.availableOptions != undefined) {
				if (resultObject.availableOptions.length > 0) {
					var select = $(app.ni.select.multiple({
						"id" : "cboOptions",
						"name" : "options",
						"label" : true,
						"labelText" : app.lang.string("selectOptionsLabel", "page.create_backup_2_newSink"),
						"attributes" : {
							"data-native-menu" : false
						}
					}));
					select.append(app.ni.select.option({
						"text" : app.lang.string("selectOptions", "page.create_backup_2_newSink")
					}));
					$.each(resultObject.availableOptions, function(key, value) {
						select.append(app.ni.select.option({
							"text" : value,
							"attributes" : {
								"value" : value
							}
						}));
					});

					form.append(select);
					// defined by developer team: a sink profile has no options
					// hasOptions = true;
					hasOptions = false;
				} else {
					hasOptions = false;
				}
			}

			form.append(app.ni.button.button({
				"id" : "btnCreate",
				"placeholder" : app.lang.string("create_sink", "labels"),
				"label" : true,
				"labelText" : app.lang.string("create_sink", "labels"),
				"container" : true,
				"value" : app.lang.string("create_sink", "actions")
			}));

			if (hasProperties || hasOptions) {
				content.append(form);
				app.notify.loader.remove();
				app.help.jQM.enhance(content);
			} else {
				page_create_backup_2_newSink.createSinkProfile([], {});
			}
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

		return true;
	},

	createSinkProfile : function(options, properties) {
		if (app.store.localStorage.get("data-html5-authRequired")) {
			promise = app.rc.getJson("createSinkProfile", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"authData" : {
					"id" : app.store.localStorage.get("data-html5-authdataId")
				},
				"properties" : properties,
				"options" : options
			}, true);
		} else {
			promise = app.rc.getJson("createSinkProfile", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				// "authData" : 1,
				"properties" : properties,
				"options" : options
			}, true);
		}

		promise.done(function(resultObject) {
			// alert(JSON.stringify(resultObject));
			app.store.localStorage.set("data-html5-themis-sink-profileid", resultObject.profileId);
			app.notify.loader.remove();
			app.help.navigation.redirect("create_backup_3.html", "slide");
		});

		promise.fail(function() {
			alert("Quelle nicht angelegt. WS Error")
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


	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_2_newSink.config.pageId).on("click", "#btnCreate", function() {

			var formObject = app.help.form.serialize($("#frmCreateSink")), promise, options = Array();
			delete formObject.btnCreate;

			if (formObject.options != undefined) {
				options = formObject.options;
				delete formObject.options;

			}

			page_create_backup_2_newSink.createSinkProfile(options, formObject);

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