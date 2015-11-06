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
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
	},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
//		navigator.notification.alert("Device Ready");
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(document).on("mobileinit", function (event, ui) {
    $.mobile.defaultPageTransition = "slide";
});

app.signupController = new PePPA.SignUpController();
app.signinController = new PePPA.SignInController();

$(document).delegate("#index", "pagebeforeshow", function() {
	console.log(PePPA.Session.getInstance().get());
});

$(document).delegate("#signup", "pagebeforeshow", function () {
    // Reset the signup form.
    app.signupController.resetSignUpForm();
});

$(document).delegate("#signup", "pagebeforecreate", function () {

    app.signupController.init();
	console.log('Sign up initialized');
    app.signupController.$btnSubmit.off("tap").on("tap", function () {
		console.log('Sign up submitting');
        app.signupController.onSignupCommand();
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
