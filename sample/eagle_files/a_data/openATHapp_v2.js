!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();~function(e){var n=function(){var e=navigator.userAgent;return{isMobile:!!e.match(/AppleWebKit.*Mobile.*/),isIos:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isAndroid:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,isWeChat:/MicroMessenger/i.test(e.toLowerCase()),andrVersion:function(){if(!(e.indexOf("Android")>-1||e.indexOf("Adr")>-1))return"";var n=e.match(/Android (\d+)\.(\d+)\.?(\d+)?/);return n?(n.shift(),void 0===n[2]&&(n[2]=0),n.join("")):"9.0.0"}()}}();if(n.isMobile){var t=function(){function e(n){o(this,e),this.btn=n,this.wxURl="http://a.app.qq.com/o/simple.jsp",this.pkgname="com.cubic.autohome",this.schemeForIos="autohome://",this.schemeForAndroid="autohome://",this.openParams=null,this.schemeOpenTimer=null,this.schemeOpenTimeout=1500,this.schemeOpenCycleCount=20,this.androidCanOpen=!1,this.defaultParams={ios_scheme:"",android_scheme:"",ios_downurl:"",android_downurl:"",key_code:"",wx_downck:"CK1286547003996"}}return i(e,[{key:"run",value:function(){return this.openParams=this.getParams(this.btn),n.isWeChat?void this.isWeChat():n.isAndroid?void this.isAndroid():n.isIos?void this.isIos():void 0}},{key:"clearSchemeOpenTimer",value:function(){clearInterval(this.schemeOpenTimer)}},{key:"getAttr",value:function(e,n){return e.getAttribute(n)}},{key:"getParams",value:function(e){var n=this;return e instanceof HTMLElement?Object.assign(n.defaultParams,{ios_scheme:n.getAttr(e,"ath-open-iosScheme"),android_scheme:n.getAttr(e,"ath-open-androidScheme"),ios_downurl:n.getAttr(e,"ath-open-iosDownurl"),android_downurl:n.getAttr(e,"ath-open-androidDownurl"),key_code:n.getAttr(e,"ath-open-keyCode"),wx_downck:n.getAttr(e,"ath-open-wxck")}):Object.assign(n.defaultParams,{ios_scheme:e.AthOpenIosScheme||"",android_scheme:e.AthOpenAndroidScheme||"",ios_downurl:e.AthOpeniosDownurl?e.AthOpeniosDownurl:n.defaultParams.ios_downurl,android_downurl:e.AthOpenAndroidDownurl?e.AthOpenAndroidDownurl:n.defaultParams.android_downurl,key_code:e.AthOpenKeyCode,wx_downck:e.AthOpenWxck?e.AthOpenWxck:n.defaultParams.wx_downck})}},{key:"createWeChatHref",value:function(){return this.wxURl+"?pkgname="+this.pkgname+"&ckey="+this.openParams.wx_downck+"&android_scheme="+encodeURIComponent(this.schemeForAndroid+this.openParams.android_scheme)+"&ios_scheme="+encodeURIComponent(this.schemeForIos+this.openParams.ios_scheme)}},{key:"isAndroid",value:function(){var e=this,n=document.createElement("iframe");n.style.cssText="display:none;width:0px;height:0px;",n.src=""+this.schemeForAndroid+this.openParams.android_scheme,document.body.appendChild(n),this.schemeOpen(),document.addEventListener("visibilitychange",function(){(document.hidden||document.webkitHidden)&&e.clearSchemeOpenTimer()},!1),document.addEventListener("webkitvisibilitychange",function(){(document.hidden||document.webkitHidden)&&e.clearSchemeOpenTimer()},!1),window.addEventListener("pagehide",function(){e.clearSchemeOpenTimer()},!1),window.addEventListener("blur",function(){e.clearSchemeOpenTimer()},!1)}},{key:"isWeChat",value:function(){window.location.href=this.createWeChatHref()}},{key:"isIos",value:function(){window.location.href=this.createIosDeepLink()}},{key:"schemeOpen",value:function(){var e=this,t=this.schemeOpenTimeout/this.schemeOpenCycleCount,o=this.schemeOpenTimeout+t;n.andrVersion>="700"?o-=30:o+=650;var i=(new Date).getTime(),r=0,s=0;this.schemeOpenTimer=setInterval(function(){r++,s=(new Date).getTime()-i,(r>=t||s>o)&&(e.clearSchemeOpenTimer(),s>o||document.hidden||document.webkitHidden?e.androidCanOpen=!0:(e.androidCanOpen=!1,window.location.href=e.openParams.android_downurl))},this.schemeOpenCycleCount)}},{key:"createIosDeepLink",value:function(){return this.openParams.ios_scheme.length?"http://comm.app.autohome.com.cn/go/"+this.openParams.ios_scheme+"&downsrc="+encodeURIComponent(this.openParams.ios_downurl):"http://comm.app.autohome.com.cn/go/?downsrc="+encodeURIComponent(this.openParams.ios_downurl)}}]),e}();window._OpenATH_=function(e){return new t(e).run()}}}()}]);