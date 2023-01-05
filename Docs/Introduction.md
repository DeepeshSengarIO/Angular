# Angular

It is a component based framework for building scalable web based applications

It has a collection of well-integrated libraries that cover a wide variety of features, including routing, form management, client-server communication and more.

It has a suite of developer tools to help you develop, build, test and upgrade your code.

With Angular, we can scale single-developer project to enterprise-level applications.

# Angular Application Essentials

## Components

These are the building blocks of the application

It includes: - A typescript class with a @component() decorator - HTML template - styles

example:

```javascript
import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

To use this component we will write

```javascript
<hello-world></hello-world>
```
