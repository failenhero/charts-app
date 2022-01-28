import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsListComponent } from './charts-list/charts-list.component';
import {ChartsRoutingModule} from "./charts-routing.module";
import { ChartsCreationComponent } from './charts-creation/charts-creation.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "../../components/components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    ChartsListComponent,
    ChartsCreationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsRoutingModule,
    MatButtonModule,
    HttpClientModule,
    ComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ChartsModule { }
