import "./newsFeed.js";

const mainContent = document.querySelector(".main");
const navCloseBtn = document.getElementById("nav-close");
const navOpenBtn = document.getElementById("nav-open");
const navModal = document.querySelector(".responsive-navigation");

function openNavModal() {
  navModal.style.display = "block";
  document.body.style.overflowY = "hidden";
  // ? why this code? remove?
  navOpenBtn.dataset.toggle = "on";
}

function closeNavModal() {
  navModal.style.display = "none";
  // ? why this code? remove?
  navOpenBtn.dataset.toggle = "off";
  document.body.style.overflowY = "scroll";
}

// open reponsive navigator
navOpenBtn.addEventListener("click", () => {
  openNavModal();
});

// close responsive navigator
navCloseBtn.addEventListener("click", () => {
  closeNavModal();
});
