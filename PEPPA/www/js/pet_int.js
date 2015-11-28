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
cs= get from localstorage that was taken from server;
p = touchmove; get the distance travled and * 0.1
t = treats given; can give as much as you want, but formula will allow max of 2 points
	use summation 1/n as n -> to infinity; ~2.
*/
/*Current State*/

/*time played with pet*/
var play = 0;

document.addEventListener("pause", onPause, false);
document.addEventListener("resume", onResume, false);
document.addEventListener("deviceready", savedState);
document.addEventListener("deviceready", annoy);
document.addEventListener("deviceready", petting);
// document.addEventListener("deviceready",function(){stateDet(pState);});
console.log("PET_INT RAN");
// $(document).ready(function(){
// 	document.addEventListener("deviceready", onDeviceReady, false);
// });

//  function onDeviceReady(){
// 	// $(window).unbind();
// 	// $(window).bind();

// };
function savedState(){
	console.log("onResume " + parseFloat(window.localStorage.getItem("rpState")));
	if (pState = parseFloat(window.localStorage.getItem("rpState")) == null){
		pState = 30;
		stateDet(pState);
	} else{
		pState = parseFloat(window.localStorage.getItem("rpState"));
		stateDet(pState);
	}
}
/*State (smile) determining function*/
function stateDet(pState){
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

/*Animation for pet and value to add to current state*/
function petting(){
	console.log("petting ran");
	$(".face").touchstart(function(e){
		if(e.target != this){
			return;
		}
		$("#lec").hide();
		$("#ley").css("animation-play-state", "paused");
		$("#ley").hide();
		$("#leh").show();
		$("#rec").hide();
		$("#rey").css("animation-play-state", "paused");
		$("#rey").hide();
		$("#reh").show();
		$("#mcl").hide();
		$("#msa").hide();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		$("#pmh").show();
	});
	$(".face").touchmove(function(e){
		if(e.target != this){
			return;
		}
		play = play + 0.1;
		console.log("play value: " + play);
	});
	$(".face").touchend(function(){
		$("#lec").show();
		$("#ley").show();
		$("#ley").css("animation-play-state", "running");
		$("#leh").hide();
		$("#rec").show();
		$("#rey").show();
		$("#rey").css("animation-play-state", "running");
		$("#reh").hide();
		$("#pmh").hide();
		
		if(pState >= 100){
			pState = 100;
		} else{
			pState = pState + play;
			play = 0;
		}
		console.log("touchstart " + pState);
		stateDet(pState);
	});
};


function annoy() {
	$(".ly").touchstart(function(){
		$("#ley").hide();
		$("#mcl").hide();
		$("#msa").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		annoyReward();
	});
	$(".ly").touchend(function(){
		$("#ley").show();
		$("#rey").show();
		stateDet(pState);
	});

	$(".ry").touchstart(function(){
		$("#rey").hide();
		$("#mcl").hide();
		$("#msa").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		annoyReward();
	});
	$(".ry").touchend(function(){
		$("#ley").show();
		$("#rey").show();
		stateDet(pState);
	});

	$("#nos").touchstart(function(){
		$("#mcl").hide();
		$("#msa").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		annoyReward();
	});
	$("#nos").touchend(function(){
		stateDet(pState);
	});

	$(".mu").touchstart(function(){
		$("#mcl").hide();
		$("#msa").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		annoyReward();
	});
	$(".mu").touchend(function(){
		stateDet(pState);
	});
};
function annoyReward(){
	console.log("annoyed");
	if(pState < 0){
		pState = 0;
	} else{
		pState = pState - 0.5;
	}
	
};

function resetAnim(){
	$("#ley").css("animation-play-state", "pause");
	$("#rey").css("animation-play-state", "pause");
	$("#ley").css("animation-play-state", "running");
	$("#rey").css("animation-play-state", "running");
};

function onPause(){
	window.localStorage.setItem("rpState",pState);

};

function onResume () {
	pState = parseFloat(window.localStorage.getItem("rpState"));
		console.log("onResume " + pState);
}
