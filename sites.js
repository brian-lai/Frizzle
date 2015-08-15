var sites = {};

sites.white = {
	list : [
		"http://google.com",
	],

	get : function() {
		return list;
	},

	random : function() {
		var max  = sites.white.get().length;
		var rand = Math.random() * max;
		var item = Math.floor(rand);
		return sites.white.get()[item];
	},
};
