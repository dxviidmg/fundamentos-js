

// 1 Forma tradicional: Funciones de declaracion

function sumarNumeros(){
    // procesamiento
    return 0
}

// 2 Flecha (arrow function) - Funciones de expresion - ES6

const restarNumeros = (/*Parametros*/) => {
    // procesamiento
    return 0
}

const saludo = () => {
    console.log('soy una function')
}

saludo()

// Parametros

const multiplicarNumeros = (n, m=1/*Parametros*/) => {
    console.log('Voy a multiplicar 2 numeros', n, m)
    return n*m
}


a = multiplicarNumeros(5, 6, /*Argumentos*/)
console.log(a)
a = multiplicarNumeros(a, /*Argumentos*/)
console.log(a)

//Ejerecicio 1
 const calcularAreaCuadrado = (l) => {
    return l**2
 }

 console.log(calcularAreaCuadrado(2))

 const sumarCalificaciones = (c1, c2, c3) =>{
    return c1 + c2 + c3
 }

 const dividirCalificaciones = (suma, nc) => {
    return suma / nc
}

s = sumarCalificaciones(8, 7, 10)
console.log(dividirCalificaciones(s, 3))