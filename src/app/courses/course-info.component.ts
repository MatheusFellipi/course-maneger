import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseServices } from './course.service';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourserInfoComponent implements OnInit {
  course: Course = {
    code: '',
    name: '',
    image: '',
    release: '',
    description: '',
    id: 0,
    price: 0,
    rating: 0,
    duration: 0,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private courseServices: CourseServices
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id !== null) {
      this.courseServices.retrieveById(+id).subscribe({
        next: (course) => (this.course = course),
        error: (err) => console.log(err),
      });
    }
  }

  save(): void {
    this.courseServices.save(this.course).subscribe({
      next: (course) => (this.course = course),
      error: (err) => console.log(err),
    });
  }
}
