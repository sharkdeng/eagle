// by  Ifmiss
// github: https://github.com/IFmiss/moveline
// 菜单鼠标悬浮移动效果
/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright 漏 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['jquery'], function ($) {
			return factory($);
		});
	} else if (typeof module === "object" && typeof module.exports === "object") {
		exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($){

// Preserve the original jQuery "swing" easing as "jswing"
$.easing['jswing'] = $.easing['swing'];

var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + .75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + .9375;
	} else {
		return n1*(x-=(2.625/d1))*x + .984375;
	}
}

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x) {
		return $.easing[$.easing.def](x);
	},
	easeInQuad: function (x) {
		return x * x;
	},
	easeOutQuad: function (x) {
		return 1 - ( 1 - x ) * ( 1 - x );
	},
	easeInOutQuad: function (x) {
		return x < 0.5 ?
			2 * x * x :
			1 - pow( -2 * x + 2, 2 ) / 2;
	},
	easeInCubic: function (x) {
		return x * x * x;
	},
	easeOutCubic: function (x) {
		return 1 - pow( 1 - x, 3 );
	},
	easeInOutCubic: function (x) {
		return x < 0.5 ?
			4 * x * x * x :
			1 - pow( -2 * x + 2, 3 ) / 2;
	},
	easeInQuart: function (x) {
		return x * x * x * x;
	},
	easeOutQuart: function (x) {
		return 1 - pow( 1 - x, 4 );
	},
	easeInOutQuart: function (x) {
		return x < 0.5 ?
			8 * x * x * x * x :
			1 - pow( -2 * x + 2, 4 ) / 2;
	},
	easeInQuint: function (x) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x) {
		return 1 - pow( 1 - x, 5 );
	},
	easeInOutQuint: function (x) {
		return x < 0.5 ?
			16 * x * x * x * x * x :
			1 - pow( -2 * x + 2, 5 ) / 2;
	},
	easeInSine: function (x) {
		return 1 - cos( x * PI/2 );
	},
	easeOutSine: function (x) {
		return sin( x * PI/2 );
	},
	easeInOutSine: function (x) {
		return -( cos( PI * x ) - 1 ) / 2;
	},
	easeInExpo: function (x) {
		return x === 0 ? 0 : pow( 2, 10 * x - 10 );
	},
	easeOutExpo: function (x) {
		return x === 1 ? 1 : 1 - pow( 2, -10 * x );
	},
	easeInOutExpo: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			pow( 2, 20 * x - 10 ) / 2 :
			( 2 - pow( 2, -20 * x + 10 ) ) / 2;
	},
	easeInCirc: function (x) {
		return 1 - sqrt( 1 - pow( x, 2 ) );
	},
	easeOutCirc: function (x) {
		return sqrt( 1 - pow( x - 1, 2 ) );
	},
	easeInOutCirc: function (x) {
		return x < 0.5 ?
			( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
			( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
	},
	easeInElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
	},
	easeOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
	},
	easeInOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
			pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
	},
	easeInBack: function (x) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x) {
		return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
	},
	easeInOutBack: function (x) {
		return x < 0.5 ?
			( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
			( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	},
	easeInBounce: function (x) {
		return 1 - bounceOut( 1 - x );
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x) {
		return x < 0.5 ?
			( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
			( 1 + bounceOut( 2 * x - 1 ) ) / 2;
	}
});

});

(function($){
	//底部的菜单移动效果
	$.fn.moveline = function(options,callback){
		var _this = this;
		var $this = $(this);
		var defaultValue = {
			height:2,						//高度
			position:'', 					//线条是显示在内部    inner是在内部
			color:'#F65637',				//颜色
			animateTime:500,   				//毫秒
			animateType:'easeOutBack',   	//动画效果  		没有引用jquery.easing.js  的话  为''就行。
			activeClassName: 'active', 	// 选中的class名称
			zIndex:'1', 					//层级
			top:0, 							//自定义top
			customTop:false, 				//是否自定义top
			randomColor:false, 				//是否显示随机色线条
      randomOpacity:1, 				//透明度
			click:function(){}, 			//点击菜单触发的效果
		}

		var opt = $.extend(defaultValue,options || {});

		var getData = function (ele) {
			return {
				outW: ele.outerWidth(),
				width: ele.width(),
				paddingLeft: (ele.outerWidth() - ele.width()) / 2,
				height: opt.position === 'inner'? ele.outerHeight() - opt.height : ele.outerHeight(),
				left: ele.position().left,
				marginLeft: Number(ele.css('margin-left').replace(/[^0-9]+/g, ''))
			}
		}

    var children = $this.children()
		var liInfo = getData(children)


		//是否显示随机颜色
		var randomColor = function(){
		    var opacity = opt.randomOpacity || 1;
		    var r=Math.floor(Math.random()*256);
		    var g=Math.floor(Math.random()*256);
		    var b=Math.floor(Math.random()*256);
		    return "rgba("+r+','+g+','+b+','+opacity+")";
		};

		//是否设置的颜色  随机 还是自定义
		var color = opt.randomColor? randomColor() : opt.color;

		//是否自定义高度
		if(opt.customTop) li_height = opt.top;

		var zIndex = opt.height > 5 ? '-1':opt.zIndex;

		// 定义底部滚动线条
		_this.moveLineDiv = $('<div class="nav_line"></div>').css({
			'position': 'absolute',
	    	'height': opt.height,
	    	'background': color,
	    	'top': liInfo.height,
	    	'z-index': zIndex,
		}).appendTo($this);


		//判断li中有active 的索引 并获取其left的值
		for(var i  = 0; i<children.length;i++){
			if (children.eq(i).find('a').hasClass(opt.activeClassName)) {
				liInfo.left = children.eq(i).position().left;
				liInfo.width = children.eq(i).width();
			}
		}

		// 初始化红线进去
		_this.moveLineDiv.stop().animate({
			width: liInfo.width,
			left: liInfo.left + liInfo.marginLeft + liInfo.paddingLeft
		}, opt.animateTime,opt.animateType);

		//红线的hover效果
		// children.hover(function(){
		// 	liInfo.marginLeft = Number(children.css('margin-left').replace(/[^0-9]+/g, ''));
		// 	liInfo.width = $(this).width();
		// 	liInfo.left = $(this).position().left;

		// 	_this.moveLineDiv.stop().animate({
		// 		width: liInfo.width,
		// 		left: liInfo.left + liInfo.marginLeft + liInfo.paddingLeft
		// 		}, opt.animateTime,opt.animateType);
		// 	},function(){
		// 	//鼠标移出后的效果
		// 	for(var i  = 0; i < children.length; i++){
		// 		if (children.eq(i).find('a').hasClass(opt.activeClassName)) {
		// 			liInfo.left = children.eq(i).position().left;
		// 			liInfo.width = children.eq(i).width();
		// 		}
		// 	}

		// 	_this.moveLineDiv.stop().animate({
		// 		width: liInfo.width,
		// 		left: liInfo.left + liInfo.marginLeft + liInfo.paddingLeft
		// 	}, opt.animateTime);
		// });

		children.on('click',function(){
			var ret = {
				ele: $(this),
				index: $(this).index(),
			}
			opt.click(ret);
		});

		return _this;
	}
})(jQuery)

// 初始化
$(document).ready(function () {
  $('#nav-list').moveline({
		color:'#0099FF',
		animateType: '',
    activeClassName: 'is-active',
    top: '47px',
    height: '3px'
  })
})