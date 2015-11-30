var PePPA = PePPA || {};

PePPA.SignInController = function () {

    this.$signInPage = null;
    this.$btnSubmit = null;
    this.$txtEmailAddress = null;
    this.$txtPassword = null;
    this.$chkKeepSignedIn = null;
    this.$ctnErr = null;
    this.mainMenuPageId = null;
};

PePPA.SignInController.prototype.init = function () {
    this.$signInPage = $("#login");
    this.mainMenuPageId = "#index";
    this.$btnSubmit = $("#signin-button", this.$signInPage);
    this.$ctnErr = $("#ctn-err", this.$signInPage);
    this.$txtEmailAddress = $("#txt-email-address", this.$signInPage);
    this.$txtPassword = $("#txt-password", this.$signInPage);
//    this.$chkKeepSignedIn = $("#chk-keep-signed-in", this.$signInPage);
};

PePPA.SignInController.prototype.emailAddressIsValid = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

PePPA.SignInController.prototype.resetSignInForm = function () {

    var invisibleStyle = "bi-invisible",
        invalidInputStyle = "bi-invalid-input";

    this.$ctnErr.html("");
    this.$ctnErr.removeClass().addClass(invisibleStyle);
    this.$txtEmailAddress.removeClass(invalidInputStyle);
    this.$txtPassword.removeClass(invalidInputStyle);
    this.$txtEmailAddress.val("");
    this.$txtPassword.val("");
//    this.$chkKeepSignedIn.prop("checked", false);
};

PePPA.SignInController.prototype.onSignInCommand = function () {

    var me = this,
        emailAddress = me.$txtEmailAddress.val().trim(),
        password = me.$txtPassword.val().trim(),
        invalidInput = false,
        invisibleStyle = "bi-invisible",
        invalidInputStyle = "bi-invalid-input";

    // Reset styles.
    me.$ctnErr.removeClass().addClass(invisibleStyle);
    me.$txtEmailAddress.removeClass(invalidInputStyle);
    me.$txtPassword.removeClass(invalidInputStyle);

    // Flag each invalid field.
    if (emailAddress.length === 0) {
        me.$txtEmailAddress.addClass(invalidInputStyle);
        invalidInput = true;
    }
    if (password.length === 0) {
        me.$txtPassword.addClass(invalidInputStyle);
        invalidInput = true;
    }

    // Make sure that all the required fields have values.
    if (invalidInput) {
        me.$ctnErr.html("<p>Please enter all the required fields.</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        return;
    }

    if (!me.emailAddressIsValid(emailAddress)) {
        me.$ctnErr.html("<p>Please enter a valid email address.</p>");
        me.$ctnErr.addClass("bi-ctn-err").slideDown();
        me.$txtEmailAddress.addClass(invalidInputStyle);
        return;
    }

    $.mobile.loading("show");

    $.ajax({
        type: 'POST',
        url: PePPA.Settings.signInUrl,
        data: "email=" + emailAddress + "&password=" + password,
        success: function (resp) {

            $.mobile.loading("hide");

            if (resp.success === true) {
                // Create session. 
                var today = new Date();
                var expirationDate = new Date();
                expirationDate.setTime(today.getTime() + PePPA.Settings.sessionTimeoutInMSec);
				console.log(expirationDate);
				console.log("Session Data Saving");
                PePPA.Session.getInstance().set({
                    userProfileModel: resp.extras.userProfileModel,
                    sessionId: resp.extras.sessionId,
                    expirationDate: expirationDate,
                });
				window.localStorage.setItem("points", 200);
				console.log("Session Data Saved");
				console.log(PePPA.Session.getInstance().get());
				
                // Go to main menu.
                $.mobile.navigate(me.mainMenuPageId);
				alert('Completed log in!');
                return;
            }
			else {
					console.log("Error occurred");
                    switch (resp.extras.msg) {
                        case PePPA.ApiMessages.DB_ERROR:
                            me.$ctnErr.html("<p>Sorry! We couldn't log you in at this moment, please try again later.</p>");
                            me.$ctnErr.addClass("bi-ctn-err").slideDown();
                            break;
                        case PePPA.ApiMessages.INVALID_PWD:
                        case PePPA.ApiMessages.EMAIL_NOT_FOUND:
							console.log("Incorrect password or email");
                            me.$ctnErr.html("<p>You have entered an incorrect username or password.  Please try again.</p>");
                            me.$ctnErr.addClass("bi-ctn-err").slideDown();
                            me.$txtEmailAddress.addClass(invalidInputStyle);
                            break;
                    }
            }
        },
        error: function (e) {
            $.mobile.loading("hide");
            console.log(e.message);
            me.$ctnErr.html("<p><p>Sorry! We couldn't log you in at this moment, please try again later.</p>");
            me.$ctnErr.addClass("bi-ctn-err").slideDown();
        }
    });
};