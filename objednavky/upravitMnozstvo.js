
function zvacsitMnozstvo(button,array,znamienko){
    const meno = button.parentElement.previousElementSibling.firstElementChild.textContent

    var pridanaHodnota
    if(znamienko == "plus")
    {
        let zadaneMozstvo = button.nextElementSibling.textContent
         zadaneMozstvo = parseInt(zadaneMozstvo)
        pridanaHodnota = zadaneMozstvo + 1
        button.nextElementSibling.innerText = pridanaHodnota

        button.nextElementSibling.nextElementSibling.style.display = "block"
        button.nextElementSibling.nextElementSibling.classList.remove("visible")
        
    } else {
        let zadaneMozstvo = button.previousElementSibling.textContent

        zadaneMozstvo = parseInt(zadaneMozstvo)

        pridanaHodnota = zadaneMozstvo - 1
        pridanaHodnota = parseInt(pridanaHodnota)
        button.previousElementSibling.innerHTML = pridanaHodnota

        if (zadaneMozstvo == 2 ){
            button.style.display = "none"
        }
    }

    array.forEach(element => {
        if(element.name == meno)
        element.insertedValue = pridanaHodnota
    });
}

export default zvacsitMnozstvo