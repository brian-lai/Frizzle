var request = {};

request.handler = function(request, sender, sendResponse) {
	console.log(request.type);
	if (request.type == "notification") {
		message.create.basicButton();
		sendResponse({message: "Response"});
	}
};

chrome.extension.onMessage.addListener(request.handler);