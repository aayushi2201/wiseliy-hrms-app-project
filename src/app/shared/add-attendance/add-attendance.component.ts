import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrl: './add-attendance.component.scss',
  providers: [MessageService]
})
export class AddAttendanceComponent implements OnInit {

  @Input() ShowAttendanceAdd: any
  @Input() position: any;
  @Output() hideSideBarModal = new EventEmitter<Boolean>();
  @Output() update = new EventEmitter<Boolean>();

  employeeObj: any
  constructor(private _EmployeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

  }

  closeaddAttendance() {

  }

  CreateEmployee(){
    
  }

}
