let search_btn = document.querySelector("#map-search-btn");
let search_input = document.querySelector(".search-input");

let friends_near_btn = document.querySelector("#friends-near-btn");
let friends_near_overlay = document.querySelector("#overlay");
let overlay_slider = document.querySelector("#overlay .overlay-slider");

let mask = document.querySelector("#mask");

let touchstartX = 0;
let touchendX = 0;

search_btn.addEventListener("click", function (e) {
  search_input.focus();
});

friends_near_btn.addEventListener("click", function (e) {
  friends_near_overlay.style.top = "calc(33.5vh - 80px)";
  friends_near_overlay.style.transitionDuration = "0.6s";
  mask.style.display = "block";
});

window.addEventListener("resize", function (e) {
  friends_near_overlay.style.transitionDuration = "0s";
});

// ============ Close Overlay Swipe ============ //

mask.addEventListener("click", function (e) {
  closeOverlay();
});

overlay_slider.addEventListener("click", function (e) {
  closeOverlay();
});

overlay_slider.addEventListener("touchmove", function (e) {
  let moveAmount = e.changedTouches[0].pageY;

  // console.log(innerHeight * (33.5 / 100) - 80);
  // console.log(moveAmount);

  if (
    moveAmount > innerHeight * (33.5 / 100) - 80 &&
    moveAmount < innerHeight
  ) {
    friends_near_overlay.style.top = moveAmount + "px";
    friends_near_overlay.style.transitionDuration = "0s";
  }
});

// overlay_slider.addEventListener("touchend", function (e) {
//   console.log(friends_near_overlay.style.top);
// });

addSwipeEvent(overlay_slider, "swipeDown", function (e) {
  closeOverlay();
});

addSwipeEvent(mask, "swipeDown", function (e) {
  closeOverlay();
});

function closeOverlay() {
  friends_near_overlay.style.top = "100%";
  mask.style.display = "none";
  friends_near_overlay.style.transitionDuration = "0.6s";
}
