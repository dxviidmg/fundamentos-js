//Mutabilidad

const a = [1, 2, 3]
const a2 = a

a[0] = 4

console.log(a)
console.log(a2)
console.log(a===a2)

/*
a => [0x1, 0x2, 0x1]
a2 = a
a2 => [0x1, 0x2, 0x1]
 Copias direcciones de memoria, no los valores
*/

const ar = [...a]

a[0] = 5

console.log(ar)
console.log(a)
console.log(ar===a)

const destructuringArray = ['David', 'Mejia', 30]
const [name, lastName, age] = destructuringArray
console.log(name, lastName, age)


// str to list
const califs = '5,6,7,8,6,7,5,6,7,9,10'
const calisfArray = califs.split(',')
console.log(calisfArray)


const calisfArrayNumber = []

for (let i=0; i<calisfArray.length; i++){
    calisfArrayNumber.push(Number(calisfArray[i]))
}

console.log(calisfArrayNumber)

// list to str
console.log('list to str', calisfArrayNumber.join(', '))

console.log(Array.isArray(calisfArrayNumber))
console.log(Array.isArray(2))

const itArray = [10,20 ,30, 40]

console.log('for of')
for (const number of itArray) {
    console.log(number)
}

console.log('for in')
for (const number in itArray) {
    console.log(number)
}