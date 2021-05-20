import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateTeacherComponent} from './create-teacher/create-teacher.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {MatNativeDateModule} from '@angular/material/core';
import {SubjectListComponent} from './subject-list/subject-list.component';
import {CreateSubjectDetailsComponent} from './create-subject-details/create-subject-details.component';
import {SubjectDetailsImpl} from '../core/models/subject-details-impl';
import {SubjectDetailsListComponent} from './subject-details-list/subject-details-list.component';
import {AssignSubjectDetailsToGroupComponent} from './assign-subject-details-to-group/assign-subject-details-to-group.component';

const routes: Routes = [
  {path: 'teacher/add', component: CreateTeacherComponent},
  {path: 'student/add', component: CreateStudentComponent},
  {path: 'group/add', component: CreateGroupComponent},
  {path: 'subject', component: SubjectListComponent},
  {path: 'subject-details/add', component: CreateSubjectDetailsComponent},
  {path: 'subject-details/all', component: SubjectDetailsListComponent},
  {path: 'assign-subject-details-to-group', component: AssignSubjectDetailsToGroupComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatNativeDateModule,
    ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
