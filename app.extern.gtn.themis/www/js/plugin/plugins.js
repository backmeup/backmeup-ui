/**
 * Plugin Manager
 * 
 * @version 1.0
 * @namespace
 */
var plugins = {
	config : null,
	pluginNames : [],
	constructor : function() {
		plugins.loadPluginConfig();
		if (!plugins.verifyPluginNames())
			alert("Fatal error: plugins.verifyPluginNames()");
		else if (!plugins.loadPlugins())
			alert("Fatal error: plugins.loadPlugins()");
		plugins.callPluginsLoadedEvent();
		plugins.callPluginEvents();
	},

	loadPluginConfig : function() {
		var success = null;
		var url = "../js/plugin/plugins.json";
		$.ajax({
			url : url,
			async : false,
			dataType : "json",
			success : function(json) {
				plugins.config = json;
				success = true;
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert("Fatal error in javascriptLoader.js: Can't load the plugins. Url: " + url + " Error: " + textStatus);
				success = false;
			}
		});
		return success;
	},

	verifyPluginNames : function() {
		return true;
	},

	loadPlugins : function() {
		var success = true;
		$.each(plugins.config, function(key, value) {
			if (value == true) {
				var min = "";
				if (app.config.min)
					min = "-min";
				var url = "../js/plugin/plugin." + key + min + ".js";
				$.ajax({
					url : url,
					async : false,
					dataType : "script",
					success : function(json) {
						if (window['plugin_' + key] == undefined) {
							alert("Fatal error: Plugin class is not defined: plugin_" + key);
							success = false;
							return;
						}

						try {
							window['plugin_' + key].config = JsonLoader("../js/plugin/plugin." + key + ".json");
							if (window['plugin_' + key].config.name == undefined) {
								alert("Fatal error: The property 'name' is not defined in JSON file: ../js/plugin." + key + ".json")
								return false;
							}
							if (window['plugin_' + key].config.shortname == undefined) {
								alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/plugin." + key + ".json")
								return false;
							}
						} catch (err) {
							alert("Fatal error: The plugin has no 'config' property: " + key);
							success = false;
							return;
						}

						try {
							window['plugin_' + key].constructor();
						} catch (err) {
							alert("Fatal error: The plugin has no constructor(): " + key);
							success = false;
							return;
						}

						try {
							app.addObject(window['plugin_' + key].config.name, window['plugin_' + key].functions);
							app.addObject(window['plugin_' + key].config.shortname, window['plugin_' + key].functions);
						} catch (err) {
							alert("Fatal error: The plugin has no functions{}: " + key);
							success = false;
							return;
						}

						plugins.pluginNames.push(key);
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert("Fatal Error: Can't load plugin: " + url);
					}
				});
			}
			if (!success)
				return false;
		});
		return success;
	},

	callPluginsLoadedEvent : function() {
		$.each(plugins.pluginNames, function(key, value) {
			try {
				window['plugin_' + value].pluginsLoaded();
			} catch (err) {
				alert("Notify: The plugin has no pluginsLoaded() event handler: plugin_" + value);
			}
		});
	},

	callPluginEvents : function() {
		$.each(plugins.pluginNames, function(key, value) {
			try {
				window['plugin_' + value].definePluginEvents();
			} catch (err) {
				app.debug.alert("Notify: The plugin has no definePluginEvents() method: plugin_" + value, 10);
			}
		});
	},
};

// constructor
plugins.constructor();