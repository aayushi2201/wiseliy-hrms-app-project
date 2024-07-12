import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5020/api/TeamSync';
  // private empUrl='http://onlinetestapi.gerasim.in/api/TeamSync'
  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<any> {
    debugger
    return this.http.get(`${this.apiUrl}/GetAllEmployee`);
  }

  createEmployee(employeeData: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json-patch+json' });
    return this.http.post<any>(`${this.apiUrl}/CreateEmployee`, employeeData, { headers: headers })
  }

  deleteEmployee(empId: any) {
    debugger
    return this.http.get<any>(`${this.apiUrl}/DeleteEmployeeByEmpId?empid=` + empId)
  }

  getbyEmployeeId(id: any) {
    debugger
    return this.http.get<any>(`${this.apiUrl}/GetEmployeeByEmpId?empid=` + id)
  }

  getUpdateEmployee(id: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json-patch+json' });
    return this.http.post<any>(`${this.apiUrl}/UpdateEmployee`, id, { headers: headers })
  }
}
