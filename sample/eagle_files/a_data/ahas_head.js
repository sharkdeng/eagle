window._mda_ahas=window._mda_ahas||[];window._AHAS_OBJ=window._AHAS_OBJ||{};function trackMdaEvent(action,vars){_mda_ahas.push(["_trackEvent",action,vars])}function trackCustomEvent(action,vars,exs){_mda_ahas.push(["_trackEvent",action,vars,exs])}function trackEventPath(){return _AHAS_OBJ.trackerEventPath()}function trackPageView(_track){window._trackPVTrigger=true;if(window._trackPVTimeOut){clearTimeout(window._trackPVTimeOut)}_mda_ahas.push(["_trackPageInitPassive",_track]);var _t=_track;window._trackPVTimeOut=setTimeout(function(){_mda_ahas.push(["_trackPageViewPassive",_t])},3e3)}(function(){_version_="20190603";var _config={path:"/",domain:".autohome.com.cn"};function getLoadId(len){var randchar=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];var i=0;var r="";for(i=0;i<len;i++){var index=parseInt(Math.random()*Math.pow(10,6))%randchar.length;r+=randchar[index]}var d=new Date;return d.getTime()+r}function getRLoadId(){try{var logRLoadId=readCookie("ahrlid")||"";if(logRLoadId==""){return""}logRLoadId=logRLoadId.split("-");if((new Date).getTime()-parseInt(logRLoadId[1])>10*1e3){return""}return logRLoadId[0]||""}catch(ex){return""}}function readCookie(key){var reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)");var r=document.cookie.match(reg);if(r!=null){return decodeURIComponent(r[2])}return""}function removeCookie(key){var expires=(new Date).toUTCString();document.cookie=key+"=; path="+_config.path+"; expires="+expires+"; domain="+_config.domain+";"}function setCookie(key,value){key=key+"="+value;if(key.length>256){key=key.substring(0,256)}document.cookie=key+"; path="+_config.path+"; domain="+_config.domain+";"}function setCookieExpire(key,value,timeout){key=key+"="+value;if(key.length>256){key=key.substring(0,256)}var date=new Date;timeout=new Date(date.getTime()+timeout*1e3);document.cookie=key+"; path="+_config.path+"; expires="+timeout.toGMTString()+"; domain="+_config.domain+";"}var IsEmpty=function(o){return undefined==o||"-"==o||""==o};var _is_ah_h5=function(){var ua=navigator.userAgent;var co=document.cookie;var ur=/auto_(iphone|android)(;|%3B|\/)(\d+\.\d+\.\d+)/i;var cr=/.*app_key=auto_(iphone|android)(.*)app_ver=(\d+\.\d+\.\d+)/i;return/autohomeapp/.test(ua)||ur.test(ua)||cr.test(co)};var _is_ah_pc_m=function(){if(!IsEmpty(window.pvTrack)&&!IsEmpty(window.pvTrack.site)){var _site_id=window.pvTrack.site;if(_site_id>0&&_site_id<1211e3){return"01"}else if(_site_id>1211e3&&_site_id<1212e3){return"02"}else{return"00"}}else{return"00"}};window.ah_get_visite_info=function(){var _session_id=readCookie("sessionid")&&readCookie("sessionid").split("||")[0]||"0";var _visite_id=readCookie("sessionvid")||"0";if(_is_ah_h5()){var _ah_app_deviceid=readCookie("app_deviceid")||"0";return _ah_app_deviceid+"||"+_visite_id+"||"+_version_+"||"+"03"}return _session_id+"||"+_visite_id+"||"+_version_+"||"+_is_ah_pc_m()};if(window.pageLoadId){return}window.pageLoadId=getLoadId(10);window.rPageLoadId=getRLoadId();removeCookie("ahrlid");function addListener(element,type,listener,useCapture){if(element.addEventListener){element.addEventListener(type,listener,!!useCapture)}else if(element.attachEvent){element.attachEvent("on"+type,listener)}else{element["on"+type]=listener}}addListener(document,"mousedown",function(ev){if(!ev)ev=window.event;var target=ev.target||ev.srcElement;if(!target){return}setCookie("ahrlid",window.pageLoadId+"-"+(new Date).getTime())});addListener(document,"touchend",function(ev){if(!ev)ev=window.event;var target=ev.target||ev.srcElement;if(!target){return}setCookie("ahrlid",window.pageLoadId+"-"+(new Date).getTime())});var pvNum=readCookie("ahpvno");pvNum++;if(pvNum>9999)pvNum=1;setCookieExpire("ahpvno",pvNum,86400)})();