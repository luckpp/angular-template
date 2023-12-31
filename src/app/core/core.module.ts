import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarChildComponent } from './components/side-bar-child/side-bar-child.component';


@NgModule({
  declarations: [
    NavigationBarComponent,
    SideBarComponent,
    SideBarChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationBarComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
