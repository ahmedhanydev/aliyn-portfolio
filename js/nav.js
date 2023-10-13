// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Get the button element
// var menuButton = document.querySelector(".relative button");
var menuButton1 = document.getElementById("button-menu1");
var menuButton2 = document.getElementById("button-menu2");
// console.log("menuButton", menuButton);
// console.log("menuButton2", menuButton2);
// Get the menu open and close icons
let menuOpenIcon1 = document.querySelector(".open_icon");
let menuCloseIcon1 = document.querySelector(".close_icon");
// Get the menu open and close icons
let menuOpenIcon2 = document.querySelector(".open_icon_two");
let menuCloseIcon2 = document.querySelector(".close_icon_two");

// Get the menu content element
let menuContent1 = document.getElementById("mobile-menu1");
let menuContent2 = document.getElementById("mobile-menu2");

// Function to open the menu
function openMenu() {
  // Show the menu content
  menuContent1.classList.remove("hidden");

  // Toggle the visibility of the menu icons
  menuOpenIcon1.classList.add("hidden");
  menuCloseIcon1.classList.remove("hidden");

  // Set the aria-expanded attribute
  menuButton1.setAttribute("aria-expanded", "ture");
}

function openMenuTwo() {
  // nav 2

  // Show the menu content
  menuContent2.classList.remove("hidden");

  // Toggle the visibility of the menu icons
  menuOpenIcon2.classList.add("hidden");
  menuCloseIcon2.classList.remove("hidden");

  // Set the aria-expanded attribute
  menuButton2.setAttribute("aria-expanded", "ture");
}
function closeMenuTwo() {
  // nav 2

  // Hide the menu content
  menuContent2.classList.add("hidden");

  // Toggle the visibility of the menu icons
  menuOpenIcon2.classList.remove("hidden");
  menuCloseIcon2.classList.add("hidden");

  // Set the aria-expanded attribute
  menuButton2.setAttribute("aria-expanded", "true");
}
// Function to close the menu
function closeMenu() {
  // Hide the menu content
  menuContent1.classList.add("hidden");

  // Toggle the visibility of the menu icons
  menuOpenIcon1.classList.remove("hidden");
  menuCloseIcon1.classList.add("hidden");

  // Set the aria-expanded attribute
  menuButton1.setAttribute("aria-expanded", "true");
}

// Add click event listener to the menu button
menuButton1.addEventListener("click", function () {
  if (menuContent1.classList.contains("hidden")) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Add click event listener to the menu button
menuButton2.addEventListener("click", function () {
  if (menuContent2.classList.contains("hidden")) {
    openMenuTwo();
  } else {
    closeMenuTwo();
  }
});

// navbar scrolling
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  // console.log(window.scrollY);
  if (scrollPosition >= 95) {
    // document.querySelector(".navbar_big").style.display = "none";

    document.querySelector(".navbar_small").style.display = "flex";
  } else {
    // document.querySelector(".navbar_big").style.display = "block";
    document.querySelector(".navbar_small").style.display = "none";
  }
});

function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(
    "dropdown-content-" + dropdownId
  );
  var computedStyle = window.getComputedStyle(dropdownContent);
  console.log(computedStyle);
  if (computedStyle.display === "none") {
    dropdownContent.style.display = "block";
    document
      .querySelector(`.arrow_dropdown-${dropdownId}`)
      .classList.remove("rotate-0");
    document
      .querySelector(`.arrow_dropdown-${dropdownId}`)
      .classList.add("rotate-90");
  } else {
    dropdownContent.style.display = "none";
    document
      .querySelector(`.arrow_dropdown-${dropdownId}`)
      .classList.remove("rotate-90");
    document
      .querySelector(`.arrow_dropdown-${dropdownId}`)
      .classList.add("rotate-0");
  }
}

var video = document.getElementById("myVideo");
video.muted = true;
video.play();
