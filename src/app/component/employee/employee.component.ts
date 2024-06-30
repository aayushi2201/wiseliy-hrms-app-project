import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { AddEmployeeComponent } from '../../shared/employee_shared/add-employee/add-employee.component';

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


  constructor(private _EmployeeService: EmployeeService) {
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