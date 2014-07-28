// ~/www/js$ jsdoc ./ -r -p -d documentation
/**
 * Plugin: plugin_OAuth
 * 
 * @version 1.0
 * @namespace plugin_OAuth
 */
var plugin_OAuth = {
	config : null,
	// called by plugins.js
	constructor : function() {
		
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		
	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		
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
	 * Public functions for plugin_OAuth
	 * 
	 * @namespace plugin_OAuth.functions
	 * 
	 */
	functions : {
		dropbox : function(url) {
			
			var dfd = $.Deferred();

			if (app.detect.isDesktop()) {
				//alert(url);
				$(location).attr("href", url);
			} else {
				var loginWindow = window.open(url, '_blank', 'location=yes');
				var eventCount = 0;
				$(loginWindow).on('loadstart', function(e) {
					eventCount++;
					if (eventCount > 2) {
						var url = e.originalEvent.url;
						var error = /\?error=(.+)$/.exec(url);
						var access_token = /\?oauth_token=(.+)$/.exec(url);
						if (access_token) {
							loginWindow.close();
							var access_token = (access_token + "").split("=");
							access_token = access_token[1] + "";
							access_token = access_token.split("&");
							dfd.resolve(access_token[0]);
						} else if (error) {
							loginWindow.close();
							dfd.reject(error);
						}
					}
				});
			}
			return dfd.promise();
		}
	}
};