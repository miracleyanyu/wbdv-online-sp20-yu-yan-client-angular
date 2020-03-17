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

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
