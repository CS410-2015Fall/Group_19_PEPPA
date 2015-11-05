/*
var selectheadmenu=document.getElementById("heads");
selectheadmenu.onchange=function() {
	var chosenoption = selectedheadmenu.options[selectedheadmenu.selectedIndex];
	if (chosenoption.value!="none") {
		document.getElementById("head").innerHTML = chosenoption;
	}
};*/

$(document).delegate("#customize", "pagebeforecreate", function () {        

        var $petPage = $("#customize"),
            $btnSubmit1 = $("#head_1", $petPage),
            $btnSubmit2 = $("#head_2", $petPage),
            $btnSubmit3 = $("#head_3", $petPage);
			
			$btnSubmit4 = $("#eyes_1", $petPage);
			$btnSubmit5 = $("#eyes_2", $petPage);
			
			$btnSubmit6 = $("#neck_1", $petPage);
			$btnSubmit7 = $("#neck_2", $petPage);
			

        $btnSubmit1.off("tap").on("tap", function () {
		$("#head").html("Head 1 Selected");	
		var faceDiv = document.getElementById("face");
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
		
        $btnSubmit2.off("tap").on("tap", function () {
		$("#head").html("Head 2 Selected");	
		var faceDiv = document.getElementById("face");
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

        $btnSubmit3.off("tap").on("tap", function () {
		$("#head").html("Head 3 Selected");		
		var faceDiv = document.getElementById("face");
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
		
		// eye accessories
		$btnSubmit4.off("tap").on("tap", function () {
		$("#eyes").html("Eyes 1 Selected");	
		var faceDiv = document.getElementById("face");
		if ($('#eyeAccessory').length > 0) {
			var e = document.getElementById("eyeAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"eyeAccessory");
		imgTag.setAttribute('class',"eyeAcc");
		imgTag.setAttribute('src',"img/glasses.png");
		faceDiv.appendChild(imgTag);
		})
		
        $btnSubmit5.off("tap").on("tap", function () {
		$("#eyes").html("Eyes 2 Selected");	
		var faceDiv = document.getElementById("face");
		if ($('#eyeAccessory').length > 0) {
			var e = document.getElementById("eyeAccessory");
			e.parentNode.removeChild(e);
		}
		var imgTag = document.createElement('img');
		imgTag.setAttribute('id',"eyeAccessory");
		imgTag.setAttribute('class',"eyeAcc");
		imgTag.setAttribute('src',"img/monocle.png");
		faceDiv.appendChild(imgTag);
		})
		
		// neck accessories
		$btnSubmit6.off("tap").on("tap", function () {
		$("#neck").html("Neck 1 Selected");	
		var faceDiv = document.getElementById("face");
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
		
        $btnSubmit7.off("tap").on("tap", function () {
		$("#neck").html("Neck 2 Selected");	
		var faceDiv = document.getElementById("face");
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
});	

$("#head_1").click(function() {
	console.log("Clicked the first item");
	alert("First pressed");
	$("#head").html("Head 1 Selected");
});	

// $("#head_1").click(function() {
	// console.log("Clicked the first item");
	// $("#head").html("Head 1 Selected");
// });

// $("#head_2").on("vclick", function() {
	// console.log("Clicked the second item");
	// $("#head").html("Head 2 Selected");
// });

// $("#head_3").on("vclick", function() {
	// console.log("Clicked the third item");
	// $("#head").html("Head 3 Selected");
// });

/*
var PePPA = PePPA || {};

PePPA.pet = function () {
	this.$head = null;
	this.$neck = null;
	this.$body = null;
	this.$feet = null;
};

var availableHeads = ["head_1", "head_2", "head_3"];
var availableNecks = ["neck_1"];
var availableBodies = ["body_1", "body_2"];
var availableFeet = ["feet_1", "feet_2", "feet_3"];

PePPA.changeHead = function (headchange) {
	if (availableHeads.length > 0) {
		$.inArray(headchange, availableHeads) {
			pet.head = headchange;
		}
	}
};

PePPA.changeNeck = function (neckchange) {
	if (availableNecks.length > 0) {
		$.inArray(neckchange, availableNecks) {
			pet.neck = neckchange;
		}
	}
};

PePPA.changeBody = function (bodychange) {
	if (availableBodies.length > 0) {
		$.inArray(bodychange, availableBodies) {
			pet.body = bodychange;
		}
	}
};

PePPA.changeFeet = function (feetchange) {
	if (availableFeet.length > 0) {
		$.inArray(feetchange, availableFeet) {
			pet.feet = feetchange;
		}
	}
};
*/