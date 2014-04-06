// data-html5-*
/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
plugin_HTML5Storage = {
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

	parseValue : function(value) {
		switch (value) {
		// is true?
		case "true":
			value = true;
			break;
		// is false?
		case "false":
			value = false;
			break;
		// is null?
		case "null":
			value = null;
			break;
		default:
			// is int?
			if (/^(\+|\-){0,1}([0-9])+$/.test(value)) {
				value = parseInt(value);
			}
			// is float?
			if (/^(\+|\-){0,1}([0-9])+(\.){1}([0-9])+$/.test(value)) {
				value = parseFloat(value);
			}
			break;
		}
		return value;
	},

	// public functions
	functions : {
		loadValueIntoObject : function(locator) {
			var propertyLocation = locator.substring("config.".length);
			var value = this.localStorage.get(locator);
			plugin_HTML5Storage.setDeep(window, propertyLocation, value);
		},

		localStorage : {
			set : function(key, val) {
				app.debug.alert('plugin_HTML5Storage.localStorage.set(' + key + ', ' + val + ')', 3);
				window.localStorage.setItem(app.config.name + "." + key, val);
			},
			get : function(key) {
				app.debug.alert('plugin_HTML5Storage.localStorage.get(' + key + ')', 3);
				return plugin_HTML5Storage.parseValue(window.localStorage.getItem(app.config.name + "." + key));
			},
			clear : function() {
				window.localStorage.clear();
			},
			removeItem : function(key) {
				window.localStorage.removeItem(app.config.name + "." + key);
			},
			show : function() {
				var string = '';
				$.each(window.localStorage, function(key, value) {
					// alert(key.substring(0, app.config.name.length));
					if (key.substring(0, app.config.name.length) == app.config.name)
						string += key.substring(app.config.name.length + 1) + " = " + value + "\n";
				});
				alert(string);
			}
		},
		sessionStorage : {
			set : function(key, val) {
				app.debug.alert('plugin_HTML5Storage.sessionStorage.set(' + key + ', ' + val + ')', 3);
				window.sessionStorage.setItem(key, val);
			},
			get : function(key) {
				app.debug.alert('plugin_HTML5Storage.sessionStorage.get(' + key + ')', 3);
				window.sessionStorage.getItem(key);
			},
			clear : function() {
				window.sessionStorage.clear();
			},
			removeItem : function(key) {
				window.sessionStorage.removeItem(key);
			},
			show : function() {

			}
		},
		ss : this.sessionStorage,
	}
};