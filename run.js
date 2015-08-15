var message = {
	type : "notification",
	url  : path.url.get(),
};

tab.send(message, function(response) {
    console.log(response);
});

// message.create.clickable();
