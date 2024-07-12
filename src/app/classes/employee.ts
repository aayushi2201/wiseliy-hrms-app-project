//when ever we use array then normally use interface
//converting json to typscript from swagger data
export interface IAttendace {
    empName: string;
    empContactNo: string;
    employeeId: number;
    attendanceDate: string;
    attendanceId: number;
    inTime: string;
    outTime: string;
    isFullDay: boolean;
}

export class attendance {
    attendanceId: number;
    employeeId: number;
    attendanceDate?: string;
    inTime?: string;
    outTime?: string;
    isFullDay: boolean;
    constructor() {
        this.attendanceId = 0;  
        this.employeeId = 0;
        this.attendanceDate = undefined;
        this.inTime = undefined;
        this.outTime = undefined
        this.isFullDay = false;
    }
}