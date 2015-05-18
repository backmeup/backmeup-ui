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

var page_share_backup = {
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

		var header = container.find('div[data-role=header]');
		var content = container.find('div[data-role=content]');
		var navPanel = container.find('div#nav-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		/*
		 * var promise = app.rc.getJson("getSuccessfulBackupjobs", { "expand" :
		 * "true" }, true);
		 */

		var promise = app.rc.getJson([ [ "ownedShares", {} ], [ "incomingShares", {} ] ], true);

		content.append(app.ni.element.h1({
			"text" : app.lang.string("share_backup", "headlines")
		}));

		promise.done(function(resultObject) {

			var incomingShares = resultObject["incomingShares"], ownedShares = resultObject["ownedShares"];

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my incoming shares", "headlines")
			}));

			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));

			$.each(incomingShares, function(index, incomingShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					imageSrc : "",
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", incomingShare.policyCreationDate / 1000),
					headline : (incomingShare.name != undefined) ? incomingShare.name : app.lang.string(incomingShare.policy, "page.share_backup"),
					text : (incomingShare.description != undefined) ? incomingShare.description : "no description for backup",
					classes : [ 'job' ],
					attributes : {
						"data-html5-themis-fromuserid" : incomingShare.fromUserID,
						"data-html5-themis-withuserid" : incomingShare.withUserID,
						"data-html5-themis-policy" : incomingShare.policy,
						"data-html5-themis-searchelementid" : incomingShare.sharedElementID,
						"data-html5-themis-policycreationdate" : incomingShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : incomingShare.numberOfSharedDocuments,
						"data-html5-themis-name" : incomingShare.name,
					}
				}));
			});

			app.notify.loader.remove();
			content.append(list);

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my owned shares", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(ownedShares, function(index, ownedShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					imageSrc : "",
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", ownedShare.policyCreationDate / 1000),
					headline : (ownedShare.name != undefined) ? ownedShare.name : app.lang.string(ownedShare.policy, "page.share_backup"),
					text : (ownedShare.description != undefined) ? ownedShare.description : "no description for backup",
					classes : [ 'job' ],
					attributes : {
						"data-html5-themis-fromuserid" : ownedShare.fromUserID,
						"data-html5-themis-withuserid" : ownedShare.withUserID,
						"data-html5-themis-policy" : ownedShare.policy,
						"data-html5-themis-searchelementid" : ownedShare.sharedElementID,
						"data-html5-themis-policycreationdate" : ownedShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : ownedShare.numberOfSharedDocuments,
						"data-html5-themis-name" : ownedShare.name,
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