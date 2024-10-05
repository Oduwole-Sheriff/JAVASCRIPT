let hamburger = document.querySelector(".hamburger");
let sideMenu = document.querySelector(".side-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sideMenu.classList.toggle("active");
})

// dropdown menu

let dropMenu = document.querySelector(".information");
let dropMenu2 = document.querySelector(".about");

dropMenu.addEventListener("click", () => {
    dropMenu.classList.toggle("active");
})
dropMenu2.addEventListener("click", () => {
    dropMenu2.classList.toggle("active");
})


// popUp

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.addEventListener('load', () => {
    popup.classList.add('showPopup');
    popup.childNodes[1].classList.add('showPopup');
})

close.addEventListener('click', () => {
    popup.classList.remove('showPopup');
    popup.childNodes[1].classList.remove('showPopup');
})




