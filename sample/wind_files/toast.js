/**
 * toast提示信息
 */
'use strict';
(function($, window){ 
  $.fn.toast = function(options){
    var $this = $(this);
    var _this = this;
    return this.each(function(){
      var top = '';		//bottom的位置
      var translateInfo = ''; 	//居中和不居中时的tarnslate
      var box = '';   //消息元素
      var defaults = {
        position:  			      "absolute", 				      //不是body的话就absolute
        animateIn:  		      "fadeInUp-hastrans",		  //进入的动画
        animateOut: 		      "fadeOut-hastrans",				        //结束的动画
        padding:              "10px 20px",              //padding
        background:           "rgba(7,17,27,0.66)",     //背景色
        borderRadius:         "6px",                    //圆角
        duration:             3000,                     //定时器时间
        animateDuration: 	    500, 						          //执行动画时间
        fontSize:             16,                   	  //字体大小
        content:              "这是一个提示信息",         //提示内容
        color:                "#fff",                   //文字颜色
        top:            	    "80%",                	  //bottom底部的位置    具体的数值 或者center  垂直居中
        zIndex:               1000001,                	//层级
        isCenter:   		      true, 					          //是否垂直水平居中显示
        closePrev: 			      true, 					          //在打开下一个toast的时候立即关闭上一个toast
      }
        
      var opt = $.extend(defaults,options||{});
      
      // setTimeout(function(){
      //   	box.addClass('show');
      // },10);

      // top = opt.isCenter===true? '50%':opt.top;

      defaults.isLowerIe9 = function(){
        return (!window.FormData);
      }

      // translateY(-50%)
      // translateInfo = opt.isCenter===true? 'translate3d(-50%,0,0)':'translate3d(-50%,-50%,0)';

      defaults.createMessage = function(){
      if(opt.closePrev){
        $('.cpt-toast').remove();
      }
      _this.box = $("<span class='animated "+opt.animateIn+" cpt-toast'></span>").css({
        "position":opt.position,
        "top":opt.top,
        "z-index":opt.zIndex,
        // "-webkit-transform":'translate(-50%,-50%)',
        // "-moz-transform":'translate(-50%,-50%)',
        // "transform":'translate(-50%,-50%)',
        '-webkit-animation-duration':opt.animateDuration/1000+'s',
        '-moz-animation-duration':opt.animateDuration/1000+'s',
        'animation-duration':opt.animateDuration/1000+'s',
      }).appendTo($this);

      _this.boxDetail = $("<span class='cpt-toast-detail'>" + opt.content + "</span>").css({
        "background":opt.background,
        "-webkit-border-radius":opt.borderRadius,
        "-moz-border-radius":opt.borderRadius,
        "border-radius":opt.borderRadius,
        "font-size":opt.fontSize,
        "color":opt.color
      }).appendTo(_this.box)
      defaults.colseMessage();
      }

      defaults.colseMessage = function () {
        var isLowerIe9 = defaults.isLowerIe9();
        if(!isLowerIe9){
          setTimeout(function(){
            _this.box.removeClass(opt.animateIn).addClass(opt.animateOut).on('animationend',function(){
              _this.box.remove();
            });
          }, opt.duration);
        }else{
          setTimeout(function(){
            _this.box.remove();
          },opt.duration);
        }
      }
      defaults.createMessage();
    })
  };
})(jQuery, window);