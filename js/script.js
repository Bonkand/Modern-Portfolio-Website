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

    // Deactivate all sections and set "back-section" for the current one
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section", "active");
    }

    for (let j = 0; j < totalNavList; j++) {
      const navLink = navList[j].querySelector("a");
      navLink.classList.remove("active");

      if (navLink === this) {
        allSection[j].classList.add("back-section");
      }
    }

    // Activate the clicked link and show the target section
    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// Show a specific section
function showSection(element) {
  const targetId = element.getAttribute("href").replace("#", "");
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      targetSection.classList.add("active");
    }, 10); // Delay to retrigger animations
  }
}

// Update navigation state
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    const navLink = navList[i].querySelector("a");
    navLink.classList.remove("active");

    const target = element.getAttribute("href").replace("#", "");
    if (target === navLink.getAttribute("href").replace("#", "")) {
      navLink.classList.add("active");
    }
  }
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
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("active");
    }

    targetSection.scrollIntoView({ behavior: "smooth" });
    targetSection.classList.add("active");

    const targetLink = document.querySelector(`a[href="#${targetId}"]`);
    if (targetLink) {
      updateNav(targetLink);
    }
  }
});

// Handle page load with hash
document.addEventListener("DOMContentLoaded", () => {
  const targetId = location.hash.replace("#", "");
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
    targetSection.classList.add("active");

    const targetLink = document.querySelector(`a[href="#${targetId}"]`);
    if (targetLink) {
      updateNav(targetLink);
    }
  }
});
