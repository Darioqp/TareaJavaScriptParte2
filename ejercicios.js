// Ejercicio 1

function cambiar(color) {
    let fondo = document.getElementById('cuerpo')
    fondo.style.background = color
}

// Ejercicio 2

let comentario = document.querySelector('#area')

comentario.addEventListener('keypress' , function(e) {

    let cantidadDeCaracteresIngresados = comentario.value.length + 1
    console.log(cantidadDeCaracteresIngresados)
})

// Ejercicio 3





