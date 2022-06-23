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


//modal

const obrazokGaleria = document.querySelectorAll("#img-galeria")
const modal = document.querySelector(".modal")
const modalObrazok = document.querySelector("#image-modal")
const closeModalBtn = document.querySelector("#close-btn-modal")
const modalText = document.querySelector("#text-modal")
const modalTextDiv = document.querySelector(".modal-text")

obrazokGaleria.forEach(function(image){ 
  image.addEventListener("click",OpenModal)
})

if(modal){
closeModalBtn.addEventListener("click",function(){
  modal.classList.remove("open")
})
}

function OpenModal(e){
  const currentImageSrc = e.currentTarget.src
  modal.classList.add("open")
  modalObrazok.src = currentImageSrc

  //meno obrazku 
  const currentImageName = e.currentTarget.nextElementSibling.innerHTML
  modalText.innerHTML = currentImageName

  //pozicia nazvu obrazku
  const bottomImage = modalObrazok.getBoundingClientRect().bottom
  const textposition = bottomImage + 20
  modalTextDiv.style.top = `${textposition}px`;
  
  //close modal iwh tab on background
  modal.addEventListener("click",function(e){
    const clickonbackground = e.target
    if(clickonbackground == modal){
    modal.classList.remove("open")
    }
  })

}
//end modal



