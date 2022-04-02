// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('%c Yay, Extension is installed!', 'background: green; color:white');
});