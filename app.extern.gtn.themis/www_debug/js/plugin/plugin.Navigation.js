/**
 * Copyright (c) 2015 martin.kattner@stygs.com
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var plugin_Navigation = {
	config : null,

	history : [],
	lastTransition : "none",

	// called by plugins.js
	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// called after all plugins are loaded
	pluginsLoaded : function() {
		app.debug.trace(this.config.name + ".pluginsLoaded()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// called after all pages are loaded
	// caller pages.js
	pagesLoaded : function() {
		app.debug.trace("plugin_" + this.config.name + ".pagesLoaded()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// called after pluginsLoaded()
	// caller: plugins.js
	definePluginEvents : function() {
		app.debug.trace("plugin_" + this.config.name + ".definePluginEvents()");

		$("body").on("pagecontainerbeforetransition", function(event, ui) {
			if (plugin_Navigation.history.length > 0) {
				if (plugin_Navigation.history[plugin_Navigation.history.length - 1].page != ui.toPage.attr("id")) {
					plugin_Navigation.history.push({
						"page" : ui.toPage.attr("id"),
						"transition" : ui.options.transition
					});
				}
			} else {
				plugin_Navigation.history.push({
					"page" : ui.toPage.attr("id"),
					"transition" : ui.options.transition
				});
			}
		});

	},
	// called by pages.js
	// called for each page after createPage();
	afterHtmlInjectedBeforePageComputing : function(container) {
		app.debug.trace("plugin_" + this.config.name + ".afterHtmlInjectedBeforePageComputing()");

	},
	// called once
	// set the jQuery delegates
	// caller: pages.js
	pageSpecificEvents : function(container) {
		app.debug.trace("plugin_" + this.config.name + ".pageSpecificEvents()");

	},
	// private functions

	// public functions
	// called by user
	/**
	 * Public functions for plugin_Navigation
	 * 
	 * @namespace plugin_Navigation.functions
	 * 
	 */
	functions : {
		redirect : function(url, transition, reverse) {
			app.debug.trace("plugin_Navigation.functions.redirect()");
			setTimeout(function() {
				if (transition != undefined)
					$("body").pagecontainer("change", url, {
						transition : transition,
						reverse : (reverse == undefined) ? false : reverse
					});
				else {
					$(location).attr("href", url);
				}
			}, 50);
		},
		back : function(transition) {
			app.debug.trace("plugin_Navigation.functions.back()");
			var lastPage, currentPage;
			if (plugin_Navigation.history.length > 1) {
				app.debug.debug("plugin_Navigation.functions.back() - application has history");
				currentPage = plugin_Navigation.history.pop();
				app.debug.debug("plugin_Navigation.functions.back() - current page: " + JSON.stringify(currentPage));
				lastPage = plugin_Navigation.history[plugin_Navigation.history.length - 1];
				app.debug.debug("plugin_Navigation.functions.back() - last page: " + JSON.stringify(lastPage));
				this.redirect(lastPage.page + ".html", currentPage.transition, true);
			}
		},
		forward : function() {
			app.debug.trace("plugin_Navigation.functions.forward()");
			window.history.forward();
		},
		reload : function() {
			app.debug.trace("plugin_Navigation.functions.reload()");
			

		},
		refresh : function() {
			app.debug.trace("plugin_Navigation.functions.refresh()");
			$('div[data-role=page]').remove();
			jQuery.mobile.changePage(window.location.href, {
		        allowSamePageTransition: true,
		        transition: 'none',
		        reloadPage: true
		    });
			
		},
		redirectAndReload : function(url) {
			app.debug.trace("plugin_Navigation.functions.redirectAndReload()");
			$.mobile.ajaxEnabled = false;
			window.location.replace(url);
		},
		normalizeUrl : function(uri) {
			app.debug.trace("plugin_Navigation.functions.normalizeUrl()");
			uri = URI(uri);
			if (uri.protocol() === "")
				uri.protocol('http');
			return uri.toString();
		}
	}
};