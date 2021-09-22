// Ejercicio 1

function cambiar(color) {
    let fondo = document.getElementById('cuerpo')
    fondo.style.background = color
}

// Ejercicio 2

let mensaje = document.getElementById('mensaje')
let contador = document.getElementById('contador')

mensaje.addEventListener('input', function(e){

    const cantidadMaxima = e.target.getAttribute('maxlength')
    const cantidadActual = e.target.value.length
    contador.innerHTML = `${cantidadActual}/${cantidadMaxima}`
})


// Ejercicio 3





