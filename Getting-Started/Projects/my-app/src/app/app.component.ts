import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = 'I`m Read Only';
  canEdit = false;

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message = 'You can edit me!'
    }else{
      this.message = 'I`m read only!'
    }
  }
}
