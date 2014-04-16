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
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
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
			app.debug.alert("plugin_RestClient.functions.getJson(" + service + ", " + JSON.stringify(parameter) + ")", 20);
			var path = plugin_RestClient.config.webservices[service].url;
			$.each(parameter, function(key, value) {
				path = path.replace('{' + key + '}', value);
			});
			var data = path.split('?')[1];
			if (data == undefined)
				data = "";
			var pathX = path.split('?')[0];
			var json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout);
			return json;
		}
	}
};
