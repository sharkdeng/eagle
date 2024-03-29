
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.BubbleHearts = e()
}(this, function() {
	function t(t, n, r) {
		var i = e.uniformDiscrete(89, 91) / 100,
			o = 1 - i,
			u = (e.uniformDiscrete(45, 60) + e.uniformDiscrete(45, 60)) / 100,
			a = function(t) {
				return t > i ? Math.max(((1 - t) / o).toFixed(2), .1) * u : u
			},
			c = e.uniformDiscrete(-30, 30),
			f = function(t) {
				return c
			},
			h = 10,
			s = n.width / 2 + e.uniformDiscrete(-h, h),
			d = (n.width - Math.sqrt(Math.pow(t.width, 2) + Math.pow(t.height, 2))) / 2 - h,
			l = e.uniformDiscrete(.8 * d, d) * (e.uniformDiscrete(0, 1) ? 1 : -1),
			m = e.uniformDiscrete(250, 400),
			w = function(t) {
				return t > i ? s : s + l * Math.sin(m * (i - t) * Math.PI / 180)
			},
			v = function(e) {
				return t.height / 2 + (n.height - t.height / 2) * e
			},
			p = e.uniformDiscrete(14, 18) / 100,
			g = function(t) {
				return t > p ? 1 : 1 - ((p - t) / p).toFixed(2)
			};
		return function(e) {
			if(!(e >= 0)) return !0;
			r.save();
			var n = a(e),
				i = f(e),
				o = w(e),
				u = v(e);
			r.translate(o, u), r.scale(n, n), r.rotate(i * Math.PI / 180), r.globalAlpha = g(e), r.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), r.restore()
		}
	}
	var e = function(t) {
			var e = t,
				n = Math.floor,
				r = Math.random;
			return t.uniform = function(t, e) {
				return t + (e - t) * r()
			}, t.uniformDiscrete = function(t, r) {
				return t + n((r - t + 1) * e.uniform(0, 1))
			}, t
		}({}),
		n = function(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		},
		r = function() {
			function t(t, e) {
				for(var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			return function(e, n, r) {
				return n && t(e.prototype, n), r && t(e, r), e
			}
		}(),
		i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
			return setTimeout(t, 16)
		},
		o = function() {
			function o() {
				n(this, o);
				var t = this.canvas = document.createElement("canvas"),
					e = this.context = t.getContext("2d"),
					r = this._children = [],
					u = function n() {
						i(n), e.clearRect(0, 0, t.width, t.height);
						for(var o = 0, u = r.length; o < u;) {
							var a = r[o];
							a.render.call(null, (a.timestamp + a.duration - new Date) / a.duration) ? (r.splice(o, 1), u--) : o++
						}
					};
				i(u)
			}
			return r(o, [{
				key: "bubble",
				value: function(n) {
					var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.uniformDiscrete(2400, 3600),
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t(n, this.canvas, this.context);
					return this._children.push({
						render: i,
						duration: r,
						timestamp: +new Date
					}), this
				}
			}]), o
		}();
	return o
});
// 图片地址在此处更换  可换成你的图片
var assets = [
  '/homeassets/images/index/love/1.png',
	'/homeassets/images/index/love/2.png',
	'/homeassets/images/index/love/3.png',
	'/homeassets/images/index/love/4.png',
	'/homeassets/images/index/love/5.png',
];
assets.forEach(function(src, index) {
	assets[index] = new Promise(function(resolve) {
		var img = new Image;
		img.onload = resolve.bind(null, img);
		img.src = src;
	});
});

Promise.all(assets).then(function(images) {

	var random = {
		uniform: function(min, max) {
			return min + (max - min) * Math.random();
		},
		uniformDiscrete: function(i, j) {
			return i + Math.floor((j - i + 1) * random.uniform(0, 1));
		},
	};

	var stage = new BubbleHearts();
	var canvas = stage.canvas;
	canvas.width = 170;
	canvas.height = 300;
	canvas.style['width'] = '170px';
	canvas.style['height'] = '300px';

	//journal-reward 为赏桃的按钮 
	var eleS = document.getElementsByClassName('btn-fabulous')
	var canvasBoxs = document.getElementsByClassName("canvas-box")

		function und(){
			appendee(0)
		}
	 var times  = setInterval(und, 4000)
  function appendee(j){
    canvasBoxs[j].appendChild(canvas);
    stage.bubble(images[random.uniformDiscrete(0, images.length - 1)]);
		}
		for (var i = 0; i < eleS.length; i++) {
			(function (j) {
				eleS[j].addEventListener('click', function () {
					canvasBoxs[j].appendChild(canvas);
					clearInterval(times)
					stage.bubble(images[random.uniformDiscrete(0, images.length - 1)]);
				}, false)
			})(i)
		}
	// document.getElementsByClassName('btn-fabulous').addEventListener('click', function(e) {
	// 	var index = e.target.getAttribute('index')
  //   document.getElementsByClassName("canvas-box")[index].appendChild(canvas);
	// 	//随机飘动
	// 	stage.bubble(images[random.uniformDiscrete(0, images.length - 1)]);
	// 	//垂直向上飘动效果
	// 		// let image = images[random.uniformDiscrete(0, images.length - 1)];
	// 		// stage.bubble(image, 3000, function(lifespan) {
	// 		// 	if(lifespan >= 0) {
	// 		// 		stage.context.drawImage(
	// 		// 			image,
	// 		// 			(canvas.width - image.width) / 2,
	// 		// 			(canvas.height - image.height) * lifespan,
	// 		// 			image.width,
	// 		// 			image.height
	// 		// 		);
	// 		// 	} else {
	// 		// 		return true;
	// 		// 	}
	// 		// });
	// }, false);

});