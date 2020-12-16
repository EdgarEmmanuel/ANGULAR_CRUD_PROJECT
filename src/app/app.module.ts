import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { TableCourseComponent } from './table-course/table-course.component';
import { TableCourseItemComponent } from './table-course-item/table-course-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FormCourseComponent,
    TableCourseComponent,
    TableCourseItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
