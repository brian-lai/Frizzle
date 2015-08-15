chrome.runtime.sendMessage(
	{type : "notification"}, function(response) {
    console.log(response);
});

// message.create.basicButton();
