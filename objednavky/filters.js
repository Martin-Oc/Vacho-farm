import data from "../Data/data.js";
const search = document.querySelector(".search")
const jedenKvet = document.querySelectorAll(".jeden-kvet")
const objednajKvetySection = document.querySelector(".objednaj-kvety")
const priceFilter = document.querySelector(".price-filter")
const priceFilterValue =document.querySelector(".price-filter-value-zmena")

search.addEventListener("keyup",()=>{
displayElement()
})

priceFilter.addEventListener("input",()=>{
  displayElement()

})

function getArrayofValues(){
    var arayofValues =[]

    data.forEach(element =>{   
        let value = priceFilter.value/100
        let {name,cena} = element
        cena = cena.slice(0,4)
        cena = cena.replace(",",".")
        cena = parseFloat(cena)

        name = name.toLocaleLowerCase()
        let writedname = search.value.toLocaleLowerCase()
        if(name.includes(writedname) && cena <= value){
          //  if(name.includes(writedname)){
           arayofValues.push(element)
        }

    })

    return arayofValues
}

function displayElement(){
    let value = priceFilter.value/100
    priceFilterValue.textContent = `${value}€`

    const array = getArrayofValues()
    if(array.length == 0){
        objednajKvetySection.classList.remove("objednaj-kvety")
        objednajKvetySection.innerHTML = `<div>
        <h1 class="no-matches">Kvet nebol nájdený!</h1>
        </div>`
    } else{
    objednajKvetySection.innerHTML = array.map(element =>{
        const {name,cena,obrazok} = element
        objednajKvetySection.classList.add("objednaj-kvety")
        return `<div class="jeden-kvet">
        <img src="${obrazok}" alt="Kvet1" class="img" id="img-galeria">
        <div class="product-flex">
            <div class="product-description">
                <h1 class="kvety-text">${name}</h1>
                <p class="price">${cena}</p>
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
}
}