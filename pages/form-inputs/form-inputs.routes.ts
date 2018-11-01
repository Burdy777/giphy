import { Routes } from '@angular/router';
import { InputsComponent } from './inputs.component';

export const INPUTS_ROUTES: Routes = [
  {path: 'form-inputs' , component: InputsComponent, children:
  [
    {
      path: '',
      component: InputsComponent,
    }
  ]
}
];
