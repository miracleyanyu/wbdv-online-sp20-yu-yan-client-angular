import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './Component/course-table/course-table.component';
import {CourseViewerComponent} from './Component/course-viewer/course-viewer.component';
import {QuizzesComponent} from './Component/quizzes/quizzes.component';
import {QuizComponent} from './Component/quiz/quiz.component';


const routes: Routes = [
  {path: '', redirectTo: 'table/courses', pathMatch: 'full'},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },
  {path: 'table/courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
