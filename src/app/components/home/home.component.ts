import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees:any;
  constructor(private router: Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        console.log('Here my objects', data);
        
        this.employees = data;
      }
    );
  }
  goToDisplay(id) {
    this.router.navigate([`displayEmployee/${id}`]);
  }
  goToEdit(id) {
    this.router.navigate([`editEmployee/${id}`]);
  }
  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      console.log('Employee deleted successfully');
      this.employeeService.getAllEmployees().subscribe(
        (data) => {
          this.employees = data;
        }
      )
    })
  }
addEmployee(){
  this.router.navigate([`addEmployee`]);

}
}
