plugin_MultilanguageIso639_3 = {
	config : null,
	dictionary : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
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
				app.debug.alert("Error loading language: " + langUri + " Error: " + textStatus, 5);
			}
		});
	},
	// public functions
	functions : {
		string : function(id, context, language) {
			if (!plugin_MultilanguageIso639_3.dictionary) {
				plugin_MultilanguageIso639_3.loadLanguageIntoDict(plugin_MultilanguageIso639_3.config.defaultLanguage)

			}
			if (context == undefined) {
				return plugin_MultilanguageIso639_3.dictionary[id];
			} else {
				return plugin_MultilanguageIso639_3.dictionary[context][id];
			}
		}
	}
};