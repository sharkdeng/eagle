$(document).ready(function () {

  // 轮播图

  // const CONSTANT = {
  //     events: {
  //         click: {
  //             "fabulous": handleFabulousClick,
  //         }
  //     },
  //     eventAttributeName: "data-action",
  // };

  // init();

  // function init() {
  //     initActionListeners();
  // }

  // //初始化事件监听器
  // function initActionListeners() {
  //     Object.keys(CONSTANT.events).map(eName => {
  //         const event = CONSTANT.events[eName];
  //         Object.keys(event).map(attrName => {
  //             $(document).delegate(`[${CONSTANT.eventAttributeName}=${attrName}]`, eName, event[attrName]);
  //         })
  //     })
  // }

  // //点赞增长
  // function handleFabulousClick(e) {
  //     const target = e.target;
  //     const numTarget = target.parentNode.firstChild;
  //     const nextNum = parseInt(numTarget.nodeValue || 0) + 1;
  //     numTarget.replaceWith(nextNum);
  // }
  // 轮播图
  var bannerSwiper = new Swiper('#banner', {
    pagination: '.swiper-pagination',
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    // effect: 'fade',
    loop: true,
    noSwiping: true
  });

  // 显示下拉菜单
  $('.nav-item').hover(function () {
    if (($(this).find('.down-menu'))) {
      $(this).addClass('show')
    }
  }, function () {
    $(this).removeClass('show')
  })

  // 5阶成长课程体系 hover效果
  $('.popover-box-bd').hover(function () {
    $(this).addClass('show')
  }, function () {
    $(this).removeClass('show')
  })

  // 5阶成长课程体系 点击显示border
  $('.tips-content img').on('click', function () {
    $('.section05-form').addClass('border')
    setTimeout(function () {
      $('.section05-form').removeClass('border')
    }, 2100)
  })

  // 底部footer的hover事件
  $('.is-qr-box').hover(function () {
    $(this).addClass('show')
  }, function () {
    $(this).removeClass('show')
  })



})


function showQWMT () {
  // 权威媒体报道
  var mediaArr = [
    {
      img: '/homeassets/images/index/Media/page09_01.jpg',
      text: '海风教育：K12行业科技驱动变革提速',
      textDesc: ' 2018年4月下旬，海风教育在北京正式宣布将推出业内首个投入实际应用场景的AI系统好望角。随...',
      times: '2018.12.01'
    },
    {
      img: '/homeassets/images/index/Media/page09_02.jpg',
      text: '海风教育因材施教进入实质落地阶段',
      textDesc: ' 2018年4月下旬，海风教育在北京正式宣布将推出业内首个投入实际应用场景的AI系统好望角。随...',
      times: '2018.12.01'
    },
    {
      img: '/homeassets/images/index/Media/page09_03.jpg',
      text: '海风教育：破解学员提分难瓶颈',
      textDesc: ' 2018年4月下旬，海风教育在北京正式宣布将推出业内首个投入实际应用场景的AI系统好望角。随...',
      times: '2018.12.01'
    },
    {
      img: '/homeassets/images/index/Media/page09_04.jpg',
      text: '海风教育CEO郑文丞荣获企业家精神...',
      textDesc: ' 2018年4月下旬，海风教育在北京正式宣布将推出业内首个投入实际应用场景的AI系统好望角。随...',
      times: '2018.12.01'
    }
  ]
  for(var i = 0; i < mediaArr.length; i++) {
    var index = i+1
    $('#mediaBox').append('<a href="#" regid="nhp_medReportN, redirect , nhp, 0"  class="media-box column media-box-info-'+ index +'">' +
      '<div class="media-left">' +
        '<img  src="' + mediaArr[i].img + '" alt="">' +
      '</div>' +
      '<div class="media-content">' +
        '<h4 class="media-title">' + mediaArr[i].text + '</h4>' +
        '<p class="media-desc">' + mediaArr[i].textDesc + '</p>' +
        '<ul class="media-info">' +
          '<li> <img src="/homeassets/images/index/icon_time.png" alt="" class="is-icon"></li>' +
          '<li>' + mediaArr[i].times + '</li>' +
        '</ul>' +
      '</div>' +
    '</a>')
  }
}

function arrHonor () {
  var arrHonor = [{
    img: '/homeassets/images/index/Honor/page01.jpg',
    text: '最具影响力教育品牌',
    minText: ' 改革开放40年'
  }, {
    img: '/homeassets/images/index/Honor/page02.jpg',
    text: '行业典范品牌',
    minText: ' 2018年第二届中国品牌峰会'
  }, {
    img: '/homeassets/images/index/Honor/page03.jpg',
    text: '勇创一流奖',
    minText: '2018年中国学生好评教育机构'
  }, {
    img: '/homeassets/images/index/Honor/page04.jpg',
    text: '十大领军人物',
    minText: '2018年名办教育行业'
  }, {
    img: '/homeassets/images/index/Honor/page05.jpg',
    text: '诚信品牌企业',
    minText: '中国3.15'
  }, {
    img: '/homeassets/images/index/Honor/page06.jpg',
    text: '教育行业示范企业',
    minText: '2017年中国认证联盟'
  }, {
    img: '/homeassets/images/index/Honor/page07.jpg',
    text: '2017中国好老师•金牌教师团队',
    minText: '2017年荣获腾讯中国'
  }, {
    img: '/homeassets/images/index/Honor/page08.jpg',
    text: '在线教育平台大奖 ',
    minText: '2017年ChinaBang Awards'
  }, {
    img: '/homeassets/images/index/Honor/page09.jpg',
    text: '优秀示范企业',
    minText: '2016年中国互联网教育行业'
  }, {
    img: '/homeassets/images/index/Honor/page10.jpg',
    text: '企业组优胜奖',
    minText: '2016年中国创新创业大赛'
  }, {
    img: '/homeassets/images/index/Honor/page11.jpg',
    text: '2015年度用户口碑教辅品牌',
    minText: '2015年荣获腾讯网'
  }, {
    img: '/homeassets/images/index/Honor/page12.jpg',
    text: '创新创业大赛金奖 ',
    minText: '2015年国务院主办首届中国“互联网+”'
  }]
  
  for (var i = 0; i < arrHonor.length; i++) {
    $('#tabBoxglory .swiper-wrapper').append('<div class="swiper-slide "' +
      '<a href="#" class="page-brick-item">' +
        '<img src="' + arrHonor[i].img + '" alt="">' +
        '<h3>' + arrHonor[i].text + '</h3>' +
          '<p>' + arrHonor[i].minText + '</p>' +
      '</a>' + 
    '</div>')
  }

  var indexBoxglorySwiper = new Swiper('#tabBoxglory', {
      slidesPerView: 4,
      slidesPerGroup : 4,
      paginationClickable: true,
      spaceBetween: 30,
      autoplay: 5000,
      loop: true,
      DOMAnimation: false
  })
  $('#tabBoxglory .swiper-button-next').on('click', function(e){
    e.preventDefault()
    indexBoxglorySwiper.swipePrev()
  })
  $('#tabBoxglory .swiper-button-prev').on('click', function(e){
    e.preventDefault()
    indexBoxglorySwiper.swipeNext()
  })
}

/**
 * 注册协议弹窗
 */
function showRules () {
  $("#rules").addClass('show')
}

function hideRules () {
  $("#rules").removeClass('show')
}


/**
 * 隐私政策弹窗
 */
function showPrivacy () {
  $("#privacy").addClass('show')
}

function hidePrivacy () {
  $("#privacy").removeClass('show')
}
// 百度品牌专区加词
if(location.hostname.indexOf('hyphen100') == -1  ){
  $(".section11").css("display","none")
}else{
  var grade = $(".page11-title span");
  var grade_img = $(".index-container .page11-box img")
  grade.eq(0).css({"background-color": "#1aaef1","color": "#fff"})
  grade_img.hide();
  grade_img.eq(0).show();

  for(var i = 0 ; i < 3 ; i++){
    grade[i].index = i;
    $(".page11-title span").eq(i).click(function () {
      for(var j = 0 ; j < 3 ; j++){
        $(".page11-title span").eq(j).css({"background-color": "#fff","color": "#1aaef1"})
        $(".index-container .page11-box img").eq(j).hide();
      }
      $(".page11-title span").eq(this.index).css({"background-color": "#1aaef1","color": "#fff"})
      $(".index-container .page11-box img").eq(this.index).show();
    });
  }
}
