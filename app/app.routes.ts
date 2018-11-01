import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormInputsModule } from './../pages/form-inputs/form-inputs.module';
import { WelcomeComponent } from 'src/pages/welcome/welcome.component';
import { InputsComponent } from 'src/pages/form-inputs/inputs.component';
export const APP_ROUTES: Routes = [
{ path: '', component: WelcomeComponent},
{ path: 'form-inputs', loadChildren: './../pages/form-inputs/form-inputs.module#FormInputsModule'}
];

