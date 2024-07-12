import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { AddEmployeeComponent } from '../../shared/employee_shared/add-employee/add-employee.component';
import { MessageService } from 'primeng/api';
import { EditEmployeeComponent } from '../../shared/employee_shared/edit-employee/edit-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  @ViewChild(AddEmployeeComponent) addEmployeeComponent !: any
  @ViewChild(EditEmployeeComponent) editEmployeeComponent!: any

  employeeData: any[] = [];
  positionAddEmployee: string = ''
  addTemplateEmployee: boolean = false
  editTemplateEmployee: boolean = false
  positionEditEmployee: string = ''
  SearchFilterInput: string = ''
  copyEmployee: any[] = []

  constructor(private _EmployeeService: EmployeeService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    debugger
    this.getAllEmployeesData()
  }

  //for searchbar
  filterdataChange() {
    debugger
    if (this.SearchFilterInput != '') {
      this.employeeData = this.copyEmployee.filter((item: any) => this.matchKeyword(item));
    } else {
      this.employeeData = this.copyEmployee;
    }
  }

  matchKeyword(item: any) {
    debugger
    return ((item.empName?.toString().includes(this.SearchFilterInput.toLowerCase().trim()))
    );
  }

  updateEmployee() {
    debugger
    this.getAllEmployeesData();
  }
  getAllEmployeesData() {
    debugger
    this._EmployeeService.getAllEmployee().subscribe((res: any) => {
      this.employeeData = res.data;
      this.copyEmployee = [...res.data]; // i make the copy of the original data.
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

  //edit employee data
  viewEditSidePopup(id: any) {
    this.editEmployeeComponent.GetEmployeeById(id)
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

  //close edit sidepopup
  closeEditEmployee(event: any) {
    this.editTemplateEmployee = event;
  }
}