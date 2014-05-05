// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_Actions
 * 
 * @version 1.0
 * @namespace plugin_Actions
 */
var plugin_Actions = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_Actions
	 * 
	 * @namespace plugin_Actions.functions
	 * 
	 */
	functions : {
		html : {
			redirect : function(reloadFramework) {
				if (app.config.jQueryMobile) {
					// redirect
				} else {
					// redirect
				}
			}
		}
	}
};/*
 * 1	
 * 2	iterations
 * 3
 * 4
 * 5	jQuery mobile event triggerd
 * 6
 * 7
 * 8
 * 9
 * 10	page interface methods
 * 11	plugin interface methods
 * 12	page event methods
 * 13	plugin private method inside
 * 14	plugin private method
 * 15	plugin public method inside
 * 16
 * 17
 * 18
 * 19
 * 20	plugin public method called (plugin_.functions.method)
 * 21
 * 22
 * 23
 * 24
 * 25	page event triggered
 * 26
 * 27
 * 28
 * 29
 * 30	framework initialized
 * 31
 * 32
 * 33
 * ...
 * 50	notifications - how to do it better
 * 51
 * 52
 * 53
 * ...
 * 60	only important news to developer
 * 61
 * 62
 * 63
 * 64
 * 65
 * 66
 * 67
 * 68
 * ..
 * 95
 * 96
 * 97
 * 98
 * 99
 * 100	language id debuging
 */
/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace plugin_Debug
 */
var plugin_Debug = {
	/**
	 * Configuration loaded from json file or html5 storage. Use
	 * plugin_Informator to get access.
	 * 
	 * @private
	 */
	config : null,

	/**
	 * Log object
	 * 
	 * @private
	 */
	logObject : [],
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
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
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
		if (plugin_Debug.config.debugDevice) {
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
			$("body").on("click", "#btnDeleteHtml5Storage", function() {
				app.store.localStorage.clear();
				location.reload();
			});
			$("body").on("change", "#txtDebugLevel", function() {
				var level = $('#txtDebugLevel').val();
				app.info.set("plugin_Debug.config.debugLevel", level);
			});
		}
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
		if (plugin_Debug.config.debugDevice) {
			app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
			// show debug panel?
			if (plugin_Debug.config.debugPanel) {
				plugin_Debug.appendDebugArea(container.find('div[data-role=content]'));
			}
			// do debuging checkbox
			if (this.config.doDebugging) {
				$("#cbxToggleDebug").prop('checked', true);
			} else {
				$("#cbxToggleDebug").prop('checked', false);
			}
			// debug level
			$('#txtDebugLevel').val(plugin_Debug.config.debugLevel);
			// log text
			if (this.config.showLog) {
				var debugText = "";
				$.each(this.logObject, function(key, value) {
					debugText += key + " " + value.replace("\\n", "<br />") + "<br /><br />";
				});
				$("#pLog").html(debugText);
			}
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
		var append = '<div>&nbsp;</div>';
		append += '<div id="divDebugCheckbox" data-role="fieldcontain">';
		append += '<fieldset class="debugGroup" data-role="controlgroup">';
		append += '<legend>Debug Area:</legend>';
		append += '<input type="button" name="btnRefresh" id="btnRefresh" class="custom" value="Refresh Page"/>';
		append += '<input type="checkbox" name="cbxToggleDebug" id="cbxToggleDebug" class="custom" />';
		append += '<input type="button" name="btnDeleteHtml5Storage" id="btnDeleteHtml5Storage" class="custom" value="Delete Html5 Storage"/>';
		append += '<p>Debug Level</p>';
		append += '<input type="text" name="txtDebugLevel" id="txtDebugLevel" />';
		append += '<label for="cbxToggleDebug">Toggle Debug</label>';
		append += '</fieldset>';
		append += '<p id="pLog" style="font-size:8px;">Log</p>';
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
			if (plugin_Debug.config.logDebug && (level >= plugin_Debug.config.logDebugLevel)) {
				plugin_Debug.functions.log("DebugLevel: " + level + " > " + text);
			}
		},
		/**
		 * Add line to log object.
		 * 
		 * @param {string}
		 *            text text to log
		 */
		log : function(text) {
			// Date.now()
			plugin_Debug.logObject.push(" > " + text);
		},
		/**
		 * Shows the log object in an alert window
		 */
		showLog : function() {
			alert(JSON.stringify(plugin_Debug.logObject));
		}
	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @module
 */
var plugin_FormInputDesigner = {
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
		if (options.attributes != undefined) {
			$.each(options.attributes, function(key, value) {
				attributes += ' ' + key + '="' + value + '"';
			});
		}
		if (options.styles != undefined) {
			var styles = '';
			$.each(options.styles, function(key, value) {
				styles += ' ' + key + ':' + value + ';';
			});
			attributes += ' style="' + styles + '"';
		}
		return attributes;
	},

	getClasses : function(options) {
		var classes = "";
		if (options.classes != undefined) {
			$.each(options.classes, function(key, value) {
				classes += value + " ";
			});
		}
		return classes;
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
		app.debug.alert("plugin_FormInputDesigner.generateInput(" + options + ", " + type + ")", 14);
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

	generateOutput : function(options, type) {
		app.debug.alert("plugin_FormInputDesigner.generateOutput(" + options + ", " + type + ")", 14);
		options = plugin_FormInputDesigner.verifyOptions(options);
		var attributes = plugin_FormInputDesigner.getAttributes(options);
		if (options.text == undefined)
			options.text = "";
		var output = '<' + type + ' ' + attributes + '>' + options.text + '</' + type + '>';
		return output;
	},
	verifyOptions : function(options) {
		if (options == undefined) {
			options = {};
		}
		return options;
	},
	// public functions
	functions : {
		text : {
			text : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.text()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "text";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-text");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			search : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.search()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "search";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-search");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			textarea : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.textarea()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "text";
				// options.classes.push("app-form-input-text");
				// return plugin_FormInputDesigner.generateInput(options, type);
			},
			number : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.number()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "number";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-number");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			date : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.date()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "date";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-date");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			month : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.month()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "month";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-month");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			week : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.week()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "week";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-week");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			time : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.time()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "time";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-time");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			datetime : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.datetime()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "datetime";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-datetime");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			telephone : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.telephone()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "telephone";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-telephone");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			email : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.email()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "email";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-email");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			url : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.url()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "url";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-url");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			password : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.password()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "password";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-password");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			color : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.color()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "color";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-color");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			file : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.file()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "file";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-file");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
		},
		button : {
			button : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.button.button()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "button";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-button");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
			submit : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.button.submit()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "submit";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-submit");
				return plugin_FormInputDesigner.generateInput(options, type);
			}
		},
		checkbox : {},
		collabsible : {},
		list : {
			thumbnail : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.list.thumbnail()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var thumbnail = '<li>';
				thumbnail += '<a href="' + options.href + '" ' + plugin_FormInputDesigner.getAttributes(options) + '> <img src="' + options.imageSrc + '" class="ui-li-thumb">';
				thumbnail += '<h2>' + options.headline + '</h2>';
				thumbnail += '<p>' + options.text + '</p>';
				thumbnail += '<p class="ui-li-aside">' + options.title + '</p>';
				thumbnail += '</a>';
				thumbnail += '</li>';
				return $(thumbnail);
			}
		},
		slider : {},
		navigation : {
			navbar : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.navigation.navbar()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var attributes = plugin_FormInputDesigner.getAttributes(options);
				var navbar = $('<div data-role="navbar" ' + attributes + '></div>');
				return navbar;
			},
			panel : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.navigation.panel()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var attributes = plugin_FormInputDesigner.getAttributes(options);
				var navbar = $('<div data-role="panel" ' + attributes + '></div>');
				return navbar;
			}
		},
		table : {
			table : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.table.table()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var attributes = plugin_FormInputDesigner.getAttributes(options);
				var table = '<table ' + attributes + '><thead></thead><tbody></tbody></table>';
				return $(table);
			},
			th : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.table.th()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "th";
				plugin_FormInputDesigner.addClassToOptions(options, "app-th");
				return plugin_FormInputDesigner.generateOutput(options, type);
			},
			tr : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.table.tr()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "tr";
				plugin_FormInputDesigner.addClassToOptions(options, "app-tr");
				return $(plugin_FormInputDesigner.generateOutput(options, type));
			},
			td : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.table.td()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "td";
				plugin_FormInputDesigner.addClassToOptions(options, "app-td");
				return $(plugin_FormInputDesigner.generateOutput(options, type));
			}
		},
		element : {
			h1 : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.h1()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "h1";
				plugin_FormInputDesigner.addClassToOptions(options, "app-h1");
				return plugin_FormInputDesigner.generateOutput(options, type);
			},
			h2 : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.h1()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "h2";
				plugin_FormInputDesigner.addClassToOptions(options, "app-h2");
				return plugin_FormInputDesigner.generateOutput(options, type);
			},
			h3 : function(options) {

			},
			h4 : function(options) {

			},
			h5 : function(options) {

			},
			h6 : function(options) {

			},
			p : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.p()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "p";
				plugin_FormInputDesigner.addClassToOptions(options, "app-p");
				return plugin_FormInputDesigner.generateOutput(options, type);
			},
			a : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.a()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "a";
				plugin_FormInputDesigner.addClassToOptions(options, "app-a");
				return plugin_FormInputDesigner.generateOutput(options, type);
			},
			ol : function(options) {

			},
			ul : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.ul()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "ul";
				plugin_FormInputDesigner.addClassToOptions(options, "app-ul");
				return $(plugin_FormInputDesigner.generateOutput(options, type));
			},
			li : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.li()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "li";
				plugin_FormInputDesigner.addClassToOptions(options, "app-li");
				return $(plugin_FormInputDesigner.generateOutput(options, type));
			}
		}
	}
};// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_GlobalPage
 * 
 * @version 1.0
 * @namespace plugin_GlobalPage
 */
var plugin_GlobalPage = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			$(window).on('load', function() {
				$(this).trigger('resize');
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_GlobalPage
	 * 
	 * @namespace plugin_GlobalPage.functions
	 * 
	 */
	functions : {
		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforechange()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforecreate()", 14);
			var success = null;
			try {
				if (window['page_' + container.attr("id")].config.loginObligate == undefined)
					alert('Pease add loginObligate to your page.' + container.attr("id") + '.json file.');

				if ((window['page_' + container.attr("id")].config.loginObligate && app.store.localStorage.get("data-html5-themis-loggedin")) || (!window['page_' + container.attr("id")].config.loginObligate && !app.store.localStorage.get("data-html5-themis-loggedin")) || (!window['page_' + container.attr("id")].config.loginObligate && app.store.localStorage.get("data-html5-themis-loggedin"))) {
					app.template.overwrite("#" + container.attr("id"), "JQueryMobilePageStructure");
					// app.template.append("#" + container.attr("id"),
					// "JQueryMobileNavigationPanel")

					var header = container.find('div[data-role=header]');
					var content = container.find('div[data-role=content]');
					var footer = container.find('div[data-role=footer]');

					$('#' + container.attr("id")).attr("data-dom-cache", "false");

					// #nav-panel
					$("body #nav-panel").length
					var navPanel = app.ni.navigation.panel({
						"id" : "nav-panel",
						"attributes" : {
							"data-display" : "overlay"
						}
					});
					navPanel.append(app.template.get("ThemisNavigationPanelContent", "themis"));
					navPanel.find("ul").prepend('<li><a href="usersettings.html" >' + app.store.localStorage.get("data-html5-themis-username") + '</a></li>');
					navPanel.addClass("ios7-header");
					container.prepend(navPanel);

					// #page panel
					$("body #page-panel").length
					var pagePanel = app.ni.navigation.panel({
						"id" : "page-panel",
						"attributes" : {
							"data-display" : "overlay",
							"data-position" : "right"
						}
					});
					var ul = app.ni.element.ul({
						"attributes" : {
							"data-role" : "listview"
						}
					});
					ul.append(app.ni.element.p({
						"text" : "Seitenspezifisches Menü"
					}));
					ul.append(app.ni.element.li({
						"attributes" : {
							"data-icon" : "delete"
						}
					}).append(app.ni.element.a({
						"text" : app.lang.string("menu_close", "actions"),
						"attributes" : {
							"href" : "#",
							"data-rel" : "close"
						}
					})));
					pagePanel.append(ul);
					pagePanel.addClass("ios7-header");
					container.prepend(pagePanel);

					header.attr("data-position", "fixed");
					header.addClass("app-header");
					// header content
					header.append(app.ni.element.a({
						"attributes" : {
							"href" : "#nav-panel"
						},
						"text" : "Menu",
						"classes" : [ "ui-btn", "ui-corner-all", "ui-btn-icon-left", "ui-btn-icon-notext" ]
					}));

					header.append(app.ni.element.h2({
						"text" : "backmeup"
					}));

					header.append(app.ni.element.a({
						"href" : "#nav-panel",
						"text" : "Search",
						"classes" : [ "ui-btn", "ui-corner-all", "ui-btn-icon-left", "ui-btn-icon-notext", "ui-icon-search" ]
					}));

					// header navigation bar
					var navbar = app.ni.navigation.navbar({
						"id" : "navHeader"
					});

					var ul = app.ni.element.ul();
					ul.append(app.ni.element.li().append(app.ni.element.a({
						"id" : "btnNavBack",
						"text" : app.lang.string("back", "actions"),
						"attributes" : {
							"data-rel" : "back",
							"data-icon" : "arrow-l"
						}
					})));
					ul.append(app.ni.element.li().append(app.ni.element.a({
						"id" : "btnNavMenu",
						"text" : app.lang.string("menu", "actions"),
						"attributes" : {
							"href" : "#page-panel",
							"data-icon" : "grid"
						}
					})));
					ul.append(app.ni.element.li().append(app.ni.element.a({
						"id" : "btnNavTop",
						"text" : app.lang.string("top", "actions"),
						"attributes" : {
							"href" : "#" + container.attr("id"),
							"data-ajax" : "false",
							"data-icon" : "arrow-u"
						}
					})));
					ul.append(app.ni.element.li().append(app.ni.element.a({
						"id" : "btnNavSearch",
						"text" : app.lang.string("search", "actions"),
						"attributes" : {
							"data-icon" : "search"
						}
					})));

					navbar.append(ul);

					footer.append(navbar);
					footer.attr("data-position", "fixed");

					$(document).on("click", "#btnNavSearch", function() {
						var search = $("<div></div>");
						search.append(app.ni.text.search({
							"id" : "txtNavSearch"
						}));
						app.notify.alert(search, app.lang.string("search", "headlines"), app.lang.string("search_backup", "headlines"), function(popup) {
							alert("Weiterleiten und Backups durchsuchen. Noch nicht implementiert. plugin.GlobalPage.js");
						});
					});
				} else {
					alert("you re not logged in");
					$(document).off();
					$(location).attr('href', "index.html");
				}
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforehide()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforeload()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforeshow()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagechange()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagechangefailed()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagecreate()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagehide()", 14);
			var success = null;
			try {
				container.remove();
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageinit()", 14);
			var success = null;
			try {
				/* iOS 7 Statusbar Issue */
				if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)) {
					app.debug.alert("Oh, it's a iOS 7 device :-)", 14);
					app.load.css("../css/ios.css");
					$("div.app-header").addClass("ios7-header");
					$('body').append('<div id="ios7statusbar"/>xxx</div>');
				}
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageload()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageloadfailed()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageremove()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageshow()", 14);
			var success = null;
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};//plugin_GlobalSettings
/**
 * Plugin:

 * 
 * @version 1.0
 * @namespace plugin_GlobalSettings
 */
var plugin_GlobalSettings = {
	config : null,
	constructor : function() {

	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		// load settings from html5 storage
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
	/**
	 * @namespace plugin_GlobalSettings.functions
	 */
	functions : {
		get : function(key) {
			return plugin_GlobalSettings.config['key'];
		},
		set : function(key, val) {
			plugin_GlobalSettings.config['key'] = val;
		}
	}
};// data-html5-*
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
			},
			get : function(key) {
				app.debug.alert('plugin_HTML5Storage.localStorage.get(' + key + ')', 3);
				return plugin_HTML5Storage.parseValue(window.localStorage.getItem(app.config.name + "." + key));
			},
			clear : function() {
				window.localStorage.clear();
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
				// alert("set: " + name);
				app.debug.alert('plugin_HTML5Storage.localStorage.setObject(' + name + ', ' + JSON.stringify(object) + ')', 20);
				$.each(object, function(key, value) {
					if (typeof value == "object") {
						plugin_HTML5Storage.functions.localStorage.setObject((name + "." + key).trim(), value);
					} else {
						plugin_HTML5Storage.functions.localStorage.set((name + "." + key).trim(), value);
					}
				});
				// app.store.localStorage.show();
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
					return object;
				else {
					return null;
				}
			},
			removeObject : function(name) {
				// alert("remove:" + name);
				app.debug.alert('plugin_HTML5Storage.localStorage.removeObject(' + name + ')', 20);
				$.each(window.localStorage, function(key, value) {
					if (key.substr(app.config.name.length + 1, name.length) == name.trim()) {
						try {
							window.localStorage.removeItem(key.trim())
						} catch (err) {
							alert(err);
						}
					}
				});
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
};// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_HelperFunctions
 * 
 * @version 1.0
 * @namespace plugin_HelperFunctions
 */
var plugin_HelperFunctions = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_HelperFunctions
	 * 
	 * @namespace plugin_HelperFunctions.functions
	 * 
	 */
	functions : {
		validate : {
			email : function(email) {
				app.debug.alert("plugin_HelperFunctions.functions.validate.email(" + email + ")", 20);
				var success = null;
				var regex = new RegExp(plugin_HelperFunctions.config.validate.email, "g");
				if (regex.test(email)) {
					success = true;
				}
				return success;
			},
			password : function(p1, p2) {
				app.debug.alert("plugin_HelperFunctions.functions.validate.password(" + p1 + ", " + p2 + ")", 20);
				var success = null;
				var regex = new RegExp(plugin_HelperFunctions.config.validate.password, "g");
				if (p2 == undefined) {
					if (regex.test(p1)) {
						success = true;
					}
				} else {

					if (p1 != p2) {
						success = false;
					} else if (regex.test(p1)) {
						success = true;
					}
				}
				return success;
			}
		},
		random : {
			integer : function(digits) {
				return Math.floor((Math.random() * digits) + 1);
			}
		}
	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_HtmlTemplates = {
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
	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},

	getText : function(templateId, context) {
		app.debug.alert("plugin_HtmlTemplates.getText(" + templateId + ", " + context + ")", 14);
		var text = null;
		var url = null;
		if (context != undefined) {
			url = plugin_HtmlTemplates.config.templates[context][templateId];
		} else {
			url = plugin_HtmlTemplates.config.templates[templateId];
		}
		if (text = TextLoader(url)) {
			app.load.css(url.substr(0, url.lastIndexOf(".")) + ".css");
			return text;
		} else {
			return false;
		}
	},

	functions : {
		get : function(templateId, context) {
			app.debug.alert("plugin_HtmlTemplates.functions.get(" + templateId + ", " + context + ")", 20);
			return plugin_HtmlTemplates.getText(templateId, context);
		},
		append : function(selector, templateId, context) {
			app.debug.alert("plugin_HtmlTemplates.functions.append(" + selector + ", " + templateId + ", " + context + ")", 20);
			$(selector).append(plugin_HtmlTemplates.functions.get(templateId, context));
		},
		prepend : function(selector, templateId, context) {
			app.debug.alert("plugin_HtmlTemplates.functions.prepend(" + selector + ", " + templateId + ", " + context + ")", 20);
			$(selector).prepend(plugin_HtmlTemplates.functions.get(templateId, context));
		},
		overwrite : function(selector, templateId, context) {
			app.debug.alert("plugin_HtmlTemplates.functions.overwrite(" + selector + ", " + templateId + ", " + context + ")", 20);
			$(selector).empty();
			$(selector).prepend(plugin_HtmlTemplates.functions.get(templateId, context));
		}
	}
};// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_ImageProvider
 * 
 * @version 1.0
 * @namespace plugin_ImageProvider
 */
var plugin_ImageProvider = {
	config : null,
	images : {},
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			$.each(plugin_ImageProvider.config.imgdFiles, function(path, loadFile) {
				if (loadFile) {
					var json = JsonLoader(path);
					// alert(JSON.stringify(json));
					$.each(json, function(id, url) {
						// alert(id + " = " + url);
						plugin_ImageProvider.images[id] = url;
					});
				}
			});
			// alert(JSON.stringify(plugin_ImageProvider.images));
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_ImageProvider
	 * 
	 * @namespace plugin_ImageProvider.functions
	 * 
	 */
	functions : {
		getUrlById : function(id) {
			var img;
			// alert(id + " = " + plugin_ImageProvider.images[id])
			if ((img = plugin_ImageProvider.images[id]) == undefined)
				img = id;
			return img;
		}
	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_Informator = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;

		try {
			// load the plugins' configuartion into html5 storage
			if (this.config.useHtml5Storage && this.config.savePluginConfig) {
				var global = {};
				$.each(plugins.pluginNames, function(key, value) {
					if (global["plugin_" + value] == undefined)
						global["plugin_" + value] = {};
					global["plugin_" + value]['config'] = window['plugin_' + value]['config'];
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
			// load the pages' configuartion into html5 storage
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
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
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
			if (plugin_Informator.config.useHtml5Storage) {
				app.store.localStorage.set("config." + key, value);
			}
			// change property
			plugin_Informator.setDeep(window, key, value);
		}
	// data-info-URI

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_KeyValueStack = {
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

	},

	// called by pages.js
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	pageSpecificEvents : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},
	functions : {}
};
//LoadExternalScripts
/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_LoadExternalScripts = {
	config : null,
	loadedScripts : {},
	// called by plugins.js
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		$.each(plugin_LoadExternalScripts.config.scripts.css, function(key, value) {
			if (value) {
				if (key in plugin_LoadExternalScripts.loadedScripts) {
					;// do nothing already loaded
				} else {
					var cssLink = "<link rel='stylesheet' type='text/css' href='" + key + "'>";
					$("head").append(cssLink);
					plugin_LoadExternalScripts.loadedScripts[key] = true;
				}

			}
		});
		$.each(plugin_LoadExternalScripts.config.scripts.javascript, function(key, value) {
			if (value) {
				var url = key;
				$.ajax({
					url : url,
					dataType : "script",
					async : false,
					success : function(data, textStatus, jqXHR) {
						;
					},
					error : function(jqXHR, textStatus, errorThrown) {
						alert("Fatal error in plugin_LoadExternalScripts.js: Can't load the javascript. Url: " + key + " Error: " + textStatus);
						alert(errorThrown);
					}
				});
			}
		});
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
	},

	definePluginEvents : function() {
	},
	// called by pages.js
	// called for each page
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
	},
	// called once
	pageSpecificEvents : function() {
		app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
	},
	// public
	// called by user
	functions : {
		css : function(url) {
			app.debug.alert("plugin_LoadExternalScripts.functions.css(" + url + ")", 20);
			if (url in plugin_LoadExternalScripts.loadedScripts) {
				;// do nothing already loaded
			} else {
				var cssLink = "<link rel='stylesheet' type='text/css' href='" + url + "'>";
				$("head").append(cssLink);
				plugin_LoadExternalScripts.loadedScripts[url] = true;
			}
		},
		javascript : function() {
			app.debug.alert("plugin_LoadExternalScripts.functions.javascript(" + url + ")", 20);
		}
	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_MultilanguageIso639_3 = {
	config : null,
	dictionary : null,
	parameter : null,
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
		var langUri = "../files/language/" + language + ".json";
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
		addParameter : function(key, value) {
			if (!plugin_MultilanguageIso639_3.parameter) {
				plugin_MultilanguageIso639_3.parameter = {};
				if (plugin_HTML5Storage != undefined) {
					app.store.localStorage.getList("language-");
				}
			}
			plugin_MultilanguageIso639_3.parameter[key] = value;
			if (plugin_HTML5Storage != undefined) {
				app.store.localStorage.set("language-" + key, value);
			}
		},
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
			if (text != undefined) {
				// replace the wildcards
				if (plugin_MultilanguageIso639_3.parameter != null) {
					$.each(plugin_MultilanguageIso639_3.parameter, function(key, value) {
						text = text.replace('%' + key + '%', value);
					});
				}
				return text;
			} else
				return context + '.' + id + " = undefined";
		}
	}
};// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_Notification
 * 
 * @version 1.0
 * @namespace plugin_Notification
 */
var plugin_Notification = {
	config : null,
	notifications : null,
	callbackFuntion : null,

	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			$(document).on('pageshow', '.app-page', function(event) {
				if (!plugin_Notification.notifications)
					plugin_Notification.notifications = app.store.localStorage.getObject("popup_notifications");
				app.store.localStorage.removeObject("popup_notifications");
				plugin_Notification.popupShow();
			});
			$(document).on("click", "#btnPopupAlert", function() {
				$("#popupAlert").popup("close");
				if (plugin_Notification.callbackFuntion) {
					plugin_Notification.callbackFuntion($("#popupAlert"));
					plugin_Notification.callbackFuntion == null;
				}
				plugin_Notification.popupShow();
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			//alert('insert popups');
			// alert($("body #popupDialog").length);
			$("body #popupDialog").remove();
			$("body #popupAlert").remove();
			// if (($("body #popupDialog").length == 0))
			app.template.append("#" + $(container).attr("id"), "JQueryMobilePopupDialog");
			// if (($("body #popupAlert").length == 0))
			app.template.append("#" + $(container).attr("id"), "JQueryMobilePopupAlert");

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions
	popupShow : function(notification) {
		// alert(JSON.stringify(plugin_Notification.notifications));
		if (notification != undefined) {
			setTimeout(function() {
				$("#popupAlert div[data-role=header] h1").text(notification.title);
				$("#popupAlert div.ui-content h3.ui-title").text(notification.headline);
				if (typeof notification.text == "object") {
					$("#popupAlert div.ui-content p").replaceWith(notification.text);
				} else {
					$("#popupAlert div.ui-content p").text(notification.text);
				}
				$("#popupAlert").popup("open");
				$("#popupAlert").popup("reposition");
			}, 300);
			plugin_Notification.callbackFuntion = notification.callback;
		} else {
			if (plugin_Notification.notifications != null) {
				if (Object.keys(plugin_Notification.notifications['popup_notifications']).length == 0)
					plugin_Notification.notifications = null;
				else {
					var firstKey = Object.keys(plugin_Notification.notifications['popup_notifications'])[0];
					// alert(firstKey);
					var notification = plugin_Notification.notifications['popup_notifications'][firstKey];
					// alert(JSON.stringify(notification));
					delete plugin_Notification.notifications['popup_notifications'][firstKey];
					setTimeout(function() {
						$("#popupAlert div[data-role=header] h1").text(notification.title);
						$("#popupAlert div.ui-content h3.ui-title").text(notification.headline);
						$("#popupAlert div.ui-content p").text(notification.text);
						$("#popupAlert").popup("open");
					}, 300);
				}
			}
		}
	},

	// public functions
	// called by user
	/**
	 * Public functions for plugin_Notification
	 * 
	 * @namespace plugin_Notification.functions
	 * 
	 */
	functions : {
		alert : function(text, title, headline, callback) {
			if (text == undefined)
				text = false;
			if (headline == undefined)
				headline = false;
			if (title == undefined)
				title = false;
			if (callback == undefined)
				callback = false;
			notification = {
				"type" : "alert",
				"text" : text,
				"title" : title,
				"headline" : headline,
				"callback" : callback
			};
			plugin_Notification.popupShow(notification);
		},
		dialog : function(text, title) {
		},
		add : {
			alert : function(text, title, headline, callback) {
				if (text == undefined)
					text = false;
				if (headline == undefined)
					headline = false;
				if (title == undefined)
					title = false;
				if (callback == undefined)
					callback = false;
				if (!plugin_Notification.notifications)
					plugin_Notification.notifications = app.store.localStorage.getObject("popup_notifications");
				if (!plugin_Notification.notifications)
					plugin_Notification.notifications = {};
				var nextKey = Object.keys(plugin_Notification.notifications).length + 1;
				plugin_Notification.notifications[nextKey] = {
					"type" : "alert",
					"text" : text,
					"title" : title,
					"headline" : headline,
					"callback" : callback
				};
				app.store.localStorage.setObject("popup_notifications", plugin_Notification.notifications);
			}
		}

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_RestClient = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			// load the webservice definitions
			$.each(plugin_RestClient.config.wsdFiles, function(path, loadFile) {
				if (loadFile) {
					var json = JsonLoader(path);
					// alert(JSON.stringify(json));
					$.each(json, function(name, values) {
						plugin_RestClient.config.webservices[name] = values;
					});
				}
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
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

	functions : {
		getJson : function(service, parameter) {
			app.debug.alert("plugin_RestClient.functions.getJson(" + service + ", " + JSON.stringify(parameter) + ")", 20);
			var path = plugin_RestClient.config.webservices[service].url;
			if (parameter != undefined) {
				$.each(parameter, function(key, value) {
					path = path.replace('{' + key + '}', value);
				});
			}
			var data = path.split('?')[1];
			if (data == undefined)
				data = "";
			var pathX = path.split('?')[0];
			var json = app.wsc.getJson(pathX, data, plugin_RestClient.config.webservices[service].method, plugin_RestClient.config.webservices[service].timeout);

			// add language wildcards
			if (plugin_MultilanguageIso639_3 != undefined) {
				if (json.language != undefined) {
					$.each(json.language, function(key, value) {
						app.lang.addParameter(key, value);
					});
				}
			}

			return json;
		}
	}
};
/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_WebServiceClient = {
	config : null,
	interval : null,
	constructor : function() {

	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			// first keep alive
			if (plugin_WebServiceClient.config.useKeepAlive) {
				plugin_WebServiceClient.keepAliveRequest();
				plugin_WebServiceClient.interval = window.setInterval("plugin_WebServiceClient.keepAliveRequest()", plugin_WebServiceClient.config.keepAlive.keepAliveIntervalInS * 1000);
			}

			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		var success = null;
		try {
			app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
			success = true;
		} catch (err) {
			success = false;
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
		var success = null;
		try {
			app.debug.alert("Plugin: " + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 5);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	pageSpecificEvents : function(container) {
		var success = null;
		try {
			app.debug.alert("Plugin: " + this.config.name + ".pageSpecificEvents()", 5);
			success = true;
		} catch (err) {
			success = false;
		}
		return success;
	},

	// private methods
	getPreferedServer : function() {
		app.debug.alert("plugin_WebServiceClient.getPreferedServer()", 14);
		if (!plugin_WebServiceClient.config.preferedServer.scheme || !plugin_WebServiceClient.config.preferedServer.scheme_specific_part || !plugin_WebServiceClient.config.preferedServer.host || !plugin_WebServiceClient.config.preferedServer.port) {
			plugin_WebServiceClient.setPreferedServer();
		}
		return plugin_WebServiceClient.config.preferedServer;
	},

	setPreferedServer : function() {
		app.debug.alert("plugin_WebServiceClient.setPreferedServer() ... mehrere server implementieren", 14);
		app.info.set("plugin_WebServiceClient.config.preferedServer.scheme", plugin_WebServiceClient.config.server.first.scheme);
		app.info.set("plugin_WebServiceClient.config.preferedServer.scheme_specific_part", plugin_WebServiceClient.config.server.first.scheme_specific_part);
		app.info.set("plugin_WebServiceClient.config.preferedServer.host", plugin_WebServiceClient.config.server.first.host);
		app.info.set("plugin_WebServiceClient.config.preferedServer.port", plugin_WebServiceClient.config.server.first.port);
	},

	getAjax : function(url, data, type, method, timeout) {
		app.debug.alert("plugin_WebServiceClient.getAjax(" + url + ", " + data + ", " + type + ", " + method + ", " + timeout + ")", 14);
		app.debug.alert("Call webservice: " + url + "?" + data, 60);
		var json = null;
		try {
			$.ajax({
				url : url,
				data : data,// ?key=value
				dataType : type, // json
				async : false,
				method : method, // post
				timeout : timeout, // 5000
				success : function(data, textStatus, jqXHR) {
					json = data;
				},
				error : function(jqXHR, textStatus, errorThrown) {
					app.debug.alert("Error in: plugin_WebServiceClient.getAjax(). Error: " + errorThrown, 50);
					json = false;
				}
			});
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			json = false;
		}
		app.debug.alert("Webservice returns: " + JSON.stringify(json, null, 4), 60);
		return json;
	},

	keepAliveStartTime : 0.0,

	keepAliveSuccess : function(data, textStatus, jqXHR) {
		app.debug.alert("plugin_WebServiceClient.keepAliveSuccess()", 14);
		var wsDuration = performance.now() - plugin_WebServiceClient.keepAliveStartTime;
		if (wsDuration >= plugin_WebServiceClient.config.keepAlive.maximumResponseTime) {
			app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive", false);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.code", 2);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.text", "Timeout error");
		} else {
			app.info.set("plugin_WebServiceClient.config.keepAlive.lastDuration", wsDuration);
			app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive", true);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.code", 0);
			app.info.set("plugin_WebServiceClient.config.keepAlive.error.text", "No error");
		}
		if (!plugin_WebServiceClient.config.keepAlive.isAlive) {
			app.debug.alert("KeepAlive request failed.\nReason: " + plugin_WebServiceClient.config.keepAlive.error.text + "\nTime: " + wsDuration, 60);
		}

	},

	keepAliveError : function(jqXHR, textStatus, errorThrown) {
		app.debug.alert("plugin_WebServiceClient.keepAliveError()", 14);
		var wsDuration = performance.now() - plugin_WebServiceClient.keepAliveStartTime;
		app.info.set("plugin_WebServiceClient.config.keepAlive.lastDuration", wsDuration);
		app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive", false);
		app.info.set("plugin_WebServiceClient.config.keepAlive.error.code", 1);
		app.info.set("plugin_WebServiceClient.config.keepAlive.error.text", "Webservice Error");
		if (!plugin_WebServiceClient.config.keepAlive.isAlive) {
			app.debug.alert("KeepAlive request failed.\nReason: " + plugin_WebServiceClient.config.keepAlive.error.text + "\nTime: " + wsDuration + "\n\n" + JSON.stringify(errorThrown, null, 4), 60);
		}
	},

	keepAliveAjax : function(url, data, type, method, timeout) {
		app.debug.alert("plugin_WebServiceClient.keepAliveAjax(" + url + ", " + data + ", " + type + ", " + method + ", " + timeout + ")", 14);
		try {
			$.ajax({
				url : url,
				data : data,// ?key=value
				dataType : type, // json
				async : true,
				method : method, // post
				timeout : timeout, // 5000
				success : plugin_WebServiceClient.keepAliveSuccess,
				error : plugin_WebServiceClient.keepAliveError
			});
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
		}
	},

	/*
	 * 
	 * 0 OK; 1 Webservice failed; 2 Timeout Error
	 */
	keepAliveRequest : function() {
		app.debug.alert("plugin_WebServiceClient.newKeepAliveRequest()", 14);
		var path = plugin_WebServiceClient.config.keepAlive.keepAlivePath;
		var data = "";
		var method = plugin_WebServiceClient.config.keepAlive.method;
		var timeout = plugin_WebServiceClient.config.keepAlive.timeout;
		var server = plugin_WebServiceClient.getPreferedServer();
		var url = server.scheme + server.scheme_specific_part + server.host + ":" + server.port + path;
		var wsDuration = 0;
		switch (plugin_WebServiceClient.config.keepAlive.type) {
		case "json":
			plugin_WebServiceClient.keepAliveStartTime = performance.now();
			plugin_WebServiceClient.keepAliveAjax(url, data, "json", method, timeout);
			break;
		case "xml":
			alert("still not implemented");
			break;
		case "text":
			alert("still not implemented");
			break;
		case "html":
			alert("still not implemented");
			break;
		default:
			alert("keepAliveRequest: no such type: " + plugin_WebServiceClient.config.keepAlive.type);
		}
	},

	functions : {
		getXml : function(uri, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getXml(" + uri + ", " + data + ", " + method + ", " + type + ")", 20);
			var xml = plugin_WebServiceClient.getAjax(uri, data, "xml");
			return xml;
		},

		getJson : function(path, data, method, timeout) {
			app.debug.alert("plugin_WebServiceClient.functions.getJson(" + path + ", " + data + ", " + method + ", " + timeout + ")", 20);
			var server = plugin_WebServiceClient.getPreferedServer();
			var url = server.scheme + server.scheme_specific_part + server.host + ":" + server.port + path;
			var json = plugin_WebServiceClient.getAjax(url, data, "json", method, timeout);
			return json;
		},

		// ask first or second or third or fourth or fifth server for the
		// prefered server
		askForPreferedServer : function() {
			var preferedServer = null;
			var success = null;
			plugin_WebServiceClient.config.preferedServer = preferedServer;
			return success;
		},
		keepAliveRequest : function() {

		}
	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_jQueryExtend = {
	config : null,
	constructor : function() {
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		(function($) {
			// Attrs
			$.fn.attrs = function(attrs) {
				var t = $(this);
				if (attrs) {
					// Set attributes
					t.each(function(i, e) {
						var j = $(e);
						for ( var attr in attrs) {
							j.attr(attr, attrs[attr]);
						}
						;
					});
					return t;
				} else {
					// Get attributes
					var a = {}, r = t.get(0);
					if (r) {
						r = r.attributes;
						for ( var i in r) {
							var p = r[i];
							if (typeof p.nodeValue !== 'undefined')
								a[p.nodeName] = p.nodeValue;
						}
					}
					return a;
				}
			};
		})(jQuery);
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

	functions : {}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_native_batteryStatus = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_native_camera = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_console = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_contacts = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_cordova = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_native_device = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_deviceMotion = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_deviceOrientation = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_dialogs = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_file = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_fileTransfer = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_geolocation = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_globalization = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_inappbrowser = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_media = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_mediaCapture = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace
 */
var plugin_native_networkInformation = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_splashscreen = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_statusbar = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin:
 * 
 * @version 1.0
 * @namespace 
 */
var plugin_native_vibration = {
	config : null,
	// called by plugins.js
	constructor : function() {
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	// called after pluginsLoaded() 
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.alert("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".pageSpecificEvents()", 11);
		var success = null;
		try {
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},
	// private functions

	// public functions
	// called by user
	functions : {

	}
};/**
 * Plugin Manager
 * 
 * @version 1.0
 * @namespace
 */
var plugins = {
	config : null,
	pluginNames : [],
	constructor : function() {
		if (!plugins.loadPluginConfig())
			alert("Fatal error: plugins.loadPluginConfig()");
		else if (!plugins.verifyPluginNames())
			alert("Fatal error: plugins.verifyPluginNames()");
		else if (!plugins.loadPlugins())
			alert("Fatal error: plugins.loadPlugins()");
		plugins.callPluginsLoadedEvent();
		plugins.callPluginEvents();
	},

	loadPluginConfig : function() {
		var success = null;
		if (app.config.min) {
			plugins.config = config_json;
			success = true;
		} else {
			var url = "../js/plugin/plugins.json";
			$.ajax({
				url : url,
				async : false,
				dataType : "json",
				success : function(json) {
					plugins.config = json;
					success = true;
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert("Fatal error in javascriptLoader.js: Can't load the plugin config. Url: " + url + " Error: " + textStatus);
					success = false;
				}
			});
		}
		return success;
	},

	verifyPluginNames : function() {
		return true;
	},

	onPluginLoaded : function(key) {
		var success = true;
		if (window['plugin_' + key] == undefined) {
			alert("Fatal error: Plugin class is not defined: plugin_" + key);
			success = false;
			return;
		}

		try {
			// load the config into plugins
			if (app.config.min) {
				window['plugin_' + key].config = window['config_' + key];
			} else {
				window['plugin_' + key].config = JsonLoader("../js/plugin/plugin." + key + ".json");
			}

			// check the config: name
			if (window['plugin_' + key].config.name == undefined) {
				alert("Fatal error: The property 'name' is not defined in JSON file: ../js/plugin." + key + ".json")
				return false;
			}
			// check the config: shortname
			if (window['plugin_' + key].config.shortname == undefined) {
				alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/plugin." + key + ".json")
				return false;
			}
		} catch (err) {
			alert("Fatal error: The plugin has no 'config' property: " + key);
			success = false;
			return;
		}

		try {
			// call the plugin's contructor
			window['plugin_' + key].constructor();
		} catch (err) {
			alert("Fatal error: The plugin has no constructor(): " + key);
			success = false;
			return;
		}

		try {

			// attach plugin's public functions to app object
			app.addObject(window['plugin_' + key].config.name, window['plugin_' + key].functions);
			app.addObject(window['plugin_' + key].config.shortname, window['plugin_' + key].functions);
		} catch (err) {
			alert("Fatal error: The plugin has no functions{}: " + key);
			success = false;
			return;
		}

		// plugin succesfully loaded
		// attach plugin's name to array
		plugins.pluginNames.push(key);

		return success;
	},

	loadPlugins : function() {
		var success = true;
		$.each(plugins.config, function(key, value) {
			if (value == true) {
				if (app.config.min) {
					// alert("load: " + key);

					success = plugins.onPluginLoaded(key);
				} else {
					var url = "../js/plugin/plugin." + key + ".js";
					$.ajax({
						url : url,
						async : false,
						dataType : "script",
						success : function(json) {
							success = plugins.onPluginLoaded(key);
						},
						error : function(jqXHR, textStatus, errorThrown) {
							alert("Fatal Error: Can't load plugin: " + url);
							success = false;
							return;
						}
					});
				}
			}
			if (!success)
				return false;
		});
		return success;
	},

	callPluginsLoadedEvent : function() {
		$.each(plugins.pluginNames, function(key, value) {
			try {
				window['plugin_' + value].pluginsLoaded();
			} catch (err) {
				alert("Notify: The plugin has no pluginsLoaded() event handler: plugin_" + value);
			}
		});
	},

	callPluginEvents : function() {
		$.each(plugins.pluginNames, function(key, value) {
			try {
				window['plugin_' + value].definePluginEvents();
			} catch (err) {
				app.debug.alert("Notify: The plugin has no definePluginEvents() method: plugin_" + value, 10);
			}
		});
	},
};

// constructor
