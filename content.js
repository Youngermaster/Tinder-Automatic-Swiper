console.log("Content script loaded");

function simulateKeyPress(selector, keyCode) {
  let event = new KeyboardEvent("keydown", {
    key: "RightArrow",
    keyCode: keyCode,
    code: "ArrowRight",
    which: keyCode,
    shiftKey: false,
    ctrlKey: false,
    metaKey: false,
  });
  document.querySelector(selector).dispatchEvent(event);
}

// Helper function to delay execution
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function autoSwipeRight() {
  while (true) {
    const likeButton = document.getElementsByClassName(
      "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a"
    )[0];
    if (likeButton) {
      likeButton.click();
      console.log("Liked");
    }
    // Infinite loop
    // Check if autoSwipe is enabled and get delay time
    const { autoSwipe, delayTime } = await new Promise((resolve) =>
      chrome.storage.local.get(["autoSwipe", "delayTime"], resolve)
    );

    // if (!autoSwipe) break; // Exit loop if autoSwipe is disabled

    // Simulate the key press or click action here
    simulateKeyPress("body", 39); // keyCode for right arrow is 39

    // Wait for the specified delay time before the next action
    await sleep(delayTime * 1000);
  }
}

autoSwipeRight();
