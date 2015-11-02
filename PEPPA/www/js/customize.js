/*
var selectheadmenu=document.getElementById("heads");
selectheadmenu.onchange=function() {
	var chosenoption = selectedheadmenu.options[selectedheadmenu.selectedIndex];
	if (chosenoption.value!="none") {
		document.getElementById("head").innerHTML = chosenoption;
	}
};*/

$("#head_1").on("vclick", function() {
	$("#head").html("Head 1 Selected");
});

$("#head_2").on("vclick", function() {
	$("#head").html("Head 2 Selected");
});

$("#head_3").on("vclick", function() {
	$("#head").html("Head 3 Selected");
});

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