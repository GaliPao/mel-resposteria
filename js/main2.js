const mensaje = document.createElement("div");
const containerForm = document.querySelector(".container");
// Entadas del formulario
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const message = document.getElementById("mensaje");
let btnEnviar= document.getElementById("btn-Enviar");
//variables expresiones regulares formulario
let nombreTest = /^[a-zA-Z\u00C0-\u017F\s]{3,70}$/;
let Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
let Numero = /^[0-9]{10}$/;
let Mensaje = /^[a-zA-Z\u00C0-\u017F\s]{2,}$/;
let isValid = true;

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
          <h2>Gracias 🎉</h2>
          <p>Hemos recibido tu mensaje, recibirás pronto una respuesta de nuestra parte.</p>
          <button class="btn-exito btn-cierre">De acuerdo!</button>
         </div>`; // mensaje que aparece cuando se mande el form por correo
          containerForm.insertAdjacentElement("afterend", mensaje);

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


//formulario  evento  click
btnEnviar.addEventListener("click",validarForm);  //no se llama a la funcion con parentesis
//estulo entrada invalida 
function valido(elem){
    elem.classList.remove("is-invalid");
    elem.classList.add("is-valid");
}
//Estilo entrada valida
function invalido(elem){
    elem.value="";
    elem.classList.add("is-invalid");
    elem.classList.remove("is-valid");
}
//funcion para validar las entradas del formulario 
function validarForm(event){
  //  event.preventDefault();
    let mensaje="";
    if(nombreTest.test(nombre.value.trim())==false){
        mensaje+="Llenar el campo de nombre correctamente \n";
        invalido(nombre);
    }else{
       valido(nombre);
    }
    if(Email.test(email.value.trim())==false){
        mensaje+="Llenar el campo de correo correctamente \nPor ejemplo: correo123@gmail.com \n";
        invalido(email);
    }else{
        valido(email);
    }
    if(Numero.test(telefono.value.trim())==false){
        mensaje+="Llenar el campo de telefono correctamente  \n";
        invalido(telefono);
    }else{
        valido(telefono);
    }
    if(Mensaje.test(message.value.trim())==false){
        mensaje+="El campo de mensaje esta vacio";
        invalido(message);
    }else{
        valido(message);
    }
    if (mensaje.length>1){
        alert(mensaje);
        isValid=false;
    }else{
        //reseteamos y borramos todo
        isValid=true;
        nombre.value="";
        telefono.value="";
        email.value="";
        message.value="";
        alert("Formulario enviado exitosamente!");
    }
}