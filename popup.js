document.getElementById("redirect").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentTab = tabs[0];
    chrome.runtime.sendMessage({ action: "redirectCurrent", tab: currentTab });
  });
});

document.getElementById("openInTab").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentTab = tabs[0];
    chrome.runtime.sendMessage({ action: "openInNewTab", tab: currentTab });
  });
});

let checkbox = document.getElementById("autoRedirect");
checkbox.addEventListener("change", function () {
  chrome.storage.local.set({ autoRedirect: checkbox.checked });
});

// Fetching the saved preference when popup is opened
chrome.storage.local.get("autoRedirect", function (data) {
  // Check if data and the autoRedirect key are not undefined
  if (data && typeof data.autoRedirect !== "undefined") {
    checkbox.checked = data.autoRedirect;
  }
});
