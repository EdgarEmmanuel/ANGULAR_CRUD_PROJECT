import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/Course';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css'] 
})
export class TableCourseComponent implements OnInit {

  @Input() allCourses:Course[];

  constructor() { } 

  ngOnInit(): void {
  }
 
}
