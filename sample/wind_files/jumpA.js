if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix) {
        return this.slice(0, prefix.length) === prefix
    }
}
// 链接跳转adid
function GetUrlArgsObj() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

// 页面跳转
function jumpUrl(link, _blank, label) {
    if (link.indexOf("javascript:") >= 0) {
        return new Function(link.split("javascript:")[1])()
    }
    if (link.indexOf("tel:") >= 0) {
        return
    }
    if (!(link.startsWith("//") || link.startsWith("http://") || link.startsWith("https://"))) {
        if (link.startsWith("/") || link.startsWith("#")) {
            link = "//" + window.location.host + link
        } else {
            link = "//" + link
        }
    }
    if (label) {
        if (label.attr("data-type")) {
            link = domain_replace(link);
        }
    }
    console.log(link)
    var jump_link = urlAddParams(link);

    var $tmpA = $('<a class="tempJumpA" href="' + jump_link + '"> </a>')
    if (_blank) {
        $tmpA.attr("target", "_blank")
    }
    $("body").append($tmpA)
    $tmpA[0].click()
}

// 替换域名
function domain_replace(href) {
    var newhref2 = location.hostname
    var newhref1 = new URL(href).hostname
    console.log(newhref2, newhref1)
    var link = href.replace(newhref1, newhref2)
    console.log(link)
    return link;
}

// url添加参数
function urlAddParams(jump_link) {
    if (typeof (args.adid) != "undefined" && args.adid) {
        if (jump_link.match(/\?/)) {
            jump_link = jump_link + '&adid=' + args.adid;
        } else {
            jump_link = jump_link + '?adid=' + args.adid;
        }
    }
    if (typeof (args.uid) != "undefined" && args.uid) {
        if (jump_link.match(/\?/)) {
            jump_link = jump_link + '&uid=' + args.uid;
        } else {
            jump_link = jump_link + '?uid=' + args.uid;
        }
    }
    return jump_link
}
var args = GetUrlArgsObj();
if (typeof (args.adid) == "undefined") {
    args.adid = $.cookie("adid") || "";
}
if (!args.uid) {
    args.uid = $.cookie("uid") || ""
}
adidNo = args.adid;
(function () {
    function whther_label_domain_name(label) {
        label = label || "";
        label.each(function () {
            $(this).attr("data-type", "ture")
        })
    }
    // whther_label_domain_name($(".header-list a"));
    whther_label_domain_name($(".header-logo a"));
   // whther_label_domain_name($("#banner a"));
    whther_label_domain_name($(".footer-cont-box a"));
    $("body").delegate("a", "click", function (e) {
        var link = $(this).attr("href")
        if (!$(this).hasClass("tempJumpA") && !!link) {
            if (link.indexOf("#") >= 0) {
                // var link0 = link.split("#")[0]
                // var link1 = link.split("#")[1] // 锚点
                // var href0 = location.href.split("#")[0]
                // var href1 = location.href.split("#")[1]
                // if (link1 === href1){   // 锚点一致
                // window.location.replace(urlAddParams(link))
                // } else if (!link0 || link0 == href0) { // 域名加路径一致
                //     window.location.replace(urlAddParams(link))
                //     return false
                // } else if (isNewPage(link0)) {
                //     jumpUrl(link)
                //     return false
                // } else {
                //     jumpUrl(link)
                //     return false
                // }
            } else {
                if (link.indexOf("tel:") < 0) {
                    jumpUrl(link, $(this).attr("target") == "_blank", $(this))
                    return false
                }
            }
        }
    });
    var youlian_len = $(".footer-links ul li").length
    if (!youlian_len > 0) {
        $(".footer-copyright").css("border-top", "1px dashed #999");
    }
})()
