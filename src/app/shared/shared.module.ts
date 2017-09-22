import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';


@NgModule({
	declarations: [
		InputComponent,
		RadioComponent,
		RatingComponent
	],
	// O que eu vou precisar dentro destes componentes
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	// Quem vou exportar para utilizar fora deste modulo
	exports: [
		InputComponent,
		RadioComponent,
		RatingComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SharedModule {}