// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });


// chrome.tabs.executeScript(null, {file: "my_scripts.js"});



chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: "jquery.js"}, function(result) {
        chrome.tabs.executeScript({file: "content.js"}, function(result) {
        });
    });
});