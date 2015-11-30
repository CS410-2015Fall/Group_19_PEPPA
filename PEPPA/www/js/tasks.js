var tasknumber;
$(document).delegate("#taskpage", "pagebeforeshow", function() {
	console.log("before listview refresh");
	$('#tasklist').listview('refresh');
	console.log("after listview refresh");
	var i;
	for (i=0; i<localStorage.length; i++) {
		var itemName = localStorage.getItem("task-"+i+"input");
		var itemTime = localStorage.getItem("task-"+i+"time");
		//console.log(item+" "+i+" length= "+$("#task-"+i).length);
		// if item exists in the localStorage and does not already exist in listview, load it onto listview
		if (itemName != null && itemTime != null && !$("#task-"+i).length) {
			$('#tasklist').append($('<li id="task-'+i+'"></li>').append($('<a href="#" data-icon="delete"></a>').append(
			$('<h2/>').html(itemTime).append($('<p/>').html(itemName)))));
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
		var month = $("#month option:selected").text();
		var day = $("#day option:selected").text();
		var time = month+" "+day;
		// if text field not empty
		if (input != "") {
			// add to localStorage ("task-NUMBER", "TEXT_INPUT")
			// start from task number = 0
			if (localStorage.getItem("tasknumber") == null || localStorage.getItem("tasknumber") == 0) {
				tasknumber = 0;
				localStorage.setItem("tasknumber", tasknumber);
			} else {
				tasknumber = localStorage.getItem("tasknumber");
			}
			var taskid = "task-"+tasknumber;
			console.log("taskid: "+taskid+", input: "+input);
			console.log("taskid: "+taskid+", time: "+time);
			
			
			localStorage.setItem(taskid+"input", input);
			localStorage.setItem(taskid+"time", time);
			
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
		console.log("removing element with id: "+this.parentNode.parentNode.parentNode.id);
		var name = this.parentNode.parentNode.parentNode.id+"input";
		var time = this.parentNode.parentNode.parentNode.id+"time";
		localStorage.removeItem(name);
		localStorage.removeItem(time);
		//console.log(this.parentNode.parentNode.parentNode);
		//console.log(this.parentNode.parentNode.parentNode.id);
		for (i=1; i<=localStorage.length; i++) {
			if ("task-"+i == this.parentNode.parentNode.parentNode.id) {
				localStorage.removeItem(i+1);
				break;
			}
		}
		$(this).parent().parent().parent().remove();
		$('#tasklist').listview('refresh');
	})
	
});