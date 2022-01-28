import {Component, Input, OnInit} from '@angular/core';
import {ChartsService} from "../../shared/services";
import {Chart} from "../../shared/models";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chart: Chart = {} as Chart;

  constructor(
    private chartsService: ChartsService
  ) { }

  ngOnInit(): void {
  }

  deleteChart(): void {
    if (this.chart.chartId) {
      this.chartsService.deleteChart(this.chart.chartId).catch(console.log);
    }
  }
}
