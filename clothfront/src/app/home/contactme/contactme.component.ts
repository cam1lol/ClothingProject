import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const form = document.querySelector("#contact-form") as HTMLFormElement;

    if (!form) {
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const fullname = (document.querySelector("#fullname") as HTMLInputElement)?.value.trim();
      const email = (document.querySelector("#email") as HTMLInputElement)?.value.trim();
      const phone = (document.querySelector("#phone") as HTMLInputElement)?.value.trim();
      const affair = (document.querySelector("#affair") as HTMLInputElement)?.value.trim();
      const message = (document.querySelector("#message") as HTMLTextAreaElement)?.value.trim();

      document.querySelectorAll(".error-message").forEach(el => el.remove());

      let isValid = true;

      const showError = (field: string, message: string) => {
        const input = document.querySelector(`#${field}`) as HTMLInputElement;
        if (!input) return;
        const error = document.createElement("p");
        error.textContent = message;
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.fontSize = "0.9em";
        error.style.marginTop = "5px";
        input.insertAdjacentElement("afterend", error);
        isValid = false;
      };

      // Validaciones
      if (!fullname || fullname.length < 3) showError("fullname", "El nombre debe tener al menos 3 caracteres.");
      if (!/^[a-zA-Z\s]+$/.test(fullname)) showError("fullname", "El nombre solo puede contener letras y espacios.");
      if (!/\S+@\S+\.\S+/.test(email)) showError("email", "Ingrese un correo electrónico válido.");
      if (!/^\+?\d{7,15}$/.test(phone)) showError("phone", "Ingrese un número de teléfono válido (7-15 dígitos).");
      if (!affair || affair.length < 3) showError("affair", "El asunto debe tener al menos 3 caracteres.");
      if (!message || message.length < 10) showError("message", "El mensaje debe tener al menos 10 caracteres.");

      if (!isValid) return;

      const formData = {
        to_name: "Destinatario",
        user_name: fullname,
        email: email,
        phone: phone,
        affair: affair,
        message: message,
        date: new Date().toLocaleString()
      };

      try {
        const response = await emailjs.send(
          environment.emailjsServiceID,
          environment.emailjsTemplateID,
          formData,
          environment.emailjsPublicKey
        );

        console.log("Correo enviado con éxito:", response);
        alert("¡Mensaje enviado con éxito! 🎉");
        form.reset();

      } catch (error) {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    });
  }
}
