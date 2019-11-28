/**
 * 固定的form表单提交
 * 参数 option
 * option.title   弹窗的菜单信息
 */
function initFixedListenForm (option) {
  var opt = {}
  opt.title = option && option.title ? option.title : '免费领取600元课程包'
  if ($('.hf-fixed-form-listen').length) {
    $('.hf-fixed-form-listen').show()
    return
  }
  $('body').append('<div class="hf-fixed-form-listen fixed-form-listen">' +
                      '<div class="form-listen-content">' +
                        '<img class="bg-image" src="/homeassets/images/index/page05_left_bg.png">' +
                        '<div class="close-image" onclick="closeFixedListenForm()">' +
                          '<img src="/homeassets/images/index/close.png">' +
                        '</div>' +
                        '<div class="form-detail">' +
                          '<p class="title">' + opt.title + '</p>' +
                          '<span class="form-tips">请准确填写信息，稍后老师将联系您</span>' +
                          '<form class="tmsLandingForm">' +
                            '<select class="class-select grade" name="grade" class="class-select">' +
                              '<option value="" disabled selected style="display:none;">点击选择年级</option>' +
                            '</select>' +
                            '<select name="subject" class="subject-select year">' +
                              '<option value="" disabled selected style="display:none;">点击选择科目</option>' +
                            '</select>' +
                            '<input type="text" name="studentName" class="fixed-user-name name" placeholder="点击填写家长称呼">' +
                            '<input type="text" name="firstPhone" class="fixed-user-phone phone" placeholder="点击填写接收课程信息的手机号">' +
                            '<input type="hidden" name="formId" class="formId">' +
                            '<button class="user-sub tmsLandingFormBtn">提交</button>' +
                          '</form>' +
                        '</div>' +
                      '</div>' +
                    '</div>'
  )
}

function showFixedListenForm (option) {
  $('.hf-fixed-form-listen').show()
}

/**
 * 关闭form表单
 */
function closeFixedListenForm () {
  // $('.hf-fixed-form-listen .tmsLandingForm .class-select').val('')
  // $('.hf-fixed-form-listen .tmsLandingForm .subject-select').empty()
  // $('.hf-fixed-form-listen .fixed-user-name').val('')
  // $('.hf-fixed-form-listen .fixed-user-phone').val('')
  $('.hf-fixed-form-listen').hide()
}

 var strhost = location.href;
 var ABproject;
 if (window.hfAdhoc && window.hfAdhoc.abTestVar) {
   ABproject = window.hfAdhoc.abTestVar;
 }

 function adhocCallback() {
   if (ABproject) {
     adhoc('track', ABproject, 1, function () {
       return false;
     })
   }
 }
/**
 * 提交表单成功之後的提示內容
 */
function showSuceessForm () {
  closeFixedListenForm()
  if ($('.hf-sub-thx').length) {
    $('.hf-sub-thx').show()
    return
  }
  $('body').append('<div class="sub-thx hf-sub-thx">' +
                      '<div class="sub-thx-content">' +
                        '<div class="close" onclick="closeSuceessForm()"></div>' +
                        '<img src="/homeassets/images/index/suceess-singin.png">' +
                      '</div>' +
                    '</div>'
  )
  $('.hf-sub-thx').show()
  adhocCallback()
}

/**
 * 关闭提交成功的提示
 */
function closeSuceessForm () {
  $('.hf-sub-thx').hide()
}


/**
 * 注册的弹窗信息
 */
function showSinginForm () {
  if ($('.hf-fixed-form-singin').length) return
  $('body').append('<div class="fixed-form-listen hf-fixed-form-singin">' +
                      '<div class="form-listen-content">' +
                        '<img class="bg-image" src="/homeassets/images/index/page05_left_bg.png">' +
                        '<div class="close-image" onclick="closeSinginForm()">' +
                          '<img src="/homeassets/images/index/close.png">' +
                        '</div>' +
                        '<div class="form-detail">' +
                          '<p class="title">立即注册海风教育</p>' +
                          '<span class="form-tips">即可发表您对<span class="orange">海风的印象</span></span>' +
                          '<div class="form-class">' +
                            '<input type="text" class="fixed-user-name" placeholder="填写您的姓名">' +
                            '<input type="text" class="fixed-user-phone" placeholder="填写您的手机号">' +
                            '<button class="user-sub" onclick="showImpression()">提交</button>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>'
  )
}

/**
 * 关闭注册弹窗信息
 */
function closeSinginForm () {
  $('.hf-fixed-form-singin').remove()
}

/**
 * 点击注册之后填写印象
 */
function showImpression () {
  // 先判断是否可以跳转
  var name = $('.hf-fixed-form-singin .fixed-user-name').val()
  var phone = $('.hf-fixed-form-singin .fixed-user-phone').val()
  var reg_phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  var reg_name = /^[\u4E00-\u9FA5\uf900-\ufa2d·sa-zA-Z]*$/
  if (name === "") {
    showErrorMsgInfo("请输入姓名")
    return
  }
  if (!reg_name.test(name)) {
    showErrorMsgInfo("请输入正确的姓名")
    return
  }
  if (phone === "") {
    showErrorMsgInfo("请输入手机号")
    return
  }
  if (!reg_phone.test(phone)) {
    showErrorMsgInfo("请输入正确的手机号")
    return
  }
  closeSinginForm()
  if ($('.fixed-impression').length) return
  $('body').append('<div class="fixed-impression">' +
                      '<div class="fixed-impression-content">' +
                        '<p class="title">您对海风的印象:</p>' +
                        '<div class="close-image" onclick="closeImpression()">' +
                          '<img src="/homeassets/images/index/close.png">' +
                        '</div>'+
                        '<textarea name="" placeholder="填写您对海风的印象"></textarea>' +
                        '<button onclick="showSuceesssImpression()"  type="button">提交</button>' +
                      '</div>' +
                    '</div>'
  )
}

/**
 * 关闭填写印象准备跳转到成功页面
 */
function closeImpression () {
  $('.fixed-impression').remove()
}

/**
 * 完成印象填写跳转到成功提示页面
 */
function showSuceesssImpression () {
  // 提示成功之前判断是否有数据
  var imp = $('.fixed-impression textarea').val()
  if (!imp.length) {
    showErrorMsgInfo("请输入内容")
    return
  }
  closeImpression()
  if ($('.hf-sub-imp').length) {
    $('.hf-sub-imp').show()
    return
  }
  $('body').append('<div class="sub-thx hf-sub-imp">' +
                      '<div class="sub-thx-content">' +
                        '<div class="close" onclick="closeSuceessImpressionForm()"></div>' +
                        '<img src="/homeassets/images/index/suceess-impression.png">' +
                      '</div>' +
                    '</div>'
  )
  $('.hf-sub-imp').show()
}

function closeSuceessImpressionForm () {
  $('.hf-sub-imp').hide()
}

function showErrorMsgInfo (msg) {
  $('body').toast({
    position: 'fixed',
    content: msg,
    top: '50%',
  })
}

/**
 * 底部菜单的内容信息
 * 带返回顶部按钮
 * 初始化底部菜单信息的显示和滚动固定
 */
function initFixedSubInfo () {
  $('.footer').before('<div class="reservation-lesson-bar fixed">' +
  '<img class="reservation-to-top to-top" src="/homeassets/images/index/to_top.png" title="返回顶部"></img>' +
  '<div class="container reservation-box">' +
    '<div class="reservation-left-box">' +
      '<img class="reservation-left-user" src="/homeassets/images/index/fixed_user.png">' +
    '</div>' +
    '<div class="reservation-right-sub">' +
      '<form class="tmsLandingForm">' +
        '<span class="reservation-tip">免费预约价值<span>600元</span>课程包</span>' +
        '<input class="reservation-input name" name="studentName" style="display: none" type="text" value="暂无" placeholder="填写家长称呼">' +
        '<input class="reservation-input phone" name="firstPhone" type="text" placeholder="填写接收课程信息的手机号">' +
        '<input type="hidden" name="formId" class="formId">' +
        '<button class="reservation-sub tmsLandingFormBtn"  type="button" regid="SubAudditonedclass, from, npn, 0">免费预约1对1试听</button>' +
      '</form>' +
    '</div>' +
  '</div>' +
  '</div>')
  var scrollHeight,
      footerOffsetTop,
      clientHeight
  // 注册返回顶部事件
  $('.reservation-to-top').on('click', function () {
    $('html , body').stop().animate({scrollTop: 0}, '1000');
  })

  var SHOW_SCROLL_HEIGHT = 100
  $(document).on('scroll', function() {
    scrollHeight = $(document).scrollTop(),
    footerOffsetTop = $('.footer').offset().top,
    clientHeight = window.innerHeight || document.body.clientHeight
    if (scrollHeight > SHOW_SCROLL_HEIGHT) {
      $('.reservation-to-top').addClass('active')
    } else {
      $('.reservation-to-top').removeClass('active')
    }
    calcMenuStatus(scrollHeight, footerOffsetTop, clientHeight)
  })
  // t = setTimeout(function () {
  //   scrollHeight = $(document).scrollTop(),
  //   footerOffsetTop = $('.footer').offset().top,
  //   clientHeight = window.innerHeight || document.body.clientHeight
  //   calcMenuStatus(scrollHeight, footerOffsetTop, clientHeight)
  //   $(document).on('scroll', function() {
  //     scrollHeight = $(document).scrollTop(),
  //     footerOffsetTop = $('.footer').offset().top,
  //     clientHeight = window.innerHeight || document.body.clientHeight
  //     calcMenuStatus(scrollHeight, footerOffsetTop, clientHeight)
  //   })
  // }, 5000)

  function calcMenuStatus (scrollHeight, footerOffsetTop, clientHeight) {
    if (scrollHeight + clientHeight > footerOffsetTop) {
      $('.reservation-lesson-bar').removeClass('fixed show')
    } else {
      $('.reservation-lesson-bar').addClass('fixed show')
    }
  }
}
// 初始化固定底部form
initFixedSubInfo()
// 初始化浮层弹窗
initFixedListenForm()