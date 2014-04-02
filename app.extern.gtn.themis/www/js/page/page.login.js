var page_login = {
	config : null,

	constructor : function() {
		;
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 3);
		app.template.overwrite("#" + this.config.name, "JQueryMobilePageStructure");
		app.template.append("#" + this.config.name, "JQueryMobileNavigationPanel");
		var header = container.find('div[data-role=header]');
		var content = container.find('div[data-role=content]');
		var navPanel = container.find('div#nav-panel');
		
		// header
		header.append(plugin_HtmlTemplates.templates.themis.ThemisHeaderContent());
		// content
		content.append(app.ni.text.text({
			"id" : "txtUsername",
			"placeholder" : app.lang.string("username", "labels"),
			"label" : true,
			"labelText" : app.lang.string("username", "labels"),
			"container" : true
		}));
		content.append(app.ni.text.password({
			"id" : "txtPassword",
			"placeholder" : app.lang.string("password", "labels"),
			"label" : true,
			"labelText" : app.lang.string("password", "labels"),
			"container" : true
		}));
		/*
		 * content.append(app.ni.checkbox({ "id" : "cbxSaveCedentials" }));
		 */
		content.append(app.ni.button.button({
			"id" : "btnLogin",
			"placeholder" : app.lang.string("login", "labels"),
			"label" : true,
			"labelText" : app.lang.string("login", "labels"),
			"container" : true,
			"value" : app.lang.string("login", "actions")
		}));
		
		// nav-panel
		navPanel.append(plugin_HtmlTemplates.templates.themis.ThemisNavigationPanelContent());

	},

	// set the jquery events
	setEvents : function(container) {

		$(container).on("click", "#btnLogin", function() {
			app.debug.alert("#btnLogin click event", 5);
			app.trc.getJson("login", {
				"username" : container.find("#txtUsername").val(),
				"password" : container.find("#txtPassword").val()
			});
		});
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event) {
			app.debug.alert("", 3);
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event) {
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event) {
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event) {
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event) {
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event) {
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event) {
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event) {
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event) {
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event) {
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event) {
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event) {
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event) {
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event) {

		}
	}
};