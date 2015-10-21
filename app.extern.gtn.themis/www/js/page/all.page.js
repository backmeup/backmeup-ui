;var page_activate_account={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");b.append(app.ni.element.h1({text:app.lang.string("activate_account","headlines")}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_activate_account={
	"name":"activate_account",
	"shortname":"activate_account",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_backup_edit={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{var f=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e=app.rc.getJson("getBackupjob",{jobId:app.store.localStorage.get("data-html5-themis-backupid"),expandUser:false,expandToken:false,expandProfiles:false,expandProtocol:false},true);e.done(function(g){d.append(app.ni.element.h1({text:app.lang.string("backup_edit","headlines")+" - "+g.jobTitle}));d.append(app.ni.element.h2({text:app.lang.string("backup_job_status","headlines")}));d.append(app.ni.element.p({text:g.jobStatus}));d.append(app.ni.element.h2({text:app.lang.string("backup_hold","headlines")}));d.append(app.ni.element.p({text:g.onHold}));d.append(app.ni.element.h2({text:app.lang.string("backup_schedule","headlines")}));d.append(app.ni.element.p({text:g.schedule}));d.append(app.ni.element.h2({text:app.lang.string("backup_created","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.created/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_modified","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.modified/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_start","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.start/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_next","headlines")}));d.append(app.ni.element.p({text:date("F j, Y, g:i a",g.next/1000)}));d.append(app.ni.element.h2({text:app.lang.string("backup_delay","headlines")}));d.append(app.ni.element.p({text:g.delay}));d.append(app.ni.element.a({id:"btnNewBackup",text:app.lang.string("backup_log","actions"),attributes:{href:"backup_log.html"},classes:["ui-btn"]}));app.notify.loader.remove();app.help.jQM.enhance(d)});success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_backup_edit={
	"name":"backup_edit",
	"shortname":"backup_edit",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_backup_jobs={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson([["getBackupjobsActive",{expand:"true"}],["getBackupjobsPaused",{expand:"true"}],["getBackupjobsCreated",{expand:"true"}],["getBackupjobsNeedUserInteraction",{expand:"true"}]],true,3);d.done(function(k){var g=k.getBackupjobsActive,l=k.getBackupjobsNeedUserInteraction,h=k.getBackupjobsPaused,i=k.getBackupjobsCreated;c.append(app.ni.element.h1({text:app.lang.string("backup_jobs","headlines")}));c.append(app.ni.element.a({id:"btnNewBackup",text:app.lang.string("create_backup","actions"),attributes:{href:"create_backup_1.html"},classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.a({id:"btnShareAll",text:app.lang.string("share all","page.backup_jobs"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.a({id:"btnShareAllFromNow",text:app.lang.string("share all from now","page.backup_jobs"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.h2({text:app.lang.string("paused backup jobs","headlines"),styles:{clear:"both"}}));var j=$(app.template.get("listA","responsive"));$.each(h,function(m,n){j.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("job_"+n.status),title:n.jobStatus,headline:n.jobTitle,text:"",classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId,"data-html5-themis-backuptitle":n.jobTitle}}))});app.notify.loader.remove();c.append(j);c.append(app.ni.element.h2({text:app.lang.string("created backup jobs","headlines"),styles:{clear:"both"}}));j=$(app.template.get("listA","responsive"));$.each(i,function(m,n){j.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("job_"+n.status),title:"Id: "+n.jobId,headline:n.jobTitle,text:n.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId,"data-html5-themis-backuptitle":n.jobTitle}}))});c.append(j);c.append(app.ni.element.h2({text:app.lang.string("active backup jobs","headlines"),styles:{clear:"both"}}));j=$(app.template.get("listA","responsive"));$.each(g,function(m,n){j.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("job_"+n.status),title:"Id: "+n.jobId,headline:n.jobTitle,text:n.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId,"data-html5-themis-backuptitle":n.jobTitle}}))});c.append(j);c.append(app.ni.element.h2({text:app.lang.string("need user interaction","headlines"),styles:{clear:"both"}}));j=$(app.template.get("listA","responsive"));$.each(l,function(m,n){j.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("job_"+n.status),title:"Id: "+n.jobId,headline:n.jobTitle,text:n.jobTitle,classes:["job"],attributes:{"data-html5-themis-backupid":n.jobId,"data-html5-themis-backuptitle":n.jobTitle}}))});c.append(j);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){app.notify.loader.remove();alert("ws error: "+g)})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_backup_jobs.config.pageId).on("click",".job",function(b){var c=$(this).attr("data-html5-themis-backuptitle");app.notify.alert(page_backup_jobs.functions.getAlertContent(),c,false,app.lang.string("backup job alert - go back","page.backup_jobs"),false,10)});$(page_backup_jobs.config.pageId).on("click","#btnBackupjobDetails",function(b){app.nav.redirect("backup_edit.html","none")});$(page_backup_jobs.config.pageId).on("click","#btnSharBackupjob",function(b){var c=app.store.localStorage.get("data-html5-themis-backuptitle");app.notify.close.all().done(function(){app.notify.dialog(page_search.singleResult.getSharingInputs(),c,false,app.lang.string("share backup","page.backup_jobs"),app.lang.string("don't share item","page.backup_jobs"),function(){var e,f,d;if($("#selFriend option:selected").hasClass("friend")){alert("friend");e="shareBackup"}else{if($("#selFriend option:selected").hasClass("heritage")){e="shareBackupHeritage"}}f=($("#txtStartDate").val())?parseFloat(moment($("#txtStartDate").val()).format("x")):null;d=($("#txtEndDate").val())?parseFloat(moment($("#txtEndDate").val()).format("x")):null;app.rc.getJson(e,{withUserId:parseInt($("#selFriend option:selected").val()),name:$("#txtShareName").val(),policyValue:app.store.localStorage.get("data-html5-themis-backupid"),description:$("#txtShareDescription").val(),lifespanstart:f,lifespanend:d},true).done(function(){alert("done")}).fail(function(){alert("fail")})},function(){},50)})});$(page_backup_jobs.config.pageId).on("click","#btnShareAllFromNow",function(b){app.notify.close.all().done(function(){app.notify.dialog(page_search.singleResult.getSharingInputs(),app.lang.string("share all from now","page.backup_jobs"),false,app.lang.string("share backup","page.backup_jobs"),app.lang.string("don't share item","page.backup_jobs"),function(){var c;if($("#selFriend option:selected").hasClass("friend")){c="shareAllFromNow"}else{if($("#selFriend option:selected").hasClass("heritage")){c="shareAllFromNowHeritage"}}app.rc.getJson(c,{withUserId:parseInt($("#selFriend option:selected").val()),name:$("#txtShareName").val(),policyValue:"",description:$("#txtShareDescription").val()},true).done(function(){alert("done")}).fail(function(){alert("fail")})},function(){},50)})});$(page_backup_jobs.config.pageId).on("click","#btnShareAll",function(b){app.notify.close.all().done(function(){app.notify.dialog(page_search.singleResult.getSharingInputs(),app.lang.string("share all from now","page.backup_jobs"),false,app.lang.string("share backup","page.backup_jobs"),app.lang.string("don't share item","page.backup_jobs"),function(){var d,e,c;if($("#selFriend option:selected").hasClass("friend")){d="shareAll"}else{if($("#selFriend option:selected").hasClass("heritage")){d="shareAllHeritage"}}e=($("#txtStartDate").val())?parseFloat(moment($("#txtStartDate").val()).format("x")):null;c=($("#txtEndDate").val())?parseFloat(moment($("#txtEndDate").val()).format("x")):null;app.rc.getJson(d,{withUserId:parseInt($("#selFriend option:selected").val()),name:$("#txtShareName").val(),policyValue:"",description:$("#txtShareDescription").val(),lifespanstart:e,lifespanend:c},true).done(function(){alert("done")}).fail(function(){alert("fail")})},function(){},50)})})},functions:{getAlertContent:function(){var a=app.ni.element.div({classes:["job-alert-div"]});a.append(app.ni.element.a({id:"btnBackupjobDetails",text:app.lang.string("backupjob details","page.backup_jobs"),classes:["ui-btn","ui-btn-inline"]}));a.append(app.ni.element.a({id:"btnSharBackupjob",text:app.lang.string("share backupjob","page.backup_jobs"),classes:["ui-btn","ui-btn-inline"]}));return a}},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_backup_jobs={
	"name": "backup_jobs",
	"shortname": "backup_jobs",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": true,
	"contentRefreshInterval": 30000,
	"asyncLoading": false
};var page_backup_log={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var f=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e=app.rc.getJson("getBackupjob",{jobId:app.store.localStorage.get("data-html5-themis-backupid"),expandUser:false,expandToken:false,expandProfiles:false,expandProtocol:true},true);e.done(function(g){d.append(app.ni.element.h1({text:app.lang.string("backup_log","headlines")}));d.append(app.ni.element.a({id:"btnBackupDetails",text:app.lang.string("backup_edit","actions"),attributes:{href:"backup_edit.html"},classes:["ui-btn"]}));app.notify.loader.remove();app.help.jQM.enhance(d)});e.fail(function(g){app.notify.loader.remove();alert("ws error: "+g)});success=true;success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_backup_log={
	"name":"backup_log",
	"shortname":"backup_log",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_badConnection={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");b.append(app.ni.element.h1({text:"Bad Connection"}));b.append(app.ni.element.p({text:"Check your internet connection. You will be redirected after your connection is back again."}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(this.config.pageId).on("connectionisalive",function(b){app.help.navigation.back()})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_badConnection={
	"name":"badConnection",
	"shortname":"badConnection",
	"template": "",
	"useKeepAlive": false,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_1={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getSources",{expandConfigs:false},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1")}));var g=$(app.template.get("listA","responsive"));$.each(h,function(k,m){var n=null,j=null,i=m.pluginId,l=null;if(m.authDataDescription!=undefined){n=true;j=m.authDataDescription.configType;if(j=="oauth"){l=m.authDataDescription.redirectURL;app.sess.setObject(i,m.authDataDescription.properties,"session_CreateSource")}}else{n=false}g.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("source_"+i),title:"",headline:m.title,text:m.description,classes:["source","authRequired-"+n],attributes:{"data-html5-authRequired":n,"data-html5-oAuthUrl":l,"data-html5-pluginId":i,"data-html5-source-pluginId":i,"data-html5-authType":j,"data-html5-destinationType":"source"}}))});c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){alert("ws error")})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1.config.pageId).on("click",".authRequired-false",function(b){app.help.navigation.redirect("create_backup_1_newSource.html","slide")});$(page_create_backup_1.config.pageId).on("click",".authRequired-true",function(c){var b=$(this).clone(),d;d=app.rc.getJson("getAuthdataForPlugin",{pluginId:b.attr("data-html5-pluginId")},true);d.fail(function(){alert("ws error")});d.done(function(e){authDataList=app.ni.element.ul({attributes:{"data-role":"listview","data-inset":"true"}});$.each(e,function(g,f){authDataList.append(app.ni.element.li({text:app.ni.element.a({text:f.name,attributes:{href:"create_backup_1_newSource.html","data-transition":"slide","data-html5-authdataId":f.id,"data-html5-authdataName":f.name},classes:[]})}))});app.notify.dialog(authDataList,app.lang.string("choose_profile","headlines"),false,app.lang.string("new_source_profile","actions"),app.lang.string("cancel","actions"),function(f){window.setTimeout(function(){switch(b.attr("data-html5-authType")){case"oauth":var g=b.attr("data-html5-oAuthUrl");var h=null;h=app.oa.generic(g);h.done(function(i){app.store.localStorage.set("data-html5-oAuthQuery",i);app.help.navigation.redirect("create_backup_1_oAuthFinished.html","slide")});h.fail(function(i){alert("oAuth error: "+i)});break;case"input":app.help.navigation.redirect("create_backup_1_inputAuth.html","slide");break;default:alert("not implemented")}},10)},function(f){},100)})})},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_create_backup_1={
	"name": "create_backup_1",
	"shortname": "create_backup_1",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_1_inputAuth={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1_inputAuth"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1_inputAuth")}));var g=app.ni.form.form({id:"frmCreateSource",attributes:{action:"#","data-ajax":"false"}});g.append(app.ni.text.text({id:"txtName",name:"title",placeholder:app.lang.string("title","labels"),label:true,labelText:app.lang.string("title","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));if(h.authDataDescription!=undefined){$.each(h.authDataDescription.requiredInputs,function(i,j){g.append(app.bmu.print.formElement(j,h.pluginId))})}g.append(app.ni.button.button({id:"btnAuthenticate",name:"btnAuthenticate",placeholder:app.lang.string("create_authdata","labels"),label:false,labelText:app.lang.string("create_authdata","labels"),container:false,value:app.lang.string("create_authdata","actions")}));c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){alert("ws error")})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1_inputAuth.config.pageId).on("click","#btnAuthenticate",function(b){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.help.form.serialize($("#frmCreateSource")),c;delete d.btnAuthenticate;delete d.title;c=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:a.find("#txtName").val(),properties:d},true);c.done(function(e){app.store.localStorage.set("data-html5-authdataId",e.id);app.store.localStorage.set("data-html5-authdataName",e.name);app.notify.loader.remove();app.help.navigation.redirect("create_backup_1_newSource.html","slide")});c.fail(function(){alert(" WS Error")})})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_create_backup_1_inputAuth={
	"name":"create_backup_1_inputAuth",
	"shortname":"create_backup_1_inputAuth",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_1_newSource={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var h=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var g=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var f,e=null,d=null;if(app.store.localStorage.get("data-html5-authrequired")){f=app.rc.getJson("getPluginOptions",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:app.store.localStorage.get("data-html5-authdataId"),expandConfigs:true},true)}else{f=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true)}f.done(function(k){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1_newSource"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1_newSource")}));var j=app.ni.form.form({id:"frmCreateSource",attributes:{action:"#","data-ajax":"false"},label:false});if(k.propertiesDescription!=undefined){if(k.propertiesDescription.length>0){$.each(k.propertiesDescription,function(l,m){j.append(app.bmu.print.formElement(m,k.pluginId))});d=true}else{d=false}}if(k.availableOptions!=undefined){if(k.availableOptions.length>0){var i=$(app.ni.select.multiple({id:"cboOptions",name:"options",label:true,labelText:app.lang.string("selectOptionsLabel","page.create_backup_1_newSource"),attributes:{"data-native-menu":false}}));i.append(app.ni.select.option({text:app.lang.string("selectOptions","page.create_backup_1_newSource")}));$.each(k.availableOptions,function(l,m){i.append(app.ni.select.option({text:m,attributes:{value:m}}))});j.append(i);e=true}else{e=false}}j.append(app.ni.button.button({id:"btnCreate",name:"btnCreate",placeholder:app.lang.string("create_source","labels"),label:true,labelText:app.lang.string("create_source","labels"),container:true,value:app.lang.string("create_source","actions")}));if(d||e){c.append(j);app.notify.loader.remove();app.help.jQM.enhance(c)}else{page_create_backup_1_newSource.createSinkProfile([],{})}});f.fail(function(i){alert("ws error")})},createSinkProfile:function(a,b){if(app.store.localStorage.get("data-html5-authRequired")){promise=app.rc.getJson("createSourceProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:{id:app.store.localStorage.get("data-html5-authdataId")},properties:b,options:a},true)}else{promise=app.rc.getJson("createSourceProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),properties:b,options:a},true)}promise.done(function(c){app.store.localStorage.set("data-html5-themis-source-profileid",c.profileId);app.notify.loader.remove();app.help.navigation.redirect("create_backup_2.html","slide")});promise.fail(function(){alert("Quelle nicht angelegt. WS Error")})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1_newSource.config.pageId).on("click","#btnCreate",function(){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.help.form.serialize($("#frmCreateSource")),c,b=Array();delete d.btnCreate;if(d.options!=undefined){b=d.options;delete d.options}page_create_backup_1_newSource.createSinkProfile(b,d)})},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_create_backup_1_newSource={
	"name":"create_backup_1_newSource",
	"shortname":"create_backup_1_newSource",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_1_oAuthFinished={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");if(app.config.apacheCordova===true){console.log("todo");app.store.localStorage.set("data-html5-oAuthQuery",app.store.localStorage.get("data-html5-oAuthQuery").split("&")[0])}else{try{app.store.localStorage.set("data-html5-oAuthQuery",window.location.href.split("?")[1].split("&")[0])}catch(d){app.store.localStorage.set("data-html5-oAuthQuery","")}}c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_1_oAuthFinished"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_1_oAuthFinished")}));c.append(app.ni.text.text({id:"txtName",placeholder:app.lang.string("authdata_name","labels"),label:true,labelText:app.lang.string("authdata_name","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));c.append(app.ni.button.button({id:"btnCreateAuthData",placeholder:app.lang.string("create_authdata","labels"),label:true,labelText:app.lang.string("create_authdata","labels"),container:true,value:app.lang.string("create_authdata","actions")}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_1_oAuthFinished.config.pageId).on("click","#btnCreateAuthData",function(d){var c,e,f;c={oAuthQuery:app.store.localStorage.get("data-html5-oAuthQuery")};e=app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"),"session_CreateSource");for(var b in e){c[b]=e[b]}f=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:$("#txtName").val(),properties:c},true);f.done(function(g){app.store.localStorage.set("data-html5-authdataId",g.id);app.help.navigation.redirect("create_backup_1_newSource.html","slide")});f.fail(function(g){alert("ws error")})})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_create_backup_1_oAuthFinished={
	"name":"create_backup_1_oAuthFinished",
	"shortname":"create_backup_1_oAuthFinished",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_2={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getSinks",{expandConfigs:true},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2")}));var g=$(app.template.get("listA","responsive"));$.each(h,function(k,m){var n=null,j=null,i=m.pluginId,l=null;if(m.authDataDescription!=undefined){n=true;j=m.authDataDescription.configType;if(j=="oauth"){l=m.authDataDescription.redirectURL;app.sess.setObject(i,m.authDataDescription.properties,"session_CreateSink")}}else{n=false}g.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("sink_"+i),title:"",headline:m.title,text:m.description,classes:["source","authRequired-"+n],attributes:{"data-html5-authRequired":n,"data-html5-oAuthUrl":l,"data-html5-pluginId":i,"data-html5-sink-pluginId":i,"data-html5-authType":j,"data-html5-destinationType":"sink"}}))});c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});success=true},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2.config.pageId).on("click",".authRequired-false",function(b){app.help.navigation.redirect("create_backup_1_newSource.html","slide")});$(page_create_backup_2.config.pageId).on("click",".authRequired-true",function(d){var c=$(this).clone(),e,b;e=app.rc.getJson("getAuthdataForPlugin",{pluginId:c.attr("data-html5-pluginId")},true);e.fail(function(){alert("ws error")});e.done(function(f){b=app.ni.element.ul({attributes:{"data-role":"listview","data-inset":"true"}});$.each(f,function(h,g){b.append(app.ni.element.li({text:app.ni.element.a({text:g.name,attributes:{href:"create_backup_2_newSink.html","data-transition":"slide","data-html5-authdataId":g.id,"data-html5-authdataName":g.name},classes:[]})}))});app.notify.dialog(b,app.lang.string("choose_profile","headlines"),false,app.lang.string("new_source_profile","actions"),app.lang.string("cancel","actions"),function(g){window.setTimeout(function(){switch(c.attr("data-html5-authType")){case"oauth":var h=c.attr("data-html5-oAuthUrl");var i=null;i=app.oa.generic(h);i.done(function(j){app.store.localStorage.set("data-html5-oAuthQuery",j);app.help.navigation.redirect("create_backup_2_oAuthFinished.html","slide")});i.fail(function(j){alert("oAuth error: "+j)});break;case"input":app.help.navigation.redirect("create_backup_2_inputAuth.html","slide");break;default:alert("not implemented")}},10)},function(g){},0)})})},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_create_backup_2={
	"name":"create_backup_2",
	"shortname":"create_backup_2",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_2_inputAuth={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var f=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var e=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true);d.done(function(h){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2_inputAuth"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2_inputAuth")}));var g=app.ni.form.form({id:"frmCreateSource",attributes:{action:"#","data-ajax":"false"}});g.append(app.ni.text.text({id:"txtName",name:"title",placeholder:app.lang.string("title","labels"),label:true,labelText:app.lang.string("title","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));if(h.authDataDescription!=undefined){$.each(h.authDataDescription.requiredInputs,function(i,j){g.append(app.bmu.print.formElement(j,h.pluginId))})}g.append(app.ni.button.button({id:"btnAuthenticate",name:"btnAuthenticate",placeholder:app.lang.string("create_authdata","labels"),label:false,labelText:app.lang.string("create_authdata","labels"),container:false,value:app.lang.string("create_authdata","actions")}));c.append(g);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(g){alert("ws error")})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2_inputAuth.config.pageId).on("click","#btnAuthenticate",function(b){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.help.form.serialize($("#frmCreateSource")),c;delete d.btnAuthenticate;delete d.title;c=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:a.find("#txtName").val(),properties:d},true);c.done(function(e){app.store.localStorage.set("data-html5-authdataId",e.id);app.store.localStorage.set("data-html5-authdataName",e.name);app.notify.loader.remove();app.help.navigation.redirect("create_backup_2_newSink.html","slide")});c.fail(function(){alert(" WS Error...geht ned")})})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_create_backup_2_inputAuth={
	"name":"create_backup_2_inputAuth",
	"shortname":"create_backup_2_inputAuth",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_2_newSink={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var h=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var g=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var f,e=null,d=null;if(app.store.localStorage.get("data-html5-authrequired")){f=app.rc.getJson("getPluginOptions",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:app.store.localStorage.get("data-html5-authdataId"),expandConfigs:true},true)}else{f=app.rc.getJson("getPlugin",{pluginId:app.store.localStorage.get("data-html5-pluginId"),expandConfigs:true},true)}f.done(function(k){c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2_newSink"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2_newSink")}));var j=app.ni.form.form({id:"frmCreateSink",attributes:{action:"#","data-ajax":"false"},label:false});if(k.propertiesDescription!=undefined){if(k.propertiesDescription.length>0){$.each(k.propertiesDescription,function(l,m){j.append(app.bmu.print.formElement(m,k.pluginId))});d=true}else{d=false}}if(k.availableOptions!=undefined){if(k.availableOptions.length>0){var i=$(app.ni.select.multiple({id:"cboOptions",name:"options",label:true,labelText:app.lang.string("selectOptionsLabel","page.create_backup_2_newSink"),attributes:{"data-native-menu":false}}));i.append(app.ni.select.option({text:app.lang.string("selectOptions","page.create_backup_2_newSink")}));$.each(k.availableOptions,function(l,m){i.append(app.ni.select.option({text:m,attributes:{value:m}}))});j.append(i);e=false}else{e=false}}j.append(app.ni.button.button({id:"btnCreate",placeholder:app.lang.string("create_sink","labels"),label:true,labelText:app.lang.string("create_sink","labels"),container:true,value:app.lang.string("create_sink","actions")}));if(d||e){c.append(j);app.notify.loader.remove();app.help.jQM.enhance(c)}else{page_create_backup_2_newSink.createSinkProfile([],{})}});f.fail(function(i){alert("ws error")});return true},createSinkProfile:function(a,b){if(app.store.localStorage.get("data-html5-authRequired")){promise=app.rc.getJson("createSinkProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),authData:{id:app.store.localStorage.get("data-html5-authdataId")},properties:b,options:a},true)}else{promise=app.rc.getJson("createSinkProfile",{pluginId:app.store.localStorage.get("data-html5-pluginId"),properties:b,options:a},true)}promise.done(function(c){app.store.localStorage.set("data-html5-themis-sink-profileid",c.profileId);app.notify.loader.remove();app.help.navigation.redirect("create_backup_3.html","slide")});promise.fail(function(){alert("Quelle nicht angelegt. WS Error")})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2_newSink.config.pageId).on("click","#btnCreate",function(){var d=app.help.form.serialize($("#frmCreateSink")),c,b=Array();delete d.btnCreate;if(d.options!=undefined){b=d.options;delete d.options}page_create_backup_2_newSink.createSinkProfile(b,d)})},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_create_backup_2_newSink={
	"name":"create_backup_2_newSink",
	"shortname":"create_backup_2_newSink",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_2_oAuthFinished={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");if(app.config.apacheCordova===true){console.log("todo");app.store.localStorage.set("data-html5-oAuthQuery",app.store.localStorage.get("data-html5-oAuthQuery").split("&")[0])}else{try{app.store.localStorage.set("data-html5-oAuthQuery",window.location.href.split("?")[1].split("&")[0])}catch(d){app.store.localStorage.set("data-html5-oAuthQuery","")}}c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_2_oAuthFinished"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_2_oAuthFinished")}));c.append(app.ni.text.text({id:"txtName",placeholder:app.lang.string("authdata_name","labels"),label:true,labelText:app.lang.string("authdata_name","labels"),container:true,attributes:{value:app.lang.string("new authentication","page.create_backup")+": "+app.store.localStorage.get("data-html5-pluginId")}}));c.append(app.ni.button.button({id:"btnCreateAuthData",placeholder:app.lang.string("create_authdata","labels"),label:true,labelText:app.lang.string("create_authdata","labels"),container:true,value:app.lang.string("create_authdata","actions")}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(page_create_backup_2_oAuthFinished.config.pageId).on("click","#btnCreateAuthData",function(d){var c,e,f;c={oAuthQuery:app.store.localStorage.get("data-html5-oAuthQuery")};e=app.sess.getObject(app.store.localStorage.get("data-html5-pluginId"),"session_CreateSink");for(var b in e){c[b]=e[b]}f=app.rc.getJson("createAuthdata",{pluginId:app.store.localStorage.get("data-html5-pluginId"),name:$("#txtName").val(),properties:c},true);f.done(function(g){app.store.localStorage.set("data-html5-authdataId",g.id);app.help.navigation.redirect("create_backup_2_newSink.html","slide")});f.fail(function(){alert("ws error")})})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_create_backup_2_oAuthFinished={
	"name":"create_backup_2_oAuthFinished",
	"shortname":"create_backup_2_oAuthFinished",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_3={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");c.append(app.ni.element.h1({text:app.lang.string("headline","page.create_backup_3"),styles:{clear:"both"}}));c.append(app.ni.element.p({text:app.lang.string("description","page.create_backup_3")}));app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var e,d;d=app.rc.getJson([["getPluginConfiguration",{pluginId:app.store.localStorage.get("data-html5-source-pluginId"),configId:app.store.localStorage.get("data-html5-themis-source-profileid"),expandConfigs:true}],["getPlugin",{pluginId:app.store.localStorage.get("data-html5-source-pluginId"),expandConfigs:true}]],true);e=app.rc.getJson([["getPluginConfiguration",{pluginId:app.store.localStorage.get("data-html5-sink-pluginId"),configId:app.store.localStorage.get("data-html5-themis-sink-profileid"),expandConfigs:true}],["getPlugin",{pluginId:app.store.localStorage.get("data-html5-sink-pluginId"),expandConfigs:true}]],true);$.when(d,e).done(function(k,j){c.append(app.ni.element.h2({text:app.lang.string("chosen_datasource","headlines")}));c.append(app.ni.element.p({text:k.getPlugin.title+" - "}));c.append(app.ni.element.h2({text:app.lang.string("chosen_datasink","headlines")}));c.append(app.ni.element.p({text:j.getPlugin.title+" - "}));c.append(app.ni.element.h2({text:app.lang.string("job_settings","headlines")}));c.append(app.ni.text.text({id:"txtTitle",placeholder:app.lang.string("job_title","labels"),label:true,labelText:app.lang.string("job_title","labels"),container:true}));var i=["ONCE","DAILY","WEEKLY","MONTHLY","YEARLY"];var h=app.ni.select.single({id:"selSchedule"});$.each(i,function(m,l){h.append(app.ni.select.option({text:app.lang.string("schedule backup "+l,"create backup"),value:l}))});c.append(h);c.append(app.ni.button.button({id:"btnCreateBackup",placeholder:app.lang.string("create_backup","labels"),label:true,labelText:app.lang.string("create_backup","labels"),container:true,value:app.lang.string("create_backup","actions")}));app.notify.loader.remove();app.help.jQM.enhance(c)});$.when(d,d).fail(function(){alert("ws error ")})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(a).on("click","#btnCreateBackup",function(){app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var b=app.rc.getJson("createBackupjob",{jobTitle:a.find("#txtTitle").val(),schedule:$("#selSchedule").val(),start:Date.now(),source:app.store.localStorage.get("data-html5-themis-source-profileid"),actions:[],sink:app.store.localStorage.get("data-html5-themis-sink-profileid")},true);b.done(function(c){app.notify.loader.remove();app.store.localStorage.clearHtml5();app.help.navigation.redirect("backup_jobs.html","slide")});b.fail(function(c){alert("webservice error: "+c)})})},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_create_backup_3={
	"name":"create_backup_3",
	"shortname":"create_backup_3",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_create_backup_oAuthHandler={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var e=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var d=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);window.setTimeout(function(){var d=app.oa.getQueryString(),c=app.store.localStorage.get("data-html5-destinationType");if(c=="source"){app.help.navigation.redirect("create_backup_1_oAuthFinished.html?"+d,"slide")}else{if(c=="sink"){app.help.navigation.redirect("create_backup_2_oAuthFinished.html?"+d,"slide")}else{alert("oAuth Error")}}},500)}}};var config_create_backup_oAuthHandler={
	"name":"create_backup_oAuthHandler",
	"shortname":"create_backup_oAuthHandler",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_friendList={config:null,include:null,include_once:null,elements:null,constructor:function(){app.debug.trace("page_friendList.constructor()");var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.trace("page_friendList.creator()");var e=$("div[data-role=header]");var c=$("div[data-role=content]");var b=$("div#nav-panel");var d=$("div#page-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));c.append(app.ni.element.a({id:"btnAddFriend",classes:["ui-btn","ui-btn-inline"],text:app.lang.string("add friend","page.friendList")}));c.append(app.ni.element.a({id:"btnAddFriendHeritage",classes:["ui-btn","ui-btn-inline"],text:app.lang.string("add friend heritage","page.friendList")}));app.rc.getJson([["listFriendsSharing",{}],["listFriendsHeritage",{}]],true,3).done(function(f){var g,i,h;g=f.listFriendsSharing;i=f.listFriendsHeritage;c.append(app.ni.element.h1({text:app.lang.string("sharing friends","headlines")}));h=$(app.template.get("listA","responsive"));$.each(g,function(k,j){h.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("friend_"+j),title:j.name,headline:j.name,text:j.description,classes:["friend"],attributes:{"data-html5-friendId":j.friendId}}))});c.append(h);c.append(app.ni.element.h1({text:app.lang.string("heritage friends","headlines")}));h=$(app.template.get("listA","responsive"));$.each(i,function(k,j){h.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("friend_"+j),title:j.name,headline:j.name,text:j.description,classes:["heritage"],attributes:{"data-html5-friendId":j.bmuUserId}}))});c.append(h)}).fail(function(){}).always(function(){app.notify.loader.remove();app.help.jQM.enhance(c)})},async:{promise:null,result:null,elements:null,creator:function(b){app.debug.trace("page_friendList.async.creator()");var a=$.Deferred();a.resolve();return a.promise()},call:function(a){app.debug.trace("page_friendList.async.call()");return app.rc.getJson()},done:function(a){app.debug.trace("page_friendList.async.done()")},fail:function(a){app.debug.trace("page_friendList.async.fail()");alert("WS fails: "+JSON.stringify(this.result))},always:function(a){app.debug.trace("page_friendList.async.always()")},abort:function(a){app.debug.trace("page_friendList.async.abort()")}},setEvents:function(a){app.debug.trace("page_friendList.setEvents()");$(this.config.pageId).on("storagefilled",".heritage",function(){json=app.rc.getJson("getHeritageToken",{userId:app.store.localStorage.get("data-html5-friendId")},false,3);app.notify.dialog({text:$("<p>Erbtoken: "+json.activationCode+"</p>").append(app.ni.element.a({id:"getToken",classes:["ui-btn"],text:"QR Code herunterladen"})),title:"Erbe",headline:false,buttonLeft:"Erbe löschen",buttonRight:"Schließen",callbackButtonLeft:function(){app.rc.getJson("deleteAFriendHeritage",{friendId:app.store.localStorage.get("data-html5-friendId")},true,1).done(function(){alert("done")}).fail(function(){alert("fail")})},callbackButtonRight:false,delayInMs:0})});$(this.config.pageId).on("storagefilled","#getToken",function(){$.ajax({url:"http://themis-dev01.backmeup.at/backmeup-service-rest/users/"+app.store.localStorage.get("data-html5-friendId")+"/activationCode",async:false,headers:{Authorization:app.store.localStorage.get("themis-token"),Accept:"application/pdf"},dataType:"binary",processData:false,success:function(c){var b=URL.createObjectURL(c);window.setTimeout(function(){window.open(b)},300)}})});$(this.config.pageId).on("storagefilled",".friend",function(){app.notify.dialog({text:" ",title:"Erbe",headline:false,buttonLeft:"Freund löschen",buttonRight:"Ok",callbackButtonLeft:function(){app.rc.getJson("deleteAFriend",{friendId:app.store.localStorage.get("data-html5-friendId")},true,1).done(function(){alert("done")}).fail(function(){alert("fail")})},callbackButtonRight:false,delayInMs:0})});$(this.config.pageId).on("click","#btnAddFriend",function(c){var b;b=app.ni.element.div().append(app.ni.text.text({id:"txtName",placeholder:app.lang.string("name","labels"),label:true,labelText:app.lang.string("name","labels"),container:true})).append(app.ni.text.text({id:"txtDescription",placeholder:app.lang.string("description","labels"),label:true,labelText:app.lang.string("description","labels"),container:true})).append(app.ni.text.email({id:"txtEmail",placeholder:app.lang.string("email","labels"),label:true,labelText:app.lang.string("email","labels"),container:true}));app.notify.dialog({text:b,title:false,headline:app.lang.string("add friend","page.friendList"),buttonLeft:app.lang.string("add friend","actions"),buttonRight:app.lang.string("cancel","actions"),callbackButtonLeft:function(){var f,e,g,d;app.rc.getJson("addAFriendSharing",{name:$("#txtName").val(),description:$("#txtDescription").val(),email:$("#txtEmail").val()},true).done(function(){alert("done")}).fail(function(){alert("fail")})},callbackButtonRight:false,delayInMs:0})});$(this.config.pageId).on("click","#btnAddFriendHeritage",function(c){var b;b=app.ni.element.div().append(app.ni.text.text({id:"txtName",placeholder:app.lang.string("name","labels"),label:true,labelText:app.lang.string("name","labels"),container:true})).append(app.ni.text.text({id:"txtDescription",placeholder:app.lang.string("description","labels"),label:true,labelText:app.lang.string("description","labels"),container:true})).append(app.ni.text.email({id:"txtEmail",placeholder:app.lang.string("email","labels"),label:true,labelText:app.lang.string("email","labels"),container:true}));app.notify.dialog({text:b,title:false,headline:app.lang.string("add friend heritage","page.friendList"),buttonLeft:app.lang.string("add friend heritage","actions"),buttonRight:app.lang.string("cancel","actions"),callbackButtonLeft:function(){var f,e,g,d;app.rc.getJson("addAFriendHeritage",{name:$("#txtName").val(),description:$("#txtDescription").val(),email:$("#txtEmail").val()},true).done(function(){alert("done")}).fail(function(){alert("fail")})},callbackButtonRight:false,delayInMs:0})})},functions:{},events:{pagebeforechange:function(b,a){app.debug.trace("page_friendList.pagebeforechange()")},pagebeforecreate:function(b,a){app.debug.trace("page_friendList.pagebeforecreate()")},pagebeforehide:function(b,a){app.debug.trace("page_friendList.pagebeforehide()")},pagebeforeload:function(b,a){app.debug.trace("page_friendList.pagebeforeload()")},pagebeforeshow:function(b,a){app.debug.trace("page_friendList.pagebeforeshow()")},pagechange:function(b,a){app.debug.trace("page_friendList.pagechange()")},pagechangefailed:function(b,a){app.debug.trace("page_friendList.pagechangefailed()")},pagecreate:function(b,a){app.debug.trace("page_friendList.pagecreate()")},pagehide:function(b,a){app.debug.trace("page_friendList.pagehide()")},pageinit:function(b,a){app.debug.trace("page_friendList.pageinit()")},pageload:function(b,a){app.debug.trace("page_friendList.pageload()")},pageloadfailed:function(b,a){app.debug.trace("page_friendList.pageloadfailed()")},pageremove:function(b,a){app.debug.trace("page_friendList.pageremove()")},pageshow:function(b,a){app.debug.trace("page_friendList.pageshow()")}}};var config_friendList={
	"name": "friendList",
	"shortname": "friendList",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": true,
	"contentRefreshInterval": 30000,
	"asyncLoading": false
};var page_index={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{if(app.store.localStorage.get("data-html5-themis-loggedin")){$(document).off();app.help.navigation.redirect("start.html")}else{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("index","headlines")}));d.append(app.ni.element.a({id:"btnLogin",text:app.lang.string("login","actions"),attributes:{href:"login.html"},classes:["ui-btn"]}));d.append(app.ni.element.a({id:"btnRegister",text:app.lang.string("register","actions"),attributes:{href:"register.html"},classes:["ui-btn"]}))}success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_index={
	"name":"index",
	"shortname":"index",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_job_details={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(b){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var h=b.find("div[data-role=header]");var j=b.find("div[data-role=content]");var k=b.find("div#nav-panel");var c=app.rc.getJson("jobDetails",{username:app.store.localStorage.get("data-html5-themis-username"),jobId:app.store.localStorage.get("data-html5-backupjobid")});var f=app.rc.getJson("jobStatus",{username:app.store.localStorage.get("data-html5-themis-username"),jobId:app.store.localStorage.get("data-html5-backupjobid"),fromDate:0,toDate:Date.now()});j.append(app.ni.element.h1({text:app.lang.string("job_details","headlines")+": "+c.jobTitle}));var a=$(app.template.get("grid-33-33-33","responsive"));var i=a.find(".ui-block-a .ui-body");var g=a.find(".ui-block-b .ui-body");var e=a.find(".ui-block-c .ui-body");i.append(app.ni.element.h2({text:app.lang.string("datasource","headlines")}));i.append(app.ni.element.p({text:"Von welchem Webservice bekomme ich die Daten für die Datenquelle: "+app.store.localStorage.get("data-html5-datasourceid")}));g.append(app.ni.element.h2({text:app.lang.string("datasink","headlines")}));g.append(app.ni.element.p({text:"Von welchem Webservice bekomme ich die Daten für die Datensenke: "+app.store.localStorage.get("data-html5-datasinkid")}));e.append(app.ni.element.h2({text:app.lang.string("job_status","headlines")}));j.append(a);j.append(app.ni.element.a({id:"btnBackupEdit",text:app.lang.string("backup_edit","actions"),attributes:{href:"backup_edit.html"},classes:["ui-btn"]}));j.append(app.ni.element.a({id:"btnBackupDelete",text:app.lang.string("backup_delete","actions"),classes:["ui-btn"]}));j.append(app.ni.element.a({id:"btnBackupLog",text:app.lang.string("backup_log","actions"),attributes:{href:"backup_log.html"},classes:["ui-btn"]}));success=true}catch(d){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(d,null,4),50);app.debug.log(JSON.stringify(d,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_job_details={
	"name":"job_details",
	"shortname":"job_details",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_login={config:null,elements:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("login","headlines")}));var b=app.ni.form.form({id:"frmLogin",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtUsername",placeholder:app.lang.string("username","labels"),label:false,labelText:app.lang.string("username","labels"),container:false}));b.append(app.ni.text.password({id:"txtPassword",placeholder:app.lang.string("password","labels"),label:false,labelText:app.lang.string("password","labels"),container:false}));b.append(app.ni.button.submit({id:"btnLogin",value:app.lang.string("login","actions"),classes:["ui-btn"],attributes:{href:"#"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("register","actions"),attributes:{href:"register.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){$(page_login.config.pageId).on("submit","#frmLogin",function(b){app.debug.alert("page_"+page_register.config.name+" #btnRegister click",25);b.preventDefault();if(!app.help.validate.username(a.find("#txtUsername").val())){app.notify.alert(app.lang.string("error","page.login"),false,app.lang.string("error_headline","page.login"),app.lang.string("error_button","page.login"))}else{if(!app.help.validate.password(a.find("#txtPassword").val())){app.notify.alert(app.lang.string("error","page.login"),false,app.lang.string("error_headline","page.login"),app.lang.string("error_button","page.login"))}else{app.template.append("#btnLogin","app-loader-bubble-inline-button");var c=app.rc.getJson("authenticate",{username:a.find("#txtUsername").val(),password:a.find("#txtPassword").val()},true);c.always(function(){a.find(".bubblingG-inline-button").remove()});c.done(function(d){if(d.accessToken!=undefined){app.store.localStorage.clearHtml5();app.sess.loggedIn(true);app.store.localStorage.set("themis-token",d.accessToken);app.rc.getJson("search",{query:"startup indexer"},true);app.help.navigation.redirect(app.config.startPage_loggedIn,"slideup")}else{alert("Benutzername oder Passwort falsch.")}});c.fail(function(d){app.notify.alert(app.lang.string("error","page.login"),app.lang.string("error_headline","page.login"),false,app.lang.string("error_button","page.login"))})}}})},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_login={
	"name":"login",
	"shortname":"login",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_loginToken={config:null,include:null,include_once:null,elements:null,constructor:function(){app.debug.trace("page_loginToken.constructor()");var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.trace("page_loginToken.creator()");app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("login token","headlines")}));var b=app.ni.form.form({id:"frmLoginToken",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtToken",placeholder:app.lang.string("token","labels"),label:false,labelText:app.lang.string("token","labels"),container:false}));b.append(app.ni.button.submit({id:"btnLogin",value:app.lang.string("login","actions"),classes:["ui-btn"],attributes:{href:"#"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnStart",text:app.lang.string("home page","actions"),attributes:{href:"static-index.html","data-transition":"slideup"}}),classes:["app-subtext3"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("register","actions"),attributes:{href:"register.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){app.debug.trace("page_loginToken.async.creator()");var a=$.Deferred();a.resolve();return a.promise()},call:function(a){app.debug.trace("page_loginToken.async.call()");return app.rc.getJson()},done:function(a){app.debug.trace("page_loginToken.async.done()")},fail:function(a){app.debug.trace("page_loginToken.async.fail()");alert("WS fails: "+JSON.stringify(this.result))},always:function(a){app.debug.trace("page_loginToken.async.always()")},abort:function(a){app.debug.trace("page_loginToken.async.abort()")}},setEvents:function(a){app.debug.trace("page_loginToken.setEvents()");$(this.config.pageId).on("submit","#frmLoginToken",function(b){b.preventDefault();app.template.append("#btnLogin","app-loader-bubble-inline-button");app.rc.getJson("authenticateWithToken",{activationCode:$("#txtToken").val()},true,3).done(function(c){if(c.accessToken!=undefined){app.store.localStorage.clearHtml5();app.sess.loggedIn(true);app.store.localStorage.set("themis-token",c.accessToken);app.rc.getJson("search",{query:"startup indexer"},true);app.sess.setValue("heritage");app.help.navigation.redirect("startToken.html","slideup")}else{alert("Token falsch.")}}).fail(function(){alert("Token falsch.")}).always(function(){a.find(".bubblingG-inline-button").remove()})})},functions:{},events:{pagebeforechange:function(b,a){app.debug.trace("page_loginToken.pagebeforechange()")},pagebeforecreate:function(b,a){app.debug.trace("page_loginToken.pagebeforecreate()")},pagebeforehide:function(b,a){app.debug.trace("page_loginToken.pagebeforehide()")},pagebeforeload:function(b,a){app.debug.trace("page_loginToken.pagebeforeload()")},pagebeforeshow:function(b,a){app.debug.trace("page_loginToken.pagebeforeshow()")},pagechange:function(b,a){app.debug.trace("page_loginToken.pagechange()")},pagechangefailed:function(b,a){app.debug.trace("page_loginToken.pagechangefailed()")},pagecreate:function(b,a){app.debug.trace("page_loginToken.pagecreate()")},pagehide:function(b,a){app.debug.trace("page_loginToken.pagehide()")},pageinit:function(b,a){app.debug.trace("page_loginToken.pageinit()")},pageload:function(b,a){app.debug.trace("page_loginToken.pageload()")},pageloadfailed:function(b,a){app.debug.trace("page_loginToken.pageloadfailed()")},pageremove:function(b,a){app.debug.trace("page_loginToken.pageremove()")},pageshow:function(b,a){app.debug.trace("page_loginToken.pageshow()")}}};var config_loginToken={
	"name": "loginToken",
	"shortname": "loginToken",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_register={config:null,elements:null,constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");if(app.detect.isDesktop()){b.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}b.append(app.ni.element.h1({text:app.lang.string("register","headlines")}));b.append(app.ni.element.p({text:app.lang.string("register","texts"),attributes:{id:"pDescription"}}));b.append(app.ni.element.a({id:"btnLetsGo",text:app.lang.string("lets_go","actions"),classes:["ui-btn"],attributes:{href:"register_1_terms.html","data-transition":"slide"}}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("static-index.html","slide reverse")})},functions:{},events:{pagebeforechange:function(a){app.debug.alert("",3)},pagebeforecreate:function(a){},pagebeforehide:function(a){},pagebeforeload:function(a){},pagebeforeshow:function(a){},pagechange:function(a){},pagechangefailed:function(a){},pagecreate:function(a){},pagehide:function(a){},pageinit:function(a){},pageload:function(a){},pageloadfailed:function(a){},pageremove:function(a){},pageshow:function(a){}}};var config_register={
	"name":"register",
	"shortname":"register",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_register_1_terms={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");if(app.detect.isDesktop()){b.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}b.append(app.ni.element.h1({text:app.lang.string("register_1_terms","headlines")}));b.append(app.ni.element.p({text:app.lang.string("accept_terms","texts",{privacy_policy:app.ni.element.a({id:"lnkPrivacyPolicy",text:app.lang.string("privacy_policy","links"),attributes:{href:"#"}}),terms:app.ni.element.a({id:"lnkTerms",text:app.lang.string("terms","links"),attributes:{href:"#"}})})}));b.append(app.ni.element.a({id:"btnContinue",text:app.lang.string("accept_terms","actions"),classes:["ui-btn"],attributes:{href:"register_2_name.html","data-transition":"slide"}}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("register.html","slide reverse")})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_register_1_terms={
	"name":"register_1_terms",
	"shortname":"register_1_terms",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_register_2_name={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("register_2_name","headlines")}));var b=app.ni.form.form({id:"frmRegisterName",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtFirstname",placeholder:app.lang.string("firstname","labels"),label:false,labelText:app.lang.string("firstname","labels"),container:false}));b.append(app.ni.text.text({id:"txtLastname",placeholder:app.lang.string("lastname","labels"),label:false,labelText:app.lang.string("lastname","labels"),container:false}));b.append(app.ni.text.text({id:"txtUsername",placeholder:app.lang.string("username","labels"),label:false,labelText:app.lang.string("username","labels"),container:false}));b.append(app.ni.element.p({text:app.lang.string("what_is_your_name","texts"),attributes:{id:"pDescription"}}));b.append(app.ni.element.a({id:"btnContinue",text:app.lang.string("continue","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("register_1_terms.html","slide reverse")});$(this.config.pageId).on("focus blur keyup","#txtFirstname, #txtLastname, #txtUsername",function(b){if(!(app.help.validate.firstname(a.find("#txtFirstname").val())&&app.help.validate.lastname(a.find("#txtLastname").val())&&app.help.validate.username(a.find("#txtUsername").val()))){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_name","texts"));a.find("#pDescription").addClass("error")}else{a.find("#pDescription").css("display","none");a.find("#btnContinue").css("display","block");a.find("#pDescription").removeClass("error")}});$(this.config.pageId).on("click","#btnContinue",function(b){if(!(app.help.validate.firstname(a.find("#txtFirstname").val())&&app.help.validate.lastname(a.find("#txtLastname").val())&&app.help.validate.username(a.find("#txtUsername").val()))){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_name","texts"));a.find("#pDescription").addClass("error")}else{app.help.navigation.redirect("register_3_credentials.html","slide")}})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);app.store.localStorage.pufferFormValues(a)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);app.store.localStorage.restorePufferedFormValues(a)}}};var config_register_2_name={
	"name":"register_2_name",
	"shortname":"register_2_name",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_register_3_credentials={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(e,d){if(!$("body").hasClass(e)){$("body").addClass(e)}});var c=a.find("div[data-role=content]");if(app.detect.isDesktop()){c.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}c.append(app.ni.element.h1({text:app.lang.string("register_2_credentials","headlines")}));var b=app.ni.form.form({id:"frmRegisterCredentials",attributes:{action:"#","data-ajax":"false"},label:false});b.append(app.ni.text.text({id:"txtEmail",placeholder:app.lang.string("email","labels"),label:false,labelText:app.lang.string("email","labels"),container:false}));b.append(app.ni.text.password({id:"txtPassword",placeholder:app.lang.string("password","labels"),label:false,labelText:app.lang.string("password","labels"),container:false}));b.append(app.ni.text.password({id:"txtPasswordRpt",placeholder:app.lang.string("password_rpt","labels"),label:false,labelText:app.lang.string("password_rpt","labels"),container:false}));b.append(app.ni.element.p({text:app.lang.string("insert_login_data","texts"),attributes:{id:"pDescription"}}));b.append(app.ni.element.a({id:"btnContinue",text:app.lang.string("continue","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));c.append(b);c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));c.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(document).on("swiperight","#"+a.attr("id"),function(b){app.help.navigation.redirect("register_2_name.html","slide reverse")});$(this.config.pageId).on("focus blur keyup","#txtEmail, #txtPassword, #txtPasswordRpt",function(b){if(!app.help.validate.email(a.find("#txtEmail").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_email","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.password(a.find("#txtPassword").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_password","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.equal(a.find("#txtPassword").val(),a.find("#txtPasswordRpt").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_passwords_not_equal","texts"));a.find("#pDescription").addClass("error")}else{a.find("#pDescription").css("display","none");a.find("#btnContinue").css("display","block");a.find("#pDescription").removeClass("error")}}}});$(this.config.pageId).on("click","#btnContinue",function(b){if(!app.help.validate.email(a.find("#txtEmail").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_email","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.password(a.find("#txtPassword").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_password","texts"));a.find("#pDescription").addClass("error")}else{if(!app.help.validate.equal(a.find("#txtPassword").val(),a.find("#txtPasswordRpt").val())){a.find("#pDescription").css("display","block");a.find("#btnContinue").css("display","none");a.find("#pDescription").text(app.lang.string("bad_passwords_not_equal","texts"));a.find("#pDescription").addClass("error")}else{app.help.navigation.redirect("register_4_final.html","slide")}}}})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);app.store.localStorage.pufferFormValues(a)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);app.store.localStorage.restorePufferedFormValues(a)}}};var config_register_3_credentials={
	"name":"register_3_credentials",
	"shortname":"register_3_credentials",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_register_4_final={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);app.template.overwrite("#"+a.attr("id"),"JQueryMobilePlainPage");$.each(app.detect.classes.array(),function(d,c){if(!$("body").hasClass(d)){$("body").addClass(d)}});var b=a.find("div[data-role=content]");if(app.detect.isDesktop()){b.append(app.ni.element.img({attributes:{src:"../images/logo_full.png",alt:"LOGO"},classes:["logo"]}))}b.append(app.ni.element.h1({text:app.lang.string("register_4_final","headlines")}));app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("lost_password","actions"),attributes:{href:"lostPassword.html","data-transition":"slideup"}}),classes:["app-subtext2"]}));b.append(app.ni.element.p({text:app.ni.element.a({id:"btnLostPassword",text:app.lang.string("login","actions"),attributes:{href:"login.html","data-transition":"slideup"}}),classes:["app-subtext1"]}))},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(e,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);var f=app.store.localStorage.getPufferedFormValue("register_2_name","txtFirstname"),d=app.store.localStorage.getPufferedFormValue("register_2_name","txtLastname"),h=app.store.localStorage.getPufferedFormValue("register_2_name","txtUsername"),c=app.store.localStorage.getPufferedFormValue("register_3_credentials","txtPassword"),b=app.store.localStorage.getPufferedFormValue("register_3_credentials","txtEmail");var g=app.rc.getJson("register",{firstname:f,lastname:d,username:h,password:c,email:b},true);g.done(function(i){if(i.userId){app.store.localStorage.set("data-html5-themis-loggedin",false);app.store.localStorage.set("data-html5-themis-userid",i.userId);app.store.localStorage.set("data-html5-themis-activated",i.activated);app.store.localStorage.set("data-html5-themis-username",a.find("#txtUsername").val());app.help.navigation.redirect("activate_account.html","slide")}else{app.notify.alert(app.lang.string("bad_register","notifications"),false,app.lang.string("bad_register","headlines"),app.lang.string("ok","actions"))}});g.fail(function(i){app.notify.alert(app.lang.string("bad_register","notifications"),false,app.lang.string("bad_register","headlines"),app.lang.string("ok","actions"))})}}};var config_register_4_final={
	"name":"register_4_final",
	"shortname":"register_4_final",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_search={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var g=$("div[data-role=header]");var e=$("div[data-role=content]");var b=$("div#nav-panel");var f=$("div#page-panel");e.append(app.ni.element.h1({text:app.lang.string("search_in_backups","headlines")}));var d=app.ni.form.form({id:"frmSearch",attributes:{action:"#","data-ajax":"false"},label:false});d.append(app.ni.text.text({id:"txtSearch",placeholder:(app.store.localStorage.get("data-html5-themis-search-value"))?app.store.localStorage.get("data-html5-themis-search-value"):app.lang.string("search","labels"),label:false,labelText:app.lang.string("search","labels"),container:false}));d.append(app.ni.element.a({id:"btnSearch",text:app.lang.string("search","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));e.append(d);var c=app.ni.element.div({id:"divSearchResults",styles:{"margin-top":"15px","border-top":"1px solid #999"}});e.append(c);if(app.store.localStorage.get("data-html5-themis-search-value")!=null){window.setTimeout(function(){page_search.updateSearchDiv(c)},1000)}},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(this.config.pageId).on("focus click","#txtSearch",function(b){$("#btnSearch").css("display","block");if(app.store.localStorage.get("data-html5-themis-search-value")&&$("#txtSearch").val()==""){$("#txtSearch").val(app.store.localStorage.get("data-html5-themis-search-value"));this.select()}});$(this.config.pageId).on("click","#btnApplyFilter",function(){page_search.updateSearchDiv($("#divSearchResults"))}),$(this.config.pageId).on("click","#btnRemoveFilter",function(){$(".app-search-filter option:selected").val("");page_search.updateSearchDiv($("#divSearchResults"))}),$(this.config.pageId).on("click","#btnShareSearchResult",function(){page_search.singleResult.shareDocumentGroup()});$(this.config.pageId).on("submit","#frmSearch",function(b){b.preventDefault();app.store.localStorage.set("data-html5-themis-search-value",$("#txtSearch").val());page_search.updateSearchDiv($("#divSearchResults"))});$(this.config.pageId).on("click","#btnTagModeOn",function(b){b.preventDefault();$(".app-search-item").each(function(c,d){$(d).find(".ui-li-aside").attr("data-text",$(d).find(".ui-li-aside").text());$(d).find(".ui-li-aside").html(app.ni.checkbox.checkbox({}));$(d).replaceWith($(d)[0].outerHTML.replace("onclick=","onclick_disable="))})});$(this.config.pageId).on("click",".app-search-item",function(b){var c=$(this).find("input[type=checkbox]");if(c.length>0){if(c.prop("checked")){c.prop("checked",false)}else{c.prop("checked",true)}}});$(this.config.pageId).on("click","#btnTagModeOff",function(b){b.preventDefault();$(".app-search-item").each(function(c,d){$(d).find(".ui-li-aside").text($(d).find(".ui-li-aside").attr("data-text"));$(d).replaceWith($(d)[0].outerHTML.replace("onclick_disable=","onclick="))})});$(this.config.pageId).on("click","#btnCreateCollection",function(b){b.preventDefault();var c=[];$(".app-search-item .ui-li-aside input[type=checkbox]:checked").each(function(d,e){c.push($(e).parent().parent().attr("data-html5-fileid"))});page_search.singleResult.createCollection(c)});$(this.config.pageId).on("click","#btnAddToCollection",function(b){b.preventDefault();var c=[];$(".app-search-item .ui-li-aside input[type=checkbox]:checked").each(function(d,e){c.push($(e).parent().parent().attr("data-html5-fileid"))});page_search.singleResult.addToCollection(c)});$(this.config.pageId).on("click","#btnRemoveFromCollection",function(b){b.preventDefault();var c=[];$(".app-search-item .ui-li-aside input[type=checkbox]:checked").each(function(d,e){c.push($(e).parent().parent().attr("data-html5-fileid"))});page_search.singleResult.removeFromCollection(c)});$(this.config.pageId).on("click","#btnSearch",function(b){app.store.localStorage.set("data-html5-themis-search-value",$("#txtSearch").val());page_search.updateSearchDiv($("#divSearchResults"))})},singleResult:{getFilters:function(e){var d=app.ni.element.div({id:"divFilter"}),c=app.ni.element.div({id:"divCollection"}),b=app.ni.element.div({id:"divSharing"}),a;d.append(app.ni.element.h2({text:app.lang.string("filter area","page.search")}));$.each(e,function(f,g){if(f.substring(0,2)==="by"){a=app.ni.select.single({id:f,classes:["app-search-filter"],attributes:{"data-inline":"true","data-mini":"true"}});a.append(app.ni.select.option({text:app.lang.string(f,"page.search"),value:""}));$.each(g,function(h,i){a.append(app.ni.select.option({text:i.title,value:i.title,selected:(g.length==1)?true:false}))});d.append(a)}});d.append(app.ni.element.a({id:"btnApplyFilter",text:app.lang.string("apply filter","page.search"),classes:["ui-btn","ui-btn-inline"]}));d.append(app.ni.element.a({id:"btnRemoveFilter",text:app.lang.string("remove filter","page.search"),classes:["ui-btn","ui-btn-inline"]}));b.append(app.ni.element.h2({text:app.lang.string("sharing area","page.search")}));b.append(app.ni.element.a({id:"btnShareSearchResult",text:app.lang.string("share search result","page.search"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.h2({text:app.lang.string("collection area","page.search")}));c.append(app.ni.element.a({id:"btnTagModeOn",text:app.lang.string("tag mode on","page.search"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.a({id:"btnTagModeOff",text:app.lang.string("tag mode off","page.search"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.a({id:"btnCreateCollection",text:app.lang.string("create new collection","page.search"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.a({id:"btnAddToCollection",text:app.lang.string("add to collection","page.search"),classes:["ui-btn","ui-btn-inline"]}));c.append(app.ni.element.a({id:"btnRemoveFromCollection",text:app.lang.string("remove from collection","page.search"),classes:["ui-btn","ui-btn-inline"]}));return $("<div>").append(d).append(b).append(c)},getThumbnail:function(a){var b;if((b=a.thumbnailUrl)!=undefined){return b.replace("###TOKEN###",encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)))}else{if((b=app.img.getUrlById("search_"+a.type))!="search_"+a.type){return b}else{return false}}},getResultUrl:function(a){if(a.downloadUrl!=undefined){return a.downloadUrl.replace("###TOKEN###",encodeURIComponent(app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)))}else{return false}},getSearchDetails:function(a){var b=app.ni.element.div({classes:["app-themis-searchresult"]});b.append(app.ni.element.a({text:app.lang.string("share item","page.search"),classes:["ui-btn","ui-btn-inline"],attributes:{onclick:"javascript:page_search.singleResult.shareDocument("+JSON.stringify(a).split('"').join("'")+")"}}));b.append(app.ni.element.a({text:app.lang.string("close search details","page.search"),classes:["ui-btn","ui-btn-inline"],attributes:{onclick:"javascript:app.notify.close.alert()"}}));if(page_search.singleResult.getResultUrl(a)){b.append(app.ni.element.a({text:app.lang.string("open file in new browser window","page.search"),attributes:{href:"#",onclick:"javascript:window.open('"+page_search.singleResult.getResultUrl(a)+"','_blank', 'location=yes')"},classes:["ui-btn","ui-btn-inline"]}))}$.each(a,function(c,d){if(typeof d==="object"){$.each(d,function(e,f){b.append(app.ni.element.p({text:app.lang.string(e,"page.search")+": "+f}))})}else{b.append(app.ni.element.p({text:app.lang.string(c,"page.search")+": "+d}))}});return b},openDetails:function(a){app.notify.alert(page_search.singleResult.getSearchDetails(a),a.title,false,app.lang.string("back","actions"),function(){},50)},getSharingInputs:function(){var d=app.ni.element.div({classes:["app-themis-sharing"]}),b=app.ni.select.single({id:"selFriend"}),a,c;d.append(app.ni.text.text({id:"txtShareName",placeholder:app.lang.string("share name","page.search"),label:true,labelText:app.lang.string("sahre name","page.search"),container:false}));d.append(app.ni.text.text({id:"txtShareDescription",placeholder:app.lang.string("share description","page.search"),label:true,labelText:app.lang.string("share description","page.search"),container:false}));result=app.rc.getJson([["listFriendsSharing",{}],["listFriendsHeritage",{}]],false,3);a=result.listFriendsSharing;c=result.listFriendsHeritage;$.each(a,function(f,e){if(e.bmuUser){b.append(app.ni.select.option({text:e.name+" - "+e.description,value:e.bmuUserId,classes:["friend"]}))}});$.each(c,function(f,e){b.append(app.ni.select.option({text:e.name+" - "+e.description,value:e.bmuUserId,classes:["heritage"]}))});d.append(b);d.append(app.ni.text.date({id:"txtStartDate",placeholder:app.lang.string("start date","page.search"),label:true,labelText:app.lang.string("start date","page.search"),container:false}));d.append(app.ni.text.date({id:"txtEndDate",placeholder:app.lang.string("end date","page.search"),label:true,labelText:app.lang.string("end date","page.search"),container:false}));return d},getCollectionInputs:function(){var a=app.ni.element.div({classes:["app-themis-collections"]});a.append(app.ni.text.text({id:"txtCollectionName",placeholder:app.lang.string("collection name","page.search"),label:true,labelText:app.lang.string("collection name","page.search"),container:false}));a.append(app.ni.text.text({id:"txtCollectionDescription",placeholder:app.lang.string("collection description","page.search"),label:true,labelText:app.lang.string("collection description","page.search"),container:false}));return a},getAddToCollectionInputs:function(b){var c=app.ni.element.div({classes:["app-themis-collections"]}),a=$(app.ni.select.single({id:"cboCollections",name:"collections",label:true,labelText:app.lang.string("select collection","page.search")}));$.each(b,function(d,e){a.append(app.ni.select.option({text:e.name+" - "+e.description,value:e.collectionId}))});c.append(a);return c},getRemoveFromCollectionInputs:function(b){var c=app.ni.element.div({classes:["app-themis-collections"]}),a=$(app.ni.select.single({id:"cboCollections",name:"collections",label:true,labelText:app.lang.string("select collection","page.search")}));$.each(b,function(d,e){a.append(app.ni.select.option({text:e.name+" - "+e.description,value:e.collectionId}))});c.append(a);return c},shareDocument:function(a){app.notify.close.all().done(function(){app.notify.dialog(page_search.singleResult.getSharingInputs(),a.title,false,app.lang.string("share item","page.search"),app.lang.string("don't share item","page.share"),function(){var c,d,b;if($("#selFriend option:selected").hasClass("friend")){c="shareDocument"}else{if($("#selFriend option:selected").hasClass("heritage")){c="shareDocumentHeritage"}}d=($("#txtStartDate").val())?parseFloat(moment($("#txtStartDate").val()).format("x")):null;b=($("#txtEndDate").val())?parseFloat(moment($("#txtEndDate").val()).format("x")):null;app.rc.getJson(c,{withUserId:parseInt($("#selFriend option:selected").val()),policyValue:app.store.localStorage.get("data-html5-fileid"),name:$("#txtShareName").val(),description:$("#txtShareDescription").val(),lifespanstart:d,lifespanend:b},true).done(function(){app.notify.alert({text:app.lang.string("text share document done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text share document fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})},function(){},50)})},createCollection:function(a){app.notify.close.all().done(function(){app.notify.dialog(page_search.singleResult.getCollectionInputs(),app.lang.string("create collection","page.search"),false,app.lang.string("create collection","page.search"),app.lang.string("cancel","page.share"),function(){app.rc.getJson("createCollection",{documentIds:a,name:$("#txtCollectionName").val(),description:$("#txtCollectionDescription").val()},true).done(function(){app.notify.alert({text:app.lang.string("text create collection done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text create collection fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})},function(){},50)})},removeFromCollection:function(a){app.notify.close.all().done(function(){app.rc.getJson("getCollections",{},true).done(function(b){app.notify.dialog(page_search.singleResult.getAddToCollectionInputs(b),app.lang.string("remove from collection","page.search"),false,app.lang.string("remove from collection","page.search"),app.lang.string("cancel","page.share"),function(){app.rc.getJson("removeFromCollection",{documentIds:a,collId:$("#cboCollections option:selected").val(),collectionId:$("#cboCollections option:selected").val()},true).done(function(){app.notify.alert({text:app.lang.string("text remove from collection done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text remove from collection fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})},function(){},50)}).fail(function(){app.notify.alert({text:app.lang.string("text get collection fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})})},addToCollection:function(a){app.notify.close.all().done(function(){app.rc.getJson("getCollections",{},true).done(function(b){app.notify.dialog(page_search.singleResult.getAddToCollectionInputs(b),app.lang.string("add to collection","page.search"),false,app.lang.string("add to collection","page.search"),app.lang.string("cancel","page.share"),function(){app.rc.getJson("addToCollection",{documentIds:a,collId:$("#cboCollections option:selected").val(),collectionId:$("#cboCollections option:selected").val()},true).done(function(){app.notify.alert({text:app.lang.string("text add to collection done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text add to collection fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})},function(){},50)}).fail(function(){app.notify.alert({text:app.lang.string("text get collecton fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})})},shareDocumentGroup:function(){app.notify.close.all().done(function(){app.notify.dialog(page_search.singleResult.getSharingInputs(),app.lang.string("share search result","page.search"),false,app.lang.string("share item","page.search"),app.lang.string("don't share item","page.share"),function(){var c=[],d,a;$(".app-search-item").each(function(e,f){c.push($(f).attr("data-html5-fileid"))});var b;if($("#selFriend option:selected").hasClass("friend")){b="shareDocumentGroup"}else{if($("#selFriend option:selected").hasClass("heritage")){b="shareDocumentGroupHeritage"}}d=($("#txtStartDate").val())?parseFloat(moment($("#txtStartDate").val()).format("x")):null;a=($("#txtEndDate").val())?parseFloat(moment($("#txtEndDate").val()).format("x")):null;app.rc.getJson(b,{withUserId:parseInt($("#selFriend option:selected").val()),policyValue:JSON.stringify(c).split('"').join(""),name:$("#txtShareName").val(),description:$("#txtShareDescription").val(),lifespanstart:d,lifespanend:a},true).done(function(){app.notify.alert({text:app.lang.string("text share document group done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text share document group fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})},function(){},50)})}},updateSearchDiv:function(a){app.notify.loader.bubbleDiv(true,app.lang.string("loadingText","page.search"),app.lang.string("loadingHeadline","page.search"));var b=app.rc.getJson("searchWithFilters",{query:app.store.localStorage.get("data-html5-themis-search-value"),source:($("#bySource").length>0)?$("#bySource option:selected").val():"",type:($("#byType").length>0)?$("#byType option:selected").val():"",job:($("#byJob").length>0)?$("#byJob option:selected").val():"",owner:($("#byOwner").length>0)?$("#byOwner option:selected").val():"",tag:($("#byTag").length>0)?$("#byTag option:selected").val():""},true);a.empty();b.fail(function(){app.notify.alert(app.lang.string("search_error","texts"),false,app.lang.string("search","headlines"),app.lang.string("ok","actions"))});b.done(function(d){var c=$(app.template.get("listA","responsive"));a.append(page_search.singleResult.getFilters(d));$.each(d.files,function(f,e){c.append(app.ni.list.thumbnail({href:"#",imageSrc:(page_search.singleResult.getThumbnail(e))?page_search.singleResult.getThumbnail(e):" ",title:(e.isSharing)?app.lang.string("shared item","page.search"):app.lang.string("own item","page.search"),headline:e.title,text:e.preview,classes:["job","app-search-item"],attributes:{onclick:"page_search.singleResult.openDetails("+JSON.stringify(e).split('"').join("'")+")","data-html5-datasink":e.datasink,"data-html5-datasource":e.datasource,"data-html5-fileid":e.fileId,"data-html5-issharing":e.isSharing,"data-html5-jobname":e.jobName,"data-html5-ownerid":e.ownerId,"data-html5-properties-destiantion":e.properties.destiantion,"data-html5-properties-path":e.properties.path,"data-html5-properties-source":e.properties.source,"data-html5-timestamp":e.timestamp,"data-html5-title":e.title,"data-html5-type":e.type}}))});a.append(c);app.help.jQM.enhance(a)});b.always(function(){app.notify.loader.remove()})},functions:{},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_search={
	"name":"search",
	"shortname":"search",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_settings={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("settings","headlines")}));d.append(app.ni.element.a({id:"btnClearHtml5Storage",text:app.lang.string("clear_html5_storage","actions"),classes:["ui-btn"]}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);try{$(document).on("click","#btnClearHtml5Storage",function(){app.notify.alert(app.lang.string("clear_html5_storage","notifications"),app.lang.string("clear_html5_storage","headlines"),app.lang.string("clear_html5_storage","headlines"),page_settings.redirectHome);app.notify.add.alert(app.lang.string("logout","notifications"),app.lang.string("logout","headlines"),app.lang.string("logout","headlines"))});success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},redirectHome:function(){app.store.localStorage.clear();app.help.navigation.redirect("index.html")},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_settings={
	"name":"settings",
	"shortname":"settings",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_share_backup={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var c=a.find("div[data-role=content]");var b=a.find("div#nav-panel");app.notify.loader.bubbleDiv(true,"",app.lang.string("loading","headlines"));var d=app.rc.getJson([["ownedShares",{}],["ownedSharesHeritage",{}],["incomingShares",{}],["getCollections",{}]],true);c.append(app.ni.element.h1({text:app.lang.string("share_backup","headlines")}));d.done(function(k){var j=k.incomingShares,f=k.ownedShares,h=k.ownedSharesHeritage,g=k.getCollections;c.append(app.ni.element.h2({text:app.lang.string("my incoming shares","headlines"),styles:{clear:"both"}}));var i=$(app.template.get("listA","responsive"));$.each(j,function(l,m){i.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("incoming_"+m.policy+"_"+m.approvedBySharingpartner),title:app.lang.string("date","page.share_backup")+" "+date("d.m.Y",m.policyCreationDate/1000),headline:(m.name!=undefined)?m.name:app.lang.string(m.policy,"page.share_backup"),text:(m.description!=undefined)?m.description:"no description for backup",classes:["incoming-share"],attributes:{json:JSON.stringify(m).split('"').join("'"),"data-html5-themis-id":m.id,"data-html5-themis-fromuserid":m.fromUserID,"data-html5-themis-withuserid":m.withUserID,"data-html5-themis-policy":m.policy,"data-html5-themis-searchelementid":m.sharedElementID,"data-html5-themis-policycreationdate":m.policyCreationDate,"data-html5-themis-numberOfSharedDocuments":m.numberOfSharedDocuments,"data-html5-themis-name":m.name,"data-html5-themis-approvedBySharingpartner":m.approvedBySharingpartner}}))});app.notify.loader.remove();c.append(i);c.append(app.ni.element.h2({text:app.lang.string("my owned shares","headlines"),styles:{clear:"both"}}));i=$(app.template.get("listA","responsive"));$.each(f,function(m,l){i.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("incoming_"+l.policy+"_"+l.approvedBySharingpartner),title:app.lang.string("date","page.share_backup")+" "+date("d.m.Y",l.policyCreationDate/1000),headline:(l.name!=undefined)?l.name:app.lang.string(l.policy,"page.share_backup"),text:(l.description!=undefined)?l.description:"no description for backup",classes:["owned-share","friend"],attributes:{json:JSON.stringify(l).split('"').join("'"),"data-html5-revoketype":"heritage","data-html5-themis-id":l.id,"data-html5-themis-fromuserid":l.fromUserID,"data-html5-themis-withuserid":l.withUserID,"data-html5-themis-policy":l.policy,"data-html5-themis-searchelementid":l.sharedElementID,"data-html5-themis-policycreationdate":l.policyCreationDate,"data-html5-themis-numberOfSharedDocuments":l.numberOfSharedDocuments,"data-html5-themis-name":l.name,"data-html5-themis-approvedBySharingpartner":l.approvedBySharingpartner}}))});c.append(i);c.append(app.ni.element.h2({text:app.lang.string("my owned shares heritage","headlines"),styles:{clear:"both"}}));i=$(app.template.get("listA","responsive"));$.each(h,function(m,l){i.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("incoming_"+l.policy+"_"+l.approvedBySharingpartner),title:app.lang.string("date","page.share_backup")+" "+date("d.m.Y",l.policyCreationDate/1000),headline:(l.name!=undefined)?l.name:app.lang.string(l.policy,"page.share_backup"),text:(l.description!=undefined)?l.description:"no description for backup",classes:["owned-share","heritage"],attributes:{json:JSON.stringify(l).split('"').join("'"),"data-html5-revoketype":"heritage","data-html5-themis-id":l.id,"data-html5-themis-fromuserid":l.fromUserID,"data-html5-themis-withuserid":l.withUserID,"data-html5-themis-policy":l.policy,"data-html5-themis-searchelementid":l.sharedElementID,"data-html5-themis-policycreationdate":l.policyCreationDate,"data-html5-themis-numberOfSharedDocuments":l.numberOfSharedDocuments,"data-html5-themis-name":l.name,"data-html5-themis-approvedBySharingpartner":l.approvedBySharingpartner}}))});c.append(i);c.append(app.ni.element.h2({text:app.lang.string("my collections","headlines"),styles:{clear:"both"}}));i=$(app.template.get("listA","responsive"));$.each(g,function(l,m){i.append(app.ni.list.thumbnail({href:"#",imageSrc:app.img.getUrlById("collection"),title:app.lang.string("date","page.share_backup")+" "+date("d.m.Y",m.collectionCreationDate/1000),headline:(m.name!=undefined)?m.name:app.lang.string(m.policy,"page.share_backup"),text:(m.description!=undefined)?m.description:"test test test",classes:["collection"],attributes:{json:JSON.stringify(m).split('"').join("'"),"data-html5-collectionId":m.collectionId}}))});c.append(i);app.notify.loader.remove();app.help.jQM.enhance(c)});d.fail(function(f){app.notify.loader.remove();alert("ws error: "+f)})},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);$(this.config.pageId).on("click",".owned-share",function(c){var b=JSON.parse($(this).attr("json").split("'").join('"')),d=page_share_backup.functions.ownedShareOperatios(b);app.notify.alert(d,false,app.lang.string("share details","page.share_backup"),app.lang.string("close details","page.share_backup"),false,50)});$(this.config.pageId).on("click",".incoming-share",function(c){var b=JSON.parse($(this).attr("json").split("'").join('"'));app.notify.alert(page_share_backup.functions.incomingShareOperatios(b),false,app.lang.string("share details","page.share_backup"),app.lang.string("close details","page.share_backup"),false,50)});$(this.config.pageId).on("click",".app-share-accept",function(b){app.notify.close.all().done(function(){app.rc.getJson("approveIncomingShare",{policyID:app.store.localStorage.get("data-html5-themis-id")},true).done(function(){app.notify.alert({text:app.lang.string("text accept share done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text accept share fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})})});$(this.config.pageId).on("click",".app-share-decline",function(b){app.notify.close.all().done(function(){app.rc.getJson("declineIncomingShare",{policyID:app.store.localStorage.get("data-html5-themis-id")},true).done(function(){app.notify.alert({text:app.lang.string("text decline share done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text decline share fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})})});$(this.config.pageId).on("storagefilled",".app-share-delete",function(b){app.notify.close.all().done(function(){var c;if(app.store.localStorage.get("data-html5-revoketype")=="heritage"){c="deleteOwnShareHeritage"}else{if(app.store.localStorage.get("data-html5-revoketype")=="friends"){c="deleteOwnShare"}}app.rc.getJson(c,{policyID:app.store.localStorage.get("data-html5-themis-id")},true).done(function(){app.notify.alert({text:app.lang.string("text delete share done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text delete share fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})})});$(this.config.pageId).on("click",".app-collection-share",function(b){plugin_Notification.functions.dialog(page_search.singleResult.getSharingInputs(),false,app.lang.string("share collection","page.share_backup"),app.lang.string("cancel","page.share_backup"),app.lang.string("share collection","page.share_backup"),false,function(){var d,e,c;if($("#selFriend option:selected").hasClass("friend")){d="shareCollection"}else{if($("#selFriend option:selected").hasClass("heritage")){d="shareCollectionHeritage"}}e=($("#txtStartDate").val())?parseFloat(moment($("#txtStartDate").val()).format("x")):null;c=($("#txtEndDate").val())?parseFloat(moment($("#txtEndDate").val()).format("x")):null;app.rc.getJson(d,{withUserId:parseInt($("#selFriend option:selected").val()),policyValue:app.store.localStorage.get("data-html5-collectionId"),name:$("#txtShareName").val(),description:$("#txtShareDescription").val(),lifespanstart:e,lifespanend:c},true).done(function(){app.notify.alert({text:app.lang.string("text share collection done","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})}).fail(function(){app.notify.alert({text:app.lang.string("text share collection fail","sharing"),headline:app.lang.string("headline sharing","sharing"),button:app.lang.string("Ok","sharing"),callbackButton:false,delayInMs:0})})},80)});$(this.config.pageId).on("click",".collection",function(b){var d=JSON.parse($(this).attr("json").split("'").join('"')),c=JSON.stringify(d.documentIds).replace("[","").replace("]","").split(",").join(" OR ").split('"').join("");app.store.localStorage.set("data-html5-themis-search-value",c);app.notify.alert(page_share_backup.functions.collectionOperations(d),false,app.lang.string("collection details","page.share_backup"),app.lang.string("close details","page.share_backup"),false,50)});$(this.config.pageId).on("click",".app-collection-view",function(b){app.nav.redirect("search.html","none")})},functions:{incomingShareOperatios:function(a){var b=app.ni.element.div({});if(!a.approvedBySharingpartner){b.append(app.ni.element.a({classes:["ui-btn","ui-btn-inline","app-share-accept"],text:app.lang.string("accept share","page.share_backup")}))}b.append(app.ni.element.a({classes:["ui-btn","ui-btn-inline","app-share-decline"],text:app.lang.string("decline share","page.share_backup")}));b.append(page_share_backup.functions.getShareDetails(a));return b},ownedShareOperatios:function(a){var b=app.ni.element.div({});b.append(app.ni.element.a({classes:["ui-btn","ui-btn-inline","app-share-delete"],text:app.lang.string("revoke share","page.share_backup")}));b.append(page_share_backup.functions.getShareDetails(a));return b},collectionOperations:function(a){var b=app.ni.element.div({});b.append(app.ni.element.a({classes:["ui-btn","ui-btn-inline","app-collection-share"],text:app.lang.string("share collection","page.share_backup")}));b.append(app.ni.element.a({classes:["ui-btn","ui-btn-inline","app-collection-view"],text:app.lang.string("view collection","page.share_backup")}));b.append(page_share_backup.functions.getCollectionDetails(a));return b},getCollectionDetails:function(a){var b=app.ni.element.div({});$.each(a,function(c,d){b.append(app.ni.element.p({text:c+": "+d}))});return b},getShareDetails:function(a){var b=app.ni.element.div({});$.each(a,function(c,d){b.append(app.ni.element.p({text:c+": "+d}))});return b}},events:{pagebeforechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12)},pagebeforecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12)},pagebeforehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12)},pagebeforeload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12)},pagebeforeshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12)},pagechange:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12)},pagechangefailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12)},pagecreate:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12)},pagehide:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12)},pageinit:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12)},pageload:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12)},pageloadfailed:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12)},pageremove:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12)},pageshow:function(b,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12)}}};var config_share_backup={
	"name":"share_backup",
	"shortname":"share_backup",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_start={config:null,elements:{},constructor:function(){var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);initialisationPanel.show("")},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){alert("WS fails: "+JSON.stringify(this.result))},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(b,a){},pagebeforecreate:function(b,a){},pagebeforehide:function(b,a){},pagebeforeload:function(b,a){},pagebeforeshow:function(b,a){},pagechange:function(b,a){},pagechangefailed:function(b,a){},pagecreate:function(b,a){},pagehide:function(b,a){initialisationPanel.hide()},pageinit:function(b,a){},pageload:function(b,a){},pageloadfailed:function(b,a){},pageremove:function(b,a){},pageshow:function(b,a){window.setTimeout(function(){if(app.info.firstUse()===true){app.info.firstUse(false);app.help.navigation.redirect(app.config.startPage_firstStart,"slideup")}else{if(app.sess.loggedIn()){app.help.navigation.redirect(app.config.startPage_loggedIn,"slideup")}else{app.help.navigation.redirect(app.config.startPage,"slideup")}}},1000)}}};var config_start={
	"name":"start",
	"shortname":"start",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": false,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_startToken={config:null,include:null,include_once:null,elements:null,constructor:function(){app.debug.trace("page_startToken.constructor()");var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.trace("page_startToken.creator()");var b=a.find("div[data-role=content]");b.append("<h1>Erbe holen</h1>");b.append(app.ni.element.a({id:"btnDeadManSwitch",text:"Erbe holen",classes:["ui-btn","ui-btn-inline"]}))},async:{promise:null,result:null,elements:null,creator:function(b){app.debug.trace("page_startToken.async.creator()");var a=$.Deferred();a.resolve();return a.promise()},call:function(a){app.debug.trace("page_startToken.async.call()");return app.rc.getJson()},done:function(a){app.debug.trace("page_startToken.async.done()")},fail:function(a){app.debug.trace("page_startToken.async.fail()");alert("WS fails: "+JSON.stringify(this.result))},always:function(a){app.debug.trace("page_startToken.async.always()")},abort:function(a){app.debug.trace("page_startToken.async.abort()")}},setEvents:function(a){app.debug.trace("page_startToken.setEvents()");$(this.config.pageId).on("click","#btnDeadManSwitch",function(){app.rc.getJson("deadManSwitch",{},true).done(function(){alert("done")}).fail(function(){alert("fail")}).always()})},functions:{},events:{pagebeforechange:function(b,a){app.debug.trace("page_startToken.pagebeforechange()")},pagebeforecreate:function(b,a){app.debug.trace("page_startToken.pagebeforecreate()")},pagebeforehide:function(b,a){app.debug.trace("page_startToken.pagebeforehide()")},pagebeforeload:function(b,a){app.debug.trace("page_startToken.pagebeforeload()")},pagebeforeshow:function(b,a){app.debug.trace("page_startToken.pagebeforeshow()")},pagechange:function(b,a){app.debug.trace("page_startToken.pagechange()")},pagechangefailed:function(b,a){app.debug.trace("page_startToken.pagechangefailed()")},pagecreate:function(b,a){app.debug.trace("page_startToken.pagecreate()")},pagehide:function(b,a){app.debug.trace("page_startToken.pagehide()")},pageinit:function(b,a){app.debug.trace("page_startToken.pageinit()")},pageload:function(b,a){app.debug.trace("page_startToken.pageload()")},pageloadfailed:function(b,a){app.debug.trace("page_startToken.pageloadfailed()")},pageremove:function(b,a){app.debug.trace("page_startToken.pageremove()")},pageshow:function(b,a){app.debug.trace("page_startToken.pageshow()")}}};var config_startToken={
	"name": "startToken",
	"shortname": "startToken",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_timelineSearch={config:null,include:null,include_once:null,elements:null,constructor:function(){app.debug.trace("page_timelineSearch.constructor()");var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.trace("page_timelineSearch.creator()");var d=$("div[data-role=content]");var c=app.ni.form.form({id:"frmSearch",attributes:{action:"#","data-ajax":"false"},label:false});c.append(app.ni.text.text({id:"txtSearch",placeholder:(app.store.localStorage.get("data-html5-themis-timelinesearch-value"))?app.store.localStorage.get("data-html5-themis-timelinesearch-value"):app.lang.string("search","labels"),label:false,labelText:app.lang.string("search","labels"),container:false}));c.append(app.ni.element.a({id:"btnSearch",text:app.lang.string("search","actions"),attributes:{href:"#"},classes:["ui-btn"],styles:{display:"none"}}));d.append(c);var e=app.ni.element.div({id:"divStsSidebar"});var g=app.ni.element.div({id:"divStsMap"});e.append(g);var f=app.ni.element.div({id:"divStsHistogram"});e.append(f);d.append(e);var b=app.ni.element.div({id:"divStsResultList"});d.append(b);this.spatioTemporalUI=new SpatioTemporalUI({resultList:b,map:g,timeHistogram:f,imagePath:"../ext/leaflet/images/",token:app.store.localStorage.get(plugin_WebServiceClient.config.headerToken.value)});if(app.store.localStorage.get("data-html5-themis-timelinesearch-value")!==null){window.setTimeout(function(){page_timelineSearch.update()},1000)}},async:{promise:null,result:null,elements:null,creator:function(b){app.debug.trace("page_timelineSearch.async.creator()");var a=$.Deferred();a.resolve();return a.promise()},call:function(a){app.debug.trace("page_timelineSearch.async.call()");return app.rc.getJson()},done:function(a){app.debug.trace("page_timelineSearch.async.done()")},fail:function(a){app.debug.trace("page_timelineSearch.async.fail()");alert("WS fails: "+JSON.stringify(this.result))},always:function(a){app.debug.trace("page_timelineSearch.async.always()")},abort:function(a){app.debug.trace("page_timelineSearch.async.abort()")}},setEvents:function(a){app.debug.trace("page_timelineSearch.setEvents()");jQuery(document).scroll(function(){var b=jQuery(window).scrollTop(),c=jQuery("#divStsResultList").offset().top;if(c>b){jQuery("#divStsSidebar").css("top",c-b)}else{jQuery("#divStsSidebar").css("top",10)}});jQuery(this.config.pageId).on("submit","#frmSearch",function(b){b.preventDefault();app.store.localStorage.set("data-html5-themis-timelinesearch-value",jQuery("#txtSearch").val());page_timelineSearch.update()})},update:function(){app.rc.getJson("searchWithFilters",{query:app.store.localStorage.get("data-html5-themis-timelinesearch-value"),source:"",type:"",job:"",owner:"",tag:"",offsetStart:0,offsetEnd:1500},true).done(function(a){this.spatioTemporalUI.update(a)}.bind(this))},functions:{},events:{pagebeforechange:function(b,a){app.debug.trace("page_timelineSearch.pagebeforechange()")},pagebeforecreate:function(b,a){app.debug.trace("page_timelineSearch.pagebeforecreate()")},pagebeforehide:function(b,a){app.debug.trace("page_timelineSearch.pagebeforehide()")},pagebeforeload:function(b,a){app.debug.trace("page_timelineSearch.pagebeforeload()")},pagebeforeshow:function(b,a){app.debug.trace("page_timelineSearch.pagebeforeshow()")},pagechange:function(b,a){app.debug.trace("page_timelineSearch.pagechange()")},pagechangefailed:function(b,a){app.debug.trace("page_timelineSearch.pagechangefailed()")},pagecreate:function(b,a){app.debug.trace("page_timelineSearch.pagecreate()")},pagehide:function(b,a){app.debug.trace("page_timelineSearch.pagehide()")},pageinit:function(b,a){app.debug.trace("page_timelineSearch.pageinit()")},pageload:function(b,a){app.debug.trace("page_timelineSearch.pageload()")},pageloadfailed:function(b,a){app.debug.trace("page_timelineSearch.pageloadfailed()")},pageremove:function(b,a){app.debug.trace("page_timelineSearch.pageremove()")},pageshow:function(b,a){app.debug.trace("page_timelineSearch.pageshow()")}}};var config_timelineSearch={
	"name": "timelineSearch",
	"shortname": "timelineSearch",
	"template": "",
	"asyncLoading": false,
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0
};var page_usersettings={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("user_settings","headlines")}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_usersettings={
	"name":"usersettings",
	"shortname":"usersettings",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": true,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_verify_email={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("verify_email","headlines")}));d.append(app.ni.element.p({text:app.lang.string("verify_email","texts")}));d.append(app.ni.text.text({id:"txtVerificationKey",placeholder:app.lang.string("verification_key","labels"),label:true,labelText:app.lang.string("verification_key","labels"),container:true}));d.append(app.ni.button.button({id:"btnVerifyEmail",placeholder:app.lang.string("verify_email","labels"),label:true,labelText:app.lang.string("verify_email","labels"),container:true,value:app.lang.string("verify_email","actions")}));d.append(app.ni.element.a({id:"lnkResendVerificationKey",text:app.lang.string("resend_verification_key","actions"),attributes:{href:"#"}}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10);try{$(a).on("click","#btnVerifyEmail",function(){app.debug.alert("page_"+page_verify_email.config.name+" #btnVerifyEmail click",25);if((json=app.rc.getJson("verifyEmail",{verificationKey:a.find("#txtVerificationKey").val()}))!=false){if(json.username=="success"){app.store.localStorage.set("data-html5-themis-activated",true);$.mobile.changePage("start.html")}else{app.notify.alert(app.lang.string("bad_verify_email","notifications"),app.lang.string("verify_email","headlines"),app.lang.string("","headlines"))}}else{app.notify.alert(app.lang.string("bad_verify_email","notifications"),app.lang.string("verify_email","headlines"),app.lang.string("","headlines"))}});$(a).on("click","#lnkResendVerificationKey",function(){app.debug.alert("page_"+page_verify_email.config.name+" #lnkResendVerificationKey click",25);if((json=app.rc.getJson("newVerficiationEmail",{username:app.store.localStorage.get("data-html5-themis-username")}))!=false){if(json.username){app.notify.alert(app.lang.string("varification_key_resend","notifications"),app.lang.string("verify_email","headlines"),app.lang.string("verify_email","headlines"))}else{alert("Email nicht gesendet")}}});success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_verify_email={
	"name":"verify_email",
	"shortname":"verify_email",
	"template": "",
	"useKeepAlive": true,
	"loginObligate": false,
	"isGlobalPage": true,
	"contentRefresh": false,
	"contentRefreshInterval": 0,
	"asyncLoading": false
};var page_zip_archive={config:null,elements:null,constructor:function(){app.debug.alert("page_"+this.config.name+".constructor()",10);var a=$.Deferred();a.resolve();return a.promise()},creator:function(a){app.debug.alert("page_"+this.config.name+".creator()",10);try{app.debug.alert("page_"+this.config.name+".creator()",10);var e=a.find("div[data-role=header]");var d=a.find("div[data-role=content]");var b=a.find("div#nav-panel");d.append(app.ni.element.h1({text:app.lang.string("zip_archive","headlines")}));success=true}catch(c){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(c,null,4),50);app.debug.log(JSON.stringify(c,null,4));success=false}return success},async:{promise:null,result:null,elements:null,creator:function(b){var a=$.Deferred();a.resolve();return a.promise()},call:function(a){return app.rc.getJson()},done:function(a){},fail:function(a){},always:function(a){},abort:function(a){}},setEvents:function(a){app.debug.alert("page_"+this.config.name+".setEvents()",10)},functions:{},events:{pagebeforechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagebeforeshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagebeforeshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechange:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechange()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagechangefailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagechangefailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagecreate:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagecreate()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pagehide:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pagehide()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageinit:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageinit()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageload:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageload()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageloadfailed:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageloadfailed()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageremove:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageremove()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success},pageshow:function(c,a){app.debug.alert("page_"+$(a).attr("id")+".pageshow()",12);try{success=true}catch(b){app.debug.alert("Fatal exception!\n\n"+JSON.stringify(b,null,4),50);app.debug.log(JSON.stringify(b,null,4));success=false}return success}}};var config_zip_archive={
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