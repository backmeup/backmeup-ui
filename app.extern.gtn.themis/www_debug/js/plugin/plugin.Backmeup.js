/*
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * @author Martin Kattner <martin.kattner@gmail.com>
 */

// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_Backmeup
 * 
 * @version 1.0
 * @namespace plugin_Backmeup
 */
var plugin_Backmeup = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);

	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);

	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);

	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_Backmeup
	 * 
	 * @namespace plugin_Backmeup.functions
	 * 
	 */
	functions : {
		print : {
			formElement : function(value, languageContext) {
				switch (value.type.toLowerCase()) {
				case 'number':
					return app.ni.text.number({
						"name" : value.name,
						"placeholder" : app.lang.string(value.label, languageContext),
						"label" : true,
						"labelText" : app.lang.string(value.label, languageContext),
						"container" : true,
						"attributes" : {
							"title" : app.lang.string(value.description, languageContext)
						}
					});
					break;
				case 'bool':
					return app.ni.checkbox.checkbox({
						"name" : value.name,
						"placeholder" : app.lang.string(value.label, languageContext),
						"label" : true,
						"labelText" : app.lang.string(value.label, languageContext),
						"container" : true,
						"attributes" : {
							"title" : app.lang.string(value.description, languageContext)
						}
					});
					break;
				case 'string':
					return app.ni.text.text({
						"name" : value.name,
						"placeholder" : app.lang.string(value.label, languageContext),
						"label" : true,
						"labelText" : app.lang.string(value.label, languageContext),
						"container" : true,
						"attributes" : {
							"title" : app.lang.string(value.description, languageContext)
						}
					});
					break;
				case 'password':
					return app.ni.text.password({
						"name" : value.name,
						"placeholder" : app.lang.string(value.label, languageContext),
						"label" : true,
						"labelText" : app.lang.string(value.label, languageContext),
						"container" : true,
						"attributes" : {
							"title" : app.lang.string(value.description, languageContext)
						}
					});
					break;
				case 'enum':
					var radio = "";
					$.each(value.defaultValue.split(','), function(k, v) {
						radio += app.ni.radio.radio({
							"name" : value.name,
							"placeholder" : app.lang.string(value.label, languageContext),
							"label" : true,
							"labelText" : app.lang.string(v, languageContext),
							"container" : true,
							"attributes" : {
								"title" : app.lang.string(value.description, languageContext),
								"value" : v
							}
						});
					});
					return $(radio);
					break;
				default:
					alert("Unknown type:" + value.type.toLowerCase());
					alert(JSON.stringify(value));
					break;
				}
			}
		}
	}
};