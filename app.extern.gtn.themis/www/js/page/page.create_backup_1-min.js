var page_create_backup_1={config:null,constructor:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},creator:function(a){var g=null;try{var h=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");var f=a.find("div#page-panel");d.append(app.ni.element.h1({text:app.lang.string("create_backup","headlines")}));d.append(app.ni.element.h2({text:app.lang.string("select_datasource","headlines")}));d.append(app.ni.element.p({text:app.lang.string("select_datasource","texts")}));d.append(app.ni.element.h2({text:app.lang.string("existing_datasources","headlines")}));var e=$(app.template.get("listA","responsive"));if((datasourceProfiles=app.rc.getJson("datasourceProfiles",{username:app.store.localStorage.get("data-html5-themis-username")}))!=false){$.each(datasourceProfiles.sourceProfiles,function(i,j){e.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById(j.pluginName),title:"Id: "+j.datasourceProfileId,headline:j.title,text:j.pluginName,attributes:{"data-html5-datasourceprofileid":j.datasourceProfileId}}))})}else{alert("ws error")}d.append(e);d.append(app.ni.element.h2({text:app.lang.string("new_datasource","headlines"),styles:{clear:"both"}}));e=$(app.template.get("listA","responsive"));if((datasources=app.rc.getJson("getDatasources"))!=false){$.each(datasources.sources,function(i,j){e.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById(j.datasourceId),title:"???",headline:j.title,text:j.datasourceId,attributes:{"data-html5-datasourceid":j.datasourceId},classes:["app-new-datasource"]}))})}else{alert("ws error")}d.append(e);g=true}catch(c){app.debug.log(JSON.stringify(c,null,4));g=false}return g},setEvents:function(a){var c=null;try{$(document).on("click",".app-new-datasource",function(d){if((json=app.rc.getJson("authDatasource",{username:app.store.localStorage.get("data-html5-themis-username"),datasourceId:app.store.localStorage.get("data-html5-datasourceid"),keyRing:app.store.localStorage.get("data-html5-keyring"),profileName:"Test by app"}))!=false){alert(JSON.stringify(json))}else{alert("ws error")}});c=true}catch(b){app.debug.log(JSON.stringify(b,null,4));c=false}return c},events:{pagebeforechange:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforecreate:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforehide:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforeload:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforeshow:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagechange:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagechangefailed:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagecreate:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagehide:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageinit:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageload:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageloadfailed:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageremove:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageshow:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d}}};