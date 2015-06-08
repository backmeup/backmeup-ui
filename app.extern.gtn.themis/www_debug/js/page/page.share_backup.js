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

		var promise = app.rc.getJson([ [ "ownedShares", {} ], [ "incomingShares", {} ], [ "getCollections", {} ] ], true);

		content.append(app.ni.element.h1({
			"text" : app.lang.string("share_backup", "headlines")
		}));

		promise.done(function(resultObject) {

			var incomingShares = resultObject["incomingShares"], ownedShares = resultObject["ownedShares"], collections = resultObject["getCollections"];

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my incoming shares", "headlines")
			}));

			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));

			$.each(incomingShares, function(index, incomingShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : "",
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", incomingShare.policyCreationDate / 1000),
					headline : (incomingShare.name != undefined) ? incomingShare.name : app.lang.string(incomingShare.policy, "page.share_backup"),
					text : (incomingShare.description != undefined) ? incomingShare.description : "no description for backup",
					classes : [ 'incoming-share' ],
					attributes : {
						"json" : JSON.stringify(incomingShare).split("\"").join("'"),
						"data-html5-themis-id" : incomingShare.id,
						"data-html5-themis-fromuserid" : incomingShare.fromUserID,
						"data-html5-themis-withuserid" : incomingShare.withUserID,
						"data-html5-themis-policy" : incomingShare.policy,
						"data-html5-themis-searchelementid" : incomingShare.sharedElementID,
						"data-html5-themis-policycreationdate" : incomingShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : incomingShare.numberOfSharedDocuments,
						"data-html5-themis-name" : incomingShare.name,
						"data-html5-themis-approvedBySharingpartner" : incomingShare.approvedBySharingpartner
					}
				}));
			});

			app.notify.loader.remove();
			content.append(list);
			content.append(app.ni.element.span({
				text : "&nbsp;",
				styles : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my owned shares", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(ownedShares, function(index, ownedShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : "",
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", ownedShare.policyCreationDate / 1000),
					headline : (ownedShare.name != undefined) ? ownedShare.name : app.lang.string(ownedShare.policy, "page.share_backup"),
					text : (ownedShare.description != undefined) ? ownedShare.description : "no description for backup",
					classes : [ 'owned-share' ],
					attributes : {
						"json" : JSON.stringify(ownedShare).split("\"").join("'"),
						"data-html5-themis-id" : ownedShare.id,
						"data-html5-themis-fromuserid" : ownedShare.fromUserID,
						"data-html5-themis-withuserid" : ownedShare.withUserID,
						"data-html5-themis-policy" : ownedShare.policy,
						"data-html5-themis-searchelementid" : ownedShare.sharedElementID,
						"data-html5-themis-policycreationdate" : ownedShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : ownedShare.numberOfSharedDocuments,
						"data-html5-themis-name" : ownedShare.name,
						"data-html5-themis-approvedBySharingpartner" : ownedShare.approvedBySharingpartner
					}
				}));
			});

			content.append(list);
			content.append(app.ni.element.span({
				text : "&nbsp;",
				styles : {
					"clear" : "both"
				}
			}));

			// collections
			content.append(app.ni.element.h2({
				"text" : app.lang.string("my collections", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));
			// alert(JSON.stringify(collections))
			$.each(collections, function(index, collection) {
				// alert(JSON.stringify(collection));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : "",
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", collection.collectionCreationDate / 1000),
					headline : (collection.name != undefined) ? collection.name : app.lang.string(collection.policy, "page.share_backup"),
					text : (collection.description != undefined) ? collection.description : "test test test",
					classes : [ 'collection' ],
					attributes : {
						"json" : JSON.stringify(collection).split("\"").join("'"),
						"data-html5-collectionId" : collection.collectionId
					}
				}));
			});

			content.append(list);
			content.append(app.ni.element.span({
				text : "&nbsp;",
				styles : {
					"clear" : "both"
				}
			}));

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

		$(this.config.pageId).on('click', '.owned-share', function(event) {
			var share = JSON.parse($(this).attr('json').split("'").join('"')), text = page_share_backup.functions.ownedShareOperatios(share);
			app.notify.alert(text, false, app.lang.string("share details", "page.share_backup"), app.lang.string("close details", "page.share_backup"), false, 50)

		});

		$(this.config.pageId).on('click', '.incoming-share', function(event) {
			var share = JSON.parse($(this).attr('json').split("'").join('"'));
			app.notify.alert(page_share_backup.functions.incomingShareOperatios(share), false, app.lang.string("share details", "page.share_backup"), app.lang.string("close details", "page.share_backup"), false, 50)
		});

		$(this.config.pageId).on('click', '.app-share-accept', function(event) {
			app.notify.close.all().done(function() {
				app.rc.getJson('approveIncomingShare', {
					policyID : app.store.localStorage.get("data-html5-themis-id")
				}, true).done(function() {
					alert("done");
				}).fail(function() {
					alert("fail");
				});
			});
		});

		$(this.config.pageId).on('click', '.app-share-decline', function(event) {
			app.notify.close.all().done(function() {
				app.rc.getJson('declineIncomingShare', {
					policyID : app.store.localStorage.get("data-html5-themis-id")
				}, true).done(function() {
					alert("done");
				}).fail(function() {
					alert("fail");
				});
			});
		});

		$(this.config.pageId).on('click', '.app-share-delete', function(event) {
			app.notify.close.all().done(function() {
				app.rc.getJson('deleteOwnShare', {
					policyID : app.store.localStorage.get("data-html5-themis-id")
				}, true).done(function() {
					alert("done");
				}).fail(function() {
					alert("fail");
				});
			});
		});

		$(this.config.pageId).on(
				'click',
				'.app-collection-share',
				function(event) {

					plugin_Notification.functions.dialog(page_search.singleResult.getSharingInputs(), false, app.lang.string("share collection", "page.share_backup"), app.lang.string("cancel", "page.share_backup"), app.lang.string(
							"share collection", "page.share_backup"), false, function() {
						app.rc.getJson("shareCollection", {
							withUserId : parseInt($("#txtShareUserId").val()),
							policyValue : app.store.localStorage.get("data-html5-collectionId"),
							name : $("#txtShareName").val(),
							description : $("#txtShareDescription").val()
						}, true).done(function() {
							alert("done")
						}).fail(function() {
							alert("fail")
						});
					}, 80);

				});

		$(this.config.pageId).on('click', '.collection', function(event) {
			var collection = JSON.parse($(this).attr('json').split("'").join('"'));
			// alert(JSON.stringify(collection));
			app.notify.alert(page_share_backup.functions.collectionOperations(collection), false, app.lang.string("collection details", "page.share_backup"), app.lang.string("close details", "page.share_backup"), false, 50)

		});

	},

	functions : {
		incomingShareOperatios : function(share) {
			var div = app.ni.element.div({});
			if (!share.approvedBySharingpartner) {
				div.append(app.ni.element.a({
					classes : [ 'ui-btn', 'ui-btn-inline', 'app-share-accept' ],
					text : app.lang.string("accept share", "page.share_backup")
				}));
			}

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-share-decline' ],
				text : app.lang.string("decline share", "page.share_backup")
			}));

			div.append(page_share_backup.functions.getShareDetails(share));
			return div;
		},

		ownedShareOperatios : function(share) {
			var div = app.ni.element.div({});

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-share-delete' ],
				text : app.lang.string("revoke share", "page.share_backup")
			}));

			div.append(page_share_backup.functions.getShareDetails(share));
			return div;
		},

		collectionOperations : function(collection) {
			var div = app.ni.element.div({});

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-collection-share' ],
				text : app.lang.string("share collection", "page.share_backup")
			}));

			div.append(page_share_backup.functions.getCollectionDetails(collection));
			return div;
		},

		getCollectionDetails : function(collection) {
			var div = app.ni.element.div({});
			$.each(collection, function(key, value) {
				div.append(app.ni.element.p({
					text : key + ": " + value
				}));
			});
			return div;
		},

		getShareDetails : function(share) {
			var div = app.ni.element.div({});
			$.each(share, function(key, value) {
				div.append(app.ni.element.p({
					text : key + ": " + value
				}));
			});
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