import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {
  contactData: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Aquí puedes implementar la lógica para enviar el email
    // Por ahora, solo abriremos el cliente de correo predeterminado
    const mailtoLink = `mailto:pnunfe@gmail.com?subject=Contacto de ${this.contactData.name}&body=${this.contactData.message}%0A%0ADe: ${this.contactData.email}`;
    window.location.href = mailtoLink;

    // Limpiamos el formulario
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
