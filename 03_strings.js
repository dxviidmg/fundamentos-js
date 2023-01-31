const saludo = "Hola, soy "
const nombre = "David"
const edad = "30"

m = saludo + nombre + ". Tengo " + edad
console.log(m)

console.log(m.length)

let e = ""

e += "xd"

console.log(e)

let sa = "que onda morro"
console.log(sa.charAt(0))
console.log(sa[0])

//indexof and lasindexof
const mensaje = "amigo we amigo"
console.log(mensaje.indexOf("amigo"))
console.log(mensaje.lastIndexOf("amigo"))

//repeat
const palabra = "No"
console.log(palabra.repeat(3))

//substring

console.log(sa.substring(4, 8))

//substr
console.log(sa.substr(-5))

//sicle

m = "hola mundo"

console.log(m.slice(4, 8))
console.log(m.slice(-3))
console.log(m.slice(-4, -1))

console.log(m.startsWith('ho'))
console.log(m.startsWith('oh'))

console.log(m.includes('hola'))
console.log(m.includes('perrito'))
console.log(m.includes('hola', 1))