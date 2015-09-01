var page_loginToken = {
	config : null,
	include: null,
	include_once: null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_loginToken.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	creator : function(container) {
		app.debug.trace("page_loginToken.creator()");
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
			"text" : app.lang.string("login token", "headlines")
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
			"placeholder" : app.lang.string("token", "labels"),
			"label" : false,
			"labelText" : app.lang.string("token", "labels"),
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
				"id" : "btnStart",
				"text" : app.lang.string("home page", "actions"),
				"attributes" : {
					"href" : "static-index.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext3' ]
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
				"text" : app.lang.string("register", "actions"),
				"attributes" : {
					"href" : "register.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},

	async : {
		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_loginToken.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_loginToken.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_loginToken.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_loginToken.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_loginToken.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_loginToken.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_loginToken.setEvents()");

	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_loginToken.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_loginToken.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_loginToken.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_loginToken.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_loginToken.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_loginToken.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_loginToken.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_loginToken.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_loginToken.pageshow()");
		}
	}
};