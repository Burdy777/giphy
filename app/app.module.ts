import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES } from './app.routes';
import { FormInputsModule } from 'src/pages/form-inputs/form-inputs.module';
import { WelcomeComponent } from 'src/pages/welcome/welcome.component';
import { StudentService } from 'src/services/user/student.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    MatButtonModule,
    FormInputsModule
    ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
