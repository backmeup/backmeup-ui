var globalPage = {
	menu : {
		mobileNavigation : function() {
			var navbar = app.ni.navigation.navbar({
				"id" : "navHeader",
				"classes" : [ 'ui-state-persist' ]
			});

			var ul = app.ni.element.ul();

			ul.append(app.ni.element.li({
				"id" : "ftrLiNavSearch"
			}).append(app.ni.element.a({
				"id" : "ftrBtnNavSearch",
				"text" : app.lang.string("search", "actions"),
				"attributes" : {
					"data-icon" : "search"
				},
				"classes" : [ 'ui-nodisc-icon' ]
			})));

			if (!app.sess.getValue('heritage'))
				ul.append(app.ni.element.li({
					"id" : "ftrLiNavShare"
				}).append(app.ni.element.a({
					"id" : "ftrBtnNavShare",
					"text" : app.lang.string("share", "actions"),
					"attributes" : {
						"data-icon" : "forward",
						"href" : "share_backup.html"
					},
					"classes" : [ 'ui-nodisc-icon' ]
				})));

			if (!app.sess.getValue('heritage'))
				ul.append(app.ni.element.li({
					"id" : "ftrLiNavAdministrate"
				}).append(app.ni.element.a({
					"id" : "ftrBtnNavAdministrate",
					"text" : app.lang.string("administrate", "actions"),
					"attributes" : {
						"data-icon" : "gear",
						"href" : "backup_jobs.html",
					},
					"classes" : [ 'ui-nodisc-icon' ]
				})));

			ul.append(app.ni.element.li().append(app.ni.element.a({
				"id" : "ftrBtnNavMore",
				"text" : app.lang.string("more", "actions"),
				"attributes" : {
					"href" : "#page-panel",
					"data-icon" : "grid"
				},
				"classes" : [ 'ui-nodisc-icon' ]
			})));

			navbar.append(ul);
			return navbar;
		},
		desktopNavigation : function() {
			var navPanel = app.ni.navigation.panel({
				"id" : "nav-panel",
				"attributes" : {
					"data-display" : "overlay"
				}
			});

			var ul = app.ni.element.ul({
				"attributes" : {
					"data-role" : "listview"
				}
			});

			ul.append(app.ni.element.li().append(app.ni.element.a({
				"id" : "navBtnNavSearch",
				"text" : app.lang.string("search", "actions"),
				"attributes" : {
					"href" : "#"
				}
			})));

			if (!app.sess.getValue('heritage'))
				ul.append(app.ni.element.li().append(app.ni.element.a({
					"id" : "navBtnNavShare",
					"text" : app.lang.string("share", "actions"),
					"attributes" : {
						"href" : "share_backup.html"
					}
				})));

			if (!app.sess.getValue('heritage'))
				ul.append(app.ni.element.li().append(app.ni.element.a({
					"id" : "navBtnNavAdministrate",
					"text" : app.lang.string("administrate", "actions"),
					"attributes" : {
						"href" : "backup_jobs.html"
					}
				})));

			ul.append(app.ni.element.li().append(app.ni.element.a({
				"id" : "navBtnNavMore",
				"text" : app.lang.string("more", "actions"),
				"attributes" : {
					"href" : "#"
				}
			})));
			navPanel.append(ul);
			return navPanel;
		},
		pageNavigation : function() {
			var pagePanel = app.ni.navigation.panel({
				"id" : "page-panel",
				"attributes" : {
					"data-display" : "overlay",
					"data-position" : "right"
				}
			});

			ul = app.ni.element.ul({
				"attributes" : {
					"data-role" : "listview"

				}
			});

			if (!app.detect.isDesktop())
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

			if (!app.sess.getValue('heritage'))
				ul.append(app.ni.element.li().append(app.ni.element.a({
					"id" : "navPageNewBackup",
					"text" : app.lang.string("create_backup", "actions"),
					"attributes" : {
						"href" : "create_backup_1.html",

					}
				})));

			if (!app.sess.getValue('heritage'))
				ul.append(app.ni.element.li().append(app.ni.element.a({
					"id" : "navFriendList",
					"text" : app.lang.string("friend list", "actions"),
					"attributes" : {
						"href" : "friendList.html",

					}
				})));
			
			ul.append(app.ni.element.li().append(app.ni.element.a({
				"id" : "navFriendList",
				"text" : app.lang.string("timeline search", "actions"),
				"attributes" : {
					"href" : "timelineSearch.html",

				}
			})));

			if (!app.sess.getValue('heritage'))
				if (!app.sess.loggedIn())
					ul.append(app.ni.element.li().append(app.ni.element.a({
						"id" : "navPageLogin",
						"text" : app.lang.string("login", "actions"),
						"attributes" : {
							"href" : "login.html",

						}
					})));

			if (app.sess.loggedIn())
				ul.append(app.ni.element.li().append(app.ni.element.a({
					"id" : "navPageLogout",
					"text" : app.lang.string("logout", "actions"),
					"attributes" : {
						"href" : "#",

					}
				})));

			if (!app.sess.loggedIn())
				ul.append(app.ni.element.li().append(app.ni.element.a({
					"id" : "navPageRegister",
					"text" : app.lang.string("register", "actions"),
					"attributes" : {
						"href" : "register.html",

					}
				})));

			pagePanel.append(ul);
			return pagePanel;
		}
	},

	/*
	 * jQuery mobile event - pagebeforechange
	 */
	pagebeforechange : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagebeforechange(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagebeforecreate
	 */
	pagebeforecreate : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagebeforecreate(event, container)", 5);

		/*
		 * 
		 */
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePageStructure");
		$('#' + container.attr("id")).attr("data-dom-cache", "false");

		// add css classes (desktop mobile etc.)
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});

		/*
		 * jQuery header object
		 */
		var header = container.find('div[data-role=header]');
		/*
		 * jQuery content object
		 */
		var content = container.find('div[data-role=content]');
		/*
		 * jQuery footer object
		 */
		var footer = container.find('div[data-role=footer]');

		/*
		 * jQuery nav-panel object - top menu
		 */
		var navPanel = globalPage.menu.desktopNavigation();

		// $("body #page-panel").length
		var pagePanel = globalPage.menu.pageNavigation();

		header.after(pagePanel);
		header.after(navPanel);

		// header.attr("data-position", "fixed");
		header.attr("id", "app-header");
		header.addClass("app-header");
		// header content

		/*
		 * footer navigation bar - navigation for apps
		 */
		var navbar = globalPage.menu.mobileNavigation();
		// navPanel.append(ul);

		footer.append(navbar);
		footer.addClass("app-footer");
		footer.attr("data-position", "fixed");
		footer.attr("data-tap-toggle", "false");
		footer.attr("id", "app-footer");
		footer.attr("data-id", "fixFooter");

		/*
		 * desktop specific operations
		 */
		if (app.detect.isDesktop()) {

			pagePanel.removeAttr("data-role");
			pagePanel.find("ul").removeAttr("data-role");

			navPanel.removeAttr("data-role");
			navPanel.find("ul").removeAttr("data-role");

			// header.removeAttr("data-role");
			// header.css("display", "none");

			// footer.removeAttr("data-role");
			// footer.css("display", "none");

			footer.removeAttr("data-position");
			footer.remove();

			// $(document).off("mouseenter", "#navBtnNavMore");
			$(document).on("mouseenter", "#navBtnNavMore", function() {
				$("#page-panel").css("display", "block");
			});
			// $(document).off("mouseleave", "#page-panel");
			$(document).on("mouseleave", "#page-panel", function() {
				$(this).slideUp();
			});

			header.append(app.ni.element.img({
				"attributes" : {
					"alt" : "",
					"src" : "../images/backmeup_header.png"
				}
			}));
		}

		/*
		 * mobile specific operations
		 */
		if (app.detect.isMobile()) {
			header.removeAttr("data-role");
			header.css("display", "none");

		}

		$(document).on("click", "#navShowLog", function() {
			var text = "";
			$.each(plugin_Debug.logObject, function(key, value) {
				text += value + "<br />\n";
			});
			app.notify.alert(text, "UI Log File", "UI Log File");
		}),

		$(document).on("click", "#ftrBtnNavSearch, #navBtnNavSearch", function() {
			var search = $("<div></div>");
			search.append(app.ni.text.search({
				"id" : "txtNavSearch"
			}));
			app.notify.dialog(search, false, app.lang.string("search_backup", "headlines"), app.lang.string("search", "actions"), app.lang.string("cancel", "actions"), function(popup) {
				var searchText = $(popup).find("#txtNavSearch").val();
				app.store.localStorage.set("data-html5-themis-search-value", searchText);
				window.setTimeout(function() {
					if (location.href.split("/").slice(-1)[0] == "search.html") {
						// alert("on search page");
						$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));
						page_search.updateSearchDiv($("#divSearchResults"));
					} else {
						// alert("not on search page");
						app.help.navigation.redirect("search.html", "none");
					}
				}, 10);
			}, function(popup) {
				;
			}, 100);
		});

		$(document).on('click', '#navPageLogout', function() {
			app.sess.loggedIn(false);
			localStorage.clear();

			app.help.navigation.redirect("static-index.html");
		});
	},

	/*
	 * jQuery mobile event - pagebeforehide
	 */
	pagebeforehide : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagebeforehide(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagebeforeload
	 */
	pagebeforeload : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagebeforeload(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagebeforeshow
	 */
	pagebeforeshow : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagebeforeshow(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagechange
	 */
	pagechange : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagechange(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagechangefailed
	 */
	pagechangefailed : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagechangefailed(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagecreate
	 */
	pagecreate : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagecreate(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pagehide
	 */
	pagehide : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pagehide(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pageinit
	 */
	pageinit : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pageinit(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pageload
	 */
	pageload : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pageload(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pageloadfailed
	 */
	pageloadfailed : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pageloadfailed(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pageremove
	 */
	pageremove : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pageremove(event, container)", 5);
	},

	/*
	 * jQuery mobile event - pageshow
	 */
	pageshow : function(event, container) {
		app.debug.alert("globalPage.js - globalPage.pageshow(event, container)", 5);
	}
}