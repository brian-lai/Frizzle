var storage = {
	save : function(key, value) {
		var obj = {};
		obj[key] = value;
		preload.storage.set(obj);
	},

	get : function(key, fn) {
		preload.storage.get(key, function(value) {
			fn(value);
		});
	},

	clear : function(key) {
		preload.storage.remove(key);
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
