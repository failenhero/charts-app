import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChartsListComponent} from "./charts-list/charts-list.component";
import {ChartsCreationComponent} from "./charts-creation/charts-creation.component";

const chartsRoutes: Routes = [
  {path: 'charts', component: ChartsListComponent},
  {path: 'create-chart', component: ChartsCreationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(chartsRoutes)],
  exports: [RouterModule]
})

export class ChartsRoutingModule { }
