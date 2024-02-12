// Listen for changes in Chrome Storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === "autoSwipe") {
      // Find all tabs with Tinder open
      chrome.tabs.query({ url: "https://www.tinder.com/*" }, function (tabs) {
        tabs.forEach((tab) => {
          if (newValue) {
            // If autoSwipe is enabled, get swipeDelay and start auto-swipe
            chrome.storage.local.get(["swipeDelay"], function (data) {
              let delay = data.swipeDelay || 1; // Default to 1 second if undefined
              chrome.tabs.sendMessage(tab.id, {
                action: "startAutoSwipe",
                delay: delay,
              });
            });
          } else {
            // If autoSwipe is disabled, stop auto-swipe
            chrome.tabs.sendMessage(tab.id, { action: "stopAutoSwipe" });
          }
        });
      });
    }
  }
});

// This is just a conceptual example and might not directly apply
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "checkAutoSwipeStatus") {
    chrome.storage.local.get(["autoSwipe", "swipeDelay"], function (data) {
      // Check if sender (e.g., tab) still exists or is active before sending response
      if (sender.tab && sender.tab.id) {
        chrome.tabs.get(sender.tab.id, function (tab) {
          if (chrome.runtime.lastError) {
            // Likely the tab has been closed or navigated away
            console.log(
              "Cannot send response, the sender tab is no longer available."
            );
          } else {
            // Safe to send the response
            sendResponse({
              autoSwipe: data.autoSwipe,
              swipeDelay: data.swipeDelay,
            });
          }
        });
      } else {
        // Handle other senders like popups which might be closed
        // Potentially log or handle differently since you cannot easily check if a popup is open
      }
    });
    return true; // Keep this to indicate async response but ensure to handle scenarios where sender might be gone
  }
});
