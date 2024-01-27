import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
  providers: [
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          timeInput: 'HH:mm:ss',
          datetimeInput: 'YYYY-MM-DD HH:mm:ss',
          monthYearLabel: 'YYYY MMMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMM DD, ddd',
        },
      },
    },
  ],
})
export class Form1Component {

  fornCardTitle: string = 'My Demo Form';
  demoFormGroup!: FormGroup;

  input1Label: string = 'Input some text';
  input1Placeholder: string = 'Type some text here';
  input1ControlNane: string = 'input1';

  submitButtomText: string = 'Submit';

  dt1ControlName: string = 'dtpicker1';
  mtxType!: MtxDatetimepickerType

  constructor( private formBuilder: FormBuilder ) { }

  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});

    fbGroup.addControl(this.input1ControlNane, new FormControl(""));
    // Add more controls here
    fbGroup.addControl(this.dt1ControlName, new FormControl(""));
    //fbGroup.addControl(this.dt1ControlName, new FormControl("1973-11-17 20:30"));

    this.demoFormGroup = fbGroup;
  }

  onFormSubmit(event: Event): void {
    console.log('Form Submitted', this.demoFormGroup.value);

  }

}