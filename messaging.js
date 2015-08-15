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

	clickable : function(url) {
		var button1 = {
			title : "Dismiss",
		};
		chrome.notifications.create("clickable", {
			type        : "basic",
			title       : "Working!",
			message     : url || "",
			iconUrl     : "icon.png",
			buttons     : [button1],
			isClickable : true,
		});
	},
};

message.action = {
	redirect : function(url) {
		console.log(url);
	},
};

message.click = {
	body : function(id) {
		if (id == "clickable") {
			var url = sites.white.random();
			path.redirect(url);
		}
	},

	button : function(id) {
		if (id == "dismiss") {
			chrome.notifications.clear;
		}
	},
};
