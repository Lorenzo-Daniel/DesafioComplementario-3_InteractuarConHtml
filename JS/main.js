let precio_total = 0;
let nroCupon;
let validarCupon;
let seleccionar;
let direccion;
let apellido;
let nombre;
let nombreUsuario;
let usuarioNuevo;
let registro;
let solicitud;



const saludo = () => {
  alert(
    "Bienvenido a la Tienda de Peliculas!"
  );
  nombre = campoVacio(
    nombre, "Ingresa tu Nombre"
  );
}

//Restringe si los valores son distintos de "si" o "no"
const datoInvalido = (comparado, text) => {
  while (comparado != "si" && comparado != "no") {
    alert(
      "Ingresaste un dato incorrecto"
    );
    comparado = prompt(text).toLowerCase();
  }
  return comparado
}

// Restringe cuando el valor =="" 
const campoVacio = (comparado, text) => {
  comparado = prompt(text).toLowerCase();
  while (comparado === "") {
    alert(
      "Ingresaste un campo vacio"
    );
    comparado = prompt(text).toLowerCase();
  }
  return comparado
}

const solicitudRegistro = () => {
  registro = prompt("Hola " +
    nombre +
    " !" +
    " Ya estas registrado?\nSi\nNo");
  registro = datoInvalido(
    registro, "Hola " +
    nombre +
    " !" + " Ya estas registrado?\nSi\nNo"
  )
  switch (registro) {
    case "si":
      nombreUsuario = campoVacio(
        nombreUsuario, "Ingresa tu Nombre de Usuario"
      );
      break;
    case "no":
      alert(
        "Puedes continuar sin registrate pero si no lo haces no podras acceder a descuentos y promociones ni realizar compras"
      );
      solicitud = prompt(
        "Deseas registrarte?\nSi\nNo").toLowerCase();
      solicitud = datoInvalido(
        solicitud, "Deseas registrarte?\nSi\nNo"
      )
      if (solicitud === "no") {
        break;
      } else if (solicitud === "si") {
        SolicitarDatos();
      }
  }
}

const SolicitarDatos = () => {
  usuarioNuevo = campoVacio(
    usuarioNuevo, "Ingresa tu Nombre"
  );
  apellido = campoVacio(
    apellido, "Ingresa tu Apellido"
  );
  direccion = campoVacio(
    direccion, "Ingresa tu Direccion"
  );
  alert("Registrado correctamente");
}


const mostrarProductos = () => {
  seleccionar = prompt(
    "Elegi un genero: \nTerror\nSuspenso\nAccion"
  ).toLowerCase();
  while (seleccionar != "terror" &&
    seleccionar != "suspenso" &&
    seleccionar != "accion") {
    alert(
      "No se encontro el genero Ingresado"
    )
    seleccionar = prompt(
      "Ingresa un grenero: \nTerror\nSuspenso\nAccion"
    ).toLowerCase();
  }
  return seleccionar
}


const filtrar = (arr, parametro) => {
  return arr.filter(
    (pelicula) => pelicula.genero === parametro
  )
}

const recorrer = (genero) => {
  genero.forEach(element => {
    let comprar = prompt(
      "Deseas comprar " +
      element.nombre.toUpperCase() + " ?" +
      "\nGenero: " +
      element.genero.toUpperCase() +
      "\nPrecio $ " +
      element.precio +
      "\n\nSi | No"
    ).toLowerCase();
    comprar = datoInvalido(
      comprar, "Deseas comprar " +
      element.nombre.toUpperCase() + " ?" +
      "\nGenero: " +
      element.genero.toUpperCase() +
      "\nPrecio $ " +
      element.precio +
      "\n\nSi | No");
    if (comprar === "si") {
      PeliculasSeleccionadas.push(element);
    }
  });
}

const cupon = () => {
  validarCupon = prompt("Tenes un Cupón de Descuento?\nSi\nNo")
  validarCupon = datoInvalido(
    validarCupon, "Tenes un Cupón de Descuento?\nSi\nNo"
  );
  if (validarCupon === "si") {
    nroCupon = prompt(
      "Ingresa tu Número de Cupón"
    );
    if ((registro === "si") || (solicitud === "si")) {
      alert(
        "Tu Cupón " +
        "-" +
        nroCupon +
        "-" +
        " del 10 % de Descuento!!!"
      );
    }
  }
}



const resumen = () => {
  let div = document.getElementById("caja");
  div.className = "caja";
  let resumenPeliculas = document.getElementById("lista");
  let parrafo = document.getElementById("parrafo");
  parrafo.innerText = "Las peliculas seleccionadas son :";
  for (let pelicula of PeliculasSeleccionadas) {
    let li = document.createElement("li");
    li.innerHTML = `<ul> ${pelicula.nombre}
    <li>precio: <b>$${pelicula.precio}</b></li>
    <li>genero: <b>${pelicula.genero}</b></li></ul></br>`;
    resumenPeliculas.appendChild(li);
    let parrafo1 = document.getElementById("parrafo1");
    parrafo1.innerText = `El precio total de tu compra es de: $${precio_total}`
  }
}
saludo();
solicitudRegistro();
mostrarProductos();
const generoSeleccionado = filtrar(peliculas, seleccionar);
recorrer(generoSeleccionado);
cupon();

for (let vendido of PeliculasSeleccionadas) {
  let producto = new Producto(vendido);
  producto.aplicarIva();
  if (((registro === "si") || (solicitud === "no")) && (validarCupon === "si")) {
    producto.aplicarDescuento();
  }
  precio_total += producto.precio;
}


if ((registro === "si") || (solicitud === "si")) {
  resumen();
} else {
  alert(
    "No podes finalizar tu compra si no estas Logueado o Registrado"
  );
  solicitud = prompt(
    "Deseas Ingresar tus datos para finalizar la compra?\nSi\nNo"
  ).toLowerCase();
  solicitud = datoInvalido(
    solicitud, "Deseas Ingresar tus datos para finalizar la compra?\nSi\nNo"
  );
  switch (solicitud) {
    case "si":
      SolicitarDatos();
      resumen();
      break;
    case "no":
      alert("Muchas Gracias por tu Visita");
      break;
  }
}
console.log(PeliculasSeleccionadas);







// let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;


//   const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
//                   {  id: 2,  nombre: "Fideo", precio: 70 },
//                   {  id: 3,  nombre: "Pan"  , precio: 50},
//                   {  id: 4,  nombre: "Flan" , precio: 100}];

// for (const producto of productos) {
//     let contenedor = document.createElement("div");
//     //Definimos el innerHTML del elemento con una plantilla de texto
//     contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                             <p>  Producto: ${producto.nombre}</p>
//                             <b> $ ${producto.precio}</b>`;
//     document.body.appendChild(contenedor);
// }













// let total = 0;
// let total1 = 560;
/* 
function funcion (variable) {
  for(let i=1;i<=10;i++){
    variable += i;
  }
  return variable
} */
/* // La arrow function es una sinjtaxis distinta para experesar la misma cosa de modo supérior. No se decalra la palabra clave funtion sino qu e se decalra antecedida por una const como el eejemplo siguiente:

const funcion = (variable) => {
  for (let i = 1; i <= 10; i++) {
    variable += i;
  }
  return variable
}


let variable = funcion(total);

let variable1 = funcion(total1);

// Objeto litereal. Sintaxis => {clave(atributo) : valor},{clave(atributo) : valor} Su llamdo se hace con Objeto.atributo. Los objetos se separan por ,
let datosUsuario = {
  nombre: "juan",
  apellido: "De los Plalotes",
  edad: 38,
}

//funcion constructora (Tiene dentro un objeto). Se declara igual que una funcion pero se integra el objeto antecedido de la keyword "this".
function objetos(objeto) {
  this.nombre = objeto.nombre;
  this.apellido = objeto.apellido;
  this.edad = objeto.edad;
  this.funcion = () => {
    for (let i = 1; i <= 10; i++) {
      this.edad += i;
    }
    return variable
  }
}

let retorno = new objetos(datosUsuario);

console.log(retorno.funcion());
console.log(retorno.nombre);

//class Se decalra con la keyword class .Se le asigna un identificador(nombre) y se abren llaves, dentro de las llaves se deaclara la keyword "constructor" que tiene la misma estructura que una funcion constructora. En una class las funciones se denominan "metodos" se decalran igual que una funcion sin la keyword "function"
class Clase {
constructor (objeto) {
  this.nombre = objeto.nombre;
  this.apellido = objeto.apellido;
  this.edad = objeto.edad;
}
funcion = ()=> {
  for (let i = 1; i <= 10; i++) {
    this.edad += i;
  }
  return variable
}
}

let clase1 = new Clase(datosUsuario);
clase1 = clase1.funcion();
console.log(clase1);  */
// FUNCIONES DE ORDEN SUPERIOR
/* const mayorQue = (n) => {
  return (m) => m > n;
}
let menecucho = mayorQue(10);
console.log(menecucho(100));


function porCadaUno(array, funcion) {
  for (const el of array) {
    funcion(el);
  }
}

function acumular(num) {
  total += num
}

porCadaUno(array, acumular)

console.log(total) // 10

array.forEach(element => {
  total += element;
});
console.log(total);


const functionte = (parametro, parametro1) => {
  if (parametro < parametro1) {
    return true;
  } else if (parametro > parametro1) {
    return false;
  }
}

console.log(functionte(5, 10)); */

// const array = [{
//   name: "juan",
//   surname: "lopez"
// },{
//   name: "pedro",
//   surname: "lazo"
// }]
// const finder = array.find((elemento) => elemento.name === "juan");
// console.log(finder);
/* const cursos = [{
    nombre: 'Javascript',
    precio: 15000
  },
  {
    nombre: 'ReactJS',
    precio: 22000
  },
  {
    nombre: 'AngularJS',
    precio: 22000
  },
  {
    nombre: 'Desarrollo Web',
    precio: 16000
  },
] */

// const resultado = cursos.filter((el) => el.nombre.includes('JS'));
// const resultado2 = cursos.filter((el) => el.precio < 14000);

// console.log(resultado)
/* [
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'Angular', precio: 22000}
] */


// console.log(resultado2) // []
/* let total = cursos.reduce((juan, donJose) => juan + donJose.precio,0);

const iva =  (parametro)=> {
  return parametro * 1.21;
}

let totalConIva = iva(total);
console.log(total) */
// const numeros = [50, 12, 25, 39, 42];

// let reslutadoSort = numeros.sort((a, b) => b - a);
// console.log(reslutadoSort);

// const numeros = [201, 202,43, 24, 5];

// let resultado = numeros.sort((a, b) => a - b);
// console.log(resultado);

// const palabras = [{
//     nombre: "Adrian",
//     edad: 25
//   },
//   {
//     nombre: "Belen",
//     edad: 59
//   },
//   {
//     nombre: "Camilo",
//     edad: 16
//   },
//   {
//     nombre: "Daniel",
//     edad: 125
//   },
//   {
//     nombre: "Daniel",
//     edad: 125
//   }
// ];

// let resultado = palabras.sort((a, b) => {
//   if (a.nombre > b.nombre) {
//     return  1;
//   }
//   if (a.nombre < b.nombre) {
//     return - 1;
//   }
//   return 0;
// });

// console.log(resultado);