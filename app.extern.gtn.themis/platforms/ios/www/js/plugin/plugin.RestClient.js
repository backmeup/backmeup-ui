/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
plugin_RestClient = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
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
		getJson : function(service, parameter) {
			app.debug.alert("plugin_RestClient.functions.getJson()", 5);
			alert("stop: implementieren");
			var url = plugin_RestClient.config.url;
			var path = plugin_RestClient.config.webservices[service];

			path = path.replace("{BACKMEUP}", url);
			$.each(parameter, function(key, value) {
				path = path.replace('{' + key + '}', value);
			});
			app.debug.alert("Webservice Uri: " + path, 5);
			var json = app.wsc.getJson(path.split('?')[0], path.split('?')[1]);
			return json;
		}
	}
};