/**
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

	templates : {
		JQueryMobilePageStructure : function() {
			var html = '';
			html += '<div data-role="header"></div>';
			html += '<!-- /header -->';
			html += '<div data-role="content"></div>';
			html += '<!-- /content -->';
			html += '<div data-role="footer"></div>';
			html += '<!-- foooter -->';
			return html;
		},
		JQueryMobileNavigationPanel : function() {
			var html = '';
			html += '<div data-role="panel" id="nav-panel" data-display="push" data-theme="b">';
			html += '';
			html += '</div>';
			html += '<!-- / left panel -->';
			return html;
		},
		themis : {
			ThemisHeaderContent : function() {
				var html = '';
				html += '<a href="#nav-panel" data-icon="bars" data-iconpos="notext" class=" ui-nodisc-icon ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left ui-btn-icon-notext">Menu</a>';
				html += '<div class="ui-header-logo"><img src="../images/backmeup_b.png" /></div>';
				html += '<a class="ui-nodisc-icon ui-btn ui-corner-all ui-icon-search ui-btn-icon-right ui-btn-icon-notext" data-form="ui-icon" title=" Navigation " data-role="button" role="button"> Home </a>';
				return html;
			},
			ThemisNavigationPanelContent : function() {
				var html = '';
				html += '<ul data-role="listview">';
				html += '<li data-icon="delete"><a href="#" data-rel="close">Close menu</a></li>';
				html += '<li><a href="#" class="backmeuppanellink">Backup erstellen</a></li>';
				html += '<li><a href="#">Backup Jobs</a></li>';
				html += '<li><a href="#">Zip Archiv</a></li>';
				html += '<li><a href="#">Einstellungen</a></li>';
				html += '<li><a href="#">Logout</a></li>';
				html += '<li></li>';
				html += '</ul>';
				return html;
			}
		}
	},
	functions : {
		get : function(templateId) {
			return plugin_HtmlTemplates.templates[templateId];
		},
		append : function(selector, templateId) {
			$(selector).append(plugin_HtmlTemplates.functions.get(templateId));
		},
		prepend : function(selector, templateId) {
			$(selector).prepend(plugin_HtmlTemplates.functions.get(templateId));
		},
		overwrite : function(selector, templateId) {
			$(selector).empty();
			$(selector).prepend(plugin_HtmlTemplates.functions.get(templateId));
		}
	}
};