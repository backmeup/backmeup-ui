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

/**
 * Plugin:
 * 
 * @version 1.0
 * @module
 */
var plugin_FormInputDesigner = {
	config : null,
	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// called after all pages are loaded
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
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

		var attributes = 'class="' + plugin_FormInputDesigner.getClasses(options) + '"', styles = '';

		if (options.placeholder != undefined)
			attributes += ' placeholder="' + options.placeholder + '"';

		if (options.id != undefined)
			attributes += ' id="' + options.id + '"';

		if (options.name != undefined)
			attributes += ' name="' + options.name + '"';

		if (options.value != undefined)
			attributes += ' value="' + options.value + '"';
		
		if (options.href != undefined)
			attributes += ' href="' + options.href + '"';

		if (options.disabled === true)
			attributes += ' disabled="disabled"';

		if (options.checked === true)
			attributes += ' checked="checked"';

		if (options.attributes != undefined) {
			$.each(options.attributes, function(key, value) {
				attributes += ' ' + key + '="' + value + '"';
			});
		}

		if (options.styles != undefined) {
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
		var labelText = "", visible = "", forId = "";
		if (options.labelText != undefined) {
			labelText = options.labelText;
		}
		if (options.label != undefined && !options.label) {
			visible = "ui-hidden-accessible app-form-label-hidden";
		}
		if (options.id != undefined) {
			forId += ' for="' + options.id + '"';
		}
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
		var attributes = plugin_FormInputDesigner.getAttributes(options), input = '<input type="' + type + '"  ' + attributes + ' />', label = "", html;
		if (options.label != undefined && options.label == true)
			label = plugin_FormInputDesigner.getLabel(options);

		if (options.container != undefined && options.container) {
			html = plugin_FormInputDesigner.wrapInContainer(label, input);
		} else {
			html = label + input;
		}
		return html;
	},

	generateOutput : function(options, type) {
		app.debug.alert("plugin_FormInputDesigner.generateOutput(" + options + ", " + type + ")", 14);
		options = plugin_FormInputDesigner.verifyOptions(options);
		var attributes = plugin_FormInputDesigner.getAttributes(options), output;
		if (options.text == undefined)
			options.text = "";
		switch (type) {
		case 'img':
			output = '<' + type + ' ' + attributes + '/>';
			break;
		default:
			output = '<' + type + ' ' + attributes + '>' + options.text + '</' + type + '>';
			break;
		}

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
		form : {
			form : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.form.form()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "form", attributes = plugin_FormInputDesigner.getAttributes(options), output;
				plugin_FormInputDesigner.addClassToOptions(options, "app-form");

				if (options.text == undefined) {
					options.text = "";
				}
				output = '<' + type + ' ' + attributes + '>' + options.text + '</' + type + '>';

				return $(output);
			}
		},
		text : {
			hidden : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.text.text()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "hidden";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-text");
				return plugin_FormInputDesigner.generateInput(options, type);
			},
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
				// var type = "text";
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
			},
			reset : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.button.reset()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "reset";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-submit");
				return plugin_FormInputDesigner.generateInput(options, type);
			}
		},
		radio : {
			radio : function(options) {
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "radio";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-radio");
				return plugin_FormInputDesigner.generateInput(options, type);
			}
		},
		checkbox : {
			checkbox : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.checkbox.checkbox()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "checkbox";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-checkbox");
				return plugin_FormInputDesigner.generateInput(options, type);
			}
		},
		range : {
			range : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.range.range()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "range";
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-input-checkbox");
				return plugin_FormInputDesigner.generateInput(options, type);
			}
		},
		select : {
			multiple : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.select.select()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);

				options.attributes['multiple'] = "multiple";

				var type = "select", attributes = plugin_FormInputDesigner.getAttributes(options), output;
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-select-multiple");

				if (options.text == undefined) {
					options.text = "";
				}

				output = '<' + type + ' ' + attributes + '>' + options.text + '</' + type + '>';
				return $(output);
			},
			single : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.select.select()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);

				var type = "select", attributes = plugin_FormInputDesigner.getAttributes(options), output;
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-select-multiple");

				if (options.text == undefined) {
					options.text = "";
				}

				output = '<' + type + ' ' + attributes + '>' + options.text + '</' + type + '>';
				return $(output);
			},
			option : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.select.option()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "option", attributes = plugin_FormInputDesigner.getAttributes(options), output;
				plugin_FormInputDesigner.addClassToOptions(options, "app-form-select-option");

				if (options.text == undefined) {
					options.text = "";
				}
				output = '<' + type + ' ' + attributes + '>' + options.text + '</' + type + '>';

				return $(output);
			}
		},
		collabsible : {},
		list : {
			thumbnail : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.list.thumbnail()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var thumbnail = '<li>';
				thumbnail += '<a href="' + options.href + '" ' + plugin_FormInputDesigner.getAttributes(options) + '> <img src="' + options.imageSrc
						+ '" class="ui-li-thumb ">';
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
				var attributes = plugin_FormInputDesigner.getAttributes(options), navbar = $('<div data-role="navbar" ' + attributes + '></div>');
				return navbar;
			},
			panel : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.navigation.panel()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var attributes = plugin_FormInputDesigner.getAttributes(options), navbar = $('<div data-role="panel" ' + attributes + '></div>');
				return navbar;
			}
		},
		table : {
			table : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.table.table()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var attributes = plugin_FormInputDesigner.getAttributes(options), table = '<table ' + attributes + '><thead></thead><tbody></tbody></table>';
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
			img : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.img()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "img";
				plugin_FormInputDesigner.addClassToOptions(options, "app-p");
				return plugin_FormInputDesigner.generateOutput(options, type);
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
			},
			div : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.div()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "div";
				plugin_FormInputDesigner.addClassToOptions(options, "app-div");
				return $(plugin_FormInputDesigner.generateOutput(options, type));
			},
			canvas : function(options) {
				app.debug.alert("plugin_FormInputDesigner.functions.element.canvas()", 20);
				options = plugin_FormInputDesigner.verifyOptions(options);
				var type = "canvas";
				plugin_FormInputDesigner.addClassToOptions(options, "app-canvas");
				return $(plugin_FormInputDesigner.generateOutput(options, type));
			}
		}
	}
};