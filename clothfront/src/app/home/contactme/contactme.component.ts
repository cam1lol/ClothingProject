import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const form = document.querySelector("#contact-form") as HTMLFormElement;

    if (!form) {
      console.error("No se encontró el formulario en el DOM.");
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullname = (document.querySelector("#fullname") as HTMLInputElement)?.value.trim();
      const email = (document.querySelector("#email") as HTMLInputElement)?.value.trim();
      const phone = (document.querySelector("#phone") as HTMLInputElement)?.value.trim();
      const affair = (document.querySelector("#affair") as HTMLInputElement)?.value.trim();
      const message = (document.querySelector("#message") as HTMLTextAreaElement)?.value.trim();

      // Eliminar mensajes de error previos
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

      // Si todo está bien, mostrar mensaje en consola
      if (isValid) {
        const formData = {
          fullname: fullname,
          email: email,
          phone: phone,
          affair: affair,
          message: message
        };

        console.log("Enviando los datos del formulario", formData);

        const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbyhzkZNmo3i-LcCduaXVvJdGN2H4jJ8ImIi4H4HZhAIh15Mki0E8vuJAwubSlWvSsa-ow/exec";

        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });

        this.http.post(googleAppsScriptURL, formData, { headers }).subscribe(
          (response: any) => {
            if (response.status === "success") {
              console.log("✅ Formulario enviado con éxito");
              alert("Mensaje enviado correctamente");
              form.reset();
            } else {
              console.error("❌ Error al enviar el formulario: ", response.error);
              alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
            }
          },

          (error) => {
            console.error("❌ Error en la solicitud HTTP: ", error);
            alert("No se pudo enviar el mensaje, verifica tu conexión a internet e inténtalo nuevamente.");
          }
        );
      }
    });
  }
}
