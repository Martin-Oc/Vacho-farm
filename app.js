
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// show sidebar

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
const datum = new Date().getFullYear();
date.innerHTML = datum

const icon = document.querySelector(".icon")

icon.addEventListener("click", ()=>{
  window.location.href = "./index.html"
})




