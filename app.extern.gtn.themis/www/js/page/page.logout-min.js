var page_logout={config:null,constructor:function(){var b=null;try{b=true}catch(a){app.debug.log(JSON.stringify(a,null,4));b=false}return b},creator:function(a){var c=null;try{app.store.localStorage.set("data-html5-themis-loggedin",false);$(location).attr("href","index.html");c=true}catch(b){app.debug.log(JSON.stringify(b,null,4));c=false}return c},setEvents:function(a){var c=null;try{c=true}catch(b){app.debug.log(JSON.stringify(b,null,4));c=false}return c},events:{pagebeforechange:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforecreate:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforehide:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforeload:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagebeforeshow:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagechange:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagechangefailed:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagecreate:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pagehide:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageinit:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageload:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageloadfailed:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageremove:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d},pageshow:function(c,a){var d=null;try{d=true}catch(b){app.debug.log(JSON.stringify(b,null,4));d=false}return d}}};