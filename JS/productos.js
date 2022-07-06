const PeliculasSeleccionadas = [];

const peliculas = [
    {nombre: "Pelicula - 1",genero :"terror", precio: 150 },
    {nombre: "Pelicula - 2",genero :"terror", precio: 180 },
    {nombre: "Pelicula - 3",genero :"terror", precio: 120 },
    {nombre: "Pelicula - 4",genero :"terror", precio: 1600 },
    {nombre: "Pelicula - 5",genero :"terror", precio: 450 },
    {nombre: "Pelicula - 6",genero :"terror", precio: 600 },
    {nombre: "Pelicula - 7",genero :"terror", precio: 80 },
    {nombre: "Pelicula - 1",genero :"accion", precio: 280 },
    {nombre: "Pelicula - 2",genero :"accion", precio: 320 },
    {nombre: "Pelicula - 3",genero :"accion", precio:  150},
    {nombre: "Pelicula - 4",genero :"accion", precio: 500 },
    {nombre: "Pelicula - 5",genero :"accion", precio:  1100},
    {nombre: "Pelicula - 6",genero :"accion", precio: 70 },
    {nombre: "Pelicula - 7",genero :"accion", precio: 65 },
    {nombre: "Pelicula - 1",genero :"suspenso", precio: 280 },
    {nombre: "Pelicula - 2",genero :"suspenso", precio: 320 },
    {nombre: "Pelicula - 3",genero :"suspenso", precio:  150},
    {nombre: "Pelicula - 4",genero :"suspenso", precio: 500 },
    {nombre: "Pelicula - 5",genero :"suspenso", precio:  1100},
    {nombre: "Pelicula - 6",genero :"suspenso", precio: 70 },
    {nombre: "Pelicula - 7",genero :"suspenso", precio: 65 }
];

class Producto {
    constructor(objeto) {
        this.nombre = objeto.nombre;
        this.precio = objeto.precio;
        this.iva = 21;
        this.descuento = 10;
    }

    aplicarIva() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento) / 100);
    }
} 