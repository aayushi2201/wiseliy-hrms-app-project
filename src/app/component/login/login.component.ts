import { Component } from '@angular/core';
import { AuthService } from '../../../Auth/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private messageService: MessageService, private route: Router) { }

  ngOnInit(): void {

  }

  login() {
    debugger

    if (this.email == '') {
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Please enter the email'
      });
      // alert('Please Enter the email');
      return
    }

    if (this.password == '') {
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Please enter the password'
      });
      // alert('Please enter the password');
      return
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  SignInWithGoogle() {
    debugger
    this.auth.googleSignIn();
  }
}
