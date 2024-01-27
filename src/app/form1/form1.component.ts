import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
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

    this.demoFormGroup = fbGroup;
  }

  onFormSubmit(event: Event): void {
    console.log('Form Submitted', this.demoFormGroup.value);
  }

}

