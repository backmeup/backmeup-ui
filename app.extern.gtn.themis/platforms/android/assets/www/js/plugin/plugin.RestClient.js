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
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			// load the webservice definitions
			$.each(plugin_RestClient.config.wsdFiles, function(path, loadFile) {
				if (loadFile) {
					var json = JsonLoader(path);
					// alert(JSON.stringify(json));
					$.each(json, function(name, values) {
						plugin_RestClient.config.webservices[name] = values;
					});
				}
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
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
			if (parameter != undefined) {
				$.each(parameter, function(key, value) {
					path = path.replace('{' + key + '}', value);
				});
			}
			var data = path.split('?')[1];
			if (data == undefined)
				data = "";
			var pathX = path.split('?')[0];
			var json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout);

			// add language wildcards
			if (plugin_MultilanguageIso639_3 != undefined) {
				if (json.language != undefined) {
					$.each(json.language, function(key, value) {
						app.lang.addParameter(key, value);
					});
				}
			}

			return json;
		}
	}
};
