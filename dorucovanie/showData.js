const firma = document.querySelectorAll(".firma")

const DA = document.querySelector(".inaAdresa")
const firmaCheckbox = document.querySelector("#firma")
const DAChckbox = document.querySelector("#inaAdresa")
const inaAdresa = document.querySelector(".inaAdresa")

 export function showData(array){

    const Name = document.querySelector("#Meno")
    const Priezvysko = document.querySelector("#Priezvisko")
    const UlicaUdaje = document.querySelector("#Ulica")
    const MestoUdaje = document.querySelector("#Mesto")
    const PSCUdaje = document.querySelector("#PSC")
    const Email = document.querySelector("#Email")
    const TelefonneCislo = document.querySelector("#Phone")
    const NazovFirmy = document.querySelector("#Firma")
    const UlicaDorucovaciaAdresa = document.querySelector("#Ulica-DA")
    const MestoDorucovaciaAdresa = document.querySelector("#Mesto-DA")
    const PSCDorucovaciaAdresa = document.querySelector("#PSC-DA")
    const ICO = document.querySelector("#ICO")
    let DIC = document.querySelector("#DIC") 

    
    Name.value = array.Meno
    Priezvysko.value = array.Priezvysko
    UlicaUdaje.value= array.UlicaUdaje
    MestoUdaje.value= array.MestoUdaje
    PSCUdaje.value= array.PSCUdaje
    Email.value= array.Email
    TelefonneCislo.value= array.TelefonneCislo

    if(array.firma)
    {
        firma.forEach(element =>{
            element.classList.remove("hide")
        })
        NazovFirmy.value = array.NazovFirmy
        DIC.value = array.DIC
        ICO.value = array.ICO
        try {
            firmaCheckbox.checked = true;
        } catch (error) { }
    }

    if(array.OsobneUdaje){
        inaAdresa.classList.remove("hide")
        UlicaDorucovaciaAdresa.value = array.UlicaDorucovaciaAdresa
        MestoDorucovaciaAdresa.value = array.MestoDorucovaciaAdresa
        PSCDorucovaciaAdresa.value = array.PSCDorucovaciaAdresa
        try {
            DAChckbox.checked = true;
        } catch (error) { }
    }
}

export default showData