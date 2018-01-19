import { Component, OnInit,TemplateRef,ViewChild } from '@angular/core';
import {Employee} from './employee.model';
import {EmployeeService} from './app.service';
import {Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-grid-employs',
  templateUrl: './grid-employs.component.html',
  styleUrls: ['./grid-employs.component.css']
})
export class GridEmploysComponent implements OnInit {
  //1. Template Ref types 
  @ViewChild('readOnlyTemplate')readOnlyTemplate : TemplateRef < any >;
  message : string;
  employee : Employee;
  employees : Array < Employee >;
  //3. Constructor injected with the Service Dependency
  constructor(private serv : EmployeeService) { 
    this.message = 'HTML DataGrid using Angular 4';
    this.employees = new Array < Employee > ();
  }

  ngOnInit() {
    this.loadEmployee();
    //this.employee=new Employee("1561096",444,"33",12,"HN","sffsd");
    //this.employees.push(this.employee);
  }
  //4. Load all Employees
  private loadEmployee() {
    this
        .serv
        .getEmployees()
        .subscribe((resp : Response) => {
            this.employees = resp.json();
            console.log(JSON.stringify(resp.json()));    
        });
  }
  //7. Load either Read-Onoy Template or EditTemplate
  loadTemplate(emp : Employee) {
    //if (this.selemp && this.selemp.EmpNo == emp.EmpNo) {
    //    return this.editTemplate;
    //} else {
        return this.readOnlyTemplate;
    //}
     
  }

}
