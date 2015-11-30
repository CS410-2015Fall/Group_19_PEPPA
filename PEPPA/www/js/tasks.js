var tasknumber = 0;
$(document).delegate("#taskpage", "pagebeforeshow", function() {
	console.log("before listview refresh");
	$('#tasklist').listview('refresh');
	console.log("after listview refresh");
	var i;
	for (i=0; i<localStorage.length; i++) {
		var item = localStorage.getItem("task-"+i);
		console.log(item);
		console.log($("#task-"+i).length);
		// if item exists in the localStorage and does not already exist in listview, load it onto listview
		if (item != null && !$("#task-"+i).length) {
			$('#tasklist').append($('<li/>').attr("id", "task-"+i).append($('<a href="#" data-icon="delete"></a>').html(item)));
		}
	}
	console.log("before listview refresh");
	$('#tasklist').listview('refresh');
	console.log("after listview refresh");
});
$(document).ready(function() {
	
	// initial load tasks from local storage
	
	// create a new task and add it to local storage
	
	$("#newtask").submit(function() {
		var input = $("#textinput").val();
		// if text field not empty
		if (input != "") {
			// add to localStorage ("task-NUMBER", "TEXT_INPUT")
			// start from task number = 0
			if (localStorage.getItem("tasknumber") == null) {
				tasknumber = 0;
			} else {
				tasknumber = localStorage.getItem("tasknumber");
			}
			var taskid = "task-"+tasknumber;
			console.log("taskid: "+taskid+", input: "+input);
			localStorage.setItem(taskid, input);
			
			// add the task to the listview
			/*
			$('#tasklist').append($('<li/>', {
				id: taskid
			}).append($('<a href="#" data-icon="delete"></a>').html(input)));
			console.log("Before listview refresh after adding new task");
			$('#tasklist').listview('refresh');
			console.log("After listview refresh after adding new task");
			*/
			// clear input field
			$("#textinput").val('');
			// increment tasknumber
			tasknumber++;
			localStorage.setItem("tasknumber", tasknumber);
		}
	});
	
	// remove a task and remove it from local storage
	
	$("#tasklist li a").live("click", function() {
		console.log("removing element with id: "+$(this).attr('id'));
		localStorage.removeItem($(this).attr('id'));
		$(this).hide();
		$(this).remove();
		$('#tasklist').listview('refresh');
	})
	
});