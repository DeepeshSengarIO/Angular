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
