import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {TeacherInfoCardImpl} from '../core/models/teacher-info-card-impl';
import {TeacherInfoComponent} from './teacher-info/teacher-info.component';
import {TeacherListComponent} from './teacher-list/teacher-list.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {GroupListComponent} from './group-list/group-list.component';
import {GroupInfoComponent} from './group-info/group-info.component';

const routes: Routes = [
  { path: 'student', component: StudentInfoComponent },
  { path: 'student/all', component: StudentListComponent },
  { path: 'teacher', component: TeacherInfoComponent },
  { path: 'teacher/all', component: TeacherListComponent },
  { path: 'group', component: GroupInfoComponent },
  { path: 'group/all', component: GroupListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
