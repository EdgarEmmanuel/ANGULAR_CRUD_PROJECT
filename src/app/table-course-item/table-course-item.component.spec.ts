import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourseItemComponent } from './table-course-item.component';

describe('TableCourseItemComponent', () => {
  let component: TableCourseItemComponent;
  let fixture: ComponentFixture<TableCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
