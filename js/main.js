$(function(){
	chartNum();		//실시간 차트 상승하강 아이콘 삽입값

	moveChart();	//실시간 차트 스몰 차트 움직임
	chartNumSm();	//실시간 차트 스몰 상승하강 아이콘 삽입값

	$("#real_chart>li").on("mouseenter",function(){
		$("#real_chart>li").removeClass("on");
		$(this).addClass("on");
	});

	$("#real_chart_sm>li").on("click",function(){
		
	});

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



//-------------------------------------------
//------------실시간차트  스크립트-------------
//-------------------------------------------

function moveChart(){
	var topPos = 0;
	setInterval(function(){
		topPos++;
		if(topPos == 10) topPos = 0;
		$("#real_chart_sm>ul").stop().animate({top:-35 * topPos},500);
	},4000);
}

function chartNum(){
	var chartUp = $(".rankSta.up").length;
	var chartNone = $(".rankSta.none").length;
	var chartDown = $(".rankSta.down").length;

	for(var i =0; i < chartUp; i++){
		var curUp = $(".rankSta.up").eq(i).html();
		$(".rankSta.up").eq(i).html(curUp + "<i class='fas fa-caret-up'></i>");
	}
	for(var j =0; j < chartNone; j++){
		var curNone = $(".rankSta.none").eq(j).html("-");
	}
	for(var k =0; k < chartDown; k++){
		var curDown = $(".rankSta.down").eq(k).html();
		$(".rankSta.down").eq(k).html(curDown + "<i class='fas fa-caret-down'></i>");
	}
}
function chartNumSm(){
	var chartUp = $(".rankSta_sm.up").length;
	var chartNone = $(".rankSta_sm.none").length;
	var chartDown = $(".rankSta_sm.down").length;

	for(var i =0; i < chartUp; i++){
		var curUp = $(".rankSta_sm.up").eq(i).html();
		$(".rankSta_sm.up").eq(i).html(curUp + "<i class='fas fa-caret-up'></i>");
	}
	for(var j =0; j < chartNone; j++){
		var curNone = $(".rankSta_sm.none").eq(j).html("-");
	}
	for(var k =0; k < chartDown; k++){
		var curDown = $(".rankSta_sm.down").eq(k).html();
		$(".rankSta_sm.down").eq(k).html(curDown + "<i class='fas fa-caret-down'></i>");
	}
}