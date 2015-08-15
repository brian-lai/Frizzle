var path = {};
path.url = {
    get : function() {
        return window.location.hostname;
    },

    compare : function(url) {
        return url == path.url.get();   
    }, 
};
