
import updateCart from "./shopingCart.js"
import toggleCart from "./toggleCart.js"
import DeleteItem from "./vymazatItemzKosisku.js"
import zvacsitMnozstvo from "./upravitMnozstvo.js"
import prepocitaj from "./prepocitajSumu.js"

    const jedenKvet = document.querySelectorAll(".jeden-kvet")
    const numberIntup = document.querySelectorAll(".input-number")
    const orderCartBtn = document.querySelectorAll(".order-cart-btn")
    let arrayofAddedObjects = []
    var deletedName

const objednejKvetySetion = document.querySelector(".objednaj-kvety")

objednejKvetySetion.addEventListener("click",(e)=>{
if(e.target.classList.contains("order-cart")){
    let productShopingCart = e.target.parentElement
    let insertedValue = productShopingCart.parentElement.previousElementSibling.value
    let errormessage = productShopingCart.parentElement.parentElement.nextElementSibling
    insertedValue = parseInt(insertedValue)
    if(insertedValue <= 0 || isNaN(insertedValue)){
        insertedValue = 0
        errormessage.textContent = "Zadaj kladnú hodnotu"
    }else{
        errormessage.textContent = ""
        let image = productShopingCart.parentElement.parentElement.previousElementSibling.src
        let name = productShopingCart.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent
        let price = productShopingCart.parentElement.previousElementSibling.previousElementSibling.lastElementChild.textContent
        let singleObject = {name,price,image,insertedValue}
        
        prepocitajPridaneMnozstvo(arrayofAddedObjects, singleObject)
        console.log(arrayofAddedObjects);
        updateCart(arrayofAddedObjects)
        prepocitaj(arrayofAddedObjects)
        toggleCart()

        //productShopingCart.parentElement.previousElementSibling.value = ""
       
    }
}
})

/*
orderCartBtn.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(element);
        let productShopingCart = e.currentTarget
        let insertedValue = productShopingCart.parentElement.previousElementSibling.value
        let errormessage = productShopingCart.parentElement.parentElement.nextElementSibling
        insertedValue = parseInt(insertedValue)
        if(insertedValue <= 0 || isNaN(insertedValue)){
            insertedValue = 0
            errormessage.textContent = "Zadaj kladnú hodnotu"
        }else{
            errormessage.textContent = ""
            let image = productShopingCart.parentElement.parentElement.previousElementSibling.src
            let name = productShopingCart.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent
            let price = productShopingCart.parentElement.previousElementSibling.previousElementSibling.lastElementChild.textContent
            let singleObject = {name,price,image,insertedValue}
            
            prepocitajPridaneMnozstvo(arrayofAddedObjects, singleObject)
            console.log(arrayofAddedObjects);
            updateCart(arrayofAddedObjects)
            prepocitaj(arrayofAddedObjects)
            toggleCart()

            //productShopingCart.parentElement.previousElementSibling.value = ""
           
        }

    })
})*/

const cartSection = document.querySelector(".product-cart-section")
cartSection.addEventListener("click",(e)=>{
    const target = e.target
    console.log(target);
    if(target.classList.contains("remove-item")){
        arrayofAddedObjects = DeleteItem(target,arrayofAddedObjects) 
        prepocitaj(arrayofAddedObjects) 
    }
    if(target.classList.contains("fa-chevron-up")){
        const parent = target.parentElement
        zvacsitMnozstvo(parent, arrayofAddedObjects,"plus")
        prepocitaj(arrayofAddedObjects) 
    }
    if(target.classList.contains("fa-chevron-down")){
        const parent = target.parentElement
        zvacsitMnozstvo(parent, arrayofAddedObjects,"minus")
        prepocitaj(arrayofAddedObjects) 
    }
})




function prepocitajPridaneMnozstvo(array,object){
    let objectExist = false;
    let firstPush = false 
    if(array.length == 0){
        array.push(object)
        objectExist = true
        firstPush = true
    }else{

        array.forEach((element,index) =>{
            if (element.name == object.name){
                if (element.name == deletedName)
                {
                    element.insertedValue = 0
                    deletedName = ""
                }
                 objectExist = true
                 firstPush = false
            }
        })
    }

    if (objectExist == true && firstPush == false){
        array.forEach((element) =>{

            if (element.name == object.name){
                console.log("element", element);
                console.log("element-value", element.insertedValue);
                console.log("object-value", object.insertedValue);
                element.insertedValue += object.insertedValue
            }
        })
    }else if(objectExist == false){
        array.push(object)
        firstPush = true 
    }
}



export default arrayofAddedObjects