$(document).ready(function() {

	var success = true;

	// load plugins
	var url = "../js/plugin/plugins.js";
	$.ajax({
		url : url,
		dataType : "script",
		async : false,
		success : function(data, textStatus, jqXHR) {
			;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal error in javascriptLoader.js: Can't load the plugins. Url: " + url + " Error: " + textStatus);
			alert(errorThrown);
			success = false;
		}
	});

	if (!success)
		return false;

	// load pages
	var url = "../js/page/pages.js";
	$.ajax({
		url : url,
		dataType : "script",
		async : false,
		success : function(data, textStatus, jqXHR) {
			;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal error in javascriptLoader.js: Can't load the pages. Url: " + url + " Error: " + textStatus);
			alert(errorThrown);
		}
	});

	if (!success)
		return false;

	// load cordova
	var url = "../cordova.js";
	$.ajax({
		url : url,
		dataType : "script",
		async : false,
		success : function(data, textStatus, jqXHR) {
			if (jqXHR.status == 200)
				;// cordova not found
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal error in javascriptLoader.js: Can't load the plugins. Url: " + url + " Error: " + textStatus);
			alert(errorThrown);
			success = false;
		}
	});

	if (!success)
		return false;

	// load jQuery mobile
	var url = "../ext/jquery.mobile-1.4.2.min.js";
	$.ajax({
		url : url,
		dataType : "script",
		async : false,
		success : function(data, textStatus, jqXHR) {
			;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal error in javascriptLoader.js: Can't load the plugins. Url: " + url + " Error: " + textStatus);
			alert(errorThrown);
			success = false;
		}
	});

	app.debug.alert("app framework initialized", 30);

	// app.store.localStorage.clear();
	// app.store.localStorage.show();

});

function JsonLoader(url) {
	var json = null;
	$.ajax({
		url : url,
		async : false,
		dataType : "json",
		success : function(data) {
			// alert(JSON.stringify(data));
			json = data;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal Error: Can't load JSON. Url: " + url);
		}
	});
	return json;
}

function TextLoader(url) {
	var text = null;
	$.ajax({
		url : url,
		async : false,
		dataType : "text",
		success : function(data) {
			// alert(JSON.stringify(data));
			text = data;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal Error: Can't load TEXT. Url: " + url);
		}
	});
	return text;
}

/* on cordova initialisation */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	app.debug.alert("cordova initialized", 30);
}

$(document).bind("mobileinit", function() {
	app.debug.alert("jQuery mobile initialized", 30);
	$.mobile.ajaxEnabled = false;
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.page.prototype.options.domCache = false;

	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";

});

var app = {
	config : {
		name : "themis",
		min : true
	},
	addObject : function(name, object) {
		// alert("Add object to app: " + name);
		app[name] = object;
	}
};