import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationPaperComponent } from './examination-paper/examination-paper.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ExaminationPaperComponent
  ],
  exports: [
    ExaminationPaperComponent
  ],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        FormsModule
    ]
})
export class TeacherModule { }
