var PePPA = PePPA || {};

$(document).delegate("#store", "pagebeforecreate", function () {
	var that = this,
		name = "",
		$storePage = $("#store"),
        $btnSubmit1 = $("#buy_head_1", $storePage),
		$btnSubmit2 = $("#buy_head_2", $storePage),
        $btnSubmit3 = $("#buy_head_3", $storePage);
	
	$btnSubmit1.click(function() {
	if (!window.localStorage.getItem("brown_hat")){
		name = "brown_hat";
		find_and_return(name, window.localStorage.getItem("points"));
	}
	else alert("You've already purchased this item!");
	});
	
	$btnSubmit2.click(function() {
	if (!window.localStorage.getItem("bowtie_b")){
		name = "bowtie_b";
		find_and_return(name, window.localStorage.getItem("points"));
	}
	else alert("You've already purchased this item!");
	});
	
	$btnSubmit3.click(function() {
	if (!window.localStorage.getItem("bowtie_p")){
		name = "bowtie_p";
		find_and_return(name, window.localStorage.getItem("points"));
	}
	else alert("You've already purchased this item!");
	});
});

$(document).delegate("#store", "pagebeforeshow", function(){
	sess = PePPA.Session.getInstance().get();
	if (sess == null){
		alert("You need to log in to purchase items!");
		$.mobile.navigate("#tab-head");
		return;
	}
	alert("You currently have: " + window.localStorage.getItem("points") + "points left");	
});

function find_and_return(name, points){
    $.ajax({
        type: 'POST',
        url: PePPA.Settings.purchaseURL,
        data: "accName=" + name + "&price=" + points,
        success: function (resp) {
		if (resp.success === true){
			console.log("Purchased " + name + " !");
			window.localStorage.setItem('points', resp.extras.remainder);
			window.localStorage.setItem(name, 'purchased');
			console.log("Remaining points: " + window.localStorage.getItem('points'));		
			console.log(PePPA.Session.getInstance().get());
		}
		if (resp.success === false){
			console.log("Insufficient points");
			alert("You don't have enough points to purchase this item!");
		}
		},
        error: function (e) {
            $.mobile.loading("hide");
            console.log(e.message);
		}
	});
}	

// $(document).ready(function(){
	// run();
// });

	// function run() {
		// console.log("Currently running image request");
		// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
		// console.log("Downloading file");
	// }
    
	// function gotFS(fileSystem) {
	// console.log("filesystem got");
	// window.fileSystem = fileSystem;
	// fileSystem.root.getDirectory(window.appRootDirName, {
		// create : true,
		// exclusive : false
	// }, dirReady, fail);
	// }
	
	// function dirReady(entry) {
	// window.appRootDir = entry;
	// console.log(window.appRootDir);
	// console.log("application dir is ready");
	// }
	
	// function fail() {
	// console.log("failed to get filesystem");
	// }
	
	// downloadFile = function(uri){
	// var fileTransfer = new FileTransfer();
	// console.log(window.appRootDir);
	// var filePath = window.appRootDir.fullPath + "/google.png";
	// console.log("Attempting download");
	// fileTransfer.download(
	    // uri,
	    // filePath,
	    // function(entry) {
	        // alert("download complete: " + entry.fullPath);
	    // },
	    // function(error) {
	        // alert("download error" + error.source);
	    // });
	// }