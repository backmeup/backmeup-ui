var page_create_backup_2_inputAuth = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);

	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.template.append("div[data-role=content]", "app-loader-bubble");

		var promise = app.rc.getJson("getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
			"expandConfigs" : true
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_2_inputAuth"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_2_inputAuth")
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSource",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				}
			});

			form.append(app.ni.text.text({
				"id" : "txtName",
				"name" : "title",
				"placeholder" : app.lang.string("title", "labels"),
				"label" : false,
				"labelText" : app.lang.string("title", "labels"),
				"container" : false
			}));
			if (resultObject.authDataDescription != undefined) {
				$.each(resultObject.authDataDescription.requiredInputs, function(key, value) {
					form.append(app.bmu.print.formElement(value, resultObject.pluginId));
				});
			}

			form.append(app.ni.button.button({
				"id" : "btnAuthenticate",
				"name" : "btnAuthenticate",
				"placeholder" : app.lang.string("create_authdata", "labels"),
				"label" : false,
				"labelText" : app.lang.string("create_authdata", "labels"),
				"container" : false,
				"value" : app.lang.string("create_authdata", "actions")
			}));

			content.append(form);
			$(".app-loader").remove();
			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_2_inputAuth.config.pageId).on("click", "#btnAuthenticate", function(event) {
			app.template.append("div[data-role=content]", "app-loader-bubble");
			var formObject = app.help.form.serialize($("#frmCreateSource")), promise;
			//alert(JSON.stringify(formObject));
			delete formObject.btnAuthenticate;
			delete formObject.title;
			

			promise = app.rc.getJson("createAuthdata", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"name" : container.find("#txtName").val(),
				"properties" : formObject
			}, true);

			promise.done(function(resultObject) {
				//alert(JSON.stringify(resultObject));
				// app.store.localStorage.set("data-html5-themis-source-profileid",
				// );
				app.store.localStorage.set("data-html5-authdataId", resultObject.id);
				app.store.localStorage.set("data-html5-authdataName", resultObject.name);
				$(".app-loader").remove();
				app.help.navigation.redirect("create_backup_2_newSink.html", "slide");
			});

			promise.fail(function() {
				alert(" WS Error...geht ned")
			});
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