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

var page_create_backup_3 = {
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
		content.append(app.ni.element.h1({
			"text" : app.lang.string("headline", "page.create_backup_3"),
			"styles" : {
				"clear" : "both"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("description", "page.create_backup_3")
		}));

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));
		var promiseSink, promiseSource;

		promiseSource = app.rc.getJson([ [ "getPluginConfiguration", {
			"pluginId" : app.store.localStorage.get("data-html5-source-pluginId"),
			"configId" : app.store.localStorage.get("data-html5-themis-source-profileid"),
			"expandConfigs" : true
		} ], [ "getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-source-pluginId"),
			"expandConfigs" : true
		} ] ], true);

		promiseSink = app.rc.getJson([ [ "getPluginConfiguration", {
			"pluginId" : app.store.localStorage.get("data-html5-sink-pluginId"),
			"configId" : app.store.localStorage.get("data-html5-themis-sink-profileid"),
			"expandConfigs" : true
		} ], [ "getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-sink-pluginId"),
			"expandConfigs" : true
		} ] ], true);

		$.when(promiseSource, promiseSink).done(function(sourceResult, sinkResult) {
			// alert(sourceResult.getPlugin.title)

			content.append(app.ni.element.h2({
				"text" : app.lang.string("chosen_datasource", "headlines")
			}));

			content.append(app.ni.element.p({
				"text" : sourceResult.getPlugin.title + " - " // +
				// sourceResult.getPluginConfiguration.authData.name
			}));

			content.append(app.ni.element.h2({
				"text" : app.lang.string("chosen_datasink", "headlines")
			}));

			content.append(app.ni.element.p({
				"text" : sinkResult.getPlugin.title + " - " // +
				// sinkResult.getPluginConfiguration.authData.name
			}));

			content.append(app.ni.element.h2({
				"text" : app.lang.string("job_settings", "headlines")
			}));

			content.append(app.ni.text.text({
				"id" : "txtTitle",
				"placeholder" : app.lang.string("job_title", "labels"),
				"label" : true,
				"labelText" : app.lang.string("job_title", "labels"),
				"container" : true
			}));

			var scheduleArray = [ 'ONCE', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY' ];

			var select = app.ni.select.single({
				id : "selSchedule"
			});

			$.each(scheduleArray, function(index, singleSchedule) {
				select.append(app.ni.select.option({
					text : app.lang.string("schedule backup " + singleSchedule, "create backup"),
					value : singleSchedule
				}));
			});

			content.append(select);

			content.append(app.ni.button.button({
				"id" : "btnCreateBackup",
				"placeholder" : app.lang.string("create_backup", "labels"),
				"label" : true,
				"labelText" : app.lang.string("create_backup", "labels"),
				"container" : true,
				"value" : app.lang.string("create_backup", "actions")
			}));

			app.notify.loader.remove();

			app.help.jQM.enhance(content);
		});
		$.when(promiseSource, promiseSource).fail(function() {
			alert('ws error ');
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

		$(container).on("click", "#btnCreateBackup", function() {
			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));
			var promise = app.rc.getJson("createBackupjob", {
				"jobTitle" : container.find("#txtTitle").val(),
				"schedule" : $('#selSchedule').val(),
				"start" : Date.now(),
				"source" : app.store.localStorage.get("data-html5-themis-source-profileid"),
				"actions" : [],
				"sink" : app.store.localStorage.get("data-html5-themis-sink-profileid")
			}, true);

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));
				app.notify.loader.remove();
				app.store.localStorage.clearHtml5();
				app.help.navigation.redirect("backup_jobs.html", "slide");
			});

			promise.fail(function(error) {
				alert("webservice error: " + error);
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