document.addEventListener("pause", onPauseC, false);
document.addEventListener("resume", onResumeC, false);

var Accessories ={
	
}

document.addEventListener("deviceready", savedStateC);



function savedStateC(){
	console.log("onResumeC: " + window.localStorage.getItem("rcState"));
	cState = window.localStorage.getItem("rcState");
	if (cState  == null){
		cState = 30.0;
		console.log("cState was:" + cState + " if ran");
	} else{
		cState = parseFloat(cState);
	}
}


function onPauseC(){
	window.localStorage.setItem("rcState", JSON.stringify(cState));
};

function onResumeC() {

	cState = JSON.parse(window.localStorage.getItem("rcState"));
		console.log("onResumeC: " + cState);
}




$(document).delegate("#tab-head", "pagebeforecreate", function () {
        var $petPage = $("#tab-head");
            $btnSubmit1 = $("#head_1", $petPage);
            $btnSubmit2 = $("#head_2", $petPage);
            $btnSubmit3 = $("#head_3", $petPage);
			
			$btnSubmit8 = $("#head_4", $petPage);

					
        $btnSubmit1.click(function () {
		// $("#head").html("Head 1 Selected");
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"headAccessory");
		imgTag.setAttribute('class',"headAcc");
		imgTag.setAttribute('src',"img/hat.png");
		faceDiv.appendChild(imgTag);
		})
		
        $btnSubmit2.click(function () {
		// $("#head").html("Head 2 Selected");	
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"headAccessory");
		imgTag.setAttribute('class',"headAcc");
		imgTag.setAttribute('src',"img/bowtie_b.png");
		faceDiv.appendChild(imgTag);
		})

        $btnSubmit3.click(function () {
		// $("#head").html("Head 3 Selected");		
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"headAccessory");
		imgTag.setAttribute('class',"headAcc");
		imgTag.setAttribute('src',"img/bowtie_p.png");
		faceDiv.appendChild(imgTag);
		})
		
		//Remove Items
		$btnSubmit8.click(function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}})
});

// eyes
$(document).delegate("#tab-eyes", "pagebeforecreate", function () {
        var $petPage = $("#tab-eyes");
			
			$btnSubmit4 = $("#eyes_1", $petPage);
			$btnSubmit5 = $("#eyes_2", $petPage);
			
			$btnSubmit9 = $("#eyes_3", $petPage);
		
		// eye accessories
		$btnSubmit4.click(function () {
   //      	$("#glas").css("opacity",1.0);
			// $("#mono").css("opacity",0);
			// console.log("glasses checked");
		// $("#eyes").html("Eyes 1 Selected");	
		var faceDiv = document.getElementById("ctmz");
		if ($('#eyeAccessory').length > 0) {
			var e = document.getElementById("eyeAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"eyeAccessory");
		imgTag.setAttribute('class',"eyeAcc");
		imgTag.setAttribute('src',"img/glasses.png");
		faceDiv.appendChild(imgTag);
		$("#eyeAccessory").css("top", "30%");
		$("#eyeAccessory").css("left", "-30%");
		})
		
        $btnSubmit5.click(function () {
   //      	$("#glas").css("opacity",0);
			// $("#mono").css("opacity",1.0);
			// console.log("monocle checked");
		// $("#eyes").html("Eyes 2 Selected");	
		var faceDiv = document.getElementById("ctmz");
		if ($('#eyeAccessory').length > 0) {
			var e = document.getElementById("eyeAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"eyeAccessory");
		imgTag.setAttribute('class',"eyeAcc");
		imgTag.setAttribute('src',"img/monocle.png");
		faceDiv.appendChild(imgTag);
		$("#eyeAccessory").css("top", "-30%");
		$("#eyeAccessory").css("left", "20%");
		})
		
		$btnSubmit9.click(function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#eyeAccessory').length > 0) {
			var e = document.getElementById("eyeAccessory");
			e.parentNode.removeChild(e);
			}
		// !!! JUST FOR DEMO
   //      	$("#glas").css("opacity",0);
			// $("#mono").css("opacity",0);

		})
});	
// neck
$(document).delegate("#tab-neck", "pagebeforecreate", function () {
        var $petPage = $("#tab-neck");
			
			$btnSubmit6 = $("#neck_1", $petPage);
			$btnSubmit7 = $("#neck_2", $petPage);
			
			$btnSubmit10 = $("#neck_3", $petPage);
		
		// neck accessories
		$btnSubmit6.click(function () {
		$("#neck").html("Neck 1 Selected");	
		var faceDiv = document.getElementById("ctmz");
		if ($('#neckAccessory').length > 0) {
			var e = document.getElementById("neckAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"neckAccessory");
		imgTag.setAttribute('class',"neckAcc");
		imgTag.setAttribute('src',"img/bowtie_b.png");
		faceDiv.appendChild(imgTag);
		})
		
        $btnSubmit7.click(function () {
		$("#neck").html("Neck 2 Selected");	
		var faceDiv = document.getElementById("ctmz");
		if ($('#neckAccessory').length > 0) {
			var e = document.getElementById("neckAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"neckAccessory");
		imgTag.setAttribute('class',"neckAcc");
		imgTag.setAttribute('src',"img/bowtie_p.png");
		faceDiv.appendChild(imgTag);
		})
		//Remove Items
		// !!! JUST FOR DEMO
   //      	$("#glas").css("opacity",0);
			// $("#mono").css("opacity",0);

		// })
		$btnSubmit10.click(function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#neckAccessory').length > 0) {
			var e = document.getElementById("neckAccessory");
			e.parentNode.removeChild(e);
		}})
});	

$(document).delegate("#tab-head", "pagebeforeshow", function (){
		if (localStorage.getItem('brown_hat')){
			document.getElementById("head_1").style.display = "";
		}
		if (!localStorage.getItem('brown_hat')){
			document.getElementById("head_1").style.display = "none";
		}
		if (localStorage.getItem('bowtie_b')){
			document.getElementById("head_2").style.display = "";
		}
		if (!localStorage.getItem('bowtie_b')){
			document.getElementById("head_2").style.display = "none";
		}			
		if (localStorage.getItem('bowtie_p')){
			document.getElementById("head_3").style.display = "";
		}
		if (!localStorage.getItem('bowtie_b')){
			document.getElementById("head_3").style.display = "none";
		}					
});
