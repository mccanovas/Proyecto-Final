class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Iniciando arrays para las categorias de los productos
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

//Funcion para calcular el precio final de la compra
function calcularPrecio(precioProducto, cantidadProducto, costoEnvio) {
    return (precioProducto * cantidadProducto) + costoEnvio;
}

//Solicito al usuario el ID del producto
let productoSeleccionado = parseInt(prompt("Ingrese el ID del producto para añadirlo al carrito:"));
const sombraAñadida = sombras.find(sombra => sombra.id === productoSeleccionado);
const labialAñadido = labiales.find(labial => labial.id == productoSeleccionado);

//Solicito al usuario la cantidad de la prenda
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado:"));

//Costo de envio promedio
const envio = 600;

//Salidas de consola indicando el precio final de la compra
if (productoSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionado <= 2) {
    alert("El precio final de tu compra es: $" + calcularPrecio(sombraAñadida.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    sombraAñadida.vender(cantidad);
} else if (productoSeleccionado <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(labialAñadido.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    labialAñadido.vender(cantidad);
}
 else {
    alert("Ingresa un ID valido");
}