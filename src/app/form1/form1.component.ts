import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';
import { DateAdapter } from '@angular/material/core';
import { enUS, enGB, fr, el } from 'date-fns/locale';
import { format } from 'date-fns';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
  providers: [
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'yyyy-LL-dd',
          monthInput: 'LLLL',
          yearInput: 'yyyy',
          datetimeInput: 'yyyy-LL-dd HH:mm',       
          timeInput: 'HH:mm',
        },
        display: {
          dateInput: 'yyyy-LL-dd',                  
          monthInput: 'LLLL',                      
          yearInput: 'yyyy',                        
          datetimeInput: 'yyyy-LL-dd HH:mm:ss',                                             
          timeInput: 'HH:mm:ss',                          
          monthYearLabel: 'yyyy',                  
          dateA11yLabel: 'DDD',                     
          monthYearA11yLabel: 'LLLL yyyy',
          popupHeaderDateLabel: 'dd LLL, ccc',   
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

  constructor( 
              private formBuilder: FormBuilder,
              private dateAdapter: DateAdapter<any>,
            ) { }

  
  ngOnInit(): void {
    this.initializeForm();
    //this.setDtLocale(el);
    this.setDtLocale(navigator.language);

  }




  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});

    fbGroup.addControl(this.input1ControlNane, new FormControl(""));
    // Add more controls here
    //fbGroup.addControl(this.dt1ControlName, new FormControl(""));

    const dt = format(new Date(), "yyyy-LL-dd HH:mm:ss");
    fbGroup.addControl(this.dt1ControlName, new FormControl(dt));

    this.demoFormGroup = fbGroup;
  }

  setDtLocale(locale: string ): void {

    switch ( navigator.language ) {
      case "en-US":
          this.dateAdapter.setLocale(enUS);
          break;
      case "en-GB":
          this.dateAdapter.setLocale(enGB);
          break;
      case "fr":
          this.dateAdapter.setLocale(fr);
          break;
      default: 
          this.dateAdapter.setLocale(enUS); 
          break;
   }
  //  this.dateAdapter.setLocale(locale);

  }

  onFormSubmit(event: Event): void {
    console.log('Form Submitted', this.demoFormGroup.value);

  }

}