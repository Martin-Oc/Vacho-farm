const cena = document.querySelector(".total-price")
function prepocitaj(array){
    let pocetRastlin = 0
    let celkovaSuma = 0
    array.forEach(element => {
        pocetRastlin = element.insertedValue


        let cenaRastliny = element.price.slice(0,4)
        let cenaRastliny2 = cenaRastliny.replace(",",".")
        let CenaFloat = parseFloat(cenaRastliny2)

        let sumaZaElement = pocetRastlin * CenaFloat
        
        celkovaSuma = celkovaSuma + sumaZaElement
        
        console.log(celkovaSuma);
        cena.innerText = `${celkovaSuma.toFixed(2).replace(".",",")}€`
       /* const ahoj = "0,015"
        let ahoj2 = ahoj.replace(",",".")
        console.log(ahoj2)
        let CenaInt2 = parseFloat(ahoj2)
        console.log(CenaInt2)*/

       
        
    });
}

export default prepocitaj