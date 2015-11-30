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

// document.addEventListener("deviceready",function(){stateDet(pState);});
// $(document).ready(function(){
// 	document.addEventListener("deviceready", onDeviceReady, false);
// });

//  function onDeviceReady(){
// 	// $(window).unbind();
// 	// $(window).bind();

// };
document.addEventListener("pause", onPausePI, false);
document.addEventListener("resume", onResumePI, false);
document.addEventListener("deviceready", savedStatePI);
document.addEventListener("deviceready", annoy);
document.addEventListener("deviceready", petting);
document.addEventListener("deviceready",treats);
document.addEventListener("deviceready", dailyReward);


/*Save the pet state or initiate its saved or new state*/
function savedStatePI(){
	temppState = window.localStorage.getItem("rpState");
	if (temppState == null){
		pState = 30.0;
		window.localStorage.setItem("rpState", pState);
		stateDet(pState);
		console.log("pState was:" + pState  + " if statement ran");
	} else{
		pState = parseFloat(temppState);
		// window.localStorage.setItem("rpState", pState);
		stateDet(pState);
		console.log("pState was:" + pState + " else statement ran");
	}


	temptState = window.localStorage.getItem("rtState");
	if (temptState == null){
		tState = 1;
		window.localStorage.setItem("rtState", tState);
		$("#totalT").text(tState);
		console.log("tState was:" + tState + " if statement ran");
	} else{
		tState = parseInt(temptState);
		// window.localStorage.setItem("rtState", tState);
		$("#totalT").text(tState);
		console.log("tState was: " + tState + " else statement ran");
	}


		tempeState = window.localStorage.getItem("reState");
	if (tempeState == null){
		eState = 0;
		window.localStorage.setItem("reState", eState);
		console.log("eState was: " + eState + " if statement ran");
	} else{
		eState = parseInt(tempeState);
		// window.localStorage.setItem("reState", eState);
		console.log("eState was: " + eState + " else statement ran");
	}


	tempdState = window.localStorage.getItem("rdState");
	if (tempdState == null){
		dState = new Date().getTime();
		window.localStorage.setItem("rdState", dState);
		console.log("dState was: " + dState + " if statement ran");
	} else{
		dState = parseInt(tempdState);
		// window.localStorage.setItem("rdState", dState);
		console.log("dState was: " + dState + " else statement ran");
	}


	temppoState = window.localStorage.getItem("rpoState");
	if (temppoState == null){
		poState = 200;
		window.localStorage.setItem("rpoState", poState);
		console.log("poState was: " + poState + " if statement ran");
	} else{
		poState = parseInt(temppoState);
		// window.localStorage.setItem("rpoState", poState);
		console.log("poState was: " + poState + " else statement ran");
	}
}

/*State (smile) determining function*/
function stateDet(pState){
	if(0 <= pState && pState < 30){
    	$("#lec").show();
    	$("#ley").show();
    	$("#leh").hide();

    	$("#rec").show();
    	$("#rey").show();
    	$("#reh").hide();

		$("#msa").show();
		$("#mcl").hide();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
        $("#pmh").hide();
		$("#mhg").hide();
		$("#mcs").hide();
		$("#mcw").hide();
		console.log("Sad state value: " + pState);
	} else if(30 <= pState && pState < 70){
		$("#lec").show();
    	$("#ley").show();
    	$("#leh").hide();

    	$("#rec").show();
    	$("#rey").show();
    	$("#reh").hide();

		$("#msa").hide();
		$("#mcl").show();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
        $("#pmh").hide();
		$("#mhg").hide();
		$("#mcs").hide();
		$("#mcw").hide();
		console.log("Neutral state value: " + pState);
	} else{
		$("#lec").show();
    	$("#ley").show();
    	$("#leh").hide();

    	$("#rec").show();
    	$("#rey").show();
    	$("#reh").hide();

		$("#msa").hide();
		$("#mcl").hide();
		$("#tee").show();
		$("#ton").show();
		$("#tpa").show();
        $("#pmh").hide();
		$("#mhg").hide();
		$("#mcs").hide();
		$("#mcw").hide();
		console.log("Happy state value: " + pState);
	}
	window.localStorage.setItem("rpState",pState);
}

/*Animation for pet and value to add to current state*/
function petting(){
	var play = 0;
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
		console.log("touchend " + pState);
		stateDet(pState);
	});

};

/*Animation for pet when he is annoyed; when it's eyes, nose or mouth is touched*/
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
		resetAnim();
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
		resetAnim();
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
		resetAnim();
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
		resetAnim();
	});
};

/*annoy reward function*/
function annoyReward(){
	console.log("annoyed");
	if(pState < 0){
		pState = 0;
	} else{
		pState = pState - 0.5;
	}	
};

/*reset eyes animation*/
function resetAnim(){
	$("#ley").css("animation-play-state", "pause");
	$("#rey").css("animation-play-state", "pause");
	$("#ley").css("animation-play-state", "running");
	$("#rey").css("animation-play-state", "running");
};

/*Animation + treat function of pet reaction*/
function treats(){
	var yOffset = 26.5; //image size offset of y
	var xOffset = 58; //image size offset of x
	$("#totalT").touchstart(function(event){
		if(tState > 0){
			event.preventDefault();
			var e = event.originalEvent;
			var treatDiv = document.getElementById("face");
			var imgTag = document.createElement('img');
			var x = e.touches[0].pageX;
			var y = e.touches[0].pageY;
	
			console.log("X: " + x + "px");
			console.log("Y: " + y + "px");

			imgTag.setAttribute('id',"curTreat");
			imgTag.setAttribute('src',"img/Treat.png");
			treatDiv.appendChild(imgTag);

			$("#curTreat").css("top", y - yOffset);
			$("#curTreat").css("left", x - xOffset);
			$("#curTreat").css("position", "fixed");
			$("#curTreat").css("z-index", 10);

			// PET FACE
			$("#mcl").hide();
			$("#msa").hide();
			$("#tee").hide();
			$("#ton").hide();
			$("#tpa").hide();
			$("#pmh").hide();
			$("#mhg").show();
			$("#mcs").hide();
			$("#mcw").hide();
		}
	})

	$("#totalT").touchmove(function(event){
		event.preventDefault();
		var e = event.originalEvent;
		var x = e.touches[0].pageX;
		var y = e.touches[0].pageY;

		var newT = e.changedTouches[0];
		xOffset = parseInt(newT.pageX) - x;
		yOffset = parseInt(newT.pageY) - y;
		$("#curTreat").css("top", y - yOffset);
		$("#curTreat").css("left", x - xOffset);
		// console.log("xOffset" + xOffset);
		// console.log("yOffset" + yOffset);
	});

	$("#totalT").touchend(function(){
		$("#mcl").hide();
		$("#msa").hide();
		$("#tee").hide();
		$("#ton").hide();
		$("#tpa").hide();
		$("#pmh").hide();
		$("#mhg").hide();
		$("#mcs").show();
		$("#mcw").show();

		if(collision($("#curTreat"),$("#mhg"))){
			tState--;
			treatReward();
		}
		var e = document.getElementById("curTreat");
		e.parentNode.removeChild(e);
		$("#totalT").text(tState);
		window.localStorage.setItem("rtState",tState);
	})
};

/*treat reward function
REMINDER:
t = treats given; can give as much as you want, 
	but formula will allow max of 2 points PER DAY
	use summation 1/n as n -> to infinity; ~2.
*/
function treatReward(){
	var fday = 86400000; // one full day
	var currday = new Date().getTime(); //today's day
	//check if its the same day
	if((dState + fday) >= currday){	//same day
		eState++;
		pState = pState + (1/eState);
		console.log("today: " + (dState + fday));
		console.log("tomorrow: " + currday);
		console.log("eState value: " + (1/eState));
		day = currday;
		window.localStorage.setItem("reState",eState);		
	} else{ 						//next day
		eState = 1;
		pState = pState + (1/eState);
		console.log("eState value: " + (1/eState));
		window.localStorage.setItem("reState",eState);			
	}
}

function dailyReward(){
	var fday = 86400000; // one full day
	var currday = new Date().getTime(); //today's day
	poState = parseInt(window.localStorage.getItem("rpoState"));
	//check if its the same day
	if((dState + fday) >= currday){	//next day
		poState = poState + 10;
		day = currday;
		window.localStorage.setItem("rpoState",poState);
	}
}
/*Collision function*/
function collision(obj1, obj2) {
      var x1 = obj1.offset().left;
      var y1 = obj1.offset().top;
      var h1 = obj1.outerHeight(true);
      var w1 = obj1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = obj2.offset().left + 153;
      var y2 = obj2.offset().top + 456;
      var h2 = obj2.outerHeight(true);
      var w2 = obj2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      console.log("obj1: " 
      	 + x1 + "/" + y1 + "/" + h1 + "/"
      	 + w1 + "/" + b1 + "/" + r1 + "/");

      console.log("obj2: " 
      	 + x2 + "/" + y2 + "/" + h2 + "/"
      	 + w2 + "/" + b2 + "/" + r2 + "/");
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
      	console.log("false returned for collision");
      	return false;
      } else{
      	console.log("true returned for collision");
      	return true;
      }
    }

function onPausePI(){
	window.localStorage.setItem("rpState",pState);
	window.localStorage.setItem("rtState",tState);
	window.localStorage.setItem("reState",eState);
	window.localStorage.setItem("rdState",dState);
	window.localStorage.setItem("rpoState",poState);	
};

function onResumePI() {
	pState = parseFloat(window.localStorage.getItem("rpState"));
		console.log("onResumeP: " + pState);
	tState = parseInt(window.localStorage.getItem("rtState"));
		console.log("onResumeT: " + tState);
	eState = parseInt(window.localStorage.getItem("reState"));
		console.log("onResumeE: " + eState);
	dState = parseInt(window.localStorage.getItem("rdState"));
		console.log("onResumeD: " + dState);				
	poState = parseInt(window.localStorage.getItem("rpoState"));	
		console.log("onResumePO: " + poState);	
}
