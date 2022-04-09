class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const labiales = [];
const sombras = [];

//Cargo el stock de productos segun su categoria
//Sombras
sombras.push(new Producto("Paleta de sombras Amazonian", 1, 5000, 30));
sombras.push(new Producto("Paleta de sombras All Night", 2, 5000, 10));

//Labiales
labiales.push(new Producto("Labial matte rojo", 3, 1500, 20));
labiales.push(new Producto("Labial brilloso negro", 4, 1400, 40));


//Se muestran los productos al usuario
for (const sombra of sombras) {
    alert("ID (" + sombra.id + ") - " + sombra.nombre);
}
for (const labial of labiales) {
    alert("ID (" + labial.id + ") - " + labial.nombre);
}


//Solicito al usuario el ID del producto
let productoSeleccionado = parseInt(prompt("Ingrese el ID del producto para añadirlo al carrito:"));
const sombraAñadida = sombras.find(sombra => sombra.id === productoSeleccionado);
const labialAñadido = labiales.find(labial => labial.id == productoSeleccionado);

if (productoSeleccionado <= 0) {
    alert("Ingresa un ID válido");
} else if (productoSeleccionado <=2) {
    alert("Seleccionaste " +  sombraAñadida.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (productoSeleccionado <=4) {
    alert("Seleccionaste " + labialAñadido.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID válido");
}
