import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  employees: string;
  constructor(private httpClientService: HttpclientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(response => this.handleSuccessfulResponse(response=>this.handleSuccessfulResponse(response)));
  }

  handleSuccessfulResponse(response) {
    this.employees = response;
  }
}
