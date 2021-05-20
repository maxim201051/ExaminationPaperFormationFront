import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExaminationPaperComponent} from './examination-paper/examination-paper.component';
import {PageNotFoundComponent} from '../general/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'examination-paper', component: ExaminationPaperComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
