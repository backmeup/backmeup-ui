/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_contacts = {
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
	functions : {

	}
};