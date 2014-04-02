// data-html5-*
plugin_HTML5Storage = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
	},
	definePluginEvents : function() {
		// data-html5-<storage id>
		$("body").on("click", "a", function(event) {
			$.each($(this).attrs(), function(key, value) {
				if (key.substring(0, 11).trim().toLowerCase() == "data-html5-")
					plugin_HTML5Storage.functions.set(key.substring(11), value)
			});
		});
	},
	
	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},
	
	functions : {
		set : function(key, val) {
			app.debug.alert('plugin_HTML5Storage.set(' + key + ', ' + val + ')', 3);
			window.localStorage.setItem(key, val);
		},
		get : function(key) {
			app.debug.alert('plugin_HTML5Storage.get(' + key + ')', 3);
			window.localStorage.getItem(key);
		},
		clear : function() {
			window.localStorage.clear();
		},
		removeItem : function(key) {
			window.localStorage.removeItem(key);
		}
	}
};