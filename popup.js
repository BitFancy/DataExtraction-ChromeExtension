document.addEventListener('DOMContentLoaded', () => {
  const actionButton = document.getElementById('actionStartButton');

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    var statusElement = document.getElementById('status');
    var baseUrl = currentTab.url;

    if (baseUrl.includes('https://rephonic.com/home')) {
        statusElement.textContent = "Good, You can start now !";
        statusElement.style.fontSize = "20px";
        actionButton.disabled = false;
        actionButton.classList.add("activeButton");
        actionButton.style.backgroundColor = "#007BFF";
        actionButton.style.color = "white";
        actionButton.style.cursor = "pointer";
        actionButton.addEventListener('mouseenter', (event) => {
          event.target.style.backgroundColor = "#0056b3";
      });
        actionButton.addEventListener('mouseleave', (event) => {
          event.target.style.backgroundColor = "#007BFF";
        });
    } else {
      statusElement.textContent = "Please go to https://rephonic.com/home";
      statusElement.style.fontSize = "20px";
      actionButton.disabled = true;
      actionButton.classList.remove("activeButton");
      actionButton.style.backgroundColor = "grey";
      actionButton.style.color = "white";
      actionButton.style.cursor = "not-allowed";
    }
  });
  
  const form = document.getElementById('searchForm');
  
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const query = document.getElementById('searchQuery').value.trim();

      chrome.runtime.sendMessage({ action: 'injectQuery', query: query });
      
  });

})