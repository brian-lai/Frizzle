var path = {};
path.url = {
    get : function() {
        return window.location.hostname;
    },

    compare : function(url) {
        return url == path.url.get();   
    }, 
};

path.storageKey = {
    visits : function() {
        return path.url.get() + "_visits";
    },

    duration : function() {
        return path.url.get() + "_duration"; 
    },
};

path.redirect = function(url) {
    window.open(url, "_blank");
}
