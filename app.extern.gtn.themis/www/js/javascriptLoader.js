$(document).ready(function() {
	var success = true;

	// load plugins
	var url = "../js/plugin/plugins.js"
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
	var url = "../js/page/pages.js"
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
	var url = "../cordova.js"
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
	var url = "../ext/jquery.mobile-1.4.2.min.js"
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
	//app.store.localStorage.clear();
	//app.store.localStorage.show();

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
			alert("Fatal Error: Can't load JSON: " + url);
		}
	});
	return json;
}

var app = {
	config : {
		name : "themis"
	},
	addObject : function(name, object) {
		// alert("Add object to app: " + name);
		app[name] = object;
	}
};