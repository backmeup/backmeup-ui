plugin_GlobalSettings = {
	config : null,
	constructor : function() {

	},
	pluginsLoaded : function() {
		// load settings from html5 storage
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
	
	functions : {
		get : function(key) {
			return plugin_GlobalSettings.config['key'];
		},
		set : function(key, val) {
			plugin_GlobalSettings.config['key'] = val;
		}
	}
};