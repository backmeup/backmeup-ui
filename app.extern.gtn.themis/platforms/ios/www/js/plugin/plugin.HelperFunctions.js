// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_HelperFunctions
 * 
 * @version 1.0
 * @namespace plugin_HelperFunctions
 */
var plugin_HelperFunctions = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.log("Error in: ");
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.log("Error in: ");
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
			app.debug.log("Error in: ");
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
			app.debug.log("Error in: ");
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
			success = true;
		} catch (err) {
			app.debug.log("Error in: ");
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.log("Error in: ");
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_HelperFunctions
	 * 
	 * @namespace plugin_HelperFunctions.functions
	 * 
	 */
	functions : {
		validate : {
			email : function(email) {
				app.debug.alert("plugin_HelperFunctions.functions.validate.email(" + email + ")", 20);
				var success = null;
				var regex = new RegExp(plugin_HelperFunctions.config.validate.email, "g");
				if (regex.test(email)) {
					success = true;
				}
				return success;
			},
			password : function(p1, p2) {
				app.debug.alert("plugin_HelperFunctions.functions.validate.password(" + p1 + ", " + p2 + ")", 20);
				var success = null;
				var regex = new RegExp(plugin_HelperFunctions.config.validate.password, "g");
				if (p2 == undefined) {
					if (regex.test(p1)) {
						success = true;
					}
				} else {

					if (p1 != p2) {
						success = false;
					} else if (regex.test(p1)) {
						success = true;
					}
				}
				return success;
			}
		}
	}
};