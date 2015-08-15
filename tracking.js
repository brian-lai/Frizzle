var timeStart;

window.onload = function() {
    timeStart = new Date();
}

window.onbeforeunload = function() {
    var timeSpent = new Date() - timeStart;
    storage.increment(path.storageKey.duration(), timeSpent);
}

storage.increment(path.storageKey.visits(), 1);
