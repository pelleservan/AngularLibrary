import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    email:string =  '';
    message:string = '';

  submitForm(): void {
    alert(`Email: ${this.email}\nMessage: ${this.message}`);
  }
}
