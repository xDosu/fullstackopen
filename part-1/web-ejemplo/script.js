/* 
Variables -> Tipado debil y dinamico 
Tipos primitivos (inmutables) : 
    - number
    - string
    - boolean
    - undefined
    - null
    - BigInt
    - Symbol
Tipos no primitivos (mutables) :
    - Objectos
    - Arrays
    - Sets
    - Funciones
*/

console.log("Hola mundo")

let firstName = "Tomas" // Variable no global
const lastName = "Fernandez" // Constante
var age = 23 // Variable global (no recomendado)

{
    var age = 21
}

{
    let firstName = "Gojo"
}

console.log(firstName)
console.log(lastName)
console.log(age)

let variableInmutable = "Gojo Satoru"
variableInmutable.toUpperCase() // -> No se puede modificar una string, si se pueden crear "copias".
console.log(variableInmutable)

variableInmutable = variableInmutable.toUpperCase() // -> De esta manera hacemos que "apunte" a algo nuevo, no se puede cambiar lo que tiene dentro por si.
console.log(variableInmutable)

const list = [] // -> Mutable. Que sea constante significa que no se puede reasignar, no que no se pueda cambiar el valor de adentro.
list.push(1)
console.log(list)

/* Arreglos */

const t = [1, -1, 3]

// Recorrer un arreglo con forEach, pasando como parametro los propios elementos del array.
t.forEach(value => {
    console.log(value);
})

/* Objetos */

const persona = {
    name: 'Tomas',
    twitter: 'tomyfer11',
    age : 23
}

console.log(persona)
persona.profesion = "programador" // Se puede agregar variables de esta manera al objeto.
console.log(persona)

const field = 'twitter'

console.log(persona[field]) // Forma de acceder a variables del objeto a traves de otra variable. Esto se usa mucho en React !!!.

/* Funciones */

const sumar = ( operando1, operando2 ) => {
    return operando1 + operando2
} 

console.log(sumar(2,5))

/* Si hay un solo parametro, podemos excluir los parentesis. De igual manera si tiene una sola linea, podemos excluir las llaves.*/

const imprimir = p => console.log(p)
imprimir("Esto es una funcion de un parametro")

/* Esto es muy util a la hora de por ejemplo manejar arreglos, de manera de hacer el codigo mas legible */

const e = [1, 2, 3]
const tSquared = e.map(p => p * p) // -> Como parametro el metodo 'map' recibe una funcion.

console.log(tSquared)

/* Otra forma de definir una funcion */

const restar = function(a,b){
    return a - b
}

console.log(restar(10,5))