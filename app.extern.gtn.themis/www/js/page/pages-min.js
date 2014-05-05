var pages={config:null,pageNames:[],constructor:function(){pages.loadPageConfig();if(!pages.verifyPageNames()){alert("Fatal error: pages.verifyPageNames()")}else{if(!pages.loadPages()){alert("Fatal error: pages.loadPages()")}else{if(!pages.setEvents()){alert("Fatal error: pages.setEvents()")}else{if(!pages.callPluginsPagesLoaded()){alert("Fatal error: pages.callPluginsPagesLoaded()")}}}}},callPluginsPagesLoaded:function(){var a=null;$.each(plugins.pluginNames,function(b,d){try{window["plugin_"+d].pagesLoaded();a=true;return}catch(c){alert("Fatal error: Cant call plugin_"+d+".pagesLoaded()");a=false;return}});return a},loadPageConfig:function(){var b=null;if(app.config.min){pages.config=config_json}else{var a="../js/page/pages.json";$.ajax({url:a,async:false,dataType:"json",success:function(c){pages.config=c;b=true},error:function(c,e,d){alert("Fatal error in pages.js: Can't load page. Url: "+a+" Error: "+e);b=false}})}return b},verifyPageNames:function(){return true},onPageLoaded:function(a){var c=true;if(window["page_"+a]==undefined){alert("Fatal error: Page class is not defined: page_"+a);c=false;return}try{if(app.config.min){window["page_"+a].config=window["config_"+a]}else{window["page_"+a].config=JsonLoader("../js/page/page."+a+".json")}if(window["page_"+a].config.name==undefined){alert("Fatal error: The property 'name' is not defined in JSON file: ../js/page."+a+".json");return false}if(window["page_"+a].config.shortname==undefined){alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/page."+a+".json");return false}}catch(b){alert("Fatal error: The page has no 'config' property: "+a);c=false;return}try{window["page_"+a].constructor()}catch(b){alert("Fatal error: The page has no constructor(): "+a);c=false;return}try{app.addObject(window["page_"+a].config.name,window["page_"+a].functions);app.addObject(window["page_"+a].config.shortname,window["page_"+a].functions)}catch(b){alert("Fatal error: The plugin has no functions{}: "+a);c=false;return}pages.pageNames.push(a);return c},loadPages:function(){var a=true;$.each(pages.config,function(c,d){if(app.config.min){a=pages.onPageLoaded(c)}else{var b="../js/page/page."+c+".js";$.ajax({url:b,async:false,dataType:"script",success:function(e){a=pages.onPageLoaded(c)},error:function(){alert("Fatal Error: Can't load page: "+b);a=false}})}if(!a){return false}});if(!pages.callPluginPageEventFunctions()){a=false}return a},callPluginPageEventFunctions:function(){var a=true;$.each(plugins.pluginNames,function(b,d){try{window["plugin_"+d].pageSpecificEvents()}catch(c){alert("Fatal error: Cant invoke plugin_"+d+".pageSpecificEvents(). Error: "+c.message);a=false}if(!a){return false}});return a},callPluginsPageFunctions:function(a){var b=true;$.each(plugins.pluginNames,function(c,e){try{window["plugin_"+e].afterHtmlInjectedBeforePageComputing(a)}catch(d){alert("Fatal error: Cant invoke plugin_"+e+".afterHtmlInjectedBeforePageComputing(). Error: "+d.message);b=false}if(!b){return false}});return b},setEvents:function(){var a=true;$(document).on("pagebeforechange",".app-page",function(b){app.debug.alert("jQuery mobile event: pagebeforechange for: "+$(this).attr("id"),5);if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagebeforechange(b,$(this))}});$(document).on("pagebeforecreate",".app-page",function(b){app.debug.alert("jQuery mobile event: pagebeforecreate for: "+$(this).attr("id"),5);if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file. You'll be redirected to the index.html page.");$(location).attr("href","index.html")}else{if(plugin_WebServiceClient.config.useKeepAlive){if(window["page_"+$(this).attr("id")].config.useKeepAlive!=undefined){if(window["page_"+$(this).attr("id")].config.useKeepAlive){if(plugin_WebServiceClient.config.keepAlive.isAlive){if(plugin_GlobalPage!=undefined){app.gp.pagebeforecreate(b,$(this))}window["page_"+$(this).attr("id")].events.pagebeforecreate(b,$(this));if(!window["page_"+$(this).attr("id")].creator($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".creator()")}if(!window["page_"+$(this).attr("id")].setEvents($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".setEvents()")}if(!pages.callPluginsPageFunctions($(this))){alert("Fatal error in: pages.callPluginsPageFunctions()")}}else{app.debug.alert("Can't load page because keepAlive failed. Check your connection. You'll be redirected to the index.html page.",60);app.notify.add.alert(app.lang.string("bad_connection","notifications"),app.lang.string("bad_connection","headlines"),app.lang.string("bad_connection","headlines"));app.store.localStorage.clearHtml5();$(document).off();$(location).attr("href","index.html")}}else{if(plugin_GlobalPage!=undefined){app.gp.pagebeforecreate(b,$(this))}window["page_"+$(this).attr("id")].events.pagebeforecreate(b,$(this));if(!window["page_"+$(this).attr("id")].creator($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".creator()")}if(!window["page_"+$(this).attr("id")].setEvents($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".setEvents()")}if(!pages.callPluginsPageFunctions($(this))){alert("Fatal error in: pages.callPluginsPageFunctions()")}}}else{app.debug.alert("No useKeepAlive entry in your page_"+$(this).attr("id")+".json. Please add it.",60);if(plugin_GlobalPage!=undefined){app.gp.pagebeforecreate(b,$(this))}window["page_"+$(this).attr("id")].events.pagebeforecreate(b,$(this));if(!window["page_"+$(this).attr("id")].creator($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".creator()")}if(!window["page_"+$(this).attr("id")].setEvents($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".setEvents()")}if(!pages.callPluginsPageFunctions($(this))){alert("Fatal error in: pages.callPluginsPageFunctions()")}}}else{if(plugin_GlobalPage!=undefined){app.gp.pagebeforecreate(b,$(this))}window["page_"+$(this).attr("id")].events.pagebeforecreate(b,$(this));if(!window["page_"+$(this).attr("id")].creator($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".creator()")}if(!window["page_"+$(this).attr("id")].setEvents($(this))){alert("Fatal error in: page_"+$(this).attr("id")+".setEvents()")}pages.callPluginsPageFunctions($(this))}}});$(document).on("pagebeforehide",".app-page",function(b){app.debug.alert("jQuery mobile event: pagebeforehide for: "+$(this).attr("id"),5);if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagebeforehide(b,$(this))}});$(document).on("pagebeforeload",".app-page",function(b){app.debug.alert("jQuery mobile event: pagebeforeload for: "+$(this).attr("id"),5);if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagebeforeload(b,$(this))}});$(document).on("pagebeforeshow",".app-page",function(b){app.debug.alert("jQuery mobile event: pagebeforeshow for: "+$(this).attr("id"),5);if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagebeforeshow(b,$(this))}});$(document).on("pagechange",".app-page",function(b){if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagechange(b,$(this))}});$(document).on("jQuery mobile event: pagechangefailed",".app-page",function(b){if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagechangefailed(b,$(this))}});$(document).on("pagecreate",".app-page",function(b){if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagecreate(b,$(this))}});$(document).on("pagehide",".app-page",function(b){app.gp.pagehide(b,$(this));if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pagehide(b,$(this))}});$(document).on("pageinit",".app-page",function(b){app.gp.pageinit(b,$(this));if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pageinit(b,$(this))}});$(document).on("pageload",".app-page",function(b){if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pageload(b,$(this))}});$(document).on("pageloadfailed",".app-page",function(b){app.debug.alert("jQuery mobile event: pageloadfailed for: "+$(this).attr("id"),5);if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pageloadfailed(b,$(this))}});$(document).on("pageremove",".app-page",function(b){app.gp.pageremove(b,$(this));if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pageremove(b,$(this))}});$(document).on("pageshow",".app-page",function(b){app.gp.pageshow(b,$(this));if(window["page_"+$(this).attr("id")]==undefined){alert("Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file.");$(location).attr("href","index.html")}else{window["page_"+$(this).attr("id")].events.pageshow(b,$(this))}});return a}};