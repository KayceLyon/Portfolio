// Navigation Bar Control
const menuIcon = navbar.querySelector(".gg-menu-grid-r")
const menu = document.querySelector("#navbar-menu");
const navbarLinks = menu.querySelector(".navbar-links");

// Aria-expanded determines whether an element set as a control or its children
// are expanded. Used with menus, pop-ups, etc. Accessibility feature.
let visibility = menuIcon.getAttribute("aria-expanded") === "true";

// Toggles the visibility of the menu based on whether aria-expanded is true or false.
const toggleMenu = () => {
  visibility = !visibility;
  menuIcon.setAttribute("aria-expanded", visibility);
};

menuIcon.addEventListener("click", toggleMenu);
// Stops the parent elements from reacting to this event listener.
navbarLinks.addEventListener("click", (e) => e.stopPropagation());
menu.addEventListener("click", toggleMenu);

// Biography Page: Carousel Control
let currentImg = 0;
let numImg = $('.carousel-images').children().length - 1;
$('.next').on('click', () => {
  $('.carousel-images').children().eq(currentImg).css('display', 'none');
  if(currentImg < numImg) {
    currentImg++;
  } else {
    currentImg = 0
  }
  $('.carousel-images').children().eq(currentImg).css('display', 'block');
});

$('.previous').on('click', () => {

$('.carousel-images').children().eq(currentImg).css('display', 'none');
if(currentImg > 0) {
  currentImg--;
} else {
  currentImg = numImg;
}
$('.carousel-images').children().eq(currentImg).css('display', 'block');
});

// Home Page: Modal Control
const $open = $('#openMod');
const $modal = $('#modal');
const $close = $('#close');

const openMod = () => {
    $modal.show();
}

const closeMod = () => {
    $modal.hide();
}

$open.on('click', openMod);
$close.on('click', closeMod);



