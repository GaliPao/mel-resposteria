(function () {
  // Public key en https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "nj_TNtUcAUozOvRJe",
  });
})(); // Inicializando servicio de emailjs

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", validarForm);
};

// 

// Form inputs
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const message = document.getElementById("mensaje");
let btnEnviar = document.getElementById("btnEnviar");

// Regular expressions for validation
let nombreTest = /^[a-zA-Z\u00C0-\u017F\s]{3,70}$/;
let emailTest = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
let numeroTest = /^[1-9][0-9]{9}$/;
let mensajeTest = /^[a-zA-Z\u00C0-\u017F\s]{2,}$/;

// Function to style valid input
function valido(elem) {
  elem.classList.remove("is-invalid");
  elem.classList.add("is-valid");
  document.getElementById(`error-${elem.id}`).innerHTML = "";
}

// Function to style invalid input
function invalido(elem, mensaje) {
  elem.value = "";
  elem.classList.add("is-invalid");
  elem.classList.remove("is-valid");
  document.getElementById(`error-${elem.id}`).innerHTML = mensaje;
}

// Function to show success message
function mostrarMensajeExito(nombre) {
  const confirmacion = document.createElement("div");
  confirmacion.classList.add("mensaje-exito");
  confirmacion.innerHTML = `
    <div class="mensaje-exito">
      <h2>Gracias 🎉 ${nombre}</h2>
      <p>Hemos recibido tu mensaje, responderemos pronto 🍪</p>
      <button class="btn-exito btn-cierre">Ok</button>
    </div>`;

  const containerForm = document.querySelector("#container");
  containerForm.insertAdjacentElement("afterend", confirmacion);

  // Boton de cierre
  document.querySelector(".btn-cierre").addEventListener("click", function () {
    confirmacion.remove();
  });

  // Remove message after a few seconds
  setTimeout(() => {
    confirmacion.remove();
  }, 5000);
}

// Form validation function
function validarForm(event) {
  event.preventDefault();

  let mensajeError = false;

  // Validate nombre
  if (!nombreTest.test(nombre.value.trim())) {
    invalido(nombre, "Llenar el campo de nombre correctamente");
    mensajeError = true;
  } else {
    valido(nombre);
  }

  // Validate email
  if (!emailTest.test(email.value.trim())) {
    invalido(email, "Llenar el campo de correo correctamente<br>Por ejemplo: correo123@gmail.com");
    mensajeError = true;
  } else {
    valido(email);
  }

  // Validate telefono
  if (!numeroTest.test(telefono.value.trim())) {
    invalido(telefono, "Llenar el campo de telefono correctamente");
    mensajeError = true;
  } else {
    valido(telefono);
  }

  // Validate message
  if (!mensajeTest.test(message.value.trim())) {
    invalido(message, "El campo de mensaje está vacío");
    mensajeError = true;
  } else {
    valido(message);
  }

  // Check if there are validation messages
  if (!mensajeError) {
    // If validation is successful, send the email
    emailjs
      .sendForm(
        "service_m32z9s6",
        "contact_form",
        document.getElementById("contact-form")
      )
      .then(
        () => {
          console.log("SUCCESS!");
          mostrarMensajeExito(nombre.value);

          // Reset form fields
          nombre.value = "";
          email.value = "";
          telefono.value = "";
          message.value = "";
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }
}
