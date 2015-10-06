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

var page_search = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
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
			"placeholder" : (app.store.localStorage.get("data-html5-themis-search-value")) ? app.store.localStorage.get("data-html5-themis-search-value") : app.lang.string("search", "labels"),
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
		  "id" : "divSearchResults"
		});

		var searchResultGrid = app.ni.element.div({
			"id" : "divSearchResultGrid"
		});
		searchResults.append(searchResultGrid);

		var searchResultHistogram = app.ni.element.div({
			"id" : "divSearchResultHistogram"
		});
		searchResults.append(searchResultHistogram);

		var searchResultMap = app.ni.element.div({
			"id" : "divSearchResultMap"
		});
		searchResults.append(searchResultMap);

		content.append(searchResults);

		if (app.store.localStorage.get("data-html5-themis-search-value") !== null) {
			window.setTimeout(function() {
				page_search.updateSearchDiv(searchResults);
			}, 1000);
		}

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(this.config.pageId).on("focus click", "#txtSearch", function(event) {
			$("#btnSearch").css("display", "block");
			if (app.store.localStorage.get("data-html5-themis-search-value") && $("#txtSearch").val() === "") {
				$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));
				this.select();
			}
		});

		$(this.config.pageId).on("click", "#btnApplyFilter", function() {
			// app.store.localStorage.set("data-html5-themis-search-value",
			// $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

		$(this.config.pageId).on("click", "#btnRemoveFilter", function() {
			// app.store.localStorage.set("data-html5-themis-search-value",
			// $("#txtSearch").val());
			$('.app-search-filter option:selected').val("");
			page_search.updateSearchDiv($("#divSearchResults"));
		});

		$(this.config.pageId).on("click", "#btnShareSearchResult", function() {
			page_search.singleResult.shareDocumentGroup();
		});

		$(this.config.pageId).on("submit", "#frmSearch", function(event) {
			event.preventDefault();
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

		$(this.config.pageId).on("click", "#btnTagModeOn", function(event) {
			event.preventDefault();
			// alert('tag mode on');
			$('.app-search-item').each(function(index, element) {
				$(element).find('.ui-li-aside').attr("data-text", $(element).find('.ui-li-aside').text());
				$(element).find('.ui-li-aside').html(app.ni.checkbox.checkbox({}));
				$(element).replaceWith($(element)[0].outerHTML.replace("onclick=", "onclick_disable="));
			});

		});

		$(this.config.pageId).on("click", ".app-search-item", function(event) {
			var checkbox = $(this).find('input[type=checkbox]');
			if (checkbox.length > 0) {
				if (checkbox.prop("checked"))
					checkbox.prop("checked", false);
				else
					checkbox.prop("checked", true);
			}
		});

		$(this.config.pageId).on("click", "#btnTagModeOff", function(event) {
			event.preventDefault();
			// alert('tag mode off');
			$('.app-search-item').each(function(index, element) {
				$(element).find('.ui-li-aside').text($(element).find('.ui-li-aside').attr("data-text"));
				$(element).replaceWith($(element)[0].outerHTML.replace("onclick_disable=", "onclick="));
			});
		});

		$(this.config.pageId).on("click", "#btnCreateCollection", function(event) {
			event.preventDefault();
			var documentIdArray = [];
			// alert('add selected to collection');
			$('.app-search-item .ui-li-aside input[type=checkbox]:checked').each(function(index, element) {
				documentIdArray.push($(element).parent().parent().attr("data-html5-fileid"));
			});
			// alert(JSON.stringify(documentIdArray));
			page_search.singleResult.createCollection(documentIdArray);

		});

		$(this.config.pageId).on("click", "#btnAddToCollection", function(event) {
			event.preventDefault();
			var documentIdArray = [];
			// alert('add selected to collection');
			$('.app-search-item .ui-li-aside input[type=checkbox]:checked').each(function(index, element) {
				documentIdArray.push($(element).parent().parent().attr("data-html5-fileid"));
			});
			// alert(JSON.stringify(documentIdArray));
			page_search.singleResult.addToCollection(documentIdArray);

		});

		$(this.config.pageId).on("click", "#btnRemoveFromCollection", function(event) {
			event.preventDefault();
			var documentIdArray = [];
			// alert('add selected to collection');
			$('.app-search-item .ui-li-aside input[type=checkbox]:checked').each(function(index, element) {
				documentIdArray.push($(element).parent().parent().attr("data-html5-fileid"));
			});
			// alert(JSON.stringify(documentIdArray));
			page_search.singleResult.removeFromCollection(documentIdArray);

		});

		$(this.config.pageId).on("click", "#btnSearch", function(event) {
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

	},

	singleResult : {

		getFilters : function(resultObject) {
			var divFilter = app.ni.element.div({
				id : "divFilter"
			}), divCollection = app.ni.element.div({
				id : "divCollection"
			}), divSharing = app.ni.element.div({
				id : "divSharing"
			}), select;

			divFilter.append(app.ni.element.h2({
				text : app.lang.string("filter area", "page.search")
			}));
			$.each(resultObject, function(key, filterObject) {
				if (key.substring(0, 2) === "by") {
					select = app.ni.select.single({
						id : key,
						classes : [ 'app-search-filter' ],
						attributes : {
							"data-inline" : "true",
							"data-mini" : "true"
						},
					});
					select.append(app.ni.select.option({
						text : app.lang.string(key, "page.search"),
						value : ""
					}));

					$.each(filterObject, function(key, filterValue) {
						select.append(app.ni.select.option({
							text : filterValue.title,
							value : filterValue.title,
							selected : (filterObject.length == 1) ? true : false
						}));
					});

					divFilter.append(select);
				}
			});

			divFilter.append(app.ni.element.a({
				id : "btnApplyFilter",
				text : app.lang.string("apply filter", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divFilter.append(app.ni.element.a({
				id : "btnRemoveFilter",
				text : app.lang.string("remove filter", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divSharing.append(app.ni.element.h2({
				text : app.lang.string("sharing area", "page.search")
			}));

			divSharing.append(app.ni.element.a({
				id : "btnShareSearchResult",
				text : app.lang.string("share search result", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.h2({
				text : app.lang.string("collection area", "page.search")
			}));

			divCollection.append(app.ni.element.a({
				id : "btnTagModeOn",
				text : app.lang.string("tag mode on", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnTagModeOff",
				text : app.lang.string("tag mode off", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnCreateCollection",
				text : app.lang.string("create new collection", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnAddToCollection",
				text : app.lang.string("add to collection", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnRemoveFromCollection",
				text : app.lang.string("remove from collection", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			return $('<div>').append(divFilter).append(divSharing).append(divCollection);
		},

		getThumbnail : function(singleSearchResult) {
			var imgUrl;
			if ((imgUrl = singleSearchResult.thumbnailUrl) !== undefined) {
				return imgUrl.replace("###TOKEN###", encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)));
			} else if ((imgUrl = app.img.getUrlById("search_" + singleSearchResult.type)) != "search_" + singleSearchResult.type)
				return imgUrl;
			else {
				return false;
			}
		},

		getResultUrl : function(singleSearchResult) {
			if (singleSearchResult.downloadUrl !== undefined) {
				return singleSearchResult.downloadUrl.replace("###TOKEN###", encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)));
			} else {
				return false;
			}
		},

		getSearchDetails : function(singleSearchResult) {
			var div = app.ni.element.div({
				classes : [ 'app-themis-searchresult' ]
			});

			div.append(app.ni.element.a({
				text : app.lang.string("share item", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ],
				attributes : {
					onclick : "javascript:page_search.singleResult.shareDocument(" + JSON.stringify(singleSearchResult).split("\"").join("'") + ")"
				}
			}));

			div.append(app.ni.element.a({
				text : app.lang.string("close search details", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ],
				attributes : {
					onclick : "javascript:app.notify.close.alert()"
				}
			}));

			if (page_search.singleResult.getResultUrl(singleSearchResult)) {

				div.append(app.ni.element.a({
					"text" : app.lang.string("open file in new browser window", "page.search"),
					"attributes" : {
						"href" : "#",
						"onclick" : "javascript:window.open('" + page_search.singleResult.getResultUrl(singleSearchResult) + "','_blank', 'location=yes')"
					},
					classes : [ 'ui-btn', 'ui-btn-inline' ]
				}));
			}

			$.each(singleSearchResult, function(key, value) {

				if (typeof value === "object") {
					$.each(value, function(key, value) {
						div.append(app.ni.element.p({
							"text" : app.lang.string(key, "page.search") + ": " + value
						}));
					});
				} else {
					div.append(app.ni.element.p({
						"text" : app.lang.string(key, "page.search") + ": " + value
					}));
				}
			});
			return div;
		},

		openDetails : function(singleSearchResult) {

			// alert(JSON.stringify(singleSearchResult))
			app.notify.alert(page_search.singleResult.getSearchDetails(singleSearchResult), singleSearchResult.title, false, app.lang.string("back", "actions"), function() {
			}, 50);

		},

		getSharingInputs : function() {
			var div = app.ni.element.div({
				classes : [ 'app-themis-sharing' ]
			}), friends = app.ni.select.single({
				id : "selFriend"
			}), sharingList, heritageList;

			div.append(app.ni.text.text({
				id : "txtShareName",
				placeholder : app.lang.string("share name", "page.search"),
				label : true,
				labelText : app.lang.string("sahre name", "page.search"),
				container : false
			}));

			div.append(app.ni.text.text({
				id : "txtShareDescription",
				placeholder : app.lang.string("share description", "page.search"),
				label : true,
				labelText : app.lang.string("share description", "page.search"),
				container : false
			}));

			// div.append(app.ni.text.text({
			// id : "txtShareUserId",
			// placeholder : app.lang.string("share userid", "page.search"),
			// label : true,
			// labelText : app.lang.string("share userid", "page.search"),
			// container : false
			// }));

			result = app.rc.getJson([ [ "listFriendsSharing", {} ], [ "listFriendsHeritage", {} ] ], false, 3);

			sharingList = result['listFriendsSharing'];
			heritageList = result['listFriendsHeritage'];

			$.each(sharingList, function(index, singleFriend) {
				if (singleFriend.bmuUser)
					friends.append(app.ni.select.option({
						text : singleFriend.name + " - " + singleFriend.description,
						value : singleFriend.bmuUserId,
						classes : [ 'friend' ]
					}));
			});

			$.each(heritageList, function(index, singleFriend) {
				friends.append(app.ni.select.option({
					text : singleFriend.name + " - " + singleFriend.description,
					value : singleFriend.bmuUserId,
					classes : [ 'heritage' ]
				}));
			});

			div.append(friends);

			div.append(app.ni.text.date({
				id : "txtStartDate",
				placeholder : app.lang.string("start date", "page.search"),
				label : true,
				labelText : app.lang.string("start date", "page.search"),
				container : false
			}));


			div.append(app.ni.text.date({
				id : "txtEndDate",
				placeholder : app.lang.string("end date", "page.search"),
				label : true,
				labelText : app.lang.string("end date", "page.search"),
				container : false
			}));

			return div;
		},

		getCollectionInputs : function() {
			var div = app.ni.element.div({
				classes : [ 'app-themis-collections' ]
			});

			div.append(app.ni.text.text({
				id : "txtCollectionName",
				placeholder : app.lang.string("collection name", "page.search"),
				label : true,
				labelText : app.lang.string("collection name", "page.search"),
				container : false
			}));

			div.append(app.ni.text.text({
				id : "txtCollectionDescription",
				placeholder : app.lang.string("collection description", "page.search"),
				label : true,
				labelText : app.lang.string("collection description", "page.search"),
				container : false
			}));

			return div;
		},

		getAddToCollectionInputs : function(collections) {
			var div = app.ni.element.div({
				classes : [ 'app-themis-collections' ]
			}), select = $(app.ni.select.single({
				"id" : "cboCollections",
				"name" : "collections",
				"label" : true,
				"labelText" : app.lang.string("select collection", "page.search"),
			}));

			$.each(collections, function(index, collection) {
				select.append(app.ni.select.option({
					text : collection.name + " - " + collection.description,
					value : collection.collectionId
				}));
			});
			div.append(select);
			return div;
		},

		getRemoveFromCollectionInputs : function(collections) {
			var div = app.ni.element.div({
				classes : [ 'app-themis-collections' ]
			}), select = $(app.ni.select.single({
				"id" : "cboCollections",
				"name" : "collections",
				"label" : true,
				"labelText" : app.lang.string("select collection", "page.search"),
			}));

			$.each(collections, function(index, collection) {
				select.append(app.ni.select.option({
					text : collection.name + " - " + collection.description,
					value : collection.collectionId
				}));
			});
			div.append(select);
			return div;
		},

		shareDocument : function(singleSearchResult) {
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getSharingInputs(), singleSearchResult.title, false, app.lang.string("share item", "page.search"), app.lang.string("don't share item", "page.share"), function() {
					// share item
					var webservice;

					if ($("#selFriend option:selected").hasClass("friend"))
						webservice = "shareDocument";
					else if ($("#selFriend option:selected").hasClass("heritage"))
						webservice = "shareDocumentHeritage";

					app.rc.getJson(webservice, {
						withUserId : parseInt($("#selFriend option:selected").val()),
						policyValue : app.store.localStorage.get("data-html5-fileid"),
						name : $("#txtShareName").val(),
						description : $("#txtShareDescription").val()
					}, true).done(function() {
						alert("done")
					}).fail(function() {
						alert("fail")
					});
				}, function() {
					// don't share item
				}, 50);
			});

		},

		createCollection : function(documentIds) {
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getCollectionInputs(), app.lang.string("create collection", "page.search"), false, app.lang.string("create collection", "page.search"), app.lang.string("cancel", "page.share"), function() {
					// share item


					app.rc.getJson("createCollection", {
						documentIds : documentIds,
						name : $("#txtCollectionName").val(),
						description : $("#txtCollectionDescription").val()
					}, true).done(function() {
						alert("done")
					}).fail(function() {
						alert("fail")
					});
				}, function() {
					// don't share item
				}, 50);
			});

		},

		removeFromCollection : function(documentIds) {
			app.notify.close.all().done(
					function() {
						app.rc.getJson("getCollections", {}, true).done(
								function(collections) {

									app.notify.dialog(page_search.singleResult.getAddToCollectionInputs(collections), app.lang.string("remove from collection", "page.search"), false, app.lang.string("remove from collection", "page.search"), app.lang
											.string("cancel", "page.share"), function() {
										// share item
										app.rc.getJson("removeFromCollection", {
											documentIds : documentIds,
											collId : $("#cboCollections option:selected").val(),
											collectionId : $("#cboCollections option:selected").val()
										}, true).done(function() {
											alert("done")
										}).fail(function() {
											alert("fail")
										});
									}, function() {
										// don't share item
									}, 50);
								}).fail(function() {
							alert("fail");
						});
					});

		},

		addToCollection : function(documentIds) {
			app.notify.close.all().done(
					function() {
						app.rc.getJson("getCollections", {}, true).done(
								function(collections) {

									app.notify.dialog(page_search.singleResult.getAddToCollectionInputs(collections), app.lang.string("add to collection", "page.search"), false, app.lang.string("add to collection", "page.search"), app.lang.string(
											"cancel", "page.share"), function() {
										// share item
										app.rc.getJson("addToCollection", {
											documentIds : documentIds,
											collId : $("#cboCollections option:selected").val(),
											collectionId : $("#cboCollections option:selected").val()
										}, true).done(function() {
											alert("done")
										}).fail(function() {
											alert("fail")
										});
									}, function() {
										// don't share item
									}, 50);
								}).fail(function() {
							alert("fail");
						});
					});

		},

		shareDocumentGroup : function() {
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getSharingInputs(), app.lang.string("share search result", "page.search"), false, app.lang.string("share item", "page.search"), app.lang.string("don't share item", "page.share"), function() {
					// share item
					var documentArray = [];
					$('.app-search-item').each(function(index, element) {
						documentArray.push($(element).attr('data-html5-fileid'));
					})
					// alert(JSON.stringify(documentArray));

					var webservice;

					if ($("#selFriend option:selected").hasClass("friend"))
						webservice = "shareDocumentGroup";
					else if ($("#selFriend option:selected").hasClass("heritage"))
						webservice = "shareDocumentGroupHeritage";

					app.rc.getJson(webservice, {
						withUserId : parseInt($("#selFriend option:selected").val()),
						policyValue : JSON.stringify(documentArray).split('"').join(''),
						name : $("#txtShareName").val(),
						description : $("#txtShareDescription").val()
					}, true).done(function() {
						alert("done")
					}).fail(function() {
						alert("fail")
					});
				}, function() {
					// don't share item
				}, 50);
			});

		}
	},

	updateSearchDiv : function(searchResults) {
		var query = app.store.localStorage.get("data-html5-themis-search-value");
		alert(query);

		/*
		app.notify.loader.bubbleDiv(true, app.lang.string("loadingText", "page.search"), app.lang.string("loadingHeadline", "page.search"));
		var promise = app.rc.getJson("searchWithFilters", {
			// "userId" : 8,//
			// app.store.localStorage.get("data-html5-themis-username"),
			query : app.store.localStorage.get("data-html5-themis-search-value"),
			source : ($('#bySource').length > 0) ? $('#bySource option:selected').val() : "",
			type : ($('#byType').length > 0) ? $('#byType option:selected').val() : "",
			job : ($('#byJob').length > 0) ? $('#byJob option:selected').val() : "",
			owner : ($('#byOwner').length > 0) ? $('#byOwner option:selected').val() : "",
			tag : ($('#byTag').length > 0) ? $('#byTag option:selected').val() : ""
		}, true);

		searchResults.empty();

		promise.fail(function() {
			app.notify.alert(app.lang.string("search_error", "texts"), false, app.lang.string("search", "headlines"), app.lang.string("ok", "actions"));
		});

		promise.done(function(resultObject) {

			var list = $(app.template.get("listA", "responsive"));

			searchResults.append(page_search.singleResult.getFilters(resultObject))

			// alert(JSON.stringify(resultObject['files']));
			$.each(resultObject['files'], function(key, singleSearchResult) {

				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : (page_search.singleResult.getThumbnail(singleSearchResult)) ? page_search.singleResult.getThumbnail(singleSearchResult) : " ",
					title : (singleSearchResult.isSharing) ? app.lang.string("shared item", "page.search") : app.lang.string("own item", "page.search"),
					headline : singleSearchResult.title,
					text : singleSearchResult.preview,
					classes : [ 'job', 'app-search-item' ],
					attributes : {
						"onclick" : "page_search.singleResult.openDetails(" + JSON.stringify(singleSearchResult).split("\"").join("'") + ")",
						"data-html5-datasink" : singleSearchResult.datasink,
						"data-html5-datasource" : singleSearchResult.datasource,
						"data-html5-fileid" : singleSearchResult.fileId,
						"data-html5-issharing" : singleSearchResult.isSharing,
						"data-html5-jobname" : singleSearchResult.jobName,
						"data-html5-ownerid" : singleSearchResult.ownerId,
						"data-html5-properties-destiantion" : singleSearchResult.properties.destiantion,
						"data-html5-properties-path" : singleSearchResult.properties.path,
						"data-html5-properties-source" : singleSearchResult.properties.source,
						"data-html5-timestamp" : singleSearchResult.timestamp,
						"data-html5-title" : singleSearchResult.title,
						"data-html5-type" : singleSearchResult.type

					}
				}));

			});

			searchResults.append(list);
			app.help.jQM.enhance(searchResults);
		});
		promise.always(function() {
			app.notify.loader.remove();
		});
		*/
	},

	functions : {},

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
