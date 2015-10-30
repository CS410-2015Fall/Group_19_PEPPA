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
    this.$btnSubmit = $("#btn-submit", this.$login);
    this.$ctnErr = $("#ctn-err", this.$login);
    this.$txtEmailAddress = $("#txt-email", this.$signInPage);
    this.$txtPassword = $("#txt-pass", this.$signInPage);
    this.$chkKeepSignedIn = $("#chk-keep-signed-in", this.$signInPage);
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
    this.$chkKeepSignedIn.prop("checked", false);
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

                PePPA.Session.getInstance().set({
                    userProfileModel: resp.extras.userProfileModel,
                    sessionId: resp.extras.sessionId,
                    expirationDate: expirationDate,
                    keepSignedIn:me.$chkKeepSignedIn.is(":checked")
                });
                // Go to main menu.
                $.mobile.navigate(me.mainMenuPageId);
                return;
            } else {
                if (resp.extras.msg) {
                    switch (resp.extras.msg) {
                        case PePPA.ApiMessages.DB_ERROR:
                        // TODO: Use a friendlier error message below.
                            me.$ctnErr.html("<p>PePPA could not log you on.  Please try again in a few minutes.</p>");
                            me.$ctnErr.addClass("bi-ctn-err").slideDown();
                            break;
                        case PePPA.ApiMessages.INVALID_PWD:
                        case PePPA.ApiMessages.EMAIL_NOT_FOUND:
                            me.$ctnErr.html("<p>Incorrect username or password.  Please try again.</p>");
                            me.$ctnErr.addClass("bi-ctn-err").slideDown();
                            me.$txtEmailAddress
.addClass(invalidInputStyle);
                            break;
                    }
                }
            }
        },
        error: function (e) {
            $.mobile.loading("hide");
            console.log(e.message);
            // TODO: Use a friendlier error message below.
            me.$ctnErr.html("<p>PePPA could not log you on.  Please try again in a few minutes.</p>");
            me.$ctnErr.addClass("bi-ctn-err").slideDown();
        }
    });
};