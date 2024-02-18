import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/partials/header/header.component';
import { FooterComponent } from './component/partials/footer/footer.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SigninComponent } from './component/pages/signin/signin.component';
import { SignupComponent } from './component/pages/signup/signup.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent,BlogComponent,ContactComponent,HomeComponent,SigninComponent,SignupComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}
