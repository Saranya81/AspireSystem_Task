import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  user = {
    fullName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  };

  successMessage = '';

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // You can add your form submission logic here

    this.successMessage = 'Form successfully submitted!';
    console.log('Form Submitted', this.user);
  }
}
