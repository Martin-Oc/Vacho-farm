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
/*
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
*/
//end modal



function ClassModalOPen(element) {
  this.obrazokGaleria = document.querySelectorAll("#img-galeria")
  this.modal = document.querySelector(".modal")
  this.modalObrazok = document.querySelector("#image-modal")
  this.closeModalBtn = document.querySelector("#close-btn-modal")
  this.modalText = document.querySelector("#text-modal")
  this.modalTextDiv = document.querySelector(".modal-text")
  this.container = document.querySelector(".galeria-section")

  const returnedValue = this.openModal()
  const closemodal = this.closModal()
  }

  ClassModalOPen.prototype.openModal = function(){

    this.container.addEventListener("click",function(e){
      this.target = e.target.src
      this.targetname = e.target.nextElementSibling.textContent

      //open modal  
      this.modal.classList.add("open")
      this.modalObrazok.src = this.target
       
     //meno obrazku 
     const currentImageName = e.target.nextElementSibling.innerHTML
     this.modalText.innerHTML = this.targetname

      //pozicia nazvu obrazku
      this.bottomImage = this.modalObrazok.getBoundingClientRect().bottom
      console.log(this.bottomImage)
      this.thistextposition = this.bottomImage + 20
      console.log(this.thistextposition)
      this.modalTextDiv.style.top = `${this.textposition}px`;
      console.log(this.modalTextDiv.style)
    }.bind(this))
  }

  ClassModalOPen.prototype.closModal = function(){
    //close modal with button
    if(this.modal){
      this.closeModalBtn.addEventListener("click",function(){
        this.modal.classList.remove("open")
      }.bind(this))}

      //close modal iwh tab on background
      this.modal.addEventListener("click",function(e){
        const clickonbackground = e.target
          if(clickonbackground == this.modal){
            this.modal.classList.remove("open")
          }
      }.bind(this))
  }

  const OpenModal = new ClassModalOPen(document.querySelector("#Galeria"))

  