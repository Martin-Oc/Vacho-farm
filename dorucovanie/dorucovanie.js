import showData from "./showData.js"
import "../app.js"
import "../filter.js"
import "./data.js"

const checkboxInaAdresa = document.querySelector("#inaAdresa")
const inaAdresa = document.querySelector(".inaAdresa")
const UlicaDA = document.querySelector("#Ulica-DA")
const MestoDA = document.querySelector("#Mesto-DA")
const PSCDA = document.querySelector("#PSC-DA")

const checkboxFirma = document.querySelector("#firma")
const firma = document.querySelectorAll(".firma")
const NazovFirmy = document.querySelector("#Firma")
const ICO = document.querySelector("#ICO")
const DIC = document.querySelector("#DIC")

window.addEventListener("DOMContentLoaded",()=>{
    if(checkboxInaAdresa.checked){

        UlicaDA.removeAttribute("disabled")
        MestoDA.removeAttribute("disabled")
        PSCDA.removeAttribute("disabled")

    }

    if(checkboxFirma.checked){
        NazovFirmy.removeAttribute("disabled")
        ICO.removeAttribute("disabled")
        DIC.removeAttribute("disabled")
    }
})


checkboxFirma.addEventListener("change",(e)=>{
    const checked = e.target.checked
    if(checked){
        firma.forEach(element =>{
            element.classList.remove("hide")
            NazovFirmy.removeAttribute("disabled")
            ICO.removeAttribute("disabled")
            DIC.removeAttribute("disabled")

        })  
    }else{
        firma.forEach(element =>{
            NazovFirmy.setAttribute("disabled","")
            ICO.setAttribute("disabled","")
            DIC.setAttribute("disabled","")
            element.classList.add("hide")

        })    
    }
})


if(JSON.parse(sessionStorage.getItem("data"))){
    const data = JSON.parse(sessionStorage.getItem("data"))
    showData(data)   
}

checkboxInaAdresa.addEventListener("change",(e)=>{
    const checked = e.target.checked
        if(checked){
            inaAdresa.classList.remove("hide")
            UlicaDA.removeAttribute("disabled")
            MestoDA.removeAttribute("disabled")
            PSCDA.removeAttribute("disabled")
        }else{
            UlicaDA.setAttribute("disabled","")
            MestoDA.setAttribute("disabled","")
            PSCDA.setAttribute("disabled","")
            inaAdresa.classList.add("hide")
        }
})