# Rephonic Lead Generator

![Rephonic Lead Generator Logo](logo.png)

## Overview

**Rephonic Lead Generator** is a Chrome extension designed to assist users in extracting full names and company names of podcast guests from the Rephonic website. This project leverages a background script to facilitate the automation of fetching and processing data, which is subsequently handled by an integrated backend server using Flask and OpenAI's GPT-4 model.

## Features

- **Automatic Data Extraction**: Extracts and processes podcast guest information directly from Rephonic.
- **UI Integration**: A user-friendly popup interface that guides users through the lead generation process.
- **Backend Processing**: Uses Flask and OpenAI to analyze and store data.

## Installation

### Prerequisites

1. **Google Chrome**: Ensure you have the latest version of Google Chrome installed.
2. **Python**: Ensure you have Python 3.x installed on your system.
3. **Node.js & npm**: Ensure you have Node.js and npm installed.

### Steps

1. **Clone the Repository**

    ```sh
    git clone https://github.com/hi-tech-AI/chrome-extension-data-extraction.git
    cd chrome-extension-data-extraction
    ```

2. **Install Backend Dependencies**

    ```sh
    pip install -r requirements.txt
    ```

3. **Load Extension in Chrome**

    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" in the top right corner.
    - Click "Load unpacked" and select the directory containing the cloned repository.

4. **Start the Backend Server**

    ```sh
    python backend.py
    ```

## Usage

1. **Navigate to Rephonic Website**

    Ensure you are on `https://rephonic.com/home`.

2. **Open the Extension Popup**

    Click the extension icon in the Chrome toolbar to open the popup.

3. **Enter Search Query**

    Use the form provided in the popup to enter your search query.

4. **Initiate Data Extraction**

    Click the "Start" button when prompted. The extension will start extracting data automatically.

5. **Check Results**

    The extracted data will be saved to `final_result.xlsx` in the repository directory.

## File Structure

```plaintext
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
├── backend.py
├── requirements.txt
├── logo.png
├── README.md
└── final_result.xlsx
```

- **manifest.json**: Configuration file for the Chrome extension.
- **popup.html**: HTML file for the extension's popup interface.
- **popup.js**: JavaScript file handling the popup logic.
- **content.js**: Content script handling interactions with the Rephonic webpage.
- **background.js**: Service worker script for managing background tasks.
- **backend.py**: Flask server for processing extracted data.
- **requirements.txt**: List of Python dependencies.
- **logo.png**: Logo used for the extension icon.
- **final_result.xlsx**: Output file where extracted data is stored.

## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## Note

Ensure that you have the necessary permissions and consents from the website owner before running automated scripts that interact with their site.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
