import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment.development';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register_email/register/register.component';
import { VarifyEmailComponent } from './component/register_email/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './component/register_email/forgot-password/forgot-password.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AttendanceComponent } from './component/attendance/attendance.component';
import { LeavesComponent } from './component/leaves/leaves.component';
import { AdvanceComponent } from './component/advance/advance.component';
import { SalaryComponent } from './component/salary/salary.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from  '@angular/common/http';
import { AddEmployeeComponent } from './shared/employee_shared/add-employee/add-employee.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    RegisterComponent,
    VarifyEmailComponent,
    ForgotPasswordComponent,
    EmployeeComponent,
    AttendanceComponent,
    LeavesComponent,
    AdvanceComponent,
    SalaryComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    TooltipModule
  ],
  providers: [
    MessageService,
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({ "projectId": "wiseliy-webapp", "appId": "1:771597712094:web:f48447254655cd5f9fe04f", "storageBucket": "wiseliy-webapp.appspot.com", "apiKey": "AIzaSyC7z7Td92TeKxX5OCHpNC9M-WG74tFpCho", "authDomain": "wiseliy-webapp.firebaseapp.com", "messagingSenderId": "771597712094" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
