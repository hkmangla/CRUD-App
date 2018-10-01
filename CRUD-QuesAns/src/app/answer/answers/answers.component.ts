import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Answer } from '../answer';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewAnswerComponent } from '../new-answer/new-answer.component';
import { EditAnswerComponent } from '../edit-answer/edit-answer.component';
import {AnswerService} from '../services/answer.service';
import {CategoryService} from '../../category/services/category.service';
import {ConfirmPromptComponent} from '../../shared/confirm-prompt/confirm-prompt.component';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  categoryTitle: string;
  questionId: string;
  answers: Answer[];
  questionText: string;

  constructor(private answerService: AnswerService,
              private route: ActivatedRoute,
              private location: Location,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.categoryTitle = this.route.snapshot.paramMap.get('category');
    this.questionId = this.route.snapshot.paramMap.get('questionID');
    this.getQuestionText();
    this.getAnswers();
  }

  getQuestionText() {
    this.answerService.getQuestionText(this.categoryTitle, this.questionId).subscribe(
      res => this.questionText = res
    );
  }

  getAnswers(): void {
    this.answerService.getAnswers(this.categoryTitle, this.questionId).subscribe(
      res => {
        this.answers = res;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  addAnswer(answerText): void {
    if ( answerText === '') {
      return;
    }
    const answer = {
      _id: '',
      text: answerText,
      likes: 0,
      dislikes: 0
    };

    this.answerService.addAnswer(this.categoryTitle, this.questionId, answer)
        .subscribe(
          response => {
            if (response) {
              this.getAnswers();
            } else {
              console.log('Failed to add answer!');
            }
          }
        );
  }


  updateAnswer(editAnswerText, answerId): void {
    if (editAnswerText === undefined || editAnswerText.trim() === '') {
      return;
    }

    this.answerService.editAnswer(this.categoryTitle, this.questionId, answerId, editAnswerText)
      .subscribe(
        response => {
          if (response) {
            this.answers[this.answers.findIndex
                        (obj => obj._id === answerId)].text = editAnswerText;
          } else {
            console.log('Failed to add answer!');
          }
        }
      );
  }

  incLikes (answerId): void {
    this.answerService.incLikes(this.categoryTitle, this.questionId, answerId).subscribe(
      response => {
        if(response['success'] === true) {
          this.answers[this.answers.findIndex(
            obj => obj._id == answerId)].likes += 1;
        } else {
          console.log('Failed to delete question');
        }
      }
    );
  }

  incDislikes (answerId): void {
    this.answerService.incDislikes(this.categoryTitle, this.questionId, answerId).subscribe(
      response => {
        if(response['success'] === true) {
          this.answers[this.answers.findIndex(
            obj => obj._id == answerId)].dislikes += 1;
        } else {
          console.log('Failed to delete question');
        }
      }
    );
  }

  deleteAnswer(data): void {
    if (data.message === 'Yes') {
      this.answerService.deleteAnswer(this.categoryTitle, this.questionId, data.id).subscribe(
        response => {
          if(response['success'] === true) {
            this.answers = this.answers.filter(
              obj => obj._id != data.id
            )
          } else {
            console.log('Failed to delete question');
          }
        }
      );
    }
  }

  openConfirmPrompt (id): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      message: '',
      id: id
    };

    const dialogRef = this.matDialog.open(ConfirmPromptComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.deleteAnswer(data)
    );

  }

  openEditDialog(answerText, answerId): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = answerText;

    const dialogRef = this.matDialog.open(EditAnswerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.updateAnswer(data, answerId)
    );

  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    const dialogRef = this.matDialog.open(NewAnswerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      answerText => this.addAnswer(answerText)
    );
  }
}
