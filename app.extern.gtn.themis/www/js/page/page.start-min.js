var page_start={config:null,constructor:function(){},creator:function(a){var e=null;try{var f=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("start","headlines")}));d.append(app.ni.element.h2({text:"Aktuell implementiert"}));d.append(app.ni.element.p({text:"+ Rgistrieren"}));d.append(app.ni.element.p({text:"+ E-Mail verifizieren"}));d.append(app.ni.element.p({text:"+ Login"}));d.append(app.ni.element.p({text:"+ Logout"}));d.append(app.ni.element.p({text:"+ Backups angzeigen"}));d.append(app.ni.element.p({text:"- Backup Details"}));d.append(app.ni.element.p({text:"+ Backup-Log"}));d.append(app.ni.element.h2({text:"ToDo"}));d.append(app.ni.element.p({text:"Backup erstellen"}));d.append(app.ni.element.p({text:"Zip Archiv"}));d.append(app.ni.element.p({text:"Backups durchsuchen"}));e=true}catch(c){app.debug.log(JSON.stringify(c,null,4));e=false}return e},setEvents:function(a){var c=null;try{c=true}catch(b){app.debug.log(JSON.stringify(b,null,4));c=false}return c},events:{pagebeforechange:function(b,a){},pagebeforecreate:function(b,a){},pagebeforehide:function(b,a){},pagebeforeload:function(b,a){},pagebeforeshow:function(b,a){},pagechange:function(b,a){},pagechangefailed:function(b,a){},pagecreate:function(b,a){},pagehide:function(b,a){},pageinit:function(b,a){},pageload:function(b,a){},pageloadfailed:function(b,a){},pageremove:function(b,a){},pageshow:function(b,a){}}};