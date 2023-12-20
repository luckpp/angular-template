import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBComponent } from './components/home-b/home-b.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureBRoutingModule { }
