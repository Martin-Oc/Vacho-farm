import "./app.js"

const choose_btns = document.querySelectorAll(".choose-btn")
const pointer = document.querySelectorAll(".pointer")
const kyticeSection = document.querySelector("#Kytice")



window.addEventListener("DOMContentLoaded",()=>{
    blankPage()
    
    let filter = window.location.search
    filter = filter.slice(1,filter.length)
    
    pointer.forEach(element =>{
        if(filter == element.id){
            blankFilter()

            choose_btns.forEach(element2 =>{
                if(filter == element2.textContent)
                element2.classList.add("active2")  
            })

            element.classList.remove("non-active")
            return
            } 
    })

   if(!filter){
    try {
        kyticeSection.classList.remove("non-active")
    } catch (error) {}
   }
})

choose_btns.forEach((element)=>{
    element.addEventListener("click",function(e){
    blankPage()
    const clicked = e.currentTarget
    blankFilter()
    
    clicked.classList.add("active2")
     pointer.forEach(element3 =>{
         if(clicked.textContent == element3.id){
            element3.classList.remove("non-active")
            }    
        })  
   
    })
})

function blankPage(){
    pointer.forEach(element =>{
        element.classList.add("non-active")
    })
}

function blankFilter(){
    choose_btns.forEach(element2 =>{
        element2.classList.remove("active2")  
    })
}