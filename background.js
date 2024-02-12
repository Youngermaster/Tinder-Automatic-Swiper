chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "redirectCurrent") {
    redirectToVideo(request.tab);
  } else if (request.action === "openInNewTab") {
    openInNewTab(request.tab);
  }
  return true;
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "loading") {
    chrome.storage.local.get("autoRedirect", function (data) {
      // Make sure to check if data is not undefined
      if (data && data.autoRedirect) {
        redirectToVideo(tab);
      }
    });
  }
});

function redirectToVideo(tab) {
  if (tab.url.includes("youtube.com/shorts/")) {
    const newUrl = tab.url.replace(
      "youtube.com/shorts/",
      "youtube.com/watch?v="
    );
    chrome.tabs.update(tab.id, { url: newUrl });
  }
}

function openInNewTab(tab) {
  if (tab.url.includes("youtube.com/shorts/")) {
    const newUrl = tab.url.replace(
      "youtube.com/shorts/",
      "youtube.com/watch?v="
    );
    chrome.tabs.create({ url: newUrl });
  }
}
