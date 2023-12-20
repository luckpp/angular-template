import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { HomeBComponent } from './components/home-b/home-b.component';


@NgModule({
  declarations: [
    HomeBComponent
  ],
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
