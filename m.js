// == Data de ejemplo para los ejercicios ================================================================================================

const sampleData = 'Martin|Melo Godínez|25|H|7721018271|martin@actosoft.com.mx|||Javacript|5|||Python|5|||Java|3|||PHP|2|||C#|0|||'

// == Ejercicio #1 =======================================================================================================================
/*
  Una persona aplica para una vacante como Developer, llena un formulario de registro y al momento de enviar, toda la información se le   
  muestra en un string como el siguiente:
  
  'Martin|Melo Godínez|25|H|7721018271|martinmelo@actosoft.com.mx|||Javacript|5|||Python|5|||Java|3|||PHP|2|||C#|1|||'
  
  El problema es que el backend de registro espera la información como un objeto, de la siguiente manera:
  {
    name: 'Martin',
    lastName: 'Melo Godínez',
    age: 25,
    gender: 'H',
    phone: '7721018271',
    email: 'martinmelo@actosoft.com.mx',
    programmingLanguages: [
      { name: 'Javascript', experienceLevel: 5 },
      { name: 'Python', experienceLevel: 5 },
      { name: 'Java', experienceLevel: 3 },
      { name: 'PHP', experienceLevel: 2 },
      { name: 'C#', experienceLevel: 1 },
    ]
  }

  Parte de tu primer reto para aplicar a la vacante, es convertir ese string a un objeto, para que tu registro llegué correctamente 
  a la base de datos

  Crea un función llamada `formatRegisterData`, que recibirá como parámetro el string y retornará el objecto definido anteriormente
*/

const splitString = (string, spliter) => string.split(spliter)

const formatRegisterData = (registerDataString) => {
    data1 = splitString(registerDataString, '|||')
//    console.log(data1)
    pesonal_information = splitString(data1[0], '|') 
//    console.log(pesonal_information)
    pesonal_information 

    programmingLanguages = data1.slice(1, -1).map((e)=>{
        r =  splitString(e, '|')
        experienceLevel = parseInt(r[1])
        name = r[0]
        return {name, experienceLevel}
    })

    myObject = {
        name: pesonal_information[0],
        lastName: pesonal_information[1],
        age: parseInt(pesonal_information[2]),
        gender: pesonal_information[3],
        phone: pesonal_information[4],
        email: pesonal_information[5],
        programmingLanguages
      }

    return myObject
}

// == Ejercicio #2 =======================================================================================================================
/*
  ¡Excelente! Ahora tu data es un objeto, pero te piden validar los datos del mismo antes de enviar la data.

  Deberás crear una función llamada validateRegisterData que reciba como parámetro el objeto y tomar en cuenta las siguientes validaciones:
  - El nombre deberá tener una longitud de al menos 3 caracteres
  - Los apellidos deberán ser al menos dos palabras separadas por un espacio
  - La edad deberá ser un número y ser mayor a 16 años
  - El género únicamente podrá tener los valores 'H' y 'M', no puede contener ninguno otro
  - El teléfono deberá contener únicamente números y tener una longitud mínima de 10 caracteres
  - El correo electrónico deberá contener el caracter @ y tener al menos una letra antes del caracter @
  - `programmingLanguages` debe de ser un arreglo y contener al menos un elemento
  - Cada elemento del programmingLanguages deberá de tener las propiedades `name` y `experienceLeve`
  - `programmingLanguages.name` deberá tener al menos una longitud de un caracter y deberá iniciar siempre con letra mayúscula
  - `programmingLanguages.experienceLeve` deberá ser un número y este deberá ser mayor a 0

  La función deberá retornar un `true` si todas las validaciones se cumplen y un `false` en caso de que al menos una falle
*/

const validateRegisterData = (registerData) => {
//    console.log(registerData)
    const {name, lastName, age, gender, phone, email, programmingLanguages} = registerData
    console.log(phone, typeof phone)
    if (name.length < 3){
        return false
    }

    if (splitString(lastName, ' ').length < 2){
        return false
    }

    if (Number.isInteger(age) === false || age < 16 ) {
        return false
    }
    if (['H', 'M'].includes(gender) === false){
        return false
    }

    if (/^\d+$/.test(phone) === false || phone.length < 10){
        return false
    }

    if (email.includes('@') === false || email.startsWith('@')){
        return false
    }

    //// checar aqui

    programmingLanguages.forEach(programmingLanguage => {
//        console.log(programmingLanguage)
        console.log(programmingLanguage.experienceLevel, typeof programmingLanguage.experienceLevel)
        if ('name' in programmingLanguage === false){
            return false           
        }
        if ('experienceLevel' in programmingLanguage === false){
            return false           
        }
        if ( Number.isInteger(programmingLanguage.experienceLevel) === false || programmingLanguage.experienceLevel <= 0){
            console.log('que onda')
            return false
            console.log('que onda 2')
        }

    });    
    console.log('que ondaa3')

    return true

}

const registerData = formatRegisterData(sampleData)
const validationResult = validateRegisterData(registerData)


console.log('La data es correcta?', validationResult)

// == Ejercicio #3 =======================================================================================================================
/*
  Por último, una vez que transformaste la data a un objeto y la validaste, es momento de que muestres dicha data en la terminar de una 
  forma similar a una tabla.
  
  La salida esperada es la siguiente:

  |  firstName  |  lastName  |  age  |  gender  |  phone  |  email  |  programmingLanguages  |
  |  Martin  |  Melo Godinez  |  25  |  H  |  7721018271  |  martinmelo@actosoft.com.mx  |  Javascript, Python, Java, PHP, C  |

  Puntos a considerar:
  - La primer línea que debe aparecer en la consola será la de los encabezados, estaba deberá de contener
      LOS NOMBRES DE LAS KEY DENTRO DE LOS ARREGLOS. Hint: ¿Hay alguna forma de convertir las keys de los objetos a arreglos? Object.k__s
  - La segunda línea que debe aparecer en la consola será la de los valores de los objetos, en el orden especificado en la tabla
  - Deberán de existir dos espacios entre cada pipe (|) y un valor.
  - La columna de lenguajes de programación únicamente mostrará los nombres de los lenguajes (no el nivel de experiencia) separados por comas.

  Para esto tendrás una función llamada printRegisterData que recibirá el objeto, y no retornará nada, simplemente imprimirá
  Cabe aclarar que validar si el objeto es válido (validateRegisterData) antes de imprimirlo. Si el objeto no es válido
  deberás de imprimir un mensaje diciendo "El objeto no es válido, uno o más de sus valores no cumple con el formato requerido"
*/

const printRegisterData = (registerData) => {
  // Validar la data con la función validateRegisterData

  // Imprimir la tabla
}

printRegisterData(formatRegisterData(sampleData))