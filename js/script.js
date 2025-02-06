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
    "Game Developer",
    "Web Developer",
    "Graphic Designer",
    "3D Designer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  const targetSection = document.querySelector("#" + target);

  targetSection.classList.remove("active");
  setTimeout(() => targetSection.classList.add("active"), 10);
}

document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Nav Toggler Button
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
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.classList.add("active");
    targetElement.scrollIntoView({ behavior: "smooth" });
    updateNav(document.querySelector(`a[href="#${targetId}"]`));
  }
});

// Handle page load
document.addEventListener("DOMContentLoaded", () => {
  const targetId = location.hash.replace("#", "");
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.classList.add("active");
    updateNav(document.querySelector(`a[href="#${targetId}"]`));
  }
});
