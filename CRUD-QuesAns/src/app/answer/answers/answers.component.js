var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var new_answer_component_1 = require('../new-answer/new-answer.component');
var edit_answer_component_1 = require('../edit-answer/edit-answer.component');
var confirm_prompt_component_1 = require('../../shared/confirm-prompt/confirm-prompt.component');
var AnswersComponent = (function () {
    function AnswersComponent(answerService, route, location, matDialog) {
        this.answerService = answerService;
        this.route = route;
        this.location = location;
        this.matDialog = matDialog;
    }
    AnswersComponent.prototype.ngOnInit = function () {
        this.categoryTitle = this.route.snapshot.paramMap.get('category');
        this.questionId = this.route.snapshot.paramMap.get('questionID');
        this.getQuestionText();
        this.getAnswers();
    };
    AnswersComponent.prototype.getQuestionText = function () {
        var _this = this;
        this.answerService.getQuestionText(this.categoryTitle, this.questionId).subscribe(function (res) { return _this.questionText = res; });
    };
    AnswersComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService.getAnswers(this.categoryTitle, this.questionId).subscribe(function (res) {
            _this.answers = res;
        });
    };
    AnswersComponent.prototype.goBack = function () {
        this.location.back();
    };
    AnswersComponent.prototype.addAnswer = function (answerText) {
        var _this = this;
        if (answerText === '') {
            return;
        }
        var answer = {
            _id: '',
            text: answerText,
            likes: 0,
            dislikes: 0
        };
        this.answerService.addAnswer(this.categoryTitle, this.questionId, answer)
            .subscribe(function (response) {
            if (response) {
                _this.getAnswers();
            }
            else {
                console.log('Failed to add answer!');
            }
        });
    };
    AnswersComponent.prototype.updateAnswer = function (editAnswerText, answerId) {
        var _this = this;
        if (editAnswerText === undefined || editAnswerText.trim() === '') {
            return;
        }
        this.answerService.editAnswer(this.categoryTitle, this.questionId, answerId, editAnswerText)
            .subscribe(function (response) {
            if (response) {
                _this.answers[_this.answers.findIndex(function (obj) { return obj._id === answerId; })].text = editAnswerText;
            }
            else {
                console.log('Failed to add answer!');
            }
        });
    };
    AnswersComponent.prototype.incLikes = function (answerId) {
        var _this = this;
        this.answerService.incLikes(this.categoryTitle, this.questionId, answerId).subscribe(function (response) {
            if (response['success'] === true) {
                _this.answers[_this.answers.findIndex(function (obj) { return obj._id == answerId; })].likes += 1;
            }
            else {
                console.log('Failed to delete question');
            }
        });
    };
    AnswersComponent.prototype.incDislikes = function (answerId) {
        var _this = this;
        this.answerService.incDislikes(this.categoryTitle, this.questionId, answerId).subscribe(function (response) {
            if (response['success'] === true) {
                _this.answers[_this.answers.findIndex(function (obj) { return obj._id == answerId; })].dislikes += 1;
            }
            else {
                console.log('Failed to delete question');
            }
        });
    };
    AnswersComponent.prototype.deleteAnswer = function (data) {
        var _this = this;
        if (data.message === 'Yes') {
            this.answerService.deleteAnswer(this.categoryTitle, this.questionId, data.id).subscribe(function (response) {
                if (response['success'] === true) {
                    _this.answers = _this.answers.filter(function (obj) { return obj._id != data.id; });
                }
                else {
                    console.log('Failed to delete question');
                }
            });
        }
    };
    AnswersComponent.prototype.openConfirmPrompt = function (id) {
        var _this = this;
        var dialogConfig = new material_1.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
            message: '',
            id: id
        };
        var dialogRef = this.matDialog.open(confirm_prompt_component_1.ConfirmPromptComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return _this.deleteAnswer(data); });
    };
    AnswersComponent.prototype.openEditDialog = function (answerText, answerId) {
        var _this = this;
        var dialogConfig = new material_1.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = answerText;
        var dialogRef = this.matDialog.open(edit_answer_component_1.EditAnswerComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return _this.updateAnswer(data, answerId); });
    };
    AnswersComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new material_1.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        var dialogRef = this.matDialog.open(new_answer_component_1.NewAnswerComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (answerText) { return _this.addAnswer(answerText); });
    };
    AnswersComponent = __decorate([
        core_1.Component({
            selector: 'app-answers',
            templateUrl: './answers.component.html',
            styleUrls: ['./answers.component.css']
        })
    ], AnswersComponent);
    return AnswersComponent;
})();
exports.AnswersComponent = AnswersComponent;
//# sourceMappingURL=answers.component.js.map