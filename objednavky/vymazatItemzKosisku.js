
import updateCart from "./shopingCart.js"
import arrayofAddedObjects from "./makeOrder.js";
const totalPrice = document.querySelector(".total-price")

function DeleteItem(e, array){

    const name = e.previousElementSibling.previousElementSibling.textContent
    array = array.filter((element)=>{
        element.insertedValue == 0
        return  element.name !== name
    })
    totalPrice.textContent = "0€"
    updateCart(array)

    return array
}



export default DeleteItem