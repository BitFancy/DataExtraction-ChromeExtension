chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fillSearchBox') {
        console.log('Received message to fill search box with:', message.query);

        const searchBox = document.querySelector('input[type="search"]');
        
        if (searchBox) {
            searchBox.value = message.query;
            const event = new Event('input', { bubbles: true });
            searchBox.dispatchEvent(event);
            console.log(`Input ${message.query} in Search box`);
        } else {
            console.log("Search box not found");
        }
        
        const searchButton = document.querySelector('#__next > div > div.SiteWrapper__ContentContainer-sc-1yhtphq-1.bcyrbg > div > div.common__Content-sc-sr8ojx-4.eWoAld > div > div.SearchBox__InputContainer-sc-1s18m08-1.ffkfsb > button')

        if (searchButton) {
            console.log("Find search button");
            searchButton.click();
        } else {
            console.log("Not found search button");
        }

        startExtraction();

    }
});

function startExtraction() {
    console.log("Start new function");
    // var searchResults = document.querySelector('.ant-table-tbody').getElementsByClassName('ant-table-row');

    const podcast = document.querySelector('.ant-table-tbody').getElementsByClassName('ant-table-row ant-table-row-level-0')[0].querySelector('.PodcastTable__TitleContainer-sc-akciqv-3.eeuJfw');
    if (podcast) {
        podcast.click();
    } else {
        console.log("Not found element");
    }
    // for (let i = 0; i < searchResults.length; i++) {
    //     const element = array[i];
    //     const podcast = element.querySelector('.PodcastTable__TitleContainer-sc-akciqv-3');

    //     if (podcast) {
    //         podcast.click();
    //     } else {
    //         console.log("Not found element");
    //     }
    // }
}