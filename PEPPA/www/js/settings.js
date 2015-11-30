var PePPA = PePPA || {};
PePPA.Settings = PePPA.Settings || {};
PePPA.Settings.signUpUrl = "http://peppa-server.herokuapp.com/api/registration";
PePPA.Settings.signInUrl = "http://peppa-server.herokuapp.com/api/logon";
PePPA.Settings.purchaseURL = "http://peppa-server.herokuapp.com/api/purchase";
PePPA.Settings.sessionIdKey = "peppa-session";
PePPA.Settings.sessionTimeoutInMSec = 86400000 * 30;   // 30 days.