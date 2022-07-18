//modal
const obrazokGaleria = document.querySelectorAll("#img-galeria")
const modal = document.querySelector(".modal")
const modalObrazok = document.querySelector("#image-modal")
const closeModalBtn = document.querySelector("#close-btn-modal")
const modalText = document.querySelector("#text-modal")
const modalTextDiv = document.querySelector(".modal-text")
const obarazky = [...obrazokGaleria]
const modalList = document.querySelector(".modal-images")
const arrowRight = document.querySelector(".arrow-right")
const arrowLeft = document.querySelector(".arrow-left")
const galeriaSection = document.querySelector(".galeria-section")
var modalListImage
var modalListImageArray
var active
var next
var nextNext
var previous
var previousPrevious


obrazokGaleria.forEach(function(image){ 
  image.addEventListener("click",OpenModal)
})

if(modal){
closeModalBtn.addEventListener("click",function(){
  document.body.style.overflow = "visible"
  modal.classList.remove("open")
 
})
}

function OpenModal(e){
 const currentImageSrc = e.currentTarget.src 
  modal.classList.add("open")
  modalObrazok.src = currentImageSrc

  document.body.style.overflow = "hidden"
  //meno obrazku 
 const currentImageName = e.currentTarget.nextElementSibling.innerHTML
  modalText.innerHTML = currentImageName

  //pozicia nazvu obrazku
  const topImage = modalObrazok.getBoundingClientRect().top
  const textposition = topImage - 50
  modalTextDiv.style.top = `${textposition}px`;
  
  //close modal iwh tab on background
  modal.addEventListener("click",function(e){
    const clickonbackground = e.target
    if(clickonbackground == modal){
      document.body.style.overflow = "visible"
    modal.classList.remove("open")
    }
  })

  
  //display list images in modal
  modalList.innerHTML= displayImages(obarazky)
  
  modalListImage = document.querySelectorAll(".list-modal")
  modalListImageArray = [...modalListImage]
  //emphasize active image in modal list 
  showedImage()

  
  //after click on other image in list will appear clicked image
  diplayOtherImage()
  
  navigationWithArrows()
  
//styling lest in modal
nextElementsPosition()
}
function nextElementsPosition(){
  next=active.nextElementSibling
 if( next !== null){
   next.classList.remove("none")
   next.style = "left: 60.5%;"
 }
 previous = active.previousElementSibling
 if(previous !== null)
 {
   previous.classList.remove("none")
   previous.style = "left: 20%;"
  }
  try {
    nextNext = active.nextElementSibling.nextElementSibling
   if(nextNext !== null)
   {
     nextNext.classList.remove("none")
     nextNext.style = "left: 81%;"
   }
    
  } catch (error) {}


  try {
    previousPrevious = active.previousElementSibling.previousElementSibling
    if(previousPrevious !== null)
    {
      previousPrevious.classList.remove("none")
      previousPrevious.style = "left: -0.5%;"
    }
  } catch (error) {}

}
//end modal


function displayImages(element){
  return element.map((item)=>{
    return `<img src="${item.src}" alt="" class="list-modal none">`
  }).join("")
}

function showedImage(){

  modalListImageArray.forEach((item,index)=>{
    item.classList.add("none")
    item.classList.remove("active")
    if(modalObrazok.src == item.src) {
     item.classList.add("active")
     active = document.querySelector(".active")
     item.classList.remove("none")
    item.style = "left:;"
 
  }
 })

}

function diplayOtherImage(){
  modalList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("list-modal"))
    {
      let imageSource = e.target.src
      modalObrazok.src = imageSource
      showedImage()
      nextElementsPosition()
      showCurrentName()
    }
  })
}

function navigationWithArrows(){
  arrowRight.addEventListener("click",right) 
  arrowLeft.addEventListener("click",left)
}

function right(){
  let numberOfActiveArray = getActiveElementinArray(modalListImageArray)
  if(modalListImageArray.length <= numberOfActiveArray + 1){
    numberOfActiveArray = -1
  }
  modalObrazok.src = modalListImageArray[numberOfActiveArray + 1].src
  showedImage()
  nextElementsPosition()
  showCurrentName()
}

function left(){
  let numberOfActiveArray = getActiveElementinArray(modalListImageArray)
    if(0 == numberOfActiveArray ){
    numberOfActiveArray = modalListImageArray.length 
    }
    modalObrazok.src = modalListImageArray[numberOfActiveArray - 1].src
    showedImage()
    nextElementsPosition()
    showCurrentName()
    
}

function getActiveElementinArray(array){
  let number
   const ahoj = array.forEach((element,index)=>{
    if(element.classList.contains("active")){
       number = index
    }
  })
  return number
}

function showCurrentName(){

  obarazky.forEach((element)=>{
    if(active.src == element.src){
      modalText.innerHTML = element.nextElementSibling.innerHTML
    }
  })
  
}
// list styling





