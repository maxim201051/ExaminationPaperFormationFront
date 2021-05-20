import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonInfoComponent } from './person-info/person-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { StudentListComponent } from './student-list/student-list.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { GroupListComponent } from './group-list/group-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AdminHelpRequestAddingComponent } from './admin-help-request-adding/admin-help-request-adding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {GeneralRoutingModule} from './general-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PersonInfoComponent,
    StudentInfoComponent,
    TeacherInfoComponent,
    StudentListComponent,
    GroupInfoComponent,
    GroupListComponent,
    TeacherListComponent,
    AdminHelpRequestAddingComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  exports: [
    PersonInfoComponent
  ],
    imports: [
        CommonModule,
        GeneralRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class GeneralModule { }
