import { Component } from '@angular/core';
import { Course } from 'src/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolistApp';

  COURSES : Course[] = new Array<Course>();


  addCourse(course : Course){
    this.COURSES.push(course);
  }
}
