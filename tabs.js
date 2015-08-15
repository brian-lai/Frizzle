var tab = {
	query : function(settings, fn) {
		fn = fn || function(){};
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, settings, fn);
		});
	},

	queryAll  : function(settings, fn) {
		fn = fn || function(){};
		chrome.tabs.query({}, function(tabs) {
			for (var i=0; i<tabs.length; ++i) {
				chrome.tabs.sendMessage(tabs[i].id, settings, fn);
			}
		});
	}
};
