var page_register = {
	config : null,

	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {

		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});

		var content = container.find('div[data-role=content]');

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("register", "headlines")
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("register", "texts"),
			"attributes" : {
				"id" : "pDescription"
			}
		}));

		content.append(app.ni.element.a({
			"id" : "btnLetsGo",
			"text" : app.lang.string("lets_go", "actions"),
			"classes" : [ "ui-btn" ],
			"attributes" : {
				"href" : "register_1_terms.html",
				"data-transition" : "slide"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},

	// set the jquery events
	setEvents : function(container) {
		$(document).on("swiperight", "#" + container.attr("id"), function(event) {
			app.help.navigation.redirect("static-index.html", "slide reverse");
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