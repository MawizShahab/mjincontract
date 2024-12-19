// Get the toggle button and the mobile navigation
const toggleButton = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

// Toggle the 'hidden' class on the mobile navigation
toggleButton.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});
