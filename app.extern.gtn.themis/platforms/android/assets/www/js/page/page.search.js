var page_search = {
	config : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);

	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		content.append(app.ni.element.h1({
			"text" : app.lang.string("search_in_backups", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmSearch",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtSearch",
			"placeholder" : (app.store.localStorage.get("data-html5-themis-search-value")) ? app.store.localStorage.get("data-html5-themis-search-value")
					: app.lang.string("search", "labels"),
			"label" : false,
			"labelText" : app.lang.string("search", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.a({
			"id" : "btnSearch",
			"text" : app.lang.string("search", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

		var searchResults = app.ni.element.div({
			"id" : "divSearchResults",
			"styles" : {
				"margin-top" : "15px",
				"border-top" : "1px solid #999"
			}
		});
		content.append(searchResults);

		if (app.store.localStorage.get("data-html5-themis-search-value") != null) {
			window.setTimeout(function() {
				page_search.updateSearchDiv(searchResults);
			}, 1000);
		}

	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(this.config.pageId).on("focus click", "#txtSearch", function(event) {
			$("#btnSearch").css("display", "block");
			if (app.store.localStorage.get("data-html5-themis-search-value") && $("#txtSearch").val() == "") {
				$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));
				this.select();
			}
		});

		$(this.config.pageId).on("submit", "#frmSearch", function(event) {
			event.preventDefault();
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});
		
		$(this.config.pageId).on("click", "#btnSearch", function(event) {
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

	},

	updateSearchDiv : function(searchResults) {

		searchResults.empty();

		app.template.append("div[data-role=content]", "app-loader-bubble");

		var promise = app.rc.getJson("search", {
			//"userId" : 8,// app.store.localStorage.get("data-html5-themis-username"),
			"query" : app.store.localStorage.get("data-html5-themis-search-value")
		}, true);

		promise.fail(function() {
			app.notify.alert(app.lang.string("search_error", "texts"), false, app.lang.string("search", "headlines"), app.lang.string("ok", "actions"));
		});

		promise
				.done(function(resultObject) {

					var list = $(app.template.get("listB", "responsive"));
					var searchElement = app.ni.element.li();
					searchElement.append(app.ni.element.img({
						"attributes" : {
							"src" : "test.jpg"
						}
					}));
					var textContainer = app.ni.element.div();
					textContainer.append(app.ni.element.h2({
						"classes" : [ 'list-B-headline' ],
						"text" : "Pearl ist eine freie..."
					}));
					textContainer
							.append(app.ni.element
									.p({
										"classes" : [ 'list-B-text' ],
										"text" : "plattform­unabhängige und inter­pretierte Programmier­sprache (Skript­sprache), die mehrere Programmier­paradigmen unter­stützt. Der Linguist Larry Wall entwarf sie 1987 als Synthese aus C, awk, den Unix-­Befehlen und anderen Einflüssen. Ursprüng­lich als Werkzeug zur Verar­beitung und Manipu­lation von Textdateien insbesondere bei System- und Netzwerk­administration vorgesehen (zum Beispiel Auswertung von Logdateien), hat Perl auch ..."
									}));
					textContainer.append(app.ni.element.p({
						"classes" : [ 'list-B-status' ],
						"text" : "Statuszeile mit links"
					}));
					searchElement.append(textContainer);
					list.append(searchElement);
					// ----
					var searchElement = app.ni.element.li();
					searchElement.append(app.ni.element.img({
						"attributes" : {
							"src" : "test.jpg"
						}
					}));
					var textContainer = app.ni.element.div();
					textContainer.append(app.ni.element.h2({
						"classes" : [ 'list-B-headline' ],
						"text" : "Pearl ist eine freie..."
					}));
					textContainer
							.append(app.ni.element
									.p({
										"classes" : [ 'list-B-text' ],
										"text" : "plattform­unabhängige und inter­pretierte Programmier­sprache (Skript­sprache), die mehrere Programmier­paradigmen unter­stützt. Der Linguist Larry Wall entwarf sie 1987 als Synthese aus C, awk, den Unix-­Befehlen und anderen Einflüssen. Ursprüng­lich als Werkzeug zur Verar­beitung und Manipu­lation von Textdateien insbesondere bei System- und Netzwerk­administration vorgesehen (zum Beispiel Auswertung von Logdateien), hat Perl auch ..."
									}));
					textContainer.append(app.ni.element.p({
						"classes" : [ 'list-B-status' ],
						"text" : "Statuszeile mit links"
					}));
					searchElement.append(textContainer);
					list.append(searchElement);
					var searchElement = app.ni.element.li();
					searchElement.append(app.ni.element.img({
						"attributes" : {
							"src" : "test.jpg"
						}
					}));
					var textContainer = app.ni.element.div();
					textContainer.append(app.ni.element.h2({
						"classes" : [ 'list-B-headline' ],
						"text" : "Pearl ist eine freie..."
					}));
					textContainer
							.append(app.ni.element
									.p({
										"classes" : [ 'list-B-text' ],
										"text" : "plattform­unabhängige und inter­pretierte Programmier­sprache (Skript­sprache), die mehrere Programmier­paradigmen unter­stützt. Der Linguist Larry Wall entwarf sie 1987 als Synthese aus C, awk, den Unix-­Befehlen und anderen Einflüssen. Ursprüng­lich als Werkzeug zur Verar­beitung und Manipu­lation von Textdateien insbesondere bei System- und Netzwerk­administration vorgesehen (zum Beispiel Auswertung von Logdateien), hat Perl auch ..."
									}));
					textContainer.append(app.ni.element.p({
						"classes" : [ 'list-B-status' ],
						"text" : "Statuszeile mit links"
					}));
					searchElement.append(textContainer);
					list.append(searchElement);
					var searchElement = app.ni.element.li();
					searchElement.append(app.ni.element.img({
						"attributes" : {
							"src" : "test.jpg"
						}
					}));
					var textContainer = app.ni.element.div();
					textContainer.append(app.ni.element.h2({
						"classes" : [ 'list-B-headline' ],
						"text" : "Pearl ist eine freie..."
					}));
					textContainer
							.append(app.ni.element
									.p({
										"classes" : [ 'list-B-text' ],
										"text" : "plattform­unabhängige und inter­pretierte Programmier­sprache (Skript­sprache), die mehrere Programmier­paradigmen unter­stützt. Der Linguist Larry Wall entwarf sie 1987 als Synthese aus C, awk, den Unix-­Befehlen und anderen Einflüssen. Ursprüng­lich als Werkzeug zur Verar­beitung und Manipu­lation von Textdateien insbesondere bei System- und Netzwerk­administration vorgesehen (zum Beispiel Auswertung von Logdateien), hat Perl auch ..."
									}));
					textContainer.append(app.ni.element.p({
						"classes" : [ 'list-B-status' ],
						"text" : "Statuszeile mit links"
					}));
					searchElement.append(textContainer);
					list.append(searchElement);
					// ----

					searchResults.append(list);
				});
		promise.always(function() {
			$(".app-loader").remove();
		});
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};