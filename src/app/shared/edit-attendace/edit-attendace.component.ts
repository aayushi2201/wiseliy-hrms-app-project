import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-edit-attendace',
  templateUrl: './edit-attendace.component.html',
  styleUrl: './edit-attendace.component.scss',
  providers: [MessageService]
})
export class EditAttendaceComponent implements OnInit {
  employeeObj: any
  @Input() ShowAttendanceEdit:any;
  @Input() position:any;
  @Output() hideSideBarModal = new EventEmitter<Boolean>();
  @Output() update = new EventEmitter<Boolean>();

  constructor(private _EmployeeService: EmployeeService,
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
  }

  closeEditAttendance(){

  }

  EditEmployee(){
    
  }
}
