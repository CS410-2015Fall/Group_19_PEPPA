var tasknumber;

$(document).delegate("#taskpage", "pagebeforeshow", function() {
	$('#tasklist').listview('refresh');
	var i;
	for (i=0; i<localStorage.length; i++) {
		var itemName = localStorage.getItem("task-"+i+"input");
		var itemTime = localStorage.getItem("task-"+i+"time");
		//console.log(itemName+" "+i+" length= "+$("#task-"+i).length);
		// if item exists in the localStorage and does not already exist in listview, load it onto listview
		if ($("#task-"+i).length != 0) {
			// skip the item
			console.log("skipped this item: task-"+i);
		} else {
			if (itemName != null && itemTime != null) {
				$('#tasklist').append($('<li id="task-'+i+'"></li>').append(
				$('<a href="#taskcomplete" data-rel="popup" data-position-to="window" data-transition="pop" data-icon="delete"></a>').append(
				$('<h2/>').html(itemTime).append($('<p/>').html(itemName)))));
				console.log("added onto listview: task-"+i);
			}
		}
	}
	$('#tasklist').listview('refresh');
	console.log("after listview refresh");
});

$(document).ready(function() {
	// initial load tasks from local storage
	// create a new task and add it to local storage
	$("#newtask").submit(function() {
		var input = $("#textinput").val();
		var month = $("#month option:selected").text();
		var monthInt = $("#month option:selected").val();
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
			
			// set a notification to fire
			var date = new Date();
			var m = parseInt(monthInt);
			var d = parseInt(day);
			date.setMonth(m);
			date.setDate(d);
			cordova.plugins.notification.local.schedule({
				id: tasknumber,
				title: input,
				text: time,
				at: date
			});
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
		tState = parseInt(window.localStorage.getItem("rtState"));
		tState++;
		window.localStorage.setItem("rtState", tState);
		$('#totalcoins').html("Total Coins: " + tState);
		$(this).parent().parent().parent().remove();
		$('#tasklist').listview('refresh');
		$("#taskcomplete").popup("open");
	})
	
});
/*
<<<<<<< HEAD

var ntd = {};
/*
* Read the new task and add it to the list 
ntd.add = function(event) {
    // Read the task from the input
    var task=$('input').val();
    if (task) {
        // Add the task to array and refresh list
        ntd.list[ntd.list.length] = task;
        ntd.refresh_list();
        // Clear the input
        $('input').val('');
    }
    event.preventDefault();
};
/** Remove the task which was marked as selected
ntd.remove = function() {
    // Remove from array and refresh list
    ntd.list.splice(ntd.selected,1);
    ntd.refresh_list();
};
/** Recreate the entire list from the available list of tasks
ntd.refresh_list = function() {
    var $tasks = $('#task_list'), i;
    // Clear the existing task list
    $tasks.empty();
    if (ntd.list.length) {
        // Add the header
        $tasks.append('<li data-role="list-divider">Task List</li>');
        for (var i=0;i<ntd.list.length;i++){
            // Append each task
            var li = '<li><a data-rel="dialog" data-task="' + i
                    + '" href="#confirm">' + ntd.list[i] + '</a></li>'
            $tasks.append(li);
        }
    }
    // Add the header for addition of new tasks
    $tasks.append('<li data-role="list-divider">Add a task</li>');
    // Use jQuery Mobile's listview method to refresh
    $tasks.listview('refresh');
    // Store back the list
    localStorage.ntd_list = JSON.stringify(ntd.list || []);
};

// Initialize the one page
$(document).delegate('#one','pageinit', function() {
    // If no list is already present, initialize it
    if (!localStorage.ntd_list) {
        localStorage.ntd_list = "[]";
    }
    // Load the list by parsing the JSON from localStorage
    ntd.list = JSON.parse(localStorage.ntd_list);
    $('#add').bind('vclick', ntd.add);
    $('li a').live('vclick', function() {
        ntd.selected = $(this).data('task');
    });
    // Refresh the list everytime the page is reloaded
    $('#one').bind('pagebeforeshow', ntd.refresh_list);
});

// Bind the 'Done' and 'Not Done' buttons to task removal
$(document).delegate('#confirm', 'pageinit', function(){
    $('.remove_task').bind('vclick', ntd.remove);
});

// Make the transition in reverse for the buttons on the done and notdone pages
$(document).delegate('#done, #notdone', 'pageinit', function(){
    // We reverse transition for any button linking to one page
    $('[href="#one"]').attr('data-direction','reverse');
})
*/
