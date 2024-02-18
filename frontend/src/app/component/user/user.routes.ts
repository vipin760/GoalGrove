import { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { HomeComponent } from "./component/pages/home/home.component";
import { SignupComponent } from "./component/pages/signup/signup.component";
import { SigninComponent } from "./component/pages/signin/signin.component";
import { ContactComponent } from "./component/pages/contact/contact.component";
import { BlogComponent } from "./component/pages/blog/blog.component";

export const routes:Routes=[
    {path:'',component:UserComponent, children:[
        {path:'home',component:HomeComponent},
        {path:'sign-up',component:SignupComponent},
        {path:'sign-in',component:SigninComponent},
        {path:'contact',component:ContactComponent},
        {path:'blog',component:BlogComponent},
        {path:'',redirectTo:'/home',pathMatch:'full'}
    ]}
]