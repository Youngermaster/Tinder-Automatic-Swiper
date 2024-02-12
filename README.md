# Tinder Ice Breaker Automation

[![Icon128.png](images/icon128.png)](https://chrome.google.com/webstore/detail/youtube-short-redirector/mnijpcchboaebolejillacjcmngnhppg/)

A simple Chrome extension to convert YouTube short URLs to the full video URLs and optionally auto-redirect. The extensions is deployed [here](https://chrome.google.com/webstore/detail/youtube-short-redirector/mnijpcchboaebolejillacjcmngnhppg/).

## Features

- **Instant Redirect**: With just a click, convert the YouTube short URL to its full video URL and stay on the same tab.
- **Open in New Tab**: Want to keep the short URL page and also view the full video? Just use this feature to open the full video URL in a new tab.
- **Auto-Redirect**: Don't want to click every time? Just toggle on the Auto-Redirect feature, and every time you visit a YouTube short URL, the extension will automatically redirect you to the full video URL.

## Installation

1. Clone or download this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (usually a toggle switch in the top right corner).
4. Click "Load unpacked" and select the directory where you cloned or extracted the extension.
5. The extension icon should now appear in your Chrome toolbar.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. For a one-time redirect, use the "Redirect Now" button.
3. To open the full video URL in a new tab, use the "Open in New Tab" button.
4. To enable or disable auto-redirect, use the "Auto redirect" toggle.

## Colors

- Red: `#d72323`
- Off-white: `#f5eded`
- Gray: `#3e3636`
- Black: `#000000`

## License

Apache License. See `LICENSE` for more information.

## Permissions Explained

For clarity and transparency, here's a brief justification for each of the permissions and host permissions required by this extension:

### Permissions:

1. **tabs**:

   - **Purpose**: To interact with browser tabs. This enables operations like querying for currently open tabs, opening new ones, or updating existing tabs.
   - **Usage in Extension**: Enables the functionality to redirect from a YouTube short video URL to its standard format and to open the transformed URL in a new tab.

2. **activeTab**:

   - **Purpose**: Provides temporary access to the current active tab when the user invokes the extension.
   - **Usage in Extension**: Determines if the current URL is a YouTube short URL and performs the redirection operation.

3. **storage**:
   - **Purpose**: Allows the extension to use the Chrome `storage` API to save and retrieve data.
   - **Usage in Extension**: Saves and retrieves the user's "Auto redirect" choice, ensuring the extension remembers user preferences.

### Host Permissions:

1. **https://www.youtube.com/***:
   - **Purpose**: Grants the extension access to pages under the `youtube.com` domain.
   - **Usage in Extension**: Ensures the extension can detect and act on YouTube short URLs, transforming them to their corresponding standard format.
