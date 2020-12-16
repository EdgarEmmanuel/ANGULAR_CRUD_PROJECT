import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/Course';

@Component({
  selector: 'app-table-course-item',
  templateUrl: './table-course-item.component.html',
  styleUrls: ['./table-course-item.component.css']
})
export class TableCourseItemComponent implements OnInit {

  @Input() COURSE : Course;

  constructor() { }

  ngOnInit(): void {
  }

}
