chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'injectQuery') {
        console.log('Received message to inject query:', message.query);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'fillSearchBox', query: message.query });

            // Use this code if you get an unknown error !!!
            
            // if (tabs.length === 0) {
            //     console.log("No active tab found");
            //     return;
            // }

            // chrome.tabs.sendMessage(tabs[0].id, { action: 'fillSearchBox', query: message.query }, (response) => {
            //     if (chrome.runtime.lastError) {
            //         console.error('Error sending message to content script:', chrome.runtime.lastError.message);
            //     } else {
            //         console.log('Message sent to content script successfully:', response);
            //     }
            // });

        });
    }
});