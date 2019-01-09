$(function () {
	//移入型选项卡
	$('.menus3 .menusLi').each(function () {
		$('.menus3 .menusLi').mouseover(function () {
			var index = $(this).index();
			$('.menusLi').removeClass('font')
			$('.menusLi').eq(index - 1).addClass('font')
		});
		$('.menus3 .menusLi').mousedown(function () {
			var index = $(this).index();
			var widthDown = $('.menusLi span').eq(index - 1).width();
			$('.menus3 .bg').css('left', (index - 1) * 128 + 'px');
			$('.menus3 .bg').css('width', widthDown + 'px');
			$('.tab2').removeClass('show')
			$('.tab2').eq(index - 1).addClass('show')

		});
	})
});
$('#joinUs').click(function(){
	window.location.href = './joinUs/joinUs.html'
})
$('#aboutPao').click(function(){
	window.location.href = './aboutPao/aboutPao.html'
})


$('.logo').mousedown(function () {
	var index = $(this).index();
	var widthDown = $('.menusLi span').eq(0).width();
	$('.menus3 .bg').css('left', (0) * 128 + 'px');
	$('.menus3 .bg').css('width', widthDown + 'px');
	$('.tab2').removeClass('show')
	$('.tab2').eq(0).addClass('show')
});
$('.indexTop').mousedown(function () {
	$(function () {
		$('.popo1').myScroll({
			speed: 40, //数值越大，速度越慢
			rowHeight: 250 //li的高度
		});
	});
	$(function () {
		$('.popo2').myScroll({
			speed: 40, //数值越大，速度越慢
			rowHeight: 250 //li的高度
		});
	});
});


//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();
$(document).ready(function () {
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	// $('#slider-wrap ul#slider').width(sliderWidth * totalSlides);

	// //next slide 	
	// $('#next').click(function () {
	// 	slideRight();
	// });

	// //previous slide
	// $('#previous').click(function () {
	// 	slideLeft();
	// });
	// 轮播图点击
	// $('.pagination-wrap ul li').each(function(index){
	// 	$(this).on('click',function(){
	// 	window.console.log(index)
	// 	//   $('.pagination-wrap ul li').eq(index).;
	// 	})
	//   })


	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	// //automatic slider
	// var autoSlider = setInterval(slideRight, 4000);
	// //for each slide 
	// $.each($('#slider-wrap ul li'), function () {
	// 	//set its color
	// 	var c = $(this).attr("data-color");
	// 	$(this).css("background", c);

	// 	//create a pagination
	// 	var li = document.createElement('li');
	// 	$('#pagination-wrap ul').append(li);
	// });
	// //counter
	// // countSlides();
	// //pagination
	// pagination();
	//hide/show controls/btns when hover

	// $('#slider-wrap').hover(
	// 	function () {
	// 		$(this).addClass('active');
	// 		clearInterval(autoSlider);
	// 		$(this).on("mousewheel DOMMouseScroll", function (e) {
	// 			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
	// 			if (delta == 1) {
	// 				slideLeft()
	// 			} else if (delta == -1) {
	// 				slideRight()
	// 			}
	// 		});
	// 	},
	// 	function () {
	// 		$(this).removeClass('active');
	// 		autoSlider = setInterval(slideRight, 4000);
	// 	},
	// );
}); //DOCUMENT READY


/***********
 SLIDE LEFT
************/
// function slideLeft() {
// 	pos--;
// 	if (pos == -1) {
// 		pos = totalSlides - 1;
// 	}
// 	$('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));
// 	//*> optional
// 	// countSlides();
// 	pagination();
// }

/************
 SLIDE RIGHT
*************/
// function slideRight() {
// 	pos++;
// 	if (pos == totalSlides) {
// 		pos = 0;
// 	}
// 	$('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));
// 	//*> optional 
// 	// countSlides();
// 	pagination();
// }
/************************
 //*> OPTIONAL SETTINGS
************************/
// function countSlides(){
// 	$('#counter').html(pos+1 + ' / ' + totalSlides);
// }

function pagination() {
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}
// JavaScript Document
(function ($) {
	$.fn.myScroll = function (options) {
		//默认配置
		var defaults = {
			speed: 40, //滚动速度,值越大速度越慢
			rowHeight: 250 //每行的高度
		};
		var opts = $.extend({}, defaults, options),
			intId = [];

		function marquee(obj, step) {
			obj.find("img").animate({
				marginTop: '-=1'
			}, 0, function () {
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if (s >= step) {
					// $(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		this.each(function (i) {
			var sh = opts["rowHeight"],
				speed = opts["speed"],
				_this = $(this);
			intId[i] = setInterval(function () {
				if (_this.find("img").height() <= _this.height()) {
					clearInterval(intId[i]);
				} else {
					marquee(_this, sh);
				}
			}, speed);
		});
	}
})(jQuery);