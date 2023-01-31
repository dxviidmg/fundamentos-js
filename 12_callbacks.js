// setTimeOut 


console.log('antes setTimeout')
setTimeout(printHelloWorld, 1000);


console.log('despues setTimeout')


function printHelloWorld(){
    console.log('hola')
}


function printHelloWorld2(n){
    console.log('hola2', n)
}

console.log('Antes setI')
const myInterval = setInterval(printHelloWorld2, 2000, 'messi');
console.log('desp setI')

setTimeout(() => clearInterval(myInterval), 5001);

//Callback anonimo

setTimeout((name) => console.log('hola', name), 100, 'seuz');