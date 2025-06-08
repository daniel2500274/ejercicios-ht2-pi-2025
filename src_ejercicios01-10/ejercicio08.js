const listadoProductosOriginal = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
];

const porcentajeIVA = 0.12;

// nuevo arreglo con los precios incluyendo IVA
const productosConIVA = listadoProductosOriginal.map(producto => {
    const precioConCalculoIVA = producto.precio * (1 + porcentajeIVA);
    return {
        nombre: producto.nombre,
        precio: producto.precio,
        precioConIVA: parseFloat(precioConCalculoIVA.toFixed(2))
    };
});

console.log("--- Productos con IVA ---");
console.table(productosConIVA);
const productosFiltradosPorPrecio = productosConIVA.filter(producto => {
    return producto.precioConIVA >= 100;
});

console.log("\n--- Productos Filtrados (precio con IVA >= 100) ---");
console.table(productosFiltradosPorPrecio);

const productosOrdenadosPorPrecio = [...productosFiltradosPorPrecio].sort((productoA, productoB) => {
    return productoA.precioConIVA - productoB.precioConIVA;
});

console.log("\n--- Productos Ordenados por Precio con IVA (menor a mayor) ---");
console.table(productosOrdenadosPorPrecio);