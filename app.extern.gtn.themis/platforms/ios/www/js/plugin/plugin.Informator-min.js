plugin_Informator={config:null,constructor:function(){},pluginsLoaded:function(){var c=null;try{if(this.config.useHtml5Storage&&this.config.savePluginConfig){var b={};$.each(plugins.pluginNames,function(d,e){if(b["plugin_"+e]==undefined){b["plugin_"+e]={}}b["plugin_"+e]["config"]=window["plugin_"+e]["config"]});this.loadConfigurationIntoHtml5Storage(b)}c=true}catch(a){c=false}return c},pagesLoaded:function(){var c=null;try{if(this.config.useHtml5Storage&&this.config.savePageConfig){var b={};$.each(pages.pageNames,function(d,e){if(b["page_"+e]==undefined){b["page_"+e]={}}b["page_"+e]["config"]=JsonLoader("../js/page/page."+e+".json")});this.loadConfigurationIntoHtml5Storage(b)}c=true}catch(a){c=false;app.debug.log(JSON.stringify(a,null,4))}return c},definePluginEvents:function(){var b=null;try{b=true}catch(a){b=false}return b},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5);var c=null;try{c=true}catch(b){c=false}return c},pageSpecificEvents:function(a){var c=null;try{c=true}catch(b){c=false}return c},setDeep:function(c,b,d){b=b.split(".");var a=0,e=b.length;for(;a<e-1;++a){c=c[b[a]]}return c[b[a]]=d},getDeep:function(c,b){b=b.split(".");var a=0,d=b.length;for(;a<d;++a){c=c[b[a]]}return c},loadConfigurationIntoHtml5Storage:function(a,d){var c=null;try{if(!a||a==undefined){return}if(d==undefined){d=""}$.each(a,function(e,f){if(typeof f!="object"){if(app.store.localStorage.get("config"+d+"."+e)==undefined){app.store.localStorage.set("config"+d+"."+e,f)}else{app.store.loadValueIntoObject("config"+d+"."+e)}}else{plugin_Informator.loadConfigurationIntoHtml5Storage(f,d+"."+e)}});c=true}catch(b){c=false}return c},functions:{set:function(a,b){if(plugin_Informator.config.useHtml5Storage){app.store.localStorage.set("config."+a,b)}plugin_Informator.setDeep(window,a,b)}}};