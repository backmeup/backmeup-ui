var page_login = {
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
		// content

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("login", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmLogin",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtUsername",
			"placeholder" : app.lang.string("username", "labels"),
			"label" : false,
			"labelText" : app.lang.string("username", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.password({
			"id" : "txtPassword",
			"placeholder" : app.lang.string("password", "labels"),
			"label" : false,
			"labelText" : app.lang.string("password", "labels"),
			"container" : false
		}));
		/*
		 * content.append(app.ni.checkbox({ "id" : "cbxSaveCedentials" }));
		 */
		form.append(app.ni.button.submit({
			"id" : "btnLogin",
			"value" : app.lang.string("login", "actions"),
			"classes" : [ 'ui-btn' ],
			"attributes" : {
				"href" : "#"
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
				"text" : app.lang.string("register", "actions"),
				"attributes" : {
					"href" : "register.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},

	// set the jquery events
	setEvents : function(container) {

		$(page_login.config.pageId).on(
				"submit",
				"#frmLogin",
				function(event) {
					app.debug.alert("page_" + page_register.config.name + " #btnRegister click", 25);
					event.preventDefault();
					if (!app.help.validate.username(container.find("#txtUsername").val())) {
						app.notify.alert(app.lang.string("error", "page.login"), false, app.lang.string("error_headline", "page.login"), app.lang.string(
								"error_button", "page.login"))
					} else if (!app.help.validate.password(container.find("#txtPassword").val())) {
						app.notify.alert(app.lang.string("error", "page.login"), false, app.lang.string("error_headline", "page.login"), app.lang.string(
								"error_button", "page.login"))
					} else {

						app.template.append("#btnLogin", "app-loader-bubble-inline-button");

						var promise = app.rc.getJson("authenticate", {
							"username" : container.find("#txtUsername").val(),
							"password" : encodeURIComponent(container.find("#txtPassword").val())
						}, true);

						promise.always(function() {
							container.find(".bubblingG-inline-button").remove();
						});

						promise.done(function(json) {
							if (json.accessToken != undefined) {
								// alert(JSON.stringify(json));
								app.store.localStorage.clearHtml5();
								app.sess.loggedIn(true);
								// app.store.localStorage.set("data-html5-themis-username",
								// container.find("#txtUsername").val());
								app.store.localStorage.set("themis-token", json.accessToken);
								app.help.navigation.redirect(app.config.startPage_loggedIn, "slideup");
							} else {
								alert("Benutzername oder Passwort falsch.");
							}
						});

						promise.fail(function(errorObject) {
							app.notify.alert(app.lang.string("error", "page.login"), app.lang.string("error_headline", "page.login"), false, app.lang.string(
									"error_button", "page.login"));
						});
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