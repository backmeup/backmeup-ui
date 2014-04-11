/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
plugin_Informator = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		var success = null;
		// load the plugins' configuartion into html5 storage
		try {
			if (this.config.useHtml5Storage && this.config.savePluginConfig) {
				var global = {};
				$.each(plugins.pluginNames, function(key, value) {
					if (global["plugin_" + value] == undefined)
						global["plugin_" + value] = {};
					global["plugin_" + value]['config'] = JsonLoader("../js/plugin/plugin." + value + ".json");
				});
				this.loadConfigurationIntoHtml5Storage(global);
			}
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			if (this.config.useHtml5Storage && this.config.savePageConfig) {
				var global = {};
				$.each(pages.pageNames, function(key, value) {
					if (global["page_" + value] == undefined)
						global["page_" + value] = {};
					global["page_" + value]['config'] = JsonLoader("../js/page/page." + value + ".json");
				});
				this.loadConfigurationIntoHtml5Storage(global);
			}
			success = true;
		} catch (err) {
			success = false;
			app.debug.log("Error in: ");
		}
		return success;
	},

	definePluginEvents : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
		var success = null;
		try {
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
		var success = null;
		try {
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// private functions
	setDeep : function(el, key, value) {
		key = key.split('.');
		var i = 0, n = key.length;
		for (; i < n - 1; ++i) {
			el = el[key[i]];
		}
		return el[key[i]] = value;
	},

	getDeep : function(el, key) {
		key = key.split('.');
		var i = 0, n = key.length;
		for (; i < n; ++i) {
			el = el[key[i]];
		}
		return el;
	},

	loadConfigurationIntoHtml5Storage : function(configurationObject, start) {
		// 1: if property is in html5 storage then use this value
		// 2: else use property from json file
		var success = null;
		try {
			if (!configurationObject || configurationObject == undefined)
				return;
			if (start == undefined)
				start = '';
			$.each(configurationObject, function(key, value) {
				if (typeof value != "object") {
					// alert(app.store.localStorage.get("config" + start + "." +
					// key));
					if (app.store.localStorage.get("config" + start + "." + key) == undefined) {
						// load into html5 storage
						// alert("Into html5: " + "config" + start + "." + key);
						app.store.localStorage.set("config" + start + "." + key, value);
					} else {
						// load from html5 storage
						// alert("From html5: " + "config" + start + "." + key);
						app.store.loadValueIntoObject("config" + start + "." + key);
					}
				} else {
					// go recursive into object
					plugin_Informator.loadConfigurationIntoHtml5Storage(value, start + "." + key);
				}
			});
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	functions : {
		// auch direkt die datei �ndern
		set : function(key, value) {
			// change html5 storage
			app.store.localStorage.set("config." + key, value);
			// change property
			plugin_Informator.setDeep(window, key, value);
		}
	// data-info-URI

	}
};