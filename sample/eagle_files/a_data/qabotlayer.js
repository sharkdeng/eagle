!function(a){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return a[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=a,e.c=t,e.d=function(a,t,n){e.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},e.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,t){if(1&t&&(a=e(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var o in a)e.d(n,o,function(t){return a[t]}.bind(null,o));return n},e.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(t,"a",t),t},e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},e.p="/",e(e.s=14)}({14:function(a,t){({qabotLayerBtn:$("#qabotLayerBtn"),pvareaid:"#pvareaid=3552128",apiUrl:"https://qabot.autohome.com.cn/m/1000/ajax/floatinglayer/data",qabotUrl:"https://qabot.m.autohome.com.cn",hideClassName:"fn-hide",init:function(){if(!$("#qabotLayer").length){var a=this;a.getData(),$("body").on("click",'#qabotLayerBtn, [data-role="qabot-layer-btn"]',function(t){a.show(),$(".qabot-state").addClass(a.hideClassName)}),$("body").on("click",'[data-role="qabot-close"]',function(t){t.stopPropagation();var e=+$(this).data("defaultShow"),n=!!$.getCookie("qabotmfloat");a.hide(),e&&!n&&(a.setCookie("qabotmfloat",1),$(this).find("strong").addClass(a.hideClassName),a.toast())}),$("body").on("click","#btn-qabot-send",function(){a.sendTxt()}),$("body").on("keydown","#qabotLayerInput",function(t){a.keyDown(t)}),$("body").on("click",'[data-role="qabot-qibu-link"]',function(){a.trackEvent($(this).data("action"),"click","media","middle",3)}),$("body").on("click",'[data-role="qabot-layer-link"]',function(){a.trackEvent($(this).data("action"))}),$("body").on("touchmove",".qabot-layer__mask",function(a){a.preventDefault()},!1)}},getData:function(){var a=this,t=$.getCookie("clubusershow"),e=t?t.split("|")[0]:"",n=!!$.getCookie("qabotmfloat"),o="";$.ajax({type:"GET",url:a.apiUrl+"?userId="+e,dataType:"jsonp",success:function(t){if(t&&0===t.returncode){var e=function(a,t){if(t)return 1==a?'<li class="animate"><span class="label">\u4eca\u65e5\u9650\u884c\uff1a</span><strong>'+t.split(",")[0]+"</strong><strong>"+t.split(",")[1]+"</strong></li>":'<li class="animate"><span class="label">\u660e\u65e5\u9650\u884c\uff1a</span><strong>'+t.split(",")[0]+"</strong><strong>"+t.split(",")[1]+"</strong></li>"},i=t.result;i.defaultShow&&!n?(o+='<div class="qabot-layer" id="qabotLayer">',a.trackEvent("auto_car_details_ai_chat_m_show","show")):o+='<div class="qabot-layer hidden" id="qabotLayer">',o+='\n            <div class="qabot-layer__mask"></div>\n            <div class="qabot-layer__content">\n              <span class="qabot-close" data-role="qabot-close" data-default-show="'+(i.defaultShow?1:0)+'"><strong class="'+(i.defaultShow&&!n?"":"fn-hide")+'">\u4e0d\u518d\u63d0\u9192</strong><img class="qabot-close-icon" src="//s.autoimg.cn/qa/qabot/mfloat/img/icon-qabot-cross.png" alt=""></span>\n              <div class="qabot-header">\n                <div class="qabot-header-cartoon"><img src="//s.autoimg.cn/qa/qabot/mfloat/img/layer-header-logo.png" alt=""></div>\n          ';var s=void 0,l=void 0;s=i.weather.lowtemperature?i.weather.lowtemperature+"~"+i.weather.hightemperature+"&#176;C":"\u6682\u65e0\u6e29\u5ea6\u4fe1\u606f",i.weather.weathertext?(l=i.weather.weathertext).length>4?o+='<div class="qabot-header-weather smallscreen">':o+='<div class="qabot-header-weather">':(l="\u6682\u65e0\u5929\u6c14\u4fe1\u606f",o+='<div class="qabot-header-weather smallscreen">'),o+='\n              <span class="temperature">'+String(s)+'</span>\n              <div class="weathertext">'+String(l)+'</div>\n              <div class="qabot-header-weather-icon"><img src="//s.autoimg.cn/qa/qabot/mfloat/img/weather/icon-d'+String(i.weather.weatherimg)+'.png" alt="" onerror="this.style.opacity=0"></div>\n            </div>\n          ';var r="";if(i.weather.limit1?r+=e(1,i.weather.limit1):null===i.weather.limit1?r+='<li class="animate fn-hide"><span class="label">\u6682\u65e0\u9650\u884c\u4fe1\u606f</span></li>':r+='<li class="animate"><span class="label">\u4eca\u65e5\u65e0\u9650\u884c</span></li>',i.weather.limit2?r+=e(2,i.weather.limit2):null===i.weather.limit2?r+='<li class="animate fn-hide"><span class="label">\u6682\u65e0\u9650\u884c\u4fe1\u606f</span></li>':r+='<li class="animate"><span class="label">\u660e\u65e5\u65e0\u9650\u884c</span></li>',o+='\n            <ul class="qabot-header-carousel">'+String(r)+'</ul></div><div class="qabot-cont">',i.notice&&i.notice.length)$(".qabot-state").removeClass(a.hideClassName),o+='\n                <div class="qabot-cont-title">\u6d88\u606f</div>\n                <a href="'+String(i.notice[0].link)+'" class="qabot-cont-message" data-role="qabot-layer-link" data-action="auto_aiqiuqiu_message_m_click">'+String(i.notice[0].message)+"</a>\n              </div>\n            ";else if(i.news&&i.news.length){var c="";i.news.map(function(a){c+='<li><a href="'+a.link+'#pvareaid=6825865" data-role="qabot-layer-link" data-action="auto_aiqiuqiu_news_m_click">'+a.title+"</a><span>&gt;</span></li>"}),o+='\n                <div class="qabot-cont-title">\u70ed\u95e8\u63a8\u8350</div>\n                <ul class="qabot-cont-hot">'+c+"</ul>\n              </div>\n            "}else o+="\n              </div>\n            ";o+='\n              <div class="qabot-links">\n                <a href="https://openapi.autohome.com.cn/autohome/uc-news-quickappservice/msapi/buycar/buycarstep?#pvareaid=3290652" data-role="qabot-qibu-link" data-action="seven_poem_enter_click">\n                  <dl>\n                    <dt class="icon-qabot icon-qabot-seven"></dt>\n                    <dd>\u4e03\u6b65\u4e70\u8f66</dd>\n                  </dl>\n                </a>\n                <a href="https://car.m.autohome.com.cn/#pvareaid=6825866" data-role="qabot-layer-link" data-action="auto_aiqiuqiu_xuanche_m_click">\n                  <dl>\n                    <dt class="icon-qabot icon-qabot-select"></dt>\n                    <dd>\u54c1\u724c\u9009\u8f66</dd>\n                  </dl>\n                </a>\n                <a href="https://car.m.autohome.com.cn/4764/duibi/encry-1rgj%2fEXNFopksKhfdthAYw%3d%3d#pvareaid=6825867" data-role="qabot-layer-link" data-action="auto_aiqiuqiu_pk_m_click">\n                  <dl>\n                    <dt class="icon-qabot icon-qabot-pk"></dt>\n                    <dd>\u8f66\u578b\u5bf9\u6bd4</dd>\n                  </dl>\n                </a>\n                <a href="https://mj.autohome.com.cn/carcounter?pvareaid=3290832">\n                  <dl>\n                    <dt class="icon-qabot icon-qabot-calc"></dt>\n                    <dd>\u8d2d\u8f66\u8ba1\u7b97\u5668</dd>\n                  </dl>\n                </a>\n              </div>\n              <div class="qabot-footer">\n                <div class="qabot-layer-input">\n                  <input type="text" id="qabotLayerInput" placeholder="\u6709\u4efb\u4f55\u9700\u8981\u53ef\u4ee5\u95ee\u5c0f\u79d8\u54e6~">\n                </div>\n                <span class="btn-send" id="btn-qabot-send">\u53d1\u9001</span>\n              </div>\n            </div>\n          ',$("body").append(o)}else a.qabotLayerBtn.addClass(a.hideClassName)},error:function(){a.qabotLayerBtn.addClass(a.hideClassName)}})},show:function(){$("#qabotLayer").removeClass("hidden"),this.trackEvent("auto_car_details_ai_chat_m_show","show")},hide:function(){$("#qabotLayer").addClass("hidden")},sendTxt:function(){var a=$.trim($("#qabotLayerInput").val())?"?query="+$.trim($("#qabotLayerInput").val()):"?query=\u4f60\u80fd\u505a\u4ec0\u4e48\u5462",t=this.qabotUrl+a+this.pvareaid;this.jump(t),this.trackEvent("auto_aiqiuqiu_ask_m_click")},keyDown:function(a){13==a.keyCode&&(a.preventDefault(),this.sendTxt())},jump:function(a){window.location.href=a},trackEvent:function(a,t,e,n,o){window.trackCustomEvent&&trackCustomEvent("auto_common_event",{biz:e||"auto",type:t||"click",area:n||"",action:a,ctime:(new Date).getTime(),element:"details",pmark:o||0})},setCookie:function(a,t){var e=new Date;e.setTime(e.getTime()+2592e6),document.cookie=a+"="+escape(t)+";expires="+e.toGMTString()+";domain=autohome.com.cn;path=/"},toast:function(){var a=$('\n      <div class="qabot-layer__toast">\n        <div class="qabot-layer__toast-currency">\n          <div class="qabot-layer__toast-currency__description">\u5df2\u5173\u95ed\u63d0\u9192\u901a\u77e5</div>\n        </div>\n        <div class="qabot-layer__toast__mask"></div>\n      </div>\n    ');a.appendTo("body"),setTimeout(function(){a.remove()},2500)}}).init()}});