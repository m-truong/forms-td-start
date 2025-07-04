import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Reviewing: @ViewChild decorator gives direct access to the NgForm or even the ElementRef inside the component's template
  @ViewChild('form') signupForm: NgForm; // store within variable
  // By storing the form template within the current Angular component ---> I'm essentially getting acces to the NgForm model even BEFORE submitting the form!

  // Added defaultValue field for the App component's 'Secret Question' form-control <select/> element tag
  defaultValue = 'teacher';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // this angular helper f(x) gets triggered everytime on Submit
  // onSubmit(form: NgForm) {
  //   console.log('=> Logging the NgForm newly created object', form);
  // }
  onSubmit() {
    console.log(
      '=> Logging the variable signupForm, which stores the NgForm',
      this.signupForm,
    );
  }
}
