const counters = document.getElementById("counters");

const clientLastNumber = 3000;
const employeeLastNumber = 180;
const userLastNumber = 10000;
const speed = 100;

const options = {
  root: null,
  threshold: 0.3,
};

let observer = new IntersectionObserver(callback, options);
observer.observe(counters);

/**
 * The function called when the entry is in a browser's viewport.
 * @callback callback
 * @param {IntersectionObserverEntry} entries
 * @param {IntersectionObserver} observer
 */

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const clientCounter = document.getElementById("clients-counter");
      const employeeCounter = document.getElementById("employees-counter");
      const userCounter = document.getElementById("users-counter");

      animateCounter(clientLastNumber, clientCounter);
      animateCounter(employeeLastNumber, employeeCounter, 100);
      animateCounter(userLastNumber, userCounter);

      // remove intersection observer once it is fired.
      observer.unobserve(counters);
    }

    if (!entry.isIntersecting) return;
  });
}

/**
 * The function animates a counter until it reaches a last number
 * on a target HTML element.
 *
 * @param {number} lastNumber
 * @param {HTMLElement} targetHTMLElement
 */

function animateCounter(lastNumber, targetHTMLElement) {
  let start = 0;
  targetHTMLElement.innerText = 0;

  const counterInterval = setInterval(() => {
    const inc = Number(lastNumber / speed);
    start += inc;
    const valueConverted = Math.trunc(Math.round(start * 100) / 100);
    targetHTMLElement.innerText = valueConverted;
    if (valueConverted == lastNumber) {
      clearInterval(counterInterval);
    }
  }, 5);
}
