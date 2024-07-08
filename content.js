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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startExtraction() {
    console.log("Start new function");
    
    await delay(3000);

    var searchResults = document.querySelector('.ant-table-tbody').getElementsByClassName('ant-table-row ant-table-row-level-0');

    (async () => {
        for (let element of searchResults) {
            await delay(1000);

            const podcast = element.querySelector('.PodcastTable__TitleContainer-sc-akciqv-3.eeuJfw');
            
            if (podcast) {
                podcast.click();
                console.log("Clicked podcast");
            } else {
                console.log("Not found podcast");
            }
            
            await delay(3000);
            const episodeButton = document.querySelector('.ant-drawer-body').querySelectorAll('.ant-btn.ant-btn-primary')[0];
            if (episodeButton) {
                episodeButton.click();
                console.log("Clicked episodeButton");
            } else {
                console.log("Not found episodeButton");        
            }
        
            await delay(1000);
        
            const moreViewButton = document.querySelectorAll('.ant-drawer-body')[1].querySelectorAll('.common__BlueLink-sc-sr8ojx-8.blsWrk')[0].click();
        
            let fullText = "";
        
            if (moreViewButton) {
                moreViewButton.click();
                console.log("Found more view button");
                fullText = document.querySelectorAll('.ant-drawer-body')[1].querySelectorAll('.EpisodePlayer__Notes-sc-tg2xvn-4.efhJdH')[0];
                console.log(`Full content : ${fullText.textContent}`);
            } else {
                console.log("Not found more view button");
                fullText = document.querySelectorAll('.ant-drawer-body')[1].querySelectorAll('.EpisodePlayer__Notes-sc-tg2xvn-4.efhJdH')[0];
                console.log(`Full content : ${fullText.textContent}`);
            }
        
            await delay(1000);
        
            const response = await fetch('https://skilled-albacore-indirectly.ngrok-free.app/get-fulltext', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "text": fullText.textContent }),
              })
            
              if(response.ok) {
                const data = await response.json()
                console.log("data", data)
              } else {
                console.log(response)
              }
        }
    })
}