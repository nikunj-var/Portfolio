// toggle icon navbar
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
    menuicon.classList.add('bx-x');
    navbar.classList.toggle('active');
}

// scroll section

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      // active navbar links
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    //   added for applying animation on sections
    //   active sections for animation on scroll
      sec.classList.add('show-animate');
    }
    // if want to use animation that repeats on scroll use this
    else{
        sec.classList.remove('show-animate');
    } 
    });
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    // remove toggle icon and navbar when click navbar links(scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

