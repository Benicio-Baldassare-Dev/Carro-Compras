const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto"
    nuevoProducto.innerHTML = `
    <img src="./img/productos/${producto.id}.jpeg" alt="Producto 1">
    <h3>${producto.nombre}</h3>
    <h4>${producto.varietal}</h4>
    <p class="precio">$${producto.precio}</p>
    <button id="btnAddCart">Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoProducto);
    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto));
    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => alertAddCart());
  });
}
crearTarjetasProductosInicio(Productos);