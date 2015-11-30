var PePPA = PePPA || {};

PePPA.SignOutController = function () {

    this.mainMenuPageId = null;
};

PePPA.SignOutController.prototype.init = function () {
    this.mainMenuPageId = "#index";
};

PePPA.SignOutController.prototype.logout = function () {
	PePPA.Session.getInstance().clear();
	$.mobile.navigate("index.html");
	return;
};