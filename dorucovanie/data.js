
const email = document.querySelector("#email")

const odoslať = document.querySelector(".odoslať")
const form = document.querySelector(".form")
var DorucovacieData = {}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const data = storeData()

    sessionStorage.setItem("data", JSON.stringify(data));
    window.location.href = "zhrnutie.html"
})


function storeData(){
    const Meno = document.querySelector("#Meno").value
    const Priezvysko = document.querySelector("#Priezvisko").value
    const UlicaUdaje = document.querySelector("#Ulica").value
    const MestoUdaje = document.querySelector("#Mesto").value
    const PSCUdaje = document.querySelector("#PSC").value
    const Email = document.querySelector("#Email").value
    const TelefonneCislo = document.querySelector("#Phone").value
    const NazovFirmy = document.querySelector("#Firma").value
    const UlicaDorucovaciaAdresa = document.querySelector("#Ulica-DA").value
    const MestoDorucovaciaAdresa = document.querySelector("#Mesto-DA").value
    const PSCDorucovaciaAdresa = document.querySelector("#PSC-DA").value
    const ICO = document.querySelector("#ICO").value
    const DIC = document.querySelector("#DIC").value
    const firma = document.querySelector("#firma").checked
    const OsobneUdaje = document.querySelector("#inaAdresa").checked

    return DorucovacieData = {Meno, Priezvysko, UlicaUdaje, MestoUdaje, PSCUdaje, Email, TelefonneCislo,
        NazovFirmy,UlicaDorucovaciaAdresa, MestoDorucovaciaAdresa, PSCDorucovaciaAdresa,
        ICO, DIC,firma, OsobneUdaje}
}