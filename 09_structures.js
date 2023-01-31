console.log(typeof 5)
console.log(typeof 'a')
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log('Array', typeof [1, 2])
console.log('Object', typeof {hola: 'mundo'})

const myArray = [1, 2, 3, 'DF']
console.log(myArray)

// posicion inicia en 1 e indice inicia en 0
//indice = posicion - 1

console.log(myArray.length)
console.log(myArray[myArray.length - 1])

myArray[2] = 'CAMBIO'
console.log(myArray)
myArray.push('push')
console.log(myArray)
myArray.unshift('unshift poone al inicio y shift lo quita')
console.log(myArray)
myArray.splice(1, 0, 'PONER ELEMENTO EN INDEX 1')
console.log(myArray)
myArray.splice(1, 1)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.splice(2, 1)
console.log(myArray)