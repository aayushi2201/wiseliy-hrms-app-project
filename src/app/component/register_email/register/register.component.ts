import { Component } from '@angular/core';
import { AuthService } from '../../../../Auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  register() {
    debugger
    if (this.email == '') {
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Please enter the email'
      });
      // alert('Please enter the email');
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

    this.auth.register(this.email, this.password)
  }
}
