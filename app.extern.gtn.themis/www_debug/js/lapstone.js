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

// app.store.localStorage.clear();
// window.localStorage.clear();
var app = {
	config : {
		name : "app",
		min : false,
		useJQueryMobile : true,
		apacheCordova : null,
		jQueryMobile : null
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

	// load the plugins file
	promise = globalLoader.AsyncScriptLoader(url);
	promise.done(function() {
		startup.addFunction("plugin constructor", plugins.constructor, "");
		// plugins.constructor();
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

	// load pages file
	promise = globalLoader.AsyncScriptLoader(url);
	promise.done(function() {
		startup.addFunction("page constructor", pages.constructor, "");
		// pages.constructor();
		dfd.resolve();
	});
	promise.fail(function() {
		dfd.reject();
	});

	return dfd.promise();
}

function loadConfiguration() {
	var dfd = $.Deferred(), promise;

	promise = globalLoader.AsyncJsonLoader("../js/lapstone.json");

	promise.done(function(configuration) {
		$.each(configuration, function(k, v) {
			app.config[k] = v
		});

		if (configuration.name === undefined)
			console.warn("lapstone.json has no 'name' property.");

		if (configuration.title === undefined)
			console.warn("lapstone.json has no 'title' property.");

		if (configuration.version === undefined) {
			console.warn("lapstone.json has no 'version' property.");
		} else {
			if (configuration.version.app === undefined)
				console.warn("lapstone.json has no 'version.app' property.");

			if (configuration.version.lapstone === undefined)
				console.warn("lapstone.json has no 'version.lapstone' property.");

			if (configuration.version.update === undefined)
				console.warn("lapstone.json has no 'version.update' property.");
		}

		if (configuration.startPage === undefined)
			console.warn("lapstone.json has no 'startPage' property.");

		if (configuration.startPage_firstStart === undefined)
			console.warn("lapstone.json has no 'startPage_firstStart' property.");

		if (configuration.startPage_loggedIn === undefined)
			console.warn("lapstone.json has no 'startPage_loggedIn' property.");

		if (configuration.badConnectionPage === undefined)
			console.warn("lapstone.json has no 'badConnectionPage' property.");

		dfd.resolve();
	});

	promise.fail(function() {
		dfd.reject();
	});

	return dfd.promise();
}

function updateFramework() {
	var dfd = $.Deferred();

	var currentLapstoneVersion, oldLapstoneVersion, currentAppVersion, oldAppVersion;

	currentAppVersion = app.config.version.app;
	currentLapstoneVersion = app.config.version.lapstone;

	plugin_Informator.loadConfigurationIntoHtml5Storage({
		"app" : {
			"config" : app.config
		}
	});

	oldLapstoneVersion = app.config.version.lapstone;
	oldAppVersion = app.config.version.app;

	if (app.config.version.update === true) {
		console.warn("update done");
	}
	// alert(currentAppVersion + oldAppVersion + currentLapstoneVersion +
	// oldLapstoneVersion);
	if (currentLapstoneVersion != oldLapstoneVersion || currentAppVersion != oldAppVersion) {
		console.warn("TODO Lastone || App Version Update");
		// alert("do update")
		app.info.set("app.config.version.update", true);

		app.info.set("app.config.version.app", currentAppVersion);
		app.info.set("app.config.version.lapstone", currentLapstoneVersion);
		// reload

		location.reload();
	}

	dfd.resolve();
	return dfd.promise();
}

function cacheAjax() {
	var cache, update;
	if (JSON.parse(window.localStorage.getItem(app.config.name + ".informator-config.app.config.version.update")) !== null) {
		update = JSON.parse(window.localStorage.getItem(app.config.name + ".informator-config.app.config.version.update"));
		// console.warn("update: " + update)
		cache = !update;
	} else {
		cache = false;
	}
	true;
	// console.warn("cache: " + cache);
	return cache;
}

function enchantPages() {
	var dfd = $.Deferred(), promise;

	promise = globalLoader.AsyncScriptLoader("../ext/jQueryMobile/jquery.mobile.min.js");

	promise.done(function() {
		initialisationPanel.changeStatus("jquery mobile  loaded");

		dfd.resolve();

	});

	promise.fail(function() {
		dfd.reject();
	});

	return dfd.promise();
}

var globalLoader = {
	AsyncJsonLoader : function(url) {
		var dfd = $.Deferred();
		$.ajax({
			cache : cacheAjax(),
			url : url,
			async : true,
			dataType : "json",
			timeout : 5000,
			success : function(data) {
				dfd.resolve(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				initialisationPanel.changeStatus("Fatal Error: Can't load JSON. Url: " + url + " Status: " + textStatus + " Thrown:" + JSON.stringify(jqXHR));
				dfd.reject(textStatus);
			}
		});
		return dfd.promise();
	},
	JsonLoader : function(url) {
		console
				.warn("Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. URL: "
						+ url);
		var json = null;
		$.ajax({
			cache : cacheAjax(),
			url : url,
			async : false,
			dataType : "json",
			success : function(data) {
				// alert(JSON.stringify(data));
				json = data;
			},
			error : function(jqXHR, textStatus, errorThrown) {
				initialisationPanel.changeStatus("Fatal Error: Can't load JSON. Url: " + url + " Status: " + textStatus + " Thrown:" + JSON.stringify(jqXHR));
			}
		});
		return json;
	},
	AsyncScriptLoader : function(url) {
		var dfd = $.Deferred();
		$
				.ajax({
					cache : cacheAjax(),
					url : url,
					async : true,
					dataType : "script",
					timeout : 5000,
					success : function(data) {
						window.setTimeout(function() {
							dfd.resolve(data);
						}, 200);

					},
					error : function(jqXHR, textStatus, errorThrown) {
						initialisationPanel.changeStatus("Fatal Error: Can't load Script. Url: " + url + " Status: " + textStatus + " Thrown:"
								+ JSON.stringify(jqXHR));

						dfd.reject(textStatus);
					}
				});
		return dfd.promise();
	},
	ScriptLoader : function(url) {
		console
				.warn("Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. URL: "
						+ url);
		$.ajax({
			cache : cacheAjax(),
			url : url,
			async : false,
			dataType : "script",
			timeout : 5000,
			success : function(data) {

			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert("Fatal Error: Can't load Script. Url: " + url + " Status: " + textStatus + " Thrown:" + JSON.stringify(jqXHR));

			}
		});
	},
	AsyncTextLoader : function(url) {
		var dfd = $.Deferred();
		$.ajax({
			cache : cacheAjax(),
			url : url,
			async : false,
			dataType : "text",
			success : function(data) {
				dfd.resolve(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				initialisationPanel.changeStatus("Fatal Error: Can't load Text. Url: " + url + " Status: " + textStatus);
				dfd.reject(textStatus);
			}
		});
		return dfd.promise();
	},
	TextLoader : function(url) {
		console
				.warn("Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. URL: "
						+ url);
		var text = null;
		$.ajax({
			cache : cacheAjax(),
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
}

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

	$.mobile.defaultPageTransition = 'slide';
	app.config.jQueryMobile = true;
});

/* on cordova initialisation */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	// alert("cordova initialized", 30);
	app.config.apacheCordova = true;
}

function waitForMobileinit() {
	var dfd = $.Deferred(), interval;

	interval = setInterval(function() {
		if (app.config.jQueryMobile == true) {
			dfd.resolve();
			clearInterval(interval);
		}
	}, 50);

	return dfd.promise();
}

function waitForDeviceready() {
	var dfd = $.Deferred(), interval;
	// alert(window.cordova);
	if (window.cordova) {
		interval = setInterval(function() {
			clearInterval(interval);
			if (app.config.apacheCordova == true) {
				dfd.resolve();

			}
		}, 50);
	} else {
		dfd.resolve();
	}

	return dfd.promise();
}

var initialisationPanel = {
	panel : null,
	start : function() {
		var dfd = $.Deferred(), promise;

		promise = globalLoader.AsyncTextLoader('../js/lapstone.html');
		promise.done(function(data) {
			initialisationPanel.panel = data;
			initialisationPanel.show();
			dfd.resolve();
		});
		promise.fail(function(e) {
			dfd.reject();
		});
		return dfd.promise();
	},
	show : function(status) {
		$('body').append(initialisationPanel.panel);
		if (status !== undefined)
			initialisationPanel.changeStatus(status);
	},
	hide : function() {
		$("#LAPSTONE").remove();
	},
	changeStatus : function(status) {
		$("#LAPSTONE .lapstone-status").text(status);
	},
	finish : function() {
		initialisationPanel.hide();
	}
}

var startupDefinition = [ {
	"status" : "",
	"function" : initialisationPanel.start,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : loadConfiguration,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : loadPlugins,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : loadPages,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : updateFramework,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : enchantPages,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : waitForMobileinit,
	"parameter" : "",
	"result" : ""
}, {
	"status" : "",
	"function" : waitForDeviceready,
	"parameter" : "",
	"result" : ""
} ]

var startup = {
	currentPosition : 0,
	dfd : $.Deferred(),
	promise : null,

	addFunction : function(status, func, parameter) {
		startupDefinition.splice(startup.currentPosition + 1, 0, {
			"status" : status,
			"function" : func,
			"parameter" : parameter,
			"result" : ""
		});
	},

	functionDone : function(data) {
		var promise;
		// console.log(startup.currentPosition + ": " +
		// startupDefinition[startup.currentPosition]['status'] + "
		// SUCCESSFUL");
		startup.currentPosition++;

		if (startupDefinition.length > startup.currentPosition) {
			console.log(startup.currentPosition + ": " + startupDefinition[startup.currentPosition]['status']);
			initialisationPanel.changeStatus(startupDefinition[startup.currentPosition]['status']);
			promise = startupDefinition[startup.currentPosition]['function'](startupDefinition[startup.currentPosition]['parameter']);
			promise.done(startup.functionDone);
			promise.fail(startup.functionFail);
			// alert('next')
		} else {
			startup.dfd.resolve();
		}
	},

	functionFail : function() {
		console.log(startup.currentPosition + ": " + startupDefinition[startup.currentPosition]['status'] + " FAILED");
		startup.dfd.reject();
	},

	initFramework : function() {
		var promise = startupDefinition[0]['function'](startupDefinition[0]['parameter']);
		promise.done(startup.functionDone);
		promise.fail(startup.functionFail);
		return startup.dfd.promise();
	}
}

// jquery loaded
$(document).ready(function() {
	var inititalisationPromise = startup.initFramework();

	inititalisationPromise.done(function() {
		// alert("init done");
		setTimeout(function() {

			initialisationPanel.finish();
			console.log("TODO - cleanup framework loading");
		}, 200);
	});

	inititalisationPromise.fail(function() {
		alert("framework fail");
	});

	inititalisationPromise.always(function() {
		// alert();
		app.info.set("app.config.version.update", false);
	});

});

function handleOpenURL(url) {
	// TODO: parse the url, and do something
	setTimeout(function() {
		alert(url);
	}, 0);
}