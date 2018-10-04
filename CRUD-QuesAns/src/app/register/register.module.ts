import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login/login.component';
import {ValidatorModule} from "../validators/validator.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RegisterRoutingModule,
    ValidatorModule
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class RegisterModule { }
