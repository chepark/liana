const newsletterForm = document.querySelector(".newsLetter-form");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailInput = document.getElementById("email");
const newsletterModal = document.querySelector(".newsletter-modal__bg");

// send data to backend

// open popup & close
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.value);

  showMessage();

  setTimeout(() => {
    closeModal();
  }, 2500);
});

function showMessage() {
  newsletterModal.classList.remove("hidden");
  newsletterModal.classList.add("show");
  emailInput.value = "";
}

function closeModal() {
  newsletterModal.classList.remove("show");
  newsletterModal.classList.add("hidden");
}
