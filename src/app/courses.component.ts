import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { HttpClient } from '@angular/common/http';
import { HttpclientService } from './service/httpclient.service';

@Component({
    selector: 'courses', //references the <courses> element. 
    //template: '<h2>{{ "Title: " + title }}</h2>' //concatenating a string with title field
    //template: '<h2>{{ getTitle() }}</h2>' // calling a method which returns a string. This will be evaluated during runtime.

    /*
        Using backticks (`) lets you write multiline templates.
        ngFor - A directive for iterating through a collection. A directive is used to 
                modify the DOM element either by adding a new element or removing an 
                existing element.
        * - prefixing a directive with asterisk, lets the directive modify the structure of 
            DOM element either by adding a new element or removing an existing element.
        let <var> of <collection>
    */
    template: `<h1>{{ greet.message }}</h1>
                <h2>{{ getTitle() }}</h2> 
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
    `
})
export class CoursesComponent implements OnInit {
    
    title = "List of courses";
    //courses = ["course1", "course2", "course3"];// Moving this to the courses.service.ts
    courses;
    greet:string;
    
    /*
    Injecting an object of service, using the constructor dependency injection.
    Must add CourseService to providers list in app.module.ts, in order to register this
    service class as a dependency to component(s).
    */
    constructor(service: CoursesService, public httpClientService:HttpclientService){
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

    ngOnInit(){
        
        this.httpClientService.sayHello().subscribe(response => this.handleSuccessResponse(response));
    }
    getTitle() {
        return this.title;
    }
    sayHello(){
        return (this.greet as string);
    }
    handleSuccessResponse(response){
        this.greet = response;
    }
}