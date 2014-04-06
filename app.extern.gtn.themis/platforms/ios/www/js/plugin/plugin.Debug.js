/*
 * 1	
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10	page interface methods
 * 11	plugin interface methods
 * 12	page event methods
 * 13
 * 14
 * 15
 * 16
 * 17
 * 18
 * 19
 * 20
 * 21
 */
/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace plugin_Debug
 */
var plugin_Debug = {
	/**
	 * Configuration loaded from json file or html5 storage. Use plugin_Informator to get access.
	 * 
	 * @private
	 */
	config : null,

	/**
	 * Log object
	 * 
	 * @private
	 */
	logObject : {},
	// obligate functions

	/**
	 * Constructor is called by plugins.js
	 * 
	 * @protected
	 * 
	 */
	constructor : function() {
	},

	/**
	 * PluginsLoaded event. Called by plugins.js after all plugins are loaded.
	 * 
	 * @protected
	 */
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 5);
	},

	// called after all pages are loaded
	/**
	 * PagesLoaded event. Called by pages.js after all pages are loaded.
	 * 
	 * @protected
	 */
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
	},
	/**
	 * Define the jQuery event delegations for the plugin. Called by pages.js
	 * after ...
	 * 
	 * @protected
	 * @returns {boolean} Succesfull or unsuccessful
	 */
	definePluginEvents : function() {
		$("body").on("change", "#cbxToggleDebug", function() {
			if ($(this).prop("checked")) {
				app.info.set("plugin_Debug.config.doDebugging", true);
			} else {
				app.info.set("plugin_Debug.config.doDebugging", false);
			}
		});
		$("body").on("click", "#btnRefresh", function() {
			location.reload();
		});
	},

	// called by pages.js
	/**
	 * AfterHtmlInjectedBeforePageComputing event. Called by pages.js after
	 * page.create().
	 * 
	 * @protected
	 * @param container
	 *            {object} jQuery page div
	 */
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
		if (plugin_Debug.config.debugPanel) {
			plugin_Debug.appendDebugArea(container);
		}
		if (this.config.doDebugging) {
			$("#cbxToggleDebug").prop('checked', true);
		} else {
			$("#cbxToggleDebug").prop('checked', false);
		}
	},
	/**
	 * Called once by pages.js
	 * 
	 * @protected
	 * @param container
	 *            {object} jQuery page div
	 */
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);

	},

	// private functions
	/**
	 * @private
	 */
	appendDebugArea : function(container) {
		app.debug.alert(this.config.name + ".appendDebugArea()", 5);
		// get inputs via FormInputDesigner
		var append = '';
		append += '<div id="divDebugCheckbox" data-role="fieldcontain">';
		append += '<fieldset class="debugGroup" data-role="controlgroup">';
		append += '<legend>Debug Area:</legend>';
		append += '<input type="button" name="btnRefresh" id="btnRefresh" class="custom" value="Refresh Page"/>';
		append += '<input type="checkbox" name="cbxToggleDebug" id="cbxToggleDebug" class="custom" />';
		append += '<label for="cbxToggleDebug">Toggle Debug</label>';
		append += '</fieldset>';
		append += '</div>';
		$(container).append(append);
	},

	// public functions
	/**
	 * @namespace plugin_Debug.functions
	 * 
	 */
	functions : {
		/**
		 * Alert if the configured debug level is smaller then the current debug
		 * level.
		 * 
		 * @param {string}
		 *            text Text to show.
		 * @param {int}
		 *            level Current debug level.
		 */
		alert : function(text, level) {
			if (plugin_Debug.config.doDebugging && (level >= plugin_Debug.config.debugLevel)) {
				alert("DebugLevel: " + level + "\n" + text);
			}
		},
		/**
		 * Add line to log object.
		 * 
		 * @param {string}
		 *            text text to log
		 */
		log : function(text) {
			plugin_Debug.logObject[Date.now()] = text;
		},
		/**
		 * Shows the log object in an alert window
		 */
		showLog : function() {
			alert(JSON.stringify(plugin_Debug.logObject));
		}
	}
};