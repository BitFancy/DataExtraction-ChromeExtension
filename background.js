chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'injectQuery') {
        console.log('Received message to inject query:', message.query);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'fillSearchBox', query: message.query });
        });
    }
});