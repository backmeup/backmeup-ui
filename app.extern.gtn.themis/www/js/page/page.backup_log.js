var page_backup_log = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);

			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

			var promise = app.rc.getJson("getBackupjob", {
				"jobId" : app.store.localStorage.get("data-html5-themis-backupid"),
				"expandUser" : false,
				"expandToken" : false,
				"expandProfiles" : false,
				"expandProtocol" : true
			}, true);

			promise.done(function(resultObject) {
				//alert(JSON.stringify(resultObject));

				content.append(app.ni.element.h1({
					"text" : app.lang.string("backup_log", "headlines")
				}));
				
				content.append(app.ni.element.a({
					"id" : "btnBackupDetails",
					"text" : app.lang.string("backup_edit", "actions"),
					"attributes" : {
						"href" : "backup_edit.html"
					},
					"classes" : [ 'ui-btn' ]
				}));
				
				app.notify.loader.remove();
				app.help.jQM.enhance(content);
			});

			promise.fail(function(error) {
				app.notify.loader.remove();
				alert("ws error: " + error);
			});

			success = true;
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