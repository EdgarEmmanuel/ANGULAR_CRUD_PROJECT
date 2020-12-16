import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Course } from 'src/Course';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-course', 
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css']
})
export class FormCourseComponent implements OnInit {

  @Input() course:Course=new Course('','',null);
  @Output() submit : EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  add(form : NgForm){
    this.submit.emit(form.value);
    form.reset();
  }

}
