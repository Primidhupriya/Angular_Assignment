import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';


@NgModule({
  declarations: [
    FormComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
  ]
})
export class FormModule { }
