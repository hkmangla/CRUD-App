import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import {NewCategoryComponent} from './new-category/new-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import {PipeModule} from '../pipes/pipe.module';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ValidatorModule} from '../validators/validator.module';
import {HttpClientModule} from '@angular/common/http';
import {Category} from "./category";

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    PipeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ValidatorModule,
    HttpClientModule
  ],
  declarations: [
    CategoriesComponent,
    NewCategoryComponent
  ],
  entryComponents: [
    NewCategoryComponent
  ]
})
export class CategoryModule { }
