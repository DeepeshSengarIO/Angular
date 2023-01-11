# Component

## What is a Component?

Building block of specific functionality(Module) is reffered to as Component

`ng generate component navbar`

# Inline Style vs Inline Template

`ng g c user-list --inline-style`
You have to write css in component.ts

`ng g c user-list --inline-template`
You have to write HTML template in component.ts

`ng g c user-list --inline-style --inline-template`
You have to write both HTML template and css in component.ts

# Module

1. Module is the whole functionality like user-auth which consists of several components example (login, signUp etc.)

`ng generate module user-auth`

2. Generate component inside module

`ng g c user-auth/login`

3. import login component from user-auth module in root `app.module.ts` file

```javascript
import {UserAuthModule} from "./user-auth/user-auth.module"
...
...

@NgModule({
    imports: [
        BrowserModule,
        UserAuthModule
    ]
})

```

4. export the component from user-auth to use it in `app-component.html`

```javascript
import {LoginComponent} from "./login/login.component"
...
...

@NgModule({
    exports: [
        LoginComponent
    ]
})

```

# Make and Call a function

`app.component.ts`

```javascript
export class AppComponent {
  getName(name: string) {
    alert(name);
  }
}
```

`app.component.html`

```html
<button (click)="getName('Deepesh Sengar')">Click Here</button>
```

# Events

Have to use banana brackets `()` when calling any event

1. Show the input value in console when keyup event is there

`app.component.ts`

```javascript
export class AppComponent {
  getName(name: string) {
    console.log(name);
  }
}
```

`app.component.html`

```html
<input type="text" #box (keyup)="getName(box.value)" />
<input type="text" #box1 (keydown)="getName(box1.value)" />

<input type="text" #box2 (blur)="getName(box2.value)" />

<h1 (mouseover)="getName('over')"></h1>
<h1 (mouseleave)="getName('leave')"></h1>
```

keyup = when key is released
keydown = when key is pressed
blur = when focus is removed from input, example after typing in input you clicked somewhere else
mouseover = when you do the hover
mouseleave = when hover is released

assign box as id to input and get that value in kepup event call.

# Take Input value and show it

do not forget to use `this.`

`app.component.ts`

```javascript
export class AppComponent {
  str = "";
  getName(name: string) {
    this.str = name;
  }
}
```

`app.component.html`

```html
<input type="text" #box (keyup)="getName(box.value)" name="name" />
<p>Input is: {{ str }}</p>
```

Now make this happen on button click. str is assigned new input value on button click.

```html
<input type="text" #box placeholder="Enter A String" />
<button (click)="getName(box.value)">Click here</button>
<p>Input is: {{ str }}</p>
```

Interview Question:

Ques: can we get the placeholder of input assigned to str
Answ: yes! just use `box.placeholder` which gives placeholder value. This also apply to other properties

# Make Counter

`app.component.ts`

```javascript
export class AppComponent {
  counter = 0;
  changeCounter(inc: boolean) {
    inc == true ? this.counter++ : this.counter--;
  }
}
```

`app.component.html`

```html
<h1>Current Count: {{ counter }}</h1>
<button (click)="changeCounter(true)">Increment</button>
<button (click)="changeCounter(false)">Decrement</button>
```

# Property Binding
