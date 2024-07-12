import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IAttendace, attendance } from '../../classes/employee';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {

  SearchFilterInput: string = ''
  employeeData: any[] = [];
  copyEmployee: any[] = [];
  attendanceArray: IAttendace[] = []
  attendanceObj: attendance = new attendance();

  addTemplateAttendance: boolean = false;
  positionAddAttendance: string = ''
  editTemplateAttendance: boolean = false;
  positionEditAttendance: string = '';

  constructor(private messageService: MessageService, private _EmployeeService: EmployeeService) {

  }
  ngOnInit(): void {

  }

  getEmployee() {
    this._EmployeeService.getAllEmployee().subscribe((res: any) => {
      this.employeeData = res.data;
      this.copyEmployee = [...res.data];
    })
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
    // this.getAllEmployeesData();
  }

  //for create the employee button
  createEmployeeAttendace(value: any) {
    debugger
    // this.positionAddEmployee = value;
    // this.addTemplateEmployee = true;
  }

  DeleteEmployee(empId: any) {
    debugger
    // this._EmployeeService.deleteEmployee(empId).subscribe((res: any) => {
    //   if (res.result) {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Confirmed',
    //       detail: 'Employee Deleted Successfully',
    //     })
    //     this.getAllEmployeesData();
    //   } else {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: 'Employee Deleted Unsuccessfully',
    //     })
    //   }
    // })
  }

  //edit employee data
  viewEditSidePopup(id: any) {
    // this.editEmployeeComponent.GetEmployeeById(id)
  }

  closeaddAttendance(event: any) {
    this.addTemplateAttendance = event;
  }

  closeEditAttendance(event: any) {
    this.editTemplateAttendance = event;
  }
}
