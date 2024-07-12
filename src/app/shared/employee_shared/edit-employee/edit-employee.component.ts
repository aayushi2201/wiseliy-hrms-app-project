import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../../../../service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss',
  providers: [MessageService]
})

export class EditEmployeeComponent implements OnInit {
  @Input() ShowEmployeeEdit: any
  @Input() position: any;
  @Output() hideSideBarModal = new EventEmitter<Boolean>();
  @Output() update = new EventEmitter<Boolean>();

  employeeObj = {
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

  ngOnInit(): void {
  }

  constructor(private _EmployeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  GetEmployeeById(id: any) {
    debugger
    this._EmployeeService.getbyEmployeeId(id).subscribe((res: any) => {
      this.employeeObj = res.data;
      this.position = 'right';
      this.ShowEmployeeEdit = true;
    },
      (err: any) => {
        if (err) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'error',
          })
        }
      }
    )
  }

  EditEmployee() {
    debugger
    this._EmployeeService.getUpdateEmployee(this.employeeObj).subscribe((res: any) => {
      if (res.result) {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Employee Updated successfully',
        });
        this.update.emit();
        this.closeEditEmployee();
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Employee Updated Unsuccessfully',
        })
      }
    })
  }

  closeEditEmployee() {
    this.ShowEmployeeEdit = false;
    this.hideSideBarModal.emit(this.ShowEmployeeEdit);
  }
}
