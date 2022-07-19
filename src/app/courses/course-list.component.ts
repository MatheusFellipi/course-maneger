import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourserListComponent implements OnInit {
  coursers: Course[] = [];

  ngOnInit(): void {
    this.coursers = [
      {
        id: 1,
        name: 'Angular: forms',
        price: 99.99,
        code: 'XPS-7856',
        duration: 120,
        rating: 5,
      },  {
        id: 2,
        name: 'Angular: HTTP',
        price: 40.99,
        code: 'LKU-4531',
        duration: 80,
        rating: 4,
      },
      
    ];
  }
}
