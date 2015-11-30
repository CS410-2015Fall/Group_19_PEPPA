/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
	}
};
// Bind Event Listeners
//
// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.
function bindEvents(){
document.addEventListener('deviceready', this.onDeviceReady, false);
};
// deviceready Event Handler
//
// The scope of 'this' is the event. In order to call the 'receivedEvent'
// function, we must explicitly call 'app.receivedEvent(...);'
function onDeviceReady() {
    // app.receivedEvent('deviceready');
    backb();
};

document.addEventListener("deviceready", backb, false);

function backb(){
    document.addEventListener("backbutton", function(){
        if($.mobile.activePage.is('#index')){
            navigator.app.exitApp();
        }
        else {
            navigator.app.backHistory();
        }
    });
};

$(document).on("mobileinit", function (event, ui) {
    $.mobile.defaultPageTransition = "slide";
});

app.signupController = new PePPA.SignUpController();
app.signinController = new PePPA.SignInController();
app.signoutController = new PePPA.SignOutController();
/*
$(document).on("pagecontainerbeforechange", function (event, ui) {
if (typeof ui.toPage !== "object") return;
switch (ui.toPage.attr("id")) {
    case "index":
	var session = PePPA.Session.getInstance().get(),
	today = new Date();
	if (session && session.keepSignedIn && new Date(session.expirationDate).getTime() > today.getTime()) {
	alert("Logged in as " + session.userProfileModel.firstName);
	}
	}
>>>>>>> master
});
*/

$(document).delegate("#signup", "pagebeforeshow", function () {
    // Reset the signup form.
    signupController.resetSignUpForm();
});

$(document).delegate("#signup", "pagebeforecreate", function () {

    app.signupController.init();
	console.log('Sign up initialized');
    app.signupController.$btnSubmit.off("tap").on("tap", function () {
		console.log('Sign up submitting');
        signupController.onSignupCommand();
		console.log('Finished');
    });

});

$(document).delegate("#login", "pagebeforeshow", function () {
    // Reset the signup form.
    app.signinController.resetSignInForm();
});


$(document).delegate("#login", "pagebeforecreate", function () {

    app.signinController.init();
	console.log("Sign in initialize");
    app.signinController.$btnSubmit.off("tap").on("tap", function () {
		console.log('Attempting to sign in');
        app.signinController.onSignInCommand();
		console.log("All done");
    });
});

$(document).delegate("#logout", "pagebeforeshow", function () {
    app.signoutController.init();
	console.log("Sign out initialize");
	console.log('Attempting to sign out');
    app.signoutController.logout();
	console.log("All done");
    });

$(document).delegate("#index", "pagebeforeshow", function () {
console.log("Checking for session data");
var session = PePPA.Session.getInstance().get();
var today = new Date();
if (session && new Date(session.expirationDate).getTime() > today.getTime()) {
	console.log("Session is valid");
	document.getElementById("l-in").style.display = "none";
	document.getElementById("l-out").style.display = "inline";
	}
	else if (session == null){
	console.log("Session is not valid");
	document.getElementById("l-out").style.display = "none";
	document.getElementById("l-in").style.display = "inline";	
	}	
});