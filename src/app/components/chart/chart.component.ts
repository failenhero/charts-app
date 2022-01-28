import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {ChartsService} from "../../shared/services";
import {Chart} from "../../shared/models";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @Input() chart!: Chart;

  constructor(
    private chartsService: ChartsService,
    private elRef: ElementRef
  ) { }

  ngAfterViewInit() {
    const canvas = this.elRef.nativeElement.querySelector('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      context.fillStyle='#262a33';
      context.fillRect(0, 0, this.chart.metaInfo.width, this.chart.metaInfo.height);
      this.drawBarChart(context);
      this.addTitleToChart(context);
      this.addFooterToChart(context);
      this.addHorizontalLines(context);
    }
  }

  deleteChart(): void {
    if (this.chart.chartId) {
      this.chartsService.deleteChart(this.chart.chartId).catch(console.log);
    }
  }

  addTitleToChart(context: any){
    context.font = this.chart.metaInfo.titleFont;
    context.fillStyle = this.chart.metaInfo.titleColor;
    context.fillText(this.chart.metaInfo.title,100,30);
  }

  addFooterToChart(context: any) {
    context.font = this.chart.metaInfo.footerFont;
    context.fillStyle = this.chart.metaInfo.footerColor;
    context.fillText(this.chart.metaInfo.footerTitle,this.chart.metaInfo.width / 2, this.chart.metaInfo.height - 10);
  }

  addColumnName(context: any, name: any, xpos: any, ypos: any){
    context.font = this.chart.metaInfo.columnFont;
    context.fillStyle = this.chart.metaInfo.columnTitleColor;
    context.fillText(name, xpos, ypos);
  }

  addHorizontalLines(context: any) {
    context.font = this.chart.metaInfo.leftaxisFont;
    context.fillStyle = this.chart.metaInfo.leftaxisColor;

    for(var i = 0; i < 11; i++) {

      context.lineWidth = 0.5;
      context.beginPath();
      context.moveTo(25, (20 * i) + 40);
      context.lineTo(475,(20 * i) + 40);
      context.strokeStyle  = this.chart.metaInfo.leftaxisColor;
      context.stroke();
    }
  }

  addColumnHead(context: any, name: any, xpos: any, ypos: any){
    context.font = this.chart.metaInfo.columnFont;
    context.fillStyle = this.chart.metaInfo.columnTitleColor;
    context.fillText(name, xpos, ypos);
  }



  drawBarChart(context: any){
    let chartData = Object.entries(this.chart.sensorReadings).sort();
    const newData = chartData.map(data => ({name: data[0], value: data[1]}))

    for(let i = 0; i < newData.length; i++) {
      context.fillStyle = "#36b5d8";
      let sensorInfo = newData[i];
      context.fillRect(25 + i * 100, this.chart.metaInfo.height - sensorInfo.value * 2 - 60, 50, sensorInfo.value * 2);
      this.addColumnName(context, sensorInfo.name, 25 + i * 100,this.chart.metaInfo.height - 40);
      this.addColumnHead(context, sensorInfo.value,45 + i * 100,this.chart.metaInfo.height - sensorInfo.value * 2 - 65);
    }
  }
}
