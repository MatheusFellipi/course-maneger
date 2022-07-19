import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseServices } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourserListComponent implements OnInit {
  _courses: Course[] = [];
  filteredCourses: Course[] = [];
  _filterBy: string = '';

  constructor(private courseServices: CourseServices) {}

  ngOnInit(): void {
    this._courses = this.courseServices.retrieveAll();
    this.filteredCourses = this._courses
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
