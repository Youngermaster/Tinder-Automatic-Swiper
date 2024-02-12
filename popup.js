// This function updates the UI with stored values
function updateUIWithStoredValues() {
  chrome.storage.local.get(["autoSwipe", "delayTime"], function (result) {
    console.log(result); // Log the result to see what's fetched

    if (result.autoSwipe !== undefined) {
      // Check if autoSwipe has a stored value
      document.getElementById("autoSwipe").checked = result.autoSwipe;
    }

    if (result.delayTime !== undefined) {
      // Check if delayTime has a stored value
      document.getElementById("delayTime").value = result.delayTime;
    }
  });
}

// Save settings when the "Save Settings" button is clicked
document.getElementById("saveSettings").addEventListener("click", () => {
  const autoSwipe = document.getElementById("autoSwipe").checked;
  const delayTime = document.getElementById("delayTime").value;
  chrome.storage.local.set({ autoSwipe, delayTime }, () => {
    console.log("Settings saved");
  });
});

// Call updateUIWithStoredValues on popup load
document.addEventListener("DOMContentLoaded", updateUIWithStoredValues);
