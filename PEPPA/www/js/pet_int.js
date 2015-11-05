/*
reward function of pet
complete task everyday
STATE: HAPPY, NEUTRAL, SAD
out of 100 
70-100 to be in happy: neutral state + toys + treats
30-69 to be in neutral: feed one/twice a day (open application and 
												look at schedule)
0-29 to be in sad: feed less than once a day
INIT STATE: 75
TREATS: +1
Play with pet: 	0.05/30s
play with pet + toys: 	0.1/30s

REWARD 	= CURRENT STATE + # of treats 	+ time played with pet
f(x) 	= 		cs		+ 	t 			+ p

*/

$(document).ready(function(){
	document.addEventListener("deviceready", petting, false);
	// onDeviceReady();
});

// function onDeviceReady(){
	// $(window).unbind();
	// $(window).bind();
	// pet_status();

// }

function petting(){
	//animation
	$(".face").touchstart(function(){
		$("#lec").hide();
		$("#ley").css("animation-play-state", "paused");
		$("#ley").hide();
		$("#leh").css("opacity", 1.0);		
		$("#leh").show();
		$("#rec").hide();
		$("#rey").css("animation-play-state", "paused");
		$("#rey").hide();
		$("#reh").css("opacity", 1.0);
		$("#reh").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		$("#pmh").css("opacity", 1.0);
		$("#pmh").show();

	});
	$(".face").touchend(function(){
		$("#lec").show();
		$("#ley").show();
		$("#ley").css("animation-play-state", "running");
		$("#leh").css("opacity", 0);
		$("#leh").hide();
		$("#rec").show();
		$("#rey").show();
		$("#rey").css("animation-play-state", "running");
		$("#reh").css("opacity", 0);
		$("#reh").hide();
		$("#tee").show();
		$("#ton").show();
		$("#tpa").show();
		$("#pmh").css("opacity", 0);
		$("#pmh").hide();

	});
};