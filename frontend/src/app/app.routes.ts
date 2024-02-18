import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/generic/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:AppComponent, loadChildren:()=>import('./component/user/user.routes').then(com=>com.routes)},
    {path:'admin', component:AppComponent, loadChildren:()=>import('./component/admin/admin.routes').then(com=>com.routes)},
    {path:"**",component:NotFoundComponent}
];
