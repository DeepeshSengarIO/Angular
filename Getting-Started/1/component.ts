import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    templateUrl: './index.html'
})

export class HelloWorld{
    
    fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Hello, World';

    sayMessage(){
        alert(this.message);
    }

}