import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { NbCardModule, NbTreeGridModule } from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    NbTreeGridModule,
    NbCardModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
