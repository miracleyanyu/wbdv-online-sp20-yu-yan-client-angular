import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  faFile = faFile;

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  course = {
    title: 'Undefined'
  };
  courseId = '';
  courses = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = params.courseId;
      this.courseId = params.courseId;
      this.service.findCourseById(courseId)
      .then(course => this.course = course);
    });
    this.service.findAllCourses()
    .then(courses => this.courses = courses);
  }

}
