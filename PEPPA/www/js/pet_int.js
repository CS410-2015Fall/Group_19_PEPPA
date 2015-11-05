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
/*Current State*/
var pState = 28;

$(document).ready(function(){
	document.addEventListener("deviceready", onDeviceReady, false);
});

 function onDeviceReady(){
	// $(window).unbind();
	// $(window).bind();
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	$("#lec").show();
	$("#ley").show();
	$("#leh").hide();
	$("#rec").show();
	$("#rey").show();
	$("#reh").hide();
	stateDet(pState);
	$("#pmh").hide();
	petting();
};

function stateDet(pState){
	console.log("stateDet called" + pState)
	if(0 <= pState && pState < 30){
		$("#msa").show();
		$("#mcl").hide();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		console.log("Sad state value: " + pState);
	} else if(30 <= pState && pState < 70){
		$("#msa").hide();
		$("#mcl").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		console.log("Neutral state value: " + pState);
	} else{
		$("#msa").hide();
		$("#mcl").hide();
		$("#tee").show();
		$("#ton").show();
		$("#tpa").show();
		console.log("Happy state value: " + pState);
	}
}
function petting(){
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
		$("#mcl").hide();
		$("#msa").hide();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		$("#pmh").show();
		if(pState == 100){
			pState = 100;
		} else{
			pState = pState + 0.5;		
		}
		console.log("touchstart " + pState);
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
		$("#pmh").hide();
		stateDet(pState);
	});
}

function onPause(){
localStorage["rpState"] = pState;
}

function onResume () {
	var pState = parseInt(localStorage["rpState"]);
		console.log("onResume " + pState);
}
