import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../service/employee.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  providers: [MessageService]
})
export class AddEmployeeComponent implements OnInit {

  @Input() position: any;
  @Input() ShowEmployeeAdd: any;
  @Output() hideSideBarModal = new EventEmitter<Boolean>();
  @Output() update = new EventEmitter<Boolean>();

  employeeObj: any

  constructor(private _EmployeeService: EmployeeService,
    private messageService: MessageService
  ) {
    this.resetEmpObj()
  }
  resetEmpObj() {
    this.employeeObj = {
      "empId": 0,
      "empName": "",
      "empContactNo": "",
      "empEmail": "",
      "addressLine1": "",
      "pincode": "",
      "city": "",
      "state": "",
      "bankName": "",
      "iFSC": "",
      "accountNo": "",
      "bankBranch": "",
      "salary": 0
    }
  }

  ngOnInit(): void {

  }

  closeaddEmployee() {
    this.ShowEmployeeAdd = false
    this.hideSideBarModal.emit(this.ShowEmployeeAdd)
  }

  CreateEmployee() {
    debugger
    this._EmployeeService.createEmployee(this.employeeObj).subscribe(
      (res: any) => {
        debugger;
        if (res.result) {
          this.update.emit();
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmed',
            detail: 'Employee Created successfully',
          })
          this.resetEmpObj();
          this.closeaddEmployee()
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Employee Created Unsuccessfully',
          })
        }
      }
    );
  }
}
