// === => igualdad exacta
console.log(5 == 5)
console.log('5' == 5)
console.log('5' === 5)

// Buena practica siempre usar igualdad exacta

// Valor Ternarrio

let mc = true
let moduloCompletado = (mc == true) ? 'Simon': 'nelson'
console.log(moduloCompletado)

// Swtich

mes = 3

switch(mes){
    case 1:
        console.log('Enero')
        break
    case 2:
        console.log('Feb')
        break
    case 3:
        console.log('Mar')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Mato')
        break
    case 6:
        console.log('Jun')
        break
    case 7:
        console.log('Jul')
        break
    case 8:
        console.log('ago')
        break
    case 9:
        console.log('s')
        break
    case 10:
        console.log('o')
        break
    case 11:
        console.log('n')
        break    
    case 12:
        console.log('dic')
       break
    
       default:
        console.log('no existe')
}

console.log((5 === 5) && (0===1))
console.log((5 == 5) || (0==1))