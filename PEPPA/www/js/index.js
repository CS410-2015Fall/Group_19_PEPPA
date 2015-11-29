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
//  function initialize(){
//    this.bindEvents();
// };
// // Bind Event Listeners
// //
// // Bind any events that are required on startup. Common events are:
// // 'load', 'deviceready', 'offline', and 'online'.
// function bindEvents(){
// document.addEventListener('deviceready', this.onDeviceReady, false);
// };
// // deviceready Event Handler
// //
// // The scope of 'this' is the event. In order to call the 'receivedEvent'
// // function, we must explicitly call 'app.receivedEvent(...);'
// function onDeviceReady() {
//     // app.receivedEvent('deviceready');
//     backb();
// };

$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});

 function onDeviceReady(){
    // $(window).unbind();
    // $(window).bind();
    $("#lec").show();
    $("#ley").show();
    $("#leh").hide();
    $("#rec").show();
    $("#rey").show();
    $("#reh").hide();
    $("#pmh").hide();
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

signupController = new PePPA.SignUpController();
signinController = new PePPA.SignInController();

$(document).delegate("#index", "pagebeforeshow", function() {
	// console.log(PePPA.Session.getInstance().get());
});

$(document).delegate("#signup", "pagebeforeshow", function () {
    // Reset the signup form.
    signupController.resetSignUpForm();
});

$(document).delegate("#signup", "pagebeforecreate", function () {

    signupController.init();
	console.log('Sign up initialized');
    signupController.$btnSubmit.off("tap").on("tap", function () {
		console.log('Sign up submitting');
        signupController.onSignupCommand();
		console.log('Finished');
    });

});

$(document).delegate("#login", "pagebeforeshow", function () {
    // Reset the signup form.
    signinController.resetSignInForm();
});


$(document).delegate("#login", "pagebeforecreate", function () {

    signinController.init();
	console.log("Sign in initialize");
    signinController.$btnSubmit.off("tap").on("tap", function () {
		console.log('Attempting to sign in');
        signinController.onSignInCommand();
		console.log("All done");
    });
});