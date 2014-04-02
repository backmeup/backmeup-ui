var page_start = {
	config : null,

	constructor : function() {
		;
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 3);
		app.template.overwrite("#" + this.config.name, "JQueryMobilePageStructure");
		container.find('div[data-role=content]').append("test");
		container.find('div[data-role=content]').append(app.ni.text.text({
			"id" : "divUsername",
			"mini" : false,
			"placeholder" : "Username",
			"value" : "",
			"label" : true,
			"labelText" : "Benutzername",
			"disabled" : false,
			"container" : true,
			"classes" : [],
			"attibutes" : {
				"data-html5-username" : "value",
				"" : ""
			}
		}));
	},

	// set the jquery events
	setEvents : function(container) {
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {

		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {

		}
	}
};