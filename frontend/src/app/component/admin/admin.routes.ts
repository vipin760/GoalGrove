import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { LoginComponent } from "./component/pages/login/login.component";
import { HomeComponent } from "./component/pages/home/home.component";

export const routes:Routes=[
    {path:'',component:AdminComponent, children:[
        {path:'login', component:LoginComponent},
        {path:'home',component:HomeComponent},
        {path:'',redirectTo:'login',pathMatch:"full"}
    ]}
]