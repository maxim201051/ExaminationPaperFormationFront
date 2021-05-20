import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {CreateAccountComponent} from './create-account/create-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateStudentComponent} from './create-student/create-student.component';
import {CreateTeacherComponent} from './create-teacher/create-teacher.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CreateSubjectDetailsComponent } from './create-subject-details/create-subject-details.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignSubjectDetailsToGroupComponent } from './assign-subject-details-to-group/assign-subject-details-to-group.component';
import { SubjectDetailsListComponent } from './subject-details-list/subject-details-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    CreateAccountComponent,
    CreateStudentComponent,
    CreateTeacherComponent,
    CreatePersonComponent,
    CreateGroupComponent,
    SubjectListComponent,
    CreateSubjectDetailsComponent,
    AssignSubjectDetailsToGroupComponent,
    SubjectDetailsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
