import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewQuestionComponent } from '../new-question/new-question.component';
import { QuestionService } from '../services/question.service';
import { CategoryService } from '../../category/services/category.service';
import {ConfirmPromptComponent} from '../../shared/confirm-prompt/confirm-prompt.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  categoryTitle: string;
  newQuestionText: string;

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute,
              private location: Location,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.getCategoryTitle();
    this.getQuestions();
  }

  getCategoryTitle(): void {
    this.categoryTitle = this.route.snapshot.paramMap.get('category');
  }

  getQuestions(): void {
    this.questionService.getQuestions(this.categoryTitle).subscribe(
      res => {
        this.questions = res;
        console.log(this.questions);
      }
    );
  }

  incLikes (questionId): void {
    this.questionService.incLikes(this.categoryTitle, questionId).subscribe(
      response => {
        if(response['success'] === true) {
          this.questions[this.questions.findIndex(
            obj => obj._id == questionId)].likes += 1;
        } else {
          console.log('Failed to delete question');
        }
      }
    );
  }

  incDislikes (questionId): void {
    this.questionService.incDislikes(this.categoryTitle, questionId).subscribe(
      response => {
        if(response['success'] === true) {
          this.questions[this.questions.findIndex(
            obj => obj._id == questionId)].dislikes += 1;
        } else {
          console.log('Failed to delete question');
        }
      }
    );
  }

  deleteQuestion(data): void {
    if (data.message === 'Yes') {
      this.questionService.deleteQuestion(this.categoryTitle, data.id).subscribe(
        response => {
          if(response['success'] === true) {
            this.questions = this.questions.filter(
              obj => obj._id != data.id
            )
          } else {
            console.log('Failed to delete question');
          }
        }
      );
    }
  }

  openPromptDialog(id): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      message: '',
      id: id
    };

    const dialogRef = this.matDialog.open(ConfirmPromptComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.deleteQuestion(data)
    );

  }

  goBack(): void {
    this.location.back();
  }

  updateQuestion(): void {
    if (this.newQuestionText === undefined ||
        this.newQuestionText.trim() === '') {
      return;
    }

    const question: Question = {
      _id: '',
      description: this.newQuestionText,
      likes: 0,
      dislikes: 0,
      answersCount: 0
    };

    this.questionService.addQuestion(this.categoryTitle, question).subscribe(
      response => {
        if(response['success'] === true) {
          this.getQuestions();
        } else {
          console.log('Failed to add question');
        }
      }
    );
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    const dialogRef = this.matDialog.open(NewQuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      questionText => this.newQuestionText = questionText,
      error => console.log(error),
      this.updateQuestion.bind(this));
  }

}
