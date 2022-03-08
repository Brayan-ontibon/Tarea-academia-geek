//declarar las variables 

const FORMULARIO = document.getElementById("formulario")
const TextValorCompra = document.getElementById("valorcompra")
const TextValorDescuento = document.getElementById("valordescuento")
const TextTotal = document.getElementById("total")
const TextAnuncio = document.getElementById("anuncio")
let valorComputador = 820000
let valorCompra = 0
let descuento1 = 15
let descuento2 = 25
let descuento3 = 35

//hacer eventos

FORMULARIO.addEventListener("submit", (e) => {
    e.preventDefault();

    let computadores = document.getElementById("cantidad").value;

    calcularValor(computadores);
});

//hacer procedimeintos 

function ocultar() {
    document.getElementById("formulario").style.display = "none"
}


function calcularValor(cantidad) {
    if (cantidad <= 1) {
        valorCompra = cantidad * valorComputador
        let descuento = 0
        let total = valorCompra
        TextValorCompra.textContent = `el valor de compra es $ ${valorCompra}`
        TextValorDescuento.textContent = `valor descuento $ ${descuento}`
        TextTotal.textContent = `total $ ${total}`
        TextAnuncio.textContent = `No hay descuento en esta compra`

    }
    else if (cantidad => 2 && cantidad <= 4) {
        valorCompra = cantidad * valorComputador
        let porcentaje = (valorCompra * descuento1) / 100
        let descuento = porcentaje
        let total = valorCompra - descuento

        TextValorCompra.textContent = `valor de compra $ ${valorCompra}`
        TextValorDescuento.textContent = `valor descuento $ ${descuento}`
        TextTotal.textContent = `total $ ${total}`
        TextAnuncio.textContent = `El descuento es igual al ${descuento1}%`


        if (cantidad > 4 && cantidad <= 8) {
            valorCompra = cantidad * valorComputador
            let porcentaje2 = (valorCompra * descuento2) / 100
            let descuento = porcentaje2
            let total = valorCompra - descuento

            TextValorCompra.textContent = `valor de compra $ ${valorCompra}`
            TextValorDescuento.textContent = `valor descuento $ ${descuento}`
            TextTotal.textContent = `total $ ${total}`
            TextAnuncio.textContent = `El descuento es igual al ${descuento2}%`
        }

        else if (cantidad > 8 && cantidad <= 12) {
            valorCompra = cantidad * valorComputador
            let porcentaje3 = (valorCompra * descuento3) / 100
            let descuento = porcentaje3
            let total = valorCompra - descuento

            TextValorCompra.textContent = `valor de compra $ ${valorCompra}`
            TextValorDescuento.textContent = `valor descuento $ ${descuento}`
            TextTotal.textContent = `total $ ${total}`
            TextAnuncio.textContent = `El descuento es igual al ${descuento3}%`

        }

        else if (cantidad > 12) {
            valorCompra = cantidad * valorComputador
            let porcentaje = 0
            let descuento = porcentaje
            let total = valorCompra - descuento

            TextValorCompra.textContent = `valor de compra $ ${valorCompra}`
            TextValorDescuento.textContent = `valor descuento $ ${descuento}`
            TextTotal.textContent = `total $ ${total}`
            TextAnuncio.textContent = `No hay descuento en esta compra`

        }
    }
}
