const newsletterForm = document.querySelector(".newsLetter-form");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailInput = document.getElementById("email");
const newsletterModal = document.querySelector(".newsletter-modal__bg");

/**
 * When the subscribe button is clicked
 * after the input is filled with an email address,
 * a Thank You notication is displayed for 2500milliseconds.
 */
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  showMessage();

  setTimeout(() => {
    closeMessage();
  }, 2500);
});

/**
 * The function displays a Thank You message
 * and clear the existing value in the input field.
 */
function showMessage() {
  newsletterModal.classList.remove("hidden");
  newsletterModal.classList.add("show");
  emailInput.value = "";
}

/**
 * The function closes a Thank You message.
 */
function closeMessage() {
  newsletterModal.classList.remove("show");
  newsletterModal.classList.add("hidden");
}
