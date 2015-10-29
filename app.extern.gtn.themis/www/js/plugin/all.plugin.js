var plugin_KeyValueStack={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.alert(this.config.name+".pluginsLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.alert("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5)},pageSpecificEvents:function(a){app.debug.alert("Plugin: "+this.config.name+".pageSpecificEvents()",5)},functions:{}};var config_HelperFunctions={
	"name":"HelperFunctions",
	"shortname":"help",
	"validate":{
		"email":"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
		"password":"(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\\W]).{8,100}",
		"username":"(.){2,99}",
		"firstname":"(.){2,99}",
		"lastname":"(.){2,99}"
	}
};var config_LicenceServer={
	"name":"LicenceServer",
	"shortname":"ls"
};var config_FormInputDesigner={
	"name":"FormInputDesigner",
	"shortname":"ni"
};var config_GlobalSettings={
	"name":"GlobalSettings",
	"shortname":"settings"
};var plugin_Backmeup={config:null,constructor:function(){var a=$.Deferred();$.ajaxTransport("+binary",function(b,d,c){if(window.FormData&&((b.dataType&&(b.dataType=="binary"))||(b.data&&((window.ArrayBuffer&&b.data instanceof ArrayBuffer)||(window.Blob&&b.data instanceof Blob))))){return{send:function(f,o){var p=new XMLHttpRequest(),e=b.url,l=b.type,g=b.async||true,m=b.responseType||"blob",k=b.data||null,j=b.username||null,n=b.password||null;p.addEventListener("load",function(){var i={};i[b.dataType]=p.response;o(p.status,p.statusText,i,p.getAllResponseHeaders())});p.open(l,e,g,j,n);for(var h in f){p.setRequestHeader(h,f[h])}p.responseType=m;p.send(k)},abort:function(){c.abort()}}}});a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.alert(this.config.name+".pluginsLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.alert("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.alert("plugin_"+this.config.name+".definePluginEvents()",11)},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()",11)},pageSpecificEvents:function(a){app.debug.alert("plugin_"+this.config.name+".pageSpecificEvents()",11)},functions:{print:{formElement:function(c,a){var b;switch(c.type.toLowerCase()){case"number":return app.ni.text.number({name:c.name,placeholder:app.lang.string(c.label,a),label:true,labelText:app.lang.string(c.label,a),container:true,attributes:{title:app.lang.string(c.description,a)}});break;case"bool":return app.ni.checkbox.checkbox({name:c.name,placeholder:app.lang.string(c.label,a),label:true,labelText:app.lang.string(c.label,a),container:true,attributes:{title:app.lang.string(c.description,a)}});break;case"string":return app.ni.text.text({name:c.name,placeholder:app.lang.string(c.label,a),label:true,labelText:app.lang.string(c.label,a),container:true,attributes:{title:app.lang.string(c.description,a)}});break;case"password":return app.ni.text.password({name:c.name,placeholder:app.lang.string(c.label,a),label:true,labelText:app.lang.string(c.label,a),container:true,attributes:{title:app.lang.string(c.description,a)}});break;case"enum":b=app.ni.element.div({});$.each(c.defaultValue.split(","),function(e,d){b.append(app.ni.radio.radio({name:c.name,placeholder:app.lang.string(c.label,a),label:true,labelText:app.lang.string(d,a),container:true,attributes:{title:app.lang.string(c.description,a),value:d}}))});return b;break;default:alert("Unknown type:"+c.type.toLowerCase());alert(JSON.stringify(c));break}}}}};var plugin_IndexDb={config:null,db:null,constructor:function(){var a=$.Deferred();window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction;window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;if(!window.indexedDB){console.error("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")}a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.alert(this.config.name+".pluginsLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.alert("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.alert("plugin_"+this.config.name+".definePluginEvents()",11)},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()",11)},pageSpecificEvents:function(a){app.debug.alert("plugin_"+this.config.name+".pageSpecificEvents()",11)},initDb:function(){request=indexedDB.open(app.config.name,app.config.version.app_int*100);request.onerror=function(a){console.error("Why didn't you allow my web app to use IndexedDB?!")};request.onsuccess=function(a){plugin_IndexDb.db=a.target.result};request.onupgradeneeded=function(a){plugin_IndexDb.db=a.target.result}},functions:{getObjectStore:function(a,b){if(plugin_IndexDb.db.objectStoreNames.contains(a)){return plugin_IndexDb.db.transaction(a,"readwrite").objectStore(a)}else{return plugin_IndexDb.db.createObjectStore(a,b)}}}};var plugin_Notification={config:null,notifications:null,callbackFunction:null,callbackFunctionBtnLeft:null,callbackFunctionBtnRight:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();window.setTimeout(function(){if(plugin_Notification.config.enablePushNotifications&&app.config.apacheCordova&&app.sess.loggedIn()==true){app.debug.debug("plugin_Notification.pagesLoaded() register device on licence and push server");if(window.device){var b=app.rc.getJson("notifyme.registerDevice",{deviceId:device.uuid,contextToken:app.sess.getValue("userToken")},true);b.done(function(c){if(window.push!=undefined){app.debug.debug("plugin_Notification.pagesLoaded() register device on aerogear push server");plugin_Notification.config.pushConfig.alias=device.uuid;push.register(plugin_Notification.functions.push_onNotification,function(){app.debug.debug("plugin_Notification.pagesLoaded() success: device is registered on push server")},function(d){app.debug.debug("plugin_Notification.pagesLoaded() error: device is not registered on push server");app.debug.debug("plugin_Notification.pagesLoaded() error: "+d)},plugin_Notification.config.pushConfig)}else{app.debug.debug("plugin_Notification.pagesLoaded() cordova push plugin not installed")}});b.fail(function(c){app.debug.debug("plugin_Notification.pagesLoaded() not able to register device on licence server")})}else{app.debug.debug("plugin_Notification.pagesLoaded() cordova device plugin not installed")}}else{app.debug.debug("plugin_Notification.pagesLoaded() do not register device on licence and push server")}},5000);a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()");$(document).on("pageshow",function(a){if(!plugin_Notification.notifications){plugin_Notification.notifications=app.store.localStorage.getObject("popup_notifications")}app.store.localStorage.removeObject("popup_notifications");plugin_Notification.popupShow()});$(document).on("click","#btn-alert",function(){$("#popupAlert").one("popupafterclose",function(a,b){if(plugin_Notification.callbackFunction){plugin_Notification.callbackFunction($("#popupAlert"));plugin_Notification.callbackFunction=null}plugin_Notification.cleanupPopup($("#popupAlert"));plugin_Notification.popupShow()});$("#popupAlert").popup("close")});$(document).on("click","#btn-dialog-left",function(){$("#popupDialog").one("popupafterclose",function(a,b){if(plugin_Notification.callbackFunctionBtnLeft){plugin_Notification.callbackFunctionBtnLeft($("#popupDialog"));plugin_Notification.callbackFunctionBtnLeft=null}plugin_Notification.cleanupPopup($("#popupDialog"));plugin_Notification.popupShow()});$("#popupDialog").popup("close")});$(document).on("click","#btn-dialog-right",function(){$("#popupDialog").one("popupafterclose",function(a,b){if(plugin_Notification.callbackFunctionBtnRight){plugin_Notification.callbackFunctionBtnRight($("#popupDialog"));plugin_Notification.callbackFunctionBtnRight=null}plugin_Notification.cleanupPopup($("#popupDialog"));plugin_Notification.popupShow()});$("#popupDialog").popup("close")});$(document).on("popupbeforeposition","div[data-role=popup]",function(a,b){$(this).popup().trigger("create")})},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()");$("body #popupDialog").remove();$("body #popupAlert").remove();app.template.append("#"+$(a).attr("id"),"JQueryMobilePopupDialog");app.template.append("#"+$(a).attr("id"),"JQueryMobilePopupAlert")},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()")},cleanupPopup:function(a){a.find("div[role=main].ui-content").find(":nth-child(2)").replaceWith("<p></p>")},popupShow:function(b,a){if(a==undefined||a==null){a=300}if(b!=undefined){switch(b.type){case"alert":setTimeout(function(){plugin_Notification.cleanupPopup($("#popupAlert"));if(b.title){$("#popupAlert div[data-role=header] h1").text(b.title);$("#popupAlert div[data-role=header] h1").css("display","block")}else{$("#popupAlert div[data-role=header] h1").css("display","none")}if(b.headline){$("#popupAlert div.ui-content h3.ui-title").text(b.headline);$("#popupAlert div.ui-content h3.ui-title").css("display","block")}else{$("#popupAlert div.ui-content h3.ui-title").css("display","none")}$("#popupAlert #btn-alert").text(b.button);if(typeof b.text=="object"){$("#popupAlert div.ui-content p").replaceWith(b.text)}else{$("#popupAlert div.ui-content p").html(b.text)}$("#popupAlert").popup("open")},a);plugin_Notification.callbackFunction=b.callback;break;case"dialog":setTimeout(function(){plugin_Notification.cleanupPopup($("#popupDialog"));if(b.title){$("#popupDialog div[data-role=header] h1").text(b.title);$("#popupDialog div[data-role=header] h1").css("display","block")}else{$("#popupDialog div[data-role=header] h1").css("display","none")}if(b.headline){$("#popupDialog div.ui-content h3.ui-title").text(b.headline);$("#popupDialog div.ui-content h3.ui-title").css("display","block")}else{$("#popupDialog div.ui-content h3.ui-title").css("display","none")}$("#popupDialog #btn-dialog-left").text(b.buttonLeft);$("#popupDialog #btn-dialog-right").text(b.buttonRight);if(typeof b.text=="object"){$("#popupDialog div.ui-content p").replaceWith(b.text)}else{$("#popupDialog div.ui-content p").html(b.text)}$("#popupDialog").popup("open")},a);plugin_Notification.callbackFunctionBtnLeft=b.callbackButtonLeft;plugin_Notification.callbackFunctionBtnRight=b.callbackButtonRight;break;default:alert("error in popupShow();");break}}else{if(plugin_Notification.notifications!=null){if(Object.keys(plugin_Notification.notifications).length==0){plugin_Notification.notifications=null}else{b=plugin_Notification.notifications["1"];delete plugin_Notification.notifications["1"];setTimeout(function(){if(b.title){$("#popupAlert div[data-role=header] h1").text(b.title);$("#popupAlert div[data-role=header] h1").css("display","block")}else{$("#popupAlert div[data-role=header] h1").css("display","none")}if(b.headline){$("#popupAlert div.ui-content h3.ui-title").text(b.headline);$("#popupAlert div.ui-content h3.ui-title").css("display","block")}else{$("#popupAlert div.ui-content h3.ui-title").css("display","none")}$("#popupAlert #btn-alert").text(b.button);if(typeof b.text=="object"){$("#popupAlert div.ui-content p").replaceWith(b.text)}else{$("#popupAlert div.ui-content p").html(b.text)}$("#popupAlert").popup("open")},a)}}}},functions:{push_successHandler:function(){console.log("succesfull registered")},push_errorHandler:function(a){console.error("error registering "+a)},push_onNotification:function(a){alert(a.alert)},alert:function(f,e,c,b,d,g){var a=f;if($.isPlainObject(f)){g=a.delayInMs;d=a.callbackButton;b=a.button;c=a.headline;e=a.title;f=a.text}plugin_Notification.functions.close.all().done(function(){if(f==undefined){f=false}if(c==undefined){c=false}if(e==undefined){e=false}if(b==undefined){b=false}if(d==undefined){d=false}if(g==undefined||g==null){g=100}notification={type:"alert",text:f,title:e,headline:c,button:b,callback:d};plugin_Notification.popupShow(notification,g)})},dialog:function(g,f,b,a,e,i,d,h){var c=g;if($.isPlainObject(g)){h=c.delayInMs;d=c.callbackButtonRight;i=c.callbackButtonLeft;e=c.buttonRight;a=c.buttonLeft;b=c.headline;f=c.title;g=c.text}plugin_Notification.functions.close.all().done(function(){if(g==undefined||g==null){g=false}if(b==undefined||b==null){b=false}if(f==undefined||f==null){f=false}if(a==undefined||a==null){a=false}if(e==undefined||e==null){e=false}if(i==undefined||i==null){i=false}if(d==undefined||d==null){d=false}if(h==undefined||h==null){h=100}notification={type:"dialog",text:g,title:f,headline:b,buttonLeft:a,buttonRight:e,callbackButtonLeft:i,callbackButtonRight:d};plugin_Notification.popupShow(notification,h)})},close:{alert:function(){var a=$.Deferred();if($("#popupAlert").parent().hasClass("ui-popup-active")){$("#popupAlert").on("popupafterclose",function(b,c){$("#popupAlert").off("popupafterclose");a.resolve()});$("#popupAlert").popup("close");plugin_Notification.cleanupPopup($("#popupAlert"))}else{a.resolve()}return a.promise()},dialog:function(){var a=$.Deferred();if($("#popupDialog").parent().hasClass("ui-popup-active")){$("#popupDialog").on("popupafterclose",function(b,c){$("#popupDialog").off("popupafterclose");a.resolve()});$("#popupDialog").popup("close");plugin_Notification.cleanupPopup($("#popupDialog"))}else{a.resolve()}return a.promise()},all:function(){var a=$.Deferred();$.when(app.notify.close.alert(),app.notify.close.dialog()).done(function(){a.resolve()});return a.promise()}},add:{alert:function(f,e,c,b,d,g){if(f==undefined){f=false}if(c==undefined){c=false}if(e==undefined){e=false}if(b==undefined){b=false}if(d==undefined){d=false}if(!plugin_Notification.notifications){plugin_Notification.notifications=app.store.localStorage.getObject("popup_notifications")}if(!plugin_Notification.notifications){plugin_Notification.notifications={}}if(g==undefined||g==null){g=100}var a=Object.keys(plugin_Notification.notifications).length+1;plugin_Notification.notifications[a]={type:"alert",text:f,title:e,headline:c,button:b,callback:d};app.store.localStorage.setObject("popup_notifications",plugin_Notification.notifications)}},push_onNotification:function(){},loader:{bubble:function(a){if(a){app.template.append("div[data-role=content]","app-loader-bubble")}else{plugin_Notification.functions.loader.remove()}},bubbleDiv:function(b,f,e,d){var c,a;c=b;if($.isPlainObject(b)){d=c.appendTo;e=c.headline;f=c.text;b=c.show}if(b){a=app.template.get("app-loader-bubbleDiv");if(f!=undefined){a.find("p").text(f)}if(e!=undefined){a.find("h1").text(e)}if(d){d.append(a)}else{$("div[data-role=content]").append(a)}}else{plugin_Notification.functions.loader.remove()}},remove:function(){$(".app-loader").remove()}}}};var config_Skin={
	"name": "Skin",
	"shortname": "skin",
	"useSkinPlugin": false,
	"defaultSkin": "modern",
	"skins": 
	{
		"icon": 
		[
			"../css/skin/icon/fonts.css",
			"../css/skin/icon/global.css",
			"../css/skin/icon/platform.android.css",
			"../css/skin/icon/platform.desktop.css",
			"../css/skin/icon/platform.ios.css",
			"../css/skin/icon/platform.mobile.css",
			"../css/skin/icon/platform.cordova.css",
			"../css/skin/icon/platform.windows.css"
		],

		"modern": 
		[
			"../css/skin/modern/fonts.css",
			"../css/skin/modern/global.css",
			"../css/skin/modern/platform.android.css",
			"../css/skin/modern/platform.desktop.css",
			"../css/skin/modern/platform.ios.css",
			"../css/skin/modern/platform.mobile.css",
			"../css/skin/modern/platform.cordova.css",
			"../css/skin/modern/platform.windows.css"
		],

		"text": 
		[
			"../css/skin/text/fonts.css",
			"../css/skin/text/global.css",
			"../css/skin/text/platform.android.css",
			"../css/skin/text/platform.desktop.css",
			"../css/skin/text/platform.ios.css",
			"../css/skin/text/platform.mobile.css",
			"../css/skin/text/platform.cordova.css",
			"../css/skin/text/platform.windows.css"
		]
	}
};var config_IndexDb={
	"name": "IndexDb",
	"shortname": "idb"
};var plugin_KeepAlive={config:null,interval:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");app.debug.debug("plugin_KeepAlive.pluginsLoaded() - try first keep alive");var a=$.Deferred();if(plugin_KeepAlive.config.useKeepAlive){app.debug.debug("plugin_KeepAlive.pluginsLoaded() case: plugin_KeepAlive.config.useKeepAlive == true");app.debug.debug("plugin_KeepAlive.pluginsLoaded() call: plugin_KeepAlive.keepAliveRequest() to make a first keepAlive request");plugin_KeepAlive.keepAliveRequest();app.debug.debug("plugin_KeepAlive.pluginsLoaded() initialize the keepAlive interval: plugin_KeepAlive.interval ");plugin_KeepAlive.interval=window.setInterval("plugin_KeepAlive.keepAliveRequest()",plugin_KeepAlive.config.intervalInS*1000)}a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()")},eventTriggering:function(){app.debug.trace("plugin_KeepAlive.eventTriggering()");if(!plugin_KeepAlive.config.isAlive){$("[data-role=page]").trigger("connectionisdead")}else{if(plugin_KeepAlive.config.isAlive){$("[data-role=page]").trigger("connectionisalive")}}},ajaxSuccess:function(c,d,b){app.debug.trace("plugin_KeepAlive.ajaxSuccess()");var a=Date.now()-plugin_KeepAlive.startTime;if(a>=plugin_KeepAlive.config.maximumResponseTime){app.info.set("plugin_KeepAlive.config.lastDuration",a);app.info.set("plugin_KeepAlive.config.isAlive",false);app.info.set("plugin_KeepAlive.config.error.code",2);app.info.set("plugin_KeepAlive.config.error.text","Timeout error")}else{app.info.set("plugin_KeepAlive.config.lastDuration",a);app.info.set("plugin_KeepAlive.config.isAlive",true);app.info.set("plugin_KeepAlive.config.error.code",0);app.info.set("plugin_KeepAlive.config.error.text","No error")}app.debug.debug("plugin_KeepAlive.ajaxSuccess() value: plugin_KeepAlive.config.lastDuration = "+app.store.localStorage.get("config.plugin_KeepAlive.config.lastDuration"));app.debug.debug("plugin_KeepAlive.ajaxSuccess() value: plugin_KeepAlive.config.isAlive = "+app.store.localStorage.get("config.plugin_KeepAlive.config.isAlive"));app.debug.debug("plugin_KeepAlive.ajaxSuccess() value: plugin_KeepAlive.config.error.code = "+app.store.localStorage.get("config.plugin_KeepAlive.config.error.code"));app.debug.debug("plugin_KeepAlive.ajaxSuccess() value: plugin_KeepAlive.config.error.text = "+app.store.localStorage.get("config.plugin_KeepAlive.config.error.text"));plugin_KeepAlive.eventTriggering()},ajaxError:function(b,d,c){app.debug.trace("plugin_KeepAlive.ajaxError()");var a=Date.now()-plugin_KeepAlive.startTime;app.info.set("plugin_KeepAlive.config.lastDuration",a);app.info.set("plugin_KeepAlive.config.isAlive",false);app.info.set("plugin_KeepAlive.config.error.code",1);app.info.set("plugin_KeepAlive.config.error.text","Webservice Error: ");app.debug.debug("plugin_KeepAlive.ajaxSuccess() - KeepAlive request failed.\nReason: "+plugin_KeepAlive.config.error.text+"\nTime: "+a+"\n\n"+JSON.stringify(c,null,4),60);plugin_KeepAlive.eventTriggering()},ajax:function(a,e,b,f,d){app.debug.trace("plugin.KeepAlive.js plugin_KeepAlive.ajax("+a+", "+e+", "+b+", "+f+", "+d+")");try{$.ajax({cache:false,url:a,data:e,dataType:b,async:true,method:f,timeout:d,success:plugin_KeepAlive.ajaxSuccess,error:plugin_KeepAlive.ajaxError})}catch(c){alert("Fatal exception!\n\n"+JSON.stringify(c,null,4));app.debug.log(JSON.stringify(c,null,4))}},keepAliveRequest:function(){app.debug.trace("plugin_KeepAlive.keepAliveRequest()");var f,d,g,c,e,a,b;f=plugin_KeepAlive.config.path;d="";g=plugin_KeepAlive.config.method;c=plugin_KeepAlive.config.timeout;e=plugin_WebServiceClient.functions.getServer(plugin_KeepAlive.config.server,false);a=e+"/"+f;b=0;switch(plugin_KeepAlive.config.type){case"json":plugin_KeepAlive.startTime=Date.now();plugin_KeepAlive.ajax(a,d,"json",g,c);break;case"xml":alert("still not implemented");break;case"text":alert("still not implemented");break;case"html":alert("still not implemented");break;default:alert("keepAliveRequest: no such type: "+plugin_KeepAlive.config.type)}},functions:{isAlive:function(){return plugin_KeepAlive.config.isAlive},badConnectionHandler:function(){app.help.navigation.redirect(app.config.badConnectionPage,"slideup")}}};var plugin_RestClient={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_RestClient.pluginsLoaded()");var a=$.Deferred(),b=Array(),c;$.each(plugin_RestClient.config.wsdFiles,function(e,d){if(d){b.push(plugin_RestClient.loadDefinitionFileAsync(e))}});c=$.when.apply($,b);c.done(function(){a.resolve()});c.fail(function(){a.reject()});return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_RestClient.pagesLoaded()");app.debug.debug("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_RestClient.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_RestClient.pageSpecificEvents()")},loadDefinitionFileAsync:function(b){app.debug.trace("plugin_RestClient.loadDefinitionFile()");var a=$.Deferred(),c;c=globalLoader.AsyncJsonLoader(b);c.done(function(d){$.each(d,function(f,e){app.debug.debug("plugin_RestClient.loadDefinitionFile() - add: "+f);plugin_RestClient.config.webservices[f]=e});a.resolve()});c.done(function(){a.reject()});return a.promise()},loadDefinitionFile:function(b){app.debug.trace("plugin_RestClient.loadDefinitionFile()");var a=globalLoader.JsonLoader(b);app.debug.debug("plugin_RestClient.loadDefinitionFile() - add each webservice definition");$.each(a,function(d,c){app.debug.debug("plugin_RestClient.loadDefinitionFile() - add: "+d);plugin_RestClient.config.webservices[d]=c})},getPath:function(c,b){app.debug.trace("plugin_RestClient.getPath()");app.debug.debug("plugin_RestClient.getPath() - parameter: "+JSON.stringify(c));var a=b.split("?")[1];b=b.split("?")[0];if(c!=undefined){$.each(c,function(d,e){if(typeof e=="object"){e=JSON.stringify(e);b=b.replace("{"+d+"}",encodeURIComponent(e))}else{b=b.replace("{"+d+"}",encodeURIComponent(e))}app.debug.debug("plugin_RestClient.getPath() - set in path: "+d+" = "+encodeURIComponent(e))})}if(a==undefined){a=""}app.debug.debug("plugin_RestClient.getPath() - path: "+b);app.debug.debug("plugin_RestClient.getPath() - data: "+a);app.debug.debug("plugin_RestClient.getPath() - parameter: "+JSON.stringify(c));return[b,a]},getSingleJson:function(a,h,d){app.debug.debug("plugin_RestClient.getSingleJson() - get a single json object; async = false");app.debug.info("plugin_RestClient - CALL: "+a);var f,e,b,g,c;app.debug.debug("plugin_RestClient.getSingleJson() - get server name");if(a.indexOf(".")!=-1){g=a.split(".");f=g[0];a=g[1]}else{f=app.wsc.getDefaultServerName()}c=plugin_RestClient.config.webservices[a];if(c){e=c.url}else{app.debug.error("plugin_RestClient.getSingleJson() - service not defined: "+a);return null}d=false;e=plugin_RestClient.getPath(h,e);b=app.wsc.getJson(e[0],e[1],h,plugin_RestClient.config.webservices[a].method,plugin_RestClient.config.webservices[a].timeout,d,plugin_RestClient.config.webservices[a].local,f);if(plugins.functions.pluginLoaded("MultilanguageIso639_3")){if(b.language!=undefined){$.each(b.language,function(i,j){app.lang.addParameter(i,j)})}}return b},getSingleJsonAsync:function(e,f,c){app.debug.debug("plugin_RestClient.getSingleJsonAsync() - get a single json object; async = true;");app.debug.info("plugin_RestClient - CALL: "+e);var g=$.Deferred(),b,i,h,a,d;app.debug.debug("plugin_RestClient.getSingleJsonAsync() - get server name");if(e.indexOf(".")!=-1){a=e.split(".");b=a[0];e=a[1]}else{b=app.wsc.getDefaultServerName()}app.debug.debug("plugin_RestClient.getSingleJsonAsync() server: "+b+"; service: "+e);d=plugin_RestClient.config.webservices[e];if(d){i=d.url}else{app.debug.error("plugin_RestClient.getSingleJsonAsync() - service not defined: "+e);return g.reject()}i=plugin_RestClient.getPath(f,i);h=app.wsc.getJson(i[0],i[1],f,plugin_RestClient.config.webservices[e].method,plugin_RestClient.config.webservices[e].timeout,c,plugin_RestClient.config.webservices[e].local,b);h.done(function(j){if(plugins.functions.pluginLoaded("MultilanguageIso639_3")){if(j.language!=undefined){$.each(j.language,function(k,l){app.lang.addParameter(k,l)})}}app.debug.debug("plugin_RestClient.getSingleJsonAsync()- Webservice call done: "+JSON.stringify(j));g.resolve(j)});h.fail(function(j){app.debug.debug("plugin_RestClient.getSingleJsonAsync() - Webservice call failed: "+JSON.stringify(j));app.debug.info("plugin_RestClient - FAILED: "+j.id);g.reject(j)});return g.promise()},getMultipleJson:function(a,d,c){app.debug.debug("plugin_RestClient.getMultipleJson() - get multible json objects; async = false");var b={};app.debug.debug("plugin_RestClient.getMultipleJson() - generate ajax call for each webservice");$.each(a,function(j,m){var h=m[0],i=m[1],f,l,k,e,g;app.debug.info("plugin_RestClient - CALL: "+h);app.debug.debug("plugin_RestClient.getMultipleJson() - get server name");if(h.indexOf(".")!=-1){e=h.split(".");f=e[0];h=e[1]}else{f=app.wsc.getDefaultServerName()}c=false;app.debug.debug("plugin_RestClient.getMultipleJson() - get webservice path from wsd file");g=plugin_RestClient.config.webservices[h];if(g){l=g.url}else{app.debug.error("plugin_RestClient.getMultipleJson() - service not defined: "+h);return null}app.debug.debug("plugin_RestClient.getMultipleJson() - replace parameters in path");l=plugin_RestClient.getPath(i,l);app.debug.debug("plugin_RestClient.getMultipleJson() -  ask for the json file");k=app.wsc.getJson(l[0],l[1],i,plugin_RestClient.config.webservices[h].method,plugin_RestClient.config.webservices[h].timeout,c,plugin_RestClient.config.webservices[h].local,f);app.debug.debug("plugin_RestClient.getMultipleJson() - add language wildcards wich could be defined in webservice response");if(plugins.functions.pluginLoaded("MultilanguageIso639_3")){if(k.language!=undefined){$.each(k.language,function(n,o){app.lang.addParameter(n,o)})}}app.debug.debug("plugin_RestClient.getMultipleJson() - add result to resultObject");b[h]=k});return b},getMultipleJsonAsync:function(c,g,e){app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - get multible json objects; async = true");e=true;var b=$.Deferred(),d=[],a=[],f;app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - generate a ajax call for each webservice");$.each(c,function(h,k){app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - generate single async ajax call");var j=k[0],o=k[1],m,l,n,i;app.debug.info("plugin_RestClient - CALL: "+j);app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - get server name");if(j.indexOf(".")!=-1){f=j.split(".");m=f[0];j=f[1]}else{m=app.wsc.getDefaultServerName()}app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - get webservice path from wsd file");i=plugin_RestClient.config.webservices[j];if(i){l=i.url}else{app.debug.error("plugin_RestClient.getMultipleJsonAsync() - service not defined: "+j);return b.reject()}app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - replace parameters in path");l=plugin_RestClient.getPath(o,l);app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - ask for the deferred promise object");n=app.wsc.getJson(l[0],l[1],o,plugin_RestClient.config.webservices[j].method,plugin_RestClient.config.webservices[j].timeout,e,plugin_RestClient.config.webservices[j].local,m);d.push(n);a.push(j)});$.when.apply($,d).then(function(){app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - all async webservices are done");var h=[].slice.apply(arguments),i={};app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - add each result to resultObject");$.each(a,function(j,k){if(plugins.functions.pluginLoaded("MultilanguageIso639_3")){if(h[j].language!=undefined){$.each(h[j].language,function(l,m){app.lang.addParameter(l,m)})}}i[k]=h[j]});app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - async webservice call done: "+JSON.stringify(i));app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - resolve deferred object");b.resolve(i)},function(h){app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - error on or or more async webservices");app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - async webservice call failed: "+JSON.stringify(h));app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - reject deferred object");app.debug.info("plugin_RestClient - FAILED: "+h.id);b.reject(h)});app.debug.debug("plugin_RestClient.getMultipleJsonAsync() - return: deferred promise");return b.promise()},functions:{getWsd:function(a){app.debug.trace("plugin_RestClient.functions.getWsd()");return plugin_RestClient.config.webservices[a]||null},addWsd:function(d,c,g,f,a,b,e){app.debug.trace("plugin.RestClient.js plugin_RestClient.functions.addWebserviceDefinition()");if(typeof c=="object"){plugin_RestClient.config.webservices[d]=c}else{plugin_RestClient.config.webservices[d]={url:c,method:g,timeout:f,cacheable:a,cacheInMs:b,local:e}}return true},deleteWsd:function(a){delete plugin_RestClient.config.webservices[a];return true},addWebserviceDefinition:function(d,c,g,f,a,b,e){console.error("Depecated function!! use app.rc.addWsd(name, url, method, timeout, cacheable, cacheInMs, local)")},addWebserviceDefinitionFile:function(a){app.debug.debug("plugin_RestClient.functions.addWebserviceDefinitionFile("+a+")");plugin_RestClient.loadDefinitionFile(a)},cacheJson:function(b,e,c){app.debug.debug("plugin_RestClient.functions.cacheJson()");var d,a;a=app.rc.getWsd(b);if($.isPlainObject(c)){app.debug.debug("plugin_RestClient.functions.cacheJson() - store to local storage");d={servicename:b,parameter:e,cachetimestamp:Date.now(),data:JSON.stringify(c)};app.store.localStorage.setObject("_t_ws_"+b,d);return true}else{app.debug.debug("plugin_RestClient.functions.cacheJson() - restore from local storage");d=app.store.localStorage.getObject("_t_ws_"+b);if(JSON.stringify(e)!==JSON.stringify(d.parameter)){app.debug.debug("plugin_RestClient.functions.cacheJson() - case: parameter not equal");return false}else{if((d.cachetimestamp+a.cacheInMs)<Date.now()){app.debug.debug("plugin_RestClient.functions.cacheJson() - case: cash time timed out");return false}else{return JSON.parse(d.data)}}}return null},getJson:function(b,h,f,e,a){app.debug.debug("plugin_RestClient.functions.getJson("+b+", "+h+", "+f+")");var d,c,g;if(plugins.config.KeepAlive===true&&app.alive.isAlive()===true){app.debug.debug("plugin_RestClient.functions.getJson() - case: keepAlive && isAlive");if(typeof b=="object"){app.debug.debug("plugin_RestClient.functions.getJson() - case: get multible json objects");if(h==false||h==undefined){app.debug.debug("plugin_RestClient.functions.getJson() case: async = false");if(!f){f=1}for(c=0;c<f;c++){app.debug.debug("plugin_RestClient.functions.getJson() - AJAX attempt "+c+" of "+e);d=plugin_RestClient.getMultipleJson(b,h,f);if(d!=null){return d}}}else{if(typeof b=="object"&&h==true){app.debug.debug("plugin_RestClient.functions.getJson() - case: async = true");g=plugin_RestClient.getMultipleJsonAsync(b,h,f);if(a==null||a==undefined){a=$.Deferred()}g.done(function(i){a.resolve(i)});g.fail(function(i){app.debug.debug("plugin_RestClient.functions.getJson() - multible json object; case: webservice failed: "+JSON.stringify(i));if(f>1){f--;plugin_RestClient.functions.getJson(b,h,f,null,a)}else{app.debug.debug("plugin_RestClient.functions.getJson() - multiple json object; reject deferred object");a.reject(i)}});return a.promise()}}}else{if(typeof b=="string"){app.debug.debug("plugin_RestClient.functions.getJson() - case: get a single json object");if((h==undefined||typeof h=="object")&&(f==undefined||f==false)){app.debug.debug("plugin_RestClient.functions.getJson() - case: async = false");if(!e){e=1}for(c=0;c<e;c++){app.debug.debug("plugin_RestClient.functions.getJson() - AJAX attempt "+c+" of "+e);d=plugin_RestClient.getSingleJson(b,h,f);if(d!=null){return d}}}else{if((h==undefined||typeof h=="object")&&f==true){app.debug.debug("plugin_RestClient.functions.getJson() - case: async = true");g=plugin_RestClient.getSingleJsonAsync(b,h,f);if(a==null||a==undefined){a=$.Deferred()}g.done(function(i){a.resolve(i)});g.fail(function(i){app.debug.debug("plugin_RestClient.functions.getJson() - single json object; case: webservice failed: "+JSON.stringify(i));if(e>1){e--;plugin_RestClient.functions.getJson(b,h,f,e,a)}else{app.debug.debug("plugin_RestClient.functions.getJson() - single json object; reject deferred object");a.reject(i)}});return a.promise()}}}}}else{app.alive.badConnectionHandler()}return null}}};var plugin_HtmlView={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()");$(document).on("pagecontainerbeforetransition",function(d,e){var b,c,f;b=e.toPage.attr("id");c=plugin_HtmlView.config.multilanguageContext;f=app.lang.string(app.config.title,c)+" - "+app.lang.string(b,c);e.toPage.attr("data-title",f)})},functions:{page:{width:function(a,c){var b=parseInt($("div[data-role=page]").css("width"));if(b>c){return c}else{if(b<a){return a}}return b},height:function(a,c){var b=parseInt($("div[data-role=page]").css("height"));if(b>c){return c}return b}},content:{width:function(a,c){var b=parseInt($("div[data-role=content]").css("width"));if(b>c){return c}else{if(b<a){return a}}return b},height:function(a,c){var b=parseInt($("div[data-role=content]").css("height"));if(b>c){return c}else{if(b<a){return a}}return b}},window:{width:function(a,c){var b=parseInt($(window).width());if(b>c){return c}else{if(b<a){return a}}return b},height:function(a,c){var b=parseInt($(window).height());if(b>c){return c}else{if(b<a){return a}}return b}}}};var config_MultilanguageIso639_3={
	"name": "MultilanguageIso639_3",
	"shortname": "lang",
	"defaultLanguage": "deu",
	"availableLanguages": 
	[
		"deu",
		"eng"
	]
};var plugin_GlobalSettings={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_GlobalSettings.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_GlobalSettings.definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_GlobalSettings.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_GlobalSettings.pageSpecificEvents()")},functions:{get:function(a){app.debug.trace("plugin_GlobalSettings.functions.get()");return plugin_GlobalSettings.config.key},set:function(a,b){app.debug.trace("plugin_GlobalSettings.functions.set()");plugin_GlobalSettings.config.key=b}}};var plugin_Skin={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_Skin.pluginsLoaded()");var a=$.Deferred(),b=Array(),c;if(plugin_Skin.config.useSkinPlugin){$.each(plugin_Skin.config.skins[plugin_Skin.config.defaultSkin],function(e,d){app.debug.debug("plugin_Skin.pluginsLoaded() - Load css: "+d);b.push(app.load.css(d))});c=$.when.apply($,b);c.done(function(){app.debug.debug("plugin_Skin.pluginsLoaded() - loading css files done");a.resolve()}).fail(function(){app.debug.debug("plugin_Skin.pluginsLoaded() - loading css files failes");a.reject()});return a.promise()}else{return a.resolve()}},pagesLoaded:function(){app.debug.trace("plugin_Skin.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_Skin.definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_Skin.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_Skin.pageSpecificEvents()")},functions:{changeSkin:function(a){app.debug.trace("plugin_Skin.functions.change()");if(this.skinAvailable(a)){app.info.set("plugin_Skin.config.defaultSkin",a);return true}else{return false}},skinAvailable:function(a){app.debug.trace("plugin_Skin.functions.skinAvailable()");if(this.getAvailableSkins().indexOf(a)!=-1){app.debug.debug("plugin_Skin.functions.skinAvailable() - skin available: "+a);return true}else{app.debug.trace("plugin_Skin.functions.skinAvailable() - skin not available: "+a);return false}},getAvailableSkins:function(){app.debug.trace("plugin_Skin.functions.getAvailableSkins()");return Object.keys(plugin_Skin.config.skins)},getCurrentSkin:function(){app.debug.trace("plugin_Skin.functions.gatAvailableSkins()");return plugin_Skin.config.defaultSkin}}};var plugin_WebServiceError={config:null,constructor:function(){var a=$.Deferred(),d,c,b;String.prototype.hashCode=function(){d=0;c=this.length;if(c==0){return d}for(i=0;i<c;i++){b=this.charCodeAt(i);d=((d<<5)-d)+b;d=d&d}return d};a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_WebServiceError.pluginsLoaded()");var a=$.Deferred(),b=Array(),c;if(plugin_WebServiceError.config.errorKeys==undefined){app.debug.error("No errorKeys Array in plugin.WebServiceError.json");a.reject()}$.each(plugin_WebServiceError.config.wseFiles,function(e,d){if(d){b.push(plugin_WebServiceError.loadDefinitionFileAsync(e))}});c=$.when.apply($,b);c.done(function(){a.resolve()});c.fail(function(){a.reject()});return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_WebServiceError.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_WebServiceError.definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_WebServiceError.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_WebServiceError.pageSpecificEvents()")},loadDefinitionFileAsync:function(b){app.debug.trace("plugin_WebServiceError.loadDefinitionFileAsync("+b+")",20);var a=$.Deferred(),c;c=globalLoader.AsyncJsonLoader(b);c.done(function(d){$.each(d,function(f,e){app.debug.debug("pugin.WebServiceError.js ~ plugin_WebServiceError.loadDefinitionFileAsync() - add: "+f,20);plugin_WebServiceError.config.wse[f]=e});a.resolve()});c.done(function(){a.reject()});return a.promise()},loadDefinitionFile:function(b){app.debug.trace("plugin_WebServiceError.loadDefinitionFile()");app.debug.debug("Load definition file: "+b);var a=globalLoader.JsonLoader(b);$.each(a,function(d,c){app.debug.debug("Add definition: "+d,20);plugin_WebServiceError.config.wse[d]=c})},functions:{action:function(a){app.debug.trace("plugin_WebServiceError.functions.action()")},getErrorName:function(a){app.debug.trace("plugin_WebServiceError.functions.getErrorName()");var b=false;if(a.statusText==="error"&&a.readyState===0&&a.status===0){app.debug.debug("plugin_WebServiceError.functions.getErrorName() - case: webservice timed out");b="timeout"}else{$.each(plugin_WebServiceError.config.errorKeys,function(d,c){if(a.hasOwnProperty(c)){app.debug.debug("plugin_WebServiceError.functions.getErrorName() - case: webservice result has error key: "+c);b=a[c];return false}})}return b},getExceptionConfig:function(a){app.debug.trace("plugin_WebServiceError.functions.getExceptionConfig()");var b=null;b=plugin_WebServiceError.functions.getErrorName(a);if(b){app.debug.debug("plugin_WebServiceError.functions.getExceptionConfig() - errors");for(key in plugin_WebServiceError.config.wse){app.debug.debug("plugin_WebServiceError.functions.getExceptionConfig() - "+key+" == "+b);if(key==b){app.debug.debug("plugin_WebServiceError.functions.getExceptionConfig() - case: error found");return{id:Math.abs(key.hashCode()),wse:plugin_WebServiceError.config.wse[key]}}}}return false}}};var config_Actions={
	"name":"Actions",
	"shortname":"actions"
};var plugin_OAuth={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()")},desktopOAuth:function(a){if(app.config.apacheCordova==null||app.config.apacheCordova==false){app.help.navigation.redirect(a);return true}return false},functions:{tokenFromUrl:function(e){var b=window.location.href,c,a,d;c=""+e+"=(.+)$";a=new RegExp(c);d=a.exec(b);if(d){d=(d[0]+"").split("=");d=d[1]+"";d=d.split("&");d=d[0]}else{return false}return d},getQueryString:function(){try{return window.location.href.split("?")[1]}catch(a){return""}},generic:function(b){if(b.indexOf("dropbox")>-1){return app.oa.dropbox(b)}else{if(b.indexOf("facebook")>-1){return app.oa.facebook(b)}else{var a=$.Deferred();window.setTimeout(function(){a.resolve("Unkonwn URL: "+b)},1000);return a.promise()}}},dropbox:function(b){if(plugin_OAuth.desktopOAuth(b)){return}else{var a=$.Deferred(),c=window.open(b,"_blank","location=yes"),d=0;$(c).on("loadstart",function(h){d++;if(d>2){var g,f,i;g=h.originalEvent.url;f=/\?error=(.+)$/.exec(g);i=/\?oauth_token=(.+)$/.exec(g);if(i){c.close();a.resolve(g.split("?")[1])}else{if(f){c.close();a.reject(f)}}}});return a.promise()}},facebook:function(b){if(plugin_OAuth.desktopOAuth(b)){return}else{var a=$.Deferred(),c=window.open(b,"_blank","location=yes"),d=0;$(c).on("loadstart",function(h){d++;if(d>2){var g,f,i;g=h.originalEvent.url;f=/\?error_code=(.+)$/.exec(g);i=/\?code=(.+)$/.exec(g);if(i){c.close();a.resolve(g.split("?")[1])}else{if(f){c.close();a.reject(f)}}}});return a.promise()}},facebookToken:function(c,d,a,b){$.post("https://accounts.google.com/o/oauth2/token",{code:c,client_id:d,client_secret:a,redirect_uri:b,grant_type:"authorization_code"}).done(function(e){}).fail(function(e){})}}};var config_WebServiceError={
	"name": "WebServiceError",
	"shortname": "wse",
	"wseFiles": 
	{
		"../files/wse/wse.http.json": true,
		"../files/wse/wse.moodle.json": true
	},

	"actions": 
	{
		"redirect": "",
		"logout": "",
		"alert": "",
		"confirmation": ""
	},

	"errorKeys": 
	[
		"error",
		"exception"
	],

	"wse": 
	{
		"Template WebServiceErrorDefinition": 
		{
			"description": "Bad Request",
			"action": ""
		}
	}
};var config_HTML5Storage={
"name":"HTML5Storage",
"shortname":"store"
};var plugin_HTML5Storage={config:null,type:{object:"_t_pojo_",array:"_t_array_"},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_HTML5Storage.pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_HTML5Storage.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_HTML5Storage.definePluginEvents()");$(document).on("click","a",function(a){app.debug.debug("plugin.HTML5Storage.js plugin_HTML5Storage.definePluginEvents()");$.each($(this).attrs(),function(b,c){if(b.substring(0,11).trim().toLowerCase()=="data-html5-"){app.debug.debug("plugin.HTML5Storage.js plugin_HTML5Storage.definePluginEvents() Set localStorage: "+b+" = "+c);plugin_HTML5Storage.functions.localStorage.set(b,c)}});app.debug.debug("plugin_HTML5Storage.definePluginEvents() - trigger: storagefilled");$(this).trigger("storagefilled")})},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_HTML5Storage.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_HTML5Storage.pageSpecificEvents()")},setDeep:function(c,b,d){console.warn("Fuction is deprecated. Use: app.help.object.setDeep");app.debug.trace("plugin_HTML5Storage.setDeep("+app.debug.arguments+")");b=b.split(".");var a=0,e=b.length;for(;a<e-1;++a){c=c[b[a]]}return c[b[a]]=d},setDeepX:function(c,d,e){app.debug.trace("plugin_HTML5Storage.setDeepX("+app.debug.arguments+")");var a=d.split("."),g,b,f;g=a[0];if(g){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: depth >0");if(g.startsWith(plugin_HTML5Storage.type.array)){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: object is an array");b=(g.substring(plugin_HTML5Storage.type.array.length));app.debug.debug("plugin_HTML5Storage.setDeepX() - array index: "+b);if(!Array.isArray(c)){app.debug.debug("plugin_HTML5Storage.setDeepX() - array is not defined - define empty array");c=[]}if(a.length==1){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: depth 1; push value to array: "+e);c.push(e)}else{if(a[1].startsWith(plugin_HTML5Storage.type.object)){app.debug.debug("plugin_HTML5Storage.setDeepX() - next element is an object; so push empty object");if(!c[b]){c.push({})}}else{if(a[1].startsWith(plugin_HTML5Storage.type.array)){app.debug.debug("plugin_HTML5Storage.setDeepX() - next element is an array; so push empty array; next key: "+a[1]);if(!c[b]){c.push([])}}}app.debug.debug("plugin_HTML5Storage.setDeepX() - call recursively for nested array");c[g]=this.setDeepX(c[b],d.substr(g.length+1),e)}}else{if(g.startsWith(plugin_HTML5Storage.type.object)){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: object is an object");f=(g.substring(plugin_HTML5Storage.type.object.length));if(a.length==1){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: depth 1; so add the value: "+e+" to key: "+g);c[f]=e}else{if(!c[f]){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: object key is not defined - define empty object: "+g);c[f]={}}app.debug.debug("plugin_HTML5Storage.setDeepX() - call recursively for nested object");c[f]=this.setDeepX(c[f],d.substr(g.length+1),e)}}else{if(a.length==1){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: depth 1; so add the value: "+e+" to key: "+g);app.debug.debug("plugin_HTML5Storage.setDeepX() - value type == value");c[g]=e}else{app.debug.debug("plugin_HTML5Storage.setDeepX() - case: root element");if(!c[g]){app.debug.debug("plugin_HTML5Storage.setDeepX() - case: object key is not defined - define empty object: "+g);c[g]={}}app.debug.debug("plugin_HTML5Storage.setDeepX() - call recursively for nested object");c[g]=this.setDeepX(c[g],d.substr(g.length+1),e)}}}}return c},getDeep:function(c,b){console.warn("Fuction is deprecated. Use: app.help.object.getDeep");app.debug.debug("plugin_HTML5Storage.getDeep("+c+", "+b+")");b=b.split(".");var a=0,d=b.length;for(;a<d;++a){c=c[b[a]]}return c},parseValue:function(a){app.debug.trace("plugin_HTML5Storage.parseValue()");switch(a){case"true":app.debug.debug("plugin_HTML5Storage.parseValue() - case: value == true");a=true;break;case"false":app.debug.debug("plugin_HTML5Storage.parseValue() - case: value == false");a=false;break;case"null":app.debug.debug("plugin_HTML5Storage.parseValue() - case: value == null");a=null;break;default:app.debug.debug("plugin_HTML5Storage.parseValue() - case: default");if(/^(\+|\-){0,1}([0-9])+$/.test(a)){app.debug.debug("plugin_HTML5Storage.parseValue() - case: typeof value == integer");a=parseInt(a)}else{if(/^(\+|\-){0,1}([0-9])+(\.){1}([0-9])+$/.test(a)){app.debug.debug("plugin_HTML5Storage.parseValue() - case: typeof value == float");a=parseFloat(a)}else{app.debug.debug("plugin_HTML5Storage.parseValue() - case: value == ???")}}break}app.debug.debug("plugin_HTML5Storage.parseValue() - return: "+a);return a},getSpace:function(c){app.debug.trace("plugin_HTML5Storage.getSpace()");var a="",b;for(b=0;b<c;b++){a=a+" "}return a},functions:{pufferedFormValuePrefix:"pufferedFormValue-",localStorage:{set:function(a,b){app.debug.trace("plugin_HTML5Storage.functions.localStorage.set()");a=a.toLowerCase();window.localStorage.setItem(app.config.name+"."+a,b);return true},get:function(a){app.debug.trace("plugin_HTML5Storage.functions.localStorage.get()");a=a.toLowerCase();return plugin_HTML5Storage.parseValue(window.localStorage.getItem(app.config.name+"."+a))},clear:function(){app.debug.trace("plugin_HTML5Storage.functions.localStorage.clear()");$.each(window.localStorage,function(a,b){if(a.substring(0,app.config.name.length)==app.config.name){window.localStorage.removeItem(a)}});return true},clearHtml5:function(){app.debug.trace("plugin_HTML5Storage.functions.localStorage.clearHtml5()");$.each(window.localStorage,function(a,c){if(a.substr(app.config.name.length+1,10)=="data-html5"){try{window.localStorage.removeItem(a.trim())}catch(b){alert(b)}}});return true},pufferFormValues:function(a){app.debug.trace("plugin_HTML5Storage.functions.localStorage.pufferFormValues()");a.find("input[type=text], input[type=password]").each(function(b,c){plugin_HTML5Storage.functions.localStorage.set(plugin_HTML5Storage.functions.pufferedFormValuePrefix+a.attr("id")+"__"+$(c).attr("id"),$(c).val())})},getPufferedFormValue:function(b,c){app.debug.trace("plugin_HTML5Storage.functions.localStorage.getPufferedFormValue()");var a;if(typeof b=="object"){a=b.attr("id")}else{a=b}return plugin_HTML5Storage.functions.localStorage.get(plugin_HTML5Storage.functions.pufferedFormValuePrefix+a+"__"+c)},restorePufferedFormValues:function(a){app.debug.trace("plugin_HTML5Storage.functions.localStorage.restorePufferedFormValues()");a.find("input[type=text]").each(function(b,c){var e,d;e=$(c).attr("id");d=plugin_HTML5Storage.functions.localStorage.getPufferedFormValue(a,e);$(c).val(d)})},clearPufferedFormValues:function(){app.debug.trace("plugin_HTML5Storage.functions.localStorage.clearPufferedFormValues()");var a;$.each(window.localStorage,function(b,c){if(b.substring(0,app.config.name.length)==app.config.name){a=b.substring(app.config.name.length+1);var e,d;e=a.substring(0,plugin_HTML5Storage.functions.pufferedFormValuePrefix.length).toLowerCase();d=plugin_HTML5Storage.functions.pufferedFormValuePrefix.toLowerCase();if(e==d){window.localStorage.removeItem(b)}}})},removeItem:function(a){app.debug.trace("plugin_HTML5Storage.functions.localStorage.removeItem()");var b,c;if(a.indexOf("*")!=-1){app.debug.debug("plugin_HTML5Storage.functions.localStorage.removeItem() - wildcard detected: *");b=a.substring(0,a.indexOf("*")).toLowerCase();$.each(window.localStorage,function(d,f){c=d.substr(app.config.name.length+1,b.length).toLowerCase();app.debug.debug("plugin_HTML5Storage.functions.localStorage.removeItem() - "+c+" == "+b);if(c==b){app.debug.debug("plugin_HTML5Storage.functions.localStorage.removeItem() - case: "+c+" == "+b);try{window.localStorage.removeItem(d.trim())}catch(e){alert(e)}}})}else{window.localStorage.removeItem(app.config.name+"."+a)}return true},show:function(){app.debug.trace("plugin_HTML5Storage.functions.localStorage.show()");var a="",b=0;$.each(window.localStorage,function(c,d){if(c.substring(0,app.config.name.length)==app.config.name){a+=c+"\n"+plugin_HTML5Storage.getSpace(app.config.name.length+1)+c.substring(app.config.name.length+1)+" = "+d+"\n";b++}else{a+=c+" = "+d+"\n";b++}});return a},log:function(){app.debug.trace("plugin_HTML5Storage.functions.localStorage.log()");$.each(window.localStorage,function(a,b){if(a.substring(0,app.config.name.length)==app.config.name){app.debug.log(a.substring(app.config.name.length+1)+" = "+b)}})},setObject:function(b,a){app.debug.trace("plugin_HTML5Storage.functions.localStorage.setObject()");app.debug.debug("plugin_HTML5Storage.functions.localStorage.setObject("+b+", "+JSON.stringify(a)+")");b=b.toLowerCase();$.each(a,function(c,d){app.debug.debug("plugin_HTML5Storage.functions.localStorage.setObject() - element: "+c+" = "+d);if(Array.isArray(a)){c=plugin_HTML5Storage.type.array+c}else{if($.isPlainObject(a)){c=plugin_HTML5Storage.type.object+c}}if(typeof d=="object"&&d!=null){app.debug.debug("plugin_HTML5Storage.functions.localStorage.setObject() - nested object");plugin_HTML5Storage.functions.localStorage.setObject((b+"."+c).trim(),d)}else{plugin_HTML5Storage.functions.localStorage.set((b+"."+c).trim(),d)}});return true},getObject:function(b){app.debug.trace("plugin_HTML5Storage.functions.localStorage.getObject()");app.debug.debug('plugin_HTML5Storage.functions.localStorage.getObject("'+b+'")');b=b.toLowerCase();var a={};$.each(window.localStorage,function(d,f){var g,e,c;app.debug.debug("plugin_HTML5Storage.functions.localStorage.getObject() - element: "+d+" = "+f);c=d.substr(app.config.name.length+1,b.length).trim();if(c==b.trim()){app.debug.debug("plugin_HTML5Storage.functions.localStorage.getObject() - found part of object: "+c);g=d.substr(app.config.name.length+1);app.debug.debug("plugin_HTML5Storage.functions.localStorage.getObject() - storage key: "+g);e=plugin_HTML5Storage.functions.localStorage.get(d.substr(app.config.name.length+1));app.debug.debug("plugin_HTML5Storage.functions.localStorage.getObject() - storage value: "+e);a=plugin_HTML5Storage.setDeepX(a,g,e)}});if(a[b]!=undefined){return a[b]}else{return null}},removeObject:function(a){a=a.toLowerCase();app.debug.trace("plugin_HTML5Storage.functions.localStorage.removeObject()");var b=true;$.each(window.localStorage,function(c,e){if(c.substr(app.config.name.length+1,a.length)==a.trim()){try{window.localStorage.removeItem(c.trim())}catch(d){alert(d);b=false}}});return b},getList:function(a){app.debug.trace("plugin_HTML5Storage.functions.localStorage.getList()");var b={};$.each(window.localStorage,function(c,d){if(c.substr(app.config.name.length+1,a.length)==a){b[c.substr(app.config.name.length+1)]=plugin_HTML5Storage.functions.localStorage.get(c.substr(app.config.name.length+1))}});return b}},sessionStorage:{set:function(a,b){app.debug.trace("plugin_HTML5Storage.functions.sessionStorage.set()");window.sessionStorage.setItem(a,b)},get:function(a){app.debug.trace("plugin_HTML5Storage.functions.sessionStorage.get()");window.sessionStorage.getItem(a)},clear:function(){window.sessionStorage.clear()},removeItem:function(a){window.sessionStorage.removeItem(a)},show:function(){}},ss:this.sessionStorage}};var plugin_jQueryExtend={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred();(function(b){b.fn.attrs=function(f){var h=b(this),e,d,k,c,g,l;if(f){h.each(function(j,m){e=b(m);for(c in f){e.attr(c,f[c])}});return h}else{d={},k=h.get(0);if(k){k=k.attributes;for(g in k){l=k[g];if(l!=null){if(typeof l.value!=="undefined"){d[l.nodeName]=l.value}}}}return d}}})(jQuery);a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5)},pageSpecificEvents:function(a){app.debug.trace("Plugin: "+this.config.name+".pageSpecificEvents()",5)},functions:{}};var config_Informator={
	"name": "Informator",
	"shortname": "info",
	"excludedPlugins": 
	[
		"Debug"
	],

	"useHtml5Storage": true,
	"savePluginConfig": true,
	"savePageConfig": false
};var plugin_MultilanguageIso639_3={config:null,dictionary:null,parameter:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()",11);var a;a=globalLoader.AsyncJsonLoader("../files/language/"+plugin_MultilanguageIso639_3.config.defaultLanguage+".json").done(function(b){plugin_MultilanguageIso639_3.dictionary=b});return a},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5)},pageSpecificEvents:function(a){app.debug.trace("Plugin: "+this.config.name+".pageSpecificEvents()",5)},loadLanguageIntoDict:function(b){var a="../files/language/"+b+".json";$.ajax({dataType:"json",url:a,async:false,success:function(c){app.debug.debug("Langugae successfully loaded: "+b,3);plugin_MultilanguageIso639_3.dictionary=c},error:function(c,e,d){alert("Fatal error: Can't load language: "+a+" Error: "+e)}})},functions:{get:function(){return plugin_MultilanguageIso639_3.config.defaultLanguage},getAvailableLanguages:function(){return plugin_MultilanguageIso639_3.config.availableLanguages},getCurrentLanguage:function(){return plugin_MultilanguageIso639_3.config.defaultLanguage},languageAvailable:function(a){if(this.getAvailableLanguages().indexOf(a)!=-1){return true}else{return false}},changeLanguage:function(a){if(this.languageAvailable(a)){app.info.set("plugin_MultilanguageIso639_3.config.defaultLanguage",a);return true}else{return false}},addParameter:function(a,b){if(!plugin_MultilanguageIso639_3.parameter){plugin_MultilanguageIso639_3.parameter={};if(plugin_HTML5Storage!=undefined){app.store.localStorage.getList("language-")}}plugin_MultilanguageIso639_3.parameter[a]=b;if(plugin_HTML5Storage!=undefined){app.store.localStorage.set("language-"+a,b)}},string:function(e,c,b){var d=null,a;if(!plugin_MultilanguageIso639_3.dictionary){plugin_MultilanguageIso639_3.loadLanguageIntoDict(plugin_MultilanguageIso639_3.config.defaultLanguage)}if(c==undefined){d=plugin_MultilanguageIso639_3.dictionary[e]}else{if(plugin_MultilanguageIso639_3.dictionary[c]==undefined){a='{"'+c+'" : {}}';app.debug.feedback.language(JSON.parse(a));d=e}else{d=plugin_MultilanguageIso639_3.dictionary[c][e]}}if(d!=undefined){if(plugin_MultilanguageIso639_3.parameter!=null){$.each(plugin_MultilanguageIso639_3.parameter,function(f,g){d=d.replace("%"+f+"%",g)})}if(b!=undefined){$.each(b,function(f,g){d=d.replace("%"+f+"%",g)})}return d}else{a='{"'+c+'" : {"'+e+'" : "TRANSLATION"}}';app.debug.feedback.language(JSON.parse(a));return e}},list:function(b){var a="";if(!plugin_MultilanguageIso639_3.dictionary){plugin_MultilanguageIso639_3.loadLanguageIntoDict(plugin_MultilanguageIso639_3.config.defaultLanguage)}$.each(plugin_MultilanguageIso639_3.dictionary,function(c,d){if(typeof d=="object"){$.each(d,function(e,f){a+=f+"\n"})}else{a+=d+"\n"}});return a},set:function(a){plugin_MultilanguageIso639_3.loadLanguageIntoDict(a);app.info.set("plugin_MultilanguageIso639_3.config.defaultLanguage",a)}}};var config_KeepAlive={
	"name": "KeepAlive",
	"shortname": "alive",
	"dependencies": 
	[
		"WebServiceClient"
	],

	"useKeepAlive": true,
	"server": "backmeup",
	"intervalInS": 14,
	"path": "keepAlive.json",
	"method": "get",
	"type": "json",
	"timeout": "12000",
	"lastDuration": null,
	"isAlive": true,
	"maximumResponseTime": 13000,
	"error": 
	{
		"text": "",
		"code": 0
	}
};var plugin_Detector={config:null,cssClasses:{},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_Detector.pluginsLoaded()");var a=$.Deferred();plugin_Detector.functions.classes.generate();app.debug.debug("Css Classes in body Tag: "+plugin_Detector.functions.classes.classNames(),60);app.debug.debug(navigator.userAgent,60);a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_Detector.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_Detector.definePluginEvents()");var a=$.Deferred(),b=$.Deferred();document.addEventListener("deviceready",function(){a.resolve()},false);$(document).bind("mobileinit",function(){b.resolve()});$.when(a,b).then(plugin_Detector.jQueryMobileAndCordovaLoaded);$.when(a).then(plugin_Detector.cordovaLoaded);$.when(b).then(plugin_Detector.jQueryMobileLoaded)},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_Detector.afterHtmlInjectedBeforePageComputing()");console.log("TODO - clean up & do not use pagebeforecreate");if(plugin_Detector.config.addCssClassesToBodyTag){$.each(app.detect.classes.array(),function(c,b){if(!$("body").hasClass(c)){$("body").addClass(c)}})}},pageSpecificEvents:function(a){app.debug.trace("plugin_Detector.pageSpecificEvents()")},jQueryMobileAndCordovaLoaded:function(){app.debug.trace("plugin_Detector.jQueryMobileAndCordovaLoaded()");plugin_Detector.cssClasses["app-jQueryMobile-and-Cordova"]=null},jQueryMobileLoaded:function(){app.debug.trace("plugin_Detector.jQueryMobileLoaded()");plugin_Detector.cssClasses["app-jQueryMobile"]=null},cordovaLoaded:function(){app.debug.trace("plugin_Detector.cordovaLoaded()");plugin_Detector.cssClasses["app-Cordova"]=null},functions:{classes:{classNames:function(){app.debug.trace("plugin_Detector.functions.classes.classNames()");var a="";$.each(plugin_Detector.cssClasses,function(b,c){a+=b+" "});return a},generate:function(){app.debug.trace("plugin_Detector.functions.classes.generate()");var a;if(a=plugin_Detector.functions.isMobile()){plugin_Detector.cssClasses[a]=null}if(a=plugin_Detector.functions.isDesktop()){plugin_Detector.cssClasses[a]=null}$.each(plugin_Detector.functions.mobile,function(b,c){if(typeof c=="function"){if(a=plugin_Detector.functions.mobile[b]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof c=="object"){$.each(plugin_Detector.functions.mobile[b],function(e,d){if(typeof d=="function"){if(a=plugin_Detector.functions.mobile[b][e]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof d=="object"){$.each(plugin_Detector.functions.mobile[b][e],function(g,f){if(typeof f=="function"){if(a=plugin_Detector.functions.mobile[b][e][g]()){plugin_Detector.cssClasses[a]=null}}})}}})}}});$.each(plugin_Detector.functions.desktop,function(b,c){if(typeof c=="function"){if(a=plugin_Detector.functions.desktop[b]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof c=="object"){$.each(plugin_Detector.functions.desktop[b],function(e,d){if(typeof d=="function"){if(a=plugin_Detector.functions.desktop[b][e]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof d=="object"){$.each(plugin_Detector.functions.desktop[b][e],function(g,f){if(typeof f=="function"){if(a=plugin_Detector.functions.desktop[b][e][g]()){plugin_Detector.cssClasses[a]=null}}})}}})}}});$.each(plugin_Detector.functions.media,function(b,c){if(typeof c=="function"){if(a=plugin_Detector.functions.media[b]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof c=="object"){$.each(plugin_Detector.functions.media[b],function(e,d){if(typeof d=="function"){if(a=plugin_Detector.functions.media[b][e]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof d=="object"){$.each(plugin_Detector.functions.media[b][e],function(g,f){if(typeof f=="function"){if(a=plugin_Detector.functions.media[b][e][g]()){plugin_Detector.cssClasses[a]=null}}})}}})}}});$.each(plugin_Detector.functions.browser,function(b,c){if(typeof c=="function"){if(a=plugin_Detector.functions.browser[b]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof c=="object"){$.each(plugin_Detector.functions.browser[b],function(e,d){if(typeof d=="function"){if(a=plugin_Detector.functions.browser[b][e]()){plugin_Detector.cssClasses[a]=null}}else{if(typeof d=="object"){$.each(plugin_Detector.functions.browser[b][e],function(g,f){if(typeof f=="function"){if(a=plugin_Detector.functions.browser[b][e][g]()){plugin_Detector.cssClasses[a]=null}}})}}})}}})},array:function(){app.debug.trace("plugin_Detector.functions.classes.array()");return plugin_Detector.cssClasses}},isMobile:function(){app.debug.trace("plugin_Detector.functions.isMobile()");if(plugin_Detector.functions.mobile.isApple()||plugin_Detector.functions.mobile.isBlackberry()||plugin_Detector.functions.mobile.isCannonical()||plugin_Detector.functions.mobile.isGoogle()||plugin_Detector.functions.mobile.isMicrosoft()||plugin_Detector.functions.mobile.isMozilla()){return"app-mobile"}else{return false}},mobile:{isApple:function(){app.debug.trace("plugin_Detector.functions.mobile.isApple()");if(plugin_Detector.functions.mobile.apple.iOS()){return"app-mobile-apple"}else{return false}},apple:{iOS:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.iOS()");if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){return"app-ios"}else{return false}},iPhone:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.iPhone()");if(navigator.userAgent.match(/iPhone/i)){return"app-ios"}else{return false}},iPad:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.iPad()");if(navigator.userAgent.match(/iPad/i)){return"app-ios"}else{return false}},iPod:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.iPod()");if(navigator.userAgent.match(/iPod/i)){return"app-ios"}else{return false}},version:{iOS3:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.version.iOS3()");if(navigator.userAgent.match(/OS 3_/i)){return"app-ios-version-3"}else{return false}},iOS4:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.version.iOS4()");if(navigator.userAgent.match(/OS 4_/i)){return"app-ios-version-4"}else{return false}},iOS5:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.version.iOS5()");if(navigator.userAgent.match(/OS 5_/i)){return"app-ios-version-5"}else{return false}},iOS6:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.version.iOS6()");if(navigator.userAgent.match(/OS 6_/i)){return"app-ios-version-6"}else{return false}},iOS7:function(){app.debug.trace("plugin_Detector.functions.mobile.apple.version.iOS7()");if(navigator.userAgent.match(/OS 7_/i)){return"app-ios-version-7"}else{return false}}}},isGoogle:function(){app.debug.trace("plugin_Detector.functions.mobile.isGoogle()");if(plugin_Detector.functions.mobile.google.Android()){return"app-mobile-android"}else{return false}},google:{Android:function(){app.debug.trace("plugin_Detector.functions.mobile.google.Android()");if(navigator.userAgent.match(/Android/i)){return"app-android"}else{return false}},version:{}},isMicrosoft:function(){app.debug.trace("plugin_Detector.functions.mobile.isMicrosoft()");if(plugin_Detector.functions.mobile.microsoft.Windows()){return"app-mobile-microsoft"}},microsoft:{Windows:function(){app.debug.trace("plugin_Detector.functions.mobile.microsoft.Windows()");if(navigator.userAgent.match(/IEMobile/i)){return"app-windows-mobile"}else{return false}},version:{}},isBlackberry:function(){app.debug.trace("plugin_Detector.functions.mobile.isBlackberry()");if(plugin_Detector.functions.mobile.blackberry.blackberry()){return"app-mobile-blackberry"}else{return false}},blackberry:{blackberry:function(){app.debug.trace("plugin_Detector.functions.mobile.blackberry.blackberry()");if(navigator.userAgent.match(/BlackBerry/i)){return"app-blackberry"}else{return false}},version:{}},isMozilla:function(){app.debug.trace("plugin_Detector.functions.mobile.isMozilla()");if(plugin_Detector.functions.mobile.mozilla.firefoxOS()){return"app-mobile-mozilla"}else{return false}},mozilla:{firefoxOS:function(){app.debug.trace("plugin_Detector.functions.mobile.mozilla.firefoxOS()")}},isCannonical:function(){app.debug.trace("plugin_Detector.functions.mobile.isCannonical()");if(plugin_Detector.functions.mobile.canonical.ubuntu()){return"app-mobile-cannonical"}else{return false}},canonical:{ubuntu:function(){app.debug.trace("plugin_Detector.functions.mobile.cannonical.ubuntu()")}}},isDesktop:function(){app.debug.trace("plugin_Detector.functions.isDesktop()");if(plugin_Detector.functions.desktop.isApple()||plugin_Detector.functions.desktop.isCannonical()||plugin_Detector.functions.desktop.isMicrosoft()||plugin_Detector.functions.desktop.isDebian()){return"app-desktop"}else{return false}},desktop:{isApple:function(){app.debug.trace("plugin_Detector.functions.desktop.isApple()");if(plugin_Detector.functions.desktop.apple.Macintosh()){return"app-desktop-apple"}else{return false}},apple:{Macintosh:function(){app.debug.trace("plugin_Detector.functions.desktop.apple.Macintosh()");if(navigator.userAgent.match(/Macintosh/i)){return"app-desktop-apple-macintish"}else{return false}},version:{}},isMicrosoft:function(){app.debug.trace("plugin_Detector.functions.desktop.isMicrosoft()");if(plugin_Detector.functions.desktop.microsoft.Windows()){return"app-desktop-microsoft"}else{return false}},microsoft:{Windows:function(){app.debug.trace("plugin_Detector.functions.microsoft.Windows()");return navigator.userAgent.match(/Windows/i)},version:{}},isCannonical:function(){app.debug.trace("plugin_Detector.functions.desktop.isCannonical()");if(plugin_Detector.functions.desktop.cannonical.Ubuntu()){return"app-desktop-cannonical"}else{return false}},cannonical:{Ubuntu:function(){app.debug.trace("plugin_Detector.functions.desktop.cannonical.Ubuntu()");return navigator.userAgent.match(/Ubuntu/i)},version:{}},isDebian:function(){app.debug.trace("plugin_Detector.functions.desktop.isDebian()");if(plugin_Detector.functions.desktop.debian.Debian()){return"app-desktop-debian"}else{return false}},debian:{Debian:function(){app.debug.trace("plugin_Detector.functions.desktop.debian.debian()");return navigator.userAgent.match(/X11; Linux/i)},version:{}}},browser:{microsoft:{version:{}},apple:{version:{}},cannonical:{version:{}},mozilla:{version:{}},google:{version:{}}},media:{sony:{version:{}},microsoft:{version:{}},nintendo:{version:{}}}}};var config_LoadExternalScripts={
	"name": "LoadExternalScripts",
	"shortname": "load",
	"scripts":
	{
		"css":
		{
			"../ext/jQueryMobile/jquery.mobile.min.css": true,
			"../css/fonts.css": true,
			"../css/global.css": true,
			"../css/platform.android.css": true,
			"../css/platform.desktop.css": true,
			"../css/platform.ios.css": true,
			"../css/platform.mobile.css": true,
			"../css/platform.cordova.css": true,
			"../css/timelinesearch.css": true,
			"../ext/leaflet/leaflet.css": true,
			"../ext/spatiotemporal/spatiotemporal-search.no-deps.css": true,
			"../template/app.responsive.grid.33.33.33.css": "true",
			"../template/app.responsive.grid.25.75.css": "true",
			"../template/app.responsive.grid.75.25.css": "true"
		},

		"javascript":
		{
			"../ext/DATE.js": true,
			"../ext/jquery.serializejson.min.js": true,
			"../ext/moment/moment.js": true,
			"../ext/leaflet/leaflet.js": true,
			"../ext/spatiotemporal/spatiotemporal-search.no-deps.min.js": true
		}
	}
}
;var config_WebServiceClient={
	"name": "WebServiceClient",
	"shortname": "wsc",
	"defaultWebServiceTimeoutMs": 5000,
	"defaultWebServiceMethod": "post",
	"defaultWebServiceType": "json",
	"useKeepAlive": true,
	"keepAlive": 
	{
		"keepAliveServer": "backmeup",
		"keepAliveIntervalInS": 15,
		"keepAlivePath": "/keepAlive.json",
		"method": "get",
		"type": "json",
		"timeout": "4500",
		"lastDuration": null,
		"isAlive": true,
		"maximumResponseTime": 4000,
		"error": 
		{
			"text": "",
			"code": 0
		}
	},

	"useServerShuffle": true,
	"useHeaderToken": true,
	"headerToken": 
	{
		"key": "Authorization",
		"value": "themis-token"
	},

	"defaultServer": "backmeup",
	"server": 
	{
		"backmeup": 
		{
			"active": true,
			"pingPath": "",
			"mappings": 
			{
				"post": "json",
				"get": "query",
				"put": "query",
				"delete": "query"
			},

			"first": 
			{
				"scheme": "http",
				"scheme_specific_part": "://",
				"host": "themis-dev01.backmeup.at",
				"port": 80,
				"path": ""
			},

			"second": 
			{
				
			},

			"third": 
			{
				
			},

			"fouth": 
			{
				
			},

			"fifth": 
			{
				
			}
		},

		"licence": 
		{
			"active": true,
			"pingPath": "REST/ping",
			"mappings": 
			{
				"post": "query",
				"get": "query",
				"put": "query",
				"delete": "query"
			},

			"first": 
			{
				"scheme": "http",
				"scheme_specific_part": "://",
				"host": "localhost",
				"port": 8080,
				"path": ""
			},

			"second": 
			{
				
			},

			"third": 
			{
				
			},

			"fouth": 
			{
				
			},

			"fifth": 
			{
				
			}
		}
	}
};var config_json = {
	"Actions": true,
	"Backmeup": true,
	"Debug": true,
	"Detector": true,
	"DeviceManager": true,
	"FormInputDesigner": true,
	"GlobalSettings": true,
	"HelperFunctions": true,
	"HTML5Storage": true,
	"HtmlTemplates": true,
	"HtmlView": true,
	"ImageProvider": true,
	"IndexDb": true,
	"Informator": true,
	"jQueryExtend": true,
	"KeepAlive": true,
	"KeyValueStack": true,
	"LoadExternalScripts": true,
	"MultilanguageIso639_3": true,
	"Navigation": true,
	"Notification": true,
	"OAuth": true,
	"RestClient": true,
	"Session": true,
	"WebServiceClient": true,
	"WebServiceError": true
};var config_HtmlTemplates={
	"name":"HtmlTemplates",
	"shortname":"template",
	"templates":{
		"JQueryMobilePageStructure":		
		{
			"url":			"../template/JQueryMobilePageStructure.html",
			"elements":		
			{
				"content":	"div[data-role=content]"
			}
		},
		
		"JQueryMobilePlainPage":			
		{
			"url":			"../template/JQueryMobilePlainPage.html",
			"elements":		
			{
				"content":	"div[data-role=content]"
			}
		},
		
		"JQueryMobileHeaderPage":			
		{
			"url":			"../template/JQueryMobileHeaderPage.html",
			"elements":		
			{
				"content":	"div[data-role=content]"
			}
		},
		
		"JQueryMobileNavigationPanel":			
		{
			"url":				"../template/JQueryMobileNavigationPanel.html"
		},
		
		"JQueryMobilePopupDialog":			
		{
			"url":				"../template/JQueryMobilePopupDialog.html"
		},
		
		"JQueryMobilePopupAlert":						
		{
			"url":			"../template/JQueryMobilePopupAlert.html"
		},
		
		"app-loader-bubble":							
		{
			"url":			"../template/app.loader.bubble.html"
		},
		
		"app-loader-bubble-inline-button":				
		{
			"url":			"../template/app.loader.bubble.inline-button.html"
		},
		
		"app-loader-bubbleDiv":							
		{
			"url":			"../template/app.loader.bubbleDiv.html"
		},
		
		"themis":{
			"ThemisHeaderContent":			
			{
				"url":			"../template/ThemisHeaderContent.html"
			},
			
			"ThemisNavigationPanelContent":			
			{
				"url":			"../template/ThemisNavigationPanelContent.html"
			}
		},
		
		"responsive":{
			"grid-33-33-33":			
			{
				"url":			"../template/app.responsive.grid.33.33.33.html"
			},
			
			"listA":			
			{
				"url":			"../template/app.responsive.list.A.html"
			},
			
			"listB":			
			{
				"url":			"../template/app.responsive.list.B.html"
			}
		}
	}
};/**
 * Copyright (c) 2015 martin.kattner@stygs.com
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var plugins = {
	config : null,
	pluginNames : [],
	constructor : function() {
		var dfd = $.Deferred();

		// reverse order
		startup.addFunction("lapstone is defining the plugins' events", plugins.callPluginEvents, "");
		startup.addFunction("lapstone is calling the plugins' loaded event", plugins.callPluginsLoadedEvent, "");
		startup.addFunction("lapstone is verifying the plugins' properties", plugins.verifyPlugins, "");
		startup.addFunction("lapstone is loading the plugins", plugins.loadPlugins, "");
		startup.addFunction("lapstone us verifying the plugins' configuration", plugins.verifyPluginNames, "");
		startup.addFunction("lapstone is loading the plugins' configuration", plugins.loadPluginConfig, "");
		dfd.resolve();
		return dfd.promise();
	},

	loadPluginConfig : function() {
		var dfd = $.Deferred(), promise;
		if (app.config.min) {
			plugins.config = config_json;
			dfd.resolve();
		} else {
			promise = globalLoader.AsyncJsonLoader("../js/plugin/plugins.json");
			promise.done(function(data) {
				plugins.config = data;
				// remove unused plugins
				$.each(plugins.config, function(pluginName, use) {
					if (!use)
						delete plugins.config[pluginName];
				});
				dfd.resolve();
			});

			promise.fail(function() {
				dfd.reject();
			});
		}

		return dfd.promise();
	},

	verifyPluginNames : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	verifyPlugins : function() {
		var dfd = $.Deferred();

		$.each(plugins.config, function(pluginName, loaded) {
			if (plugins.config.Debug && loaded) {
				if (!window['plugin_' + pluginName].priv)
					console.warn("The plugin " + pluginName + " has no priv object.");
			}
		});

		dfd.resolve();
		return dfd.promise();
	},

	loadPluginConfiguration : function(key) {
		var dfd = $.Deferred(), promise;
		// load the config into plugins
		if (app.config.min) {
			window['plugin_' + key].config = window['config_' + key];
			dfd.resolve();
		} else {

			promise = globalLoader.AsyncJsonLoader("../js/plugin/plugin." + key + ".json");
			promise.done(function(json) {
				window['plugin_' + key].config = json;
				dfd.resolve();
			});
			promise.fail(function() {
				dfd.reject();
			});
		}

		return dfd.promise();
	},

	onPluginLoaded : function(key) {
		var dfd = $.Deferred(), promise, promiseConfiguration;

		if (window['plugin_' + key] == undefined) {
			alert("Fatal error: Plugin class is not defined: plugin_" + key);
			return;
		}

		promiseConfiguration = plugins.loadPluginConfiguration(key);

		promiseConfiguration.done(function() { // check the config:
			// name
			if (window['plugin_' + key].config.name == undefined) {
				alert("Fatal error: The property 'name' is not defined in JSON file: ../js/plugin." + key + ".json")
				return false;
			}
			// check the config: shortname
			if (window['plugin_' + key].config.shortname == undefined) {
				alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/plugin." + key + ".json")
				return false;
			}

			// call the plugin's contructor
			// console.log('plugin_' + key);
			promise = window['plugin_' + key].constructor();

			promise.done(function() {
				// attach plugin's public functions to app object
				app[window['plugin_' + key].config.shortname] = window['plugin_' + key].functions;

				// plugin succesfully loaded
				// attach plugin's name to array
				plugins.pluginNames.push(key);

				dfd.resolve();
			});
			promise.fail(function() {
				dfd.reject()
			});
		});

		promiseConfiguration.fail(function() {
			dfd.reject();
		});

		return dfd.promise();
	},

	loadPlugins : function() {
		var dfd = $.Deferred(), promises_js = Array(), promiseOfPromises_js, promises_func = Array(), promiseOfPromises_func;
		$.each(plugins.config, function(key, value) {
			if (value == true) {
				if (app.config.min) {
					// console.log("todo !!!!!");
					promises_js.push(plugins.onPluginLoaded(key));
				} else {
					promises_js.push(globalLoader.AsyncScriptLoader("../js/plugin/plugin." + key + ".js"));
				}
			}
		});

		promiseOfPromises_js = $.when.apply($, promises_js);

		if (app.config.min) {
			promiseOfPromises_js.done(function() {
				dfd.resolve();
			});
			promiseOfPromises_js.fail(function() {
				dfd.reject();
			});

		} else {

			promiseOfPromises_js.done(function() {
				$.each(plugins.config, function(key, value) {
					promises_func.push(plugins.onPluginLoaded(key));
				});

				promiseOfPromises_func = $.when.apply($, promises_func);

				promiseOfPromises_func.done(function() {
					dfd.resolve();
				});
				promiseOfPromises_func.fail(function() {
					dfd.reject()
				});
			});

			promiseOfPromises_js.fail(function() {
				dfd.reject();
			});
		}

		// dfd.resolve();
		return dfd.promise();
	},

	callPluginsLoadedEvent : function() {
		var dfd = $.Deferred(), promises = Array(), promiseOfPromises;

		$.each(plugins.pluginNames, function(key, value) {
			promises.push(window['plugin_' + value].pluginsLoaded());
		});

		promiseOfPromises = $.when.apply($, promises);

		promiseOfPromises.done(function() {
			dfd.resolve();
		});

		promiseOfPromises.fail(function() {
			dfd.reject();
		});

		return dfd.promise();
	},

	callPluginEvents : function() {
		var dfd = $.Deferred();
		$.each(plugins.pluginNames, function(key, value) {
			// try {
			window['plugin_' + value].definePluginEvents();
			// } catch (err) {
			// app.debug.alert("Notify: The plugin has no definePluginEvents()
			// method: plugin_" + value, 10);
			// }
		});
		dfd.resolve();
		return dfd.promise();
	},

	functions : {
		pluginLoaded : function(pluginName) {
			app.debug.trace("plugins.functions.pluginLoaded()");
			if (plugins.config.hasOwnProperty(pluginName)) {
				app.debug.debug("plugins.functions.pluginLoaded() - true: " + pluginName);
				return true;
			}

			else {
				app.debug.debug("plugins.functions.pluginLoaded() - false: " + pluginName);
				return false;
			}
		},

	}
};

// constructor
;var plugin_Informator={config:null,configurationPrefix:"informator-config",constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_Informator.pluginsLoaded("+app.debug.arguments(arguments)+")");var a,b;a=$.Deferred();if(this.config.useHtml5Storage&&this.config.savePluginConfig){app.debug.debug("plugin_Informator.pluginsLoaded() - case: load plugin config from html5 storage");b={};$.each(plugins.pluginNames,function(c,d){if(plugin_Informator.config.excludedPlugins.indexOf(d)==-1){if(b["plugin_"+d]==undefined){b["plugin_"+d]={}}b["plugin_"+d]["config"]=window["plugin_"+d]["config"]}});this.loadConfigurationIntoHtml5Storage(b)}a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_Informator.pagesLoaded("+app.debug.arguments(arguments)+")");var a=$.Deferred(),b;if(this.config.useHtml5Storage&&this.config.savePageConfig){b={};$.each(pages.pageNames,function(c,d){if(b["page_"+d]==undefined){b["page_"+d]={}}b["page_"+d]["config"]=globalLoader.JsonLoader("../js/page/page."+d+".json")});this.loadConfigurationIntoHtml5Storage(b)}a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_Informator.definePluginEvents("+app.debug.arguments(arguments)+")")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_Informator.afterHtmlInjectedBeforePageComputing("+app.debug.arguments(arguments)+")")},pageSpecificEvents:function(a){app.debug.trace("plugin_Informator.pageSpecificEvents("+app.debug.arguments(arguments)+")")},setDeep:function(c,b,d){app.debug.trace("plugin_Informator.setDeep("+app.debug.arguments(arguments)+")");console.warn("Fuction is deprecated. Use: app.help.object.setDeep");b=b.split(".");var a=0,e=b.length;for(;a<e-1;++a){c=c[b[a]]}return c[b[a]]=d},getDeep:function(c,b){app.debug.trace("plugin_Informator.getDeep("+app.debug.arguments(arguments)+")");console.warn("Fuction is deprecated. Use: app.help.object.getDeep");b=b.split(".");var a=0,d=b.length;for(;a<d;++a){c=c[b[a]]}return c},loadConfigurationIntoHtml5Storage:function(a,b){app.debug.trace("plugin_Informator.loadConfigurationIntoHtml5Storage("+app.debug.arguments(arguments)+")");app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage()");app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - if property is in html5 storage then use this value");app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - else use property from json file");if(!a||a==undefined){return}if(b==undefined){b=""}$.each(a,function(c,d){app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - compute  key/value pair");var e;if(typeof d!="object"){app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - case: value != object");e=plugin_Informator.configurationPrefix+b+"."+c;if(app.store.localStorage.get(e)===null){app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - case: key '"+e+"' doesn't exists in html5 storage");app.store.localStorage.set(e,d)}else{app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - case: key '"+e+"' exists in html5 storage");plugin_Informator.loadValueIntoObject(e)}}else{app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - case: value == object");app.debug.debug("plugin_Informator.loadConfigurationIntoHtml5Storage() - go recursive into object");plugin_Informator.loadConfigurationIntoHtml5Storage(d,b+"."+c)}})},loadValueIntoObject:function(a){app.debug.trace("plugin_Informator.loadValueIntoObject("+app.debug.arguments(arguments)+")");app.debug.debug("plugin_Informator.loadValueIntoObject("+a+")");var b=a.substring(plugin_Informator.configurationPrefix.length+1),c=app.store.localStorage.get(a);if(b.indexOf("..")<0){app.help.object.setDeep(window,b,c)}else{app.debug.debug('plugin_Informator.loadValueIntoObject() - ".." detected')}},functions:{set:function(a,b){app.debug.trace("plugin_Informator.functions.set("+app.debug.arguments(arguments)+")");if(plugin_Informator.config.useHtml5Storage){app.store.localStorage.set(plugin_Informator.configurationPrefix+"."+a,b)}app.help.object.setDeep(window,a,b)},firstUse:function(a){app.debug.trace("plugin_Informator.functions.firstUse("+app.debug.arguments(arguments)+")");if(a==undefined){app.debug.debug("plugin_Informator.functions.firstUse("+a+") - case: value == undefined");app.debug.debug("plugin_Informator.functions.firstUse() - return: "+app.store.localStorage.get("informator-first-use"));if(app.store.localStorage.get("informator-first-use")===null){return true}else{return false}}else{if(typeof a=="boolean"){app.debug.debug("plugin_Informator.functions.firstUse("+a+") - case: typeof value == boolean");app.debug.debug("plugin_Informator.functions.firstUse() - set firstUse to: "+a);app.store.localStorage.set("informator-first-use",a);if(a==false){app.debug.debug("plugin_Informator.functions.firstUse() - case: value == false")}app.debug.debug("plugin_Informator.functions.firstUse() - return: "+a);return a}else{app.debug.debug("plugin_Informator.functions.firstUse() - return: null");return null}}}}};var plugin_LoadExternalScripts={config:null,loadedScripts:{},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()",11);var a=$.Deferred(),b=Array(),c;app.debug.debug("plugin_LoadExternalScripts.pluginsLoaded() - case: load ordered styles");console.log("TODO - script loading");app.debug.debug("plugin_LoadExternalScripts.pluginsLoaded() - case: load unordered styles");$.each(plugin_LoadExternalScripts.config.scripts.css,function(d,e){if(e){if(d in plugin_LoadExternalScripts.loadedScripts){}else{b.push(globalLoader.AsyncStyleLoader(d));plugin_LoadExternalScripts.loadedScripts[d]=true}}});app.debug.debug("plugin_LoadExternalScripts.pluginsLoaded() - case: load ordered scripts");if(plugin_LoadExternalScripts.config.scripts.javascriptOrdered){b.push(plugin_LoadExternalScripts.loadScriptsAsync(plugin_LoadExternalScripts.config.scripts.javascriptOrdered.slice()))}app.debug.debug("plugin_LoadExternalScripts.pluginsLoaded() - case: load unordered scripts");if(plugin_LoadExternalScripts.config.scripts.javascript){$.each(plugin_LoadExternalScripts.config.scripts.javascript,function(d,e){if(e){b.push(globalLoader.AsyncScriptLoader(d));plugin_LoadExternalScripts.loadedScripts[d]=true}})}c=$.when.apply($,b);c.done(function(){a.resolve()});c.fail(function(){a.reject()});return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5)},pageSpecificEvents:function(){app.debug.trace("Plugin: "+this.config.name+".pageSpecificEvents()",5)},loadScriptsAsync:function(c){app.debug.trace("plugin_LoadExternalScripts.loadSingleScriptAsync()");var a=$.Deferred(),b,d;b=c.pop();app.debug.debug("plugin_LoadExternalScripts.loadSingleScriptAsync() - LOAD url: "+b);globalLoader.AsyncScriptLoader(b).done(function(){plugin_LoadExternalScripts.loadedScripts[b]=true;app.debug.debug("plugin_LoadExternalScripts.loadSingleScriptAsync() - DONE url: "+b);if(c.length){app.debug.debug("plugin_LoadExternalScripts.loadSingleScriptAsync() - case: script array not empty; call again");d=plugin_LoadExternalScripts.loadScriptsAsync(c);d.done(function(){a.resolve()});d.fail(function(){a.reject()})}else{app.debug.debug("plugin_LoadExternalScripts.loadSingleScriptAsync() - case: script array empty; resolve");a.resolve()}}).fail(function(){app.debug.debug("plugin_LoadExternalScripts.loadSingleScriptAsync() - FAIL url: "+b);a.reject()});return a.promise()},functions:{css:function(a){app.debug.trace("plugin_LoadExternalScripts.functions.css()");var b;if(a in plugin_LoadExternalScripts.loadedScripts){app.debug.debug("plugin_LoadExternalScripts.functions.css() - css already loaded: "+a);return $.Deferred().resolve()}else{app.debug.debug("plugin_LoadExternalScripts.functions.css() - load css: "+a);b=globalLoader.AsyncStyleLoader(a);b.done(function(){app.debug.debug("plugin_LoadExternalScripts.functions.css() - css loading done: "+a);app.debug.debug("plugin_LoadExternalScripts.functions.css() - add url to loadedScripts array");plugin_LoadExternalScripts.loadedScripts[a]=true});return b}},javascript:function(a){app.debug.trace("plugin_LoadExternalScripts.functions.javascript()");if(a in plugin_LoadExternalScripts.loadedScripts){}else{globalLoader.AsyncScriptLoader(a);plugin_LoadExternalScripts.loadedScripts[a]=true}}}};var config_Notification={
	"name":"Notification",
	"shortname":"notify",
	"enablePushNotifications":false
};var config_jQueryExtend={
	"name":"jQueryExtend",
	"shortname":"jExt"
};var config_KeyValueStack={
"name":"KeyValueStack",
"shortname":"pStack"
};var config_Debug={
	"name": "Debug",
	"shortname": "debug",
	"debugDevice": true,
	"debugLevels": 
	{
		"ALL": 0,
		"TRACE": 1,
		"DEBUG": 2,
		"INFO": 3,
		"APP": 4,
		"WARN": 5,
		"ERROR": 6,
		"FATAL": 7,
		"OFF": 8
	},

	"consoleLevel": "INFO",
	"logLevel": "OFF"
};var plugin_Navigation={config:null,history:[],lastTransition:"none",constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()");$("body").on("pagecontainerbeforetransition",function(a,b){if(plugin_Navigation.history.length>0){if(plugin_Navigation.history[plugin_Navigation.history.length-1].page!=b.toPage.attr("id")){plugin_Navigation.history.push({page:b.toPage.attr("id"),transition:b.options.transition})}}else{plugin_Navigation.history.push({page:b.toPage.attr("id"),transition:b.options.transition})}})},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()")},functions:{redirect:function(b,c,a){app.debug.trace("plugin_Navigation.functions.redirect()");setTimeout(function(){if(c!=undefined){$("body").pagecontainer("change",b,{transition:c,reverse:(a==undefined)?false:a})}else{$(location).attr("href",b)}},50)},back:function(c){app.debug.trace("plugin_Navigation.functions.back()");var b,a;if(plugin_Navigation.history.length>1){app.debug.debug("plugin_Navigation.functions.back() - application has history");a=plugin_Navigation.history.pop();app.debug.debug("plugin_Navigation.functions.back() - current page: "+JSON.stringify(a));b=plugin_Navigation.history[plugin_Navigation.history.length-1];app.debug.debug("plugin_Navigation.functions.back() - last page: "+JSON.stringify(b));this.redirect(b.page+".html",a.transition,true)}},forward:function(){app.debug.trace("plugin_Navigation.functions.forward()");window.history.forward()},reload:function(){app.debug.trace("plugin_Navigation.functions.reload()")},refresh:function(){app.debug.trace("plugin_Navigation.functions.refresh()");$("div[data-role=page]").remove();jQuery.mobile.changePage(window.location.href,{allowSamePageTransition:true,transition:"none",reloadPage:true})},redirectAndReload:function(a){app.debug.trace("plugin_Navigation.functions.redirectAndReload()");$.mobile.ajaxEnabled=false;window.location.replace(a)},normalizeUrl:function(a){app.debug.trace("plugin_Navigation.functions.normalizeUrl()");a=URI(a);if(a.protocol()===""){a.protocol("http")}return a.toString()}}};var config_Navigation={
	"name":"Navigation",
	"shortname":"nav"
};var config_Backmeup={
	"name":"Backmeup",
	"shortname":"bmu",
	"themis_url":"http://themis-dev01.backmeup.at",
	"themis_oauth_redirect_source":"/page/create_backup_1_oAuthFinished.html",
	"themis_oauth_redirect_sink":"/page/create_backup_2_oAuthFinished.html"
};var config_RestClient={
	"name":"RestClient",
	"shortname":"rc",
	"wsdFiles":{
		"../files/wsd/wsd.themis.authentication.json":true,
		"../files/wsd/wsd.themis.backupjobs.json":true,
		"../files/wsd/wsd.themis.logs.json":true,
		"../files/wsd/wsd.themis.plugins.json":true,
		"../files/wsd/wsd.themis.search.json":true,
		"../files/wsd/wsd.themis.sharing.json":true,
		"../files/wsd/wsd.themis.users.json":true,
		"../files/wsd/wsd.themis.collections.json":true
	},
	"webservices":{
		"template":{
			"url":"string url",
			"method":"string method",
			"timeout":"int timeout"
		}
	}
};var plugin_Debug={config:null,logObject:[],feedback:{language:{},image:{}},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_Debug.pluginsLoaded("+app.debug.arguments(arguments)+")");var a=$.Deferred();plugin_MultilanguageIso639_3.config.availableLanguages.push("dev");a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_Debug.pagesLoaded("+app.debug.arguments(arguments)+")");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_Debug.definePluginEvents("+app.debug.arguments(arguments)+")")},afterHtmlInjectedBeforePageComputing:function(c){app.debug.trace("plugin_Debug.pagesLoaded("+app.debug.arguments(arguments)+")");if(plugin_Debug.config.debugDevice&&(app.config.min==false)){var b,a;b=app.ni.element.div({id:"divDebug",attributes:{"data-enhance":"false"},styles:{position:"fixed","z-index":"1050",top:"0px",left:"0px",padding:"5px","min-width":"150px","min-height":"50px","background-color":"rgba(200, 200, 200, 0.7)"}});a=app.ni.select.single({id:"selConsoleLevel",label:true,labelText:"console level",container:true});$.each(plugin_Debug.config.debugLevels,function(d,e){a.find("select").append(app.ni.select.option({text:d,value:d,selected:(plugin_Debug.config.consoleLevel==d)?true:false}))});b.append(a);a=app.ni.select.single({id:"selLogLevel",label:true,labelText:"log level",container:true});$.each(plugin_Debug.config.debugLevels,function(d,e){a.find("select").append(app.ni.select.option({text:d,value:d,selected:(plugin_Debug.config.logLevel==d)?true:false}))});b.append(a);b.append(app.ni.button.button({id:"btnClose",value:"close"}));c.append(b)}},pageSpecificEvents:function(a){app.debug.trace("plugin_Debug.pageSpecificEvents("+app.debug.arguments(arguments)+")");if(plugin_Debug.config.debugDevice&&(app.config.min==false)){$(document).on("change","#selConsoleLevel",function(){app.info.set("plugin_Debug.config.consoleLevel",$("#selConsoleLevel option:selected").val())});$(document).on("change","#selLogLevel",function(){app.info.set("plugin_Debug.config.logLevel",$("#selLogLevel option:selected").val())});$(document).on("click","#btnClose",function(){$("#divDebug").slideUp()})}},functions:{arguments:function(b){var a="";$.each(b,function(c,d){a+=d+", "});return a.substring(0,a.length-2)},trace:function(a){this.log(a,"TRACE")},debug:function(a){this.log(a,"DEBUG")},info:function(a){this.log(a,"INFO")},app:function(a){this.log(a,"APP")},warn:function(a){this.log(a,"WARN")},error:function(a){this.log(a,"ERROR");try{console.error("Error trace:")}catch(b){}},fatal:function(a){this.log(a,"FATAL");try{console.error("Error trace:")}catch(b){}},alert:function(a,b){console.warn("Dep. "+a)},log:function(a,b){if(plugin_Debug.config.debugDevice){if(plugin_Debug.config.debugLevels[b]>=plugin_Debug.config.debugLevels[plugin_Debug.config.logLevel]){plugin_Debug.logObject.push(a)}if(plugin_Debug.config.debugLevels[b]>=plugin_Debug.config.debugLevels[plugin_Debug.config.consoleLevel]){console.log(b+": "+a)}}},showLog:function(){console.warn("Deprecated function!!");alert(JSON.stringify(plugin_Debug.logObject))},ls:{wsd:function(){app.debug.trace("plugin_Debug.functions.ls.wsd("+app.debug.arguments(arguments)+")");$.each(plugin_RestClient.config.webservices,function(a,d){var c,b;console.log("Name: "+a);if(d.hasOwnProperty("url")){c=d.url.split("?")[0];b=d.url.split("?")[1];console.log("\tPath: "+c);console.log("\tQuery parameter:");if(b){$.each(b.split("&"),function(e,f){console.log("\t\t"+f.replace("="," = "))})}console.log(" ")}else{console.error("Webservice has no url property.")}})}},feedback:{language:function(a){app.debug.trace("plugin_Debug.functions.feedback.language("+app.debug.arguments(arguments)+")");app.debug.warn("Unimplemented language: "+JSON.stringify(a));$.extend(true,plugin_Debug.feedback.language,a)},languageGetJson:function(){app.debug.trace("plugin_Debug.functions.feedback.languageGetJson("+app.debug.arguments(arguments)+")");return JSON.stringify($.extend(true,plugin_Debug.feedback.language,plugin_MultilanguageIso639_3.dictionary))},image:function(a){app.debug.trace("plugin_Debug.functions.feedback.image("+app.debug.arguments(arguments)+")");app.debug.warn("Unimplemented image: "+JSON.stringify(a));$.extend(true,plugin_Debug.feedback.image,a)},imageGetJson:function(){app.debug.trace("plugin_Debug.functions.feedback.languageGetJson("+app.debug.arguments(arguments)+")");return JSON.stringify($.extend(true,plugin_Debug.feedback.image,plugin_ImageProvider.images))},wsdGetJson:function(){app.debug.trace("plugin_Debug.functions.feedback.wsdGetJson("+app.debug.arguments(arguments)+")");return JSON.stringify(plugin_RestClient.config.webservices)}}}};var plugin_FormInputDesigner={config:null,classes:[],attributes:{},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_FormInputDesigner.pluginsLoaded()");var a=$.Deferred();if(plugins.functions.pluginLoaded("Skin")){if(plugin_Skin.config.useSkinPlugin){app.debug.trace("plugin_FormInputDesigner.pluginsLoaded() - case: Skin plugin is active");plugin_FormInputDesigner.classes=[plugin_Skin.config.defaultSkin]}}a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_FormInputDesigner.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_FormInputDesigner.definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_FormInputDesigner.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_FormInputDesigner.pageSpecificEvents()")},getAttributes:function(b){app.debug.trace("plugin_FormInputDesigner.getAttributes()");var a,c;c="";b.classes=b.classes.concat(plugin_FormInputDesigner.classes);a='class="'+plugin_FormInputDesigner.getClasses(b)+'"';if(b.hasOwnProperty("placeholder")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: placeholder");a+=' placeholder="'+b.placeholder+'"'}if(b.hasOwnProperty("id")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: id");a+=' id="'+b.id+'"'}if(b.hasOwnProperty("name")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: name");a+=' name="'+b.name+'"'}if(b.hasOwnProperty("value")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: value");a+=' value="'+b.value+'"'}if(b.hasOwnProperty("href")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: href");a+=' href="'+b.href+'"'}if(b.hasOwnProperty("onclick")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: onclick");a+=' onclick="'+b.onclick+'"'}if(b.hasOwnProperty("src")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: src");a+=' src="'+b.src+'"'}if(b.hasOwnProperty("alt")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: alt");a+=' alt="'+b.alt+'"'}if(b.hasOwnProperty("title")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: title");a+=' title="'+b.title+'"'}if(b.hasOwnProperty("disabled")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: disabled");if(b.disabled){a+=' disabled="disabled"'}}if(b.hasOwnProperty("checked")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: checked");if(b.checked){a+=' checked="checked"'}}if(b.hasOwnProperty("selected")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: selected");if(b.selected){a+=' selected="selected"'}}if(b.hasOwnProperty("attributes")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: attributes");$.each(b.attributes,function(d,e){a+=" "+d+'="'+e+'"'})}if(b.hasOwnProperty("styles")){app.debug.debug("plugin_FormInputDesigner.getAttributes() - has property: styles");$.each(b.styles,function(d,e){c+=" "+d+":"+e+";"});a+=' style="'+c+'"'}return a},getClasses:function(a){app.debug.trace("plugin_FormInputDesigner.getClasses()");var b="";if(a.classes!=undefined){$.each(a.classes,function(c,d){b+=d+" "})}return b},getLabel:function(b){app.debug.trace("plugin_FormInputDesigner.getLabel()");var c="",d="",a="";if(b.labelText!=undefined){c=b.labelText}if(b.label!=undefined&&!b.label){d="ui-hidden-accessible app-form-label-hidden"}if(b.id!=undefined){a+=' for="'+b.id+'"'}return"<label "+a+' class="'+d+'">'+c+"</label>"},wrapInContainer:function(b,a){app.debug.trace("plugin_FormInputDesigner.wrapInContainer()");return'<div class="ui-field-contain app-form-label-input-container">'+b+a+"</div>"},addClassToOptions:function(a,b){app.debug.trace("plugin_FormInputDesigner.addClassToOptions()");if(a.classes==undefined){a.classes=new Array()}a.classes.push(b);return a},generateInput:function(d,f){app.debug.trace("plugin_FormInputDesigner.generateInput()");d=plugin_FormInputDesigner.verifyOptions(d);var b=plugin_FormInputDesigner.getAttributes(d),a='<input type="'+f+'"  '+b+" />",c="",e;if(d.label!=undefined&&d.label==true){c=plugin_FormInputDesigner.getLabel(d)}if(d.container!=undefined&&d.container){e=plugin_FormInputDesigner.wrapInContainer(c,a)}else{e=c+a}return $(e)},generateOutput:function(c,d){app.debug.trace("plugin_FormInputDesigner.generateOutput()");c=plugin_FormInputDesigner.verifyOptions(c);var b=plugin_FormInputDesigner.getAttributes(c),a;if(c.text==undefined){c.text=""}switch(d){case"img":a="<"+d+" "+b+"/>";break;default:a="<"+d+" "+b+">"+c.text+"</"+d+">";break}return $(a)},verifyOptions:function(a){app.debug.trace("plugin_FormInputDesigner.verifyOptions()");if(a==undefined){a={}}if(a.classes==undefined){a.classes=[]}if(a.attributes==undefined){a.attributes={}}if(a.styles==undefined){a.styles={}}if(a.text!=undefined){if(typeof a.text=="object"){a.text=a.text[0].outerHTML}}return a},functions:{form:{form:function(c){app.debug.trace("plugin_FormInputDesigner.functions.form.form()");c=plugin_FormInputDesigner.verifyOptions(c);var d="form",b=plugin_FormInputDesigner.getAttributes(c),a;plugin_FormInputDesigner.addClassToOptions(c,"app-form");if(c.text==undefined){c.text=""}a="<"+d+" "+b+">"+c.text+"</"+d+">";return $(a)}},text:{hidden:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.text()");a=plugin_FormInputDesigner.verifyOptions(a);var b="hidden";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-text");return plugin_FormInputDesigner.generateInput(a,b)},text:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.text()");a=plugin_FormInputDesigner.verifyOptions(a);var b="text";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-text");return plugin_FormInputDesigner.generateInput(a,b)},search:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.search()");a=plugin_FormInputDesigner.verifyOptions(a);var b="search";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-search");return plugin_FormInputDesigner.generateInput(a,b)},textarea:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.textarea()");a=plugin_FormInputDesigner.verifyOptions(a);var b="textarea";plugin_FormInputDesigner.addClassToOptions(a,"app-textarea");return $(plugin_FormInputDesigner.generateOutput(a,b))},number:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.number()");a=plugin_FormInputDesigner.verifyOptions(a);var b="number";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-number");return plugin_FormInputDesigner.generateInput(a,b)},date:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.date()");a=plugin_FormInputDesigner.verifyOptions(a);var b="date";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-date");return plugin_FormInputDesigner.generateInput(a,b)},month:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.month()");a=plugin_FormInputDesigner.verifyOptions(a);var b="month";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-month");return plugin_FormInputDesigner.generateInput(a,b)},week:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.week()");a=plugin_FormInputDesigner.verifyOptions(a);var b="week";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-week");return plugin_FormInputDesigner.generateInput(a,b)},time:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.time()");a=plugin_FormInputDesigner.verifyOptions(a);var b="time";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-time");return plugin_FormInputDesigner.generateInput(a,b)},datetime:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.datetime()");a=plugin_FormInputDesigner.verifyOptions(a);var b="datetime";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-datetime");return plugin_FormInputDesigner.generateInput(a,b)},telephone:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.telephone()");a=plugin_FormInputDesigner.verifyOptions(a);var b="telephone";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-telephone");return plugin_FormInputDesigner.generateInput(a,b)},email:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.email()");a=plugin_FormInputDesigner.verifyOptions(a);var b="email";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-email");return plugin_FormInputDesigner.generateInput(a,b)},url:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.url()");a=plugin_FormInputDesigner.verifyOptions(a);var b="url";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-url");return plugin_FormInputDesigner.generateInput(a,b)},password:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.password()");a=plugin_FormInputDesigner.verifyOptions(a);var b="password";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-password");return plugin_FormInputDesigner.generateInput(a,b)},color:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.color()");a=plugin_FormInputDesigner.verifyOptions(a);var b="color";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-color");return plugin_FormInputDesigner.generateInput(a,b)},file:function(a){app.debug.trace("plugin_FormInputDesigner.functions.text.file()");a=plugin_FormInputDesigner.verifyOptions(a);var b="file";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-file");return plugin_FormInputDesigner.generateInput(a,b)}},button:{button:function(a){app.debug.trace("plugin_FormInputDesigner.functions.button.button()");a=plugin_FormInputDesigner.verifyOptions(a);var b="button";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-button");return plugin_FormInputDesigner.generateInput(a,b)},submit:function(a){app.debug.trace("plugin_FormInputDesigner.functions.button.submit()");a=plugin_FormInputDesigner.verifyOptions(a);var b="submit";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-submit");return plugin_FormInputDesigner.generateInput(a,b)},reset:function(a){app.debug.trace("plugin_FormInputDesigner.functions.button.reset()");a=plugin_FormInputDesigner.verifyOptions(a);var b="reset";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-submit");return plugin_FormInputDesigner.generateInput(a,b)}},radio:{radio:function(a){app.debug.trace("plugin_FormInputDesigner.functions.radio.radio()");a=plugin_FormInputDesigner.verifyOptions(a);var b="radio";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-radio");return plugin_FormInputDesigner.generateInput(a,b)}},checkbox:{checkbox:function(a){app.debug.trace("plugin_FormInputDesigner.functions.checkbox.checkbox()");a=plugin_FormInputDesigner.verifyOptions(a);var b="checkbox";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-checkbox");return plugin_FormInputDesigner.generateInput(a,b)}},range:{range:function(a){app.debug.trace("plugin_FormInputDesigner.functions.range.range()");a=plugin_FormInputDesigner.verifyOptions(a);var b="range";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-checkbox");return plugin_FormInputDesigner.generateInput(a,b)}},select:{multiple:function(c){app.debug.trace("plugin_FormInputDesigner.functions.select.select()");c=plugin_FormInputDesigner.verifyOptions(c);c.attributes.multiple="multiple";var d="select",b=plugin_FormInputDesigner.getAttributes(c),a;plugin_FormInputDesigner.addClassToOptions(c,"app-form-select-multiple");if(c.text==undefined){c.text=""}a="<"+d+" "+b+">"+c.text+"</"+d+">";return $(a)},single:function(d){app.debug.trace("plugin_FormInputDesigner.functions.select.select()");d=plugin_FormInputDesigner.verifyOptions(d);var b=plugin_FormInputDesigner.getAttributes(d),a="<select "+b+" ></select>",c="",e;if(d.label!=undefined&&d.label==true){c=plugin_FormInputDesigner.getLabel(d)}if(d.container!=undefined&&d.container){e=plugin_FormInputDesigner.wrapInContainer(c,a)}else{e=c+a}return $(e)},option:function(c){app.debug.trace("plugin_FormInputDesigner.functions.select.option()");c=plugin_FormInputDesigner.verifyOptions(c);var d="option",b=plugin_FormInputDesigner.getAttributes(c),a;plugin_FormInputDesigner.addClassToOptions(c,"app-form-select-option");if(c.text==undefined){c.text=""}a="<"+d+" "+b+">"+c.text+"</"+d+">";return $(a)}},collabsible:{},list:{thumbnail:function(a){app.debug.trace("plugin_FormInputDesigner.functions.list.thumbnail()");a=plugin_FormInputDesigner.verifyOptions(a);var b="<li>";b+='<a href="'+a.href+'" '+plugin_FormInputDesigner.getAttributes(a)+'> <img src="'+a.imageSrc+'" class="ui-li-thumb ">';b+="<h2>"+a.headline+"</h2>";b+='<p class="ui-li-responsive-p">'+a.text+"</p>";b+='<p class="ui-li-aside">'+a.title+"</p>";b+="</a>";b+="</li>";return $(b)}},slider:{},navigation:{navbar:function(b){app.debug.trace("plugin_FormInputDesigner.functions.navigation.navbar()");b=plugin_FormInputDesigner.verifyOptions(b);var a=plugin_FormInputDesigner.getAttributes(b),c=$('<div data-role="navbar" '+a+"></div>");return c},panel:function(b){app.debug.trace("plugin_FormInputDesigner.functions.navigation.panel()");b=plugin_FormInputDesigner.verifyOptions(b);var a=plugin_FormInputDesigner.getAttributes(b),c=$('<div data-role="panel" '+a+"></div>");return c}},table:{table:function(b){app.debug.trace("plugin_FormInputDesigner.functions.table.table()");b=plugin_FormInputDesigner.verifyOptions(b);var a=plugin_FormInputDesigner.getAttributes(b),c="<table "+a+"><thead></thead><tbody></tbody></table>";return $(c)},th:function(a){app.debug.trace("plugin_FormInputDesigner.functions.table.th()");a=plugin_FormInputDesigner.verifyOptions(a);var b="th";plugin_FormInputDesigner.addClassToOptions(a,"app-th");return plugin_FormInputDesigner.generateOutput(a,b)},tr:function(a){app.debug.trace("plugin_FormInputDesigner.functions.table.tr()");a=plugin_FormInputDesigner.verifyOptions(a);var b="tr";plugin_FormInputDesigner.addClassToOptions(a,"app-tr");return $(plugin_FormInputDesigner.generateOutput(a,b))},td:function(a){app.debug.trace("plugin_FormInputDesigner.functions.table.td()");a=plugin_FormInputDesigner.verifyOptions(a);var b="td";plugin_FormInputDesigner.addClassToOptions(a,"app-td");return $(plugin_FormInputDesigner.generateOutput(a,b))}},element:{table:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.table()");a=plugin_FormInputDesigner.verifyOptions(a);var b="table";plugin_FormInputDesigner.addClassToOptions(a,"app-table");return plugin_FormInputDesigner.generateOutput(a,b)},tr:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.tr()");a=plugin_FormInputDesigner.verifyOptions(a);var b="tr";plugin_FormInputDesigner.addClassToOptions(a,"app-tr");return plugin_FormInputDesigner.generateOutput(a,b)},td:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.td()");a=plugin_FormInputDesigner.verifyOptions(a);var b="td";plugin_FormInputDesigner.addClassToOptions(a,"app-td");return plugin_FormInputDesigner.generateOutput(a,b)},th:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.th()");a=plugin_FormInputDesigner.verifyOptions(a);var b="th";plugin_FormInputDesigner.addClassToOptions(a,"app-th");return plugin_FormInputDesigner.generateOutput(a,b)},thead:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.thead()");a=plugin_FormInputDesigner.verifyOptions(a);var b="thead";plugin_FormInputDesigner.addClassToOptions(a,"app-thead");return plugin_FormInputDesigner.generateOutput(a,b)},tbody:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.tbody()");a=plugin_FormInputDesigner.verifyOptions(a);var b="tbody";plugin_FormInputDesigner.addClassToOptions(a,"app-tbody");return plugin_FormInputDesigner.generateOutput(a,b)},h1:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.h1()");a=plugin_FormInputDesigner.verifyOptions(a);var b="h1";plugin_FormInputDesigner.addClassToOptions(a,"app-h1");return plugin_FormInputDesigner.generateOutput(a,b)},h2:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.h2()");a=plugin_FormInputDesigner.verifyOptions(a);var b="h2";plugin_FormInputDesigner.addClassToOptions(a,"app-h2");return plugin_FormInputDesigner.generateOutput(a,b)},h3:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.h3()");a=plugin_FormInputDesigner.verifyOptions(a);var b="h3";plugin_FormInputDesigner.addClassToOptions(a,"app-h3");return plugin_FormInputDesigner.generateOutput(a,b)},h4:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.h4()");a=plugin_FormInputDesigner.verifyOptions(a);var b="h4";plugin_FormInputDesigner.addClassToOptions(a,"app-h4");return plugin_FormInputDesigner.generateOutput(a,b)},h5:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.h4()");a=plugin_FormInputDesigner.verifyOptions(a);var b="h4";plugin_FormInputDesigner.addClassToOptions(a,"app-h4");return plugin_FormInputDesigner.generateOutput(a,b)},h6:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.h4()");a=plugin_FormInputDesigner.verifyOptions(a);var b="h4";plugin_FormInputDesigner.addClassToOptions(a,"app-h4");return plugin_FormInputDesigner.generateOutput(a,b)},img:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.img()");a=plugin_FormInputDesigner.verifyOptions(a);var b="img";plugin_FormInputDesigner.addClassToOptions(a,"app-p");return plugin_FormInputDesigner.generateOutput(a,b)},p:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.p()");a=plugin_FormInputDesigner.verifyOptions(a);var b="p";plugin_FormInputDesigner.addClassToOptions(a,"app-p");return $(plugin_FormInputDesigner.generateOutput(a,b))},a:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.a()");a=plugin_FormInputDesigner.verifyOptions(a);var b="a";plugin_FormInputDesigner.addClassToOptions(a,"app-a");return plugin_FormInputDesigner.generateOutput(a,b)},ol:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.ol()");a=plugin_FormInputDesigner.verifyOptions(a);var b="ol";plugin_FormInputDesigner.addClassToOptions(a,"app-ol");return $(plugin_FormInputDesigner.generateOutput(a,b))},ul:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.ul()");a=plugin_FormInputDesigner.verifyOptions(a);var b="ul";plugin_FormInputDesigner.addClassToOptions(a,"app-ul");return $(plugin_FormInputDesigner.generateOutput(a,b))},li:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.li()");a=plugin_FormInputDesigner.verifyOptions(a);var b="li";plugin_FormInputDesigner.addClassToOptions(a,"app-li");return $(plugin_FormInputDesigner.generateOutput(a,b))},div:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.div()");a=plugin_FormInputDesigner.verifyOptions(a);var b="div";plugin_FormInputDesigner.addClassToOptions(a,"app-div");return $(plugin_FormInputDesigner.generateOutput(a,b))},span:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.span()");a=plugin_FormInputDesigner.verifyOptions(a);var b="span";plugin_FormInputDesigner.addClassToOptions(a,"app-span");return plugin_FormInputDesigner.generateOutput(a,b)},canvas:function(a){app.debug.trace("plugin_FormInputDesigner.functions.element.canvas()");a=plugin_FormInputDesigner.verifyOptions(a);var b="canvas";plugin_FormInputDesigner.addClassToOptions(a,"app-canvas");return $(plugin_FormInputDesigner.generateOutput(a,b))}}}};var config_ImageProvider={
	"name": "ImageProvider",
	"shortname": "img",
	"imgdFiles": 
	{
		"../files/imgd/imgd.themis.json": true
	}
};var config_HtmlView={
	"name": "HtmlView",
	"shortname": "view",
	"multilanguageContext": "view"
};var plugin_Session={config:null,constructor:function(){var a=$.Deferred();console.log("TODO - create session registry");a.resolve();return a.promise()},sessions:{},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()",11);var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()",11)},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()",11)},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()",11)},getPrefix:function(a){if(a==undefined){a=plugin_Session.config.sessionHTML5StoragePrefix}return a},functions:{loggedIn:function(a){app.debug.trace("plugin_Session.functions.loggedIn("+a+")");var b=this.getValue(plugin_Session.config.loginHtml5StorageKey);if(a==undefined){app.debug.debug("plugin_Session.functions.loggedIn("+a+") - case: value == undefined");app.debug.debug("plugin_Session.functions.loggedIn() - return: "+b);if(b===null||b===false){return false}else{return true}}else{if(typeof a=="boolean"){app.debug.debug("plugin_Session.functions.loggedIn("+a+") - case: typeof value == boolean");app.debug.debug("plugin_Session.functions.loggedIn() - set loged in to: "+a);this.setValue(plugin_Session.config.loginHtml5StorageKey,a);if(a==false){app.debug.trace("plugin_Session.functions.loggedIn() - case: value == false")}app.debug.trace("plugin_Session.functions.loggedIn() - return: "+a);return a}else{app.debug.trace("plugin_Session.functions.loggedIn() - return: null");return null}}},setValue:function(a,c,b){b=plugin_Session.getPrefix(b);app.debug.trace("plugin_Session.functions.setValue("+a+", "+c+")");app.store.localStorage.set(b+a,c);plugin_Session.sessions[b]=true},getValue:function(a,b){b=plugin_Session.getPrefix(b);app.debug.trace("plugin_Session.functions.getValue("+a+")");return app.store.localStorage.get(b+a)},destroy:function(a){a=plugin_Session.getPrefix(a);app.debug.trace("plugin_Session.functions.destroy()");$.each(window.localStorage,function(c,d){if(c.substring(0,app.config.name.length)==app.config.name){var b,f,e;b=c.substring(app.config.name.length+1);f=b.substring(0,a.length).toLowerCase();e=a.toLowerCase();if(f==e){window.localStorage.removeItem(c)}}});plugin_Session.sessions[a]=false},destroyAll:function(){$.each(plugin_Session.sessions,function(b,a){plugin_Session.functions.destroy(b)});console.log("TODO - implement")},setObject:function(b,a,c){c=plugin_Session.getPrefix(c);b=c+b;b=b.split(".").join("-");app.store.localStorage.setObject(c+b,a)},getObject:function(a,b){b=plugin_Session.getPrefix(b);a=b+a;a=a.split(".").join("-");return app.store.localStorage.getObject(b+a)}}};var plugin_WebServiceClient={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace(""+this.config.name+".pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("Plugin: "+this.config.name+".pageSpecificEvents()")},getPreferedServer:function(a){app.debug.trace("plugin_WebServiceClient.getPreferedServer()");plugin_WebServiceClient.setPreferedServer(a);return plugin_WebServiceClient.config.preferedServer[a]},setPreferedServer:function(a){app.debug.trace("plugin_WebServiceClient.setPreferedServer() ... mehrere server implementieren");$.each(plugin_WebServiceClient.config.server,function(c,b){if(b.active===true){if(plugin_WebServiceClient.config.preferedServer==undefined){app.info.set("plugin_WebServiceClient.config.preferedServer",{})}app.info.set("plugin_WebServiceClient.config.preferedServer."+c,{});app.info.set("plugin_WebServiceClient.config.preferedServer."+c+".scheme",b.first.scheme);app.info.set("plugin_WebServiceClient.config.preferedServer."+c+".scheme_specific_part",b.first.scheme_specific_part);app.info.set("plugin_WebServiceClient.config.preferedServer."+c+".host",b.first.host);app.info.set("plugin_WebServiceClient.config.preferedServer."+c+".port",b.first.port);app.info.set("plugin_WebServiceClient.config.preferedServer."+c+".path",b.first.path)}})},getAjax:function(g,u,f,e,d,k,j,p){app.debug.trace("plugin_WebServiceClient.getAjax("+g+", "+u+", "+e+", "+d+", "+k+", "+j+")");app.debug.debug("plugin_WebServiceClient.getAjax() - webservice: "+g+"?"+u);var r=null,s=null,c=null,q,a,n,w,o,l,b,t,m;if(j){app.debug.debug("plugin_WebServiceClient.getAjax() - case: webservice is async - create deferred object");s=$.Deferred();r=s.promise()}if(u.indexOf("§")!=-1){app.debug.debug("plugin_WebServiceClient.getAjax() - case: webservice needs special headers");a=u.split("§");c=a[1];u=a[0]}q="application/x-www-form-urlencoded";if(p!=undefined){app.debug.debug("plugin_WebServiceClient.getAjax() - case: dataType != undefined");if(p.toLowerCase()=="query"){app.debug.debug("plugin_WebServiceClient.getAjax() - case: contentType = text/plain");$.each(f,function(x,y){if(typeof y=="object"){app.debug.debug("plugin_WebServiceClient.getAjax() - case: value == object");if(y instanceof Array){app.debug.debug("plugin_WebServiceClient.getAjax() - case: value == array");t="";for(v in y){t+="&"+x+"="+encodeURIComponent(y[v]);app.debug.debug("plugin_WebServiceClient.getAjax() - array value: "+t)}t=t.substring(t.indexOf("=")+1);u=u.replace("{"+x+"}",t);app.debug.debug("pugin.RestClient.js ~ plugin_WebServiceClient.getAjax() - set in data: "+x+" = "+t)}else{app.debug.debug("plugin_WebServiceClient.getAjax() - case: value == undefined object");y=JSON.stringify(y);u=u.replace("{"+x+"}",encodeURIComponent(y));app.debug.debug("pugin.RestClient.js ~ plugin_WebServiceClient.getAjax() - set in data: "+x+" = "+encodeURIComponent(y))}}else{app.debug.debug("plugin_WebServiceClient.getAjax() - case: value != array");u=u.replace("{"+x+"}",encodeURIComponent(y));app.debug.debug("pugin.RestClient.js ~ plugin_WebServiceClient.getAjax() - set in data: "+x+" = "+encodeURIComponent(y))}});g+="?"+u;u="";q="text/plain"}else{if(p.toLowerCase()=="json"){app.debug.debug("plugin_WebServiceClient.getAjax() - case: contentType = application/json; charset=utf-8");app.debug.debug("plugin_WebServiceClient.getAjax() - create json object");n={};w=u.split("&");for(i in w){b=w[i].indexOf("=");o=w[i].substring(0,b);l=w[i].substring(b+1);if(l.indexOf("{")!=-1){app.debug.debug("plugin_WebServiceClient.getAjax() - parameter: "+o+" = "+f[o]);n[o]=f[o]}else{app.debug.debug("plugin_WebServiceClient.getAjax() - parameter: "+o+" = "+l);n[o]=l}}u=JSON.stringify(n);q="application/json; charset=utf-8"}else{if(p.toLowerCase()=="form"){app.debug.debug("plugin_WebServiceClient.getAjax() case: contentType = application/x-www-form-urlencoded");$.each(f,function(x,y){if(typeof y=="object"){y=JSON.stringify(y);u=u.replace("{"+x+"}",encodeURIComponent(y))}else{u=u.replace("{"+x+"}",encodeURIComponent(y))}app.debug.debug("pugin.RestClient.js ~ plugin_WebServiceClient.getAjax() - set in data: "+x+" = "+encodeURIComponent(y))});q="application/x-www-form-urlencoded; charset=UTF-8"}else{alert("unknown type: "+p)}}}}try{app.debug.debug("plugin_WebServiceClient.getAjax() - ajax request");app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: url = "+g);app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: data = "+u);app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: dataType = "+p);app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: contentType = "+q);app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: async = "+j);app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: method = "+d);app.debug.debug("plugin_WebServiceClient.getAjax() - ajax parameter: timeout = "+k);$.ajax({url:g,data:u,dataType:e,contentType:q,async:j,method:d,timeout:k,beforeSend:function(z,y){app.debug.debug("plugin_WebServiceClient.getAjax() beforeSend: set http headers");if(plugin_WebServiceClient.config.useHeaderToken){app.debug.debug("plugin_WebServiceClient.getAjax() case: plugin_WebServiceClient.config.useHeaderToken =≠ true");app.debug.debug("plugin_WebServiceClient.getAjax() paramerter: "+plugin_WebServiceClient.config.headerToken.key+" = "+app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value));z.setRequestHeader(plugin_WebServiceClient.config.headerToken.key,app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value))}if(c!=null){app.debug.debug("plugin_WebServiceClient.getAjax() - case: headers != null");app.debug.debug("plugin_WebServiceClient.getAjax() - set additional headers");var A=c.split("&"),x;for(i in A){x=A[i].split("=");o=x[0];l=x[1];if(l.indexOf("{")!=-1){l=f[o]}app.debug.debug("plugin_WebServiceClient.getAjax() - setRequestHeader("+o+", "+l+")");z.setRequestHeader(x[0],x[1])}}},success:function(y,z,x){app.debug.debug("plugin.WebServiceClient.js plugin_WebServiceClient.getAjax() - Webservice done: "+JSON.stringify(y));r=y;app.debug.debug("plugin_WebServiceClient.getAjax() - start exception handling");if(plugins.config.WebServiceError===true){app.debug.debug("plugin_WebServiceClient.getAjax() - case: wse plugin is active");if((m=app.wse.getExceptionConfig(y))===false){if(s!=undefined&&s!=null){app.debug.debug("plugin_WebServiceClient.getAjax() - case: no exception: "+JSON.stringify(r));s.resolve(r)}}else{if(s!=undefined&&s!=null){app.debug.debug("plugin_WebServiceClient.getAjax() - case: exception found: "+JSON.stringify(m));s.reject(m)}}}else{if(s!=undefined&&s!=null){console.warn("Webservice Success!: Please use the plugin.WebServiceError (wse) to compute your errors and exceptions");s.resolve(r)}}},error:function(x,z,y){app.debug.debug("plugin_WebServiceClient.getAjax() - error: "+y);app.debug.debug("plugin_WebServiceClient.getAjax() - error: "+JSON.stringify(x));app.debug.debug("plugin_WebServiceClient.getAjax() - error: "+z);r=null;if(s!=undefined&&s!=null){app.debug.debug("plugin_WebServiceClient.getAjax() - case: reject deferred object");if(plugins.config.WebServiceError===true){app.debug.debug("plugin_WebServiceClient.getAjax() - case: wse plugin is active");s.reject(app.wse.getExceptionConfig(x))}else{console.warn("Webservice Error!: Please use the plugin.WebServiceError (wse) to compute your errors and exceptions");s.reject({call:{url:g,data:u,type:e,async:j,mehtod:d,timeout:k},jqXHR:JSON.parse(JSON.stringify(x))})}}}})}catch(h){app.debug.debug("plugin_WebServiceClient.getAjax() - catch block: "+JSON.stringify(h));r=null}app.debug.debug("plugin_WebServiceClient.getAjax() - Webservice returns: "+JSON.stringify(r));return r},functions:{getXml:function(b,d,e,c){app.debug.trace("plugin_WebServiceClient.functions.getXml()");var a=plugin_WebServiceClient.getAjax(b,d,"xml");return a},getJson:function(m,f,k,a,g,e,h,d){app.debug.trace("plugin_WebServiceClient.functions.getJson()");var b=null,j=null,l,c;if(h===true){app.debug.debug("plugin_WebServiceClient.functions.getJson() - case: local == true");b=m}else{app.debug.debug("plugin_WebServiceClient.functions.getJson() - case: local == false");c=plugin_WebServiceClient.getPreferedServer(d);b=c.scheme+c.scheme_specific_part+c.host+":"+c.port+c.path+m;j=plugin_WebServiceClient.config.server[d].mappings[a.toLowerCase()]}l=plugin_WebServiceClient.getAjax(b,f,k,"json",a,g,e,j);return l},askForPreferedServer:function(){app.debug.trace("plugin_WebServiceClient.functions.askForPreferedServer()");var a=null;plugin_WebServiceClient.config.preferedServer=a;return success},getDefaultServerName:function(){app.debug.trace("plugin_WebServiceClient.functions.getDefaultServerName()");return plugin_WebServiceClient.config.defaultServer},getServer:function(a,b){app.debug.trace("plugin_WebServiceClient.functions.getServer()");var c=plugin_WebServiceClient.getPreferedServer(a);if(b==undefined){b=false}if(b===true){app.debug.debug("plugin_WebServiceClient.functions.getServer() - case: return server as object: "+JSON.stringify(c));return c}else{if(b==false){c=c.scheme+c.scheme_specific_part+c.host+":"+c.port+c.path;app.debug.debug("plugin_WebServiceClient.functions.getServer() - case: return server as string");return c}else{console.error("Error")}}},setServer:function(e,d,f){app.debug.trace("plugin_WebServiceClient.functions.setServer()");d=URI(d);var c,b,a,g;c=d.scheme();b=d.hostname();a=d.port();g=d.path();if(c===""){app.debug.debug("plugin_WebServiceClient.functions.setServer() - case: scheme is not set");c="http"}if(b===""){}if(a===""){app.debug.debug("plugin_WebServiceClient.functions.setServer() - case: port is not set");if(c==="http"){app.debug.debug("plugin_WebServiceClient.functions.setServer() - case: scheme == http - use port: 80");a=80}else{if(c==="https"){app.debug.debug("plugin_WebServiceClient.functions.setServer() - case: scheme == https - use port: 443");a=443}}}if(g===""){app.debug.debug("plugin_WebServiceClient.functions.setServer() - case: path is not set");g=plugin_WebServiceClient.config.server[e].template.path}app.info.set("plugin_WebServiceClient.config.server."+e+".first.scheme",c);app.info.set("plugin_WebServiceClient.config.server."+e+".first.scheme_specific_part","://");app.info.set("plugin_WebServiceClient.config.server."+e+".first.host",b);app.info.set("plugin_WebServiceClient.config.server."+e+".first.port",a);app.info.set("plugin_WebServiceClient.config.server."+e+".first.path",g);return this.ping(e,f)},keepAliveRequest:function(){app.debug.trace("plugin_WebServiceClient.functions.keepAliveRequest()");console.error("Deprecated function!")},ping:function(e,b){app.debug.trace("plugin_WebServiceClient.functions.ping()");var d,c,a;d=plugin_WebServiceClient.config.server[e].pingPath;c=plugin_WebServiceClient.getPreferedServer(e);a=c.scheme+c.scheme_specific_part+c.host+":"+c.port+c.path+d;if(b){return globalLoader.AsyncJsonLoader(a)}else{return globalLoader.JsonLoader(a)}}}};var config_DeviceManager={
	"name": "DeviceManager",
	"shortname": "dm",
	"files": 
	{
		"android": "../files/device/android",
		"ios": "../files/device/ios",
		"windows": "../files/device/windows"
	},

	"viewport": 
	{
		"ios": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\" />",
		"android": "<meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi\" />",
		"windows": "<meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi\" />"
	}
};var config_Detector={
	"name":"Detector",
	"shortname":"detect",
	"addCssClassesToBodyTag":true
};var plugin_HtmlTemplates={config:null,templates:{},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_HtmlTemplates.pluginsLoaded()");var a=$.Deferred(),b=Array(),c;$.each(plugin_HtmlTemplates.config.templates,function(d,e){if(e.url!=undefined){b.push(globalLoader.AsyncTextLoader(e.url));b.push(globalLoader.AsyncTextLoader(e.url.substr(0,e.url.lastIndexOf("."))+".css"))}else{$.each(plugin_HtmlTemplates.config.templates[d],function(f,g){if(g.url!=undefined){b.push(globalLoader.AsyncTextLoader(g.url));b.push(globalLoader.AsyncTextLoader(g.url.substr(0,g.url.lastIndexOf("."))+".css"))}})}});c=$.when.apply($,b);c.done(function(){var d=arguments,f,e=0;$.each(plugin_HtmlTemplates.config.templates,function(g,h){if(h.url!=undefined){plugin_HtmlTemplates.templates[g]={};plugin_HtmlTemplates.templates[g]["html"]=(d[e]);e=e+1;plugin_HtmlTemplates.templates[g]["css"]=(d[e]);e=e+1}else{f=g;plugin_HtmlTemplates.templates[f]={};$.each(plugin_HtmlTemplates.config.templates[g],function(i,j){if(j.url!=undefined){plugin_HtmlTemplates.templates[f][i]={};plugin_HtmlTemplates.templates[f][i]["html"]=(d[e]);e=e+1;plugin_HtmlTemplates.templates[f][i]["css"]=(d[e]);e=e+1}})}});a.resolve()});c.fail(function(){a.reject()});return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_HtmlTemplates.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_HtmlTemplates.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_HtmlTemplates.pageSpecificEvents()")},getText:function(c,b){app.debug.trace("plugin_HtmlTemplates.getText()");var e=null,a=null,d;if(b!=undefined){e=plugin_HtmlTemplates.templates[b][c]["html"];a=plugin_HtmlTemplates.templates[b][c]["css"];d=plugin_HtmlTemplates.templates[b][c]["styleIsActive"];if(d==undefined){d=plugin_HtmlTemplates.templates[b][c]["styleIsActive"]=false}}else{e=plugin_HtmlTemplates.templates[c]["html"];a=plugin_HtmlTemplates.templates[c]["css"];d=plugin_HtmlTemplates.templates[c]["styleIsActive"];if(d==undefined){d=plugin_HtmlTemplates.templates[c]["styleIsActive"]=false}}if($("style")[0]==undefined){$("head").append("<style></style>")}if(d===false){$("style").append(a);if(b!=undefined){plugin_HtmlTemplates.templates[b][c]["styleIsActive"]=true}else{plugin_HtmlTemplates.templates[c]["styleIsActive"]=true}}app.debug.debug("plugin_HtmlTemplates.getText() - text: "+e);return e},getElements:function(b,a){app.debug.trace("plugin_HtmlTemplates.getElements()");var c;if(a!=undefined){c=plugin_HtmlTemplates.config.templates[a][b]["elements"]}else{c=plugin_HtmlTemplates.config.templates[b]["elements"]}if(c==undefined){c={}}app.debug.debug("plugin_HtmlTemplates.getElements() - elements: "+JSON.stringify(c));return c},functions:{get:function(b,a){app.debug.trace("plugin_HtmlTemplates.functions.get()");app.debug.debug("plugin_HtmlTemplates.functions.get() - templateId: "+b);app.debug.debug("plugin_HtmlTemplates.functions.get() - context: "+a);return $(plugin_HtmlTemplates.getText(b,a))},append:function(a,c,b){app.debug.trace("plugin_HtmlTemplates.functions.append()");$(a).append(plugin_HtmlTemplates.functions.get(c,b))},prepend:function(a,c,b){app.debug.trace("plugin_HtmlTemplates.functions.prepend()");$(a).prepend(plugin_HtmlTemplates.functions.get(c,b))},overwrite:function(a,c,b){app.debug.trace("plugin_HtmlTemplates.functions.overwrite()");app.debug.debug("plugin_HtmlTemplates.functions.overwrite() - selector: "+a);app.debug.debug("plugin_HtmlTemplates.functions.overwrite() - templateId: "+c);app.debug.debug("plugin_HtmlTemplates.functions.overwrite() - context: "+b);$(a).empty();$(a).attr("data-context",c);$(a).prepend(plugin_HtmlTemplates.functions.get(c,b));app.debug.debug("plugin_HtmlTemplates.functions.overwrite() - new html code: "+$(a)[0].outerHTML)},elements:function(b,a){app.debug.trace("plugin_HtmlTemplates.functions.elements()");return plugin_HtmlTemplates.getElements(b,a)}}};var plugin_HelperFunctions={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_HelperFunctions.pluginsLoaded()");var a=$.Deferred();a.resolve();return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_HelperFunctions.pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_HelperFunctions.definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_HelperFunctions.afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(){app.debug.trace("plugin_HelperFunctions.pageSpecificEvents()")},functions:{validate:{regex:function(b,a){app.debug.trace("plugin_HelperFunctions.functions.validate.regex()");var c;c=false;a=new RegExp(a,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.regex() - regex: "+a);if(b==undefined){c=false}else{if(a.test(b)){c=true}}return c},firstname:function(b){app.debug.trace("plugin_HelperFunctions.functions.validate.firstname()");var c,a;c=false;a=new RegExp(plugin_HelperFunctions.config.validate.firstname,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.firstname() - regex: "+a);if(b==undefined){c=false}else{if(a.test(b)){c=true}}return c},lastname:function(b){app.debug.trace("plugin_HelperFunctions.functions.validate.lastname()");var c,a;c=false;a=new RegExp(plugin_HelperFunctions.config.validate.lastname,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.lastname() - regex: "+a);if(b==undefined){c=false}else{if(a.test(b)){c=true}}return c},username:function(c){app.debug.trace("plugin_HelperFunctions.functions.validate.username()");var b,a;b=false;a=new RegExp(plugin_HelperFunctions.config.validate.username,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.username() - regex: "+a);if(c==undefined){b=false}else{if(a.test(c)){b=true}}return b},email:function(a){app.debug.trace("plugin_HelperFunctions.functions.validate.email()");var c,b;c=false;b=new RegExp(plugin_HelperFunctions.config.validate.email,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.email() - regex: "+b);if(a==undefined){c=false}else{if(b.test(a)){c=true}}return c},website:function(a){app.debug.trace("plugin_HelperFunctions.functions.validate.website()");var c,b;c=false;b=new RegExp(plugin_HelperFunctions.config.validate.website,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.website() - regex: "+b);if(a==undefined){c=false}else{if(b.test(a)){c=true}}return c},password:function(a){app.debug.trace("plugin_HelperFunctions.functions.validate.password()");var c,b;c=false;b=new RegExp(plugin_HelperFunctions.config.validate.password,"g");app.debug.debug("plugin_HelperFunctions.functions.validate.password() - regex: "+b);if(a==undefined){c=false}else{if(b.test(a)){c=true}}return c},equal:function(b,a){app.debug.trace("plugin_HelperFunctions.functions.validate.equal()");var c=false;if(b==a){c=true}return c}},random:{integer:function(a){app.debug.trace("plugin_HelperFunctions.functions.random.integer()");return Math.floor((Math.random()*a)+1)}},jQM:{enhance:function(a){app.debug.trace("plugin_HelperFunctions.functions.jQM.enhance()");a.find("[data-role=listview]").listview().listview("refresh");a.find("[data-role=collapsible]").collapsible();a.find("[data-role=controlgroup]").controlgroup();a.find("[data-role=slider]").flipswitch().flipswitch("refresh");a.find("[type=button], [type=submit]").button();a.find("[data-role=navbar]").navbar();a.find("[type=text], textarea, [type=search], [type=password], [type=number], [type=file]").textinput();a.find("[data-type=range]").slider().slider("refresh");a.find("[type=radio], [type=checkbox]").checkboxradio();a.find("select").selectmenu()}},navigation:{redirect:function(a,b){console.log("Deprecated Function! Use: app.nav...");setTimeout(function(){if(b!=undefined){$.mobile.changePage(a,{transition:b})}else{$(location).attr("href",a)}},50)},back:function(){console.warn("Deprecated Function! Use: app.nav...");window.history.back()},forward:function(){console.warn("Deprecated Function! Use: app.nav...");window.history.forward()},reload:function(){console.warn("Deprecated Function! Use: app.nav...");location.reload()},redirectAndReload:function(a){console.warn("Deprecated Function! Use: app.nav...");$.mobile.ajaxEnabled=false;window.location.replace(a)}},object:{setDeep:function(c,b,d){app.debug.trace("plugin_HelperFunctions.functions.object.setDeep()");b=b.split(".");var a=0,e=b.length;for(;a<e-1;++a){c=c[b[a]]}c[b[a]]=d},setDeepBase64Key:function(c,b,d){app.debug.trace("plugin_HelperFunctions.functions.object.setDeepBase64Key()");b=b.split(".");var a=0,e=b.length;for(;a<e-1;++a){c=c[atob(b[a])]}app.debug.debug("plugin_HelperFunctions.js ~ plugin_HelperFunctions.functions.object.setDeepBase64Key - "+c[atob(b[a])]+" = "+d,20);c[atob(b[a])]=d},getDeep:function(c,b){app.debug.trace("plugin_HelperFunctions.functions.object.getDeep()");b=b.split(".");var a=0,d=b.length;for(;a<d;++a){c=c[b[a]]}return c}},form:{serialize:function(b){app.debug.trace("plugin_HelperFunctions.functions.form.serialize()");var a={};b.find("input").each(function(c,d){if($(d).attr("type")=="checkbox"){a[$(d).attr("name")]=$(d).is(":checked")}else{if($(d).attr("type")=="radio"){if($(d).is(":checked")){a[$(d).attr("name")]=$(d).val()}}else{a[$(d).attr("name")]=$(d).val()}}});b.find("select").each(function(c,d){var e=Array();$(d).find("option:selected").each(function(f,g){e.push($(g).text())});a[$(d).attr("name")]=e});return a}}}};var plugin_DeviceManager={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_DeviceManager.pluginsLoaded("+app.debug.arguments(arguments)+")");var e,c,b=[],a,d;if(app.detect.isMobile()){if(app.detect.mobile.google.Android()){$("head").append(this.config.viewport.android);e=this.config.files.android+".js";c=this.config.files.android+".css"}else{if(app.detect.mobile.apple.iOS()){$("head").append(this.config.viewport.ios);e=this.config.files.ios+".js";c=this.config.files.ios+".css"}else{if(app.detect.mobile.microsoft.Windows()){$("head").append(this.config.viewport.windows);e=this.config.files.windows+".js";c=this.config.files.windows+".css"}else{console.error("Unknown device!")}}}d=globalLoader.AsyncScriptLoader(e);d.done(function(){if(app[plugin_DeviceManager.config.shortname].current==undefined){console.loc("app."+plugin_DeviceManager.config.shortname+".current is undefined")}else{if(app[plugin_DeviceManager.config.shortname].current.constructor==undefined){console.loc("app."+plugin_DeviceManager.config.shortname+".current.constructor is undefined")}if(app[plugin_DeviceManager.config.shortname].current.afterHtmlInjectedBeforePageComputing==undefined){console.loc("app."+plugin_DeviceManager.config.shortname+".current.afterHtmlInjectedBeforePageComputing is undefined")}}app[plugin_DeviceManager.config.shortname]["current"].constructor()});b.push(d);b.push(globalLoader.AsyncStyleLoader(c));return $.when.apply($,b)}else{a=$.Deferred();a.resolve();return a.promise()}},pagesLoaded:function(){app.debug.trace("plugin_DeviceManager.pagesLoaded("+app.debug.arguments(arguments)+")");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_DeviceManager.definePluginEvents("+app.debug.arguments(arguments)+")")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_DeviceManager.afterHtmlInjectedBeforePageComputing("+app.debug.arguments(arguments)+")");if(app.dm.hasOwnProperty("current")){app.dm.current.afterHtmlInjectedBeforePageComputing()}},pageSpecificEvents:function(a){app.debug.trace("plugin_DeviceManager.pageSpecificEvents()")},functions:{}};var config_Session={
	"name":"Session",
	"shortname":"sess",
	"loginHtml5StorageKey":"loggedin",
	"sessionHTML5StoragePrefix":"sessionPluginValue-"
};var config_OAuth={
	"name":"OAuth",
	"shortname":"oa",
	"facebook":{
		"error_name":"error_code",
		"token_name":"code"
	},
	"dropbox":{
		"error_name":"error",
		"token_name":"oauth_token"
	}
};var config_GlobalPage={
	"name":"GlobalPage",
	"shortname":"gp",
	"pathToImplementation":"../files/globalPage.js"
}
;var plugin_ImageProvider={config:null,images:{},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},loadDefinitionFile:function(b){var a=$.Deferred(),c;c=globalLoader.AsyncJsonLoader(b);c.done(function(d){$.each(d,function(f,e){plugin_ImageProvider.images[f]=e});a.resolve()});c.fail(function(){a.reject()});return a.promise()},pluginsLoaded:function(){app.debug.trace(this.config.name+".pluginsLoaded()");var a=$.Deferred(),b=Array(),c;$.each(plugin_ImageProvider.config.imgdFiles,function(e,d){if(d){b.push(plugin_ImageProvider.loadDefinitionFile(e))}});c=$.when.apply($,b);c.done(function(){a.resolve()});c.done(function(){a.reject()});return a.promise()},pagesLoaded:function(){app.debug.trace("plugin_"+this.config.name+".pagesLoaded()");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_"+this.config.name+".definePluginEvents()")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()")},pageSpecificEvents:function(a){app.debug.trace("plugin_"+this.config.name+".pageSpecificEvents()")},functions:{getUrlById:function(d,a){var b,c;if((b=plugin_ImageProvider.images[d])==undefined){console.warn("ImageProvider - Undefined image: "+d);c='{"'+d+'":"PATH"}';app.debug.feedback.image(JSON.parse(c));b=d}return b},getUrlByIdForSkin:function(d,c){var b=null,a;if(c==undefined){b=plugin_ImageProvider.images[d]}else{if(plugin_ImageProvider.images[c]==undefined){console.warn("Image - context doesn't exist: "+c);a='{"'+c+'" : {}}';app.debug.feedback.image(JSON.parse(a));b=d}else{b=plugin_ImageProvider.images[c][d]}}if(b!=undefined){return b.substring(0,b.lastIndexOf("/"))+"/"+plugin_Skin.config.defaultSkin+b.substring(b.lastIndexOf("/"),b.length)}else{console.warn("Image - "+c+"."+d+" == undefined");a='{"'+c+'" : {"'+d+'" : "URL"}}';app.debug.feedback.image(JSON.parse(a));return d}}}};var plugin_Actions={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},pluginsLoaded:function(){app.debug.trace("plugin_Actions.pluginsLoaded("+app.debug.arguments(arguments)+")");return globalLoader.AsyncScriptLoader("../files/actions.js")},pagesLoaded:function(){app.debug.trace("plugin_Actions.pagesLoaded("+app.debug.arguments(arguments)+")");var a=$.Deferred();a.resolve();return a.promise()},definePluginEvents:function(){app.debug.trace("plugin_Actions.definePluginEvents("+app.debug.arguments(arguments)+")")},afterHtmlInjectedBeforePageComputing:function(a){app.debug.trace("plugin_Actions.afterHtmlInjectedBeforePageComputing("+app.debug.arguments(arguments)+")")},pageSpecificEvents:function(a){app.debug.trace("plugin_Actions.pageSpecificEvents("+app.debug.arguments(arguments)+")")},functions:{}};