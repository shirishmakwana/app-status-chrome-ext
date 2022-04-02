// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('%c Yay, Extension is installed!', 'background: green; color:white');
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
