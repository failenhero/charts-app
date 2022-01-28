import {Component, OnInit} from '@angular/core';
import {ChartsService} from "../../../shared/services";
import {Chart} from "../../../shared/models";
import {axisColor, footerTitle, secondaryFont, titleColor, titleFont} from "../../../shared/constants";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-charts-creation',
  templateUrl: './charts-creation.component.html',
  styleUrls: ['./charts-creation.component.scss']
})
export class ChartsCreationComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private chartsService: ChartsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get aSensor(): FormControl {
    return this.form.get('A_Sensor') as FormControl;
  }

  get bSensor(): FormControl {
    return this.form.get('B_Sensor') as FormControl;
  }

  get cSensor(): FormControl {
    return this.form.get('C_Sensor') as FormControl;
  }

  get dSensor(): FormControl {
    return this.form.get('D_Sensor') as FormControl;
  }

  get eSensor(): FormControl {
    return this.form.get('E_Sensor') as FormControl;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      A_Sensor: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      B_Sensor: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      C_Sensor: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      D_Sensor: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      E_Sensor: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  submitForm(): void {
    const formValue = { ...this.form.value };

    const chart: Chart = {
      metaInfo: {
        width: 500,
        height: 300,
        title: formValue.title,
        titleColor: titleColor,
        titleFont: titleFont,
        columnTitleColor: titleColor,
        columnFont: secondaryFont,
        footerTitle: footerTitle,
        footerColor: axisColor,
        footerFont: secondaryFont,
        leftaxisColor: axisColor,
        leftaxisFont: secondaryFont,
      },
      sensorReadings: {
        A_Sensor: formValue.A_Sensor,
        B_Sensor: formValue.B_Sensor,
        C_Sensor: formValue.C_Sensor,
        D_Sensor: formValue.D_Sensor,
        E_Sensor: formValue.E_Sensor
      }
    }

    this.chartsService.addNewChart(chart);
    this.router.navigate(['/charts'])
  }
}
