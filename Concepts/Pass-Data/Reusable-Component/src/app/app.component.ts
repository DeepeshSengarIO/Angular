import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails=[
    { name: "Simon", email: "simon@test.com"},
    { name: "Alex", email: "alex@test.com"},
    { name: "Sam", email: "sam@test.com"},
    { name: "Paul", email: "paul@test.com"},
    { name: "Voly", email: "voly@test.com"}
  ]
}
