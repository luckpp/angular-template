import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { HomeAComponent } from './components/home-a/home-a.component';


@NgModule({
  declarations: [
    HomeAComponent
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
