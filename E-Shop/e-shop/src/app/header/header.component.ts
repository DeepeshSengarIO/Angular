import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  active = 1;

  ngOnInit(): void {
    

  }
  navOpen = false;
  nav(){
    this.navOpen = !this.navOpen
  }

}
