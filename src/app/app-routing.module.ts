import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './Component/course-table/course-table.component';
import {CourseViewerComponent} from './Component/course-viewer/course-viewer.component';


const routes: Routes = [
  {path: '', redirectTo: 'table/courses', pathMatch: 'full'},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
