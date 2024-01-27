        import { MatButtonModule } from '@angular/material/button';
        import { MatInputModule } from '@angular/material/input';
        import { MatFormFieldModule } from '@angular/material/form-field';
        import { MatCardModule } from '@angular/material/card';
        import { MatIconModule } from '@angular/material/icon';
        import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';



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
], 
	exports: [
		MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
]
})
export class MaterialModule { }
