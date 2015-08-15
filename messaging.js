var message = {};

message.create = {
	basic : function() {
		chrome.notifications.create("", {
			type    : "basic",
			title   : "Working!",
			message : "Hello World!",
			iconUrl : "icon.png",
		});
	},

	custom : function(config) {
		chrome.notifications.create("", config);
	},
};
