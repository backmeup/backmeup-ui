plugin_WebServiceClient={config:null,interval:null,constructor:function(){},pluginsLoaded:function(){var b=null;try{if(plugin_WebServiceClient.config.useKeepAlive){plugin_WebServiceClient.keepAliveRequest();plugin_WebServiceClient.interval=window.setInterval("plugin_WebServiceClient.keepAliveRequest()",plugin_WebServiceClient.config.keepAlive.keepAliveIntervalInS*1000)}b=true}catch(a){b=false}return b},pagesLoaded:function(){var b=null;try{b=true}catch(a){b=false}return b},definePluginEvents:function(){var b=null;try{b=true}catch(a){b=false}return b},afterHtmlInjectedBeforePageComputing:function(a){var c=null;try{app.debug.alert("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5);c=true}catch(b){c=false}return c},pageSpecificEvents:function(a){var c=null;try{c=true}catch(b){c=false}return c},getPreferedServer:function(){if(!plugin_WebServiceClient.config.preferedServer.scheme||!plugin_WebServiceClient.config.preferedServer.scheme_specific_part||!plugin_WebServiceClient.config.preferedServer.host||!plugin_WebServiceClient.config.preferedServer.port){plugin_WebServiceClient.setPreferedServer()}return plugin_WebServiceClient.config.preferedServer},setPreferedServer:function(){app.debug.alert("plugin_WebServiceClient.setPreferedServer() ... mehrere server implementieren",14);app.info.set("plugin_WebServiceClient.config.preferedServer.scheme",plugin_WebServiceClient.config.server.first.scheme);app.info.set("plugin_WebServiceClient.config.preferedServer.scheme_specific_part",plugin_WebServiceClient.config.server.first.scheme_specific_part);app.info.set("plugin_WebServiceClient.config.preferedServer.host",plugin_WebServiceClient.config.server.first.host);app.info.set("plugin_WebServiceClient.config.preferedServer.port",plugin_WebServiceClient.config.server.first.port)},getAjax:function(a,f,c,g,e){app.debug.alert("plugin_WebServiceClient.getAjax("+a+", "+f+", "+c+", "+g+", "+e+")",14);var b=null;try{$.ajax({url:a,data:f,dataType:c,async:false,method:g,timeout:e,success:function(i,j,h){b=i},error:function(h,j,i){b=false}})}catch(d){app.debug.log(JSON.stringify(d,null,4));b=false}return b},keepAliveStartTime:0,keepAliveSuccess:function(c,d,b){var a=performance.now()-plugin_WebServiceClient.keepAliveStartTime;if(a>=plugin_WebServiceClient.config.keepAlive.maximumResponseTime){app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive",false);app.info.set("plugin_WebServiceClient.config.keepAlive.error.code",2);app.info.set("plugin_WebServiceClient.config.keepAlive.error.text","Timeout error")}else{app.info.set("plugin_WebServiceClient.config.keepAlive.lastDuration",a);app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive",true);app.info.set("plugin_WebServiceClient.config.keepAlive.error.code",0);app.info.set("plugin_WebServiceClient.config.keepAlive.error.text","No error")}if(!plugin_WebServiceClient.config.keepAlive.isAlive){app.debug.alert("KeepAlive request failed.\nReason: "+plugin_WebServiceClient.config.keepAlive.error.text+"\nTime: "+a,60)}},keepAliveError:function(b,d,c){var a=performance.now()-plugin_WebServiceClient.keepAliveStartTime;app.info.set("plugin_WebServiceClient.config.keepAlive.lastDuration",a);app.info.set("plugin_WebServiceClient.config.keepAlive.isAlive",false);app.info.set("plugin_WebServiceClient.config.keepAlive.error.code",1);app.info.set("plugin_WebServiceClient.config.keepAlive.error.text","Webservice Error");if(!plugin_WebServiceClient.config.keepAlive.isAlive){app.debug.alert("KeepAlive request failed.\nReason: "+plugin_WebServiceClient.config.keepAlive.error.text+"\nTime: "+a+"\n\n"+JSON.stringify(c,null,4),60)}},keepAliveAjax:function(a,e,b,f,d){app.debug.alert("plugin_WebServiceClient.keepAliveAjax("+a+", "+e+", "+b+", "+f+", "+d+")",14);try{$.ajax({url:a,data:e,dataType:b,async:true,method:f,timeout:d,success:plugin_WebServiceClient.keepAliveSuccess,error:plugin_WebServiceClient.keepAliveError})}catch(c){app.debug.log(JSON.stringify(c,null,4))}},keepAliveRequest:function(){var f=plugin_WebServiceClient.config.keepAlive.keepAlivePath;var d="";var g=plugin_WebServiceClient.config.keepAlive.method;var c=plugin_WebServiceClient.config.keepAlive.timeout;var e=plugin_WebServiceClient.getPreferedServer();var a=e.scheme+e.scheme_specific_part+e.host+":"+e.port+f;var b=0;switch(plugin_WebServiceClient.config.keepAlive.type){case"json":plugin_WebServiceClient.keepAliveStartTime=performance.now();plugin_WebServiceClient.keepAliveAjax(a,d,"json",g,c);break;case"xml":alert("still not implemented");break;case"text":alert("still not implemented");break;case"html":alert("still not implemented");break;default:alert("keepAliveRequest: no such type: "+plugin_WebServiceClient.config.keepAlive.type)}},functions:{getXml:function(b,d,e,c){app.debug.alert("plugin_WebServiceClient.functions.getXml("+b+", "+d+", "+e+", "+type+")",20);var a=plugin_WebServiceClient.getAjax(b,d,"xml");return a},getJson:function(f,d,g,c){app.debug.alert("plugin_WebServiceClient.functions.getJson("+f+", "+d+", "+g+", "+c+")",20);var e=plugin_WebServiceClient.getPreferedServer();var a=e.scheme+e.scheme_specific_part+e.host+":"+e.port+f;var b=plugin_WebServiceClient.getAjax(a,d,"json",g,c);return b},askForPreferedServer:function(){var b=null;var a=null;plugin_WebServiceClient.config.preferedServer=b;return a},keepAliveRequest:function(){}}};
