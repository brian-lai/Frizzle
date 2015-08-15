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

	basicButton : function() {
		console.log("Buttons");
		var button1 = {
			title : "Dismiss",
		};
		var button2 = {
			title : "Explore",
		};
		chrome.notifications.create("", {
			type    : "basic",
			title   : "Working!",
			message : "Hello World!",
			iconUrl : "icon.png",
			buttons : [button1, button2],
		});
	},

	custom : function(config) {
		chrome.notifications.create("", config);
	},
};

message.action = {
	redirect : function(url) {
		console.log(url);
	},
};
