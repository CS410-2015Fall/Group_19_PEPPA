var tasknumber = -1;
var savedtasknumber = -1;

$(document).delegate("#tasks", "pagebeforecreate", function() {
	var item;
	for (i = 0; i<window.localStorage.length; i++) {
		if ($(i).length != 0) {
			// do nothing
		} else {
			item = window.localStorage.getItem(i);
			$('#tasklist').append($('<li/>', {
				id: i,
				'data-role': "list-divider"
			}).html(item));
		}
	}
	for (i = 0; i<window.localStorage.length; i++) {
		window.localStorage.removeItem(i);
	}
});
$(document).ready(function() {
	document.getElementById("newtask").onsubmit = function() {
		$('#tasklist').listview('refresh');
	//$("input[type=submit]").click(function(e) {
		//var tasklist = document.getElementById("tasklist");
		savedtasknumber = window.localStorage.getItem("savedtasknumber");
		if (tasknumber != savedtasknumber) {
			tasknumber = savedtasknumber;
		}
		if (tasknumber < 0) {
			tasknumber = 0;
		} else {
			tasknumber++;
		}
		var input = $("#textinput").val();
		window.localStorage.setItem(tasknumber, input);
		savedtasknumber = tasknumber;
		window.localStorage.setItem("savedtasknumber", savedtasknumber);
		console.log(tasknumber);
		console.log(input);
		$('#tasklist').append($('<li/>', {
			id: i,
			'data-role': "list-divider"
		}).html(input));
		
		$('#tasklist').listview('refresh');
		return false;
	};
});