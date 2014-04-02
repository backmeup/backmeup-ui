var plugin_Debug = {
	config : null,
	// obligate functions
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 5);
	},
	definePluginEvents : function() {

	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
		if (plugin_Debug.config.debugPanel) {
			plugin_Debug.appendDebugArea(container);
		}
	},

	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);

	},

	// private functions
	appendDebugArea : function(container) {
		app.debug.alert(this.config.name + ".appendDebugArea()", 5);
		// get inputs via FormInputDesigner
		var append = '';
		append += '';
		append += '';
		append += '';
		append += '';
		append += '';
		append += '';
		append += '';
		append += '';
		append += '';
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
	functions : {
		alert : function(text, level) {
			if (plugin_Debug.config.doDebugging && (level >= plugin_Debug.config.debugLevel)) {
				alert("DebugLevel: " + level + "\n" + text);
			}
		},
		a : this.alert,
		log : function(text) {
			alert("log");
		},
		l : this.log
	}
};