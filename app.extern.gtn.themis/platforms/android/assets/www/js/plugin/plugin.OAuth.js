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
	desktopOAuth : function(url) {
		// alert(app.config.apacheCordova);
		if (app.config.apacheCordova == null || app.config.apacheCordova == false) {
			// alert("desktop oauth");
			app.help.navigation.redirect(url);
			return true;
		}
		return false;
	},
	functions : {
		tokenFromUrl : function(parameter) {
			var url = window.location.href, regExpString, regExp, access_token, access_token;
			regExpString = "" + parameter + "=(.+)$";
			regExp = new RegExp(regExpString)
			// var error = /\?error=(.+)$/.exec(url);
			access_token = regExp.exec(url);
			if (access_token) {
				access_token = (access_token[0] + "").split("=");
				access_token = access_token[1] + "";
				access_token = access_token.split("&");
				access_token = access_token[0];
			} else {
				return false;
			}
			return access_token;
		},
		generic : function(url) {
			if (url.indexOf("dropbox") > -1)
				return app.oa.dropbox(url);
			else if (url.indexOf("facebook") > -1)
				return app.oa.facebook(url);
			else {
				var dfd = $.Deferred();

				window.setTimeout(function() {
					dfd.resolve("Unkonwn URL: " + url);
				}, 1000);

				return dfd.promise();
			}
		},
		// dropbox
		dropbox : function(url) {
			var dfd = $.Deferred();
			if (plugin_OAuth.desktopOAuth(url))
				return;
			var loginWindow = window.open(url, '_blank', 'location=yes'), eventCount = 0;
			$(loginWindow).on('loadstart', function(e) {
				eventCount++;
				if (eventCount > 2) {
					var url = e.originalEvent.url;
					var error = /\?error=(.+)$/.exec(url);
					var success = /\?oauth_token=(.+)$/.exec(url);
					if (success) {
						loginWindow.close();
						dfd.resolve(url.split('?')[1]);
					} else if (error) {
						loginWindow.close();
						dfd.reject(error);
					}
				}
			});
			return dfd.promise();
		},

		// facebook
		facebook : function(url) {
			var dfd = $.Deferred();
			if (plugin_OAuth.desktopOAuth(url))
				return;
			var loginWindow = window.open(url, '_blank', 'location=yes'), eventCount = 0;
			$(loginWindow).on('loadstart', function(e) {
				eventCount++;
				if (eventCount > 2) {
					var url = e.originalEvent.url;
					var error = /\?error_code=(.+)$/.exec(url);
					var success = /\?code=(.+)$/.exec(url);
					if (success) {
						loginWindow.close();
						dfd.resolve(url.split('?')[1]);
					} else if (error) {
						loginWindow.close();
						dfd.reject(error);
					}
				}
			});

			return dfd.promise();
		},
		facebookToken : function(code, client_id, client_secret, redirect_uri) {
			$.post('https://accounts.google.com/o/oauth2/token', {
				code : code,
				client_id : client_id,
				client_secret : client_secret,
				redirect_uri : redirect_uri,
				grant_type : 'authorization_code'
			}).done(function(data) {
				// deferred.resolve(data);
			}).fail(function(response) {
				// deferred.reject(response.responseJSON);
			});
		}
	}
};