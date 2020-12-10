//IR,wap端侧边导航展开收缩
$(".wap-cb-menu-list1-btn").click(function() {
	$(".wap-cb-menu-list2").slideToggle("slow");
});

//IR,overview日历鼠标移入问号弹出框
$('.event_calendar-table-box-bt>ul>li').hover(function(){
	$('.Calendar-Help').css('display','block');
},function(){
	$('.Calendar-Help').css('display','none');	
});

//IR,overview日历鼠标点击问号显示与隐藏
$(".event_calendar-table-box-bt>ul>li>a").click(function(){
  $(".Calendar-Help").toggle();
});

//IR,侧导航二级菜单伸缩
$('.cb-menu-list>li>a').click(function() {
	$(this).parent().siblings().removeClass('active');
	$(this).parent().toggleClass('active');		//给当前元素添加“current”样式
		$(this).next().slideToggle("slow") 		//下一个元素显示
		.parent().siblings('li').removeClass('active')
											//父元素的同辈元素的子元素<a>移除“current”样式
		.children('a').next().slideUp(); 					//它们的下一个元素隐藏
	
});

//wap端主导航菜单展开按钮
$(".wap-cb-menu-list1-btn").click(function() {
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