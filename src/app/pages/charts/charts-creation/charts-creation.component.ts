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

  get red(): FormControl {
    return this.form.get('red') as FormControl;
  }

  get green(): FormControl {
    return this.form.get('green') as FormControl;
  }

  get blue(): FormControl {
    return this.form.get('blue') as FormControl;
  }

  get yellow(): FormControl {
    return this.form.get('yellow') as FormControl;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      red: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      green: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      blue: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      yellow: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
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
        red: formValue.red,
        green: formValue.green,
        blue: formValue.blue,
        yellow: formValue.yellow
      }
    }

    this.chartsService.addNewChart(chart);
    this.router.navigate(['/charts'])
  }
}
