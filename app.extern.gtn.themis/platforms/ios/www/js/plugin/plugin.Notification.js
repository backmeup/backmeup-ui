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
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
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
		var success = null;
		try {

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
		var success = null;
		try {
			// if (!($("#popupDialog").length > 0))
			app.template.append("#" + $(container).attr("id"), "JQueryMobilePopupDialog");
			app.template.append("#" + $(container).attr("id"), "JQueryMobilePopupAlert");
			// $(container).append(app.template.get("JQueryMobilePopupDialog"));
			// if (!($("#popupAlert").length > 0))
			// $(container).append(app.template.get("JQueryMobilePopupAlert"));
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
		var success = null;
		try {
			$(document).on('pageshow', '.app-page', function(event) {
				if (!plugin_Notification.notifications)
					plugin_Notification.notifications = app.store.localStorage.getObject("popup_notifications");
				app.store.localStorage.removeObject("popup_notifications");
				plugin_Notification.popupShow();
			});
			$(document).on("click", "#btnPopupAlert", function() {
				$("#popupAlert").popup("close");
				if (plugin_Notification.callbackFuntion) {
					plugin_Notification.callbackFuntion();
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
	// private functions
	popupShow : function(notification) {
		// alert(JSON.stringify(plugin_Notification.notifications['popup_notifications']));
		if (notification != undefined) {
			setTimeout(function() {
				$("#popupAlert div[data-role=header] h1").text(notification.title);
				$("#popupAlert div.ui-content h3.ui-title").text(notification.headline);
				$("#popupAlert div.ui-content p").text(notification.text);
				$("#popupAlert").popup("open");
				$("#popupAlert").popup("reposition");
			}, 300);
			plugin_Notification.callbackFuntion = notification.callback;
		} else {
			if (plugin_Notification.notifications != null) {
				if (Object.keys(plugin_Notification.notifications['popup_notifications']).length == 0)
					plugin_Notification.notifications = null;
				else {
					var firstKey = Object.keys(plugin_Notification.notifications['popup_notifications'])[0];
					// alert(firstKey);
					var notification = plugin_Notification.notifications['popup_notifications'][firstKey];
					// alert(JSON.stringify(notification));
					delete plugin_Notification.notifications['popup_notifications'][firstKey];
					setTimeout(function() {
						$("#popupAlert div[data-role=header] h1").text(notification.title);
						$("#popupAlert div.ui-content h3.ui-title").text(notification.headline);
						$("#popupAlert div.ui-content p").text(notification.text);
						$("#popupAlert").popup("open");
					}, 300);
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
		alert : function(text, title, headline, callback) {
			if (text == undefined)
				text = false;
			if (headline == undefined)
				headline = false;
			if (title == undefined)
				title = false;
			if (callback == undefined)
				callback = null;
			notification = {
				"type" : "alert",
				"text" : text,
				"title" : title,
				"headline" : headline,
				"callback" : callback
			};
			plugin_Notification.popupShow(notification);
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
					callback = null;
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