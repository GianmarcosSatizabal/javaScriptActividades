"use strict";

class ValidadorFormulario {
  constructor(formId) {
    this.form = document.getElementById(formId);
    // Seleccionar inputs
    this.username = document.getElementById("username");
    this.password = document.getElementById("password");
    this.submit = document.getElementById("submit");

    // Seleccionar span de error
    this.usernameError = document.getElementById("usernameError");
    this.passwordError = document.getElementById("passwordError");
    this.submitError = document.getElementById("submitError");

    // Seleccionar eventos el usuario
    this.form.addEventListener("submit", (event) => {
      event.preventDefault(); //Evitar el envio de formulario por defecto
      if (this.validarFormulario()) {
        alert("Enviando información");
      }
    });
  } //Método, fuera del contructor y dentro de la clase.
  validarFormulario() {
    let valid = true;

    if (this.username.value === "") {
      this.usernameError.textContent = "El correo del usuario es obligatorio";
      this.username.classList.add("error-input");
      valid = false;
    } else {
      this.usernameError.textContent = "";
      this.username.classList.remove("error-input");
    }

    // PasswordError
    if (this.password.value === "") {
      this.passwordError.textContent = "Ingresa una contraseña";
      this.password.classList.add("error-input");
      valid = false;
    } else {
      this.passwordError.textContent = "";
      this.password.classList.remove("error-input");
    }
    return valid;
  }
  // utilizaCaracteres(email){
  // const email = /\$+@\$+\.\$/
  // return correo
  // };
}
// ==> se usa la clase
// ==> const formulario = new ValidadorFormulario('formularioContacto');
