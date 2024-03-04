// Helper function to delay execution
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function autoLikeRight() {
  while (true) {
    // Infinite loop
    // Check if autoLike and autoDislike are enabled and get delay time
    const { autoLike, autoDislike, delayTime } = await new Promise((resolve) =>
      chrome.storage.local.get(["autoLike", "autoDislike", "delayTime"], resolve)
    );

    const likeButton = document.getElementsByClassName(
      "button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a"
    )[0];
    
    const dislikeButton = document.getElementsByClassName("button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-nope):a")[0]; // Replace "your-dislike-button-class" with the actual class of the dislike button

    if (autoLike && autoDislike) {
      const randomAction = Math.random() < 0.5 ? 'like' : 'dislike'; // Randomly decide whether to like or dislike
      if (randomAction === 'like' && likeButton) {
        likeButton.click();
        console.log("Liked 1");
      } else if (randomAction === 'dislike' && dislikeButton) {
        dislikeButton.click();
        console.log("Disliked 1");
      }
    } else if (autoLike && !autoDislike) {
      likeButton.click();
      console.log("Liked 2");
    } else if (!autoLike && autoDislike) {
      dislikeButton.click();
      console.log("Disliked 2");
    }

    // Wait for the specified delay time before the next action
    await sleep(parseInt(delayTime, 10) * 1000);
  }
}

autoLikeRight();
