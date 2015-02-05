var page_register_2_name = {
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
			"text" : app.lang.string("register_2_name", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmRegisterName",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtFirstname",
			"placeholder" : app.lang.string("firstname", "labels"),
			"label" : false,
			"labelText" : app.lang.string("firstname", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.text({
			"id" : "txtLastname",
			"placeholder" : app.lang.string("lastname", "labels"),
			"label" : false,
			"labelText" : app.lang.string("lastname", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.text({
			"id" : "txtUsername",
			"placeholder" : app.lang.string("username", "labels"),
			"label" : false,
			"labelText" : app.lang.string("username", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.p({
			"text" : app.lang.string("what_is_your_name", "texts"),
			"attributes" : {
				"id" : "pDescription"
			}
		}));

		form.append(app.ni.element.a({
			"id" : "btnContinue",
			"text" : app.lang.string("continue", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

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
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(document).on("swiperight", "#" + container.attr("id"), function(event) {
			app.help.navigation.redirect("register_1_terms.html", "slide reverse");
		});

		$(this.config.pageId).on(
				"focus blur keyup",
				"#txtFirstname, #txtLastname, #txtUsername",
				function(event) {
					if (!(app.help.validate.firstname(container.find("#txtFirstname").val())
							&& app.help.validate.lastname(container.find("#txtLastname").val()) && app.help.validate.username(container
							.find("#txtUsername").val()))) {
						container.find("#pDescription").css("display", "block");
						container.find("#btnContinue").css("display", "none");
						container.find("#pDescription").text(app.lang.string("bad_name", "texts"));
						container.find("#pDescription").addClass("error");
					} else {
						container.find("#pDescription").css("display", "none");
						container.find("#btnContinue").css("display", "block");
						container.find("#pDescription").removeClass("error");
					}
				});

		$(this.config.pageId).on(
				"click",
				"#btnContinue",
				function(event) {
					if (!(app.help.validate.firstname(container.find("#txtFirstname").val())
							&& app.help.validate.lastname(container.find("#txtLastname").val()) && app.help.validate.username(container
							.find("#txtUsername").val()))) {
						container.find("#pDescription").css("display", "block");
						container.find("#btnContinue").css("display", "none");
						container.find("#pDescription").text(app.lang.string("bad_name", "texts"));
						container.find("#pDescription").addClass("error");
					} else {
						app.help.navigation.redirect("register_3_credentials.html", "slide");
					}
				});
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

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			app.store.localStorage.pufferFormValues(container);
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
			app.store.localStorage.restorePufferedFormValues(container);
		}
	}
};