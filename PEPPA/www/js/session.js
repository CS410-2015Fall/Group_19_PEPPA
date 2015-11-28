var PePPA = PePPA || {};

PePPA.Session = (function () {
    var instance;

    function init() {

        var sessionIdKey = "peppa-session";

        return {
            // Public methods and variables.
            set: function (sessionData) {
                window.localStorage.setItem(sessionIdKey, JSON.stringify(sessionData));
            },

            get: function () {

                var result = null;

                try {
                    result = JSON.parse(window.localStorage.getItem(sessionIdKey));
                } catch(e){
				console.log("Data could not be retrieved");}

                return result;
            },
			
			clear: function () {
			
				window.localStorage.clear();
				console.log("Cleared local data");
			}	
        };
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
}());