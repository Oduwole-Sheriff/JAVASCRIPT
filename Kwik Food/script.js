// hamburger
let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let SideBar = document.querySelector(".SideBar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    SideBar.classList.toggle("active");
})

SideBar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    SideBar.classList.toggle("active");
})

// carousel 

function scrollr(){
    var left = document.querySelector(".slider-2");
    left.scrollBy(410, 0)
  }
  
  function scrolll(){
    var right = document.querySelector(".slider-2");
    right.scrollBy(-410, 0)
  }
