/* 
Project Name: Modern Portfolio Website
Description: A complete responsive modern portfolio website design
             by using HTML CSS and Vanilla JavaScript from scratch.
Author: Md Al Amin Hossen
Github: https://github.com/MdRasen
License: MIT License
Copyright: 2023 ©MdRasen 
*/

// Typing animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web",
    "Game Developer",
    "Web Developer",
    "Graphic Designer",
    "3D Designer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Navigation variables
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Handle navigation clicks
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    navigateToSection(this);
  });
}

// Show a specific section
function navigateToSection(element) {
  const targetId = element.getAttribute("href").replace("#", "");
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    // Remove active class from all sections
    allSection.forEach((section) => section.classList.remove("active"));

    // Activate the target section
    targetSection.classList.add("active");
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Update navigation links
    updateNav(element);
  }
}

// Update navigation state
function updateNav(element) {
  navList.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });

  element.classList.add("active");
}

// Navigation toggler for responsive design
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

// Handle hash changes
window.addEventListener("hashchange", () => {
  const targetId = location.hash.replace("#", "");
  const targetLink = document.querySelector(`a[href="#${targetId}"]`);

  if (targetLink) {
    navigateToSection(targetLink);
  }
});

// Handle page load with hash
document.addEventListener("DOMContentLoaded", () => {
  const targetId = location.hash.replace("#", "");
  const targetLink = document.querySelector(`a[href="#${targetId}"]`);

  if (targetLink) {
    navigateToSection(targetLink);
  } else {
    // Fallback to the first section (#home) if no hash is provided
    const homeLink = document.querySelector(`a[href="#home"]`);
    navigateToSection(homeLink);
  }
});
