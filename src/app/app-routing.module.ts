import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationViewComponent } from './views/calculation-page/calculation-view.component';
import { OtherPageViewComponent } from './views/other-page/other-page-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CalculationViewComponent
  },
  {
    path: 'other-page',
    component: OtherPageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
