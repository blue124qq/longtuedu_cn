//手机端banner图api
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: 5000,
	speed: 700,
	autoplayDisableOnInteraction : false,
	pagination : '.swiper-pagination',
	paginationClickable:true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
});

//主导航鼠标悬停出现二级菜单
	$('.pc-nav>ul>li').hover(function() {
	$(this).children("a").addClass('active');
	$(this).children("ul").stop().fadeIn();
}, function() {
	$(this).children("a").removeClass('active');
	$(this).children("ul").stop().fadeOut();
});

//首页主导航鼠标悬停出现二级菜单
$('.pc-nav-box .index-level1>li').hover(function() {
	$(this).children("a").addClass('active');
	$(this).children(".index-level2").stop().fadeIn();
}, function() {
	$(this).children("a").removeClass('active');
	$(this).children(".index-level2").stop().fadeOut();
});


//内页返回顶部
$(".to_top").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, {
		easing: 'easeInOutExpo',
		duration: 1000
	});
	return false;
});

//	手机端搜索
$(".wap-search-btn").click(function() {
	$(".wap-search-box").stop().slideToggle("slow");
});

//wap端主导航菜单展开按钮
$(".wap-nav-btn").click(function() {
	$(".wap-nav-listbox").stop().slideToggle("slow");
});

//wap端主导航伸缩
$('.level1>li>a').click(function() {
	$(this).toggleClass('active') 		//给当前元素添加“current”样式
		.next().slideToggle("slow") 		//下一个元素显示
		.parent().siblings().children('a').removeClass('active')
											//父元素的同辈元素的子元素<a>移除“current”样式
		.next().slideUp(); 					//它们的下一个元素隐藏
});

//点击视频播放视频或暂停视频播放
if(document.getElementById("videoPlay1")){
	var video1=document.getElementById("videoPlay1");
	video1.onclick=function(){
	    if(video1.paused){
	        video1.play();
	    }else{
	        video1.pause();
	    }
	}
};

//内页分享按钮JS
window._bd_share_config = {
	"common": {
		"bdSnsKey": {},
		"bdText": "",
		"bdMini": "2",
		"bdMiniList": false,
		"bdPic": "",
		"bdStyle": "1",
		"bdSize": "16"
	},
	"share": {},
	"selectShare": {
		"bdContainerClass": null,
		"bdSelectMiniList": ["qzone", "tsina", "tqq", "weixin"]
	}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

//内页带缩略图轮播
var nySwiper = new Swiper('.ny-swiper-slt', {
	loop: true,
	autoplay: 3000,
	speed: 600,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	grabCursor : true,
	autoplayDisableOnInteraction : false,
	onSlideChangeStart: function(swiper){
//		alert(swiper.realIndex);
    }
});

//内页轮播图缩略图按钮切换效果
$('.slt-img').click(function(){
	var aa = $(".slt-list .slt-img").index(this) + 1; //判断被点击的是第几个box
	nySwiper.slideTo(aa, 500, true);//切换到第一个slide，速度为1毫秒
});

//招聘详情填表
$('.xyzp-sqzw').click(function() {
	$(this).hide();	//隐藏按钮
	$('.xyzp-xq-tb').css('display', 'block');  //显示表单
});

//战略布局地图保持宽高比
$(document).ready(function(){
	var w = $('#china_map').width();
	var h = ($('#china_map').width()) * 0.56;
	$('#china_map').css('height',h);
});

$(window).resize(function(){
	var w = $('#china_map').width();
	var h = ($('#china_map').width()) * 0.56;
	$('#china_map').css('height',h);
});

//首页毕业生底部对齐
$(document).ready(function(){
	var wz = 0;
	$("#byszs-vmcarousel").find('.wz').each(function(){
		var h = $(this).innerHeight();
		if(wz < h){
			wz = h;
		}
	});
	$('.vmcarousel-1 li .wz').css('height',wz);
});

var timer = 0;

$(window).resize(function(){

 clearTimeout(timer);

 timer = setTimeout(function() {
 	
 	var wz = 0;
	$('.vmcarousel-1 li .wz').css('height','auto');
	$("#byszs-vmcarousel").find('.wz').each(function(){
		var h = $(this).innerHeight();
		if(wz < h){
			wz = h;
		}
	});
	$('.vmcarousel-1 li .wz').css('height',wz);
	
 }, 200);

});


//首页学校图片缓冲效果
$(window).ready(function(){

 clearTimeout(timer);

 timer = setTimeout(function() {
 	
 	var a = ($(window).height() + $(document).scrollTop()) - 300; //浏览器可视窗口高度 + 浏览器被卷去的高度 = 浏览器可视窗口底部距离浏览器顶部的高度
	$("#index-box2-hd>.row").each(function() {
		var b = $(this).offset().top; //div距离浏览器顶部的高度
		if(a > b) {
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	});
	
 }, 200);

});

$(document).ready(function() {
	$(window).scroll(function() {
		var a = ($(window).height() + $(document).scrollTop()) - 300; //浏览器可视窗口高度 + 浏览器被卷去的高度 = 浏览器可视窗口底部距离浏览器顶部的高度
		$("#index-box2-hd>.row").each(function() {
			var b = $(this).offset().top; //div距离浏览器顶部的高度
			if(a > b) {
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
	});
});



//新首页头部
$(document).ready(function(){
	$('#block2').css('height',$(window).height());
});
$(window).resize(function(){
	$('#block2').css('height',$(window).height());
});


//底部返回顶部按钮img替换
$('#footer-to-top').hover(function(){
	$(this).children('img').attr('src','/img/bslcn-1081.jpg');
},function(){
	$(this).children('img').attr('src','/img/bslcn-108.jpg');
});
