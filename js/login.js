// mostrar alertas de bootstrap
function mostrarAlerta(campoId, mensaje, tipo = "warning") {
  const alertContainer = document.getElementById(campoId);
  if (alertContainer) {
    alertContainer.innerText = mensaje;
    alertContainer.className = `alert alert-${tipo}`;
    alertContainer.style.display = "block";
  }
}
// ocultaar alertas de bootstrap
function ocultarAlerta(campoId) {
  const alertContainer = document.getElementById(campoId);
  if (alertContainer) {
    alertContainer.style.display = "none";
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

  const nombreForm = document.getElementById("name");
  const telefonoForm = document.getElementById("telefono");
  const emailRegistroForm = document.getElementById("emailRegistro");
  const contraseñaRegistroForm = document.getElementById("passwordRegistro");
  const confirmContraseñaForm = document.getElementById("passwordConfirm");

  // expresiones regulares y validaciones
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^(?!0)\d{1}(?!.*(\d)\1{4})(?!.*0{4})\d{9}$/; //solo numeros como entrada , no se permite numeros repetidos consecutivamente 5 veces ni que empiezen con 0, y solo se puede repetir 3 veces seguidas el 0
  const contraseñaRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/; //contraeña con IhateRegEx para contraeñas con 1 Mayuscula,1 minuscula, 1 numero, 1 caracter especial de los siguientes  " #?!@$ %^&*- "

  let errores = false;

  if (!emailRegex.test(emailRegistro)) {
    mostrarAlerta("emailRegistroAlert", "Email no válido.");
    errores = true;
  }

  if (!telefonoRegex.test(telefono)) {
    mostrarAlerta(
      "telefonoAlert",
      "Teléfono no válido. Debe contener 10 dígitos, no se permiten números repetidos consecutivamente.\nEjemplo: 5522446688"
    );
    errores = true;
  }

  if (!contraseñaRegex.test(contraseñaRegistro)) {
    mostrarAlerta(
      "passwordRegistroAlert",
      "La contraseña no es válida. Debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y uno de los siguientes caracteres especiales: `#?!@$%^&*-`\nEjemplo: Contr4$eña"
    );
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
  const usuarioRegistrado = usuarios.find(
    (user) => user.email === emailRegistro
  );

  if (usuarioRegistrado) {
    mostrarAlerta(
      "emailRegistroAlert",
      "El correo electrónico ya está registrado."
    );
    return;
  }

  usuarios.push({
    nombre,
    telefono,
    email: emailRegistro,
    contraseña: contraseñaRegistro,
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  nombreForm.value = "";
  telefonoForm.value = "";
  emailRegistroForm.value = "";
  contraseñaRegistroForm.value = "";
  confirmContraseñaForm.value = "";
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

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = `{ 
  "email": "${email}",
  "password": "${contraseña}" 
  }`;

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/login/", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          mostrarAlerta("emailLoginAlert", "Correo y/o contraseña incorrectos.")
        );
      }
      return response.text();
    })
    .then((result) => {
      const bearer = JSON.parse(result);
      console.log(typeof bearer);
      console.log(bearer);
      console.log();
      const { accessToken } = result;
      mostrarAlerta("emailLoginAlert", `Bienvenido `, "success");
      sessionStorage.setItem(
        "usuarios",
        `{ 
  "email": "${email}",
  "password": "${contraseña}" 
  }`
      );
      sessionStorage.setItem("Bearer ", `Bearer ${bearer.accessToken}`);

      myHeaders.append("Authorization", `Bearer ${bearer.accessToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/clientes/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          console.log(result[0]);
          for (let i = 0; i < result.length; i++) {
            if (result[i].email === email) {
              sessionStorage.setItem("Nombre ", result[i].nombre);
            }
          }
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
  setTimeout(() => {
    ocultarAlerta("emailLoginAlert");
    // redireccionar a la página principal
    window.location.href = "index.html";
  }, 2000);
});
