// data-html5-*
/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_HTML5Storage = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
	},

	definePluginEvents : function() {
		// data-html5-<storage id>
		$("body").on("click", "a", function(event) {
			$.each($(this).attrs(), function(key, value) {
				if (key.substring(0, 11).trim().toLowerCase() == "data-html5-") {
					app.debug.alert("Set html5 data from LINK to localStorage.\n" + key + " = " + value, 60);
					plugin_HTML5Storage.functions.localStorage.set(key, value);
				}
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

	setDeepX : function(el, key, value) {
		keyS = key.split('.');
		if (keyS[0]) {
			if (keyS.length == 1)
				el[keyS[0]] = value;
			else {
				if (el[keyS[0]] == undefined)
					el[keyS[0]] = {};
				el[keyS[0]] = this.setDeepX(el[keyS[0]], key.substr(keyS[0].length + 1), value);
			}
		}
		return el;
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
				app.debug.alert('plugin_HTML5Storage.localStorage.set(' + key + ', ' + val + ')', 1);
				window.localStorage.setItem(app.config.name + "." + key, val);
				return true;
			},
			get : function(key) {
				app.debug.alert('plugin_HTML5Storage.localStorage.get(' + key + ')', 3);
				return plugin_HTML5Storage.parseValue(window.localStorage.getItem(app.config.name + "." + key));
			},
			clear : function() {
				window.localStorage.clear();
				return true;
			},
			clearHtml5 : function() {
				$.each(window.localStorage, function(key, value) {
					if (key.substr(app.config.name.length + 1, 10) == "data-html5") {
						try {
							window.localStorage.removeItem(key.trim())
						} catch (err) {
							alert(err);
						}
					}
				});
				return true;
			},
			removeItem : function(key) {
				window.localStorage.removeItem(app.config.name + "." + key);
			},
			show : function() {
				var string = '';
				var i = 0;
				$.each(window.localStorage, function(key, value) {
					if (key.substring(0, app.config.name.length) == app.config.name) {
						string += key.substring(app.config.name.length + 1) + " = " + value + "\n";
						i++;
					}
					if (i % 20 == 0) {
						alert(string);
						string = "";
					}
				});

			},
			log : function() {
				$.each(window.localStorage, function(key, value) {
					if (key.substring(0, app.config.name.length) == app.config.name) {
						app.debug.log(key.substring(app.config.name.length + 1) + " = " + value);
					}
				});
			},
			setObject : function(name, object) {
				// alert(JSON.stringify(object));
				app.debug.alert('plugin_HTML5Storage.localStorage.setObject(' + name + ', ' + JSON.stringify(object) + ')', 20);
				$.each(object, function(key, value) {
					if (typeof value == "object" && value != null) {
						plugin_HTML5Storage.functions.localStorage.setObject((name + "." + key).trim(), value);
					} else {
						plugin_HTML5Storage.functions.localStorage.set((name + "." + key).trim(), value);
					}
				});
				// app.store.localStorage.show();
				return true;
			},
			getObject : function(name) {
				// alert("get: " + name);
				app.debug.alert('plugin_HTML5Storage.localStorage.getObject("' + name + '")', 20);
				var object = {};
				$.each(window.localStorage, function(key, value) {

					if (key.substr(app.config.name.length + 1, name.length).trim() == name.trim()) {
						// alert(key.substr(app.config.name.length + 1,
						// name.length).trim() + " = " + value);
						object = plugin_HTML5Storage.setDeepX(object, key.substr(app.config.name.length + 1), plugin_HTML5Storage.functions.localStorage.get(key.substr(app.config.name.length + 1)));
					}
				});

				if (object[name] != undefined)
					return object[name];
				else {
					return null;
				}
			},
			removeObject : function(name) {
				// alert("remove:" + name);
				app.debug.alert('plugin_HTML5Storage.localStorage.removeObject(' + name + ')', 20);
				var success = true;
				$.each(window.localStorage, function(key, value) {
					if (key.substr(app.config.name.length + 1, name.length) == name.trim()) {
						try {
							window.localStorage.removeItem(key.trim())
						} catch (err) {
							alert(err);
							success = false;
						}
					}
				});
				return success;
			},
			getList : function(identifier) {
				var list = {};
				$.each(window.localStorage, function(key, value) {
					if (key.substr(app.config.name.length + 1, identifier.length) == identifier) {
						list[key.substr(app.config.name.length + 1)] = plugin_HTML5Storage.functions.localStorage.get(key.substr(app.config.name.length + 1));
					}
				});
				return list;
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