import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  faFile = faFile;

  constructor(private service: CourseServiceClient) { }

  courses = [];

  ngOnInit(): void {
    this.service.findAllCourses()
    .then(courses => this.courses = courses);
  }

}
