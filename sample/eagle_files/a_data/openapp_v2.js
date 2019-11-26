var openQuickAppFromH5 = function(openScheme,QuickConfig){
    var  _referrer = document.referrer.toLowerCase();
    /*BaiDuSearch*/
    var isFromBD = function(){
        if( _referrer.indexOf('baidu')>-1){
            $.setCookie('isFromBD','1', { domain: 'autohome.com.cn', expireHours: 12 });
            return true;
        }else if( !(_referrer.indexOf('autohome') > -1 || _referrer.indexOf('che168') > -1) ){
            $.setCookie('isFromBD','', { domain: 'autohome.com.cn', expireHours: 0});
            return false;
        }else{
            if( $.getCookie('isFromBD', '') ){
                return true;
            };
            return false;
        };
    };

    //baidu exit
    if(isFromBD() || !openScheme){
        return;
    };

    // 站内 exit
    if( _referrer.indexOf('autohome') > -1 || _referrer.indexOf('che168') > -1 ){
        return;
    };
    
    /*QQ浏览器&&Ios不展示 20180517*/
    if(navigator.userAgent.toLowerCase().indexOf('mqqbrowser')>0 && navigator.userAgent.toLowerCase().indexOf('iphone')>0){
        return;
    };
    
    //打开浏览器一次调起
    // if($.getCookie('isFirstEnter', '')){
    //     return;
    // };
    // $.setCookie('isFirstEnter','1', { domain: 'autohome.com.cn'});

    //platform
    var platform = {
        UA : navigator.userAgent,
        isAndroid:function(){
            return this.UA.indexOf('Android') > -1 || this.UA.indexOf('Adr') > -1;
        },
        isIos:function(){
            return this.UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        IsPC:function(){
            var userAgentInfo = this.UA;
            var Agents = ["Android", "iPhone"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    };

    // isPc exit
    if( platform.IsPC() || platform.isAndroid()){
        return;
    };


    //当天第一次进入标识
    var createCookieName = function(){
        var oDate = new Date();
        var y = oDate.getFullYear(),
        m = oDate.getMonth()+1,
        d = oDate.getDate();
        return 'auto_openfromh5_' + y + m + d;
    };

    var cookieName = createCookieName();

    if( $.getCookie(cookieName, '') ){
        return;
    };
    $.setCookie(cookieName,'1', { domain: 'autohome.com.cn', expireHours: 24 });

    //loadJs
    var loadJS = function(url, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = url;
        var done = false;
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                callback();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            }
        };
        head.appendChild(script);
    };

    function openApp(openUrl, callback) {
        var intHandle = null, clearIntHandle = function () {
            clearInterval(intHandle);
        };
    
        function checkOpen(cb) {
            var timeout = 1500,
            cycleCount = 20,
            timeoutCount = timeout / cycleCount,
            threshold = timeout + timeoutCount;
            var andrVersionArr = navigator.userAgent.match(/Android (\d+)\.(\d+)\.?(\d+)?/);
            andrVersionArr.shift();
            if(andrVersionArr[2] === undefined ){
                andrVersionArr[2] = 0;
            };
            var _version = andrVersionArr.join('');
            if(_version >= '700'){
                threshold -= 30
            }else{
                threshold += 650
            };
            var _clickTime = +(new Date());
            function check(elsTime) {
                if (elsTime > threshold || document.hidden || document.webkitHidden){
                    cb(true);
                } else {
                    cb(false);
                }
            };
            var _count = 0,
            elsTime = 0;
            intHandle = setInterval(function () {
                _count++;
                elsTime = +(new Date()) - _clickTime;
                console.log(_count ,timeoutCount ,elsTime ,threshold);
                if (_count >= timeoutCount || elsTime > threshold){
                    clearIntHandle();
                    check(elsTime);
                };
            }, cycleCount);
        };
        var aLink = null,body=null;
        aLink = document.createElement("iframe"),
        body = document.body;
        aLink.style.cssText = "display:none;width:0px;height:0px;";
        aLink.src = openUrl;
        body.appendChild(aLink);
    
        if (callback) {
            checkOpen(function (opened) {
                callback && callback(opened);
            });
        };
        var visibilitychange = function () {
            var tag = document.hidden || document.webkitHidden;
            tag && clearIntHandle();;
        };
        document.addEventListener('visibilitychange', visibilitychange, false);
        document.addEventListener('webkitvisibilitychange', visibilitychange, false);
        window.addEventListener('pagehide', function () {
            clearIntHandle();
        }, false);
        window.addEventListener('blur', function () {
            clearIntHandle();
        }, false);
    };

    //platform
    var mark = '';

    if( platform.isIos() ){
        _mark = 'auto_iphone';
    };
    if( platform.isAndroid() ){
        _mark = 'auto_android';
    };
    //添加UA
    var otherParams  = 'ahbrowser_m_type=' + encodeURIComponent(navigator.userAgent);
    //添加Cookie
    var sid = $.getCookie('sessionid', '');
    if(sid){
        otherParams = otherParams + '&ahbrowser_m_type_1=' + encodeURIComponent(sid);
    };
    otherParams = otherParams + '&ahfrom=mchannel';
    //App统计
    if(openScheme.indexOf('?')==-1){
        openScheme = openScheme + '?' + otherParams;
    }else{
        openScheme = openScheme + '&' + otherParams;
    };

    var oldScheme = openScheme;

    function getIos9Scheme(scheme){
        var nowurlSearch = window.location.search,pagehref = window.location.href;
        if( nowurlSearch ){
            pagehref = location.origin + location.pathname + encodeURIComponent(nowurlSearch);
        };
        return 'http://comm.app.autohome.com.cn/go/' + openScheme.substr(scheme.length)+'&downsrc='+encodeURIComponent(pagehref);
    };

    //统计上报
    if(window.trackCustomEvent) { 
        trackCustomEvent('auto_common_event', {
            biz: 'auto',
            type: 'click',
            action: 'app_appopen_fromH5',
            ctime: new Date().getTime(),
            area: 'openApp_fromH5',
            element: 'index',
            pmark: oldScheme
        });
    };

    //快应用 oppo = > 'oppo','pact00','pacm00','paat00','paam00','padm00','padt00'
    var QuickList = ['xiaomi','huawei'],
        isQuickList='';
    for(var i = 0; i < QuickList.length; i++){
        if( platform.UA.toLowerCase().indexOf(QuickList[i]) > -1){
            isQuickList = QuickList[i];
            break;
        }
    };
    
    if(platform.isAndroid() && isQuickList && QuickConfig){
        if(isQuickList == 'oppo' || isQuickList == 'pact00' || isQuickList == 'pacm00' || isQuickList == 'paat00' || isQuickList == 'paam00' || isQuickList == 'padm00' || isQuickList == 'padt00' ){
            loadJS('//open.oppomobile.com/static/files/oaps.js',function(){
                appRouter('com.autohome.quickapp', QuickConfig.pageName, QuickConfig.params, QuickConfig.confirm);
            });
            return;
        }
        if( isQuickList == 'xiaomi'){
            loadJS('//statres.quickapp.cn/quickapp/js/routerinline.min.js',function(){
                channelReady(function (bAvailable) {
                    if(bAvailable){
                        appRouter('com.autohome.quickapp', QuickConfig.pageName, QuickConfig.params, QuickConfig.confirm);
                    };
                });
            });
            return;
        };
        if( isQuickList == 'huawei'){
            openApp(oldScheme, function (opend) {
                if (!opend){
                    loadJS('//appimg.hicloud.com/hwmarket/files/fastapp/router.fastapp.js',function(){
                        appRouter('com.autohome.quickapp', QuickConfig.pageName, QuickConfig.params, QuickConfig.confirm)
                    });
                };
            });
            return;
        };
        //其他机型
        openApp(oldScheme, function (opend) {
            if (!opend){
                loadJS('//statres.quickapp.cn/quickapp/js/routerinline.min.js',function(){
                    channelReady(function (bAvailable) {
                        if(bAvailable){
                            appRouter('com.autohome.quickapp', QuickConfig.pageName, QuickConfig.params, QuickConfig.confirm);
                        };
                    });
                });
            };
        });
    }else{
        setTimeout(function(){
            // isios
            var ua = navigator.userAgent.toLowerCase();
            if(platform.isIos()){
                if( _referrer == "" || ua.indexOf('ucbrowser') > -1){
                    window.location.href = oldScheme;
                    return;
                };
                var openurl = getIos9Scheme("autohome://");
                window.location.href = openurl;
                return;
            };
    
            // is android
            if(platform.isAndroid()){
                aLink = document.createElement("iframe"),
                body = document.body;
                aLink.style.cssText = "display:none;width:0px;height:0px;";
                aLink.src = oldScheme;
                body.appendChild(aLink);
            };
        },100);
    };
};