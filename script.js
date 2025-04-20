const menuBtn = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
// Function to create circular progress
function createCircularProgress(selector, valueSelector, color, endValue, speed) {
  const progressElement = document.querySelector(selector);
  const valueElement = document.querySelector(valueSelector);
  let currentValue = 0;

  const interval = setInterval(() => {
    // Only increment if current value is less than the end value
    if (currentValue < endValue) {
      currentValue++;
      valueElement.textContent = `${currentValue}%`;
      progressElement.style.background = `conic-gradient(${color} ${currentValue * 3.6}deg, #ededed 0deg)`;
    } else {
      clearInterval(interval);  // Stop when target value is reached
    }
  }, speed);
}

// === Initialize Progress Bars ===
document.addEventListener("DOMContentLoaded", () => {
  createCircularProgress(".html-css", ".html-progress", "#fca61f", 90, 30);
  createCircularProgress(".javascript", ".javascript-progress", "#7d2ae8", 75, 30);
  createCircularProgress(".php", ".php-progress", "#20c997", 80, 30);
  createCircularProgress(".reactjs", ".reactjs-progress", "#3f396d", 30, 30);
});

// === jQuery Filter Logic ===
$(document).ready(function () {
  $(".filter-item").click(function () {
    const filter = $(this).data("filter");
    if (filter === "all") {
      $(".post").fadeIn(300);
    } else {
      $(".post").hide().filter(`.${filter}`).fadeIn(300);
    }
  });
});

// === Sticky Navbar ===
document.addEventListener("DOMContentLoaded", () => {
  const navbarTop = document.getElementById("navbar-top");

  window.addEventListener("scroll", () => {
    const isSticky = window.scrollY > 50;
    navbarTop.classList.toggle("fixed-top", isSticky);

    // Adjust the padding top of the body when navbar becomes sticky
    document.body.style.paddingTop = isSticky ? `${navbarTop.offsetHeight}px` : "0";
  });
});

// === Back to Top Button ===
const backToTopBtn = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = (window.scrollY > 20) ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
