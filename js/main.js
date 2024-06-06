const mensaje = document.createElement("div");
const containerForm = document.querySelector(".container");

//
(function () {
  // Public key en https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "nj_TNtUcAUozOvRJe",
  });
})(); // Inicializando servicio de emailjs

window.onload = function () {
  document
    .getElementById("contact-form") // Nombre de la form
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_m32z9s6", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");
          mensaje.classList.add("mensaje-exito");
          mensaje.innerHTML = `
          <div class="mensaje-exito">
          <h2>Gracias 🎉 ${this.name.value}</h2>
          <p>Hemos recibido tu mensaje, responderemos pronto 🍪.</p>
          <button class="btn-exito btn-cierre">De acuerdo!</button>
         </div>`; // mensaje que aparece cuando se mande el form por correo
          footer.insertAdjacentElement("beforebegin", mensaje);

          // Boton de cierre
          document
            .querySelector(".btn-cierre")
            .addEventListener("click", function () {
              mensaje.remove();
            });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};

// //valores de los campos
// const form = document.getElementsByTagName("form");
// const nombre = document.getElementById("name").value.trim();
// const email = document.getElementById("email").value.trim();
// const telefono = document.getElementById("numCel").value.trim();
// const message = document.getElementById("mensaje").value.trim();
// const error = document.getElementById("error");

// const emailRegExp =
//   /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

// let isValid = true;

// function validarForm() {
//   if (nombre === "") {
//     alert("Por favor ingrese su nombre.");
//     isValid = false;
//   }
//   if (email === "") {
//     alert("Por favor ingrese un correo válido");
//     isValid = false;
//   }
//   if (isValid) {
//     alert("Formulario enviado exitosamente!");
//   }
// }

let btnEnviar = document
  .getElementById("btnEnviar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validarForm();
  });

// const numCel = document.getElementById("numCel");
// document.getElementById("numCel").addEventListener("input", function () {
//   const errorMessage = document.getElementById("error-message");
//   const valNum = /^\d{10}$/;

//   if (valNum.test(numCel.value)) {
//     errorMessage.style.display = "none";
//     numCel.style.borderColor = "initial";
//   } else {
//     errorMessage.style.display = "block";
//     numCel.style.borderColor = "red";
//   }
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//correccion validaciones

let txtNombre = document.getElementById("txtNombre");
let txtEmail = document.getElementById("txtEmail");
let txtTel = document.getElementById("txtTel");
let txtMsj = document.getElementById("txtMsj");

let errortxtNombre = document.getElementById("errortxtNombre"); 
let errortxtEmail = document.getElementById("errortxtEmail");
let errortxtTel = document.getElementById("errortxtTel");
let errortxtMsj = document.getElementById("errortxtMsj");


txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    if (! validarNombre(txtNombre.value)) {
        errortxtNombre.innerHTML="Favor de ingresar un nombre valido";
        txtNombre.style.border="red medium solid";
        errortxtNombre.style.display="block";
    } else {
        errortxtNombre.innerHTML = "";
        txtNombre.style.border = "";
        errortxtNombre.style.display = "none";
    }
});

txtEmail.addEventListener("blur", function(event){
    event.preventDefault();
    if (! validarEmail(txtEmail.value)) {
        errortxtEmail.innerHTML="Favor de corregir el correo electronico";
        txtEmail.style.border="red medium solid";
        errortxtEmail.style.display="block";
    } else {
        errortxtEmail.innerHTML = "";
        txtEmail.style.border = "";
        errortxtEmail.style.display = "none";
    }
});

txtTel.addEventListener("blur", function(event){
    event.preventDefault();
    if (! validarTel(txtTel.value)) {
        errortxtTel.innerHTML="Favor de corregir el número de télefono";
        txtTel.style.border="red medium solid";
        errortxtTel.style.display="block";
    } else {
        errortxtTel.innerHTML = "";
        txtTel.style.border = "";
        errortxtTel.style.display = "none";
    }
});



function validarNombre(nombre){
  let re = new RegExp ("^[a-zA-Z ]+$");
  return re.test(nombre)
}//validar nombre 

function validarEmail(email){
  let re = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

  return re.test(email);
}//validar email


function validarTel(num){
  let re = new RegExp ("^[0-9]{10}$");
  return re.test(num)
}//validar telefono


function validarMsj(msj){
  let re = new RegExp ("^.+$");
  return re.test(msj)
}//validar mensaje 