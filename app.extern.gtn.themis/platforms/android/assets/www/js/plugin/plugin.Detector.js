// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_Detector
 * 
 * @version 1.0
 * @namespace plugin_Detector
 */
var plugin_Detector = {
	config : null,
	cssClasses : [],
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
			if (app.detect.mobile.any())
				plugin_Detector.isMobileDevice();

			if (app.detect.desktop.any())
				plugin_Detector.isDesktop();
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
			var dfdCordovaDeviceReady = $.Deferred();
			var dfdJQueryMobileInit = $.Deferred();

			// resolve dfdCordovaDeviceReady on deviceready
			document.addEventListener("deviceready", function() {
				dfdCordovaDeviceReady.resolve();
			}, false);

			// resolve dfdJQueryMobileInit on mobileinit
			$(document).bind("mobileinit", function() {
				dfdJQueryMobileInit.resolve();
			});
			// alert(navigator.userAgent);
			// when both are ready
			$.when(dfdCordovaDeviceReady, dfdJQueryMobileInit).then(plugin_Detector.jQueryMobileAndCordovaLoaded);
			$.when(dfdCordovaDeviceReady).then(plugin_Detector.cordovaLoaded);
			$.when(dfdJQueryMobileInit).then(plugin_Detector.jQueryMobileLoaded);

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
			if (plugin_Detector.config.addCssClassesToBodyTag) {
				// add css classes
				// alert(JSON.stringify(app.detect.classes.array()));
				$.each(app.detect.classes.array(), function(key, name) {
					if (!$('body').hasClass(name))
						$('body').addClass(name);
				});
			}
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
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions
	jQueryMobileAndCordovaLoaded : function() {
		plugin_Detector.cssClasses.push("app-jQueryMobile-and-Cordova");
	},

	jQueryMobileLoaded : function() {
		plugin_Detector.cssClasses.push("app-jQueryMobile");
	},

	cordovaLoaded : function() {
		plugin_Detector.cssClasses.push("app-Cordova");
	},

	isDesktop : function() {
		plugin_Detector.cssClasses.push("app-desktop");
	},

	isMobileDevice : function() {
		plugin_Detector.cssClasses.push("app-mobile");
	},

	isIOsDevice : function() {
		plugin_Detector.cssClasses.push("app-ios");
	},

	isAndroidDevice : function() {
		plugin_Detector.cssClasses.push("app-android");
	},
	// public functions
	// called by user
	/**
	 * Public functions for plugin_Detector
	 * 
	 * @namespace plugin_Detector.functions
	 * 
	 */
	functions : {
		classes : {
			classNames : function() {
				var classes = "";
				$.each(plugin_Detector.cssClasses, function(key, name) {
					classes += name + " ";
				});
				return classes;
			},
			array : function() {
				return plugin_Detector.cssClasses;
			}
		},
		mobile : {
			Android : function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry : function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS : function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera : function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows : function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any : function() {
				return (app.detect.mobile.Android() || app.detect.mobile.BlackBerry() || app.detect.mobile.iOS() || app.detect.mobile.Opera() || app.detect.mobile.Windows());
			}
		},
		desktop : {
			Mac : function() {
				return navigator.userAgent.match(/Macintosh/i);
			},
			Windows : function() {
				return navigator.userAgent.match(/Windows/i);
			},
			any : function() {
				return app.detect.desktop.Mac() || app.detect.desktop.Windows();
			}
		},
		browser : {},
		media : {}
	}
};