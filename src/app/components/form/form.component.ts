import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id:any;
  title : string;
  employee : any = {} ;
  addEmployeeForm:FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private employeeService:EmployeeService,
     private formBuilder: FormBuilder,
     private router:Router) { }

     ngOnInit(): void {
      this.id =+ this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id){
        this.title="Update"
        this.employeeService.getEmployes(this.id).subscribe(
          (data) => {
    
            this.employee = data;
            console.log('here my employee', this.employee)
          }
        );
        }
      else{
        this.title="Add"
  
      }
  
      this.addEmployeeForm = this.formBuilder.group({
        id:[''],
        firstName:[''],
        lastName:[''],
        dateNaissance:[''],
      })
    }
    Employee(){
     
      if (this.id) {
        this.employeeService.updateEmployee(this.employee).subscribe(
          ()=> {
            this.router.navigate(['/']);
            console.log('Employee edited');
          }
        )
        
      }
      else {
        this.employeeService.createEmployee(this.employee).subscribe(
          ()=>{
            this.router.navigate(['/']);
          console.log("Employee created:");
        });
       
      }
    }
}
