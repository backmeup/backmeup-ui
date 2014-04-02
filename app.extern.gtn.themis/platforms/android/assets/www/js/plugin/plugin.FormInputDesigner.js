var plugin_FormInputDesigner = {
	config : null,
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
	
	/*
	 * options:{ "id":"", "mini":true, "placeholder":"text", "value":"value",
	 * "label":true, "labelText":"text", "disabled":false, "container":true,
	 * "classes":[], "attibutes":{ "data-html5-*":"value", "":"" } }
	 */

	// private functions
	getAttributes : function(options) {
		app.debug.alert("plugin_FormInputDesigner.getAttributes()", 5);
		var attributes = 'class="' + plugin_FormInputDesigner.getClasses(options) + '"';
		if (options.placeholder != undefined)
			attributes += ' placeholder="' + options.placeholder + '"';
		if (options.id != undefined)
			attributes += ' id="' + options.id + '"';
		if (options.value != undefined)
			attributes += ' value="' + options.value + '"';
		return attributes;
	},

	getClasses : function(options) {
		return "";
	},

	getLabel : function(options) {
		app.debug.alert("plugin_FormInputDesigner.getLabel()", 5);
		var labelText = "";
		if (options.labelText != undefined)
			labelText = options.labelText;

		var visible = "";
		if (options.label != undefined && !options.label)
			var visible = "ui-hidden-accessible app-form-label-hidden";

		var forId = "";
		if (options.id != undefined)
			forId += ' for="' + options.id + '"';

		return '<label ' + forId + ' class="' + visible + '">' + labelText + '</label>';
	},

	wrapInContainer : function(label, input) {
		app.debug.alert("plugin_FormInputDesigner.wrapInContainer()", 5);
		return '<div class="ui-field-contain app-form-label-input-container">' + label + input + '</div>';
	},

	addClassToOptions : function(options, className) {
		app.debug.alert("plugin_FormInputDesigner.addClassToOptions()", 5);
		if (options.classes == undefined)
			options['classes'] = new Array();
		options.classes.push(className);
		return options;
	},

	generateInput : function(options, type) {
		app.debug.alert("plugin_FormInputDesigner.generateInput()", 5);
		options = plugin_FormInputDesigner.verifyOptions(options);
		var attributes = plugin_FormInputDesigner.getAttributes(options);
		var input = '<input type="' + type + '"  ' + attributes + ' />';
		var label = plugin_FormInputDesigner.getLabel(options);
		if (options.container != undefined && options.container)
			var html = plugin_FormInputDesigner.wrapInContainer(label, input);
		else
			var html = label + input;
		return html;
	},
	verifyOptions : function(options) {
		return options;
	},
	// public functions
	functions : {
		text : {
			text : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.text()", 5);
				var type = "text";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-text");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			search : function(options) {
				var type = "search";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-search");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			textarea : function(options) {
				var type = "text";
				// options.classes.push("app-form-input-text");
				// return plugin_FormInputDesigner.generateInput(options, type);
			},
			number : function(options) {
				var type = "number";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-number");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			date : function(options) {
				var type = "date";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-date");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			month : function(options) {
				var type = "month";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-month");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			week : function(options) {
				var type = "week";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-week");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			time : function(options) {
				var type = "time";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-time");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			datetime : function(options) {
				var type = "datetime";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-datetime");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			telephone : function(options) {
				var type = "telephone";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-telephone");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			email : function(options) {
				var type = "email";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-email");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			url : function(options) {
				var type = "url";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-url");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			password : function(options) {
				var type = "password";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-password");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			color : function(options) {
				var type = "color";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-color");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			file : function(options) {
				var type = "file";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-file");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
		},
		button : {
			button : function(options) {
				var type = "button";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-file");
				return plugin_FormInputDesigner.generateInput(options, type);
			}
		},
		checkbox : {},
		collabsible : {},
		list : {},
		slider : {}
	}
};