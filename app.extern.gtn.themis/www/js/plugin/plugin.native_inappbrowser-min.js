var plugin_native_inappbrowser={config:null,constructor:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},pluginsLoaded:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},pagesLoaded:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},definePluginEvents:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("plugin_"+this.config.name+".afterHtmlInjectedBeforePageComputing()",11);var c=null;try{c=true}catch(b){app.debug.log(JSON.stringify(b,null,4));c=false}return c},pageSpecificEvents:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},functions:{}};
