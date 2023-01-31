for (let i=0; i<10; i++){
    console.log(i)
}
console.log('end')
console.log('-------------------')

const num = 9;
const maximo = 10
for (let i=1; i<=maximo; i++){
    console.log(num, 'x', i, '=', i*num)
}
console.log('end')

let contador = 0
let acumulador = 0
let lower2 = 0
let upper2 = 100

for (let i=lower2; i<=upper2; i++){
    if (i%2==0){
        contador++
        acumulador+=i
    }
}
console.log('contador', contador)
console.log('acumulador', acumulador)
console.log('end')

for (let i=9; i>0; i-=2){
    console.log('*'.repeat(i))
}

// FOR ANIDADO

let lower3 = 0
let upper3 = 10

for (let i=lower3; i<=upper3; i++){
    let contador2 = 0
    let divs = ''
    for (let j=0; j<=i; j++){
        if (i%j==0){
            contador2++
            divs += j + ', ' 
        }
    }
    console.log(i, 'tiene', contador2, 'divisores', divs)
//    if (contador2>24){
//        console.log(i, 'tiene', contador2, 'divisores', divs)
//    }
}

//////////////////////////////////////////
// WHILE

let i = 0

while (i<10) {
    console.log(i)
    i++
}

console.log('-------------------')
const generateRandomNumber = () => Math.floor(Math.random()*10)
let sum = 0
while (sum<10) {
    console.log(sum)
    let n = generateRandomNumber()
    let n2 = generateRandomNumber()
    sum = n + n2
//    console.log(sum)
}
console.log(sum)

console.log('-------------------')


let sum2 = 0
while (true) {
    console.log(sum2)
    let n2 = generateRandomNumber()
    let n22 = generateRandomNumber()
    sum2 = n2 + n22
    if (sum2 > 10){
        break
    }
    console.log(sum2)
}
console.log(sum2)

console.log('-------------------')

for (let i3=1; i3<=10; i3++){
    console.log(i3*4+2020)
}