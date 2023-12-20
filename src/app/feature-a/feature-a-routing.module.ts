import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAComponent } from './components/home-a/home-a.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
