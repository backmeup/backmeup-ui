//LoadExternalScripts
var plugin_LoadExternalScripts = {
	config : null,
	// called by plugins.js
	constructor : function() {
	},
	pluginsLoaded : function() {
		$.each(plugin_LoadExternalScripts.config.scripts.css, function(key, value) {
			if (value) {
				var cssLink = "<link rel='stylesheet' type='text/css' href='" + key + "'>";
				$("head").append(cssLink);
			}
		});
	},
	definePluginEvents : function() {
	},
	// called by pages.js
	// called for each page
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	// called once
	pageSpecificEvents : function() {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},
	// public
	// called by user
	functions : {

	}
};