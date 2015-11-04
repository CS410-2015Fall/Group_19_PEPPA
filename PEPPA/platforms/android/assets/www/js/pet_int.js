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
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	console.log('pet_int.js Initialized.');
	document.addEventListener("mouseover", petting());
};

function state(cs,t,p){

};

function petting(){
	//var face = document.getElementByClassName("face");
	var leye = document.getElementById("ly");
	var reye = document.getElementById("ry");
	var nose = document.getElementById("nos");
	//var mu	=  document.getElementByClassName("mu");
	// leye
	if(leye.src.match('img/LeftEye.png')||
		(reye.src.match('img/RightEye.png'))){
		console.log('source matched');
	}
	console.log('TOUCHED');
};



