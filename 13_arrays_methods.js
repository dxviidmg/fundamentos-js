// IndexOf
// Si existe regresa el indice
// Si existen 2, regresa el primer indice
// Si no existe, regresa -1
const arrIndexOf = [1, 2, 2, 3]

console.log(arrIndexOf.indexOf(1))
console.log(arrIndexOf.indexOf(2))
console.log(arrIndexOf.indexOf(4))

// Reverse
// Es mutable
console.log(arrIndexOf.reverse())

// Slice
// Es inmutable
const dogNames = ['Pugberto', 'Pugrunga', 'Pugstavo', 'Puglfredo', 'Puglises', 'Pugbaldo', 'Pugdolfo']

console.log(dogNames.slice(3))
console.log(dogNames.slice(3, 5))
console.log(dogNames.slice(-3))

//includes
// valida si existe un elemento en un arreglo
console.log(dogNames.includes('Pugstavo'))
console.log(dogNames.includes('Doug'))


// find

const notes = [10, 7, 5, 5, 7, 9]

const noteFound = notes.find((note) => {
    return note < 6
})

console.log('noteFound', noteFound)

Array.prototype.myFind = function (callback){
    console.log(this)
    if (this.length>0){
        for(let i=0; i<this.length; i++){
            const r = callback(this[i])
            if (r) return this[i]
        }
        return undefined
    }
}

const customNoteFound = notes.myFind((note) => {
    return note < 6
})

console.log('customNoteFound', customNoteFound)

//ForEach
//No retorna

notes.forEach((note, i) => {
    console.log(note, i)
});

//Map
// Retorna otro arreglo con la misma cantidad que el arreglo input

x2 = notes.map((value) =>{
    return value*2
})

console.log(x2)

//Some: minimo uno cumple
const temp = [36, 35, 35.5, 38]

const someHasTemp = temp.some((value)=> value>= 38)
console.log(someHasTemp)

// Every: todos cumplen 

const filaJuegoMecanico = [180, 165, 170, 155]

const todosSuben = filaJuegoMecanico.every((e) => e >= 160)

console.log('todosSuben', todosSuben)

// Reduce: Es una navaja suiza en javascript
// Permite iterar y acumular al mismo tiempo los valores de arreglos
// Puede retornar un arreglo, un objeto un string o un numero

//Sumar

const s = notes.reduce((acc, currently)=>(acc += currently), 0)

console.log(s)

const words = ['Hello', 'World', 'Community', 'Loves']

const ws = words.reduce((acc, word) => [...acc, `actosft ${word}`] , [] )
console.log(ws)

const frase = 'Messi es GOAT, es el mejor de todos los tiempos, I love you Messi'

const fraseArray = frase.split(' ')

const fao = fraseArray.reduce((acc, value)=>{
    if (acc[value]){
        acc[value] += 1
    }
    else{
        acc[value] = 1
    }
    return acc
}, {})

console.log(fao)