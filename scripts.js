const body = document.querySelector("body");
let toggle = document.getElementById("toggle");

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
})