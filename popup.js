const notify = document.getElementById("notify-button");

notify.addEventListener("click", () => {
    chrome.runtime.sendMessage("", {
        type: "notification",
        message: "Hi, there",
    });
});
