$(function(){
	$("#realChart>li").on("mouseenter",function(){
		$("#realChart>li").removeClass("on");
		$(this).addClass("on");
	});

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

