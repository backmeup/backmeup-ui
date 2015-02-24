/*
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * @author Martin Kattner <martin.kattner@gmail.com>
 */

var page_backup_jobs = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);

			var header = $('div[data-role=header]');
			var content = $('div[data-role=content]');
			var navPanel = $('div#nav-panel');
			var pagePanel = $('div#page-panel');

			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

			/*
			 * var promise = app.rc.getJson("getSuccessfulBackupjobs", {
			 * "expand" : "true" }, true);
			 */

			var promise = app.rc.getJson([ [ "getRunningBackupjobs", {
				"expand" : "true"
			} ], [ "getSuccessfulBackupjobs", {
				"expand" : "true"
			} ], [ "getQueuedBackupjobs", {
				"expand" : "true"
			} ] ], true, 3);

			promise
					.done(function(resultObject) {

						var runningBackupjobs = resultObject["getRunningBackupjobs"], successfulBackupjobs = resultObject["getSuccessfulBackupjobs"], queuedBackupjobs = resultObject["getQueuedBackupjobs"];

						//alert(JSON.stringify(resultObject));
						content.append(app.ni.element.h1({
							"text" : app.lang.string("backup_jobs", "headlines")
						}));

						content.append(app.ni.element.a({
							"id" : "btnNewBackup",
							"text" : app.lang.string("create_backup", "actions"),
							"attributes" : {
								"href" : "create_backup_1.html"
							},
							"classes" : [ 'ui-btn' ]
						}));

						content.append(app.ni.element.h2({
							"text" : app.lang.string("backup_jobs_successful", "headlines"),
							"styles" : {
								"clear" : "both"
							}
						}));

						// alert(JSON.stringify(resultObject));
						var list = $(app.template.get("listA", "responsive"));
						$.each(successfulBackupjobs, function(index, jobJson) {
							list.append(app.ni.list.thumbnail({
								href : "backup_edit.html",
								imageSrc : app.img.getUrlById("org.backmeup.storage" + "Large"),
								title : "",
								headline : jobJson.jobTitle,
								text : "",
								classes : [ 'job' ],
								attributes : {
									"data-html5-themis-backupid" : jobJson.jobId
								}
							}));
						});
						app.notify.loader.remove();
						content.append(list);

						content.append(app.ni.element.h2({
							"text" : app.lang.string("backup_jobs_queued", "headlines"),
							"styles" : {
								"clear" : "both"
							}
						}));

						list = $(app.template.get("listA", "responsive"));
						$.each(queuedBackupjobs, function(index, jobJson) {
							// alert(JSON.stringify(jobJson));
							list.append(app.ni.list.thumbnail({
								href : "backup_edit.html",
								imageSrc : app.img.getUrlById("org.backmeup.storage" + "Large"),
								title : "Id: " + jobJson.jobId,
								headline : jobJson.jobTitle,
								text : jobJson.jobTitle,
								classes : [ 'job' ],
								attributes : {
									"data-html5-themis-backupid" : jobJson.jobId
								}
							}));
						});
						app.notify.loader.remove();
						content.append(list);

						content.append(app.ni.element.h2({
							"text" : app.lang.string("backup_jobs_running", "headlines"),
							"styles" : {
								"clear" : "both"
							}
						}));

						list = $(app.template.get("listA", "responsive"));
						$.each(runningBackupjobs, function(index, jobJson) {
							// alert(JSON.stringify(jobJson));
							list.append(app.ni.list.thumbnail({
								href : "backup_edit.html",
								imageSrc : app.img.getUrlById("org.backmeup.storage" + "Large"),
								title : "Id: " + jobJson.jobId,
								headline : jobJson.jobTitle,
								text : jobJson.jobTitle,
								classes : [ 'job' ],
								attributes : {
									"data-html5-themis-backupid" : jobJson.jobId
								}
							}));
						});
						app.notify.loader.remove();
						content.append(list);
						app.notify.loader.remove();
						app.help.jQM.enhance(content);
					});

			promise.fail(function(error) {
				app.notify.loader.remove();
				alert("ws error: " + error);
			});

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

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