import "./newsFeed.js";
import "./counter.js";
import "./newsletter.js";

const navCloseBtn = document.getElementById("nav-close");
const navOpenBtn = document.getElementById("nav-open");
const navModal = document.querySelector(".responsive-navigation");

/**
 * Open the navigation for tablet and mobile.
 */
function openNavModal() {
  navModal.style.display = "block";
  document.body.style.overflowY = "hidden";
}

/**
 * Close the navigation for table and mobile.
 */
function closeNavModal() {
  navModal.style.display = "none";
  document.body.style.overflowY = "scroll";
}

/**
 * The navigation for tablet and mobile is opened
 * when the hamburger button is clicked.
 */

navOpenBtn.addEventListener("click", () => {
  openNavModal();
});

/**
 * The navigation for tablet and mobile is closed
 * when the close button is clicked.
 */
navCloseBtn.addEventListener("click", () => {
  closeNavModal();
});
