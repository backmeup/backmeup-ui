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

					// add css classes
					// alert(JSON.stringify(app.detect.classes.array()));
					$.each(app.detect.classes.array(), function(key, name) {
						if (!$('body').hasClass(name))
							$('body').addClass(name);
					});

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
					if (app.detect.isDesktop()) {
						navPanel.removeAttr("data-role");
						navPanel.append('<div id="gp_header"><img src="../images/backmeupklein.png"></div>');
					}
					
					navPanel.append(app.template.get("ThemisNavigationPanelContent", "themis"));
					var usern=app.store.localStorage.get("data-html5-themis-username");
					if (usern == null) usern = "bitte anmelden";
					navPanel.find("ul").prepend('<li><a href="usersettings.html" >' + usern + '</a></li>');

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
					if (app.detect.isDesktop()) {
						pagePanel.removeAttr("data-role");
					}
					var ul = app.ni.element.ul({
						"attributes" : {
							"data-role" : "listview"
						
						}
					});
					ul.append(app.ni.element.p({
						"text" : "Seitenspezifisches Menü",
						"id" : "spmenue"
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

					container.prepend(pagePanel);

					header.attr("data-position", "fixed");
					header.attr("id", "app-header");
					header.addClass("app-header");
					// header content
					
					header.append(app.ni.element.a({
						"attributes" : {
							"href" : "#nav-panel",
							"id" : "gm_menulink"
						},
						"text" : "Menu",
						"classes" : [ "ui-btn", "ui-corner-all", "ui-btn-icon-left", "ui-btn-icon-notext" ]
					}));

					header.append(app.ni.element.h2({
						"text" : app.store.localStorage.get("data-html5-themis-username"),
						"id" : "gp_footer2"
					}));

					header.append(app.ni.element.a({
						"href" : "#nav-panel",
						"text" : "Search",
						"id" : "gp_search_btn",
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
					footer.addClass("app-footer");
					footer.attr("data-position", "fixed");
					footer.attr("id", "app-footer");

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
};