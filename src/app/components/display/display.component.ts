import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
id:any;
employee:any;
  constructor(private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployes(this.id).subscribe(
      (data) => {
        console.log('data', data);
        this.employee = data;
      }
    )
  }
  }
