/**
 * 53kf
 */
var ApiClient = /** @class */ (function () {
    var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    function ApiClient() {
        this.api = $53.createApi();
    }
    ApiClient.prototype.initClient = function (cmd, type, group_id, worker_id) {
        if (cmd === void 0) { cmd = 'kfclient'; }
        if (type === void 0) { type = 'popup'; }      // popup  new
        if (group_id === void 0) { group_id = ''; }
        if (worker_id === void 0) { worker_id = ''; }
        if(isMobile){
            this.api.terminal = "mobile";
            this.api.push('cmd', "mtalk");
        }else{
            this.api.push('cmd', cmd);
        }
        this.api.push('type', type);
        if (group_id)
            this.api.push('group_id', group_id);
        if (worker_id)
            this.api.push('worker_id', worker_id);
        this.api.query();
    };
    return ApiClient;
}());
/**
 * 右侧菜单
 */
var FixedMenu = /** @class */ (function () {
    function FixedMenu() {
        this.initFixedMenu();
        this.initFixedMenuEvent();
    }
    FixedMenu.prototype.initFixedMenu = function () {
        $ && $('body').append('<div class="hf-fixed-menu">' +
            '<div class="fixed-menu-list">' +
            '<div class="list-content">' +
            '<img src="/homeassets/images/index/code.png">' +
            '<span>公众号</span>' +
            '</div>' +
            '<div class="fade-info code">' +
            '<div class="fade-info-content">' +
            '<img src="/homeassets/images/index/code-erwei.png">' +
            '<i class="list-arrow"></i>' +
            '<span>关注获得更多家长福利</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="fixed-menu-list showKF" regid="onlineConsult, pop_up, nhp, 0" >' +
            '<div class="list-content">' +
            '<img src="/homeassets/images/index/message.png">' +
            '<span>在线咨询</span>' +
            '</div>' +
            '<div class="fade-info orange text">' +
            '<div class="fade-info-content">' +
            '<i class="list-arrow"></i>' +
            '<p class="tip">点击咨询在线客服</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="fixed-menu-list">' +
            '<div class="list-content">' +
            '<img src="/homeassets/images/index/tel.png">' +
            '<span>电话咨询</span>' +
            '</div>' +
            '<div class="fade-info blue text">' +
            '<div class="fade-info-content">' +
            '<i class="list-arrow"></i>' +
            '<p class="tip">咨询热线：4008-331-112</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="fixed-menu-list last" regid="appointAudditonedclass, pop_up, nhp, 0">' +
            '<div class="list-content">' +
            '<img src="/homeassets/images/index/pen.png">' +
            '<span>预约试听</span>' +
            '</div>' +
            '<div class="fade-info sub">' +
            '<div class="fade-info-content">' +
            '<i class="list-arrow"></i>' +
            '<p class="title">免费预约<span>600元</span>课程包</p>' +
            '<form class="scan-info tmsLandingForm">' +
            '<input type="text" name="studentName" class="sub-name name" placeholder="请填写您的姓名">' +
            '<input type="text" name="firstPhone" class="sub-tel phone" placeholder="填写您的手机号">' +
            '<input type="hidden" name="formId" class="formId">' +
            '<button class="sub-btn tmsLandingFormBtn" type="button" regid="appointAudditonedclass, from, nhp, 0">立即预约</button>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    };
    FixedMenu.prototype.initFixedMenuEvent = function () {
        if ($) {
            $('.fixed-menu-list').hover(function () {
                if ($(this).hasClass('last'))
                    return;
                $(this).addClass('show');
                $(this).siblings().removeClass('show');
            }, function () {
                if ($(this).hasClass('last'))
                    return;
                $(this).removeClass('show');
            });
            $('body').on('click', function (e) {
                if (e.target.closest('.fixed-menu-list.last') === null && e.target.closest('.fixed-menu-list.last') === null) {
                    if (document.body.contains(e.target)) {
                        console.log(document.body.contains(e.target))
                        $('.fixed-menu-list.last').removeClass('show'); 
                    }
                }                           
            });
            $('.fixed-menu-list.last').on('click', function (e) {
                $(this).attr("regid", "homepage_topBanner_mb, click, homepage, 0 ")                   
                $(this).siblings().removeClass('show');
                $(this).addClass('show');
            });

            // 5阶成长课程体系 点击显示border
            $('.tips-content .to-sub-info .btn-sub').on('click', function () {
                $('.section05-form').addClass('border')
                setTimeout(function () {
                $('.section05-form').removeClass('border')
                }, 2100)
            })
        }
    };
    return FixedMenu;
}());
window.addEventListener('load', function () {
    window.talkClient = new ApiClient();
    $('.fixed-menu-list.showKF, .showKF').on('click', function (e) {
        talkClient.initClient('kfclient', 'popup');
    });
});
