var plugin_HtmlTemplates = {
	config : null,
	// called by plugins.js
	constructor : function() {
	},
	pluginsLoaded : function() {
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