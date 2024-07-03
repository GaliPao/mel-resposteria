// Part 1: EmailJS initialization and form submission

/*
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

*/
// Part 2: Form validation

// Form inputs
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const message = document.getElementById("mensaje");
let btnEnviar = document.getElementById("btnEnviar");

// Regular expressions for validation
let nombreTest = /^[a-zA-Z\u00C0-\u017F\s]{3,70}$/;
let emailTest = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
let numeroTest = /^52[0-9]{8}$/;
let mensajeTest = /^[a-zA-Z\u00C0-\u017F\s]{2,}$/;

// Function to style valid input
function valido(elem) {
  elem.classList.remove("is-invalid");
  elem.classList.add("is-valid");
}

// Function to style invalid input
function invalido(elem) {
  elem.value = "";
  elem.classList.add("is-invalid");
  elem.classList.remove("is-valid");
}

// Form validation function
function validarForm(event) {
  event.preventDefault();

  let mensaje = "";

  // Validate nombre
  if (!nombreTest.test(nombre.value.trim())) {
    mensaje += "Por favor, completa correctamente el campo del nombre. \n";
    invalido(nombre);
  } else {
    valido(nombre);
  }

  // Validate email
  if (!emailTest.test(email.value.trim())) {
    mensaje +=
      "Por favor, completa correctamente el campo de correo. \nPor ejemplo: correo123@gmail.com\n";
    invalido(email);
  } else {
    valido(email);
  }

  // Validate telefono
  if (!numeroTest.test(telefono.value.trim())) {
    mensaje += "Por favor, completa correctamente el campo de teléfono \n";
    invalido(telefono);
  } else {
    valido(telefono);
  }

  // Validate message
  if (!mensajeTest.test(message.value.trim())) {
    mensaje += "El campo del mensaje está vacío.\n";
    invalido(message);
  } else {
    valido(message);
  }

  // Check if there are validation messages
  if (mensaje.length > 0) {
    alert(mensaje);
  } else {
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
          const confirmacion = document.createElement("div");
          confirmacion.classList.add("mensaje-exito");
          confirmacion.innerHTML = `
        <div class="mensaje-exito">
          <h2>Gracias 🎉 ${nombre.value}</h2>
          <p>Hemos recibido tu mensaje y te responderemos pronto. 🍪 </p>
          <button class="btn-exito btn-cierre">Ok</button>
        </div>`; // mensaje que aparece cuando se mande el form por correo

          const containerForm = document.querySelector("#container");
          containerForm.insertAdjacentElement("afterend", confirmacion);

          // Boton de cierre
          document
            .querySelector(".btn-cierre")
            .addEventListener("click", function () {
              confirmacion.remove();
            });

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
