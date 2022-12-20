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

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const clientCounter = document.getElementById("clients-counter");
      const employeeCounter = document.getElementById("employees-counter");
      const userCounter = document.getElementById("users-counter");

      animateCounter(clientLastNumber, clientCounter);
      animateCounter(employeeLastNumber, employeeCounter, 100);
      animateCounter(userLastNumber, userCounter);
    }

    if (!entry.isIntersecting) {
      return;
    }
  });
}

function animateCounter(lastNumber, target) {
  let start = 0;
  target.innerText = 0;

  const counterInterval = setInterval(() => {
    const inc = Number(lastNumber / speed);
    start += inc;
    const valueConverted = Math.trunc(Math.round(start * 100) / 100);
    target.innerText = valueConverted;
    if (valueConverted == lastNumber) {
      clearInterval(counterInterval);
    }
  }, 5);
}
