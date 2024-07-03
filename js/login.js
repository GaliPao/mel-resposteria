

// mostrar alertas de bootstrap
function mostrarAlerta(campoId, mensaje, tipo = "warning") {
    const alertContainer = document.getElementById(campoId);
    if (alertContainer) {
        alertContainer.innerText = mensaje;
        alertContainer.className = `alert alert-${tipo}`;
        alertContainer.style.display = 'block';
    }
}
// ocultaar alertas de bootstrap
function ocultarAlerta(campoId) {
    const alertContainer = document.getElementById(campoId);
    if (alertContainer) {
        alertContainer.style.display = 'none';
    }
}

// ==============================REGISTRO =============================================//

const registroForm = document.querySelector("#registroFormulario");
registroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // ocultar las alertas al iniciar la validación
    ocultarAlerta("nameAlert");
    ocultarAlerta("emailRegistroAlert");
    ocultarAlerta("telefonoAlert");
    ocultarAlerta("passwordRegistroAlert");
    ocultarAlerta("passwordConfirmAlert");
    ocultarAlerta("registroSuccessAlert");

    const nombre = document.querySelector("#name").value;
    const telefono = document.querySelector("#telefono").value;
    const emailRegistro = document.querySelector("#emailRegistro").value;
    const contraseñaRegistro = document.querySelector("#passwordRegistro").value;
    const confirmContraseña = document.querySelector("#passwordConfirm").value;

    // expresiones regulares y validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    const telefonoRegex = /^(?!00)\d{2}(?!.*(\d)\1{6})\d{8}$/; //solo numeros como entrada , no se permite numeros repetidos consecutivamente 6 veces ni que empiezen con 00
    const contraseñaRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;  //contraeña con IhateRegEx para contraseñas con 1 Mayuscula,1 minuscula, 1 numero, 1 caracter especial de los siguientes  " #?!@$ %^&*- "

    let errores = false;

    if (!emailRegex.test(emailRegistro)) {
        mostrarAlerta("emailRegistroAlert", "Email no válido.");
        errores = true;
    }

    if (!telefonoRegex.test(telefono)) {
        mostrarAlerta("telefonoAlert", "Teléfono no válido. Debe contener 10 dígitos, no se permiten números repetidos consecutivamente.");
        errores = true;
    }

    if (!contraseñaRegex.test(contraseñaRegistro)) {
        mostrarAlerta("passwordRegistroAlert", "Contraseña no válida. Debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.");
        errores = true;
    }

    if (contraseñaRegistro !== confirmContraseña) {
        mostrarAlerta("passwordConfirmAlert", "Las contraseñas no coinciden.");
        errores = true;
    }

    if (errores) {
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioRegistrado = usuarios.find(user => user.email === emailRegistro);

    if (usuarioRegistrado) {
        mostrarAlerta("emailRegistroAlert", "El correo ya está registrado");
        return;
    }

    usuarios.push({ nombre, telefono, email: emailRegistro, contraseña: contraseñaRegistro });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarAlerta("registroSuccessAlert", "Registro exitoso", "success");

   
});

// =========================================== LOGIN ============================================/////
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // ocultar alertas al iniciar la validación
    ocultarAlerta("emailLoginAlert");
    ocultarAlerta("passwordLoginAlert");

    const email = document.querySelector("#emailLogin").value;
    const contraseña = document.querySelector("#passwordLogin").value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const validarUsuario = usuarios.find(user => user.email === email && user.contraseña === contraseña);

    if (!validarUsuario) {
        mostrarAlerta("emailLoginAlert", "Correo y/o contraseña incorrectos.");
        return;
    }

    mostrarAlerta("emailLoginAlert", `Bienvenido ${validarUsuario.nombre}`, "success");

    // redireccionar a la pagina de index despues de algunos segundos
    setTimeout(() => {
        ocultarAlerta("emailLoginAlert");
    // redireccionar a la página principal 
    window.location.href = 'index.html';
        
    }, 2000);
    
});
