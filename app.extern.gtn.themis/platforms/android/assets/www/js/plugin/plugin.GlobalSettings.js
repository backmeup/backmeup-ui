//plugin_GlobalSettings
/**
 * Plugin:

 * 
 * @version 1.0
 * @namespace plugin_GlobalSettings
 */
var plugin_GlobalSettings = {
	config : null,
	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		// load settings from html5 storage
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	definePluginEvents : function() {
	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},
	/**
	 * @namespace plugin_GlobalSettings.functions
	 */
	functions : {
		get : function(key) {
			return plugin_GlobalSettings.config['key'];
		},
		set : function(key, val) {
			plugin_GlobalSettings.config['key'] = val;
		}
	}
};