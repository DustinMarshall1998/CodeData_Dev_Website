const targetDate = new Date("2024-12-25T00:00:00").getTime(); // Change this date as needed

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".coming-soon-container").innerHTML = "<h1>We’re Live!</h1>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
