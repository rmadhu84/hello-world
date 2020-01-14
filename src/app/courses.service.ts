/*
Services are plain typescript class. They should not be decorated 
with Component typedecorator, like component class.
*/
export class CoursesService{
    getCourses(){
        return ["course1", "course2", "course3"];
    }

}