function alertAddCart(){
    setTimeout(() => {
        Swal.fire({
            position: "top",
            icon: "success",
            title: "¡Se añadió al carrito con éxito!",
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2000
        });
    }, 0);
}

function alertRestartCart(){
    setTimeout(() => {
        Swal.fire({
            position: "top",
            icon: "warning",
            title: "¡Se vacio el carrito!",
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2000
        });
    }, 0);
}

function alertBuyCart(){
    setTimeout(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Gracias por su compra!",
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 2000
        });
    }, 0);
}
