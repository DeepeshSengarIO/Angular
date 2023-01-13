import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  today = Date();
  user=[
    {
      name: 'anil',
      email: 'anil@test.com',
      age: 25
    }
  ]
  number = 1234.5678
}
