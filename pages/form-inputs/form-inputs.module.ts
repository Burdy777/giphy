import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs.component';
import { RouterModule } from '@angular/router';
import { INPUTS_ROUTES } from './form-inputs.routes';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(INPUTS_ROUTES)
  ],
  declarations: [
    InputsComponent,
    DropdownComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent
  ],
  exports: [
    InputsComponent,
    DropdownComponent
  ]
})
export class FormInputsModule { }
