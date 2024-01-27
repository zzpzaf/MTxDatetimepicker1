import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { MtxDatetimepickerModule, } from '@ng-matero/extensions/datetimepicker';
//import { MtxNativeDatetimeModule } from '@ng-matero/extensions/core';
//import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';
import { MtxLuxonDatetimeModule } from '@ng-matero/extensions-luxon-adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MtxDatetimepickerModule,
    //MtxNativeDatetimeModule,
    //MtxMomentDatetimeModule,
    MtxLuxonDatetimeModule,
], 
    exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MtxDatetimepickerModule,
    //MtxNativeDatetimeModule,
    //MtxMomentDatetimeModule,
    MtxLuxonDatetimeModule,
]
})
export class MaterialModule { }
