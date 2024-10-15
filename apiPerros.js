let resultados = document.getElementById('resultados')
let loader = document.querySelector('.loader')
let input = document.getElementById('totalImagenes')
let boton = document.getElementById('boton')

async function generarImg() {
    resultados.innerHTML = ''
    try {
        for (let i = 0; i < input.value; i++) {
            const data = await fetch('https://dog.ceo/api/breeds/image/random')
            const response = await data.json()
            console.log(response, i)
            resultados.innerHTML += `<img src="${response.message}" alt="imagen de perrito">`
        }
    } catch (error) {
        console.log(error)
    }
}

generarImg()