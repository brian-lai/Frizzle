var request = {};

request.handler = function(request, sender, sendResponse) {
	console.log(request.type);
	if (request.type == "notification") {
		message.create.clickable(request.url);
		sendResponse({message: "Response"});
	}
};

chrome.extension.onMessage.addListener(request.handler);
chrome.notifications.onButtonClicked.addListener(message.click.body);
chrome.notifications.onButtonClicked.addListener(message.click.button);
