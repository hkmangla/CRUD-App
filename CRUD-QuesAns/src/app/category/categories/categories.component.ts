import {Component, OnInit} from '@angular/core';
import {Category} from '../category';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NewCategoryComponent} from '../new-category/new-category.component';
import { CategoryService } from '../services/category.service';
import {ConfirmPromptComponent} from "../../shared/confirm-prompt/confirm-prompt.component";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  categoriesTitle: String[] = [];

  constructor(private categoryService: CategoryService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.getCategories();
    this.getCategoriesTitle();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = this.categoriesTitle;
    const dialogRef = this.matDialog.open(NewCategoryComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.categoryService.updateCategory(data).subscribe(
            response => {
              console.log("Response: " + JSON.stringify(response));
              this.categories = this.categories.concat(data);
              console.log('Title: ', data.title);
              this.categoriesTitle.push(data.title);
            },
            err => console.log(err)
          )
        }
      }
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
      }
    );
  }
  getCategoriesTitle() {
    this.categoryService.getCategoryTitles().subscribe(
      res => {
        console.log('Titles: ' + JSON.stringify(res));
        this.categoriesTitle = res;
      }
    );
  }

  deleteCategory(data): void {
    if (data.message === 'Yes') {
      this.categoryService.deleteCategory(data.id).subscribe(
        response => {
          if(response['success'] === true) {
            this.categories = this.categories.filter(
              obj => obj.title != data.id
            )
          } else {
            console.log('Failed to delete category');
          }
        }
      );
    }
  }

  openConfirmPrompt(event, title): void {

    event.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      message: '',
      id: title
    };

    const dialogRef = this.matDialog.open(ConfirmPromptComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.deleteCategory(data)
    );

  }
}
