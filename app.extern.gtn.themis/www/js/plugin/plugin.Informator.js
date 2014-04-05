plugin_Informator = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		// load the plugin configuartion from json
		plugin_Informator.config['global'] = {};
		$.each(plugins.pluginNames, function(key, value) {
			plugin_Informator.config.global[value] = JsonLoader("../js/plugin/plugin." + value + ".json");
		});
		
		// direkt da rein laden
		this.loadConfigurationIntoHtml5Storage(this.config.global);
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

	// private functions
	loadConfigurationIntoHtml5Storage : function(configurationObject, start) {
		if (!configurationObject || configurationObject == undefined)
			return;
		if (start == undefined)
			start = '';
		$.each(configurationObject, function(key, value) {
			if (typeof value != "object")
				app.store.localStorage.set("config" + start + "." + key, value);
			else
				// alert(start + "." + key);
				plugin_Informator.loadConfigurationIntoHtml5Storage(value, start + "." + key);
		});
	},

	functions : {
		showPluginConfiguration : function(pluginName) {
			if (pluginName == undefined)
				return JSON.stringify(plugin_Informator.config.global, null, 4);
			else
				return JSON.stringify(plugin_Informator.config.global[pluginName], null, 4);
		},
		
		// uch direkt die datei Šndern
		set : function(key, value) {
		}
	// data-info-URI

	}
};