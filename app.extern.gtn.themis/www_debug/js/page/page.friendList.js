var page_friendList = {
	config : null,
	include : null,
	include_once : null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_friendList.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	creator : function(container) {
		app.debug.trace("page_friendList.creator()");

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		content.append(app.ni.element.a({
			id : "btnAddFriend",
			classes : [ 'ui-btn', 'ui-btn-inline' ],
			text : app.lang.string("add friend", "page.friendList")
		}));

		content.append(app.ni.element.a({
			id : "btnAddFriendHeritage",
			classes : [ 'ui-btn', 'ui-btn-inline' ],
			text : app.lang.string("add friend heritage", "page.friendList")
		}));

		app.rc.getJson([ [ "listFriendsSharing", {} ], [ "listFriendsHeritage", {} ] ], true, 3).done(function(result) {
			var sharingList, heritageList, list;
			sharingList = result['listFriendsSharing'];
			heritageList = result['listFriendsHeritage'];

			content.append(app.ni.element.h1({
				"text" : app.lang.string("sharing friends", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(sharingList, function(index, singleFriend) {
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("friend_" + singleFriend),
					title : singleFriend.name,
					headline : singleFriend.name,
					text : singleFriend.description,
					classes : [ 'friend' ],
					attributes : {
						"data-html5-friendId" : singleFriend.friendId
					}
				}));
			});

			content.append(list);

			content.append(app.ni.element.h1({
				"text" : app.lang.string("heritage friends", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(heritageList, function(index, singleFriend) {
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("friend_" + singleFriend),
					title : singleFriend.name,
					headline : singleFriend.name,
					text : singleFriend.description,
					classes : [ 'heritage' ],
					attributes : {
						"data-html5-friendId" : singleFriend.bmuUserId
					}
				}));
			});

			content.append(list);

		}).fail(function() {

		}).always(function() {

			app.notify.loader.remove();
			app.help.jQM.enhance(content);
		});

	},

	async : {
		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_friendList.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_friendList.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_friendList.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_friendList.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_friendList.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_friendList.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_friendList.setEvents()");

		$(this.config.pageId).on("storagefilled", ".heritage", function() {

			json = app.rc.getJson("getHeritageToken", {
				userId : app.store.localStorage.get("data-html5-friendId")
			}, false, 3);

			// getHeritageToken
			app.notify.dialog({
				text : $("<p>Erbtoken: " + json.activationCode + "</p>").append(app.ni.element.a({
					id : "getToken",
					classes : [ 'ui-btn' ],
					text : "QR Code herunterladen"
				})),
				title : "Erbe",
				headline : false,
				buttonLeft : "Erbe löschen",
				buttonRight : "Schließen",
				callbackButtonLeft : function() {
					app.rc.getJson("deleteAFriendHeritage", {
						friendId : app.store.localStorage.get("data-html5-friendId")
					}, true, 1).done(function() {
						alert("done");
					}).fail(function() {
						alert("fail");
					});
				},
				callbackButtonRight : false,
				delayInMs : 0
			});

		});

		$(this.config.pageId).on("storagefilled", "#getToken", function() {
			$.ajax({
				url : 'http://themis-dev01.backmeup.at/backmeup-service-rest/users/' + app.store.localStorage.get('data-html5-friendId') + '/activationCode',
				async : false,
				// accepts : "application/pdf",
				headers : {
					'Authorization' : app.store.localStorage.get('themis-token'),
					'Accept' : 'application/pdf'
				},
				dataType : 'binary',
				processData : false,
				success : function(data) {

					var fileURL = URL.createObjectURL(data);
					window.setTimeout(function() {
						window.open(fileURL);
					}, 300)

				}
			});
		});

		$(this.config.pageId).on("storagefilled", ".friend", function() {
			app.notify.dialog({
				text : " ",
				title : "Erbe",
				headline : false,
				buttonLeft : "Freund löschen",
				buttonRight : "Ok",
				callbackButtonLeft : function() {
					app.rc.getJson("deleteAFriend", {
						friendId : app.store.localStorage.get("data-html5-friendId")
					}, true, 1).done(function() {
						alert("done");
					}).fail(function() {
						alert("fail");
					});
				},
				callbackButtonRight : false,
				delayInMs : 0
			});
		});

		$(this.config.pageId).on("click", "#btnAddFriend", function(event) {

			var content;
			content = app.ni.element.div().append(app.ni.text.text({
				"id" : "txtName",
				"placeholder" : app.lang.string("name", "labels"),
				"label" : true,
				"labelText" : app.lang.string("name", "labels"),
				"container" : true
			})).append(app.ni.text.text({
				"id" : "txtDescription",
				"placeholder" : app.lang.string("description", "labels"),
				"label" : true,
				"labelText" : app.lang.string("description", "labels"),
				"container" : true
			})).append(app.ni.text.email({
				"id" : "txtEmail",
				"placeholder" : app.lang.string("email", "labels"),
				"label" : true,
				"labelText" : app.lang.string("email", "labels"),
				"container" : true
			}));

			app.notify.dialog({
				text : content,
				title : false,
				headline : app.lang.string("add friend", "page.friendList"),
				buttonLeft : app.lang.string("add friend", "actions"),
				buttonRight : app.lang.string("cancel", "actions"),
				callbackButtonLeft : function() {
					var email, name, description, webservice;

					app.rc.getJson("addAFriendSharing", {
						name : $("#txtName").val(),
						description : $("#txtDescription").val(),
						email : $("#txtEmail").val()
					}, true).done(function() {
						alert('done')
					}).fail(function() {
						alert('fail')
					});

				},
				callbackButtonRight : false,
				delayInMs : 0
			});

		});

		$(this.config.pageId).on("click", "#btnAddFriendHeritage", function(event) {

			var content;
			content = app.ni.element.div().append(app.ni.text.text({
				"id" : "txtName",
				"placeholder" : app.lang.string("name", "labels"),
				"label" : true,
				"labelText" : app.lang.string("name", "labels"),
				"container" : true
			})).append(app.ni.text.text({
				"id" : "txtDescription",
				"placeholder" : app.lang.string("description", "labels"),
				"label" : true,
				"labelText" : app.lang.string("description", "labels"),
				"container" : true
			})).append(app.ni.text.email({
				"id" : "txtEmail",
				"placeholder" : app.lang.string("email", "labels"),
				"label" : true,
				"labelText" : app.lang.string("email", "labels"),
				"container" : true
			}));

			app.notify.dialog({
				text : content,
				title : false,
				headline : app.lang.string("add friend heritage", "page.friendList"),
				buttonLeft : app.lang.string("add friend heritage", "actions"),
				buttonRight : app.lang.string("cancel", "actions"),
				callbackButtonLeft : function() {
					var email, name, description, webservice;

					app.rc.getJson("addAFriendHeritage", {
						name : $("#txtName").val(),
						description : $("#txtDescription").val(),
						email : $("#txtEmail").val()
					}, true).done(function() {
						alert('done')
					}).fail(function() {
						alert('fail')
					});

				},
				callbackButtonRight : false,
				delayInMs : 0
			});

		});

	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_friendList.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_friendList.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_friendList.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_friendList.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_friendList.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_friendList.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_friendList.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_friendList.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_friendList.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_friendList.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_friendList.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_friendList.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_friendList.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_friendList.pageshow()");
		}
	}
};