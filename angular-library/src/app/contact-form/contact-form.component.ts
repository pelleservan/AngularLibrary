import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formData = {
    email: '',
    message: ''
  };

  submitForm() {
    alert(`Email: ${this.formData.email}\nMessage: ${this.formData.message}`);
  }
}
