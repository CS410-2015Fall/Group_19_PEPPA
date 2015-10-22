function openMenu(){
		//app.receivedEvent('onClick');
		document.getElementById("main_menu").setAttribute('style', 'display:block;');
		console.log("Button Clicked");
		navigator.notification.alert("Button working");
}

/*
$(document).ready(function() {
	$("#test_button").click(function() {
		$("#main_menu").display();
		//$("#panel").stop(true, false).slideToggle(200);
	});
});
*/