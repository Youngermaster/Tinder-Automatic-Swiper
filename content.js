// Helper function to delay execution
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function autoLikeRight() {
  while (true) {
    // Infinite loop
    // Check if autoLike is enabled and get delay time
    const { autoLike, autoDislike, delayTime} = await new Promise((resolve) =>
      chrome.storage.local.get(["autoLike", "autoDislike", "delayTime"], resolve)
    );
    console.log("Content:", autoLike, autoDislike, delayTime);
    const likeButton = document.getElementsByClassName(
      "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a"
    )[0];
    if (likeButton && autoLike) {
      likeButton.click();
      console.log("Liked");
    }
    // if (!autoLike) break; // Exit loop if autoLike is disabled

    // Wait for the specified delay time before the next action
    await sleep(parseInt(delayTime, 10) * 1000);
  }
}

autoLikeRight();
