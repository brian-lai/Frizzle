var storage = {
	save : function(key, value) {
		var obj = {};
		obj[key] = value;
		chrome.storage.local.set(obj);
	},

	get : function(key, fn) {
		chrome.storage.local.get(key, function(value) {
			fn(value);
		});
	},

	clear : function(key) {
		chrome.storage.local.remove(key);
	},

	increment : function(key, value) {
		storage.get(key, function(obj) {
			var newValue = obj[key] || 0;
			value = value || 1;
			newValue += value;
			storage.save(key, newValue);
		});
	},
};
