
// mostrar alertas de bootstrap
function mostrarAlerta(campoId, mensaje) {
    const alertContainer = document.getElementById(campoId);
    if (alertContainer) {
        alertContainer.innerText = mensaje;
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

    // Ocultar las alertas al iniciar la validación
    ocultarAlerta("nameAlert");
    ocultarAlerta("emailRegistroAlert");
    ocultarAlerta("telefonoAlert");
    ocultarAlerta("passwordRegistroAlert");
    ocultarAlerta("passwordConfirmAlert");

    const nombre = document.querySelector("#name").value;
    const telefono = document.querySelector("#telefono").value;
    const emailRegistro = document.querySelector("#emailRegistro").value;
    const contraseñaRegistro = document.querySelector("#passwordRegistro").value;
    const confirmContraseña = document.querySelector("#passwordConfirm").value;

    // expresiones regulares y validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[1-9]\d{9}$/;
    const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

    let errores = false;

    if (!emailRegex.test(emailRegistro)) {
        mostrarAlerta("emailRegistroAlert", "Email no válido");
        errores = true;
    }

    if (!telefonoRegex.test(telefono)) {
        mostrarAlerta("telefonoAlert", "Teléfono no válido. Debe contener 10 dígitos.");
        errores = true;
    }

    if (!contraseñaRegex.test(contraseñaRegistro)) {
        mostrarAlerta("passwordRegistroAlert", "Contraseña no válida. Debe contener mínimo 8 caracteres, al menos una letra y un número.");
        errores = true;
    }

    if (contraseñaRegistro !== confirmContraseña) {
        mostrarAlerta("passwordConfirmAlert", "Las contraseñas no coinciden");
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
    mostrarAlerta("emailRegistroAlert", "Registro exitoso", "success");
    ocultarAlerta("emailRegistroAlert"); // Ocultar el mensaje de error al mostrar éxito

    
});


// =========================================== LOGIN ============================================/////
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // ocultar todas las alertas al iniciar la validación
    ocultarAlerta("emailLoginAlert");
    ocultarAlerta("passwordLoginAlert");

    const email = document.querySelector("#emailLogin").value;
    const contraseña = document.querySelector("#passwordLogin").value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const validarUsuario = usuarios.find(user => user.email === email && user.contraseña === contraseña);

    if (!validarUsuario) {
        mostrarAlerta("emailLoginAlert", "Correo y/o contraseña incorrectos");
        return;
    }

    mostrarAlerta("emailLoginAlert", `Bienvenido ${validarUsuario.nombre}`, "success");
    ocultarAlerta("emailLoginAlert"); // Ocultar el mensaje de error al mostrar éxito

    //Redireccionar a la página principal 
    window.location.href = './index.html';
});















