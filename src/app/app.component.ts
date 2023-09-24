import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // this angular helper f(x) gets triggered everytime on Submit
  onSubmit(form: NgForm) {
    console.log('=> Logging the NgForm newly created object', form);
  }
}
