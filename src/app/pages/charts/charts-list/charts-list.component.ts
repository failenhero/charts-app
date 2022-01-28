import {Component, OnInit} from '@angular/core';
import {ChartsService} from "../../../shared/services";
import {DestroyService} from "../../../shared/services";
import {Observable} from "rxjs";
import {Chart} from "../../../shared/models";

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.scss'],
  providers: [DestroyService]
})
export class ChartsListComponent implements OnInit {
  chartsList$!: Observable<Chart[]>;

  constructor(
    private chartsService: ChartsService,
    private destroy$: DestroyService
  ) { }

  ngOnInit(): void {
    this.chartsList$ = this.chartsService.getChartsList$();
  }
}
