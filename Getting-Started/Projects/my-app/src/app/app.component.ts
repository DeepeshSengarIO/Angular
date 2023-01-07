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
  subMessage = 'This paragraph is read only. Try Clicking the button';
  canEdit = false;

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message = 'You can edit me!';
      this.subMessage = 'You can edit the following paragraph!';
    }else{
      this.message = 'I`m Read only!';
      this.subMessage = 'This paragraph is read only. Try Clicking the button';
    }
  }
}
