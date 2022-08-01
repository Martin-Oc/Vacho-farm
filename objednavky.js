
import "./app.js"
import "./filter.js"
import "./objednavky/toggleCart.js"
import "./objednavky/shopingCart.js"
import "./objednavky/vymazatItemzKosisku.js"
import "./objednavky/filters.js"
import data from "./Data/data.js"
const objednajKvetySection = document.querySelector(".objednaj-kvety")

objednajKvetySection.innerHTML =  data.map(element =>{
    return `<div class="jeden-kvet">
        <img src="${element.obrazok}" alt="Kvet1" class="img" id="img-galeria">
        <div class="product-flex">
            <div class="product-description">
                <h1 class="kvety-text">${element.name}</h1>
                <p class="price">${element.cena}</p>
            </div>

            <input type="number" name="" id="" min="0" class="input-number" placeholder="0">
            <div class="product-order">
                <button class="order-cart-btn">
                    <i class="fa-solid fa-cart-shopping order-cart"></i>
                </button>
            </div>
        </div>
        <div class="error-message"></div>
    </div>`
    }).join("")





