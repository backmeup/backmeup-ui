plugin_RestClient={config:null,constructor:function(){},pluginsLoaded:function(){var b=null;try{$.each(plugin_RestClient.config.wsdFiles,function(e,d){if(d){var c=JsonLoader(e);$.each(c,function(g,f){plugin_RestClient.config.webservices[g]=f})}});b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},pagesLoaded:function(){},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5)},pageSpecificEvents:function(a){},functions:{getJson:function(a,f){app.debug.alert("plugin_RestClient.functions.getJson("+a+", "+JSON.stringify(f)+")",20);var e=plugin_RestClient.config.webservices[a].url;if(f!=undefined){$.each(f,function(g,h){e=e.replace("{"+g+"}",h)})}var d=e.split("?")[1];if(d==undefined){d=""}var b=e.split("?")[0];var c=app.wsc.getJson(b,d,plugin_RestClient.config.webservices[a].method,plugin_RestClient.config.webservices[a].timeout);if(plugin_MultilanguageIso639_3!=undefined){if(c.language!=undefined){$.each(c.language,function(g,h){app.lang.addParameter(g,h)})}}return c}}};
