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

var alumnos = [{nombre: 'Juan Gomez', nota: 7}, {nombre: 'Pedro Rodriguez', nota: 4}, {nombre: 'Roxana García', nota: 8}, {nombre: 'Luciano Lopez', nota: 5}, {nombre: 'Fernanda Gimenez', nota: 6}, {nombre: 'Florencia Martinez', nota: 10}, {nombre: 'Raul Sanchez', nota: 7}, {nombre: 'Sandra Figueroa', nota: 8}]

var alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7)

console.log(alumnosAprobados)



