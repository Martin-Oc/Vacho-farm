import "../app.js"
import "../filter.js"
import showData from "./showData.js"
import prepocitaj from "../objednavky/prepocitajSumu.js"

const productZhrnutie = document.querySelector(".product-zhrnutie-section")


window.addEventListener("DOMContentLoaded",()=>{
    const data = JSON.parse(sessionStorage.getItem("data"))
    const product = JSON.parse(sessionStorage.getItem("produkt"))

    showproducts(productZhrnutie,product)
    showData(data)
    prepocitaj(product)
})


function showproducts(element,array){
    element.innerHTML = array.map((element)=>{
        const {image,insertedValue,name,price} = element
        return`<div class="item">
        <img src="${image}" class="cart-image" alt="">  
        <div class="product-description">
            <label for="" class="kvety-text">${name}</label>
            <label for="" class="price">${price}</label>
        </div>
        <label for="" class="pocet">${insertedValue}</label>
    </div>`
    }).join("")
}


const form = document.querySelector(".form-zhrnutie")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    sessionStorage.removeItem("data")
    sessionStorage.removeItem("produkt")
    window.location.href = "UspeneOdoslanie.html"
})


