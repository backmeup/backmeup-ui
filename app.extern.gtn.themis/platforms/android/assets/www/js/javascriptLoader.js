$(document).ready(function() {
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
		}
	});

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
		}
	});

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
		}
	});

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
		}
	});

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
	addObject : function(name, object) {
		// alert("Add object to app: " + name);
		app[name] = object;
	}
};