document.addEventListener("DOMContentLoaded", () => {
    const btnAgregarFoto = document.getElementById("btnAgregarFoto");
    const btnEliminar = document.getElementById("btnEliminar");
    const addProduct = document.getElementById("addProduct");

    const productForm = document.getElementById("productForm");
    const productPhoto = document.getElementById("productPhoto");

    const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
    const alertaValidaciones = document.getElementById("alertaValidaciones");
    const productsList = document.getElementById("productsList"); // Asegúrate de tener este elemento en tu HTML

    let isValid = true;
    let datosProducto = new Array;

    // Función para Cloudinary
    let widget_cloudinary = cloudinary.createUploadWidget({
        cloudName: "du0gwlxor",
        uploadPreset: "cookies",
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log("Imagen subida con éxito", result.info);
            productPhoto.src = result.info.secure_url;
        }
    });

    btnAgregarFoto.addEventListener("click", (e) => {
        e.preventDefault();
        widget_cloudinary.open();
    }, false);

    btnEliminar.addEventListener("click", (e) => {
        e.preventDefault();
        productPhoto.src = "";
    });

    addProduct.addEventListener("click", (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value.trim();
        const productDescription = document.getElementById('productDescription').value.trim();
        const productPrice = document.getElementById('productPrice').value.trim();
        const productImage = productPhoto.src;

        // Borra datos de validaciones
        alertValidacionesTexto.innerHTML = "";
        alertaValidaciones.style.display = "none";
        isValid = true;

        // Validaciones con expresiones regulares
        const nameValidation = /^[a-zA-Z\s]{3,30}$/;
        const descriptionValidation = /^[a-zA-Z\s]{10,200}$/;
        const priceValidation = /^\d+(\.\d{1,2})?$/;

        let mensajes = [];

        if (!nameValidation.test(productName)) {
            mensajes.push("El nombre del producto debe tener entre 3 y 30 caracteres.");
            isValid = false;
        }

        if (!descriptionValidation.test(productDescription)) {
            mensajes.push("La descripción del producto debe tener entre 10 y 200 caracteres.");
            isValid = false;
        }

        if (!priceValidation.test(productPrice)) {
            mensajes.push("El precio ingresado no es correcto, solo números.");
            isValid = false;
        }

        if (!productImage) {
            mensajes.push("Sube una foto del producto.");
            isValid = false;
        }

        if (!isValid) {
            alertaValidaciones.classList.remove("d-none");
            alertValidacionesTexto.innerHTML = mensajes.join("<br>");
            return;
        } else {
            alertaValidaciones.classList.add("d-none");

            // Crear el producto
            let producto = {        
                title: productName,
                description: productDescription,
                price: productPrice, 
                image: productImage,
               
            };

            datosProducto.push(producto);
            console.log(datosProducto);

            // Crear tarjetas de producto
            createCards(datosProducto);

            // Borra el formulario
            productForm.reset();
            productPhoto.src = "";
        }
    });

    function createCards(products) {
        console.log(products.length);
        productsList.innerHTML = "";
        products.forEach(p => {
            console.log(p.id, p.title, p. description, p.price, p.image);
            productsList.insertAdjacentHTML("beforeend",
                `<div class="card" style="width: 18rem;">
                <img src=${p.image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <p class="card-text">${p.description}</p>
                  <p class="card-text">${p.price}</p>                  
                  <a href="#" class="btn btn-primary">Borra producto</a>
                </div>
              </div>`
            );
        });
    }
});


