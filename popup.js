console.log("Popup script loaded");
document.addEventListener("DOMContentLoaded", function () {
  const autoSwipeCheckbox = document.getElementById("autoSwipe");
  const swipeDelayInput = document.getElementById("swipeDelay");

  // Load saved settings on popup open
  chrome.storage.local.get(["autoSwipe", "swipeDelay"], function (data) {
    if (data.autoSwipe !== undefined) {
      autoSwipeCheckbox.checked = data.autoSwipe;
    }
    if (data.swipeDelay !== undefined) {
      swipeDelayInput.value = data.swipeDelay;
    }
  });

  // Save autoSwipe setting and send message to content script
  autoSwipeCheckbox.addEventListener("change", function () {
    const autoSwipe = autoSwipeCheckbox.checked;
    const swipeDelay = parseInt(swipeDelayInput.value, 10) || 1; // Default to 1 second if input is invalid

    // Save settings
    chrome.storage.local.set({ autoSwipe: autoSwipe, swipeDelay: swipeDelay });

    // Send message to content script to start/stop auto swipe
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (autoSwipe) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "startAutoSwipe",
          delay: swipeDelay,
        });
      } else {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stopAutoSwipe" });
      }
    });
  });

  // Update swipe delay setting
  swipeDelayInput.addEventListener("change", function () {
    const swipeDelay = parseInt(swipeDelayInput.value, 10) || 1; // Default to 1 second if input is invalid
    chrome.storage.local.set({ swipeDelay: swipeDelay });

    // If autoSwipe is enabled, update the interval
    if (autoSwipeCheckbox.checked) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "startAutoSwipe",
          delay: swipeDelay,
        });
      });
    }
  });
});
