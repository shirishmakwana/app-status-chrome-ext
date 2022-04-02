// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('%c Yay, Extension is installed!', 'background: green; color:white');

    // create alarm after extension is installed / upgraded
    chrome.alarms.create("startRequest", { periodInMinutes: 4 });
    startRequest();
});

chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
        notify(data.message);
    }
});

const notify = message => {
    return chrome.notifications.create('', {
        type: 'basic',
        title: 'Notify!',
        message: message || 'Notify!',
        iconUrl: './images/icon128.png',
    });
};

chrome.alarms.onAlarm.addListener((alarm) => {
    startRequest();
});

async function startRequest() {
    const response = await fetch("https://api.quotable.io/random");
    const newData = await response.json();
    const data = `${newData.content} —${newData.author}`;
    console.log(data);

    var options = {
        title: "Random Quotes",
        message: data,
        iconUrl: "/images/icon128.png",
        type: "basic",
    };
    chrome.notifications.create("", options);
}
