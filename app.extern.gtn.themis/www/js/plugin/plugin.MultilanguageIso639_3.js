/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
plugin_MultilanguageIso639_3 = {
	config : null,
	dictionary : null,
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

	// private functions
	loadLanguageIntoDict : function(language) {
		var langUri = "../language/" + language + ".json";
		$.ajax({
			dataType : "json",
			url : langUri,
			async : false,
			success : function(json) {
				app.debug.alert("Langugae successfully loaded: " + language, 3);
				plugin_MultilanguageIso639_3.dictionary = json;
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert("Fatal error: Can't load language: " + langUri + " Error: " + textStatus);
			}
		});
	},
	// public functions
	functions : {
		string : function(id, context, language) {
			var text = null;
			if (!plugin_MultilanguageIso639_3.dictionary) {
				plugin_MultilanguageIso639_3.loadLanguageIntoDict(plugin_MultilanguageIso639_3.config.defaultLanguage)

			}
			if (context == undefined) {
				text = plugin_MultilanguageIso639_3.dictionary[id];
			} else {
				if (plugin_MultilanguageIso639_3.dictionary[context] == undefined) {
					text = "bad context:" + context;
				} else {
					text = plugin_MultilanguageIso639_3.dictionary[context][id];
				}
			}
			if (text != undefined)
				return text;
			else
				return context + '.' + id;
		}
	}
};