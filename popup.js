// This function updates the UI with stored values
function updateUIWithStoredValues() {
  chrome.storage.local.get(["autoLike", "autoDislike", "delayTime"], function (result) {
    console.log(result); // Log the result to see what's fetched

    if (result.autoLike !== undefined) {
      // Check if autoLike has a stored value
      document.getElementById("autoLike").checked = result.autoLike;
    }

    if (result.autoDislike !== undefined) {
      // Check if delayTime has a stored value
      document.getElementById("autoDislike").value = result.autoDislike;
    }

    if (result.delayTime !== undefined) {
      // Check if delayTime has a stored value
      document.getElementById("delayTime").value = result.delayTime;
    }
  });
}

// Save settings when the "Save Settings" button is clicked
document.getElementById("saveSettings").addEventListener("click", () => {
  const autoLike = document.getElementById("autoLike").checked;
  const delayTime = document.getElementById("delayTime").value;
  chrome.storage.local.set({ autoLike, delayTime }, () => {
    console.log("Settings saved");
  });
});

// Call updateUIWithStoredValues on popup load
document.addEventListener("DOMContentLoaded", updateUIWithStoredValues);
