var plugin_FormInputDesigner={config:null,constructor:function(){},pluginsLoaded:function(){},pagesLoaded:function(){},definePluginEvents:function(){},afterHtmlInjectedBeforePageComputing:function(a){app.debug.alert("Plugin: "+this.config.name+".afterHtmlInjectedBeforePageComputing()",5)},pageSpecificEvents:function(a){},getAttributes:function(b){var a='class="'+plugin_FormInputDesigner.getClasses(b)+'"';if(b.placeholder!=undefined){a+=' placeholder="'+b.placeholder+'"'}if(b.id!=undefined){a+=' id="'+b.id+'"'}if(b.value!=undefined){a+=' value="'+b.value+'"'}if(b.attributes!=undefined){$.each(b.attributes,function(c,d){a+=" "+c+'="'+d+'"'})}return a},getClasses:function(a){var b="";$.each(a.classes,function(c,d){b+=d+" "});return b},getLabel:function(b){var c="";if(b.labelText!=undefined){c=b.labelText}var d="";if(b.label!=undefined&&!b.label){var d="ui-hidden-accessible app-form-label-hidden"}var a="";if(b.id!=undefined){a+=' for="'+b.id+'"'}return"<label "+a+' class="'+d+'">'+c+"</label>"},wrapInContainer:function(b,a){return'<div class="ui-field-contain app-form-label-input-container">'+b+a+"</div>"},addClassToOptions:function(a,b){if(a.classes==undefined){a.classes=new Array()}a.classes.push(b);return a},generateInput:function(d,f){d=plugin_FormInputDesigner.verifyOptions(d);var b=plugin_FormInputDesigner.getAttributes(d);var a='<input type="'+f+'"  '+b+" />";var c=plugin_FormInputDesigner.getLabel(d);if(d.container!=undefined&&d.container){var e=plugin_FormInputDesigner.wrapInContainer(c,a)}else{var e=c+a}return e},generateOutput:function(c,d){c=plugin_FormInputDesigner.verifyOptions(c);var b=plugin_FormInputDesigner.getAttributes(c);var a="<"+d+" "+b+">"+c.text+"</"+d+">";return a},verifyOptions:function(a){return a},functions:{text:{text:function(a){var b="text";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-text");return plugin_FormInputDesigner.generateInput(a,b)},search:function(a){var b="search";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-search");return plugin_FormInputDesigner.generateInput(a,b)},textarea:function(a){var b="text"},number:function(a){var b="number";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-number");return plugin_FormInputDesigner.generateInput(a,b)},date:function(a){var b="date";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-date");return plugin_FormInputDesigner.generateInput(a,b)},month:function(a){var b="month";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-month");return plugin_FormInputDesigner.generateInput(a,b)},week:function(a){var b="week";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-week");return plugin_FormInputDesigner.generateInput(a,b)},time:function(a){var b="time";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-time");return plugin_FormInputDesigner.generateInput(a,b)},datetime:function(a){var b="datetime";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-datetime");return plugin_FormInputDesigner.generateInput(a,b)},telephone:function(a){var b="telephone";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-telephone");return plugin_FormInputDesigner.generateInput(a,b)},email:function(a){var b="email";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-email");return plugin_FormInputDesigner.generateInput(a,b)},url:function(a){var b="url";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-url");return plugin_FormInputDesigner.generateInput(a,b)},password:function(a){var b="password";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-password");return plugin_FormInputDesigner.generateInput(a,b)},color:function(a){var b="color";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-color");return plugin_FormInputDesigner.generateInput(a,b)},file:function(a){var b="file";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-file");return plugin_FormInputDesigner.generateInput(a,b)}},button:{button:function(a){var b="button";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-button");return plugin_FormInputDesigner.generateInput(a,b)},submit:function(a){var b="submit";plugin_FormInputDesigner.addClassToOptions(a,"app-form-input-submit");return plugin_FormInputDesigner.generateInput(a,b)}},checkbox:{},collabsible:{},list:{},slider:{},element:{h1:function(a){var b="h1";plugin_FormInputDesigner.addClassToOptions(a,"app-h1");return plugin_FormInputDesigner.generateOutput(a,b)},h2:function(a){},h3:function(a){},h4:function(a){},h5:function(a){},h6:function(a){},p:function(a){var b="p";plugin_FormInputDesigner.addClassToOptions(a,"app-p");return plugin_FormInputDesigner.generateOutput(a,b)},a:function(a){var b="a";plugin_FormInputDesigner.addClassToOptions(a,"app-a");return plugin_FormInputDesigner.generateOutput(a,b)},ol:function(a){},ul:function(a){},li:function(a){}}}};