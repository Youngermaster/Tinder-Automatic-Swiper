# Tinder Automatic Swiper

![Icon128.png](images/icon128.png)

A simple Chrome extension to automate the process of swiping right on Tinder, designed to enhance your Tinder experience by automating likes.

## Features

- **Auto Swipe**: Automatically swipe right on profiles, saving you time and effort.
- **Customizable Delay**: Set a delay time in seconds between swipes to mimic human behavior and avoid detection.
- **Easy Toggle**: Activate or deactivate auto swiping with just a checkbox.

## Installation

1. Clone or download this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right corner.
4. Click "Load unpacked" and select the directory where you cloned or extracted the extension.
5. The extension icon should now appear in your Chrome toolbar, ready for use.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. To activate auto swiping, check the "Activate Auto Swipe" checkbox.
3. Set your desired delay time in seconds in the "Delay Time" input field.
4. Click "Save Settings" to apply your changes.
5. Navigate to Tinder in your browser, and the extension will start to automatically swipe right based on your settings.

## Permissions Explained

For clarity and transparency, here's a brief justification for each of the permissions required by this extension:

### Permissions

- **tabs**: Needed to perform operations with browser tabs, such as detecting the Tinder tab to start auto swiping.
- **activeTab**: Allows the extension to access and interact with the content of the current active tab, crucial for identifying and clicking the "Like" button on Tinder.
- **storage**: Utilized to save and retrieve the user's settings (auto swipe activation and delay time) locally in the browser.

### Host Permissions

- **https://www.tinder.com/***: This permission allows the extension to interact with Tinder's website, enabling it to automate swipes.

## Disclaimer

This extension is intended for personal use and as a demonstration of Chrome extension capabilities. Please be mindful of Tinder's terms of service regarding automation and use this extension responsibly.

## License

Distributed under the MIT License. See `LICENSE` for more information.
