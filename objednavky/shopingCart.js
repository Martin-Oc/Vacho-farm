
const productCartSection = document.querySelector(".product-cart-section")

function updateCart(array){
    productCartSection.innerHTML = array.map((element) =>{
        const {name,price,image,insertedValue} = element
        let hide
        if (insertedValue == 1) {hide="visible"}else{hide = ""}

        return `<div class="item">
        <img src="${image}" alt="" class="cart-image">
        <div class="remove-btn">
            <h1 class="popis">${name}</h1>
            <h4 class="price">${price}</h4>
            <button class="remove-item">Vymazať</button>
        </div>
        <div>
            <button class="cart-item-increase-btn">
                <i class="fas fa-chevron-up"></i>
              </button>
            <h1 class="suma">${insertedValue}</h1>

            <button class="  ${hide} cart-item-decrease-btn">
                <i class="fas fa-chevron-down"></i>
              </button>
        </div>
    </div>`
    }).join("")
}

export default updateCart