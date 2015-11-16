
var ntd = {};
/** Read the new task and add it to the list */
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
/** Remove the task which was marked as selected */
ntd.remove = function() {
    // Remove from array and refresh list
    ntd.list.splice(ntd.selected,1);
    ntd.refresh_list();
};
/** Recreate the entire list from the available list of tasks */
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
