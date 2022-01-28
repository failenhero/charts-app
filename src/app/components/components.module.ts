import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    TopBarComponent,
    PageNotFoundComponent,
    ChartComponent,
  ],
  exports: [
    TopBarComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
