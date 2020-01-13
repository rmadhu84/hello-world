import { Component } from '@angular/core';

@Component({
    selector: 'courses', //references the <courses> element. 
    //template: '<h2>{{ "Title: " + title }}</h2>' //concatenating a string with title field
    //template: '<h2>{{ getTitle() }}</h2>' // calling a method which returns a string. This will be evaluated during runtime.
    
    /*
        Using backticks (`) lets you write multiline templates.
        ngFor - A directive for looping through a collection. A directive is used to 
                modify the DOM element either by adding a new element or removing an 
                existing element.
        * - prefixing a directive with asterisk, lets the directive modify the structure of 
            DOM element either by adding a new element or removing an existing element.
        let <var> of <collection>
    */
    template: `<h2>{{ getTitle() }}</h2> 
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses = ["course1", "course2", "course3"];
    getTitle(){
        return this.title;
       
    }
}