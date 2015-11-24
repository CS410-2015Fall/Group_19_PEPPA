/*
var selectheadmenu=document.getElementById("heads");
selectheadmenu.onchange=function() {
	var chosenoption = selectedheadmenu.options[selectedheadmenu.selectedIndex];
	if (chosenoption.value!="none") {
		document.getElementById("head").innerHTML = chosenoption;
	}
};*/

$(document).delegate("#customize", "pagebeforecreate", function () {
        var $petPage = $("#customize");
            $btnSubmit1 = $("#head_1", $petPage);
            $btnSubmit2 = $("#head_2", $petPage);
            $btnSubmit3 = $("#head_3", $petPage);
			
			$btnSubmit4 = $("#eyes_1", $petPage);
			$btnSubmit5 = $("#eyes_2", $petPage);
			
			$btnSubmit6 = $("#neck_1", $petPage);
			$btnSubmit7 = $("#neck_2", $petPage);
			
			$btnSubmit8 = $("#head_4", $petPage);
			$btnSubmit9 = $("#eyes_3", $petPage);
			$btnSubmit10 = $("#neck_3", $petPage);

        $btnSubmit1.off("tap").on("tap", function () {
		$("#head").html("Head 1 Selected");	
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
		
        $btnSubmit2.off("tap").on("tap", function () {
		$("#head").html("Head 2 Selected");	
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

        $btnSubmit3.off("tap").on("tap", function () {
		$("#head").html("Head 3 Selected");		
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
		
		// eye accessories
		$btnSubmit4.off("tap").on("tap", function () {
        	$("#glas").css("opacity",1.0);
			$("#mono").css("opacity",0);
			console.log("glasses checked");
		// $("#eyes").html("Eyes 1 Selected");	
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		// }
		// var imgTag = document.createElement('img');
		// imgTag.setAttribute('id',"eyeAccessory");
		// imgTag.setAttribute('class',"glas");
		// imgTag.setAttribute('src',"img/glasses.png");
		// faceDiv.appendChild(imgTag);
		})
		
        $btnSubmit5.off("tap").on("tap", function () {
        	$("#glas").css("opacity",0);
			$("#mono").css("opacity",1.0);
			console.log("monocle checked");
		// $("#eyes").html("Eyes 2 Selected");	
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		// }
		// var imgTag = document.createElement('img');
		// imgTag.setAttribute('id',"eyeAccessory");
		// imgTag.setAttribute('class',"mono");
		// imgTag.setAttribute('src',"img/monocle.png");
		// faceDiv.appendChild(imgTag);
		})
		
		// neck accessories
		$btnSubmit6.off("tap").on("tap", function () {
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
		
        $btnSubmit7.off("tap").on("tap", function () {
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
		$btnSubmit8.off("tap").on("tap", function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}})
		$btnSubmit9.off("tap").on("tap", function () {
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		//	}
		// !!! JUST FOR DEMO
        	$("#glas").css("opacity",0);
			$("#mono").css("opacity",0);

		})
		$btnSubmit10.off("tap").on("tap", function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#neckAccessory').length > 0) {
			var e = document.getElementById("neckAccessory");
			e.parentNode.removeChild(e);
		}})
});
// eyes
$(document).delegate("#tab-eyes", "pagebeforecreate", function () {
        var $petPage = $("#tab-eyes");
            $btnSubmit1 = $("#head_1", $petPage);
            $btnSubmit2 = $("#head_2", $petPage);
            $btnSubmit3 = $("#head_3", $petPage);
			
			$btnSubmit4 = $("#eyes_1", $petPage);
			$btnSubmit5 = $("#eyes_2", $petPage);
			
			$btnSubmit6 = $("#neck_1", $petPage);
			$btnSubmit7 = $("#neck_2", $petPage);
			
			$btnSubmit8 = $("#head_4", $petPage);
			$btnSubmit9 = $("#eyes_3", $petPage);
			$btnSubmit10 = $("#neck_3", $petPage);

        $btnSubmit1.off("tap").on("tap", function () {
		$("#head").html("Head 1 Selected");	
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
		
        $btnSubmit2.off("tap").on("tap", function () {
		$("#head").html("Head 2 Selected");	
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

        $btnSubmit3.off("tap").on("tap", function () {
		$("#head").html("Head 3 Selected");		
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
		
		// eye accessories
		$btnSubmit4.off("tap").on("tap", function () {
        	$("#glas").css("opacity",1.0);
			$("#mono").css("opacity",0);
			console.log("glasses checked");
		// $("#eyes").html("Eyes 1 Selected");	
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		// }
		// var imgTag = document.createElement('img');
		// imgTag.setAttribute('id',"eyeAccessory");
		// imgTag.setAttribute('class',"glas");
		// imgTag.setAttribute('src',"img/glasses.png");
		// faceDiv.appendChild(imgTag);
		})
		
        $btnSubmit5.off("tap").on("tap", function () {
        	$("#glas").css("opacity",0);
			$("#mono").css("opacity",1.0);
			console.log("monocle checked");
		// $("#eyes").html("Eyes 2 Selected");	
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		// }
		// var imgTag = document.createElement('img');
		// imgTag.setAttribute('id',"eyeAccessory");
		// imgTag.setAttribute('class',"mono");
		// imgTag.setAttribute('src',"img/monocle.png");
		// faceDiv.appendChild(imgTag);
		})
		
		// neck accessories
		$btnSubmit6.off("tap").on("tap", function () {
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
		
        $btnSubmit7.off("tap").on("tap", function () {
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
		$btnSubmit8.off("tap").on("tap", function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}})
		$btnSubmit9.off("tap").on("tap", function () {
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		//	}
		// !!! JUST FOR DEMO
        	$("#glas").css("opacity",0);
			$("#mono").css("opacity",0);

		})
		$btnSubmit10.off("tap").on("tap", function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#neckAccessory').length > 0) {
			var e = document.getElementById("neckAccessory");
			e.parentNode.removeChild(e);
		}})
});	
// neck
$(document).delegate("#tab-neck", "pagebeforecreate", function () {
        var $petPage = $("#tab-neck");
            $btnSubmit1 = $("#head_1", $petPage);
            $btnSubmit2 = $("#head_2", $petPage);
            $btnSubmit3 = $("#head_3", $petPage);
			
			$btnSubmit4 = $("#eyes_1", $petPage);
			$btnSubmit5 = $("#eyes_2", $petPage);
			
			$btnSubmit6 = $("#neck_1", $petPage);
			$btnSubmit7 = $("#neck_2", $petPage);
			
			$btnSubmit8 = $("#head_4", $petPage);
			$btnSubmit9 = $("#eyes_3", $petPage);
			$btnSubmit10 = $("#neck_3", $petPage);

        $btnSubmit1.off("tap").on("tap", function () {
		$("#head").html("Head 1 Selected");	
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
		
        $btnSubmit2.off("tap").on("tap", function () {
		$("#head").html("Head 2 Selected");	
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

        $btnSubmit3.off("tap").on("tap", function () {
		$("#head").html("Head 3 Selected");		
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
		
		// eye accessories
		$btnSubmit4.off("tap").on("tap", function () {
        	$("#glas").css("opacity",1.0);
			$("#mono").css("opacity",0);
			console.log("glasses checked");
		// $("#eyes").html("Eyes 1 Selected");	
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		// }
		// var imgTag = document.createElement('img');
		// imgTag.setAttribute('id',"eyeAccessory");
		// imgTag.setAttribute('class',"glas");
		// imgTag.setAttribute('src',"img/glasses.png");
		// faceDiv.appendChild(imgTag);
		})
		
        $btnSubmit5.off("tap").on("tap", function () {
        	$("#glas").css("opacity",0);
			$("#mono").css("opacity",1.0);
			console.log("monocle checked");
		// $("#eyes").html("Eyes 2 Selected");	
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		// }
		// var imgTag = document.createElement('img');
		// imgTag.setAttribute('id',"eyeAccessory");
		// imgTag.setAttribute('class',"mono");
		// imgTag.setAttribute('src',"img/monocle.png");
		// faceDiv.appendChild(imgTag);
		})
		
		// neck accessories
		$btnSubmit6.off("tap").on("tap", function () {
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
		
        $btnSubmit7.off("tap").on("tap", function () {
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
		$btnSubmit8.off("tap").on("tap", function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#headAccessory').length > 0) {
			var e = document.getElementById("headAccessory");
			e.parentNode.removeChild(e);
		}})
		$btnSubmit9.off("tap").on("tap", function () {
		// var faceDiv = document.getElementById("ctmz");
		// if ($('#eyeAccessory').length > 0) {
		// 	var e = document.getElementById("eyeAccessory");
		// 	e.parentNode.removeChild(e);
		//	}
		// !!! JUST FOR DEMO
        	$("#glas").css("opacity",0);
			$("#mono").css("opacity",0);

		})
		$btnSubmit10.off("tap").on("tap", function () {
		var faceDiv = document.getElementById("ctmz");
		if ($('#neckAccessory').length > 0) {
			var e = document.getElementById("neckAccessory");
			e.parentNode.removeChild(e);
		}})
});	