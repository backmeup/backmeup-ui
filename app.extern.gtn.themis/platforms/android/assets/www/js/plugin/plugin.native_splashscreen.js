/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_splashscreen = {
	config : null,
	// called by plugins.js
	constructor : function() {
		
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};