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

		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		/*
		 * var promise = app.rc.getJson("getBackupjobsPaused", { "expand" :
		 * "true" }, true);
		 */

		var promise = app.rc.getJson([ [ "getBackupjobsActive", {
			"expand" : "true"
		} ], [ "getBackupjobsPaused", {
			"expand" : "true"
		} ], [ "getBackupjobsCreated", {
			"expand" : "true"
		} ], [ "getBackupjobsNeedUserInteraction", {
			"expand" : "true"
		} ] ], true, 3);

		promise
				.done(function(resultObject) {
					var activeBackupjobs = resultObject["getBackupjobsActive"], needUserInteraction = resultObject["getBackupjobsNeedUserInteraction"], pausedBackupjobs = resultObject["getBackupjobsPaused"], createdBackupjobs = resultObject["getBackupjobsCreated"];

					// alert(JSON.stringify(resultObject));
					content.append(app.ni.element.h1({
						"text" : app.lang.string("backup_jobs", "headlines")
					}));

					content.append(app.ni.element.a({
						"id" : "btnNewBackup",
						"text" : app.lang.string("create_backup", "actions"),
						"attributes" : {
							"href" : "create_backup_1.html"
						},
						"classes" : [ 'ui-btn', 'ui-btn-inline' ]
					}));

					content.append(app.ni.element.a({
						"id" : "btnShareAll",
						"text" : app.lang.string("share all", "page.backup_jobs"),
						"classes" : [ 'ui-btn', 'ui-btn-inline' ]
					}));

					content.append(app.ni.element.a({
						"id" : "btnShareAllFromNow",
						"text" : app.lang.string("share all from now", "page.backup_jobs"),
						"classes" : [ 'ui-btn', 'ui-btn-inline' ]
					}));

					content.append(app.ni.element.h2({
						"text" : app.lang.string("paused backup jobs", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					// alert(JSON.stringify(resultObject));
					var list = $(app.template.get("listA", "responsive"));
					$.each(pausedBackupjobs, function(index, jobJson) {
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : jobJson.jobStatus,
							headline : jobJson.jobTitle,
							text : "",
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});

					app.notify.loader.remove();
					content.append(list);

					content.append(app.ni.element.h2({
						"text" : app.lang.string("created backup jobs", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					list = $(app.template.get("listA", "responsive"));
					$.each(createdBackupjobs, function(index, jobJson) {
						// alert(JSON.stringify(jobJson));
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : "Id: " + jobJson.jobId,
							headline : jobJson.jobTitle,
							text : jobJson.jobTitle,
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});
					content.append(list);

					content.append(app.ni.element.h2({
						"text" : app.lang.string("active backup jobs", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					list = $(app.template.get("listA", "responsive"));
					$.each(activeBackupjobs, function(index, jobJson) {
						// alert(JSON.stringify(jobJson));
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : "Id: " + jobJson.jobId,
							headline : jobJson.jobTitle,
							text : jobJson.jobTitle,
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});
					content.append(list);

					content.append(app.ni.element.h2({
						"text" : app.lang.string("need user interaction", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					list = $(app.template.get("listA", "responsive"));
					$.each(needUserInteraction, function(index, jobJson) {
						// alert(JSON.stringify(jobJson));
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : "Id: " + jobJson.jobId,
							headline : jobJson.jobTitle,
							text : jobJson.jobTitle,
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});
					content.append(list);

					app.notify.loader.remove();
					app.help.jQM.enhance(content);
				});

		promise.fail(function(error) {
			app.notify.loader.remove();
			alert("ws error: " + error);
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

		$(page_backup_jobs.config.pageId).on("click", ".job", function(event) {
			var title = $(this).attr("data-html5-themis-backuptitle");
			app.notify.alert(page_backup_jobs.functions.getAlertContent(), title, false, app.lang.string("backup job alert - go back", "page.backup_jobs"), false, 10)
		});

		$(page_backup_jobs.config.pageId).on("click", "#btnBackupjobDetails", function(event) {
			app.nav.redirect("backup_edit.html", "none");
		});

		$(page_backup_jobs.config.pageId).on("click", "#btnSharBackupjob", function(event) {
			var title = app.store.localStorage.get("data-html5-themis-backuptitle");
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getSharingInputs(), title, false, app.lang.string("share backup", "page.backup_jobs"), app.lang.string("don't share item", "page.backup_jobs"), function() {
					// share item

					var webservice, start, end;

					if ($("#selFriend option:selected").hasClass("friend")) {
						alert("friend");
						webservice = "shareBackup";
					} else if ($("#selFriend option:selected").hasClass("heritage")) {
						webservice = "shareBackupHeritage";
					}

					start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
					end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

					app.rc.getJson(webservice, {
						withUserId : parseInt($("#selFriend option:selected").val()),
						name : $("#txtShareName").val(),
						policyValue : app.store.localStorage.get("data-html5-themis-backupid"),
						description : $("#txtShareDescription").val(),
						lifespanstart : start,
						lifespanend : end
					}, true).done(function() {
						alert("done")
					}).fail(function() {
						alert("fail")
					});
				}, function() {
					// don't share item
				}, 50);
			});
		});

		$(page_backup_jobs.config.pageId).on(
				"click",
				"#btnShareAllFromNow",
				function(event) {
					app.notify.close.all().done(
							function() {
								app.notify.dialog(page_search.singleResult.getSharingInputs(), app.lang.string("share all from now", "page.backup_jobs"), false, app.lang.string("share backup", "page.backup_jobs"), app.lang.string("don't share item",
										"page.backup_jobs"), function() {
									// share item

									var webservice;

									if ($("#selFriend option:selected").hasClass("friend"))
										webservice = "shareAllFromNow";
									else if ($("#selFriend option:selected").hasClass("heritage"))
										webservice = "shareAllFromNowHeritage";

									app.rc.getJson(webservice, {
										withUserId : parseInt($("#selFriend option:selected").val()),
										name : $("#txtShareName").val(),
										policyValue : "",
										description : $("#txtShareDescription").val()
									}, true).done(function() {
										alert("done")
									}).fail(function() {
										alert("fail")
									});
								}, function() {
									// don't share item
								}, 50);
							});
				});

		$(page_backup_jobs.config.pageId).on(
				"click",
				"#btnShareAll",
				function(event) {
					app.notify.close.all().done(
							function() {
								app.notify.dialog(page_search.singleResult.getSharingInputs(), app.lang.string("share all from now", "page.backup_jobs"), false, app.lang.string("share backup", "page.backup_jobs"), app.lang.string("don't share item",
										"page.backup_jobs"), function() {
									// share item
									var webservice, start, end;

									if ($("#selFriend option:selected").hasClass("friend"))
										webservice = "shareAll";
									else if ($("#selFriend option:selected").hasClass("heritage"))
										webservice = "shareAllHeritage";

									start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
									end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

									app.rc.getJson(webservice, {
										withUserId : parseInt($("#selFriend option:selected").val()),
										name : $("#txtShareName").val(),
										policyValue : "",
										description : $("#txtShareDescription").val(),
										lifespanstart : start,
										lifespanend : end
									}, true).done(function() {
										alert("done")
									}).fail(function() {
										alert("fail")
									});
								}, function() {
									// don't share item
								}, 50);
							});
				});

	},

	functions : {

		getAlertContent : function() {
			var div = app.ni.element.div({
				classes : [ 'job-alert-div' ]
			});

			div.append(app.ni.element.a({
				id : "btnBackupjobDetails",
				text : app.lang.string("backupjob details", "page.backup_jobs"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			div.append(app.ni.element.a({
				id : "btnSharBackupjob",
				text : app.lang.string("share backupjob", "page.backup_jobs"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			return div;
		}
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};