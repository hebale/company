$(function(){

	chartNum(); 	//실시간 차트 상승하강 아이콘 삽입값
	moveChart();	//실시간 차트 스몰 차트 움직임

	//----------------------------------------------------
	//-------------윈도우 크기 이벤트 스크립트--------------
	//----------------------------------------------------
	var windowSize = $(window).width();

	$(window).resize(function(){
		windowSize = $(window).outerWidth();
		//토글 메뉴가 열렸을시 레이아웃 변화
		if(!headerSt) headerBar();
		
		console.log(windowSize);
		//console.log(windowinSize);
	});
	
	//-----------------------------------------------
	//-------------해더바 이벤트 스크립트--------------
	//-----------------------------------------------
	var headerSt = true;
	
	$("#header_btn").click(function(){
		if(headerSt){
			headerBar();
			headerSt = false;
		}else{
			$("#header_gnb").stop().animate({height:0},500);
			$("#header_btn").stop().animate({top:-1},500);
			$("#header_logo_wh").stop().animate({opacity:0});
			$("#header_menus").stop().animate({opacity:0});			
			headerSt = true;
		}
	})

	function headerBar(){
		if(windowSize >= 992){
			console.log("pc");
			$("#header_gnb").removeClass("tablet");
			$("#header_gnb").removeClass("mobile");
			$("#header_gnb").stop().animate({height:101},450,"easeOutCubic");
			$("#header_btn").stop().animate({top:99},450,"easeOutCubic");
		}else if(windowSize >= 768){
			console.log("tablet");
			$("#header_gnb").removeClass("mobile");
			$("#header_gnb").addClass("tablet");
			$("#header_gnb").stop().animate({height:161},450,"easeOutCubic");
			$("#header_btn").stop().animate({top:159},450,"easeOutCubic");
		}else{
			console.log("mobile");
			$("#header_gnb").removeClass("tablet");
			$("#header_gnb").addClass("mobile");
			$("#header_gnb").stop().animate({height:301},450,"easeOutCubic");
			$("#header_btn").stop().animate({top:299},450,"easeOutCubic");		
		}
		$("#header_logo_wh").stop().delay(400).animate({opacity:1});
		$("#header_menus").stop().delay(300).animate({opacity:1});
	}

	//---------------------------------------------------
	//-------------실시간차트 이벤트 스크립트--------------
	//---------------------------------------------------
	var nextSet;
	var realInd = 0;
	var realChartMo = setInterval(function(){		
			realChartMove();
		},3000);

	$("#real_chart>li").on({
		mouseenter:function(){
			clearInterval(realChartMo);
			clearInterval(nextSet);
			$("#real_chart>li").removeClass("on");
			$(this).addClass("on");
			realInd = $(this).index();		
		},mouseleave:function(){
			nextSet = setInterval(function(){		
				realChartMove();
			},3000);
		}
	});
	function realChartMove(){
		realInd++;
		if(realInd > 9) realInd = 0;
		$("#real_chart>li").removeClass("on");
		$("#real_chart>li").eq(realInd).addClass("on");
	}
	//----------------- 차트 클릭시 정보------------------

	$("#real_chart_sm>li").on("click",function(){
		
	});

	//-----------------------------------------------
	//-------------스크롤 이벤트 스크립트--------------
	//-----------------------------------------------
	var listInd = 1;

	$(window).scroll(function(){
		
		console.log(windowSize);

		var scrollTop = $(window).scrollTop();
		// var ulLIst = $("#real_chart_page").height() / 30;
		var ulList = ($(document).height() - $(window).height()) / 30;
		var listInd = parseInt(scrollTop / ulList);

		//console.log(scrollTop);
		//console.log(ulList);
		//console.log(listInd);
		if(listInd > 29) return;

		$("#real_chart_page>li").removeClass();
		$("#real_chart_page>li").eq(listInd).addClass("on");
		$("#real_chart_page>li").eq(listInd).prev().addClass("around");
		$("#real_chart_page>li").eq(listInd).next().addClass("around");

		// if((ulLIst * listInd) < scrollTop){
		// 	$("#real_chart_page>li").removeClass();
		// 	$("#real_chart_page>li").eq(listInd).addClass("on");
		// 	$("#real_chart_page>li").eq(listInd).prev().addClass("prev");
		// 	$("#real_chart_page>li").eq(listInd).next().addClass("next");
		// 	listInd++
		// }

	})	

	//-------------------------------------------
	//-------------서치버튼 스크립트--------------
	//-------------------------------------------
	// var btnState = true;
	// $("#search_btn").click(function(){
	// 	if(btnState){
	// 		$("#search_box>form").animate({width:350,paddingLeft:20,paddingRight:70},500,"easeOutSine");
	// 		btnState = false;
	// 		$("#search_box>form>input").focus();
	// 	}else{
	// 		$("#search_box>form").animate({width:40,paddingLeft:0,paddingRight:0},500,"easeOutSine");
	// 		btnState = true;
	// 	}
	// })

	//-------------------------------------------
	//-----------최신곡 그림자 스크립트------------
	//-------------------------------------------
	$("#new_song>ul").scroll(function(){
		console.log($("#new_song>ul").scrollTop());
		var shadowPos = ($("#new_song>ul").scrollTop() / 117.5) - 2;		
		$("#new_song>ul").css("box-shadow","-10px " + shadowPos + "px 15px -3px rgba(0,0,0,0.5) inset");
	});

	//-------------------------------------------
	//--------------슬라이드 스크립트--------------
	//-------------------------------------------
	setInterval(function(){
		$("#right_btn").trigger("click");
	},5000);

	$("#right_btn").click(function(){
		$("#new_album>div>ul").stop().animate({left:25 - 175},600,function(){
			$("#new_album>div>ul").append("<li>" + $("#new_album>div>ul>li:first-child").html() + "</li>");
			$("#new_album>div>ul>li:first-child").remove();
			$("#new_album>div>ul").css("left",25);
		});
		
	});
	$("#left_btn").click(function(){
		$("#new_album>div>ul").prepend("<li>" + $("#new_album>div>ul>li:last-child").html() + "</li>");
		$("#new_album>div>ul>li:last-child").remove();
		$("#new_album>div>ul").css("left",-150);

		$("#new_album>div>ul").stop().animate({left:25},600);
	});

});

//-------------------------------------------------
//------------실시간차트 page  스크립트-------------
//-------------------------------------------------

function moveChart(){
	var topPos = 0;
	setInterval(function(){
		topPos++;
		if(topPos == 10) topPos = 0;
		$("#real_chart_sm>ul").stop().animate({top:-35 * topPos},500);
	},4000);
}

function chartNum(){
	var chartUp = $(".up").length;
	var chartNone = $(".none").length;
	var chartDown = $(".down").length;

	for(var i =0; i < chartUp; i++){
		var curUp = $(".up").eq(i).html();
		$(".up").eq(i).html(curUp + "<i class='fas fa-caret-up'></i>");
	}
	for(var j =0; j < chartNone; j++){
		var curNone = $(".none").eq(j).html("-");
	}
	for(var k =0; k < chartDown; k++){
		var curDown = $(".down").eq(k).html();
		$(".down").eq(k).html(curDown + "<i class='fas fa-caret-down'></i>");
	}
}