import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { AddEmployeeComponent } from '../../shared/employee_shared/add-employee/add-employee.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  @ViewChild(AddEmployeeComponent) addEmployeeComponent !: any

  employeeData: any[] = [];
  positionAddEmployee: string = ''
  addTemplateEmployee: boolean = false


  constructor(private _EmployeeService: EmployeeService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    debugger
    this.getAllEmployeesData()
  }
  updateAddEmp() {
    debugger
    this.getAllEmployeesData();
  }
  getAllEmployeesData() {
    debugger
    this._EmployeeService.getAllEmployee().subscribe((res: any) => {
      this.employeeData = res.data;
    })
  }

  DeleteEmployee(empId: any) {
    debugger
    this._EmployeeService.deleteEmployee(empId).subscribe((res: any) => {
      if (res.result) {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Employee Deleted Successfully',
        })
        this.getAllEmployeesData();
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Employee Deleted Unsuccessfully',
        })
      }
    })
  }

  //for create the employee button
  createEmployeeSidepopup(value: any) {
    debugger
    this.positionAddEmployee = value;
    this.addTemplateEmployee = true;
  }
  //close add button side pop-up
  closeaddEmployee(event: any) {
    debugger
    this.addTemplateEmployee = event
  }
}