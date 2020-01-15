import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string
  ){}
}

export class Greet{
 constructor(public message:string){

 }
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(){
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8090/getEmployees')
  }
  sayHello(){
    return this.httpClient.get<Greet>('http://localhost:8090/hello');
  }
}
