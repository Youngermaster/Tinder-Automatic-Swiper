console.log("Content script loaded");

let autoSwipeInterval;
const swipeRight = () => {
  console.log("Attempting to swipe right...");
  const likeButton = document.querySelector('[aria-label="Like"]');
  if (likeButton) {
    console.log("Like button found, clicking...");
    likeButton.click();
  } else {
    console.log("Like button not found, simulating key press...");
    // Fallback to simulating keyboard press if button not found
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request.action);
  if (request.action === "startAutoSwipe") {
    console.log("Starting auto-swipe with delay:", request.delay);
    clearInterval(autoSwipeInterval); // Clear existing interval to prevent duplicates
    autoSwipeInterval = setInterval(swipeRight, request.delay * 1000);
  } else if (request.action === "stopAutoSwipe") {
    console.log("Stopping auto-swipe");
    clearInterval(autoSwipeInterval);
  }
});
