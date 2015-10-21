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

var page_create_backup_1_oAuthFinished = {
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

		if (app.config.apacheCordova === true) {
			console.log("todo");
			app.store.localStorage.set("data-html5-oAuthQuery", app.store.localStorage.get("data-html5-oAuthQuery").split('&')[0]);
		} else {
			try {
				app.store.localStorage.set("data-html5-oAuthQuery", window.location.href.split('?')[1].split('&')[0]);
			} catch (e) {
				app.store.localStorage.set("data-html5-oAuthQuery", "");
			}
		}
		// alert("oauth token: " +
		// app.store.localStorage.get("data-html5-oAuthToken"));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("headline", "page.create_backup_1_oAuthFinished"),
			"styles" : {
				"clear" : "both"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("description", "page.create_backup_1_oAuthFinished")
		}));

		content.append(app.ni.text.text({
			"id" : "txtName",
			"placeholder" : app.lang.string("authdata_name", "labels"),
			"label" : true,
			"labelText" : app.lang.string("authdata_name", "labels"),
			"container" : true,
			"attributes" : {
				"value" : app.lang.string("new authentication", "page.create_backup") + ": " + app.store.localStorage.get("data-html5-pluginId")
			}
		}));

		content.append(app.ni.button.button({
			"id" : "btnCreateAuthData",
			"placeholder" : app.lang.string("create_authdata", "labels"),
			"label" : true,
			"labelText" : app.lang.string("create_authdata", "labels"),
			"container" : true,
			"value" : app.lang.string("create_authdata", "actions")
		}));

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
		$(page_create_backup_1_oAuthFinished.config.pageId).on("click", "#btnCreateAuthData", function(event) {
			var properties, storedProperties, promise;
			properties = {
				"oAuthQuery" : app.store.localStorage.get("data-html5-oAuthQuery")
			};
			storedProperties = app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"), "session_CreateSource");

			for ( var key in storedProperties) {
				properties[key] = storedProperties[key];
			}

			// alert(JSON.stringify(properties))

			promise = app.rc.getJson("createAuthdata", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"name" : $("#txtName").val(),
				"properties" : properties
			}, true);

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));
				app.store.localStorage.set("data-html5-authdataId", resultObject.id);
				app.help.navigation.redirect("create_backup_1_newSource.html", "slide");
			});

			promise.fail(function(error) {
				alert("ws error");
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

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
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

		// Triggered on the ���fromPage��� after the transition animation has
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

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};