import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './Component/course-table/course-table.component';
import { CourseServiceClient } from './services/CourseServiceClient';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseViewerComponent } from './Component/course-viewer/course-viewer.component';
import { ModuleListComponent } from './Component/module-list/module-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { LessonTabsComponent } from './Component/lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/LessonServiceClient';
import { QuizzesComponent } from './Component/quizzes/quizzes.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import { QuizComponent } from './Component/quiz/quiz.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import { TrueFalseQuestionComponent } from './Component/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './Component/multiple-choice-question/multiple-choice-question.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
