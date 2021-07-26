import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeURL: string = 'http://localhost:8080/api/employees';

  // creation une instance du module httpClient
  constructor(private httpClient: HttpClient) { }

  // C
  createEmployee(employee: any) {
    return this.httpClient.post(`${this.employeeURL}`, employee)
  }
  //  R
  getAllEmployees() {
    return this.httpClient.get(this.employeeURL);
  }
  getEmployes(id) {
    return this.httpClient.get(`${this.employeeURL}/${id}`);
  }
  // U
  updateEmployee(employee: any) {
    return this.httpClient.put(`${this.employeeURL}/${employee.id}`, employee)
  }
  // D
  deleteEmployee(id: any) {
    return this.httpClient.delete(`${this.employeeURL}/${id}`)
  }
}
