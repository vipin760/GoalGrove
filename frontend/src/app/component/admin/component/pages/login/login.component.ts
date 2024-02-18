import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
console.log("login page works");

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
