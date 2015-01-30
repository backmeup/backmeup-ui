// app.store.localStorage.clear();
var app = {
	config : {
		name : "app",
		min : false,
		useJQueryMobile : true,
		apacheCordova : null
	},
	addObject : function(name, object) {
		// alert("Add object to app: " + name);
		app[name] = object;
	}
};

function loadPlugins() {
	var dfd = $.Deferred(), url, promise;
	if (app.config.min) {
		url = "../js/plugin/all.plugin.min.js";
	} else {
		url = "../js/plugin/plugins.js";
	}

	promise = AsyncScriptLoader(url);
	promise.done(function() {
		plugins.constructor();
		dfd.resolve();
	});
	promise.fail(function() {
		dfd.reject();
	});

	return dfd.promise();
}

function loadPages() {
	var dfd = $.Deferred(), url, promise;
	if (app.config.min) {
		url = "../js/page/all.page.min.js";
	} else {
		url = "../js/page/pages.js";
	}

	promise = AsyncScriptLoader(url);
	promise.done(function() {
		pages.constructor();
		dfd.resolve();
	});
	promise.fail(function() {
		dfd.reject();
	});
	return dfd.promise();
}

function loadConfiguration() {
	var dfd = $.Deferred(), promise = AsyncJsonLoader("../js/lapstone.json");

	promise.done(function(configuration) {
		app.config.name = configuration.appname;
		app.config['startPage'] = configuration.startPage;
		app.config['startPage_loggedIn'] = configuration.startPage_loggedIn;
		dfd.resolve();
	});

	promise.fail(function() {
		dfd.reject();
	});

	return dfd.promise();
}

function enchantPages() {
	var dfd = $.Deferred(), promise;

	$(document).bind("mobileinit", function() {
		app.debug.alert("jQuery mobile initialized", 30);
		$.mobile.ajaxEnabled = true;
		$.support.cors = true;
		$.mobile.allowCrossDomainPages = true;
		$.mobile.page.prototype.options.domCache = false;

		$.mobile.loader.prototype.options.text = "loading";
		$.mobile.loader.prototype.options.textVisible = false;
		$.mobile.loader.prototype.options.theme = "a";
		$.mobile.loader.prototype.options.html = "";

		$.mobile.defaultPageTransition = 'none';
		dfd.resolve();
	});

	promise = AsyncScriptLoader("../ext/jquery.mobile-1.4.4.min.js");

	promise.done(function() {

		// dfd.resolve();
	});
	promise.fail(function() {
		dfd.reject();
	});

	return dfd.promise();
}

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
			alert("Fatal Error: Can't load JSON. Url: " + url + " Status: " + textStatus + " Thrown:" + JSON.stringify(jqXHR));
		}
	});
	return json;
}

function AsyncJsonLoader(url) {
	var dfd = $.Deferred();
	$.ajax({
		url : url,
		async : true,
		dataType : "json",
		timeout : 5000,
		success : function(data) {
			dfd.resolve(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal Error: Can't load JSON. Url: " + url + " Status: " + textStatus + " Thrown:" + JSON.stringify(jqXHR));
			dfd.reject(textStatus);
		}
	});
	return dfd.promise();
}

function AsyncScriptLoader(url) {
	var dfd = $.Deferred();
	$.ajax({
		url : url,
		async : true,
		dataType : "script",
		timeout : 5000,
		success : function(data) {
			dfd.resolve(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal Error: Can't load Scrpt. Url: " + url + " Status: " + textStatus + " Thrown:" + JSON.stringify(jqXHR));
			dfd.reject(textStatus);
		}
	});
	return dfd.promise();
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
			alert("Fatal Error: Can't load TEXT. Url: " + url + " Status: " + textStatus);
		}
	});
	return text;
}

function AsyncTextLoader(url) {
	var dfd = $.Deferred();
	$.ajax({
		url : url,
		async : false,
		dataType : "text",
		success : function(data) {
			dfd.resolve(data);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert("Fatal Error: Can't load TEXT. Url: " + url + " Status: " + textStatus);
			dfd.reject(textStatus);
		}
	});
	return dfd.promise();
}

/* on cordova initialisation */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	app.debug.alert("cordova initialized", 30);
	app.config.apacheCordova = true;
}

var initialisationPanel = {
	start : function() {
		var dfd = $.Deferred(), promise;
		promise = AsyncTextLoader('../js/lapstone.html');
		promise.done(function(data) {
			$('body').append(data);
			dfd.resolve();
		});
		promise.fail(function(e) {
			dfd.reject();
		});
		return dfd.promise();
	},
	changeStatus : function(status) {
		$("#LAPSTONE .lapstone-status").text(status);
	},
	finish : function() {
		$("#LAPSTONE").remove();
	}
}

var startupDefinition = [ {
	"status" : "start initialisation",
	"function" : initialisationPanel.start,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "load configuration",
	"function" : loadConfiguration,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "load plugins",
	"function" : loadPlugins,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "load pages",
	"function" : loadPages,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "enchant pages",
	"function" : enchantPages,
	"parameter" : "",
	"result" : ""
} ]
var startup = {
	currentPosition : 0,
	dfd : $.Deferred(),
	promise : null,
	functionDone : function(data) {
		startup.currentPosition++;

		if (startupDefinition.length > startup.currentPosition) {
			console.log(startup.currentPosition + ": " + startupDefinition[startup.currentPosition]['status']);
			initialisationPanel.changeStatus(startupDefinition[startup.currentPosition]['status']);
			promise = startupDefinition[startup.currentPosition]['function'](startupDefinition[startup.currentPosition]['parameter']);
			promise.done(startup.functionDone);
		} else {
			startup.dfd.resolve();
		}
	},
	initFramework : function() {
		promise = startupDefinition[startup.currentPosition]['function'](startupDefinition[startup.currentPosition]['parameter']);
		promise.done(startup.functionDone);
		return startup.dfd.promise();
	}
}

$(document).ready(function() {

	var promise = startup.initFramework();

	promise.done(function() {
		setTimeout(function() {
			initialisationPanel.finish()
		}, 200);
	});

});
