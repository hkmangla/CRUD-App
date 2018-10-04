import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CategoryModule} from './category/category.module';
import {AnswerModule} from './answer/answer.module';
import {QuestionModule} from './question/question.module';
import {RegisterModule} from "./register/register.module";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule,
    AnswerModule,
    QuestionModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
