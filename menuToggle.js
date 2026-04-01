"use strict"

const menuBtn = document.getElementById("btn_menu");
const navLinks = document.querySelector(".pages_link");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})

const hireMe = document.getElementById("hireMe")

hireMe.addEventListener("click", () => {
    alert(`Hire Me!! I work hard.`);
})
