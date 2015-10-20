;;var page_activate_account={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10)var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");b.append(app.ni.element.h1({text:app.lang.string("activate_account","headlines")}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_backup_edit={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{var f=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e=app.rc.getJson("getBackupjob",{jobId:app.store.localStorage.get("data-html5-themis-backupid"),expandUser:false,expandToken:false,expandProfiles:false,expandProtocol:false},true);e.done(function(g){d.append(app.ni.element.h1({text:app.lang.string("backup_edit","headlines")+" - "+g.jobTitle}));d.append(app.ni.element.h2({text:app.lang.string("backup_job_status","headlines")}));d.append(app.ni.element.p({text:g.jobStatus}));d.append(app.ni.element.h2({text:app.lang.string("backup_hold","headlines")}));d.append(app.ni.element.p({text:g.onHold}));d.append(app.ni.element.h2({text:app.lang.string("backup_schedule","headlines")}));d.append(app.ni.element.p({text:g.schedule}));d.append(app.ni.element.h2({text:app.lang.string("backup_created","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.created/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_modified","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.modified/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_start","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.start/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_next","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.next/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_delay","headlines")}));d.append(app.ni.element.p({text:g.delay}));d.append(app.ni.element.a({id:"btnNewBackup",text:app.lang.string("backup_log","actions"),attributes:{href:"backup_log.html"},classes:["ui-btn"]}));app.notify.loader.remove();app.help.jQM.enhance(d)});success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_backup_jobs={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var d=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e=app.rc.getJson([["getRunningBackupjobs",{expand:"true"}],["getSuccessfulBackupjobs",{expand:"true"}],["getQueuedBackupjobs",{expand:"true"}]],true,3);e.done(function(k){var j=k.getRunningBackupjobs,l=k.getSuccessfulBackupjobs,h=k.getQueuedBackupjobs;d.append(app.ni.element.h1({text:app.lang.string("backup_jobs","headlines")}));d.append(app.ni.element.a({id:"btnNewBackup",text:app.lang.string("create_backup","actions"),attributes:{href:"create_backup_1.html"},classes:["ui-btn"]}));d.append(app.ni.element.h2({text:app.lang.string("backup_jobs_successful","headlines"),styles:{clear:"both"}}));var i=$(app.template.get("listA","responsive"));$.each(l,function(m,n){i.append(app.ni.list.thumbnail({href:"backup_edit.html",imageSrc:app.img.getUrlById("org.backmeup.facebook.job."+n.jobStatus),title:n.jobStatus,headline:n.jobTitle,text:"",classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId}}))});app.notify.loader.remove();d.append(i);d.append(app.ni.element.h2({text:app.lang.string("backup_jobs_queued","headlines"),styles:{clear:"both"}}));i=$(app.template.get("listA","responsive"));$.each(h,function(m,n){i.append(app.ni.list.thumbnail({href:"backup_edit.html",imageSrc:app.img.getUrlById("org.backmeup.storageLarge"),title:"Id: "+n.jobId,headline:n.jobTitle,text:n.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId}}))});app.notify.loader.remove();d.append(i);d.append(app.ni.element.h2({text:app.lang.string("backup_jobs_running","headlines"),styles:{clear:"both"}}));i=$(app.template.get("listA","responsive"));$.each(j,function(m,n){i.append(app.ni.list.thumbnail({href:"backup_edit.html",imageSrc:app.img.getUrlById("org.backmeup.storageLarge"),title:"Id: "+n.jobId,headline:n.jobTitle,text:n.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId}}))});app.notify.loader.remove();d.append(i);app.notify.loader.remove();app.help.jQM.enhance(d)});e.fail(function(h){app.notify.loader.remove();alert("ws error: "+h)});success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_backup_log={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var f=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e=app.rc.getJson("getBackupjob",{jobId:app.store.localStorage.get("data-html5-themis-backupid"),expandUser:false,expandToken:false,expandProfiles:false,expandProtocol:true},true);e.done(function(g){d.append(app.ni.element.h1({text:app.lang.string("backup_log","headlines")}));d.append(app.ni.element.a({id:"btnBackupDetails",text:app.lang.string("backup_edit","actions"),attributes:{href:"backup_edit.html"},classes:["ui-btn"]}));app.notify.loader.remove();app.help.jQM.enhance(d)});e.fail(function(g){app.notify.loader.remove();alert("ws error: "+g)});success=true;success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_badConnection={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");b.append(app.ni.element.h1({text:"Bad Connection"}));b.append(app.ni.element.p({text:"Check your internet connection. You will be redirected after your connection is back again."}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(this.config.pageId).on("connectionisalive",function(b,c){app.help.navigation.back()})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_create_backup_1={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getSources",{expandConfigs:false},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1")}));var g=$(app.template.get("listA","responsive"));$.each(h,function(k,m){var n=null,j=null,i=m.pluginId,l=null;if(m.authDataDescription!=undefined){n=true;j=m.authDataDescription.configType;if(j=="oauth"){l=m.authDataDescription.redirectURL;app.sess.setObject(i,m.authDataDescription.properties,"session_CreateSource")}}else{n=false}g.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById(i),title:"",headline:m.title,text:m.description,classes:["source","authRequired-"+n],attributes:{"data-html5-authRequired":n,"data-html5-oAuthUrl":l,"data-html5-pluginId":i,"data-html5-source-pluginId":i,"data-html5-authType":j,"data-html5-destinationType":"source"}}))});c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){alert("ws error")})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1.config.pageId).on("click",".authRequired-false",function(b){app.help.navigation.redirect("create_backup_1_newSource.html","slide")});$(page_create_backup_1.config.pageId).on("click",".authRequired-true",function(d){var c=$(this).clone(),e,b;e=app.rc.getJson("getAuthdataForPlugin",{pluginId:c.attr("data-html5-pluginId")},true);e.fail(function(){alert("ws error")});e.done(function(f){b=app.ni.element.ul({attributes:{"data-role":"listview","data-inset":"true"}});$.each(f,function(h,g){b.append(app.ni.element.li({text:app.ni.element.a({text:g.name,attributes:{href:"create_backup_1_newSource.html","data-transition":"slide","data-html5-authdataId":g.id,"data-html5-authdataName":g.name},classes:[]})}))});app.notify.dialog(b,app.lang.string("choose_profile","headlines"),false,app.lang.string("new_source_profile","actions"),app.lang.string("cancel","actions"),function(g){window.setTimeout(function(){switch(c.attr("data-html5-authType")){case"oauth":var h=c.attr("data-html5-oAuthUrl");var i=null;i=app.oa.generic(h);i.done(function(j){app.store.localStorage.set("data-html5-oAuthQuery",j);app.help.navigation.redirect("create_backup_1_oAuthFinished.html","slide")});i.fail(function(j){alert("oAuth error: "+j)});break;case"input":app.help.navigation.redirect("create_backup_1_inputAuth.html","slide");break;default:alert("not implemented")}},10)},function(g){},100)})})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_create_backup_1_inputAuth={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1_inputAuth"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1_inputAuth")}));var g=app.ni.form.form({id:"frmCreateSource",attributes:{action:"#","data-ajax":"false"}});g.append(app.ni.text.text({id:"txtName",name:"title",placeholder:app.lang.string("title","labels"),label:true,labelText:app.lang.string("title","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));if(h.authDataDescription!=undefined){$.each(h.authDataDescription.requiredInputs,function(i,j){g.append(app.bmu.print.formElement(j,h.pluginId))})}g.append(app.ni.button.button({id:"btnAuthenticate",name:"btnAuthenticate",placeholder:app.lang.string("create_authdata","labels"),label:false,labelText:app.lang.string("create_authdata","labels"),container:false,value:app.lang.string("create_authdata","actions")}));c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){alert("ws error")})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1_inputAuth.config.pageId).on("click","#btnAuthenticate",function(b){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.help.form.serialize($("#frmCreateSource")),c;delete d.btnAuthenticate;delete d.title;c=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:a.find("#txtName").val(),properties:d},true);c.done(function(e){app.store.localStorage.set("data-html5-authdataId",e.id);app.store.localStorage.set("data-html5-authdataName",e.name);app.notify.loader.remove();app.help.navigation.redirect("create_backup_1_newSource.html","slide")});c.fail(function(){alert(" WS Error")})})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_create_backup_1_newSource={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var h=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var g=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var f,e=null,d=null;if(app.store.localStorage.get("data-html5-authrequired")){f=app.rc.getJson("getPluginOptions",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:app.store.localStorage.get("data-html5-authdataId"),expandConfigs:true},true)}else{f=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true)}f.done(function(k){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1_newSource"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1_newSource")}));var j=app.ni.form.form({id:"frmCreateSource",attributes:{action:"#","data-ajax":"false"},label:false});if(k.propertiesDescription!=undefined){if(k.propertiesDescription.length>0){$.each(k.propertiesDescription,function(l,m){j.append(app.bmu.print.formElement(m,k.pluginId))});d=true}else{d=false}}if(k.availableOptions!=undefined){if(k.availableOptions.length>0){var i=$(app.ni.select.multiple({id:"cboOptions",name:"options",label:true,labelText:app.lang.string("selectOptionsLabel","page.create_backup_1_newSource"),attributes:{"data-native-menu":false}}));i.append(app.ni.select.option({text:app.lang.string("selectOptions","page.create_backup_1_newSource")}));$.each(k.availableOptions,function(l,m){i.append(app.ni.select.option({text:m,attributes:{value:m}}))});j.append(i);e=true}else{e=false}}j.append(app.ni.button.button({id:"btnCreate",name:"btnCreate",placeholder:app.lang.string("create_source","labels"),label:true,labelText:app.lang.string("create_source","labels"),container:true,value:app.lang.string("create_source","actions")}));if(d||e){c.append(j);app.notify.loader.remove();app.help.jQM.enhance(c)}else{page_create_backup_1_newSource.createSinkProfile([],{})}});f.fail(function(i){alert("ws error")})},createSinkProfile:function(a,b){if(app.store.localStorage.get("data-html5-authRequired")){promise=app.rc.getJson("createSourceProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:{id:app.store.localStorage.get("data-html5-authdataId")},properties:b,options:a},true)}else{promise=app.rc.getJson("createSourceProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),properties:b,options:a},true)}promise.done(function(c){app.store.localStorage.set("data-html5-themis-source-profileid",c.profileId);app.notify.loader.remove();app.help.navigation.redirect("create_backup_2.html","slide")});promise.fail(function(){alert("Quelle nicht angelegt. WS Error")})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1_newSource.config.pageId).on("click","#btnCreate",function(){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.help.form.serialize($("#frmCreateSource")),c,b=Array();delete d.btnCreate;if(d.options!=undefined){b=d.options;delete d.options}page_create_backup_1_newSource.createSinkProfile(b,d)})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_create_backup_1_oAuthFinished={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");if(app.detect.isDesktop()){try{app.store.localStorage.set("data-html5-oAuthQuery",window.location.href.split("?")[1].split("&")[0])}catch(d){app.store.localStorage.set("data-html5-oAuthQuery","")}}else{console.log("todo");app.store.localStorage.set("data-html5-oAuthQuery",app.store.localStorage.get("data-html5-oAuthQuery").split("&")[0])}c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1_oAuthFinished"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1_oAuthFinished")}));c.append(app.ni.text.text({id:"txtName",placeholder:app.lang.string("authdata_name","labels"),label:true,labelText:app.lang.string("authdata_name","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));c.append(app.ni.button.button({id:"btnCreateAuthData",placeholder:app.lang.string("create_authdata","labels"),label:true,labelText:app.lang.string("create_authdata","labels"),container:true,value:app.lang.string("create_authdata","actions")}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1_oAuthFinished.config.pageId).on("click","#btnCreateAuthData",function(d){var c,e,f;c={oAuthQuery:app.store.localStorage.get("data-html5-oAuthQuery")};e=app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"),"session_CreateSource");for(var b in e){c[b]=e[b]}f=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:$("#txtName").val(),properties:c},true);f.done(function(g){app.store.localStorage.set("data-html5-authdataId",g.id);app.help.navigation.redirect("create_backup_1_newSource.html","slide")});f.fail(function(g){alert("ws error")})})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_create_backup_2={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getSinks",{expandConfigs:true},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2")}));var g=$(app.template.get("listA","responsive"));$.each(h,function(k,m){var n=null,j=null,i=m.pluginId,l=null;if(m.authDataDescription!=undefined){n=true;j=m.authDataDescription.configType;if(j=="oauth"){l=m.authDataDescription.redirectURL;app.sess.setObject(i,m.authDataDescription.properties,"session_CreateSink")}}else{n=false}g.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById(i),title:"",headline:m.title,text:m.description,classes:["source","authRequired-"+n],attributes:{"data-html5-authRequired":n,"data-html5-oAuthUrl":l,"data-html5-pluginId":i,"data-html5-sink-pluginId":i,"data-html5-authType":j,"data-html5-destinationType":"sink"}}))});c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});success=true},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2.config.pageId).on("click",".authRequired-false",function(b){app.help.navigation.redirect("create_backup_1_newSource.html","slide")});$(page_create_backup_2.config.pageId).on("click",".authRequired-true",function(d){var c=$(this).clone(),e,b;e=app.rc.getJson("getAuthdataForPlugin",{pluginId:c.attr("data-html5-pluginId")},true);e.fail(function(){alert("ws error")});e.done(function(f){b=app.ni.element.ul({attributes:{"data-role":"listview","data-inset":"true"}});$.each(f,function(h,g){b.append(app.ni.element.li({text:app.ni.element.a({text:g.name,attributes:{href:"create_backup_2_newSink.html","data-transition":"slide","data-html5-authdataId":g.id,"data-html5-authdataName":g.name},classes:[]})}))});app.notify.dialog(b,app.lang.string("choose_profile","headlines"),false,app.lang.string("new_source_profile","actions"),app.lang.string("cancel","actions"),function(g){window.setTimeout(function(){switch(c.attr("data-html5-authType")){case"oauth":var h=c.attr("data-html5-oAuthUrl");var i=null;i=app.oa.generic(h);i.done(function(j){app.store.localStorage.set("data-html5-oAuthQuery",j);app.help.navigation.redirect("create_backup_2_oAuthFinished.html","slide")});i.fail(function(j){alert("oAuth error: "+j)});break;case"input":app.help.navigation.redirect("create_backup_2_inputAuth.html","slide");break;default:alert("not implemented")}},10)},function(g){},0)})})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_create_backup_2_inputAuth={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2_inputAuth"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2_inputAuth")}));var g=app.ni.form.form({id:"frmCreateSource",attributes:{action:"#","data-ajax":"false"}});g.append(app.ni.text.text({id:"txtName",name:"title",placeholder:app.lang.string("title","labels"),label:true,labelText:app.lang.string("title","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));if(h.authDataDescription!=undefined){$.each(h.authDataDescription.requiredInputs,function(i,j){g.append(app.bmu.print.formElement(j,h.pluginId))})}g.append(app.ni.button.button({id:"btnAuthenticate",name:"btnAuthenticate",placeholder:app.lang.string("create_authdata","labels"),label:false,labelText:app.lang.string("create_authdata","labels"),container:false,value:app.lang.string("create_authdata","actions")}));c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){alert("ws error")})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2_inputAuth.config.pageId).on("click","#btnAuthenticate",function(b){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.help.form.serialize($("#frmCreateSource")),c;delete d.btnAuthenticate;delete d.title;c=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:a.find("#txtName").val(),properties:d},true);c.done(function(e){app.store.localStorage.set("data-html5-authdataId",e.id);app.store.localStorage.set("data-html5-authdataName",e.name);app.notify.loader.remove();app.help.navigation.redirect("create_backup_2_newSink.html","slide")});c.fail(function(){alert(" WS Error...geht ned")})})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_create_backup_2_newSink={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var h=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var g=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var f,e=null,d=null;if(app.store.localStorage.get("data-html5-authrequired")){f=app.rc.getJson("getPluginOptions",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:app.store.localStorage.get("data-html5-authdataId"),expandConfigs:true},true)}else{f=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true)}f.done(function(k){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2_newSink"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2_newSink")}));var j=app.ni.form.form({id:"frmCreateSink",attributes:{action:"#","data-ajax":"false"},label:false});if(k.propertiesDescription!=undefined){if(k.propertiesDescription.length>0){$.each(k.propertiesDescription,function(l,m){j.append(app.bmu.print.formElement(m,k.pluginId))});d=true}else{d=false}}if(k.availableOptions!=undefined){if(k.availableOptions.length>0){var i=$(app.ni.select.multiple({id:"cboOptions",name:"options",label:true,labelText:app.lang.string("selectOptionsLabel","page.create_backup_2_newSink"),attributes:{"data-native-menu":false}}));i.append(app.ni.select.option({text:app.lang.string("selectOptions","page.create_backup_2_newSink")}));$.each(k.availableOptions,function(l,m){i.append(app.ni.select.option({text:m,attributes:{value:m}}))});j.append(i);e=false}else{e=false}}j.append(app.ni.button.button({id:"btnCreate",placeholder:app.lang.string("create_sink","labels"),label:true,labelText:app.lang.string("create_sink","labels"),container:true,value:app.lang.string("create_sink","actions")}));if(d||e){c.append(j);app.notify.loader.remove();app.help.jQM.enhance(c)}else{page_create_backup_2_newSink.createSinkProfile([],{})}});f.fail(function(i){alert("ws error")});return true},createSinkProfile:function(a,b){if(app.store.localStorage.get("data-html5-authRequired")){promise=app.rc.getJson("createSinkProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:{id:app.store.localStorage.get("data-html5-authdataId")},properties:b,options:a},true)}else{promise=app.rc.getJson("createSinkProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),properties:b,options:a},true)}promise.done(function(c){app.store.localStorage.set("data-html5-themis-sink-profileid",c.profileId);app.notify.loader.remove();app.help.navigation.redirect("create_backup_3.html","slide")});promise.fail(function(){alert("Quelle nicht angelegt. WS Error")})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2_newSink.config.pageId).on("click","#btnCreate",function(){var d=app.help.form.serialize($("#frmCreateSink")),c,b=Array();delete d.btnCreate;if(d.options!=undefined){b=d.options;delete d.options}page_create_backup_2_newSink.createSinkProfile(b,d)})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_create_backup_2_oAuthFinished={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");if(app.detect.isDesktop()){try{app.store.localStorage.set("data-html5-oAuthQuery",window.location.href.split("?")[1].split("&")[0])}catch(d){app.store.localStorage.set("data-html5-oAuthQuery","")}}else{console.log("todo");app.store.localStorage.set("data-html5-oAuthQuery",app.store.localStorage.get("data-html5-oAuthQuery").split("&")[0])}c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2_oAuthFinished"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2_oAuthFinished")}));c.append(app.ni.text.text({id:"txtName",placeholder:app.lang.string("authdata_name","labels"),label:true,labelText:app.lang.string("authdata_name","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));c.append(app.ni.button.button({id:"btnCreateAuthData",placeholder:app.lang.string("create_authdata","labels"),label:true,labelText:app.lang.string("create_authdata","labels"),container:true,value:app.lang.string("create_authdata","actions")}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2_oAuthFinished.config.pageId).on("click","#btnCreateAuthData",function(d){var c,e,f;c={oAuthQuery:app.store.localStorage.get("data-html5-oAuthQuery")};e=app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"),"session_CreateSink");for(var b in e){c[b]=e[b]}f=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:$("#txtName").val(),properties:c},true);f.done(function(g){app.store.localStorage.set("data-html5-authdataId",g.id);app.help.navigation.redirect("create_backup_2_newSink.html","slide")});f.fail(function(){alert("ws error")})})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_create_backup_3={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_3"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_3")}));app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e,d;d=app.rc.getJson([["getPluginConfiguration",{pluginId:app.store.localStorage.get("data-html5-source-pluginId"),configId:app.store.localStorage.get("data-html5-themis-source-profileid"),expandConfigs:true}],["getPlugin",{pluginId:app.store.localStorage.get("data-html5-source-pluginId"),expandConfigs:true}]],true);e=app.rc.getJson([["getPluginConfiguration",{pluginId:app.store.localStorage.get("data-html5-sink-pluginId"),configId:app.store.localStorage.get("data-html5-themis-sink-profileid"),expandConfigs:true}],["getPlugin",{pluginId:app.store.localStorage.get("data-html5-sink-pluginId"),expandConfigs:true}]],true);$.when(d,e).done(function(i,h){c.append(app.ni.element.h2({text:app.lang.string("chosen_datasource","headlines")}));c.append(app.ni.element.p({text:i.getPlugin.title+" - "}));c.append(app.ni.element.h2({text:app.lang.string("chosen_datasink","headlines")}));c.append(app.ni.element.p({text:h.getPlugin.title+" - "}));c.append(app.ni.element.h2({text:app.lang.string("job_settings","headlines")}));c.append(app.ni.text.text({id:"txtTitle",placeholder:app.lang.string("job_title","labels"),label:true,labelText:app.lang.string("job_title","labels"),container:true}));c.append(app.ni.button.button({id:"btnCreateBackup",placeholder:app.lang.string("create_backup","labels"),label:true,labelText:app.lang.string("create_backup","labels"),container:true,value:app.lang.string("create_backup","actions")}));app.notify.loader.remove();app.help.jQM.enhance(c)});$.when(d,d).fail(function(){alert("ws error ")})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(a).on("click","#btnCreateBackup",function(){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var b=app.rc.getJson("createBackupjob",{jobTitle:a.find("#txtTitle").val(),schedule:"weekly",start:Date.now(),source:app.store.localStorage.get("data-html5-themis-source-profileid"),actions:[],sink:app.store.localStorage.get("data-html5-themis-sink-profileid")},true);b.done(function(c){app.notify.loader.remove();app.store.localStorage.clearHtml5();app.help.navigation.redirect("backup_jobs.html","slide")});b.fail(function(c){alert("webservice error: "+c)})})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_create_backup_oAuthHandler={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var e=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var d=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);window.setTimeout(function(){var d=app.oa.getQueryString(),c=app.store.localStorage.get("data-html5-destinationType");if(c=="source"){app.help.navigation.redirect("create_backup_1_oAuthFinished.html?"+d,"slide")}else{if(c=="sink"){app.help.navigation.redirect("create_backup_2_oAuthFinished.html?"+d,"slide")}else{alert("oAuth Error")}}},500)}}};var page_index={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{if(app.store.localStorage.get("data-html5-themis-loggedin")){$(document).off();app.help.navigation.redirect("start.html")}else{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("index","headlines")}));d.append(app.ni.element.a({id:"btnLogin",text:app.lang.string("login","actions"),attributes:{href:"login.html"},classes:["ui-btn"]}));d.append(app.ni.element.a({id:"btnRegister",text:app.lang.string("register","actions"),attributes:{href:"register.html"},classes:["ui-btn"]}))}success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_job_details={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(b){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var h=b.find("div[data-role=header]");var j=b.find("div[data-role=content]");var k=b.find("div#nav-panel");var c=app.rc.getJson("jobDetails",{username:app.store.localStorage.get("data-html5-themis-username"),jobId:app.store.localStorage.get("data-html5-backupjobid")});var f=app.rc.getJson("jobStatus",{username:app.store.localStorage.get("data-html5-themis-username"),jobId:app.store.localStorage.get("data-html5-backupjobid"),fromDate:0,toDate:Date.now()});j.append(app.ni.element.h1({text:app.lang.string("job_details","headlines")+": "+c.jobTitle}));var a=$(app.template.get("grid-33-33-33","responsive"));var i=a.find(".ui-block-a .ui-body");var g=a.find(".ui-block-b .ui-body");var e=a.find(".ui-block-c .ui-body");i.append(app.ni.element.h2({text:app.lang.string("datasource","headlines")}));i.append(app.ni.element.p({text:"Von welchem Webservice bekomme ich die Daten für die Datenquelle: "+app.store.localStorage.get("data-html5-datasourceid")}));g.append(app.ni.element.h2({text:app.lang.string("datasink","headlines")}));g.append(app.ni.element.p({text:"Von welchem Webservice bekomme ich die Daten für die Datensenke: "+app.store.localStorage.get("data-html5-datasinkid")}));e.append(app.ni.element.h2({text:app.lang.string("job_status","headlines")}));j.append(a);j.append(app.ni.element.a({id:"btnBackupEdit",text:app.lang.string("backup_edit","actions"),attributes:{href:"backup_edit.html"},classes:["ui-btn"]}));j.append(app.ni.element.a({id:"btnBackupDelete",text:app.lang.string("backup_delete","actions"),classes:["ui-btn"]}));j.append(app.ni.element.a({id:"btnBackupLog",text:app.lang.string("backup_log","actions"),attributes:{href:"backup_log.html"},classes:["ui-btn"]}));success=true}catch(d){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(d,null,4),50);app.debug.log(JSON.stringify(d,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_login={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("login","headlines")}));var b=app.ni.form.form({id:"frmLogin",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtUsername",placeholder:app.lang.string("username","labels"),label:false,labelText:app.lang.string("username","labels"),container:false}));b.append(app.ni.text.password({id:"txtPassword",placeholder:app.lang.string("password","labels"),label:false,labelText:app.lang.string("password","labels"),container:false}));b.append(app.ni.button.submit({id:"btnLogin",value:app.lang.string("login","actions"),classes:["ui-btn"],attributes:{href:"#"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("register","actions"),attributes:{href:"register.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){$(page_login.config.pageId).on("submit","#frmLogin",function(b){app.debug.alert("page_"+page_register.config.name+" #btnRegister click",25);b.preventDefault();if(!app.help.validate.username(a.find("#txtUsername").val())){app.notify.alert(app.lang.string("error","page.login"),false,app.lang.string("error_headline","page.login"),app.lang.string("error_button","page.login"))}else{if(!app.help.validate.password(a.find("#txtPassword").val())){app.notify.alert(app.lang.string("error","page.login"),false,app.lang.string("error_headline","page.login"),app.lang.string("error_button","page.login"))}else{app.template.append("#btnLogin","app-loader-bubble-inline-button");var c=app.rc.getJson("authenticate",{username:a.find("#txtUsername").val(),password:encodeURIComponent(a.find("#txtPassword").val())},true);c.always(function(){a.find(".bubblingG-inline-button").remove()});c.done(function(d){if(d.accessToken!=undefined){app.store.localStorage.clearHtml5();app.sess.loggedIn(true);app.store.localStorage.set("themis-token",d.accessToken);app.help.navigation.redirect(app.config.startPage_loggedIn,"slideup")}else{alert("Benutzername oder Passwort falsch.")}});c.fail(function(d){app.notify.alert(app.lang.string("error","page.login"),app.lang.string("error_headline","page.login"),false,app.lang.string("error_button","page.login"))})}}})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_logout={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.store.localStorage.set("data-html5-themis-loggedin",false);app.help.navigation.redirect("index.html");success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_register={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");if(app.detect.isDesktop()){b.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}b.append(app.ni.element.h1({text:app.lang.string("register","headlines")}));b.append(app.ni.element.p({text:app.lang.string("register","texts"),attributes:{id:"pDescription"}}));b.append(app.ni.element.a({id:"btnLetsGo",text:app.lang.string("lets_go","actions"),classes:["ui-btn"],attributes:{href:"register_1_terms.html","data-transition":"slide"}}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("static-index.html","slide reverse")})},events:{pagebeforechange:function(a){app.debug.alert("",3)},pagebeforecreate:function(a){},pagebeforehide:function(a){},pagebeforeload:function(a){},pagebeforeshow:function(a){},pagechange:function(a){},pagechangefailed:function(a){},pagecreate:function(a){},pagehide:function(a){},pageinit:function(a){},pageload:function(a){},pageloadfailed:function(a){},pageremove:function(a){},pageshow:function(a){}}};var page_register_1_terms={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");if(app.detect.isDesktop()){b.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}b.append(app.ni.element.h1({text:app.lang.string("register_1_terms","headlines")}));b.append(app.ni.element.p({text:app.lang.string("accept_terms","texts",{privacy_policy:app.ni.element.a({id:"lnkPrivacyPolicy",text:app.lang.string("privacy_policy","links"),attributes:{href:"#"}}),terms:app.ni.element.a({id:"lnkTerms",text:app.lang.string("terms","links"),attributes:{href:"#"}})})}));b.append(app.ni.element.a({id:"btnContinue",text:app.lang.string("accept_terms","actions"),classes:["ui-btn"],attributes:{href:"register_2_name.html","data-transition":"slide"}}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("register.html","slide reverse")})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_register_2_name={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("register_2_name","headlines")}));var b=app.ni.form.form({id:"frmRegisterName",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtFirstname",placeholder:app.lang.string("firstname","labels"),label:false,labelText:app.lang.string("firstname","labels"),container:false}));b.append(app.ni.text.text({id:"txtLastname",placeholder:app.lang.string("lastname","labels"),label:false,labelText:app.lang.string("lastname","labels"),container:false}));b.append(app.ni.text.text({id:"txtUsername",placeholder:app.lang.string("username","labels"),label:false,labelText:app.lang.string("username","labels"),container:false}));b.append(app.ni.element.p({text:app.lang.string("what_is_your_name","texts"),attributes:{id:"pDescription"}}));b.append(app.ni.element.a({id:"btnContinue",text:app.lang.string("continue","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("register_1_terms.html","slide reverse")});$(this.config.pageId).on("focus blur keyup","#txtFirstname, #txtLastname, #txtUsername",function(b){if(!(app.help.validate.firstname(a.find("#txtFirstname").val())&&app.help.validate.lastname(a.find("#txtLastname").val())&&app.help.validate.username(a.find("#txtUsername").val()))){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_name","texts"));a.find("#pDescription").addClass("error")}else{a.find("#pDescription").css("display","none");a.find("#btnContinue").css("display","block");a.find("#pDescription").removeClass("error")}});$(this.config.pageId).on("click","#btnContinue",function(b){if(!(app.help.validate.firstname(a.find("#txtFirstname").val())&&app.help.validate.lastname(a.find("#txtLastname").val())&&app.help.validate.username(a.find("#txtUsername").val()))){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_name","texts"));a.find("#pDescription").addClass("error")}else{app.help.navigation.redirect("register_3_credentials.html","slide")}})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);app.store.localStorage.pufferFormValues(a)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);app.store.localStorage.restorePufferedFormValues(a)}}};var page_register_3_credentials={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("register_2_credentials","headlines")}));var b=app.ni.form.form({id:"frmRegisterCredentials",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtEmail",placeholder:app.lang.string("email","labels"),label:false,labelText:app.lang.string("email","labels"),container:false}));b.append(app.ni.text.password({id:"txtPassword",placeholder:app.lang.string("password","labels"),label:false,labelText:app.lang.string("password","labels"),container:false}));b.append(app.ni.text.password({id:"txtPasswordRpt",placeholder:app.lang.string("password_rpt","labels"),label:false,labelText:app.lang.string("password_rpt","labels"),container:false}));b.append(app.ni.element.p({text:app.lang.string("insert_login_data","texts"),attributes:{id:"pDescription"}}));b.append(app.ni.element.a({id:"btnContinue",text:app.lang.string("continue","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("register_2_name.html","slide reverse")});$(this.config.pageId).on("focus blur keyup","#txtEmail, #txtPassword, #txtPasswordRpt",function(b){if(!app.help.validate.email(a.find("#txtEmail").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_email","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.password(a.find("#txtPassword").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_password","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.equal(a.find("#txtPassword").val(),a.find("#txtPasswordRpt").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_passwords_not_equal","texts"));a.find("#pDescription").addClass("error")}else{a.find("#pDescription").css("display","none");a.find("#btnContinue").css("display","block");a.find("#pDescription").removeClass("error")}}}});$(this.config.pageId).on("click","#btnContinue",function(b){if(!app.help.validate.email(a.find("#txtEmail").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_email","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.password(a.find("#txtPassword").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_password","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.equal(a.find("#txtPassword").val(),a.find("#txtPasswordRpt").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_passwords_not_equal","texts"));a.find("#pDescription").addClass("error")}else{app.help.navigation.redirect("register_4_final.html","slide")}}}})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);app.store.localStorage.pufferFormValues(a)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);app.store.localStorage.restorePufferedFormValues(a)}}};var page_register_4_final={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");if(app.detect.isDesktop()){b.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}b.append(app.ni.element.h1({text:app.lang.string("register_4_final","headlines")}));app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(e,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);var f=app.store.localStorage.getPufferedFormValue("register_2_name","txtFirstname"),d=app.store.localStorage.getPufferedFormValue("register_2_name","txtLastname"),h=app.store.localStorage.getPufferedFormValue("register_2_name","txtUsername"),c=app.store.localStorage.getPufferedFormValue("register_3_credentials","txtPassword"),b=app.store.localStorage.getPufferedFormValue("register_3_credentials","txtEmail");var g=app.rc.getJson("register",{firstname:f,lastname:d,username:h,password:c,email:b},true);g.done(function(i){if(i.userId){app.store.localStorage.set("data-html5-themis-loggedin",false);app.store.localStorage.set("data-html5-themis-userid",i.userId);app.store.localStorage.set("data-html5-themis-activated",i.activated);app.store.localStorage.set("data-html5-themis-username",a.find("#txtUsername").val());app.help.navigation.redirect("activate_account.html")}else{app.notify.alert(app.lang.string("bad_register","notifications"),false,app.lang.string("bad_register","headlines"),app.lang.string("ok","actions"))}});g.fail(function(i){app.notify.alert(app.lang.string("bad_register","notifications"),false,app.lang.string("bad_register","headlines"),app.lang.string("ok","actions"))})}}};var page_search={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var e=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");e.append(app.ni.element.h1({text:app.lang.string("search_in_backups","headlines")}));var d=app.ni.form.form({id:"frmSearch",attributes:{action:"#","data-ajax":"false"},label:false});d.append(app.ni.text.text({id:"txtSearch",placeholder:(app.store.localStorage.get("data-html5-themis-search-value"))?app.store.localStorage.get("data-html5-themis-search-value"):app.lang.string("search","labels"),label:false,labelText:app.lang.string("search","labels"),container:false}));d.append(app.ni.element.a({id:"btnSearch",text:app.lang.string("search","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));e.append(d);var c=app.ni.element.div({id:"divSearchResults",styles:{"margin-top":"15px","border-top":"1px solid #999"}});e.append(c);if(app.store.localStorage.get("data-html5-themis-search-value")!=null){window.setTimeout(function(){page_search.updateSearchDiv(c)},1000)}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(this.config.pageId).on("focus click","#txtSearch",function(b){$("#btnSearch").css("display","block");if(app.store.localStorage.get("data-html5-themis-search-value")&&$("#txtSearch").val()==""){$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));this.select()}});$(this.config.pageId).on("submit","#frmSearch",function(b){b.preventDefault();app.store.localStorage.set("data-html5-themis-search-value",$("#txtSearch").val());page_search.updateSearchDiv($("#divSearchResults"))});$(this.config.pageId).on("click","#btnSearch",function(b){app.store.localStorage.set("data-html5-themis-search-value",$("#txtSearch").val());page_search.updateSearchDiv($("#divSearchResults"))})},singleResult:{getThumbnail:function(a){if(a.thumbnailUrl!=undefined){return a.thumbnailUrl.replace("###TOKEN###",encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)))}else{return false}},getResultUrl:function(a){if(a.downloadUrl!=undefined){return a.downloadUrl.replace("###TOKEN###",encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)))}else{return false}},getSearchDetails:function(a){var b=app.ni.element.div({});if(page_search.singleResult.getResultUrl(a)){b.append(app.ni.element.a({text:"Link zum Ergebnis",attributes:{href:"#",onclick:"javascript:window.open('"+page_search.singleResult.getResultUrl(a)+"','_blank', 'location=yes')"}}))}$.each(a,function(c,d){if(typeof d==="object"){$.each(d,function(e,f){b.append(app.ni.element.p({text:app.lang.string(e,"page.search")+": "+f}))})}else{b.append(app.ni.element.p({text:app.lang.string(c,"page.search")+": "+d}))}});return b},openDetails:function(a){app.notify.alert(page_search.singleResult.getSearchDetails(a),app.lang.string("searchDetails","page.search"),a.title,app.lang.string("back","actions"),function(){},50)}},updateSearchDiv:function(a){a.empty();app.notify.loader.bubbleDiv(true,app.lang.string("loadingText","page.search"),app.lang.string("loadingHeadline","page.search"));var b=app.rc.getJson("search",{query:app.store.localStorage.get("data-html5-themis-search-value")},true);b.fail(function(){app.notify.alert(app.lang.string("search_error","texts"),false,app.lang.string("search","headlines"),app.lang.string("ok","actions"))});b.done(function(d){var c=$(app.template.get("listB","responsive"));$.each(d.files,function(g,e){var f,h;f=app.ni.element.li();if(page_search.singleResult.getThumbnail(e)){f.append(app.ni.element.img({attributes:{src:page_search.singleResult.getThumbnail(e)}}))}h=app.ni.element.div();h.append(app.ni.element.a({attributes:{href:"#",onclick:"page_search.singleResult.openDetails("+JSON.stringify(e).split('"').join("'")+")"},text:app.ni.element.h2({classes:["list-B-headline"],text:e.title})}));h.append(app.ni.element.p({classes:["list-B-text"],text:e.preview}));h.append(app.ni.element.p({classes:["list-B-status"],text:app.ni.element.a({text:app.lang.string("jobName","page.search")+": "+e.jobName})+" | "+app.ni.element.a({text:app.lang.string("timeStamp","page.search")+": "+date("F j, Y, g:i a",e.timeStamp/1000)})}));f.append(h);c.append(f)});a.append(c)});b.always(function(){app.notify.loader.remove()})},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var page_settings={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("settings","headlines")}));d.append(app.ni.element.a({id:"btnClearHtml5Storage",text:app.lang.string("clear_html5_storage","actions"),classes:["ui-btn"]}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);try{$(document).on("click","#btnClearHtml5Storage",function(){app.notify.alert(app.lang.string("clear_html5_storage","notifications"),app.lang.string("clear_html5_storage","headlines"),app.lang.string("clear_html5_storage","headlines"),page_settings.redirectHome);app.notify.add.alert(app.lang.string("logout","notifications"),app.lang.string("logout","headlines"),app.lang.string("logout","headlines"))});success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},redirectHome:function(){app.store.localStorage.clear();app.help.navigation.redirect("index.html")},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_share_backup={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var c=a.find("div[data-role=content]");var b=a.find("div#nav-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson([["getRunningBackupjobs",{expand:"true"}],["getSuccessfulBackupjobs",{expand:"true"}],["getQueuedBackupjobs",{expand:"true"}]],true);c.append(app.ni.element.h1({text:app.lang.string("share_backup","headlines")}));c.append(app.ni.element.a({id:"btnIncomingShare",text:app.lang.string("incoming_share","actions"),attributes:{href:"#"},classes:["ui-btn"]}));c.append(app.ni.element.a({id:"btnIncomingShares",text:app.lang.string("incoming_shares","actions"),attributes:{href:"#"},classes:["ui-btn"]}));d.done(function(i){var h=i.getRunningBackupjobs,j=i.getSuccessfulBackupjobs,f=i.getQueuedBackupjobs;c.append(app.ni.element.h2({text:app.lang.string("backup_to_share","headlines")}));var g=$(app.template.get("listA","responsive"));$.each(j,function(k,l){g.append(app.ni.list.thumbnail({href:"#",imageSrc:"",title:"Id: "+l.jobId,headline:l.jobTitle,text:l.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":l.jobId}}))});app.notify.loader.remove();c.append(g);g=$(app.template.get("listA","responsive"));$.each(f,function(k,l){g.append(app.ni.list.thumbnail({href:"#",imageSrc:"",title:"Id: "+l.jobId,headline:l.jobTitle,text:l.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":l.jobId}}))});app.notify.loader.remove();c.append(g);g=$(app.template.get("listA","responsive"));$.each(h,function(k,l){g.append(app.ni.list.thumbnail({href:"#",imageSrc:"",title:"Id: "+l.jobId,headline:l.jobTitle,text:l.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":l.jobId}}))});app.notify.loader.remove();c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(f){app.notify.loader.remove();alert("ws error: "+f)})},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(this.config.pageId).on("click","#btnIncomingShare",function(b){app.notify.dialog(app.lang.string("incoming_share","texts"),app.lang.string("incoming_share","headlines"),app.lang.string("incoming_share","headlines"),app.lang.string("accept","actions"),app.lang.string("decline","actions"),function(){alert("accept")},function(){alert("decline")})});$(this.config.pageId).on("click",".incoming_backup",function(b){app.notify.close();app.notify.dialog(app.lang.string("incoming_share","texts"),app.lang.string("incoming_share","headlines"),app.lang.string("incoming_share","headlines"),app.lang.string("accept","actions"),app.lang.string("decline","actions"),function(){alert("accept")},function(){alert("decline")})});$(this.config.pageId).on("click","#btnIncomingShares",function(b){app.notify.alert(app.ni.element.a({text:app.lang.string("incoming_share","actions"),attributes:{href:"#"},classes:["ui-btn","incoming_backup"]})+app.ni.element.a({text:app.lang.string("incoming_share","actions"),attributes:{href:"#"},classes:["ui-btn","incoming_backup"]})+app.ni.element.a({text:app.lang.string("incoming_share","actions"),attributes:{href:"#"},classes:["ui-btn","incoming_backup"]}),app.lang.string("incoming_shares","headlines"),app.lang.string("incoming_shares","headlines"),app.lang.string("finish","actions"),function(){alert("finish")})});$(this.config.pageId).on("click",".job",function(b){app.notify.dialog(app.lang.string("share_backup","texts")+app.ni.text.text({id:"txtEmail",placeholder:app.lang.string("email","labels"),label:true,labelText:app.lang.string("email","labels"),container:true}),app.lang.string("share","headlines"),app.lang.string("share","headlines"),app.lang.string("share","actions"),app.lang.string("cancel","actions"),function(){alert("accept")},function(){alert("decline")})})},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_start={config:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");var b=a.find("div[data-role=content]");b.append(app.ni.element.h1({text:"Sollte nicht angezeigt werden."}))},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(b,a){},pagebeforecreate:function(b,a){},pagebeforehide:function(b,a){},pagebeforeload:function(b,a){},pagebeforeshow:function(b,a){},pagechange:function(b,a){},pagechangefailed:function(b,a){},pagecreate:function(b,a){},pagehide:function(b,a){},pageinit:function(b,a){},pageload:function(b,a){},pageloadfailed:function(b,a){},pageremove:function(b,a){},pageshow:function(b,a){window.setTimeout(function(){if(app.sess.loggedIn()){app.help.navigation.redirect(app.config.startPage_loggedIn,"slideup")}else{app.help.navigation.redirect(app.config.startPage,"slideup")}},1000)}}};var page_usersettings={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("user_settings","headlines")}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_verify_email={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("verify_email","headlines")}));d.append(app.ni.element.p({text:app.lang.string("verify_email","texts")}));d.append(app.ni.text.text({id:"txtVerificationKey",placeholder:app.lang.string("verification_key","labels"),label:true,labelText:app.lang.string("verification_key","labels"),container:true}));d.append(app.ni.button.button({id:"btnVerifyEmail",placeholder:app.lang.string("verify_email","labels"),label:true,labelText:app.lang.string("verify_email","labels"),container:true,value:app.lang.string("verify_email","actions")}));d.append(app.ni.element.a({id:"lnkResendVerificationKey",text:app.lang.string("resend_verification_key","actions"),attributes:{href:"#"}}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);try{$(a).on("click","#btnVerifyEmail",function(){app.debug.alert("page_"+page_verify_email.config.name+" #btnVerifyEmail click",25);if((json=app.rc.getJson("verifyEmail",{verificationKey:a.find("#txtVerificationKey").val()}))!=false){if(json.username=="success"){app.store.localStorage.set("data-html5-themis-activated",true);$.mobile.changePage("start.html")}else{app.notify.alert(app.lang.string("bad_verify_email","notifications"),app.lang.string("verify_email","headlines"),app.lang.string("","headlines"))}}else{app.notify.alert(app.lang.string("bad_verify_email","notifications"),app.lang.string("verify_email","headlines"),app.lang.string("","headlines"))}});$(a).on("click","#lnkResendVerificationKey",function(){app.debug.alert("page_"+page_verify_email.config.name+" #lnkResendVerificationKey click",25);if((json=app.rc.getJson("newVerficiationEmail",{username:app.store.localStorage.get("data-html5-themis-username")}))!=false){if(json.username){app.notify.alert(app.lang.string("varification_key_resend","notifications"),app.lang.string("verify_email","headlines"),app.lang.string("verify_email","headlines"))}else{alert("Email nicht gesendet")}}});success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var page_zip_archive={config:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("zip_archive","headlines")}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var pages={config:null,pageNames:[],refreshInterval:null,history:[],constructor:function(){var a=$.Deferred();startup.addFunction("call plugins' page funtions",pages.callPluginsPagesLoaded,"");startup.addFunction("set page event",pages.setEvents,"");startup.addFunction("load all pages",pages.loadPages,"");startup.addFunction("vrify page names",pages.verifyPageNames,"");startup.addFunction("load all page configs",pages.loadPageConfig,"");startup.addFunction("load global page",globalLoader.AsyncScriptLoader,"../files/globalPage.js");a.resolve();return a.promise()},callPluginsPagesLoaded:function(){var a=$.Deferred();$.each(plugins.pluginNames,function(b,c){window["plugin_"+c].pagesLoaded()});a.resolve();return a.promise()},loadPageConfig:function(){var a=$.Deferred(),b;if(app.config.min){pages.config=config_json;a.resolve()}else{b=globalLoader.AsyncJsonLoader("../js/page/pages.json");b.done(function(c){pages.config=c;a.resolve()});b.fail(function(){a.reject()})}return a.promise()},verifyPageNames:function(){var a=$.Deferred();a.resolve();return a.promise()},loadPageConfiguration:function(b){var a=$.Deferred(),c;if(app.config.min){window["page_"+b].config=window["config_"+b];a.resolve()}else{c=globalLoader.AsyncJsonLoader("../js/page/page."+b+".json");c.done(function(d){window["page_"+b].config=d;a.resolve()});c.fail(function(){a.reject()})}return a.promise()},onPageLoaded:function(b){var a=$.Deferred(),d,c;if(window["page_"+b]==undefined){alert("Fatal error: Page class is not defined: page_"+b);return}c=pages.loadPageConfiguration(b);c.done(function(){if(window["page_"+b].config.name==undefined){alert("Fatal error: The property 'name' is not defined in JSON file: ../js/page."+b+".json");return false}if(window["page_"+b].config.shortname==undefined){alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/page."+b+".json");return false}d=window["page_"+b].constructor();d.done(function(){window["page_"+b]["config"]["page"]=b;window["page_"+b]["config"]["pageId"]="#"+b;app.addObject(window["page_"+b].config.name,window["page_"+b].functions);app.addObject(window["page_"+b].config.shortname,window["page_"+b].functions);pages.pageNames.push(b);a.resolve()});d.fail(function(){a.reject()})});c.fail(function(){a.reject()});return a.promise()},loadPages:function(){var a=$.Deferred(),d=Array(),c,e=Array(),b;$.each(pages.config,function(f,g){if(app.config.min){d.push(pages.onPageLoaded(f))}else{d.push(globalLoader.AsyncScriptLoader("../js/page/page."+f+".js"))}});c=$.when.apply($,d);if(app.config.min){c.done(function(){a.resolve()});c.fail(function(){a.reject()})}else{c.done(function(){$.each(pages.config,function(f,g){e.push(pages.onPageLoaded(f))});b=$.when.apply($,e);b.done(function(){pages.callPluginPageEventFunctions();a.resolve()});b.fail(function(){a.reject()})});c.fail(function(){a.reject()})}return a.promise()},callPluginPageEventFunctions:function(){var a=$.Deferred();$.each(plugins.pluginNames,function(b,c){app.debug.alert("pages.js ~ try to call: plugin_"+c+".pageSpecificEvents()",6);window["plugin_"+c].pageSpecificEvents()});a.resolve();return a.promise()},callPluginsPageFunctions:function(b){var a=$.Deferred();var c=true;$.each(plugins.pluginNames,function(d,e){window["plugin_"+e].afterHtmlInjectedBeforePageComputing(b)});a.resolve();return a.promise()},setEvents:function(){var a=$.Deferred();$(document).on("pagebeforechange",".app-page",function(b){app.debug.alert("pages.js jQuery mobile event: pagebeforechange for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagebeforechange")});$(document).on("pagebeforecreate",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagebeforecreate for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagebeforecreate");if($(this).attr("data-type")=="static"||$(this).attr("data-type")=="static-inline"){}else{if(window["page_"+$(this).attr("id")]==undefined){alert("-Fatal error: Can't find the page object: page_"+$(this).attr("id")+"; Please have a look to your pages.json file. You'll be redirected to the index.html page.");app.help.navigation.redirect("index.html")}else{}}});$(document).on("pagebeforehide",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagebeforehide for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagebeforehide")});$(document).on("pagebeforeload",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagebeforeload for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagebeforeload")});$(document).on("pagebeforeshow",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagebeforeshow for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagebeforeshow")});$(document).on("pagechange",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagechange for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagechange")});$(document).on("pagechangefailed",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagechangefailed for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagechangefailed")});$(document).on("pagecreate",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagecreate for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagecreate")});$(document).on("pagehide",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pagehide for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pagehide")});$(document).on("pageinit",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pageinit for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pageinit")});$(document).on("pageload",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pageload for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pageload")});$(document).on("pageloadfailed",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pageloadfailed for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pageloadfailed")});$(document).on("pageremove",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pageremove for: "+$(this).attr("id"),5);pages.eventFunctions.pageTypeSelector(b,$(this),"pageremove")});$(document).on("pageshow",".app-page",function(b){app.debug.alert("pages.js ~ jQuery mobile event: pageshow for: "+$(this).attr("id"),5);pages.history.push($(this).attr("id"));pages.eventFunctions.pageTypeSelector(b,$(this),"pageshow")});a.resolve();return a.promise()},eventFunctions:{pageTypeSelector:function(d,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.pageTypeSelector("+d+", "+a+", "+b+")",5);app.debug.alert("pages.js ~ PageId: "+a.attr("id"),5);if(a.attr("data-type")=="static"){app.debug.alert("pages.js ~ case: page type is static",5);pages.eventFunctions.everyPage[b](d,a);pages.eventFunctions.staticPage[b](d,a)}else{if(a.attr("data-type")=="static-inline"){app.debug.alert("pages.js ~ case: page type is inline-static",5);var c=a.clone();globalPage[b](d,a);pages.eventFunctions.everyPage[b](d,a);pages.eventFunctions.staticInlinePage[b](d,a,c)}else{if(window["page_"+a.attr("id")]==undefined){app.debug.alert("pages.js ~ case: page ist not defined in pages.json",5);alert("plugin.eventFunctions.pageTypeSelector() - Fatal error: Can't find the page object: page_"+a.attr("id")+"; Please have a look to your pages.json file.");app.help.navigation.redirect("index.html")}else{app.debug.alert("pages.js ~ case: page is a common lapstone page",5);if(window["page_"+a.attr("id")].config.isGlobalPage==true){globalPage[b](d,a)}else{if(window["page_"+a.attr("id")].config.isGlobalPage==undefined){globalPage[b](d,a)}}pages.eventFunctions.everyPage[b](d,a);pages.eventFunctions.lapstonePage[b](d,a)}}}},everyPage:{pagebeforechange:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforechange("+b+", "+a+")",5)},pagebeforecreate:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforecreate("+b+", "+a+")",5)},pagebeforehide:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforehide("+b+", "+a+")",5);app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagehide: clear refresh interval",5)},pagebeforeload:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforeload("+b+", "+a+")",5)},pagebeforeshow:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforeshow("+b+", "+a+")",5);app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforeshow: check refresh interval",5)},pagechange:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagechange("+b+", "+a+")",5)},pagechangefailed:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagechangefailed("+b+", "+a+")",5)},pagecreate:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagecreate("+b+", "+a+")",5)},pagehide:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagehide("+b+", "+a+")",5);app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagehide: clear page specific event delegates",5);$("#"+a.attr("id")).off();$(document).off("#"+a.attr("id"));app.debug.alert("pages.js ~ remove page from DOM: "+a.attr("id"),5);a.remove()},pageinit:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pageinit("+b+", "+a+")",5)},pageload:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pageload("+b+", "+a+")",5)},pageloadfailed:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pageloadfailed("+b+", "+a+")",5)},pageremove:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pageremove("+b+", "+a+")",5)},pageshow:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pageshow("+b+", "+a+")",5)}},staticPage:{pagebeforechange:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagebeforechange("+b+", "+a+")",5)},pagebeforecreate:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagebeforecreate("+b+", "+a+")",5);app.debug.alert("pages.js ~ do language string replacement",5);a.find("[data-language]").each(function(c,d){var e=$(this).attr("data-language").split(".");$(this).html(app.lang.string(e[1],e[0]))})},pagebeforehide:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagebeforehide("+b+", "+a+")",5)},pagebeforeload:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagebeforeload("+b+", "+a+")",5)},pagebeforeshow:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagechange("+b+", "+a+")",5)},pagechange:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagechange("+b+", "+a+")",5)},pagechangefailed:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagechangefailed("+b+", "+a+")",5)},pagecreate:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagecreate("+b+", "+a+")",5)},pagehide:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pagehide("+b+", "+a+")",5)},pageinit:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pageinit("+b+", "+a+")",5)},pageload:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pageload("+b+", "+a+")",5)},pageloadfailed:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pageloadfailed("+b+", "+a+")",5)},pageremove:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pageremove("+b+", "+a+")",5)},pageshow:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.staticPage.pageshow("+b+", "+a+")",5)}},staticInlinePage:{pagebeforechange:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagebeforechange("+c+", "+a+")",5)},pagebeforecreate:function(d,a,c){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagebeforecreate("+d+", "+a+")",5);app.debug.alert("pages.js ~ do language string replacement",5);c.find("[data-language]").each(function(e,f){var g=$(this).attr("data-language").split(".");$(this).html(app.lang.string(g[1],g[0]))});var b=c.html();a.find("div[data-role=content]").append(b);pages.callPluginsPageFunctions(a)},pagebeforehide:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagebeforehide("+c+", "+a+")",5)},pagebeforeload:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagebeforeload("+c+", "+a+")",5)},pagebeforeshow:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagechange("+c+", "+a+")",5)},pagechange:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagechange("+c+", "+a+")",5)},pagechangefailed:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagechangefailed("+c+", "+a+")",5)},pagecreate:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagecreate("+c+", "+a+")",5)},pagehide:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pagehide("+c+", "+a+")",5)},pageinit:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pageinit("+c+", "+a+")",5)},pageload:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pageload("+c+", "+a+")",5)},pageloadfailed:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pageloadfailed("+c+", "+a+")",5)},pageremove:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pageremove("+c+", "+a+")",5)},pageshow:function(c,a,b){app.debug.alert("pages.js ~ plugin.eventFunctions.staticInlinePage.pageshow("+c+", "+a+")",5)}},lapstonePage:{pagebeforechange:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforechange("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagebeforechange(b,a)},pagebeforecreate:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate("+b+", "+a+")",5);if(window["page_"+a.attr("id")].config.loginObligate&&!app.sess.loggedIn()){app.notify.add.alert(app.lang.string("login_obligate_text","app-session"),false,app.lang.string("login_obligate_headline","app-session"),app.lang.string("ok","actions"));app.store.localStorage.clearHtml5();$(document).off();app.help.navigation.redirect(app.config.startPage)}else{if(plugin_WebServiceClient.config.useKeepAlive){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: : WebServiceClient requires keepAlive",5);if(window["page_"+a.attr("id")].config.useKeepAlive!=undefined){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: Page has keepAlive configuration in page.json",5);if(window["page_"+a.attr("id")].config.useKeepAlive){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: global keepAlive is TRUE",5);if(plugin_WebServiceClient.config.keepAlive.isAlive){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: server isAlive",5);pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(b,a)}else{app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: no connection to server",5);app.debug.alert("pages.js ~ Can't load page because keepAlive failed. Check your connection. You'll be redirected to the index.html page.",60);app.help.navigation.redirect(app.config.badConnectionPage,"slideup")}}else{app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: Page has NO keepAlive entry in page.json file",5);pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(b,a)}}else{app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: Page does not require keepAlive",5);app.debug.alert("pages.js ~ No useKeepAlive entry in your page_"+a.attr("id")+".json. Please add it.",60);pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(b,a)}}else{app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforecreate() case: WebServiceClient does not require keepAlive",5);pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(b,a)}}},pagebeforecreate_createPage:function(b,a){app.debug.alert("pages.js ~ pages.eventFunctions.lapstonePage.pagebeforecreate_createPage("+b+", "+a+")",5);var d,c=null;window["page_"+a.attr("id")].events.pagebeforecreate(b,a);if(window["page_"+a.attr("id")].config.template!=undefined){if(typeof window["page_"+a.attr("id")].config.template=="string"&&window["page_"+a.attr("id")].config.template.length>1){app.template.overwrite("#"+a.attr("id"),window["page_"+a.attr("id")].config.template);c=app.template.elements(window["page_"+a.attr("id")].config.template);$.each(c,function(f,e){c[f]=a.find(e)});window["page_"+a.attr("id")].elements=c}}if(window["page_"+a.attr("id")].config.asyncLoading===true){app.debug.alert("pages.js ~ pages.eventFunctions.lapstonePage.pagebeforecreate_createPage page IS async",5);window["page_"+a.attr("id")].async.elements=window["page_"+a.attr("id")].elements;d=window["page_"+a.attr("id")].async.creator(a);d.done(function(e){window["page_"+a.attr("id")].async.result=e;window["page_"+a.attr("id")].async.done(a)});d.fail(function(e){window["page_"+a.attr("id")].async.result=e;window["page_"+a.attr("id")].async.fail(a)});d.always(function(){window["page_"+a.attr("id")].async.always(a)})}else{app.debug.alert("pages.js ~ pages.eventFunctions.lapstonePage.pagebeforecreate_createPage page IS NOT async",5);window["page_"+a.attr("id")].creator(a)}window["page_"+a.attr("id")].setEvents(a);app.debug.alert("pages.js ~ Call: pages.callPluginsPageFunctions()",5);pages.callPluginsPageFunctions(a);app.debug.alert("pages.js ~ add data- HTML Attributes",5);$.each(window["page_"+a.attr("id")].config,function(e,f){a.attr("data-"+e,f)})},pagebeforehide:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforehide("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagebeforehide(b,a);if(pages.refreshInterval!=null){clearInterval(pages.refreshInterval);pages.refreshInterval=null}},pagebeforeload:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagebeforeload("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagebeforeload(b,a)},pagebeforeshow:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagechange("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagebeforeshow(b,a);if(window["page_"+a.attr("id")].config.contentRefresh==true){app.debug.alert("pages.js ~ plugin.eventFunctions.everyPage.pagebeforeshow: set refresh interval every "+window["page_"+a.attr("id")].config.contentRefreshInterval+" ms",5);pages.refreshInterval=window.setInterval(function(){$("div[data-role=content]").children().fadeOut(500).promise().then(function(){$("div[data-role=content]").empty();window["page_"+a.attr("id")].creator(a)})},window["page_"+a.attr("id")].config.contentRefreshInterval)}},pagechange:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagechange("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagechange(b,a)},pagechangefailed:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagechangefailed("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagechangefailed(b,a)},pagecreate:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagecreate("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagecreate(b,a)},pagehide:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pagehide("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pagehide(b,a)},pageinit:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pageinit("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pageinit(b,a)},pageload:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pageload("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pageload(b,a)},pageloadfailed:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pageloadfailed("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pageloadfailed(b,a)},pageremove:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pageremove("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pageremove(b,a)},pageshow:function(b,a){app.debug.alert("pages.js ~ plugin.eventFunctions.lapstonePage.pageshow("+b+", "+a+")",5);window["page_"+a.attr("id")].events.pageshow(b,a)}}}};var config_activate_account={name:"activate_account",shortname:"activate_account",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_backup_edit={name:"backup_edit",shortname:"backup_edit",useKeepAlive:true,loginObligate:true};var config_backup_jobs={name:"backup_jobs",shortname:"backup_jobs",useKeepAlive:true,loginObligate:true,isGlobalPage:true,contentRefresh:true,contentRefreshInterval:30000};var config_backup_log={name:"backup_log",shortname:"backup_log",useKeepAlive:true,loginObligate:true};var config_badConnection={name:"badConnection",shortname:"badConnection",useKeepAlive:false,loginObligate:false,isGlobalPage:false};var config_create_backup_1={name:"create_backup_1",shortname:"create_backup_1",useKeepAlive:true,loginObligate:true};var config_create_backup_1_inputAuth={name:"create_backup_1_inputAuth",shortname:"create_backup_1_inputAuth",useKeepAlive:true,loginObligate:true};var config_create_backup_1_newSource={name:"create_backup_1_newSource",shortname:"create_backup_1_newSource",useKeepAlive:true,loginObligate:true};var config_create_backup_1_oAuthFinished={name:"create_backup_1_oAuthFinished",shortname:"create_backup_1_oAuthFinished",useKeepAlive:true,loginObligate:true};var config_create_backup_2={name:"create_backup_2",shortname:"create_backup_2",useKeepAlive:true,loginObligate:true};var config_create_backup_2_inputAuth={name:"create_backup_2_inputAuth",shortname:"create_backup_2_inputAuth",useKeepAlive:true,loginObligate:true};var config_create_backup_2_newSink={name:"create_backup_2_newSink",shortname:"create_backup_2_newSink",useKeepAlive:true,loginObligate:true};var config_create_backup_2_oAuthFinished={name:"create_backup_2_oAuthFinished",shortname:"create_backup_2_oAuthFinished",useKeepAlive:true,loginObligate:true};var config_create_backup_3={name:"create_backup_3",shortname:"create_backup_3",useKeepAlive:true,loginObligate:true};var config_create_backup_oAuthHandler={name:"create_backup_oAuthHandler",shortname:"create_backup_oAuthHandler",useKeepAlive:true,loginObligate:true};var config_index={name:"index",shortname:"index",useKeepAlive:false,loginObligate:false};var config_job_details={name:"job_details",shortname:"job_details",useKeepAlive:true,loginObligate:true};var config_login={name:"login",shortname:"login",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_logout={name:"logout",shortname:"logout",useKeepAlive:false,loginObligate:false};var config_register={name:"register",shortname:"register",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_register_1_terms={name:"register_1_terms",shortname:"register_1_terms",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_register_2_name={name:"register_2_name",shortname:"register_2_name",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_register_3_credentials={name:"register_3_credentials",shortname:"register_3_credentials",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_register_4_final={name:"register_4_final",shortname:"register_4_final",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_search={name:"search",shortname:"search",useKeepAlive:true,loginObligate:true};var config_settings={name:"settings",shortname:"settings",useKeepAlive:false,loginObligate:false};var config_share_backup={name:"share_backup",shortname:"share_backup",useKeepAlive:true,loginObligate:true};var config_start={name:"start",shortname:"start",useKeepAlive:true,loginObligate:false,isGlobalPage:false};var config_usersettings={name:"usersettings",shortname:"usersettings",useKeepAlive:true,loginObligate:true};var config_verify_email={name:"verify_email",shortname:"verify_email",useKeepAlive:true,loginObligate:true};var config_zip_archive={name:"zip_archive",shortname:"zip_archive",useKeepAlive:true,loginObligate:true};var config_json={activate_account:true,backup_edit:true,backup_jobs:true,backup_log:true,badConnection:true,create_backup_1_inputAuth:true,create_backup_1_newSource:true,create_backup_1_oAuthFinished:true,create_backup_1:true,create_backup_2_inputAuth:true,create_backup_2_newSink:true,create_backup_2_oAuthFinished:true,create_backup_2:true,create_backup_3:true,create_backup_oAuthHandler:true,index:true,job_details:true,login:true,logout:true,register_1_terms:true,register_2_name:true,register_3_credentials:true,register_4_final:true,register:true,search:true,settings:true,share_backup:true,start:true,usersettings:true,verify_email:true,zip_archive:true};/*
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

var page_activate_account = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});
		var content = container.find('div[data-role=content]');
		content.append(app.ni.element.h1({
			"text" : app.lang.string("activate_account", "headlines")
		}));
		
		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));

	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_activate_account={
	"name":"activate_account",
	"shortname":"activate_account",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_backup_edit = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

			var promise = app.rc.getJson("getBackupjob", {
				"jobId" : app.store.localStorage.get("data-html5-themis-backupid"),
				"expandUser" : false,
				"expandToken" : false,
				"expandProfiles" : false,
				"expandProtocol" : false
			}, true);

			promise.done(function(resultObject) {
				//alert(JSON.stringify(resultObject));

				content.append(app.ni.element.h1({
					"text" : app.lang.string("backup_edit", "headlines") + " - " + resultObject.jobTitle
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_job_status", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : resultObject.jobStatus
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_hold", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : resultObject.onHold
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_schedule", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : resultObject.schedule
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_created", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : date('F j, Y, g:i a', resultObject.created/1000)
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_modified", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : date('F j, Y, g:i a', resultObject.modified/1000)
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_start", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : date('F j, Y, g:i a', resultObject.start/1000)
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_next", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : date('F j, Y, g:i a', resultObject.next/1000)
				}));

				content.append(app.ni.element.h2({
					"text" : app.lang.string("backup_delay", "headlines")
				}));

				content.append(app.ni.element.p({
					"text" : resultObject.delay
				}));
				
				content.append(app.ni.element.a({
					"id" : "btnNewBackup",
					"text" : app.lang.string("backup_log", "actions"),
					"attributes" : {
						"href" : "backup_log.html"
					},
					"classes" : [ 'ui-btn' ]
				}));

				app.notify.loader.remove();

				app.help.jQM.enhance(content);
			});

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_backup_edit={
	"name":"backup_edit",
	"shortname":"backup_edit",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_backup_jobs = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		/*
		 * var promise = app.rc.getJson("getBackupjobsPaused", { "expand" :
		 * "true" }, true);
		 */

		var promise = app.rc.getJson([ [ "getBackupjobsActive", {
			"expand" : "true"
		} ], [ "getBackupjobsPaused", {
			"expand" : "true"
		} ], [ "getBackupjobsCreated", {
			"expand" : "true"
		} ], [ "getBackupjobsNeedUserInteraction", {
			"expand" : "true"
		} ] ], true, 3);

		promise
				.done(function(resultObject) {
					var activeBackupjobs = resultObject["getBackupjobsActive"], needUserInteraction = resultObject["getBackupjobsNeedUserInteraction"], pausedBackupjobs = resultObject["getBackupjobsPaused"], createdBackupjobs = resultObject["getBackupjobsCreated"];

					// alert(JSON.stringify(resultObject));
					content.append(app.ni.element.h1({
						"text" : app.lang.string("backup_jobs", "headlines")
					}));

					content.append(app.ni.element.a({
						"id" : "btnNewBackup",
						"text" : app.lang.string("create_backup", "actions"),
						"attributes" : {
							"href" : "create_backup_1.html"
						},
						"classes" : [ 'ui-btn', 'ui-btn-inline' ]
					}));

					content.append(app.ni.element.a({
						"id" : "btnShareAll",
						"text" : app.lang.string("share all", "page.backup_jobs"),
						"classes" : [ 'ui-btn', 'ui-btn-inline' ]
					}));

					content.append(app.ni.element.a({
						"id" : "btnShareAllFromNow",
						"text" : app.lang.string("share all from now", "page.backup_jobs"),
						"classes" : [ 'ui-btn', 'ui-btn-inline' ]
					}));

					content.append(app.ni.element.h2({
						"text" : app.lang.string("paused backup jobs", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					// alert(JSON.stringify(resultObject));
					var list = $(app.template.get("listA", "responsive"));
					$.each(pausedBackupjobs, function(index, jobJson) {
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : jobJson.jobStatus,
							headline : jobJson.jobTitle,
							text : "",
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});

					app.notify.loader.remove();
					content.append(list);

					content.append(app.ni.element.h2({
						"text" : app.lang.string("created backup jobs", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					list = $(app.template.get("listA", "responsive"));
					$.each(createdBackupjobs, function(index, jobJson) {
						// alert(JSON.stringify(jobJson));
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : "Id: " + jobJson.jobId,
							headline : jobJson.jobTitle,
							text : jobJson.jobTitle,
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});
					content.append(list);

					content.append(app.ni.element.h2({
						"text" : app.lang.string("active backup jobs", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					list = $(app.template.get("listA", "responsive"));
					$.each(activeBackupjobs, function(index, jobJson) {
						// alert(JSON.stringify(jobJson));
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : "Id: " + jobJson.jobId,
							headline : jobJson.jobTitle,
							text : jobJson.jobTitle,
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});
					content.append(list);

					content.append(app.ni.element.h2({
						"text" : app.lang.string("need user interaction", "headlines"),
						"styles" : {
							"clear" : "both"
						}
					}));

					list = $(app.template.get("listA", "responsive"));
					$.each(needUserInteraction, function(index, jobJson) {
						// alert(JSON.stringify(jobJson));
						list.append(app.ni.list.thumbnail({
							href : "#",
							imageSrc : app.img.getUrlById("job_" + jobJson.status),
							title : "Id: " + jobJson.jobId,
							headline : jobJson.jobTitle,
							text : jobJson.jobTitle,
							classes : [ 'job' ],
							attributes : {
								"data-html5-themis-backupid" : jobJson.jobId,
								"data-html5-themis-backuptitle" : jobJson.jobTitle
							}
						}));
					});
					content.append(list);

					app.notify.loader.remove();
					app.help.jQM.enhance(content);
				});

		promise.fail(function(error) {
			app.notify.loader.remove();
			alert("ws error: " + error);
		});

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_backup_jobs.config.pageId).on("click", ".job", function(event) {
			var title = $(this).attr("data-html5-themis-backuptitle");
			app.notify.alert(page_backup_jobs.functions.getAlertContent(), title, false, app.lang.string("backup job alert - go back", "page.backup_jobs"), false, 10)
		});

		$(page_backup_jobs.config.pageId).on("click", "#btnBackupjobDetails", function(event) {
			app.nav.redirect("backup_edit.html", "none");
		});

		$(page_backup_jobs.config.pageId).on("click", "#btnSharBackupjob", function(event) {
			var title = app.store.localStorage.get("data-html5-themis-backuptitle");
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getSharingInputs(), title, false, app.lang.string("share backup", "page.backup_jobs"), app.lang.string("don't share item", "page.backup_jobs"), function() {
					// share item

					var webservice, start, end;

					if ($("#selFriend option:selected").hasClass("friend")) {
						alert("friend");
						webservice = "shareBackup";
					} else if ($("#selFriend option:selected").hasClass("heritage")) {
						webservice = "shareBackupHeritage";
					}

					start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
					end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

					app.rc.getJson(webservice, {
						withUserId : parseInt($("#selFriend option:selected").val()),
						name : $("#txtShareName").val(),
						policyValue : app.store.localStorage.get("data-html5-themis-backupid"),
						description : $("#txtShareDescription").val(),
						lifespanstart : start,
						lifespanend : end
					}, true).done(function() {
						alert("done")
					}).fail(function() {
						alert("fail")
					});
				}, function() {
					// don't share item
				}, 50);
			});
		});

		$(page_backup_jobs.config.pageId).on(
				"click",
				"#btnShareAllFromNow",
				function(event) {
					app.notify.close.all().done(
							function() {
								app.notify.dialog(page_search.singleResult.getSharingInputs(), app.lang.string("share all from now", "page.backup_jobs"), false, app.lang.string("share backup", "page.backup_jobs"), app.lang.string("don't share item",
										"page.backup_jobs"), function() {
									// share item

									var webservice;

									if ($("#selFriend option:selected").hasClass("friend"))
										webservice = "shareAllFromNow";
									else if ($("#selFriend option:selected").hasClass("heritage"))
										webservice = "shareAllFromNowHeritage";

									app.rc.getJson(webservice, {
										withUserId : parseInt($("#selFriend option:selected").val()),
										name : $("#txtShareName").val(),
										policyValue : "",
										description : $("#txtShareDescription").val()
									}, true).done(function() {
										alert("done")
									}).fail(function() {
										alert("fail")
									});
								}, function() {
									// don't share item
								}, 50);
							});
				});

		$(page_backup_jobs.config.pageId).on(
				"click",
				"#btnShareAll",
				function(event) {
					app.notify.close.all().done(
							function() {
								app.notify.dialog(page_search.singleResult.getSharingInputs(), app.lang.string("share all from now", "page.backup_jobs"), false, app.lang.string("share backup", "page.backup_jobs"), app.lang.string("don't share item",
										"page.backup_jobs"), function() {
									// share item
									var webservice, start, end;

									if ($("#selFriend option:selected").hasClass("friend"))
										webservice = "shareAll";
									else if ($("#selFriend option:selected").hasClass("heritage"))
										webservice = "shareAllHeritage";

									start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
									end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

									app.rc.getJson(webservice, {
										withUserId : parseInt($("#selFriend option:selected").val()),
										name : $("#txtShareName").val(),
										policyValue : "",
										description : $("#txtShareDescription").val(),
										lifespanstart : start,
										lifespanend : end
									}, true).done(function() {
										alert("done")
									}).fail(function() {
										alert("fail")
									});
								}, function() {
									// don't share item
								}, 50);
							});
				});

	},

	functions : {

		getAlertContent : function() {
			var div = app.ni.element.div({
				classes : [ 'job-alert-div' ]
			});

			div.append(app.ni.element.a({
				id : "btnBackupjobDetails",
				text : app.lang.string("backupjob details", "page.backup_jobs"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			div.append(app.ni.element.a({
				id : "btnSharBackupjob",
				text : app.lang.string("share backupjob", "page.backup_jobs"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			return div;
		}
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_backup_jobs={
	"name": "backup_jobs",
	"shortname": "backup_jobs",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": true,
	"contentRefreshInterval": 30000,
	"asyncLoading": false
};/*
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

var page_backup_log = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);

			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

			var promise = app.rc.getJson("getBackupjob", {
				"jobId" : app.store.localStorage.get("data-html5-themis-backupid"),
				"expandUser" : false,
				"expandToken" : false,
				"expandProfiles" : false,
				"expandProtocol" : true
			}, true);

			promise.done(function(resultObject) {
				//alert(JSON.stringify(resultObject));

				content.append(app.ni.element.h1({
					"text" : app.lang.string("backup_log", "headlines")
				}));
				
				content.append(app.ni.element.a({
					"id" : "btnBackupDetails",
					"text" : app.lang.string("backup_edit", "actions"),
					"attributes" : {
						"href" : "backup_edit.html"
					},
					"classes" : [ 'ui-btn' ]
				}));
				
				app.notify.loader.remove();
				app.help.jQM.enhance(content);
			});

			promise.fail(function(error) {
				app.notify.loader.remove();
				alert("ws error: " + error);
			});

			success = true;
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},



	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_backup_log={
	"name":"backup_log",
	"shortname":"backup_log",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_badConnection = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});
		var content = container.find('div[data-role=content]');
		content.append(app.ni.element.h1({
			"text" : "Bad Connection"
		}));
		content.append(app.ni.element.p({
			"text" : "Check your internet connection. You will be redirected after your connection is back again."
		}));

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},



	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(this.config.pageId).on("connectionisalive", function(event) {
			app.help.navigation.back();
		});
	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_badConnection={
	"name":"badConnection",
	"shortname":"badConnection",
	"template": "",
	"useKeepAlive": false,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_1 = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		var promise = app.rc.getJson("getSources", {
			"expandConfigs" : false
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_1"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_1")
			}));
			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));
			$.each(resultObject, function(index, pluginJson) {
				// alert(JSON.stringify(pluginJson.authDataDescription.properties));
				var authRequired = null, authType = null, pluginId = pluginJson.pluginId, redirectUrl = null;
				// configuration type
				if (pluginJson.authDataDescription != undefined) {
					// needs to authenticate
					authRequired = true;
					authType = pluginJson.authDataDescription.configType;
					if (authType == "oauth") {
						redirectUrl = pluginJson.authDataDescription.redirectURL;
						app.sess.setObject(pluginId, pluginJson.authDataDescription.properties, "session_CreateSource");
					}
				} else {
					authRequired = false;
				}
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("source_" + pluginId),
					title : "",
					headline : pluginJson.title,
					text : pluginJson.description,
					classes : [ 'source', 'authRequired-' + authRequired ],
					attributes : {
						"data-html5-authRequired" : authRequired,
						"data-html5-oAuthUrl" : redirectUrl,
						"data-html5-pluginId" : pluginId,
						"data-html5-source-pluginId" : pluginId,
						"data-html5-authType" : authType,
						"data-html5-destinationType" : "source"
					}
				}));
			});
			content.append(list);

			app.notify.loader.remove();

			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_1.config.pageId).on("click", ".authRequired-false", function(event) {
			app.help.navigation.redirect("create_backup_1_newSource.html", "slide");
		});
		$(page_create_backup_1.config.pageId).on("click", ".authRequired-true", function(event) {
			var callerElement = $(this).clone(), promise;//, authDataList;
			// alert(callerElement.html());
			// get existing auths
			promise = app.rc.getJson("getAuthdataForPlugin", {
				"pluginId" : callerElement.attr("data-html5-pluginId")
			}, true);

			promise.fail(function() {
				alert("ws error");
			});

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));

				authDataList = app.ni.element.ul({
					"attributes" : {
						"data-role" : "listview",
						"data-inset" : "true"
					}
				});
				$.each(resultObject, function(key, currentAuthdata) {
					authDataList.append(app.ni.element.li({
						"text" : app.ni.element.a({
							"text" : currentAuthdata.name,
							"attributes" : {
								"href" : "create_backup_1_newSource.html",
								"data-transition" : "slide",
								"data-html5-authdataId" : currentAuthdata.id,
								"data-html5-authdataName" : currentAuthdata.name,
							},
							"classes" : []
						})
					}));

				});
				app.notify.dialog(authDataList, app.lang.string("choose_profile", "headlines"), false, app.lang.string("new_source_profile", "actions"), app.lang.string("cancel", "actions"), function(popup) {
					window.setTimeout(function() {
						switch (callerElement.attr("data-html5-authType")) {
						case 'oauth':
							var url = callerElement.attr("data-html5-oAuthUrl");
							// alert(url);
							var promise = null;
							// alert(url);
							promise = app.oa.generic(url);

							// app.store.localStorage.set("data-html5-themis-pluginid",
							// $(this).attr("data-html5-pluginId"));

							promise.done(function(oAuthQuery) {
								// alert(oAuthQuery);
								app.store.localStorage.set("data-html5-oAuthQuery", oAuthQuery);
								app.help.navigation.redirect("create_backup_1_oAuthFinished.html", "slide");

							});

							promise.fail(function(error) {
								alert("oAuth error: " + error);
							});

							break;

						case 'input':
							app.help.navigation.redirect("create_backup_1_inputAuth.html", "slide");
							break;
						default:
							alert("not implemented");
						}
					}, 10);
				}, function(popup) {
					;
				}, 100);
			});

		});

	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_create_backup_1={
	"name": "create_backup_1",
	"shortname": "create_backup_1",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_1_inputAuth = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

		var promise = app.rc.getJson("getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
			"expandConfigs" : true
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_1_inputAuth"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_1_inputAuth")
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSource",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				}
			});

			form.append(app.ni.text.text({
				"id" : "txtName",
				"name" : "title",
				"placeholder" : app.lang.string("title", "labels"),
				"label" : true,
				"labelText" : app.lang.string("title", "labels"),
				"container" : true,
				"attributes" : {
					"value" : app.lang.string("new authentication", "page.create_backup") + ": " + app.store.localStorage.get("data-html5-pluginId")
				}
			}));
			if (resultObject.authDataDescription != undefined) {
				$.each(resultObject.authDataDescription.requiredInputs, function(key, value) {
					form.append(app.bmu.print.formElement(value, resultObject.pluginId));
				});
			}

			form.append(app.ni.button.button({
				"id" : "btnAuthenticate",
				"name" : "btnAuthenticate",
				"placeholder" : app.lang.string("create_authdata", "labels"),
				"label" : false,
				"labelText" : app.lang.string("create_authdata", "labels"),
				"container" : false,
				"value" : app.lang.string("create_authdata", "actions")
			}));

			content.append(form);
			app.notify.loader.remove();
			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_1_inputAuth.config.pageId).on("click", "#btnAuthenticate", function(event) {
			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));
			var formObject = app.help.form.serialize($("#frmCreateSource")), promise;
			delete formObject.btnAuthenticate;
			delete formObject.title;
			//alert(JSON.stringify(formObject));

			promise = app.rc.getJson("createAuthdata", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"name" : container.find("#txtName").val(),
				"properties" : formObject
			}, true);

			promise.done(function(resultObject) {
				//alert(JSON.stringify(resultObject));
				// app.store.localStorage.set("data-html5-themis-source-profileid",
				// );
				app.store.localStorage.set("data-html5-authdataId", resultObject.id);
				app.store.localStorage.set("data-html5-authdataName", resultObject.name);
				app.notify.loader.remove();
				app.help.navigation.redirect("create_backup_1_newSource.html", "slide");
			});

			promise.fail(function() {
				alert(" WS Error")
			});
		});
	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_create_backup_1_inputAuth={
	"name":"create_backup_1_inputAuth",
	"shortname":"create_backup_1_inputAuth",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_1_newSource = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		var promise, hasOptions = null, hasProperties = null;
		if (app.store.localStorage.get("data-html5-authrequired")) {
			promise = app.rc.getJson("getPluginOptions", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"authData" : app.store.localStorage.get("data-html5-authdataId"),
				"expandConfigs" : true
			}, true);
		} else {
			promise = app.rc.getJson("getPlugin", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"expandConfigs" : true
			}, true);
		}
		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_1_newSource"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_1_newSource")
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSource",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				},
				"label" : false
			});

			if (resultObject.propertiesDescription != undefined) {
				if (resultObject.propertiesDescription.length > 0) {
					$.each(resultObject.propertiesDescription, function(key, value) {
						form.append(app.bmu.print.formElement(value, resultObject.pluginId));
					});
					hasProperties = true;
				} else {
					hasProperties = false;
				}
			}

			if (resultObject.availableOptions != undefined) {
				if (resultObject.availableOptions.length > 0) {
					var select = $(app.ni.select.multiple({
						"id" : "cboOptions",
						"name" : "options",
						"label" : true,
						"labelText" : app.lang.string("selectOptionsLabel", "page.create_backup_1_newSource"),
						"attributes" : {
							"data-native-menu" : false
						}
					}));
					select.append(app.ni.select.option({
						"text" : app.lang.string("selectOptions", "page.create_backup_1_newSource")
					}));
					$.each(resultObject.availableOptions, function(key, value) {
						select.append(app.ni.select.option({
							"text" : value,
							"attributes" : {
								"value" : value
							}
						}));
					});

					form.append(select);
					hasOptions = true;
				} else {
					hasOptions = false;
				}
			}

			form.append(app.ni.button.button({
				"id" : "btnCreate",
				"name" : "btnCreate",
				"placeholder" : app.lang.string("create_source", "labels"),
				"label" : true,
				"labelText" : app.lang.string("create_source", "labels"),
				"container" : true,
				"value" : app.lang.string("create_source", "actions")
			}));

			if (hasProperties || hasOptions) {
				content.append(form);
				app.notify.loader.remove();
				app.help.jQM.enhance(content);
			} else {
				page_create_backup_1_newSource.createSinkProfile([], {});
			}
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});
	},

	createSinkProfile : function(options, properties) {
		if (app.store.localStorage.get("data-html5-authRequired")) {
			promise = app.rc.getJson("createSourceProfile", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"authData" : {
					"id" : app.store.localStorage.get("data-html5-authdataId")
				},
				"properties" : properties,
				"options" : options
			}, true);
		} else {
			promise = app.rc.getJson("createSourceProfile", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				// "authData" : 1,
				"properties" : properties,
				"options" : options
			}, true);
		}

		promise.done(function(resultObject) {
			// alert(JSON.stringify(resultObject));
			app.store.localStorage.set("data-html5-themis-source-profileid", resultObject.profileId);
			app.notify.loader.remove();
			app.help.navigation.redirect("create_backup_2.html", "slide");
		});

		promise.fail(function() {
			alert("Quelle nicht angelegt. WS Error")
		});
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_1_newSource.config.pageId).on("click", "#btnCreate", function() {
			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

			var formObject = app.help.form.serialize($("#frmCreateSource")), promise, options = Array();
			delete formObject.btnCreate;

			if (formObject.options != undefined) {
				options = formObject.options;
				delete formObject.options;

			}

			page_create_backup_1_newSource.createSinkProfile(options, formObject);

		});

	},

	functions : {},

	

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_create_backup_1_newSource={
	"name":"create_backup_1_newSource",
	"shortname":"create_backup_1_newSource",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_1_oAuthFinished = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		if (app.config.apacheCordova === true) {
			console.log("todo");
			app.store.localStorage.set("data-html5-oAuthQuery", app.store.localStorage.get("data-html5-oAuthQuery").split('&')[0]);
		} else {
			try {
				app.store.localStorage.set("data-html5-oAuthQuery", window.location.href.split('?')[1].split('&')[0]);
			} catch (e) {
				app.store.localStorage.set("data-html5-oAuthQuery", "");
			}
		}
		// alert("oauth token: " +
		// app.store.localStorage.get("data-html5-oAuthToken"));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("headline", "page.create_backup_1_oAuthFinished"),
			"styles" : {
				"clear" : "both"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("description", "page.create_backup_1_oAuthFinished")
		}));

		content.append(app.ni.text.text({
			"id" : "txtName",
			"placeholder" : app.lang.string("authdata_name", "labels"),
			"label" : true,
			"labelText" : app.lang.string("authdata_name", "labels"),
			"container" : true,
			"attributes" : {
				"value" : app.lang.string("new authentication", "page.create_backup") + ": " + app.store.localStorage.get("data-html5-pluginId")
			}
		}));

		content.append(app.ni.button.button({
			"id" : "btnCreateAuthData",
			"placeholder" : app.lang.string("create_authdata", "labels"),
			"label" : true,
			"labelText" : app.lang.string("create_authdata", "labels"),
			"container" : true,
			"value" : app.lang.string("create_authdata", "actions")
		}));

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(page_create_backup_1_oAuthFinished.config.pageId).on("click", "#btnCreateAuthData", function(event) {
			var properties, storedProperties, promise;
			properties = {
				"oAuthQuery" : app.store.localStorage.get("data-html5-oAuthQuery")
			};
			storedProperties = app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"), "session_CreateSource");

			for ( var key in storedProperties) {
				properties[key] = storedProperties[key];
			}

			// alert(JSON.stringify(properties))

			promise = app.rc.getJson("createAuthdata", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"name" : $("#txtName").val(),
				"properties" : properties
			}, true);

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));
				app.store.localStorage.set("data-html5-authdataId", resultObject.id);
				app.help.navigation.redirect("create_backup_1_newSource.html", "slide");
			});

			promise.fail(function(error) {
				alert("ws error");
			});
		});
	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_create_backup_1_oAuthFinished={
	"name":"create_backup_1_oAuthFinished",
	"shortname":"create_backup_1_oAuthFinished",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_2 = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		var promise = app.rc.getJson("getSinks", {
			"expandConfigs" : true
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_2"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_2")
			}));
			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));
			$.each(resultObject, function(index, pluginJson) {
				// alert(JSON.stringify(pluginJson));
				var authRequired = null, authType = null, pluginId = pluginJson.pluginId, redirectUrl = null;
				// configuration type
				if (pluginJson.authDataDescription != undefined) {
					// needs to authenticate
					authRequired = true;
					authType = pluginJson.authDataDescription.configType;
					if (authType == "oauth") {
						redirectUrl = pluginJson.authDataDescription.redirectURL;
						app.sess.setObject(pluginId, pluginJson.authDataDescription.properties, "session_CreateSink");
					}
				} else {
					authRequired = false;
				}
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("sink_" + pluginId),
					title : "",
					headline : pluginJson.title,
					text : pluginJson.description,
					classes : [ 'source', 'authRequired-' + authRequired ],
					attributes : {
						"data-html5-authRequired" : authRequired,
						"data-html5-oAuthUrl" : redirectUrl,
						"data-html5-pluginId" : pluginId,
						"data-html5-sink-pluginId" : pluginId,
						"data-html5-authType" : authType,
						"data-html5-destinationType" : "sink"
					}
				}));
			});
			content.append(list);

			app.notify.loader.remove();

			app.help.jQM.enhance(content);
		});

		success = true;

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		// just another dirty part
		$(page_create_backup_2.config.pageId).on("click", ".authRequired-false", function(event) {
			app.help.navigation.redirect("create_backup_1_newSource.html", "slide");
		});

		$(page_create_backup_2.config.pageId).on("click", ".authRequired-true", function(event) {

			var callerElement = $(this).clone(), promise, authDataList;

			// get existing auths
			promise = app.rc.getJson("getAuthdataForPlugin", {
				"pluginId" : callerElement.attr("data-html5-pluginId")
			}, true);

			promise.fail(function() {
				alert("ws error");
			});

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));

				authDataList = app.ni.element.ul({
					"attributes" : {
						"data-role" : "listview",
						"data-inset" : "true"
					}
				});
				$.each(resultObject, function(key, currentAuthdata) {
					authDataList.append(app.ni.element.li({
						"text" : app.ni.element.a({
							"text" : currentAuthdata.name,
							"attributes" : {
								"href" : "create_backup_2_newSink.html",
								"data-transition" : "slide",
								"data-html5-authdataId" : currentAuthdata.id,
								"data-html5-authdataName" : currentAuthdata.name,
							},
							"classes" : []
						})
					}));

				});

				app.notify.dialog(authDataList, app.lang.string("choose_profile", "headlines"), false, app.lang.string("new_source_profile", "actions"), app.lang.string("cancel", "actions"), function(popup) {
					window.setTimeout(function() {
						switch (callerElement.attr("data-html5-authType")) {
						case 'oauth':
							var url = callerElement.attr("data-html5-oAuthUrl");
							var promise = null;
							// alert(url);
							promise = app.oa.generic(url);

							// app.store.localStorage.set("data-html5-themis-pluginid",
							// $(this).attr("data-html5-pluginId"));

							promise.done(function(oAuthQuery) {
								// alert(oAuthQuery);
								app.store.localStorage.set("data-html5-oAuthQuery", oAuthQuery);
								app.help.navigation.redirect("create_backup_2_oAuthFinished.html", "slide");

							});

							promise.fail(function(error) {
								alert("oAuth error: " + error);
							});

							break;

						case 'input':
							app.help.navigation.redirect("create_backup_2_inputAuth.html", "slide");
							break;
						default:
							alert("not implemented");
						}

					}, 10);
				}, function(popup) {
					;
				}, 0);

				// alert($(this).attr("data-html5-oAuthUrl"));

			});
		});

	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_create_backup_2={
	"name":"create_backup_2",
	"shortname":"create_backup_2",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_2_inputAuth = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

		var promise = app.rc.getJson("getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
			"expandConfigs" : true
		}, true);

		promise.done(function(resultObject) {
			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_2_inputAuth"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_2_inputAuth")
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSource",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				}
			});

			form.append(app.ni.text.text({
				"id" : "txtName",
				"name" : "title",
				"placeholder" : app.lang.string("title", "labels"),
				"label" : true,
				"labelText" : app.lang.string("title", "labels"),
				"container" : true,
				"attributes" : {
					"value" : app.lang.string("new authentication", "page.create_backup") + ": " + app.store.localStorage.get("data-html5-pluginId")
				}
			}));
			if (resultObject.authDataDescription != undefined) {
				$.each(resultObject.authDataDescription.requiredInputs, function(key, value) {
					form.append(app.bmu.print.formElement(value, resultObject.pluginId));
				});
			}

			form.append(app.ni.button.button({
				"id" : "btnAuthenticate",
				"name" : "btnAuthenticate",
				"placeholder" : app.lang.string("create_authdata", "labels"),
				"label" : false,
				"labelText" : app.lang.string("create_authdata", "labels"),
				"container" : false,
				"value" : app.lang.string("create_authdata", "actions")
			}));

			content.append(form);
			app.notify.loader.remove();
			app.help.jQM.enhance(content);
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_2_inputAuth.config.pageId).on("click", "#btnAuthenticate", function(event) {
			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));
			var formObject = app.help.form.serialize($("#frmCreateSource")), promise;
			// alert(JSON.stringify(formObject));
			delete formObject.btnAuthenticate;
			delete formObject.title;

			promise = app.rc.getJson("createAuthdata", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"name" : container.find("#txtName").val(),
				"properties" : formObject
			}, true);

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));
				// app.store.localStorage.set("data-html5-themis-source-profileid",
				// );
				app.store.localStorage.set("data-html5-authdataId", resultObject.id);
				app.store.localStorage.set("data-html5-authdataName", resultObject.name);
				app.notify.loader.remove();
				app.help.navigation.redirect("create_backup_2_newSink.html", "slide");
			});

			promise.fail(function() {
				alert(" WS Error...geht ned")
			});
		});

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_create_backup_2_inputAuth={
	"name":"create_backup_2_inputAuth",
	"shortname":"create_backup_2_inputAuth",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_2_newSink = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		var promise, hasOptions = null, hasProperties = null;

		if (app.store.localStorage.get("data-html5-authrequired")) {
			promise = app.rc.getJson("getPluginOptions", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"authData" : app.store.localStorage.get("data-html5-authdataId"),
				"expandConfigs" : true
			}, true);
		} else {
			promise = app.rc.getJson("getPlugin", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"expandConfigs" : true
			}, true);
		}
		promise.done(function(resultObject) {

			content.append(app.ni.element.h1({
				"text" : app.lang.string("headline", "page.create_backup_2_newSink"),
				"styles" : {
					"clear" : "both"
				}
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("description", "page.create_backup_2_newSink")
			}));

			var form = app.ni.form.form({
				"id" : "frmCreateSink",
				"attributes" : {
					"action" : "#",
					"data-ajax" : "false"
				},
				"label" : false
			});

			if (resultObject.propertiesDescription != undefined) {
				if (resultObject.propertiesDescription.length > 0) {
					$.each(resultObject.propertiesDescription, function(key, value) {
						form.append(app.bmu.print.formElement(value, resultObject.pluginId));
					});
					hasProperties = true;
				} else {
					hasProperties = false;
				}
			}

			if (resultObject.availableOptions != undefined) {
				if (resultObject.availableOptions.length > 0) {
					var select = $(app.ni.select.multiple({
						"id" : "cboOptions",
						"name" : "options",
						"label" : true,
						"labelText" : app.lang.string("selectOptionsLabel", "page.create_backup_2_newSink"),
						"attributes" : {
							"data-native-menu" : false
						}
					}));
					select.append(app.ni.select.option({
						"text" : app.lang.string("selectOptions", "page.create_backup_2_newSink")
					}));
					$.each(resultObject.availableOptions, function(key, value) {
						select.append(app.ni.select.option({
							"text" : value,
							"attributes" : {
								"value" : value
							}
						}));
					});

					form.append(select);
					// defined by developer team: a sink profile has no options
					// hasOptions = true;
					hasOptions = false;
				} else {
					hasOptions = false;
				}
			}

			form.append(app.ni.button.button({
				"id" : "btnCreate",
				"placeholder" : app.lang.string("create_sink", "labels"),
				"label" : true,
				"labelText" : app.lang.string("create_sink", "labels"),
				"container" : true,
				"value" : app.lang.string("create_sink", "actions")
			}));

			if (hasProperties || hasOptions) {
				content.append(form);
				app.notify.loader.remove();
				app.help.jQM.enhance(content);
			} else {
				page_create_backup_2_newSink.createSinkProfile([], {});
			}
		});

		promise.fail(function(resultObject) {
			alert("ws error");
		});

		return true;
	},

	createSinkProfile : function(options, properties) {
		if (app.store.localStorage.get("data-html5-authRequired")) {
			promise = app.rc.getJson("createSinkProfile", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"authData" : {
					"id" : app.store.localStorage.get("data-html5-authdataId")
				},
				"properties" : properties,
				"options" : options
			}, true);
		} else {
			promise = app.rc.getJson("createSinkProfile", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				// "authData" : 1,
				"properties" : properties,
				"options" : options
			}, true);
		}

		promise.done(function(resultObject) {
			// alert(JSON.stringify(resultObject));
			app.store.localStorage.set("data-html5-themis-sink-profileid", resultObject.profileId);
			app.notify.loader.remove();
			app.help.navigation.redirect("create_backup_3.html", "slide");
		});

		promise.fail(function() {
			alert("Quelle nicht angelegt. WS Error")
		});
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_2_newSink.config.pageId).on("click", "#btnCreate", function() {

			var formObject = app.help.form.serialize($("#frmCreateSink")), promise, options = Array();
			delete formObject.btnCreate;

			if (formObject.options != undefined) {
				options = formObject.options;
				delete formObject.options;

			}

			page_create_backup_2_newSink.createSinkProfile(options, formObject);

		});

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_create_backup_2_newSink={
	"name":"create_backup_2_newSink",
	"shortname":"create_backup_2_newSink",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_2_oAuthFinished = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		if (app.config.apacheCordova === true) {
			console.log("todo");
			app.store.localStorage.set("data-html5-oAuthQuery", app.store.localStorage.get("data-html5-oAuthQuery").split('&')[0]);
		} else {
			try {
				app.store.localStorage.set("data-html5-oAuthQuery", window.location.href.split('?')[1].split('&')[0]);
			} catch (e) {
				app.store.localStorage.set("data-html5-oAuthQuery", "");
			}
		}

		// alert("oauth token: " +
		// app.store.localStorage.get("data-html5-oAuthToken"));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("headline", "page.create_backup_2_oAuthFinished"),
			"styles" : {
				"clear" : "both"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("description", "page.create_backup_2_oAuthFinished")
		}));

		content.append(app.ni.text.text({
			"id" : "txtName",
			"placeholder" : app.lang.string("authdata_name", "labels"),
			"label" : true,
			"labelText" : app.lang.string("authdata_name", "labels"),
			"container" : true,
			"attributes" : {
				"value" : app.lang.string("new authentication", "page.create_backup") + ": " + app.store.localStorage.get("data-html5-pluginId")
			}
		}));

		content.append(app.ni.button.button({
			"id" : "btnCreateAuthData",
			"placeholder" : app.lang.string("create_authdata", "labels"),
			"label" : true,
			"labelText" : app.lang.string("create_authdata", "labels"),
			"container" : true,
			"value" : app.lang.string("create_authdata", "actions")
		}));

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(page_create_backup_2_oAuthFinished.config.pageId).on("click", "#btnCreateAuthData", function(event) {
			var properties, storedProperties, promise;
			properties = {
				"oAuthQuery" : app.store.localStorage.get("data-html5-oAuthQuery")
			};
			storedProperties = app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"), "session_CreateSink");

			for ( var key in storedProperties) {
				properties[key] = storedProperties[key];
			}

			promise = app.rc.getJson("createAuthdata", {
				"pluginId" : app.store.localStorage.get("data-html5-pluginId"),
				"name" : $("#txtName").val(),
				"properties" : properties
			}, true);

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));
				app.store.localStorage.set("data-html5-authdataId", resultObject.id);
				app.help.navigation.redirect("create_backup_2_newSink.html", "slide");
			});

			promise.fail(function() {
				alert("ws error");
			});
		});

	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_create_backup_2_oAuthFinished={
	"name":"create_backup_2_oAuthFinished",
	"shortname":"create_backup_2_oAuthFinished",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_3 = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources
		content.append(app.ni.element.h1({
			"text" : app.lang.string("headline", "page.create_backup_3"),
			"styles" : {
				"clear" : "both"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("description", "page.create_backup_3")
		}));

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));
		var promiseSink, promiseSource;

		promiseSource = app.rc.getJson([ [ "getPluginConfiguration", {
			"pluginId" : app.store.localStorage.get("data-html5-source-pluginId"),
			"configId" : app.store.localStorage.get("data-html5-themis-source-profileid"),
			"expandConfigs" : true
		} ], [ "getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-source-pluginId"),
			"expandConfigs" : true
		} ] ], true);

		promiseSink = app.rc.getJson([ [ "getPluginConfiguration", {
			"pluginId" : app.store.localStorage.get("data-html5-sink-pluginId"),
			"configId" : app.store.localStorage.get("data-html5-themis-sink-profileid"),
			"expandConfigs" : true
		} ], [ "getPlugin", {
			"pluginId" : app.store.localStorage.get("data-html5-sink-pluginId"),
			"expandConfigs" : true
		} ] ], true);

		$.when(promiseSource, promiseSink).done(function(sourceResult, sinkResult) {
			// alert(sourceResult.getPlugin.title)

			content.append(app.ni.element.h2({
				"text" : app.lang.string("chosen_datasource", "headlines")
			}));

			content.append(app.ni.element.p({
				"text" : sourceResult.getPlugin.title + " - " // +
				// sourceResult.getPluginConfiguration.authData.name
			}));

			content.append(app.ni.element.h2({
				"text" : app.lang.string("chosen_datasink", "headlines")
			}));

			content.append(app.ni.element.p({
				"text" : sinkResult.getPlugin.title + " - " // +
				// sinkResult.getPluginConfiguration.authData.name
			}));

			content.append(app.ni.element.h2({
				"text" : app.lang.string("job_settings", "headlines")
			}));

			content.append(app.ni.text.text({
				"id" : "txtTitle",
				"placeholder" : app.lang.string("job_title", "labels"),
				"label" : true,
				"labelText" : app.lang.string("job_title", "labels"),
				"container" : true
			}));

			var scheduleArray = [ 'ONCE', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY' ];

			var select = app.ni.select.single({
				id : "selSchedule"
			});

			$.each(scheduleArray, function(index, singleSchedule) {
				select.append(app.ni.select.option({
					text : app.lang.string("schedule backup " + singleSchedule, "create backup"),
					value : singleSchedule
				}));
			});

			content.append(select);

			content.append(app.ni.button.button({
				"id" : "btnCreateBackup",
				"placeholder" : app.lang.string("create_backup", "labels"),
				"label" : true,
				"labelText" : app.lang.string("create_backup", "labels"),
				"container" : true,
				"value" : app.lang.string("create_backup", "actions")
			}));

			app.notify.loader.remove();

			app.help.jQM.enhance(content);
		});
		$.when(promiseSource, promiseSource).fail(function() {
			alert('ws error ');
		});

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(container).on("click", "#btnCreateBackup", function() {
			app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));
			var promise = app.rc.getJson("createBackupjob", {
				"jobTitle" : container.find("#txtTitle").val(),
				"schedule" : $('#selSchedule').val(),
				"start" : Date.now(),
				"source" : app.store.localStorage.get("data-html5-themis-source-profileid"),
				"actions" : [],
				"sink" : app.store.localStorage.get("data-html5-themis-sink-profileid")
			}, true);

			promise.done(function(resultObject) {
				// alert(JSON.stringify(resultObject));
				app.notify.loader.remove();
				app.store.localStorage.clearHtml5();
				app.help.navigation.redirect("backup_jobs.html", "slide");
			});

			promise.fail(function(error) {
				alert("webservice error: " + error);
			});
		});

	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_create_backup_3={
	"name":"create_backup_3",
	"shortname":"create_backup_3",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_create_backup_oAuthHandler = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			window.setTimeout(function() {
				var queryString = app.oa.getQueryString(), destinationType = app.store.localStorage.get("data-html5-destinationType");
				if (destinationType == "source") {
					app.help.navigation.redirect("create_backup_1_oAuthFinished.html?" + queryString, "slide");
				} else if (destinationType == "sink") {
					app.help.navigation.redirect("create_backup_2_oAuthFinished.html?" + queryString, "slide");
				} else {
					alert('oAuth Error');
				}
			}, 500);

		}
	}
};var config_create_backup_oAuthHandler={
	"name":"create_backup_oAuthHandler",
	"shortname":"create_backup_oAuthHandler",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_friendList = {
	config : null,
	include : null,
	include_once : null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_friendList.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	creator : function(container) {
		app.debug.trace("page_friendList.creator()");

		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		content.append(app.ni.element.a({
			id : "btnAddFriend",
			classes : [ 'ui-btn', 'ui-btn-inline' ],
			text : app.lang.string("add friend", "page.friendList")
		}));

		content.append(app.ni.element.a({
			id : "btnAddFriendHeritage",
			classes : [ 'ui-btn', 'ui-btn-inline' ],
			text : app.lang.string("add friend heritage", "page.friendList")
		}));

		app.rc.getJson([ [ "listFriendsSharing", {} ], [ "listFriendsHeritage", {} ] ], true, 3).done(function(result) {
			var sharingList, heritageList, list;
			sharingList = result['listFriendsSharing'];
			heritageList = result['listFriendsHeritage'];

			content.append(app.ni.element.h1({
				"text" : app.lang.string("sharing friends", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(sharingList, function(index, singleFriend) {
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("friend_" + singleFriend),
					title : singleFriend.name,
					headline : singleFriend.name,
					text : singleFriend.description,
					classes : [ 'friend' ],
					attributes : {
						"data-html5-friendId" : singleFriend.friendId
					}
				}));
			});

			content.append(list);

			content.append(app.ni.element.h1({
				"text" : app.lang.string("heritage friends", "headlines")
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(heritageList, function(index, singleFriend) {
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("friend_" + singleFriend),
					title : singleFriend.name,
					headline : singleFriend.name,
					text : singleFriend.description,
					classes : [ 'heritage' ],
					attributes : {
						"data-html5-friendId" : singleFriend.bmuUserId
					}
				}));
			});

			content.append(list);

		}).fail(function() {

		}).always(function() {

			app.notify.loader.remove();
			app.help.jQM.enhance(content);
		});

	},

	async : {
		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_friendList.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_friendList.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_friendList.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_friendList.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_friendList.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_friendList.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_friendList.setEvents()");

		$(this.config.pageId).on("storagefilled", ".heritage", function() {

			json = app.rc.getJson("getHeritageToken", {
				userId : app.store.localStorage.get("data-html5-friendId")
			}, false, 3);

			// getHeritageToken
			app.notify.dialog({
				text : $("<p>Erbtoken: " + json.activationCode + "</p>").append(app.ni.element.a({
					id : "getToken",
					classes : [ 'ui-btn' ],
					text : "QR Code herunterladen"
				})),
				title : "Erbe",
				headline : false,
				buttonLeft : "Erbe löschen",
				buttonRight : "Schließen",
				callbackButtonLeft : function() {
					app.rc.getJson("deleteAFriendHeritage", {
						friendId : app.store.localStorage.get("data-html5-friendId")
					}, true, 1).done(function() {
						alert("done");
					}).fail(function() {
						alert("fail");
					});
				},
				callbackButtonRight : false,
				delayInMs : 0
			});

		});

		$(this.config.pageId).on("storagefilled", "#getToken", function() {
			$.ajax({
				url : 'http://themis-dev01.backmeup.at/backmeup-service-rest/users/' + app.store.localStorage.get('data-html5-friendId') + '/activationCode',
				async : false,
				// accepts : "application/pdf",
				headers : {
					'Authorization' : app.store.localStorage.get('themis-token'),
					'Accept' : 'application/pdf'
				},
				dataType : 'binary',
				processData : false,
				success : function(data) {
					var fileURL = URL.createObjectURL(data);
					window.open(fileURL);
				}
			});
		});

		$(this.config.pageId).on("storagefilled", ".friend", function() {
			app.notify.dialog({
				text : " ",
				title : "Erbe",
				headline : false,
				buttonLeft : "Freund löschen",
				buttonRight : "Ok",
				callbackButtonLeft : function() {
					app.rc.getJson("deleteAFriend", {
						friendId : app.store.localStorage.get("data-html5-friendId")
					}, true, 1).done(function() {
						alert("done");
					}).fail(function() {
						alert("fail");
					});
				},
				callbackButtonRight : false,
				delayInMs : 0
			});
		});

		$(this.config.pageId).on("click", "#btnAddFriend", function(event) {

			var content;
			content = app.ni.element.div().append(app.ni.text.text({
				"id" : "txtName",
				"placeholder" : app.lang.string("name", "labels"),
				"label" : true,
				"labelText" : app.lang.string("name", "labels"),
				"container" : true
			})).append(app.ni.text.text({
				"id" : "txtDescription",
				"placeholder" : app.lang.string("description", "labels"),
				"label" : true,
				"labelText" : app.lang.string("description", "labels"),
				"container" : true
			})).append(app.ni.text.email({
				"id" : "txtEmail",
				"placeholder" : app.lang.string("email", "labels"),
				"label" : true,
				"labelText" : app.lang.string("email", "labels"),
				"container" : true
			}));

			app.notify.dialog({
				text : content,
				title : false,
				headline : app.lang.string("add friend", "page.friendList"),
				buttonLeft : app.lang.string("add friend", "actions"),
				buttonRight : app.lang.string("cancel", "actions"),
				callbackButtonLeft : function() {
					var email, name, description, webservice;

					app.rc.getJson("addAFriendSharing", {
						name : $("#txtName").val(),
						description : $("#txtDescription").val(),
						email : $("#txtEmail").val()
					}, true).done(function() {
						alert('done')
					}).fail(function() {
						alert('fail')
					});

				},
				callbackButtonRight : false,
				delayInMs : 0
			});

		});

		$(this.config.pageId).on("click", "#btnAddFriendHeritage", function(event) {

			var content;
			content = app.ni.element.div().append(app.ni.text.text({
				"id" : "txtName",
				"placeholder" : app.lang.string("name", "labels"),
				"label" : true,
				"labelText" : app.lang.string("name", "labels"),
				"container" : true
			})).append(app.ni.text.text({
				"id" : "txtDescription",
				"placeholder" : app.lang.string("description", "labels"),
				"label" : true,
				"labelText" : app.lang.string("description", "labels"),
				"container" : true
			})).append(app.ni.text.email({
				"id" : "txtEmail",
				"placeholder" : app.lang.string("email", "labels"),
				"label" : true,
				"labelText" : app.lang.string("email", "labels"),
				"container" : true
			}));

			app.notify.dialog({
				text : content,
				title : false,
				headline : app.lang.string("add friend heritage", "page.friendList"),
				buttonLeft : app.lang.string("add friend heritage", "actions"),
				buttonRight : app.lang.string("cancel", "actions"),
				callbackButtonLeft : function() {
					var email, name, description, webservice;

					app.rc.getJson("addAFriendHeritage", {
						name : $("#txtName").val(),
						description : $("#txtDescription").val(),
						email : $("#txtEmail").val()
					}, true).done(function() {
						alert('done')
					}).fail(function() {
						alert('fail')
					});

				},
				callbackButtonRight : false,
				delayInMs : 0
			});

		});

	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_friendList.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_friendList.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_friendList.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_friendList.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_friendList.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_friendList.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_friendList.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_friendList.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_friendList.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_friendList.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_friendList.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_friendList.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_friendList.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_friendList.pageshow()");
		}
	}
};var config_friendList={
	"name": "friendList",
	"shortname": "friendList",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": true,
	"contentRefreshInterval": 30000,
	"asyncLoading": false
};/*
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

var page_index = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			if (app.store.localStorage.get("data-html5-themis-loggedin")) {
				$(document).off();
				app.help.navigation.redirect( "start.html");
			} else {
				app.debug.alert("page_" + this.config.name + ".creator()", 10);
				var header = container.find('div[data-role=header]');
				var content = container.find('div[data-role=content]');
				var navPanel = container.find('div#nav-panel');
				
				content.append(app.ni.element.h1({
					"text" : app.lang.string("index", "headlines")
				}));

				content.append(app.ni.element.a({
					"id" : "btnLogin",
					"text" : app.lang.string("login", "actions"),
					"attributes" : {
						"href" : "login.html"
					},
					"classes" : [ 'ui-btn' ]
				}));

				content.append(app.ni.element.a({
					"id" : "btnRegister",
					"text" : app.lang.string("register", "actions"),
					"attributes" : {
						"href" : "register.html"
					},
					"classes" : [ 'ui-btn' ]
				}));
			}

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_index={
	"name":"index",
	"shortname":"index",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_job_details = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);
			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			var jobdetails = app.rc.getJson("jobDetails", {
				"username" : app.store.localStorage.get("data-html5-themis-username"),
				"jobId" : app.store.localStorage.get("data-html5-backupjobid")
			});

			var jobstatus = app.rc.getJson("jobStatus", {
				"username" : app.store.localStorage.get("data-html5-themis-username"),
				"jobId" : app.store.localStorage.get("data-html5-backupjobid"),
				"fromDate" : 0,
				"toDate" : Date.now(),
			});

			content.append(app.ni.element.h1({
				"text" : app.lang.string("job_details", "headlines") + ": " + jobdetails.jobTitle
			}));

			var grid = $(app.template.get("grid-33-33-33", "responsive"));
			var columnA = grid.find(".ui-block-a .ui-body");
			var columnB = grid.find(".ui-block-b .ui-body");
			var columnC = grid.find(".ui-block-c .ui-body");

			columnA.append(app.ni.element.h2({
				"text" : app.lang.string("datasource", "headlines")
			}));

			columnA.append(app.ni.element.p({
				"text" : "Von welchem Webservice bekomme ich die Daten für die Datenquelle: " + app.store.localStorage.get("data-html5-datasourceid")
			}));

			columnB.append(app.ni.element.h2({
				"text" : app.lang.string("datasink", "headlines")
			}));

			columnB.append(app.ni.element.p({
				"text" : "Von welchem Webservice bekomme ich die Daten für die Datensenke: " + app.store.localStorage.get("data-html5-datasinkid")
			}));

			columnC.append(app.ni.element.h2({
				"text" : app.lang.string("job_status", "headlines")
			}));

			content.append(grid);

			content.append(app.ni.element.a({
				"id" : "btnBackupEdit",
				"text" : app.lang.string("backup_edit", "actions"),
				"attributes" : {
					"href" : "backup_edit.html"
				},
				"classes" : [ 'ui-btn' ]
			}));

			content.append(app.ni.element.a({
				"id" : "btnBackupDelete",
				"text" : app.lang.string("backup_delete", "actions"),
				"classes" : [ 'ui-btn' ]
			}));

			content.append(app.ni.element.a({
				"id" : "btnBackupLog",
				"text" : app.lang.string("backup_log", "actions"),
				"attributes" : {
					"href" : "backup_log.html"
				},
				"classes" : [ 'ui-btn' ]
			}));

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_job_details={
	"name":"job_details",
	"shortname":"job_details",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_login = {
	config : null,

	elements : null,

	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {

		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});
		var content = container.find('div[data-role=content]');
		// content

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("login", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmLogin",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtUsername",
			"placeholder" : app.lang.string("username", "labels"),
			"label" : false,
			"labelText" : app.lang.string("username", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.password({
			"id" : "txtPassword",
			"placeholder" : app.lang.string("password", "labels"),
			"label" : false,
			"labelText" : app.lang.string("password", "labels"),
			"container" : false
		}));
		/*
		 * content.append(app.ni.checkbox({ "id" : "cbxSaveCedentials" }));
		 */
		form.append(app.ni.button.submit({
			"id" : "btnLogin",
			"value" : app.lang.string("login", "actions"),
			"classes" : [ 'ui-btn' ],
			"attributes" : {
				"href" : "#"
			}
		}));

		content.append(form);

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("register", "actions"),
				"attributes" : {
					"href" : "register.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {

		$(page_login.config.pageId).on("submit", "#frmLogin", function(event) {
			app.debug.alert("page_" + page_register.config.name + " #btnRegister click", 25);
			event.preventDefault();
			if (!app.help.validate.username(container.find("#txtUsername").val())) {
				app.notify.alert(app.lang.string("error", "page.login"), false, app.lang.string("error_headline", "page.login"), app.lang.string("error_button", "page.login"))
			} else if (!app.help.validate.password(container.find("#txtPassword").val())) {
				app.notify.alert(app.lang.string("error", "page.login"), false, app.lang.string("error_headline", "page.login"), app.lang.string("error_button", "page.login"))
			} else {

				app.template.append("#btnLogin", "app-loader-bubble-inline-button");

				var promise = app.rc.getJson("authenticate", {
					"username" : container.find("#txtUsername").val(),
					"password" : container.find("#txtPassword").val()
				}, true);

				promise.always(function() {
					container.find(".bubblingG-inline-button").remove();
				});

				promise.done(function(json) {
					if (json.accessToken != undefined) {
						// alert(JSON.stringify(json));
						app.store.localStorage.clearHtml5();
						app.sess.loggedIn(true);
						// app.store.localStorage.set("data-html5-themis-username",
						// container.find("#txtUsername").val());
						app.store.localStorage.set("themis-token", json.accessToken);
						
						app.rc.getJson("search", {
							"query" : "startup indexer"
						}, true);
						
						app.help.navigation.redirect(app.config.startPage_loggedIn, "slideup");
					} else {
						alert("Benutzername oder Passwort falsch.");
					}
				});

				promise.fail(function(errorObject) {
					app.notify.alert(app.lang.string("error", "page.login"), app.lang.string("error_headline", "page.login"), false, app.lang.string("error_button", "page.login"));
				});
			}
		});

	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_login={
	"name":"login",
	"shortname":"login",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_loginToken = {
	config : null,
	include : null,
	include_once : null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_loginToken.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	creator : function(container) {
		app.debug.trace("page_loginToken.creator()");
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});
		var content = container.find('div[data-role=content]');
		// content

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("login token", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmLoginToken",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtToken",
			"placeholder" : app.lang.string("token", "labels"),
			"label" : false,
			"labelText" : app.lang.string("token", "labels"),
			"container" : false
		}));

		/*
		 * content.append(app.ni.checkbox({ "id" : "cbxSaveCedentials" }));
		 */
		form.append(app.ni.button.submit({
			"id" : "btnLogin",
			"value" : app.lang.string("login", "actions"),
			"classes" : [ 'ui-btn' ],
			"attributes" : {
				"href" : "#"
			}
		}));

		content.append(form);

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnStart",
				"text" : app.lang.string("home page", "actions"),
				"attributes" : {
					"href" : "static-index.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext3' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("register", "actions"),
				"attributes" : {
					"href" : "register.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},

	async : {
		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_loginToken.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_loginToken.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_loginToken.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_loginToken.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_loginToken.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_loginToken.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_loginToken.setEvents()");
		$(this.config.pageId).on("submit", '#frmLoginToken', function(event) {
			event.preventDefault();

			app.template.append("#btnLogin", "app-loader-bubble-inline-button");

			app.rc.getJson("authenticateWithToken", {
				activationCode : $('#txtToken').val()
			}, true, 3).done(function(json) {
				if (json.accessToken != undefined) {
					// alert(JSON.stringify(json));
					app.store.localStorage.clearHtml5();
					app.sess.loggedIn(true);
					// app.store.localStorage.set("data-html5-themis-username",
					// container.find("#txtUsername").val());
					app.store.localStorage.set("themis-token", json.accessToken);

					app.rc.getJson("search", {
						"query" : "startup indexer"
					}, true);

					app.sess.setValue("heritage");
					
					app.help.navigation.redirect("startToken.html", "slideup");

				} else {
					alert("Token falsch.");
				}
			}).fail(function() {

				alert("Token falsch.");

			}).always(function() {
				container.find(".bubblingG-inline-button").remove();
			});
		});
	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_loginToken.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_loginToken.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_loginToken.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_loginToken.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_loginToken.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_loginToken.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_loginToken.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_loginToken.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_loginToken.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_loginToken.pageshow()");
		}
	}
};var config_loginToken={
	"name": "loginToken",
	"shortname": "loginToken",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_register = {
	config : null,

	elements : null,



	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {

		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});

		var content = container.find('div[data-role=content]');

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("register", "headlines")
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("register", "texts"),
			"attributes" : {
				"id" : "pDescription"
			}
		}));

		content.append(app.ni.element.a({
			"id" : "btnLetsGo",
			"text" : app.lang.string("lets_go", "actions"),
			"classes" : [ "ui-btn" ],
			"attributes" : {
				"href" : "register_1_terms.html",
				"data-transition" : "slide"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		$(document).on("swiperight", "#" + container.attr("id"), function(event) {
			app.help.navigation.redirect("static-index.html", "slide reverse");
		});

	},

	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event) {
			app.debug.alert("", 3);
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event) {
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event) {
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event) {
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event) {
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event) {
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event) {
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event) {
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event) {
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event) {
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event) {
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event) {
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event) {
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event) {
		}
	}
};var config_register={
	"name":"register",
	"shortname":"register",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_register_1_terms = {
	config : null,


	elements : null,


	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});
		var content = container.find('div[data-role=content]');

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("register_1_terms", "headlines")
		}));

		content.append(app.ni.element.p({
			"text" : app.lang.string("accept_terms", "texts", {
				"privacy_policy" : app.ni.element.a({
					"id" : "lnkPrivacyPolicy",
					"text" : app.lang.string("privacy_policy", "links"),
					"attributes" : {
						"href" : "#"
					}
				}),
				"terms" : app.ni.element.a({
					"id" : "lnkTerms",
					"text" : app.lang.string("terms", "links"),
					"attributes" : {
						"href" : "#"
					}
				})
			})
		}));

		content.append(app.ni.element.a({
			"id" : "btnContinue",
			"text" : app.lang.string("accept_terms", "actions"),
			"classes" : [ 'ui-btn' ],
			"attributes" : {
				"href" : "register_2_name.html",
				"data-transition" : "slide"
			}
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(document).on("swiperight", "#" + container.attr("id"), function(event) {
			app.help.navigation.redirect("register.html", "slide reverse");
		});
	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_register_1_terms={
	"name":"register_1_terms",
	"shortname":"register_1_terms",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_register_2_name = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});

		var content = container.find('div[data-role=content]');

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("register_2_name", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmRegisterName",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtFirstname",
			"placeholder" : app.lang.string("firstname", "labels"),
			"label" : false,
			"labelText" : app.lang.string("firstname", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.text({
			"id" : "txtLastname",
			"placeholder" : app.lang.string("lastname", "labels"),
			"label" : false,
			"labelText" : app.lang.string("lastname", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.text({
			"id" : "txtUsername",
			"placeholder" : app.lang.string("username", "labels"),
			"label" : false,
			"labelText" : app.lang.string("username", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.p({
			"text" : app.lang.string("what_is_your_name", "texts"),
			"attributes" : {
				"id" : "pDescription"
			}
		}));

		form.append(app.ni.element.a({
			"id" : "btnContinue",
			"text" : app.lang.string("continue", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(document).on("swiperight", "#" + container.attr("id"), function(event) {
			app.help.navigation.redirect("register_1_terms.html", "slide reverse");
		});

		$(this.config.pageId).on(
				"focus blur keyup",
				"#txtFirstname, #txtLastname, #txtUsername",
				function(event) {
					if (!(app.help.validate.firstname(container.find("#txtFirstname").val())
							&& app.help.validate.lastname(container.find("#txtLastname").val()) && app.help.validate.username(container
							.find("#txtUsername").val()))) {
						container.find("#pDescription").css("display", "block");
						container.find("#btnContinue").css("display", "none");
						container.find("#pDescription").text(app.lang.string("bad_name", "texts"));
						container.find("#pDescription").addClass("error");
					} else {
						container.find("#pDescription").css("display", "none");
						container.find("#btnContinue").css("display", "block");
						container.find("#pDescription").removeClass("error");
					}
				});

		$(this.config.pageId).on(
				"click",
				"#btnContinue",
				function(event) {
					if (!(app.help.validate.firstname(container.find("#txtFirstname").val())
							&& app.help.validate.lastname(container.find("#txtLastname").val()) && app.help.validate.username(container
							.find("#txtUsername").val()))) {
						container.find("#pDescription").css("display", "block");
						container.find("#btnContinue").css("display", "none");
						container.find("#pDescription").text(app.lang.string("bad_name", "texts"));
						container.find("#pDescription").addClass("error");
					} else {
						app.help.navigation.redirect("register_3_credentials.html", "slide");
					}
				});
	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			app.store.localStorage.pufferFormValues(container);
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			app.store.localStorage.restorePufferedFormValues(container);
		}
	}
};var config_register_2_name={
	"name":"register_2_name",
	"shortname":"register_2_name",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_register_3_credentials = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});

		var content = container.find('div[data-role=content]');

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("register_2_credentials", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmRegisterCredentials",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtEmail",
			"placeholder" : app.lang.string("email", "labels"),
			"label" : false,
			"labelText" : app.lang.string("email", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.password({
			"id" : "txtPassword",
			"placeholder" : app.lang.string("password", "labels"),
			"label" : false,
			"labelText" : app.lang.string("password", "labels"),
			"container" : false
		}));
		form.append(app.ni.text.password({
			"id" : "txtPasswordRpt",
			"placeholder" : app.lang.string("password_rpt", "labels"),
			"label" : false,
			"labelText" : app.lang.string("password_rpt", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.p({
			"text" : app.lang.string("insert_login_data", "texts"),
			"attributes" : {
				"id" : "pDescription"
			}
		}));

		form.append(app.ni.element.a({
			"id" : "btnContinue",
			"text" : app.lang.string("continue", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(document).on("swiperight", "#" + container.attr("id"), function(event) {
			app.help.navigation.redirect("register_2_name.html", "slide reverse");
		});

		$(this.config.pageId).on("focus blur keyup", "#txtEmail, #txtPassword, #txtPasswordRpt", function(event) {
			if (!app.help.validate.email(container.find("#txtEmail").val())) {
				container.find("#pDescription").css("display", "block");
				container.find("#btnContinue").css("display", "none");
				container.find("#pDescription").text(app.lang.string("bad_email", "texts"));
				container.find("#pDescription").addClass("error");
			} else if (!app.help.validate.password(container.find("#txtPassword").val())) {
				container.find("#pDescription").css("display", "block");
				container.find("#btnContinue").css("display", "none");
				container.find("#pDescription").text(app.lang.string("bad_password", "texts"));
				container.find("#pDescription").addClass("error");
			} else if (!app.help.validate.equal(container.find("#txtPassword").val(), container.find("#txtPasswordRpt").val())) {
				container.find("#pDescription").css("display", "block");
				container.find("#btnContinue").css("display", "none");
				container.find("#pDescription").text(app.lang.string("bad_passwords_not_equal", "texts"));
				container.find("#pDescription").addClass("error");
			} else {
				container.find("#pDescription").css("display", "none");
				container.find("#btnContinue").css("display", "block");
				container.find("#pDescription").removeClass("error");
			}
		});

		$(this.config.pageId).on("click", "#btnContinue", function(event) {
			if (!app.help.validate.email(container.find("#txtEmail").val())) {
				container.find("#pDescription").css("display", "block");
				container.find("#btnContinue").css("display", "none");
				container.find("#pDescription").text(app.lang.string("bad_email", "texts"));
				container.find("#pDescription").addClass("error");
			} else if (!app.help.validate.password(container.find("#txtPassword").val())) {
				container.find("#pDescription").css("display", "block");
				container.find("#btnContinue").css("display", "none");
				container.find("#pDescription").text(app.lang.string("bad_password", "texts"));
				container.find("#pDescription").addClass("error");
			} else if (!app.help.validate.equal(container.find("#txtPassword").val(), container.find("#txtPasswordRpt").val())) {
				container.find("#pDescription").css("display", "block");
				container.find("#btnContinue").css("display", "none");
				container.find("#pDescription").text(app.lang.string("bad_passwords_not_equal", "texts"));
				container.find("#pDescription").addClass("error");
			} else {
				app.help.navigation.redirect("register_4_final.html", "slide");
			}
		});
	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			app.store.localStorage.pufferFormValues(container);
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			app.store.localStorage.restorePufferedFormValues(container);
		}
	}
};var config_register_3_credentials={
	"name":"register_3_credentials",
	"shortname":"register_3_credentials",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_register_4_final = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		app.template.overwrite("#" + container.attr("id"), "JQueryMobilePlainPage");
		$.each(app.detect.classes.array(), function(key, name) {
			if (!$('body').hasClass(key))
				$('body').addClass(key);
		});

		var content = container.find('div[data-role=content]');

		if (app.detect.isDesktop())
			content.append(app.ni.element.img({
				"attributes" : {
					"src" : "../images/logo_full.png",
					"alt" : "LOGO"
				},
				"classes" : [ 'logo' ]
			}));

		content.append(app.ni.element.h1({
			"text" : app.lang.string("register_4_final", "headlines")
		}));

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading","headlines"));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("lost_password", "actions"),
				"attributes" : {
					"href" : "lostPassword.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext2' ]
		}));

		content.append(app.ni.element.p({
			"text" : app.ni.element.a({
				"id" : "btnLostPassword",
				"text" : app.lang.string("login", "actions"),
				"attributes" : {
					"href" : "login.html",
					"data-transition" : "slideup"
				}
			}),
			"classes" : [ 'app-subtext1' ]
		}));
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

	},

	functions : {},

	

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			var firstname = app.store.localStorage.getPufferedFormValue("register_2_name", "txtFirstname"), lastname = app.store.localStorage
					.getPufferedFormValue("register_2_name", "txtLastname"), username = app.store.localStorage.getPufferedFormValue(
					"register_2_name", "txtUsername"), password = app.store.localStorage.getPufferedFormValue("register_3_credentials",
					"txtPassword"), email = app.store.localStorage.getPufferedFormValue("register_3_credentials", "txtEmail");
			var promise = app.rc.getJson("register", {
				"firstname" : firstname,
				"lastname" : lastname,
				"username" : username,
				"password" : password,
				"email" : email
			}, true);

			promise.done(function(json) {
				if (json.userId) {
					app.store.localStorage.set("data-html5-themis-loggedin", false);
					app.store.localStorage.set("data-html5-themis-userid", json.userId);
					app.store.localStorage.set("data-html5-themis-activated", json.activated);
					app.store.localStorage.set("data-html5-themis-username", container.find("#txtUsername").val());
					app.help.navigation.redirect("activate_account.html", "slide");
				} else {
					app.notify.alert(app.lang.string("bad_register", "notifications"), false, app.lang.string("bad_register", "headlines"),
							app.lang.string("ok", "actions"));
				}
			});

			promise.fail(function(errorObject) {
				app.notify.alert(app.lang.string("bad_register", "notifications"), false, app.lang.string("bad_register", "headlines"),
						app.lang.string("ok", "actions"));

			});
		}
	}
};var config_register_4_final={
	"name":"register_4_final",
	"shortname":"register_4_final",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_search = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		var header = $('div[data-role=header]');
		var content = $('div[data-role=content]');
		var navPanel = $('div#nav-panel');
		var pagePanel = $('div#page-panel');
		// datasources

		content.append(app.ni.element.h1({
			"text" : app.lang.string("search_in_backups", "headlines")
		}));

		var form = app.ni.form.form({
			"id" : "frmSearch",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtSearch",
			"placeholder" : (app.store.localStorage.get("data-html5-themis-search-value")) ? app.store.localStorage.get("data-html5-themis-search-value") : app.lang.string("search", "labels"),
			"label" : false,
			"labelText" : app.lang.string("search", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.a({
			"id" : "btnSearch",
			"text" : app.lang.string("search", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

		var searchResults = app.ni.element.div({
			"id" : "divSearchResults",
			"styles" : {
				"margin-top" : "15px",
				"border-top" : "1px solid #999"
			}
		});
		content.append(searchResults);

		if (app.store.localStorage.get("data-html5-themis-search-value") != null) {
			window.setTimeout(function() {
				page_search.updateSearchDiv(searchResults);
			}, 1000);
		}

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		$(this.config.pageId).on("focus click", "#txtSearch", function(event) {
			$("#btnSearch").css("display", "block");
			if (app.store.localStorage.get("data-html5-themis-search-value") && $("#txtSearch").val() == "") {
				$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));
				this.select();
			}
		});

		$(this.config.pageId).on("click", "#btnApplyFilter", function() {
			// app.store.localStorage.set("data-html5-themis-search-value",
			// $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		}),

		$(this.config.pageId).on("click", "#btnRemoveFilter", function() {
			// app.store.localStorage.set("data-html5-themis-search-value",
			// $("#txtSearch").val());
			$('.app-search-filter option:selected').val("");
			page_search.updateSearchDiv($("#divSearchResults"));
		}),

		$(this.config.pageId).on("click", "#btnShareSearchResult", function() {
			page_search.singleResult.shareDocumentGroup();
		});

		$(this.config.pageId).on("submit", "#frmSearch", function(event) {
			event.preventDefault();
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

		$(this.config.pageId).on("click", "#btnTagModeOn", function(event) {
			event.preventDefault();
			// alert('tag mode on');
			$('.app-search-item').each(function(index, element) {
				$(element).find('.ui-li-aside').attr("data-text", $(element).find('.ui-li-aside').text());
				$(element).find('.ui-li-aside').html(app.ni.checkbox.checkbox({}));
				$(element).replaceWith($(element)[0].outerHTML.replace("onclick=", "onclick_disable="));
			});

		});

		$(this.config.pageId).on("click", ".app-search-item", function(event) {
			var checkbox = $(this).find('input[type=checkbox]');
			if (checkbox.length > 0) {
				if (checkbox.prop("checked"))
					checkbox.prop("checked", false);
				else
					checkbox.prop("checked", true);
			}
		});

		$(this.config.pageId).on("click", "#btnTagModeOff", function(event) {
			event.preventDefault();
			// alert('tag mode off');
			$('.app-search-item').each(function(index, element) {
				$(element).find('.ui-li-aside').text($(element).find('.ui-li-aside').attr("data-text"));
				$(element).replaceWith($(element)[0].outerHTML.replace("onclick_disable=", "onclick="));
			});
		});

		$(this.config.pageId).on("click", "#btnCreateCollection", function(event) {
			event.preventDefault();
			var documentIdArray = [];
			// alert('add selected to collection');
			$('.app-search-item .ui-li-aside input[type=checkbox]:checked').each(function(index, element) {
				documentIdArray.push($(element).parent().parent().attr("data-html5-fileid"));
			});
			// alert(JSON.stringify(documentIdArray));
			page_search.singleResult.createCollection(documentIdArray);

		});

		$(this.config.pageId).on("click", "#btnAddToCollection", function(event) {
			event.preventDefault();
			var documentIdArray = [];
			// alert('add selected to collection');
			$('.app-search-item .ui-li-aside input[type=checkbox]:checked').each(function(index, element) {
				documentIdArray.push($(element).parent().parent().attr("data-html5-fileid"));
			});
			// alert(JSON.stringify(documentIdArray));
			page_search.singleResult.addToCollection(documentIdArray);

		});

		$(this.config.pageId).on("click", "#btnRemoveFromCollection", function(event) {
			event.preventDefault();
			var documentIdArray = [];
			// alert('add selected to collection');
			$('.app-search-item .ui-li-aside input[type=checkbox]:checked').each(function(index, element) {
				documentIdArray.push($(element).parent().parent().attr("data-html5-fileid"));
			});
			// alert(JSON.stringify(documentIdArray));
			page_search.singleResult.removeFromCollection(documentIdArray);

		});

		$(this.config.pageId).on("click", "#btnSearch", function(event) {
			app.store.localStorage.set("data-html5-themis-search-value", $("#txtSearch").val());
			page_search.updateSearchDiv($("#divSearchResults"));
		});

	},

	singleResult : {

		getFilters : function(resultObject) {
			var divFilter = app.ni.element.div({
				id : "divFilter"
			}), divCollection = app.ni.element.div({
				id : "divCollection"
			}), divSharing = app.ni.element.div({
				id : "divSharing"
			}), select;

			divFilter.append(app.ni.element.h2({
				text : app.lang.string("filter area", "page.search")
			}));
			$.each(resultObject, function(key, filterObject) {
				if (key.substring(0, 2) === "by") {
					select = app.ni.select.single({
						id : key,
						classes : [ 'app-search-filter' ],
						attributes : {
							"data-inline" : "true",
							"data-mini" : "true"
						},
					});
					select.append(app.ni.select.option({
						text : app.lang.string(key, "page.search"),
						value : ""
					}));

					$.each(filterObject, function(key, filterValue) {
						select.append(app.ni.select.option({
							text : filterValue.title,
							value : filterValue.title,
							selected : (filterObject.length == 1) ? true : false
						}));
					});

					divFilter.append(select);
				}
			});

			divFilter.append(app.ni.element.a({
				id : "btnApplyFilter",
				text : app.lang.string("apply filter", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divFilter.append(app.ni.element.a({
				id : "btnRemoveFilter",
				text : app.lang.string("remove filter", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divSharing.append(app.ni.element.h2({
				text : app.lang.string("sharing area", "page.search")
			}));

			divSharing.append(app.ni.element.a({
				id : "btnShareSearchResult",
				text : app.lang.string("share search result", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.h2({
				text : app.lang.string("collection area", "page.search")
			}));

			divCollection.append(app.ni.element.a({
				id : "btnTagModeOn",
				text : app.lang.string("tag mode on", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnTagModeOff",
				text : app.lang.string("tag mode off", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnCreateCollection",
				text : app.lang.string("create new collection", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnAddToCollection",
				text : app.lang.string("add to collection", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			divCollection.append(app.ni.element.a({
				id : "btnRemoveFromCollection",
				text : app.lang.string("remove from collection", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ]
			}));

			return $('<div>').append(divFilter).append(divSharing).append(divCollection);
		},

		getThumbnail : function(singleSearchResult) {
			var imgUrl;
			if ((imgUrl = singleSearchResult.thumbnailUrl) != undefined) {
				return imgUrl.replace("###TOKEN###", encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)));
			} else if ((imgUrl = app.img.getUrlById("search_" + singleSearchResult.type)) != "search_" + singleSearchResult.type)
				return imgUrl;
			else {
				return false;
			}
		},

		getResultUrl : function(singleSearchResult) {
			if (singleSearchResult.downloadUrl != undefined) {
				return singleSearchResult.downloadUrl.replace("###TOKEN###", encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)));
			} else {
				return false;
			}
		},

		getSearchDetails : function(singleSearchResult) {
			var div = app.ni.element.div({
				classes : [ 'app-themis-searchresult' ]
			});

			div.append(app.ni.element.a({
				text : app.lang.string("share item", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ],
				attributes : {
					onclick : "javascript:page_search.singleResult.shareDocument(" + JSON.stringify(singleSearchResult).split("\"").join("'") + ")"
				}
			}));

			div.append(app.ni.element.a({
				text : app.lang.string("close search details", "page.search"),
				classes : [ 'ui-btn', 'ui-btn-inline' ],
				attributes : {
					onclick : "javascript:app.notify.close.alert()"
				}
			}));

			if (page_search.singleResult.getResultUrl(singleSearchResult)) {

				div.append(app.ni.element.a({
					"text" : app.lang.string("open file in new browser window", "page.search"),
					"attributes" : {
						"href" : "#",
						"onclick" : "javascript:window.open('" + page_search.singleResult.getResultUrl(singleSearchResult) + "','_blank', 'location=yes')"
					},
					classes : [ 'ui-btn', 'ui-btn-inline' ]
				}));
			}

			$.each(singleSearchResult, function(key, value) {

				if (typeof value === "object") {
					$.each(value, function(key, value) {
						div.append(app.ni.element.p({
							"text" : app.lang.string(key, "page.search") + ": " + value
						}));
					});
				} else {
					div.append(app.ni.element.p({
						"text" : app.lang.string(key, "page.search") + ": " + value
					}));
				}
			});
			return div;
		},

		openDetails : function(singleSearchResult) {

			// alert(JSON.stringify(singleSearchResult))
			app.notify.alert(page_search.singleResult.getSearchDetails(singleSearchResult), singleSearchResult.title, false, app.lang.string("back", "actions"), function() {
			}, 50);

		},

		getSharingInputs : function() {
			var div = app.ni.element.div({
				classes : [ 'app-themis-sharing' ]
			}), friends = app.ni.select.single({
				id : "selFriend"
			}), sharingList, heritageList;

			div.append(app.ni.text.text({
				id : "txtShareName",
				placeholder : app.lang.string("share name", "page.search"),
				label : true,
				labelText : app.lang.string("sahre name", "page.search"),
				container : false
			}));

			div.append(app.ni.text.text({
				id : "txtShareDescription",
				placeholder : app.lang.string("share description", "page.search"),
				label : true,
				labelText : app.lang.string("share description", "page.search"),
				container : false
			}));

			// div.append(app.ni.text.text({
			// id : "txtShareUserId",
			// placeholder : app.lang.string("share userid", "page.search"),
			// label : true,
			// labelText : app.lang.string("share userid", "page.search"),
			// container : false
			// }));

			result = app.rc.getJson([ [ "listFriendsSharing", {} ], [ "listFriendsHeritage", {} ] ], false, 3);

			sharingList = result['listFriendsSharing'];
			heritageList = result['listFriendsHeritage'];

			$.each(sharingList, function(index, singleFriend) {
				if (singleFriend.bmuUser)
					friends.append(app.ni.select.option({
						text : singleFriend.name + " - " + singleFriend.description,
						value : singleFriend.bmuUserId,
						classes : [ 'friend' ]
					}));
			});

			$.each(heritageList, function(index, singleFriend) {
				friends.append(app.ni.select.option({
					text : singleFriend.name + " - " + singleFriend.description,
					value : singleFriend.bmuUserId,
					classes : [ 'heritage' ]
				}));
			});

			div.append(friends);

			div.append(app.ni.text.date({
				id : "txtStartDate",
				placeholder : app.lang.string("start date", "page.search"),
				label : true,
				labelText : app.lang.string("start date", "page.search"),
				container : false
			}));

			div.append(app.ni.text.date({
				id : "txtEndDate",
				placeholder : app.lang.string("end date", "page.search"),
				label : true,
				labelText : app.lang.string("end date", "page.search"),
				container : false
			}));

			return div;
		},

		getCollectionInputs : function() {
			var div = app.ni.element.div({
				classes : [ 'app-themis-collections' ]
			});

			div.append(app.ni.text.text({
				id : "txtCollectionName",
				placeholder : app.lang.string("collection name", "page.search"),
				label : true,
				labelText : app.lang.string("collection name", "page.search"),
				container : false
			}));

			div.append(app.ni.text.text({
				id : "txtCollectionDescription",
				placeholder : app.lang.string("collection description", "page.search"),
				label : true,
				labelText : app.lang.string("collection description", "page.search"),
				container : false
			}));

			return div;
		},

		getAddToCollectionInputs : function(collections) {
			var div = app.ni.element.div({
				classes : [ 'app-themis-collections' ]
			}), select = $(app.ni.select.single({
				"id" : "cboCollections",
				"name" : "collections",
				"label" : true,
				"labelText" : app.lang.string("select collection", "page.search"),
			}));

			$.each(collections, function(index, collection) {
				select.append(app.ni.select.option({
					text : collection.name + " - " + collection.description,
					value : collection.collectionId
				}));
			});
			div.append(select);
			return div;
		},

		getRemoveFromCollectionInputs : function(collections) {
			var div = app.ni.element.div({
				classes : [ 'app-themis-collections' ]
			}), select = $(app.ni.select.single({
				"id" : "cboCollections",
				"name" : "collections",
				"label" : true,
				"labelText" : app.lang.string("select collection", "page.search"),
			}));

			$.each(collections, function(index, collection) {
				select.append(app.ni.select.option({
					text : collection.name + " - " + collection.description,
					value : collection.collectionId
				}));
			});
			div.append(select);
			return div;
		},

		shareDocument : function(singleSearchResult) {
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getSharingInputs(), singleSearchResult.title, false, app.lang.string("share item", "page.search"), app.lang.string("don't share item", "page.share"), function() {
					// share item
					var webservice, start, end;

					if ($("#selFriend option:selected").hasClass("friend"))
						webservice = "shareDocument";
					else if ($("#selFriend option:selected").hasClass("heritage"))
						webservice = "shareDocumentHeritage";

					start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
					end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

					app.rc.getJson(webservice, {
						withUserId : parseInt($("#selFriend option:selected").val()),
						policyValue : app.store.localStorage.get("data-html5-fileid"),
						name : $("#txtShareName").val(),
						description : $("#txtShareDescription").val(),
						lifespanstart : start,
						lifespanend : end
					}, true).done(function() {
						app.notify.alert({
							text : app.lang.string("text share document done", "sharing"),
							headline : app.lang.string("headline sharing", "sharing"),
							button : app.lang.string("Ok", "sharing"),
							callbackButton : false,
							delayInMs : 0
						});
					}).fail(function() {
						app.notify.alert({
							text : app.lang.string("text share document fail", "sharing"),
							headline : app.lang.string("headline sharing", "sharing"),
							button : app.lang.string("Ok", "sharing"),
							callbackButton : false,
							delayInMs : 0
						});
					});
				}, function() {
					// don't share item
				}, 50);
			});

		},

		createCollection : function(documentIds) {
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getCollectionInputs(), app.lang.string("create collection", "page.search"), false, app.lang.string("create collection", "page.search"), app.lang.string("cancel", "page.share"), function() {
					// share item

					app.rc.getJson("createCollection", {
						documentIds : documentIds,
						name : $("#txtCollectionName").val(),
						description : $("#txtCollectionDescription").val()
					}, true).done(function() {
						app.notify.alert({
							text : app.lang.string("text create collection done", "sharing"),
							headline : app.lang.string("headline sharing", "sharing"),
							button : app.lang.string("Ok", "sharing"),
							callbackButton : false,
							delayInMs : 0
						});
					}).fail(function() {
						app.notify.alert({
							text : app.lang.string("text create collection fail", "sharing"),
							headline : app.lang.string("headline sharing", "sharing"),
							button : app.lang.string("Ok", "sharing"),
							callbackButton : false,
							delayInMs : 0
						});
					});
				}, function() {
					// don't share item
				}, 50);
			});

		},

		removeFromCollection : function(documentIds) {
			app.notify.close.all().done(
					function() {
						app.rc.getJson("getCollections", {}, true).done(
								function(collections) {

									app.notify.dialog(page_search.singleResult.getAddToCollectionInputs(collections), app.lang.string("remove from collection", "page.search"), false, app.lang.string("remove from collection", "page.search"), app.lang
											.string("cancel", "page.share"), function() {
										// share item
										app.rc.getJson("removeFromCollection", {
											documentIds : documentIds,
											collId : $("#cboCollections option:selected").val(),
											collectionId : $("#cboCollections option:selected").val()
										}, true).done(function() {
											app.notify.alert({
												text : app.lang.string("text remove from collection done", "sharing"),
												headline : app.lang.string("headline sharing", "sharing"),
												button : app.lang.string("Ok", "sharing"),
												callbackButton : false,
												delayInMs : 0
											});
										}).fail(function() {
											app.notify.alert({
												text : app.lang.string("text remove from collection fail", "sharing"),
												headline : app.lang.string("headline sharing", "sharing"),
												button : app.lang.string("Ok", "sharing"),
												callbackButton : false,
												delayInMs : 0
											});
										});
									}, function() {
										// don't share item
									}, 50);
								}).fail(function() {
							app.notify.alert({
								text : app.lang.string("text get collection fail", "sharing"),
								headline : app.lang.string("headline sharing", "sharing"),
								button : app.lang.string("Ok", "sharing"),
								callbackButton : false,
								delayInMs : 0
							});
						});
					});

		},

		addToCollection : function(documentIds) {
			app.notify.close.all().done(
					function() {
						app.rc.getJson("getCollections", {}, true).done(
								function(collections) {

									app.notify.dialog(page_search.singleResult.getAddToCollectionInputs(collections), app.lang.string("add to collection", "page.search"), false, app.lang.string("add to collection", "page.search"), app.lang.string(
											"cancel", "page.share"), function() {
										// share item
										app.rc.getJson("addToCollection", {
											documentIds : documentIds,
											collId : $("#cboCollections option:selected").val(),
											collectionId : $("#cboCollections option:selected").val()
										}, true).done(function() {
											app.notify.alert({
												text : app.lang.string("text add to collection done", "sharing"),
												headline : app.lang.string("headline sharing", "sharing"),
												button : app.lang.string("Ok", "sharing"),
												callbackButton : false,
												delayInMs : 0
											});
										}).fail(function() {
											app.notify.alert({
												text : app.lang.string("text add to collection fail", "sharing"),
												headline : app.lang.string("headline sharing", "sharing"),
												button : app.lang.string("Ok", "sharing"),
												callbackButton : false,
												delayInMs : 0
											});
										});
									}, function() {
										// don't share item
									}, 50);
								}).fail(function() {
							app.notify.alert({
								text : app.lang.string("text get collecton fail", "sharing"),
								headline : app.lang.string("headline sharing", "sharing"),
								button : app.lang.string("Ok", "sharing"),
								callbackButton : false,
								delayInMs : 0
							});
						});
					});

		},

		shareDocumentGroup : function() {
			app.notify.close.all().done(function() {
				app.notify.dialog(page_search.singleResult.getSharingInputs(), app.lang.string("share search result", "page.search"), false, app.lang.string("share item", "page.search"), app.lang.string("don't share item", "page.share"), function() {
					// share item
					var documentArray = [], start, end;
					$('.app-search-item').each(function(index, element) {
						documentArray.push($(element).attr('data-html5-fileid'));
					})
					// alert(JSON.stringify(documentArray));

					var webservice;

					if ($("#selFriend option:selected").hasClass("friend"))
						webservice = "shareDocumentGroup";
					else if ($("#selFriend option:selected").hasClass("heritage"))
						webservice = "shareDocumentGroupHeritage";

					start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
					end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

					app.rc.getJson(webservice, {
						withUserId : parseInt($("#selFriend option:selected").val()),
						policyValue : JSON.stringify(documentArray).split('"').join(''),
						name : $("#txtShareName").val(),
						description : $("#txtShareDescription").val(),
						lifespanstart : start,
						lifespanend : end
					}, true).done(function() {
						app.notify.alert({
							text : app.lang.string("text share document group done", "sharing"),
							headline : app.lang.string("headline sharing", "sharing"),
							button : app.lang.string("Ok", "sharing"),
							callbackButton : false,
							delayInMs : 0
						});
					}).fail(function() {
						app.notify.alert({
							text : app.lang.string("text share document group fail", "sharing"),
							headline : app.lang.string("headline sharing", "sharing"),
							button : app.lang.string("Ok", "sharing"),
							callbackButton : false,
							delayInMs : 0
						});
					});
				}, function() {
					// don't share item
				}, 50);
			});

		}
	},

	updateSearchDiv : function(searchResults) {

		app.notify.loader.bubbleDiv(true, app.lang.string("loadingText", "page.search"), app.lang.string("loadingHeadline", "page.search"));
		var promise = app.rc.getJson("searchWithFilters", {
			// "userId" : 8,//
			// app.store.localStorage.get("data-html5-themis-username"),
			query : app.store.localStorage.get("data-html5-themis-search-value"),
			source : ($('#bySource').length > 0) ? $('#bySource option:selected').val() : "",
			type : ($('#byType').length > 0) ? $('#byType option:selected').val() : "",
			job : ($('#byJob').length > 0) ? $('#byJob option:selected').val() : "",
			owner : ($('#byOwner').length > 0) ? $('#byOwner option:selected').val() : "",
			tag : ($('#byTag').length > 0) ? $('#byTag option:selected').val() : ""
		}, true);

		searchResults.empty();

		promise.fail(function() {
			app.notify.alert(app.lang.string("search_error", "texts"), false, app.lang.string("search", "headlines"), app.lang.string("ok", "actions"));
		});

		promise.done(function(resultObject) {

			var list = $(app.template.get("listA", "responsive"));

			searchResults.append(page_search.singleResult.getFilters(resultObject))

			// alert(JSON.stringify(resultObject['files']));
			$.each(resultObject['files'], function(key, singleSearchResult) {

				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : (page_search.singleResult.getThumbnail(singleSearchResult)) ? page_search.singleResult.getThumbnail(singleSearchResult) : " ",
					title : (singleSearchResult.isSharing) ? app.lang.string("shared item", "page.search") : app.lang.string("own item", "page.search"),
					headline : singleSearchResult.title,
					text : singleSearchResult.preview,
					classes : [ 'job', 'app-search-item' ],
					attributes : {
						"onclick" : "page_search.singleResult.openDetails(" + JSON.stringify(singleSearchResult).split("\"").join("'") + ")",
						"data-html5-datasink" : singleSearchResult.datasink,
						"data-html5-datasource" : singleSearchResult.datasource,
						"data-html5-fileid" : singleSearchResult.fileId,
						"data-html5-issharing" : singleSearchResult.isSharing,
						"data-html5-jobname" : singleSearchResult.jobName,
						"data-html5-ownerid" : singleSearchResult.ownerId,
						"data-html5-properties-destiantion" : singleSearchResult.properties.destiantion,
						"data-html5-properties-path" : singleSearchResult.properties.path,
						"data-html5-properties-source" : singleSearchResult.properties.source,
						"data-html5-timestamp" : singleSearchResult.timestamp,
						"data-html5-title" : singleSearchResult.title,
						"data-html5-type" : singleSearchResult.type

					}
				}));

			});

			searchResults.append(list);
			app.help.jQM.enhance(searchResults);
		});
		promise.always(function() {
			app.notify.loader.remove();
		});
	},

	functions : {},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};
;var config_search={
	"name":"search",
	"shortname":"search",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_settings = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);
			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			content.append(app.ni.element.h1({
				"text" : app.lang.string("settings", "headlines")
			}));

			content.append(app.ni.element.a({
				"id" : "btnClearHtml5Storage",
				"text" : app.lang.string("clear_html5_storage", "actions"),
				"classes" : [ 'ui-btn' ]
			}));

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		
		try {
			$(document).on("click", "#btnClearHtml5Storage", function() {
				app.notify.alert(app.lang.string("clear_html5_storage", "notifications"), app.lang.string("clear_html5_storage", "headlines"), app.lang.string("clear_html5_storage", "headlines"), page_settings.redirectHome);
				app.notify.add.alert(app.lang.string("logout", "notifications"), app.lang.string("logout", "headlines"), app.lang.string("logout", "headlines"));
			});
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;

	},

	redirectHome : function() {
		app.store.localStorage.clear();
		app.help.navigation.redirect("index.html");
	},

	functions : {},

	

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_settings={
	"name":"settings",
	"shortname":"settings",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_share_backup = {
	config : null,

	elements : null,

	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		var header = container.find('div[data-role=header]');
		var content = container.find('div[data-role=content]');
		var navPanel = container.find('div#nav-panel');

		app.notify.loader.bubbleDiv(true, "", app.lang.string("loading", "headlines"));

		/*
		 * var promise = app.rc.getJson("getSuccessfulBackupjobs", { "expand" :
		 * "true" }, true);
		 */

		var promise = app.rc.getJson([ [ "ownedShares", {} ], [ "ownedSharesHeritage", {} ], [ "incomingShares", {} ], [ "getCollections", {} ] ], true);

		content.append(app.ni.element.h1({
			"text" : app.lang.string("share_backup", "headlines")
		}));

		promise.done(function(resultObject) {

			var incomingShares = resultObject["incomingShares"], ownedShares = resultObject["ownedShares"], ownedSharesHeritage = resultObject["ownedSharesHeritage"], collections = resultObject["getCollections"];

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my incoming shares", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));

			// alert(JSON.stringify(resultObject));
			var list = $(app.template.get("listA", "responsive"));

			$.each(incomingShares, function(index, incomingShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("incoming_" + incomingShare.policy + "_" + incomingShare.approvedBySharingpartner),
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", incomingShare.policyCreationDate / 1000),
					headline : (incomingShare.name != undefined) ? incomingShare.name : app.lang.string(incomingShare.policy, "page.share_backup"),
					text : (incomingShare.description != undefined) ? incomingShare.description : "no description for backup",
					classes : [ 'incoming-share' ],
					attributes : {
						"json" : JSON.stringify(incomingShare).split("\"").join("'"),
						"data-html5-themis-id" : incomingShare.id,
						"data-html5-themis-fromuserid" : incomingShare.fromUserID,
						"data-html5-themis-withuserid" : incomingShare.withUserID,
						"data-html5-themis-policy" : incomingShare.policy,
						"data-html5-themis-searchelementid" : incomingShare.sharedElementID,
						"data-html5-themis-policycreationdate" : incomingShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : incomingShare.numberOfSharedDocuments,
						"data-html5-themis-name" : incomingShare.name,
						"data-html5-themis-approvedBySharingpartner" : incomingShare.approvedBySharingpartner
					}
				}));
			});

			app.notify.loader.remove();
			content.append(list);

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my owned shares", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(ownedShares, function(index, ownedShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("incoming_" + ownedShare.policy + "_" + ownedShare.approvedBySharingpartner),
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", ownedShare.policyCreationDate / 1000),
					headline : (ownedShare.name != undefined) ? ownedShare.name : app.lang.string(ownedShare.policy, "page.share_backup"),
					text : (ownedShare.description != undefined) ? ownedShare.description : "no description for backup",
					classes : [ 'owned-share', 'friend' ],
					attributes : {
						"json" : JSON.stringify(ownedShare).split("\"").join("'"),
						"data-html5-revoketype" : "heritage",
						"data-html5-themis-id" : ownedShare.id,
						"data-html5-themis-fromuserid" : ownedShare.fromUserID,
						"data-html5-themis-withuserid" : ownedShare.withUserID,
						"data-html5-themis-policy" : ownedShare.policy,
						"data-html5-themis-searchelementid" : ownedShare.sharedElementID,
						"data-html5-themis-policycreationdate" : ownedShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : ownedShare.numberOfSharedDocuments,
						"data-html5-themis-name" : ownedShare.name,
						"data-html5-themis-approvedBySharingpartner" : ownedShare.approvedBySharingpartner
					}
				}));
			});

			content.append(list);

			content.append(app.ni.element.h2({
				"text" : app.lang.string("my owned shares heritage", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));

			list = $(app.template.get("listA", "responsive"));

			$.each(ownedSharesHeritage, function(index, ownedShare) {
				// alert(JSON.stringify(jobJson));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("incoming_" + ownedShare.policy + "_" + ownedShare.approvedBySharingpartner),
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", ownedShare.policyCreationDate / 1000),
					headline : (ownedShare.name != undefined) ? ownedShare.name : app.lang.string(ownedShare.policy, "page.share_backup"),
					text : (ownedShare.description != undefined) ? ownedShare.description : "no description for backup",
					classes : [ 'owned-share', 'heritage' ],
					attributes : {
						"json" : JSON.stringify(ownedShare).split("\"").join("'"),
						"data-html5-revoketype" : "heritage",
						"data-html5-themis-id" : ownedShare.id,
						"data-html5-themis-fromuserid" : ownedShare.fromUserID,
						"data-html5-themis-withuserid" : ownedShare.withUserID,
						"data-html5-themis-policy" : ownedShare.policy,
						"data-html5-themis-searchelementid" : ownedShare.sharedElementID,
						"data-html5-themis-policycreationdate" : ownedShare.policyCreationDate,
						"data-html5-themis-numberOfSharedDocuments" : ownedShare.numberOfSharedDocuments,
						"data-html5-themis-name" : ownedShare.name,
						"data-html5-themis-approvedBySharingpartner" : ownedShare.approvedBySharingpartner
					}
				}));
			});

			content.append(list);

			// collections
			content.append(app.ni.element.h2({
				"text" : app.lang.string("my collections", "headlines"),
				"styles" : {
					"clear" : "both"
				}
			}));

			list = $(app.template.get("listA", "responsive"));
			// alert(JSON.stringify(collections))
			$.each(collections, function(index, collection) {
				// alert(JSON.stringify(collection));
				list.append(app.ni.list.thumbnail({
					href : "#",
					imageSrc : app.img.getUrlById("collection"),
					title : app.lang.string("date", "page.share_backup") + " " + date("d.m.Y", collection.collectionCreationDate / 1000),
					headline : (collection.name != undefined) ? collection.name : app.lang.string(collection.policy, "page.share_backup"),
					text : (collection.description != undefined) ? collection.description : "test test test",
					classes : [ 'collection' ],
					attributes : {
						"json" : JSON.stringify(collection).split("\"").join("'"),
						"data-html5-collectionId" : collection.collectionId
					}
				}));
			});

			content.append(list);

			app.notify.loader.remove();
			app.help.jQM.enhance(content);
		});

		promise.fail(function(error) {
			app.notify.loader.remove();
			alert("ws error: " + error);
		});

	},

	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

		$(this.config.pageId).on('click', '.owned-share', function(event) {
			var share = JSON.parse($(this).attr('json').split("'").join('"')), text = page_share_backup.functions.ownedShareOperatios(share);
			app.notify.alert(text, false, app.lang.string("share details", "page.share_backup"), app.lang.string("close details", "page.share_backup"), false, 50)

		});

		$(this.config.pageId).on('click', '.incoming-share', function(event) {
			var share = JSON.parse($(this).attr('json').split("'").join('"'));
			app.notify.alert(page_share_backup.functions.incomingShareOperatios(share), false, app.lang.string("share details", "page.share_backup"), app.lang.string("close details", "page.share_backup"), false, 50)
		});

		$(this.config.pageId).on('click', '.app-share-accept', function(event) {
			app.notify.close.all().done(function() {
				app.rc.getJson('approveIncomingShare', {
					policyID : app.store.localStorage.get("data-html5-themis-id")
				}, true).done(function() {
					app.notify.alert({
						text : app.lang.string("text accept share done", "sharing"),
						headline : app.lang.string("headline sharing", "sharing"),
						button : app.lang.string("Ok", "sharing"),
						callbackButton : false,
						delayInMs : 0
					});
				}).fail(function() {
					app.notify.alert({
						text : app.lang.string("text accept share fail", "sharing"),
						headline : app.lang.string("headline sharing", "sharing"),
						button : app.lang.string("Ok", "sharing"),
						callbackButton : false,
						delayInMs : 0
					});
				});
			});
		});

		$(this.config.pageId).on('click', '.app-share-decline', function(event) {
			app.notify.close.all().done(function() {
				app.rc.getJson('declineIncomingShare', {
					policyID : app.store.localStorage.get("data-html5-themis-id")
				}, true).done(function() {
					app.notify.alert({
						text : app.lang.string("text decline share done", "sharing"),
						headline : app.lang.string("headline sharing", "sharing"),
						button : app.lang.string("Ok", "sharing"),
						callbackButton : false,
						delayInMs : 0
					});
				}).fail(function() {
					app.notify.alert({
						text : app.lang.string("text decline share fail", "sharing"),
						headline : app.lang.string("headline sharing", "sharing"),
						button : app.lang.string("Ok", "sharing"),
						callbackButton : false,
						delayInMs : 0
					});
				});
			});
		});

		$(this.config.pageId).on('storagefilled', '.app-share-delete', function(event) {
			app.notify.close.all().done(function() {
				var webservice;

				if (app.store.localStorage.get("data-html5-revoketype") == "heritage")
					webservice = "deleteOwnShareHeritage"
				else if (app.store.localStorage.get("data-html5-revoketype") == "friends")
					webservice = "deleteOwnShare";

				app.rc.getJson(webservice, {
					policyID : app.store.localStorage.get("data-html5-themis-id")
				}, true).done(function() {
					app.notify.alert({
						text : app.lang.string("text delete share done", "sharing"),
						headline : app.lang.string("headline sharing", "sharing"),
						button : app.lang.string("Ok", "sharing"),
						callbackButton : false,
						delayInMs : 0
					});
				}).fail(function() {
					app.notify.alert({
						text : app.lang.string("text delete share fail", "sharing"),
						headline : app.lang.string("headline sharing", "sharing"),
						button : app.lang.string("Ok", "sharing"),
						callbackButton : false,
						delayInMs : 0
					});
				});
			});
		});

		$(this.config.pageId).on(
				'click',
				'.app-collection-share',
				function(event) {

					plugin_Notification.functions.dialog(page_search.singleResult.getSharingInputs(), false, app.lang.string("share collection", "page.share_backup"), app.lang.string("cancel", "page.share_backup"), app.lang.string(
							"share collection", "page.share_backup"), false, function() {

						var webservice, start, end;

						if ($("#selFriend option:selected").hasClass("friend"))
							webservice = "shareCollection";
						else if ($("#selFriend option:selected").hasClass("heritage"))
							webservice = "shareCollectionHeritage";

						start = ($('#txtStartDate').val()) ? parseFloat(moment($('#txtStartDate').val()).format("x")) : null;
						end = ($('#txtEndDate').val()) ? parseFloat(moment($('#txtEndDate').val()).format("x")) : null;

						app.rc.getJson(webservice, {
							withUserId : parseInt($("#selFriend option:selected").val()),
							policyValue : app.store.localStorage.get("data-html5-collectionId"),
							name : $("#txtShareName").val(),
							description : $("#txtShareDescription").val(),
							lifespanstart : start,
							lifespanend : end
						}, true).done(function() {
							app.notify.alert({
								text : app.lang.string("text share collection done", "sharing"),
								headline : app.lang.string("headline sharing", "sharing"),
								button : app.lang.string("Ok", "sharing"),
								callbackButton : false,
								delayInMs : 0
							});
						}).fail(function() {
							app.notify.alert({
								text : app.lang.string("text share collection fail", "sharing"),
								headline : app.lang.string("headline sharing", "sharing"),
								button : app.lang.string("Ok", "sharing"),
								callbackButton : false,
								delayInMs : 0
							});
						});
					}, 80);

				});

		$(this.config.pageId).on('click', '.collection', function(event) {
			var collection = JSON.parse($(this).attr('json').split("'").join('"')), searchValue = JSON.stringify(collection.documentIds).replace('[', '').replace(']', '').split(',').join(' OR ').split('"').join('');
			app.store.localStorage.set("data-html5-themis-search-value", searchValue);
			// alert(JSON.stringify(collection));
			app.notify.alert(page_share_backup.functions.collectionOperations(collection), false, app.lang.string("collection details", "page.share_backup"), app.lang.string("close details", "page.share_backup"), false, 50)

		});

		$(this.config.pageId).on('click', '.app-collection-view', function(event) {
			// window.setTimeout(function())
			// app.store.localStorage.set("data-html5-themis-search-value",
			// app.store.localStorage.get("data-html5-themis-search-value-temp"));
			app.nav.redirect("search.html", "none");
		});
	},

	functions : {
		incomingShareOperatios : function(share) {
			var div = app.ni.element.div({});
			if (!share.approvedBySharingpartner) {
				div.append(app.ni.element.a({
					classes : [ 'ui-btn', 'ui-btn-inline', 'app-share-accept' ],
					text : app.lang.string("accept share", "page.share_backup")
				}));
			}

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-share-decline' ],
				text : app.lang.string("decline share", "page.share_backup")
			}));

			div.append(page_share_backup.functions.getShareDetails(share));
			return div;
		},

		ownedShareOperatios : function(share) {
			var div = app.ni.element.div({});

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-share-delete' ],
				text : app.lang.string("revoke share", "page.share_backup")
			}));

			div.append(page_share_backup.functions.getShareDetails(share));
			return div;
		},

		collectionOperations : function(collection) {
			var div = app.ni.element.div({});

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-collection-share' ],
				text : app.lang.string("share collection", "page.share_backup")
			}));

			div.append(app.ni.element.a({
				classes : [ 'ui-btn', 'ui-btn-inline', 'app-collection-view' ],
				text : app.lang.string("view collection", "page.share_backup")
			}));

			div.append(page_share_backup.functions.getCollectionDetails(collection));
			return div;
		},

		getCollectionDetails : function(collection) {
			var div = app.ni.element.div({});
			$.each(collection, function(key, value) {
				div.append(app.ni.element.p({
					text : key + ": " + value
				}));
			});
			return div;
		},

		getShareDetails : function(share) {
			var div = app.ni.element.div({});
			$.each(share, function(key, value) {
				div.append(app.ni.element.p({
					text : key + ": " + value
				}));
			});
			return div;
		}
	},

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);

		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);

		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);

		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);

		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);

		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);

		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);

		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);

		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);

		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);

		}
	}
};var config_share_backup={
	"name":"share_backup",
	"shortname":"share_backup",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_start = {
	config : null,

	elements : {},

	constructor : function() {
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);

		initialisationPanel.show("");

	},
	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);

	},
	functions : {},
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {

		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {

		},

		// Triggered on the ���fromPage��� we are transitioning away from,
		// before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
		},

		// Triggered on the ���toPage��� we are transitioning to, before the
		// actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {

		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
		},

		// Triggered on the ���fromPage��� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			initialisationPanel.hide();
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {

		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
		},

		// Triggered on the ���toPage��� after the transition animation has
		// completed.
		pageshow : function(event, container) {

			window.setTimeout(function() {
				// alert(app.info.firstUse());
				if (app.info.firstUse() === true) {
					app.info.firstUse(false);
					app.help.navigation.redirect(app.config.startPage_firstStart, "slideup");
				} else if (app.sess.loggedIn()) {
					app.help.navigation.redirect(app.config.startPage_loggedIn, "slideup");
				} else {
					app.help.navigation.redirect(app.config.startPage, "slideup");
				}
			}, 1000);
		}
	}
};var config_start={
	"name":"start",
	"shortname":"start",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_startToken = {
	config : null,
	include : null,
	include_once : null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_startToken.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();

	},

	creator : function(container) {
		app.debug.trace("page_startToken.creator()");
		var content = container.find('div[data-role=content]');
		content.append("<h1>Erbe holen</h1>");

		content.append(app.ni.element.a({
			id : "btnDeadManSwitch",
			text : "Erbe holen",
			classes : [ 'ui-btn', 'ui-btn-inline' ]
		}));

	},

	async : {
		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_startToken.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_startToken.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_startToken.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_startToken.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_startToken.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_startToken.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_startToken.setEvents()");
		$(this.config.pageId).on('click', '#btnDeadManSwitch', function() {
			app.rc.getJson("deadManSwitch", {}, true).done(function() {
				alert("done");
			}).fail(function() {
				alert("fail");
			}).always()
		});
	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_startToken.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_startToken.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_startToken.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_startToken.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_startToken.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_startToken.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_startToken.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_startToken.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_startToken.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_startToken.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_startToken.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_startToken.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_startToken.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_startToken.pageshow()");
		}
	}
};var config_startToken={
	"name": "startToken",
	"shortname": "startToken",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_timelineSearch = {

	config : null,
	include: null,
	include_once: null,

	elements : null,

	constructor : function() {
		app.debug.trace("page_timelineSearch.constructor()");
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	creator : function(container) {
		app.debug.trace("page_timelineSearch.creator()");

    var content = $('div[data-role=content]');

		var form = app.ni.form.form({
			"id" : "frmSearch",
			"attributes" : {
				"action" : "#",
				"data-ajax" : "false"
			},
			"label" : false
		});

		form.append(app.ni.text.text({
			"id" : "txtSearch",
			"placeholder" : (app.store.localStorage.get("data-html5-themis-timelinesearch-value")) ?
			  app.store.localStorage.get("data-html5-themis-timelinesearch-value") :
				app.lang.string("search", "labels"),
			"label" : false,
			"labelText" : app.lang.string("search", "labels"),
			"container" : false
		}));

		form.append(app.ni.element.a({
			"id" : "btnSearch",
			"text" : app.lang.string("search", "actions"),
			"attributes" : {
				"href" : "#"
			},
			"classes" : [ 'ui-btn' ],
			"styles" : {
				"display" : "none"
			}
		}));

		content.append(form);

		// Anchor elements for spatiotemporal result view
		var sidebar = app.ni.element.div({ "id" : "divStsSidebar" });
		var map = app.ni.element.div({ "id" : "divStsMap" });
		sidebar.append(map);

		var histogram = app.ni.element.div({ "id" : "divStsHistogram" });
    sidebar.append(histogram);

		content.append(sidebar);

		var resultList = app.ni.element.div({ "id" : "divStsResultList"});
    content.append(resultList);

		// Attach spatiotemporal UI to anchor elements
		this.spatioTemporalUI = new SpatioTemporalUI({
      resultList: resultList,
      map: map,
      timeHistogram: histogram,
			imagePath: '../ext/leaflet/images/',
			token: app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)
    });

		if (app.store.localStorage.get("data-html5-themis-timelinesearch-value") !== null) {
			window.setTimeout(function() {
				page_timelineSearch.update();
			}, 1000);
		}
	},

	async : {

		promise : null,

		result : null,

		elements : null,

		creator : function(container) {
			app.debug.trace("page_timelineSearch.async.creator()");
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			app.debug.trace("page_timelineSearch.async.call()");
			return app.rc.getJson();
		},

		done : function(container) {
			app.debug.trace("page_timelineSearch.async.done()");
		},

		fail : function(container) {
			app.debug.trace("page_timelineSearch.async.fail()");
			alert("WS fails: " + JSON.stringify(this.result));
		},

		always : function(container) {
			app.debug.trace("page_timelineSearch.async.always()");
		},

		abort : function(container) {
			app.debug.trace("page_timelineSearch.async.abort()");
		}
	},

	// set the jquery events
	setEvents : function(container) {
		app.debug.trace("page_timelineSearch.setEvents()");

		// Scroll the fixed sidebar, up to position top=0
    jQuery(document).scroll(function() {
      var scrollTop = jQuery(window).scrollTop(),
			    resultListTop = jQuery('#divStsResultList').offset().top;

      if (resultListTop > scrollTop)
			  jQuery('#divStsSidebar').css('top', resultListTop - scrollTop);
			else
				jQuery('#divStsSidebar').css('top', 10);
		});

		jQuery(this.config.pageId).on('submit', '#frmSearch', function(e) {
			e.preventDefault();
			app.store.localStorage.set("data-html5-themis-timelinesearch-value",
			  jQuery("#txtSearch").val());

			page_timelineSearch.update();
		});
	},

	update : function() {
    // TODO pagination - currently we just download the first 1.5k results
		app.rc.getJson('searchWithFilters', {
			query : app.store.localStorage.get('data-html5-themis-timelinesearch-value'),
			source : '',
			type : '',
			job : '',
			owner : '',
			tag : '',
			offsetStart: 0,
			offsetEnd: 1500
		}, true).done(function(results) {
      this.spatioTemporalUI.update(results);
		}.bind(this));
	},

	functions : {},

	events : {

		pagebeforechange : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforechange()");

		},

		pagebeforecreate : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforecreate()");
		},

		pagebeforehide : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforehide()");
		},

		pagebeforeload : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforeload()");
		},

		pagebeforeshow : function(event, container) {
			app.debug.trace("page_timelineSearch.pagebeforeshow()");
		},

		pagechange : function(event, container) {
			app.debug.trace("page_timelineSearch.pagechange()");
		},

		pagechangefailed : function(event, container) {
			app.debug.trace("page_timelineSearch.pagechangefailed()");
		},

		pagecreate : function(event, container) {
			app.debug.trace("page_timelineSearch.pagecreate()");
		},

		pagehide : function(event, container) {
			app.debug.trace("page_timelineSearch.pagehide()");
		},

		pageinit : function(event, container) {
			app.debug.trace("page_timelineSearch.pageinit()");
		},

		pageload : function(event, container) {
			app.debug.trace("page_timelineSearch.pageload()");
		},

		pageloadfailed : function(event, container) {
			app.debug.trace("page_timelineSearch.pageloadfailed()");
		},

		pageremove : function(event, container) {
			app.debug.trace("page_timelineSearch.pageremove()");
		},

		pageshow : function(event, container) {
			app.debug.trace("page_timelineSearch.pageshow()");
		}
	}
};
;var config_timelineSearch={
	"name": "timelineSearch",
	"shortname": "timelineSearch",
	"template": "",
	"asyncLoading": false,
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0
};/*
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

var page_usersettings = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);
			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			content.append(app.ni.element.h1({
				"text" : app.lang.string("user_settings", "headlines")
			}));
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_usersettings={
	"name":"usersettings",
	"shortname":"usersettings",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_verify_email = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');

			content.append(app.ni.element.h1({
				"text" : app.lang.string("verify_email", "headlines"),
			}));

			content.append(app.ni.element.p({
				"text" : app.lang.string("verify_email", "texts"),
			}));

			content.append(app.ni.text.text({
				"id" : "txtVerificationKey",
				"placeholder" : app.lang.string("verification_key", "labels"),
				"label" : true,
				"labelText" : app.lang.string("verification_key", "labels"),
				"container" : true
			}));

			content.append(app.ni.button.button({
				"id" : "btnVerifyEmail",
				"placeholder" : app.lang.string("verify_email", "labels"),
				"label" : true,
				"labelText" : app.lang.string("verify_email", "labels"),
				"container" : true,
				"value" : app.lang.string("verify_email", "actions")
			}));

			content.append(app.ni.element.a({
				"id" : "lnkResendVerificationKey",
				"text" : app.lang.string("resend_verification_key", "actions"),
				"attributes" : {
					"href" : "#"
				}
			}));

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		
		try {
			$(container).on("click", "#btnVerifyEmail", function() {
				app.debug.alert("page_" + page_verify_email.config.name + " #btnVerifyEmail click", 25);
				if ((json = app.rc.getJson("verifyEmail", {
					"verificationKey" : container.find("#txtVerificationKey").val(),
				})) != false) {
					if (json.username == "success") {
						app.store.localStorage.set("data-html5-themis-activated", true);
						$.mobile.changePage("start.html");
					} else {
						app.notify.alert(app.lang.string("bad_verify_email", "notifications"), app.lang.string("verify_email", "headlines"), app.lang.string("", "headlines"));
					}
				} else {
					app.notify.alert(app.lang.string("bad_verify_email", "notifications"), app.lang.string("verify_email", "headlines"), app.lang.string("", "headlines"));
				}
			});
			$(container).on("click", "#lnkResendVerificationKey", function() {
				app.debug.alert("page_" + page_verify_email.config.name + " #lnkResendVerificationKey click", 25);
				if ((json = app.rc.getJson("newVerficiationEmail", {
					"username" : app.store.localStorage.get("data-html5-themis-username"),
				})) != false) {
					if (json.username) {
						app.notify.alert(app.lang.string("varification_key_resend", "notifications"), app.lang.string("verify_email", "headlines"), app.lang.string("verify_email", "headlines"));

					} else {
						alert("Email nicht gesendet");
					}
				}
			});

			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;

	},


	functions : {},

	
	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_verify_email={
	"name":"verify_email",
	"shortname":"verify_email",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};/*
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

var page_zip_archive = {
	config : null,

	elements : null,



	constructor : function() {
		app.debug.alert("page_" + this.config.name + ".constructor()", 10);
		var dfd = $.Deferred();
		dfd.resolve();
		return dfd.promise();
	},

	// load the html structure
	creator : function(container) {
		app.debug.alert("page_" + this.config.name + ".creator()", 10);
		
		try {
			app.debug.alert("page_" + this.config.name + ".creator()", 10);
			var header = container.find('div[data-role=header]');
			var content = container.find('div[data-role=content]');
			var navPanel = container.find('div#nav-panel');
			// content
			content.append(app.ni.element.h1({
				"text" : app.lang.string("zip_archive", "headlines")
			}));
			
			
			success = true;
		} catch (err) {
			app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
			app.debug.log(JSON.stringify(err, null, 4));
			success = false;
		}
		return success;
	},


	async : {
		promise : null,// to implement

		result : null,

		elements : null,

		creator : function(container) {
			var dfd = $.Deferred();
			dfd.resolve();
			return dfd.promise();
		},

		call : function(container) {
			return app.rc.getJson();
		},

		done : function(container) {
		},

		fail : function(container) {
		},

		always : function(container) {
		},

		abort : function(container) {
		}
	},


	// set the jquery events
	setEvents : function(container) {
		app.debug.alert("page_" + this.config.name + ".setEvents()", 10);
		

	},

	functions : {},

	

	events : {

		// Triggered twice during the page change cyle: First prior to any page
		// loading or transition and next after page loading completes
		// successfully,
		// but before the browser history has been modified by the navigation
		// process.
		pagebeforechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, before most plugin
		// auto-initialization occurs.
		pagebeforecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� we are transitioning away from, before
		// the
		// actual transition animation is kicked off.
		pagebeforehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered before any load request is made.
		pagebeforeload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� we are transitioning to, before the actual
		// transition animation is kicked off.
		pagebeforeshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagebeforeshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// This event is triggered after the changePage() request has finished
		// loading the page into the DOM and all page transition animations have
		// completed.
		pagechange : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechange()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the changePage() request fails to load the page.
		pagechangefailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagechangefailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered when the page has been created in the DOM (via ajax or
		// other)
		// and after all widgets have had an opportunity to enhance the
		// contained
		// markup.
		pagecreate : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagecreate()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �fromPage� after the transition animation has
		// completed.
		pagehide : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pagehide()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the page being initialized, after initialization occurs.
		pageinit : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageinit()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered after the page is successfully loaded and inserted into the
		// DOM.
		pageload : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageload()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered if the page load request failed.
		pageloadfailed : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageloadfailed()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered just before the framework attempts to remove an external
		// page
		// from the DOM.
		pageremove : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageremove()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;
		},

		// Triggered on the �toPage� after the transition animation has
		// completed.
		pageshow : function(event, container) {
			app.debug.alert("page_" + $(container).attr('id') + ".pageshow()", 12);
			
			try {
				success = true;
			} catch (err) {
				app.debug.alert("Fatal exception!\n\n" + JSON.stringify(err, null, 4), 50);
				app.debug.log(JSON.stringify(err, null, 4));
				success = false;
			}
			return success;

		}
	}
};var config_zip_archive={
	"name":"zip_archive",
	"shortname":"zip_archive",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
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

var pages = {
	config : null,
	pageNames : [],
	refreshInterval : null,

	// history of pages
	history : [],

	constructor : function() {
		var dfd = $.Deferred();

		// reverse order

		startup.addFunction("lapstone is calling the plugins' pages loaded function", pages.callPluginsPagesLoaded, "");
		startup.addFunction("lapstone is calling the pages' setEvents() function", pages.setEvents, "");
		startup.addFunction("lapstone is verifying the pages' properties", pages.verifyPages, "");
		startup.addFunction("lapstone is including external scripts for pages", pages.include, "");
		startup.addFunction("lapstone is loading the pages", pages.loadPages, "");
		startup.addFunction("lapstone is verifying the pages' names", pages.verifyPageNames, "");
		startup.addFunction("lapstone is loading the pages' configuration", pages.loadPageConfig, "");
		startup.addFunction("lapstone is loading the script for global pages", globalLoader.AsyncScriptLoader, "../files/globalPage.js");

		dfd.resolve();
		return dfd.promise();
	},

	include : function() {
		var dfd = $.Deferred(), currentPage, promises = Array(), promiseOfPromises, resolve = true;

		$.each(pages.pageNames, function(key, pageName) {
			app.debug.debug("pages.include() - processing page: " + pageName);
			currentPage = window['page_' + pageName];
			if (currentPage.include_once != undefined) {
				if (Array.isArray(currentPage.include_once)) {
					resolve = false;
					$.each(currentPage.include_once, function(index, includeName) {
						var url = "../js/page/include/" + includeName;
						app.debug.debug("pages.include() - including: " + url);
						promises.push(globalLoader.AsyncScriptLoader(url));
					});

					promiseOfPromises = $.when.apply($, promises);

					promiseOfPromises.done(function() {
						app.debug.debug("pages.include() - including done");
						dfd.resolve();
					}).fail(function() {
						app.debug.debug("pages.include() - including: fails");
						dfd.reject();
					});
				}
			}
		});

		if (resolve)
			dfd.resolve();

		return dfd.promise();

	},

	callPluginsPagesLoaded : function() {
		var dfd = $.Deferred();

		$.each(plugins.pluginNames, function(key, value) {
			window['plugin_' + value].pagesLoaded();
		});

		dfd.resolve();
		return dfd.promise();

	},

	loadPageConfig : function() {
		var dfd = $.Deferred(), promise;

		if (app.config.min) {
			pages.config = config_json;
			dfd.resolve();
		} else {
			promise = globalLoader.AsyncJsonLoader("../js/page/pages.json");
			promise.done(function(json) {
				pages.config = json;
				dfd.resolve();
			});
			promise.fail(function() {
				dfd.reject();
			});
		}

		return dfd.promise();
	},

	verifyPageNames : function() {
		var dfd = $.Deferred();

		dfd.resolve();
		return dfd.promise();

	},

	verifyPages : function() {
		var dfd = $.Deferred(), currentPage;
		// alert(JSON.stringify(pages.pageNames));
		$.each(pages.pageNames, function(key, pageName) {
			currentPage = window['page_' + pageName];

			if (currentPage.config === undefined) {
				console.warn("The page: " + pageName + " has no 'config' property.");
			} else {
				if (currentPage.config.name === undefined)
					console.warn("The page: " + pageName + " has no 'config.name' property.");

				if (currentPage.config.shortname === undefined)
					console.warn("The page: " + pageName + " has no 'config.shortname' property.");

				if (currentPage.config.template === undefined)
					console.warn("The page: " + pageName + " has no 'config.template' property.");

				if (currentPage.config.useKeepAlive === undefined)
					console.warn("The page: " + pageName + " has no 'config.useKeepAlive' property.");

				if (currentPage.config.loginObligate === undefined)
					console.warn("The page: " + pageName + " has no 'config.loginObligate' property.");

				if (currentPage.config.isGlobalPage === undefined)
					console.warn("The page: " + pageName + " has no 'config.isGlobalPage' property.");

				if (currentPage.config.contentRefresh === undefined)
					console.warn("The page: " + pageName + " has no 'config.contentRefresh' property.");

				if (currentPage.config.contentRefreshInterval === undefined)
					console.warn("The page: " + pageName + " has no 'config.contentRefreshInterval' property.");

				if (currentPage.config.asyncLoading === undefined)
					console.warn("The page: " + pageName + " has no 'config.asyncLoading' property.");
			}

			if (currentPage.elements === undefined)
				console.warn("The page: " + pageName + " has no 'elements' property.");

			if (currentPage.constructor === undefined)
				console.warn("The page: " + pageName + " has no 'constructor' property.");

			if (currentPage.creator === undefined)
				console.warn("The page: " + pageName + " has no 'creator' property.");

			if (currentPage.async === undefined) {
				console.warn("The page: " + pageName + " has no 'async' property.");

			} else {
				if (currentPage.async.promise === undefined)
					console.warn("The page: " + pageName + " has no 'async.promise' property.");

				if (currentPage.async.result === undefined)
					console.warn("The page: " + pageName + " has no 'async.result' property.");

				if (currentPage.async.elements === undefined)
					console.warn("The page: " + pageName + " has no 'async.elements' property.");

				if (currentPage.async.creator === undefined)
					console.warn("The page: " + pageName + " has no 'async.creator' property.");

				if (currentPage.async.call === undefined)
					console.warn("The page: " + pageName + " has no 'async.call' property.");

				if (currentPage.async.done === undefined)
					console.warn("The page: " + pageName + " has no 'async.done' property.");

				if (currentPage.async.fail === undefined)
					console.warn("The page: " + pageName + " has no 'async.fail' property.");

				if (currentPage.async.always === undefined)
					console.warn("The page: " + pageName + " has no 'async.always' property.");

				if (currentPage.async.abort === undefined)
					console.warn("The page: " + pageName + " has no 'async.abort' property.");
			}

			if (currentPage.setEvents === undefined)
				console.warn("The page: " + pageName + " has no 'setEvents' property.");

			if (currentPage.functions === undefined)
				console.warn("The page: " + pageName + " has no 'functions' property.");
		});

		dfd.resolve();
		return dfd.promise();

	},

	loadPageConfiguration : function(key) {
		var dfd = $.Deferred(), promise;
		if (app.config.min) {
			window['page_' + key].config = window['config_' + key];
			dfd.resolve();
		} else {
			promise = globalLoader.AsyncJsonLoader("../js/page/page." + key + ".json");
			promise.done(function(json) {
				window['page_' + key].config = json;
				dfd.resolve();
			});
			promise.fail(function() {
				dfd.reject();
			});
		}
		// 
		return dfd.promise();
	},

	onPageLoaded : function(key) {
		var dfd = $.Deferred(), promise, promiseConfiguration;

		if (window['page_' + key] == undefined) {
			alert("Fatal error: Page class is not defined: page_" + key);
			return;
		}

		promiseConfiguration = pages.loadPageConfiguration(key);

		promiseConfiguration.done(function() {
			if (window['page_' + key].config.name == undefined) {
				alert("Fatal error: The property 'name' is not defined in JSON file: ../js/page." + key + ".json")
				return false;
			}
			if (window['page_' + key].config.shortname == undefined) {
				alert("Fatal error: The property 'shortname' is not defined in JSON file: ../js/page." + key + ".json")
				return false;
			}

			// insert promise
			promise = window['page_' + key].constructor();
			promise.done(function() {
				window['page_' + key]['config']['page'] = key;
				window['page_' + key]['config']['pageId'] = '#' + key;

				app[window['page_' + key].config.shortname] = window['page_' + key].functions;

				pages.pageNames.push(key);

				dfd.resolve();
			});
			promise.fail(function() {
				dfd.reject();
			});

		});

		promiseConfiguration.fail(function() {
			dfd.reject();
		});

		return dfd.promise();

	},

	loadPages : function() {
		var dfd = $.Deferred(), promises_js = Array(), promiseOfPromises_js, promises_func = Array(), promiseOfPromises_func;

		$.each(pages.config, function(key, value) {
			if (app.config.min) {
				promises_js.push(pages.onPageLoaded(key));
			} else {
				promises_js.push(globalLoader.AsyncScriptLoader("../js/page/page." + key + ".js"));
			}
		});
		promiseOfPromises_js = $.when.apply($, promises_js);

		if (app.config.min) {
			promiseOfPromises_js.done(function() {
				pages.callPluginPageEventFunctions();
				dfd.resolve();
			});
			promiseOfPromises_js.fail(function() {
				dfd.reject();
			});
		} else {

			promiseOfPromises_js.done(function() {
				$.each(pages.config, function(key, value) {
					promises_func.push(pages.onPageLoaded(key));
				});

				promiseOfPromises_func = $.when.apply($, promises_func);

				promiseOfPromises_func.done(function() {
					pages.callPluginPageEventFunctions();
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
		return dfd.promise();

	},

	// call plugins' page functions
	// is called only once
	// use delegates in plugins
	callPluginPageEventFunctions : function() {
		var dfd = $.Deferred();

		$.each(plugins.pluginNames, function(key, value) {
			app.debug.alert("try to call: plugin_" + value + ".pageSpecificEvents()", 6);
			window['plugin_' + value].pageSpecificEvents();
		});

		dfd.resolve();
		return dfd.promise();

	},

	// call plugins' page functions
	// by pagebeforecreate
	callPluginsPageFunctions : function(container) {
		var dfd = $.Deferred();

		var success = true;
		// alert("plugin page functin");
		$.each(plugins.pluginNames, function(key, value) {
			window['plugin_' + value].afterHtmlInjectedBeforePageComputing(container);
		});

		dfd.resolve();
		return dfd.promise();

	},
	setEvents : function() {
		var dfd = $.Deferred();

		// jQM 1.4.5+
		// pagecontainer
		// $(document).on("pagecontainerbeforechange", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerbeforehide", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerbeforeload", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerbeforeshow", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerbeforetransition", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerchange", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerchangefailed", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainercreate", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerhide", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerhide", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerload", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pageloadfailed", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerloadfailed", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainerremove", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainershow", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecontainertransition", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// // page
		// $(document).on("pagebeforecreate", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });
		//
		// $(document).on("pagecreate", function(event, ui) {
		// var prev, to;
		// app.debug.alert("pages.setEvents() - Event: " + event.type
		// + " on: " + event.target);
		// app.debug.alert("pages.setEvents() - properties of ui
		// object: " + Object.keys(ui).toString());
		// prev = (typeof ui.prevPage == 'object') ? ((ui.prevPage.jquery) ?
		// ui.prevPage.attr("id") : ui.prevPage) : ui.prevPage;
		// app.debug.alert("pages.setEvents() - prevPage: " + prev);
		// to = (typeof ui.toPage == 'object') ? ((ui.toPage.jquery) ?
		// ui.toPage.attr("id") : ui.toPage) : ui.toPage;
		// app.debug.alert("pages.setEvents() - toPage: " + to);
		// });

		// old

		// jQuery Mobile Events

		// jquery Mobile Events for specific pages

		/*
		 * 
		 */
		$(document).on('pagebeforechange', '.app-page', function(event) {
			app.debug.alert("pages.js jQuery mobile event: pagebeforechange for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagebeforechange");
		});

		/*
		 * 
		 */
		$(document).on('pagebeforecreate', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforecreate for: " + $(this).attr('id'));

			pages.eventFunctions.pageTypeSelector(event, $(this), "pagebeforecreate");
			// ---
			//
			// alert($(this).attr('data-type'));
			if ($(this).attr('data-type') == "static" || $(this).attr('data-type') == "static-inline") {

			} else if (window['page_' + $(this).attr('id')] == undefined) {
				alert("-Fatal error: Can't find the page object: page_" + $(this).attr('id') + "; Please have a look to your pages.json file. You'll be redirected to the index.html page.");
				app.help.navigation.redirect("index.html");
			} else {
				// case 3: page is a common lapstone page

			}

		});

		/*
		 * 
		 */
		$(document).on('pagebeforehide', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforehide for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagebeforehide");
		});

		/*
		 * 
		 */
		$(document).on('pagebeforeload', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforeload for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagebeforeload");
		});

		/*
		 * 
		 */
		$(document).on('pagebeforeshow', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagebeforeshow for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagebeforeshow");
		});

		/*
		 * 
		 */
		$(document).on('pagechange', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagechange for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagechange");
		});

		/*
		 * 
		 */
		$(document).on('pagechangefailed', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagechangefailed for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagechangefailed");
		});

		/*
		 * 
		 */
		$(document).on('pagecreate', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagecreate for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagecreate");
		});

		/*
		 * 
		 */
		$(document).on('pagehide', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pagehide for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pagehide");
		});

		/*
		 * 
		 */
		$(document).on('pageinit', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageinit for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pageinit");
		});

		/*
		 * 
		 */
		$(document).on('pageload', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageload for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pageload");
		});

		/*
		 * 
		 */
		$(document).on('pageloadfailed', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageloadfailed for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pageloadfailed");
		});

		/*
		 * 
		 */
		$(document).on('pageremove', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageremove for: " + $(this).attr('id'));
			pages.eventFunctions.pageTypeSelector(event, $(this), "pageremove");
		});

		/*
		 * 
		 */
		$(document).on('pageshow', '.app-page', function(event) {
			app.debug.alert("jQuery mobile event: pageshow for: " + $(this).attr('id'));

			pages.history.push($(this).attr('id'));

			pages.eventFunctions.pageTypeSelector(event, $(this), "pageshow");
		});

		dfd.resolve();
		return dfd.promise();

	},

	// a function for each event
	eventFunctions : {
		pageTypeSelector : function(event, container, eventName) {
			app.debug.alert("plugin.eventFunctions.pageTypeSelector(" + event + ", " + container + ", " + eventName + ")");
			app.debug.alert("PageId: " + container.attr('id'));

			// alert(container.attr('data-type'));
			if (container.attr('data-type') == "static") {
				// case 1: page is static
				app.debug.alert("case: page type is static");
				pages.eventFunctions.everyPage[eventName](event, container);
				pages.eventFunctions.staticPage[eventName](event, container);
			} else if (container.attr('data-type') == "static-inline") {
				// case 2: page is inline-static
				app.debug.alert("case: page type is inline-static");
				var staticContainer = container.clone();

				if (container.attr('data-global') === "true") {
					globalPage[eventName](event, container);
				}

				pages.eventFunctions.everyPage[eventName](event, container);
				pages.eventFunctions.staticInlinePage[eventName](event, container, staticContainer);
			} else if (window['page_' + container.attr('id')] == undefined) {
				// case 3: page ist not defined in pages.json
				app.debug.alert("case: page ist not defined in pages.json");
				alert("plugin.eventFunctions.pageTypeSelector() - Fatal error: Can't find the page object: page_" + container.attr('id') + "; Please have a look to your pages.json file.");
				app.help.navigation.redirect("index.html");
			} else {
				// case 4: page is a common lapstone page
				app.debug.alert("case: page is a common lapstone page");
				if (window["page_" + container.attr('id')].config.isGlobalPage == true)
					globalPage[eventName](event, container);
				else if (window["page_" + container.attr('id')].config.isGlobalPage == undefined)
					globalPage[eventName](event, container);
				pages.eventFunctions.everyPage[eventName](event, container);
				pages.eventFunctions.lapstonePage[eventName](event, container);
			}

		},

		everyPage : {
			pagebeforechange : function(event, container) {
				// <!--
				app.debug.alert("plugin.eventFunctions.everyPage.pagebeforechange(" + event + ", " + container + ")");
				// -->
			},
			pagebeforecreate : function(event, container) {
				// <!--
				app.debug.alert("plugin.eventFunctions.everyPage.pagebeforecreate(" + event + ", " + container + ")");
				// -->
			},
			pagebeforehide : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagebeforehide(" + event + ", " + container + ")");

				app.debug.alert("plugin.eventFunctions.everyPage.pagehide: clear refresh interval");
				/*
				 */
			},
			pagebeforeload : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagebeforeload(" + event + ", " + container + ")");
			},
			pagebeforeshow : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagebeforeshow(" + event + ", " + container + ")");

				app.debug.alert("plugin.eventFunctions.everyPage.pagebeforeshow: check refresh interval");

			},
			pagechange : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagechange(" + event + ", " + container + ")");
			},
			pagechangefailed : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagechangefailed(" + event + ", " + container + ")");
			},
			pagecreate : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagecreate(" + event + ", " + container + ")");
			},
			pagehide : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pagehide(" + event + ", " + container + ")");

				app.debug.alert("plugin.eventFunctions.everyPage.pagehide: clear page specific event delegates");
				$("#" + container.attr("id")).off();
				$(document).off("#" + container.attr("id"));

				app.debug.alert("remove page from DOM: " + container.attr('id'));
				container.remove();

			},
			pageinit : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pageinit(" + event + ", " + container + ")");
			},
			pageload : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pageload(" + event + ", " + container + ")");
			},
			pageloadfailed : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pageloadfailed(" + event + ", " + container + ")");
			},
			pageremove : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pageremove(" + event + ", " + container + ")");
			},
			pageshow : function(event, container) {
				app.debug.alert("plugin.eventFunctions.everyPage.pageshow(" + event + ", " + container + ")");
			}
		},

		staticPage : {
			pagebeforechange : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagebeforechange(" + event + ", " + container + ")");
			},
			pagebeforecreate : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagebeforecreate(" + event + ", " + container + ")");

				app.debug.alert("do language string replacement");
				container.find("[data-language]").each(function(index, element) {
					var languageArray = $(this).attr('data-language').split(".");
					$(this).html(app.lang.string(languageArray[1], languageArray[0]));
				});
			},
			pagebeforehide : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagebeforehide(" + event + ", " + container + ")");
			},
			pagebeforeload : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagebeforeload(" + event + ", " + container + ")");
			},
			pagebeforeshow : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagechange(" + event + ", " + container + ")");
			},
			pagechange : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagechange(" + event + ", " + container + ")");
			},
			pagechangefailed : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagechangefailed(" + event + ", " + container + ")");
			},
			pagecreate : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagecreate(" + event + ", " + container + ")");
			},
			pagehide : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pagehide(" + event + ", " + container + ")");
			},
			pageinit : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pageinit(" + event + ", " + container + ")");
			},
			pageload : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pageload(" + event + ", " + container + ")");
			},
			pageloadfailed : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pageloadfailed(" + event + ", " + container + ")");
			},
			pageremove : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pageremove(" + event + ", " + container + ")");
			},
			pageshow : function(event, container) {
				app.debug.alert("plugin.eventFunctions.staticPage.pageshow(" + event + ", " + container + ")");
			}
		},
		staticInlinePage : {
			pagebeforechange : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagebeforechange(" + event + ", " + container + ")");
			},
			pagebeforecreate : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagebeforecreate(" + event + ", " + container + ")");
				app.debug.alert("do language string replacement");

				staticContainer.find("[data-language]").each(function(index, element) {
					var languageArray = $(this).attr('data-language').split(".");
					$(this).html(app.lang.string(languageArray[1], languageArray[0]));
				});
				var html = staticContainer.html();
				container.find('div[data-role=content]').replaceWith(html);
				// wichtig, dass macht irgend eine sache mit den dialog feldern.
				pages.callPluginsPageFunctions(container);
			},
			pagebeforehide : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagebeforehide(" + event + ", " + container + ")");
			},
			pagebeforeload : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagebeforeload(" + event + ", " + container + ")");
			},
			pagebeforeshow : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagechange(" + event + ", " + container + ")");

			},
			pagechange : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagechange(" + event + ", " + container + ")");
			},
			pagechangefailed : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagechangefailed(" + event + ", " + container + ")");
			},
			pagecreate : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagecreate(" + event + ", " + container + ")");
			},
			pagehide : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pagehide(" + event + ", " + container + ")");
			},
			pageinit : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pageinit(" + event + ", " + container + ")");
			},
			pageload : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pageload(" + event + ", " + container + ")");
			},
			pageloadfailed : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pageloadfailed(" + event + ", " + container + ")");
			},
			pageremove : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pageremove(" + event + ", " + container + ")");
			},
			pageshow : function(event, container, staticContainer) {
				app.debug.alert("plugin.eventFunctions.staticInlinePage.pageshow(" + event + ", " + container + ")");
			}
		},
		lapstonePage : {
			pagebeforechange : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforechange(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagebeforechange(event, container);
			},
			pagebeforecreate : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate(" + event + ", " + container + ")");

				if (window['page_' + container.attr('id')].config.loginObligate && !app.sess.loggedIn()) {
					app.notify.add.alert(app.lang.string("login obligate text", "lapstone"), false, app.lang.string("login obligate headline", "lapstone"), app.lang.string("login obligate confirm", "lapstone"));
					app.sess.destroyAll();
					app.help.navigation.redirect(app.config.startPage, "slidefade");

				} else if (plugins.config.KeepAlive === true) {
					app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: : WebServiceClient requires keepAlive");

					if (window['page_' + container.attr('id')].config.useKeepAlive != undefined) {
						app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: Page has keepAlive configuration in page.json");

						if (window['page_' + container.attr('id')].config.useKeepAlive) {
							app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: global keepAlive is TRUE");
							if (app.alive.isAlive() === true) {
								app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: server isAlive");

								pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(event, container);
							} else {
								app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: no connection to server");
								app.debug.alert("Can't load page because keepAlive failed. Check your connection. You'll be redirected to the index.html page.", 60);
								app.alive.badConnectionHandler();
							}
						} else {
							app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: Page has NO keepAlive entry in page.json file");
							pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(event, container);
						}
					} else {
						app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: Page does not require keepAlive");
						app.debug.alert("No useKeepAlive entry in your page_" + container.attr('id') + ".json. Please add it.", 60);
						pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(event, container);
					}
				} else {
					app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforecreate() case: WebServiceClient does not require keepAlive");
					pages.eventFunctions.lapstonePage.pagebeforecreate_createPage(event, container);
				}
			},
			pagebeforecreate_createPage : function(event, container) {
				app.debug.trace("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage()");
				app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - pageId: " + container.attr('id'));

				var promise, elements = null, timeout;

				window['page_' + container.attr('id')].events.pagebeforecreate(event, container);

				// rquire
				if (window['page_' + container.attr('id')].include != undefined) {
					app.debug.trace("pages.js - page has an include array");

				}

				else {
					app.debug.trace("pages.js - page has no include array");
				}

				// require once
				if (window['page_' + container.attr('id')].include_once != undefined) {
					app.debug.trace("pages.js - page has an include_once array");
				}

				else {
					app.debug.trace("pages.js - page has no include_once array");
				}

				// preload template
				if (window['page_' + container.attr('id')].config.template != undefined) {
					app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - case: template != undefined");

					if (typeof window['page_' + container.attr('id')].config.template == "string" && window['page_' + container.attr('id')].config.template.length > 1) {
						app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - case: typeof template == string");
						app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - overwrite template");

						app.template.overwrite("#" + container.attr("id"), window['page_' + container.attr('id')].config.template);

						elements = app.template.elements(window['page_' + container.attr('id')].config.template);
						window['page_' + container.attr('id')].elements = {};

						app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - set elements");
						app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - html code of page: " + container[0].outerHTML);

						$.each(elements, function(name, selector) {
							app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - set content from template to: " + "page_" + container.attr('id'));
							app.debug.debug("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage() - set: " + name, 20);
							// alert(window['page_' +
							// container.attr('id')].elements[name]);
							window['page_' + container.attr('id')].elements[name] = container.find(selector);
						});

						// alert('page_' + container.attr('id'));
						// window['page_' +
						// container.attr('id')].elements =
						// elements;

					}
				}

				// async or not async
				if (window['page_' + container.attr('id')].config.asyncLoading === true) {
					app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - page IS async");

					window['page_' + container.attr('id')].async.elements = window['page_' + container.attr('id')].elements;

					app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - call: page.async.creator()");
					promise = window['page_' + container.attr('id')].async.creator(container);

					timeout = window.setTimeout(function() {
						app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - show loader");
						app.notify.loader.bubbleDiv(true, app.lang.string("text", "pageloading"), app.lang.string("headline", "pageloading"));
					}, 1200);

					promise.done(function(result) {
						if (result) {
							app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - set: page.async.result: " + JSON.stringify(result));
							window['page_' + container.attr('id')].async.result = result;
						}

						else {
							app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - set: page.async.result: []");
							window['page_' + container.attr('id')].async.result = Array();
						}

						app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - call: page.async.done()");
						window['page_' + container.attr('id')].async.done(container);
						app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - enchant page");
						app.help.jQM.enhance(container);

					});

					promise.fail(function(error) {
						app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - set: page.async.result: " + JSON.stringify(error));
						window['page_' + container.attr('id')].async.result = error;
						app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - call: page.async.fail()");
						window['page_' + container.attr('id')].async.fail(container);
					});

					promise.always(function() {
						window.clearTimeout(timeout);
						app.notify.loader.remove();
						app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - call: page.async.always()");
						window['page_' + container.attr('id')].async.always(container);
					});

				} else {
					app.debug.alert("pages.eventFunctions.lapstonePage.pagebeforecreate_createPage - page IS NOT async");

					window['page_' + container.attr('id')].creator(container);
				}

				window['page_' + container.attr('id')].setEvents(container);
				// call plugins' page functions
				app.debug.alert('Call: pages.callPluginsPageFunctions()');
				pages.callPluginsPageFunctions(container);
				app.debug.alert('add data- HTML Attributes');
				$.each(window['page_' + container.attr('id')].config, function(key, value) {
					container.attr("data-" + key, value);
				});
			},
			pagebeforehide : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforehide(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagebeforehide(event, container);

				if (pages.refreshInterval != null) {
					clearInterval(pages.refreshInterval);
					pages.refreshInterval = null;
				}
			},
			pagebeforeload : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagebeforeload(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagebeforeload(event, container);
			},
			pagebeforeshow : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagechange(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagebeforeshow(event, container);

				if (window['page_' + container.attr('id')].config.contentRefresh == true) {
					app.debug.alert("plugin.eventFunctions.everyPage.pagebeforeshow: set refresh interval every " + window['page_' + container.attr('id')].config.contentRefreshInterval + " ms");

					pages.refreshInterval = window.setInterval(function() {
						// $().empty();

						$('div[data-role=content]').children().fadeOut(500).promise().then(function() {
							$('div[data-role=content]').empty();
							window['page_' + container.attr('id')].creator(container);
						});

					}, window['page_' + container.attr('id')].config.contentRefreshInterval);
				}
			},
			pagechange : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagechange(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagechange(event, container);
			},
			pagechangefailed : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagechangefailed(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagechangefailed(event, container);
			},
			pagecreate : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagecreate(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagecreate(event, container);
			},
			pagehide : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pagehide(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pagehide(event, container);
			},
			pageinit : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pageinit(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pageinit(event, container);
			},
			pageload : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pageload(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pageload(event, container);
			},
			pageloadfailed : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pageloadfailed(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pageloadfailed(event, container);
			},
			pageremove : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pageremove(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pageremove(event, container);
			},
			pageshow : function(event, container) {
				app.debug.alert("plugin.eventFunctions.lapstonePage.pageshow(" + event + ", " + container + ")");
				window['page_' + container.attr('id')].events.pageshow(event, container);
				if (navigator.splashscreen != undefined)
					navigator.splashscreen.hide();
			}
		}
	}
};
;var config_json = {"activate_account":true,"backup_edit":true,"backup_jobs":true,"backup_log":true,"badConnection":true,"create_backup_1_inputAuth":true,"create_backup_1_newSource":true,"create_backup_1_oAuthFinished":true,"create_backup_1":true,"create_backup_2_inputAuth":true,"create_backup_2_newSink":true,"create_backup_2_oAuthFinished":true,"create_backup_2":true,"create_backup_3":true,"create_backup_oAuthHandler":true,"index":true,"job_details":true,"login":true,"register_1_terms":true,"register_2_name":true,"register_3_credentials":true,"register_4_final":true,"register":true,"search":true,"settings":true,"share_backup":true,"start":true,"usersettings":true,"verify_email":true,"zip_archive":true,"loginToken":true,"friendList":true,"startToken":true,"timelineSearch":true};