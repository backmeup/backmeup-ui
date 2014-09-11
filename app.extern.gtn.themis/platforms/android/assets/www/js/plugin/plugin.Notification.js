// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_Notification
 * 
 * @version 1.0
 * @namespace plugin_Notification
 */
var plugin_Notification = {
	config : null,
	notifications : null,
	callbackFuntion : null,

	// called by plugins.js
	constructor : function() {

	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		if (plugin_Notification.config.enablePushNotifications)
			setTimeout(function() {
				alert(JSON.stringify(plugin_Notification.config.pushConfig));

				var promise = app.rc.getJson([ [ "licence.registerDevice", {
					"deviceId" : "aa",
					"subjectId" : "suRegisterDevice"
				} ], [ "licence.registerUser", {
					"userId" : "suRegisterUser",
					"email" : "aa",
					"password" : "aa",
					"firstname" : "aa",
					"lastname" : "aa",
					"subjectId" : "aa"
				} ] ], true);

				if (window.push != undefined)
					push.register(plugin_Notification.functions.push_onNotification, plugin_Notification.functions.push_successHandler, plugin_Notification.functions.push_errorHandler, plugin_Notification.config.pushConfig);
			}, 100);
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);

		try {

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);

		try {
			$(document).on('pageshow', '.app-page', function(event) {
				if (!plugin_Notification.notifications) {
					plugin_Notification.notifications = app.store.localStorage.getObject("popup_notifications");
				}
				// alert(JSON.stringify(plugin_Notification.notifications));
				app.store.localStorage.removeObject("popup_notifications");
				plugin_Notification.popupShow();
			});
			$(document).on("click", "#btnPopupAlert", function() {
				$("#popupAlert").popup("close");
				if (plugin_Notification.callbackFuntion) {
					plugin_Notification.callbackFuntion($("#popupAlert"));
					plugin_Notification.callbackFuntion == null;
				}
				plugin_Notification.popupShow();
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);

		try {
			// alert('insert popups');
			// alert($("body #popupDialog").length);
			$("body #popupDialog").remove();
			$("body #popupAlert").remove();
			// if (($("body #popupDialog").length == 0))
			app.template.append("#" + $(container).attr("id"), "JQueryMobilePopupDialog");
			// if (($("body #popupAlert").length == 0))
			app.template.append("#" + $(container).attr("id"), "JQueryMobilePopupAlert");

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);

		try {

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions
	popupShow : function(notification, delay) {
		// alert(JSON.stringify(plugin_Notification.notifications));
		if (delay == undefined || delay == null)
			delay = 300;
		if (notification != undefined) {
			setTimeout(function() {
				$("#popupAlert div[data-role=header] h1").text(notification.title);
				$("#popupAlert div.ui-content h3.ui-title").text(notification.headline);
				if (typeof notification.text == "object") {
					$("#popupAlert div.ui-content p").replaceWith(notification.text);
				} else {
					$("#popupAlert div.ui-content p").html(notification.text);
				}
				$("#popupAlert").popup("open");
				$("#popupAlert").popup("reposition");
			}, delay);
			plugin_Notification.callbackFuntion = notification.callback;
		} else {
			if (plugin_Notification.notifications != null) {
				if (Object.keys(plugin_Notification.notifications).length == 0)
					plugin_Notification.notifications = null;
				else {
					// todo more popups
					var notification = plugin_Notification.notifications['1'];
					// alert(JSON.stringify(notification));
					delete plugin_Notification.notifications['1'];
					setTimeout(function() {
						$("#popupAlert div[data-role=header] h1").text(notification.title);
						$("#popupAlert div.ui-content h3.ui-title").text(notification.headline);
						$("#popupAlert div.ui-content p").html(notification.text);
						$("#popupAlert").popup("open");
					}, delay);
				}
			}
		}
	},

	// public functions
	// called by user
	/**
	 * Public functions for plugin_Notification
	 * 
	 * @namespace plugin_Notification.functions
	 * 
	 */
	functions : {
		push_successHandler : function() {
			console.log('succesfull registered');
		},

		push_errorHandler : function(error) {
			console.error('error registering ' + error);
		},

		push_onNotification : function(event) {
			alert(event.alert);
		},
		alert : function(text, title, headline, callback, delay) {
			if (text == undefined)
				text = false;
			if (headline == undefined)
				headline = false;
			if (title == undefined)
				title = false;
			if (callback == undefined)
				callback = false;
			notification = {
				"type" : "alert",
				"text" : text,
				"title" : title,
				"headline" : headline,
				"callback" : callback
			};
			plugin_Notification.popupShow(notification, delay);
		},
		dialog : function(text, title) {
		},
		add : {
			alert : function(text, title, headline, callback) {
				if (text == undefined)
					text = false;
				if (headline == undefined)
					headline = false;
				if (title == undefined)
					title = false;
				if (callback == undefined)
					callback = false;
				if (!plugin_Notification.notifications)
					plugin_Notification.notifications = app.store.localStorage.getObject("popup_notifications");
				if (!plugin_Notification.notifications)
					plugin_Notification.notifications = {};
				var nextKey = Object.keys(plugin_Notification.notifications).length + 1;
				plugin_Notification.notifications[nextKey] = {
					"type" : "alert",
					"text" : text,
					"title" : title,
					"headline" : headline,
					"callback" : callback
				};
				app.store.localStorage.setObject("popup_notifications", plugin_Notification.notifications);
			}
		}

	}
};