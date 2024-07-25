const cardsProd = document.getElementById('cards');

const peticionA = async () => {
    const respuesta = await fetch("./productos.json");
    const datos = await respuesta.json();
    const data = await datos
    for( item of data ) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text"> Descripcion: ${item.descripcion}</p>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    }
}

peticionA();