// ~/www/js$ jsdoc ./ -r -p -d documentation
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
		
	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.alert(this.config.name + ".pluginsLoaded()", 11);
		
		try {
			var url = plugin_GlobalPage.config.pathToImplementation;
			$.ajax({
				url : url,
				dataType : "script",
				async : false,
				success : function(data, textStatus, jqXHR) {
					;
				},
				error : function(jqXHR, textStatus, errorThrown) {
					alert("Fatal error in plugin_GlobalPage.js: Can't load the javascript. Url: " + url + " Error: " + textStatus);
					alert(errorThrown);
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
	// caller pages.js
	pagesLoaded : function() {
		app.debug.alert("plugin_" + this.config.name + ".pagesLoaded()", 11);
		
	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.alert("plugin_" + this.config.name + ".definePluginEvents()", 11);
		
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
			globalPage.pagebeforechange(event, container);
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforecreate()", 14);
			if (container.attr("data-type") == "static") {
				container.find("[data-language]").each(function(index, element) {
					var languageArray = $(this).attr('data-language').split(".");
					$(this).html(app.lang.string(languageArray[1], languageArray[0]));
				});
			} else if (container.attr("data-type") == "static-inline") {
				container.find("[data-language]").each(function(index, element) {
					var languageArray = $(this).attr('data-language').split(".");
					$(this).html(app.lang.string(languageArray[1], languageArray[0]));
				});
				var html = container.html();
				globalPage.pagebeforecreate(event, container);
				container.find('div[data-role=content]').append(html);
			} else if (window['page_' + container.attr("id")].config.loginObligate == undefined)
				alert('Pease add loginObligate to your page.' + container.attr("id") + '.json file.');
			else if ((window['page_' + container.attr("id")].config.loginObligate && app.store.localStorage.get("data-html5-themis-loggedin")) || (!window['page_' + container.attr("id")].config.loginObligate && !app.store.localStorage.get("data-html5-themis-loggedin")) || (!window['page_' + container.attr("id")].config.loginObligate && app.store.localStorage.get("data-html5-themis-loggedin")) || (container.attr("data-type") == "static")) {
				globalPage.pagebeforecreate(event, container);
			} else {
				//alert("you re not logged in");
				$(document).off();
				$(location).attr('href', "static-index.html");
			}
		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforehide()", 14);
			globalPage.pagebeforehide(event, container);
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforeload()", 14);
			globalPage.pagebeforeload(event, container);
		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagebeforeshow()", 14);
			globalPage.pagebeforeshow(event, container);
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagechange()", 14);
			globalPage.pagechange(event, container);
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagechangefailed()", 14);
			globalPage.pagechangefailed(event, container);
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagecreate()", 14);
			globalPage.pagecreate(event, container);
		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pagehide()", 14);
			globalPage.pagehide(event, container);
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageinit()", 14);
			globalPage.pageinit(event, container);
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageload()", 14);
			globalPage.pageload(event, container);
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageloadfailed()", 14);
			globalPage.pageloadfailed(event, container);
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageremove()", 14);
			globalPage.pageremove(event, container);
		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("plugin.GlobalPage: page_" + $(container).attr('id') + ".pageshow()", 14);
			globalPage.pageshow(event, container);
		}
	}
};