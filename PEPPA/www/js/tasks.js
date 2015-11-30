// $(document).delegate("#tasks", "pagebeforecreate", function() {
	// var item;
	// for (i = 0; i<window.localStorage.length; i++) {
		// if ($(i).length != 0) {
//			do nothing
		// } else {
			// item = window.localStorage.getItem(i);
			// $('#tasklist').append($('<li/>', {
				// id: i,
//				'data-role': "list-divider"
				// 'data-icon': "delete"
			// }).html(item));
		// }
	// }
	// for (i = 0; i<window.localStorage.length; i++) {
		// window.localStorage.removeItem(i);
	// }
// });
$(document).ready(function() {
	
	// initial load tasks from local storage
	
	var i;
	var taskList= $('#tasklist');
	var tasknumber = 0;
	
	for (i=0; i<localStorage.length; i++) {
		var item = localStorage.getItem("task-"+i);
		// if item exists in the localStorage, load it onto listview
		if (item != null) {
			taskList.append($('<li/>', {
			id: "task-"+i,
			}).append($('<a href="#" data-icon="delete"></a>').html(item)));
		}
		taskList.listview('refresh');
	}
	
	// create a new task and add it to local storage
	
	$("#newtask").submit(function() {
		var input = $("#textinput").val();
		// if text field not empty
		if (input != "") {
			// add to localStorage ("task-NUMBER", "TEXT_INPUT")
			// start from task number = 0
			localStorage.setItem("task-"+tasknumber, input);
			
			// add the task to the listview
			taskList.append($('<li/>', {
				id: "task-"+tasknumber,
				'data-icon': "delete"
			}).append($('<a href="#" data-icon="delete"></a>').html(input)));
			
			// clear input field
			input.val("");
			taskList.listview('refresh');
			// increment tasknumber
			tasknumber++;
		}
		/*
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
			//'data-role': "list-divider"
			'data-icon': "delete"
		}).append($('<a href=#></a>').html(input)));
		
		$('#tasklist').listview('refresh');
		//return false;
		*/
	});
	
	// remove a task and remove it from local storage
	
	// todo
	
});