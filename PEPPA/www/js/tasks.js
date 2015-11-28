$(document).ready(function() {
	document.getElementById("newtask").onsubmit = function() {
	//$("input[type=submit]").click(function(e) {
		//var tasklist = document.getElementById("tasklist");
		var input = $("#textinput").val();
		console.log(input);
		var newtask = $('<li></li>');
		//newtask.innerHTML = input;
		//tasklist.appendChild(newtask);
		$('#tasklist').append($('<li/>', {
			'data-role': "list-divider"
		}).html(input));
		
		$('#tasklist').listview('refresh');
		return false;
	};
});