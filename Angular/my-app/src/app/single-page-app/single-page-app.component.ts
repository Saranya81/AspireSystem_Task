import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-single-page-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './single-page-app.component.html',
  styleUrl: './single-page-app.component.css'
})
export class SinglePageAppComponent {

  destinations = [
    { name: 'Kashmir', price: '$1000', numPeople: '2', numDays: '7' },
    { name: 'Agra', price: '$800', numPeople: '2', numDays: '5' },
    { name: 'Kanya Kumari', price: '$1200', numPeople: '2', numDays: '6' },
    { name: 'Ladakh', price: '$1500', numPeople: '2', numDays: '8' }
  ];

  packages = [
    { name: 'Beach Escape', price: '$2000', numPeople: '2', numDays: '10' },
    { name: 'Cultural Immersion', price: '$1800', numPeople: '2', numDays: '8' },
    { name: 'Adventure Trek', price: '$2500', numPeople: '2', numDays: '12' },
    { name: 'City Exploration', price: '$1500', numPeople: '2', numDays: '7' }
  ];

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Submit form logic here
    }
  }

}
