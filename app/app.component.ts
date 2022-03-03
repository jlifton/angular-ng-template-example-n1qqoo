import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  templates = [];
  constructor() {

    this.templates = [
        {'name' : 'template1'},
        {'name' : 'template2'},
        {'name' : 'template3'}
    ]
  }
}
