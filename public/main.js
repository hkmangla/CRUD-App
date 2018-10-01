(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer/answer-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/answer/answer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AnswerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerRoutingModule", function() { return AnswerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/answer/answers/answers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'categories/:category/questions/:questionID', component: _answers_answers_component__WEBPACK_IMPORTED_MODULE_2__["AnswersComponent"] },
];
var AnswerRoutingModule = /** @class */ (function () {
    function AnswerRoutingModule() {
    }
    AnswerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AnswerRoutingModule);
    return AnswerRoutingModule;
}());



/***/ }),

/***/ "./src/app/answer/answer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/answer/answer.module.ts ***!
  \*****************************************/
/*! exports provided: AnswerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerModule", function() { return AnswerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _new_answer_new_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-answer/new-answer.component */ "./src/app/answer/new-answer/new-answer.component.ts");
/* harmony import */ var _edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-answer/edit-answer.component */ "./src/app/answer/edit-answer/edit-answer.component.ts");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/answer/answers/answers.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _answer_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//answer-routing.module */ "./src/app/answer/answer-routing.module.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AnswerModule = /** @class */ (function () {
    function AnswerModule() {
    }
    AnswerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _answer_routing_module__WEBPACK_IMPORTED_MODULE_8__["AnswerRoutingModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"]
            ],
            declarations: [
                _new_answer_new_answer_component__WEBPACK_IMPORTED_MODULE_2__["NewAnswerComponent"],
                _edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_3__["EditAnswerComponent"],
                _answers_answers_component__WEBPACK_IMPORTED_MODULE_4__["AnswersComponent"]
            ],
            // exports: [
            //   NewAnswerComponent,
            //   EditAnswerComponent,
            //   AnswersComponent
            // ]
            entryComponents: [
                _edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_3__["EditAnswerComponent"],
                _new_answer_new_answer_component__WEBPACK_IMPORTED_MODULE_2__["NewAnswerComponent"]
            ]
        })
    ], AnswerModule);
    return AnswerModule;
}());



/***/ }),

/***/ "./src/app/answer/answers/answers.component.css":
/*!******************************************************!*\
  !*** ./src/app/answer/answers/answers.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-bar img {\r\n  width: 1em;\r\n  height: 1em;\r\n  cursor: pointer;\r\n}\r\n\r\n.status-bar img:hover {\r\n  -webkit-transform: scale(1.2, 1.2);\r\n          transform: scale(1.2, 1.2);\r\n}\r\n\r\n.status-bar {\r\n  height: 20px;\r\n  line-height: 20px;\r\n}\r\n\r\n.answer-section {\r\n  margin-top: 20px;\r\n}\r\n\r\n.container {\r\n  padding-top: 130px;\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/answer/answers/answers.component.html":
/*!*******************************************************!*\
  !*** ./src/app/answer/answers/answers.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <p> <a routerLink=\"/categories\">Categories</a> >>\n    <a routerLink=\"/categories/{{categoryTitle | lowercase}}\">\n      {{categoryTitle | capitalize}}\n    </a> >> {{questionText}} </p>\n\n  <h3>{{question}}</h3>\n  <button class=\"btn btn-primary\"\n    (click)=\"openDialog()\">New Answer</button>\n  <div class=\"answer-section\">\n    <div class=\"well\" *ngFor=\"let answer of answers; let i=index\">\n        <p class=\"text\">{{answer.text}}</p>\n        <p class=\"status-bar\">\n          <img (click)=\"incLikes(answer._id)\" src=\"../../assets/like.png\"\n               title=\"Like\"> {{answer.likes}}&nbsp;&nbsp;&nbsp;\n          <img (click)=\"incDislikes(answer._id)\" class=\"dislike\"\n               src=\"../../assets/dislike.png\" title=\"Dislike\"> {{answer.dislikes}}&nbsp;&nbsp;&nbsp;\n          <img (click)=\"openConfirmPrompt(answer._id)\" src=\"../../assets/delete.png\"\n               title=\"Delete\">&nbsp;&nbsp;&nbsp;\n          <img (click)=\"openEditDialog(answer.text, answer._id)\" src=\"../../assets/edit.png\"\n               title=\"Edit\">\n        </p>\n        <hr>\n    </div>\n  </div>\n\n  <button class=\"btn btn-primary\"\n    (click)=\"goBack()\">Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/answer/answers/answers.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/answer/answers/answers.component.ts ***!
  \*****************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_answer_new_answer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-answer/new-answer.component */ "./src/app/answer/new-answer/new-answer.component.ts");
/* harmony import */ var _edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-answer/edit-answer.component */ "./src/app/answer/edit-answer/edit-answer.component.ts");
/* harmony import */ var _services_answer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/answer.service */ "./src/app/answer/services/answer.service.ts");
/* harmony import */ var _shared_confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/confirm-prompt/confirm-prompt.component */ "./src/app/shared/confirm-prompt/confirm-prompt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AnswersComponent = /** @class */ (function () {
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
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
            message: '',
            id: id
        };
        var dialogRef = this.matDialog.open(_shared_confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmPromptComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return _this.deleteAnswer(data); });
    };
    AnswersComponent.prototype.openEditDialog = function (answerText, answerId) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = answerText;
        var dialogRef = this.matDialog.open(_edit_answer_edit_answer_component__WEBPACK_IMPORTED_MODULE_5__["EditAnswerComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return _this.updateAnswer(data, answerId); });
    };
    AnswersComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        var dialogRef = this.matDialog.open(_new_answer_new_answer_component__WEBPACK_IMPORTED_MODULE_4__["NewAnswerComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (answerText) { return _this.addAnswer(answerText); });
    };
    AnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.component.html */ "./src/app/answer/answers/answers.component.html"),
            styles: [__webpack_require__(/*! ./answers.component.css */ "./src/app/answer/answers/answers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_answer_service__WEBPACK_IMPORTED_MODULE_6__["AnswerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/answer/edit-answer/edit-answer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/answer/edit-answer/edit-answer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Edit Answer</h2>\n\n  <div>\n\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"newAnswerText\"></textarea>\n    </div>\n    <div>\n      <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n      <button class=\"btn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/answer/edit-answer/edit-answer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/answer/edit-answer/edit-answer.component.ts ***!
  \*************************************************************/
/*! exports provided: EditAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAnswerComponent", function() { return EditAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditAnswerComponent = /** @class */ (function () {
    function EditAnswerComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newAnswerText = data;
    }
    EditAnswerComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    EditAnswerComponent.prototype.save = function () {
        this.dialogRef.close(this.newAnswerText);
    };
    EditAnswerComponent.prototype.ngOnInit = function () {
    };
    EditAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-answer',
            template: __webpack_require__(/*! ./edit-answer.component.html */ "./src/app/answer/edit-answer/edit-answer.component.html"),
            styles: [__webpack_require__(/*! ../new-answer/new-answer.component.css */ "./src/app/answer/new-answer/new-answer.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditAnswerComponent);
    return EditAnswerComponent;
}());



/***/ }),

/***/ "./src/app/answer/new-answer/new-answer.component.css":
/*!************************************************************!*\
  !*** ./src/app/answer/new-answer/new-answer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea:focus {\r\n  outline: none;\r\n  border: 2px solid green;\r\n}\r\n.container {\r\n  width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/answer/new-answer/new-answer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/answer/new-answer/new-answer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>New Answer</h2>\n\n  <div>\n\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"newAnswerText\"></textarea>\n    </div>\n    <div>\n      <button class=\"btn btn-primary\" (click)=\"save()\">Add</button>\n      <button class=\"btn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/answer/new-answer/new-answer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/answer/new-answer/new-answer.component.ts ***!
  \***********************************************************/
/*! exports provided: NewAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAnswerComponent", function() { return NewAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewAnswerComponent = /** @class */ (function () {
    function NewAnswerComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.newAnswerText = '';
    }
    NewAnswerComponent.prototype.save = function () {
        this.dialogRef.close(this.newAnswerText.trim());
    };
    NewAnswerComponent.prototype.cancel = function () {
        this.dialogRef.close('');
    };
    NewAnswerComponent.prototype.ngOnInit = function () {
    };
    NewAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-answer',
            template: __webpack_require__(/*! ./new-answer.component.html */ "./src/app/answer/new-answer/new-answer.component.html"),
            styles: [__webpack_require__(/*! ./new-answer.component.css */ "./src/app/answer/new-answer/new-answer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NewAnswerComponent);
    return NewAnswerComponent;
}());



/***/ }),

/***/ "./src/app/answer/services/answer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/answer/services/answer.service.ts ***!
  \***************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    AnswerService.prototype.getAnswers = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers";
        return this.http.get(URI).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['data']; }));
    };
    AnswerService.prototype.getQuestionText = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/description";
        return this.http.get(URI).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['data']; }));
    };
    AnswerService.prototype.addAnswer = function (categoryTitle, questionId, answer) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, answer, { headers: headers });
    };
    AnswerService.prototype.editAnswer = function (categoryTitle, questionId, answerId, answertext) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId + "/text";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var retObj = {
            text: answertext
        };
        return this.http.put(URI, retObj, { headers: headers });
    };
    AnswerService.prototype.incLikes = function (categoryTitle, questionId, answerId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId + "/likes";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, { headers: headers });
    };
    AnswerService.prototype.incDislikes = function (categoryTitle, questionId, answerId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId + "/dislikes";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, { headers: headers });
    };
    AnswerService.prototype.deleteAnswer = function (categoryTitle, questionId, answerId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers });
    };
    AnswerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/categories', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\r\n  background-color: #4a7687;\r\n  height: 100px;\r\n  width: 100%;\r\n  font-size: 30px;\r\n  line-height: 100px;\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 0px;\r\n  box-shadow: 0 0 5px 5px rgba(0,0,0,.33);\r\n  position: fixed;\r\n  z-index: 10;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"heading\">Question Answering</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CRUD-QuesAns';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.module */ "./src/app/category/category.module.ts");
/* harmony import */ var _answer_answer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer/answer.module */ "./src/app/answer/answer.module.ts");
/* harmony import */ var _question_question_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.module */ "./src/app/question/question.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _category_category_module__WEBPACK_IMPORTED_MODULE_4__["CategoryModule"],
                _answer_answer_module__WEBPACK_IMPORTED_MODULE_5__["AnswerModule"],
                _question_question_module__WEBPACK_IMPORTED_MODULE_6__["QuestionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/categories/categories.component.css":
/*!**************************************************************!*\
  !*** ./src/app/category/categories/categories.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 127px;\r\n  height: 127px;\r\n  margin-left: 18px;\r\n  border-radius: 50%;\r\n}\r\nh3 {\r\n  color: dodgerblue;\r\n  margin-top: 0px;\r\n\r\n}\r\n.tags {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n.tags li {\r\n  display: inline-block;\r\n  background-color: rgb(210, 210, 210);\r\n  padding: 5px 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 15px;\r\n}\r\n.well {\r\n  cursor: pointer;\r\n}\r\n.well:hover {\r\n  -webkit-transform: scale(1.02, 1.02);\r\n          transform: scale(1.02, 1.02);\r\n  background-color: #dfdfdf;\r\n}\r\n.well:focus {\r\n  outline: none;\r\n}\r\n.container {\r\n  padding-top: 130px;\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/categories/categories.component.html":
/*!***************************************************************!*\
  !*** ./src/app/category/categories/categories.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <p>Categories</p>\n\n  <div *ngFor=\"let category of categories\">\n\n    <div routerLink=\"{{category.title | lowercase}}\" class=\"well\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-2\">\n          <img [src]=\"category.iconUrl\" [alt]=\"category.title\"\n               onerror=\"src='../../assets/default.png';\">\n        </div>\n\n        <div class=\"col-sm-10\">\n          <h3>{{category.title | capitalize}}</h3>\n          <p>{{category.description}}</p>\n          <ul class=\"tags\">\n            <li *ngFor=\"let tag of category.tags\">{{tag}}</li>\n          </ul>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <button class=\"btn btn-primary btn-block btn-lg\"\n            (click)=\"openDialog()\">ADD New Category</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/category/categories/categories.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/category/categories/categories.component.ts ***!
  \*************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-category/new-category.component */ "./src/app/category/new-category/new-category.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ "./src/app/category/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, matDialog) {
        this.categoryService = categoryService;
        this.matDialog = matDialog;
        this.categories = [];
        this.categoriesTitle = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getCategoriesTitle();
    };
    CategoriesComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = this.categoriesTitle;
        var dialogRef = this.matDialog.open(_new_category_new_category_component__WEBPACK_IMPORTED_MODULE_2__["NewCategoryComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.categoryService.updateCategory(data).subscribe(function (response) {
                    console.log("Response: " + JSON.stringify(response));
                    _this.categories = _this.categories.concat(data);
                }, function (err) { return console.log(err); });
            }
        });
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    CategoriesComponent.prototype.getCategoriesTitle = function () {
        var _this = this;
        this.categoryService.getCategoryTitles().subscribe(function (res) {
            console.log('Titles: ' + JSON.stringify(res));
            _this.categoriesTitle = res;
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/category/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/category/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category/category-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/category/categories/categories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/category/categories/categories.component.ts");
/* harmony import */ var _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-category/new-category.component */ "./src/app/category/new-category/new-category.component.ts");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/category/category-routing.module.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_validator_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validators/validator.module */ "./src/app/validators/validator.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoryRoutingModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _validators_validator_module__WEBPACK_IMPORTED_MODULE_9__["ValidatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            declarations: [
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"],
                _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_3__["NewCategoryComponent"]
            ],
            entryComponents: [
                _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_3__["NewCategoryComponent"]
            ]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/category/new-category/new-category.component.css":
/*!******************************************************************!*\
  !*** ./src/app/category/new-category/new-category.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 500px;\r\n}\r\n\r\n.tags {\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.tags li {\r\n  display: inline-block;\r\n  background-color: rgb(210, 210, 210);\r\n  padding: 5px 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid green; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.remove-tag {\r\n  color: #992222;\r\n  margin-left: 5px;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/new-category/new-category.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/category/new-category/new-category.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>New Category</h1>\n  <form (keydown.enter)=\"$event.preventDefault()\"\n        (ngSubmit)=\"onSubmit()\" #categoryForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Category Name</label>\n      <input type=\"text\" id=\"name\" class=\"form-control\"\n             #name=\"ngModel\"\n             [ngModel]=\"category.title | lowercase | capitalize\"\n             (ngModelChange)=\"category.title=$event\"\n             name=\"name\" autocomplete=\"off\" required\n              appForbiddenNames=\"{{forbiddenNames}}\"\n              appSpaceValidator>\n      <div *ngIf=\"name.invalid && name.dirty\"\n           class=\"alert alert-danger\">\n\n        <div *ngIf=\"name?.errors.required\">\n          Name is Required!\n        </div>\n\n        <div *ngIf=\"name?.errors.forbiddenName\">\n          Category Exists!\n        </div>\n\n        <div *ngIf=\"name?.errors.forbiddenSpace\">\n          Category name should not contain spaces!\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"iconUrl\">Icon Url</label>\n      <input type=\"text\" id=\"iconUrl\" class=\"form-control\"\n             [(ngModel)]=\"category.iconUrl\" name=\"iconUrl\"\n             autocomplete=\"off\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Category Description</label>\n      <textarea type=\"text\" id=\"description\" class=\"form-control\"\n                [(ngModel)]=\"category.description\" name=\"description\"\n                autocomplete=\"off\" required #description=\"ngModel\"></textarea>\n      <div class=\"alert alert-danger\"\n           [hidden]=\"description.valid || description.pristine\">\n        Description is Required!\n      </div>\n    </div>\n\n      <div class=\"form-group\">\n        <label for=\"tags\">Add Tags</label>\n        <div class=\"input-group\">\n          <input type=\"text\" id=\"tags\" class=\"form-control\"\n                 [(ngModel)]=\"newTag\" name=\"tags\" autocomplete=\"off\"\n                  minlength=\"4\" #tagElement=\"ngModel\"\n                  (keyup.enter)=\"addTag()\">\n\n          <span class=\"input-group-btn\">\n            <button id=\"addATag\" type=\"button\" (click)=\"addTag()\"\n                    [disabled]=\"newTag == null || newTag.trim().length < 4\" class=\"btn default-btn\">+</button>\n          </span>\n        </div>\n\n        <div>\n          * Tag must be at least 4 character long.\n        </div>\n\n      </div>\n\n    <ul class=\"tags\">\n      <li *ngFor=\"let tag of category.tags\">{{tag}}\n          <span (click)=\"removeTag(tag)\" class=\"remove-tag\">&#x274C;</span></li>\n    </ul>\n\n    <button type=\"submit\" [disabled]=\"!categoryForm.form.valid\"\n            class=\"btn btn-primary\">Add</button>\n    <button type=\"button\" (click)=\"onCancel();categoryForm.reset()\"\n            class=\"btn btn-primary\">Cancel</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/category/new-category/new-category.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/new-category/new-category.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoryComponent", function() { return NewCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NewCategoryComponent = /** @class */ (function () {
    function NewCategoryComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newTag = '';
        this.category = {
            title: '',
            iconUrl: '',
            description: '',
            tags: []
        };
        this.forbiddenNames = data;
        console.log(this.forbiddenNames);
    }
    NewCategoryComponent.prototype.addTag = function () {
        this.newTag = this.newTag.trim();
        if (this.newTag === null || this.newTag.length < 4) {
            return;
        }
        this.category.tags.push(this.newTag);
        this.newTag = '';
    };
    NewCategoryComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    NewCategoryComponent.prototype.onSubmit = function () {
        this.category.title = this.category.title.toLowerCase();
        console.log(JSON.stringify(this.category));
        this.dialogRef.close(this.category);
    };
    NewCategoryComponent.prototype.removeTag = function (tag) {
        this.category.tags.splice(this.category.tags.indexOf(tag), 1);
    };
    NewCategoryComponent.prototype.ngOnInit = function () { };
    NewCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-category',
            template: __webpack_require__(/*! ./new-category.component.html */ "./src/app/category/new-category/new-category.component.html"),
            styles: [__webpack_require__(/*! ./new-category.component.css */ "./src/app/category/new-category/new-category.component.css")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewCategoryComponent);
    return NewCategoryComponent;
}());



/***/ }),

/***/ "./src/app/category/services/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/category/services/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    CategoryService.prototype.getCategoryTitles = function () {
        var URI = this.serverApi + "/cruddata/categories/titles";
        return this.http.get(URI).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['data'].map(function (val) { return val['title']; }); }));
    };
    CategoryService.prototype.getCategories = function () {
        var URI = this.serverApi + "/cruddata/categories";
        return this.http.get(URI).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['data']; }));
    };
    CategoryService.prototype.updateCategory = function (category) {
        var URI = this.serverApi + "/cruddata";
        if (category !== undefined && category !== null) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers.append('Content-Type', 'application/json');
            return this.http.post(URI, category, { headers: headers });
        }
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/pipes/capitalize.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/capitalize.pipe.ts ***!
  \******************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (value === null) {
            return 'Not assigned';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/pipes/capitalize.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__["CapitalizePipe"]
            ],
            exports: [
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__["CapitalizePipe"]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/question/new-question/new-question.component.css":
/*!******************************************************************!*\
  !*** ./src/app/question/new-question/new-question.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea:focus {\r\n  outline: none;\r\n  border: 2px solid green;\r\n}\r\n.container {\r\n  width: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/question/new-question/new-question.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/question/new-question/new-question.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>New Question</h2>\n\n  <div>\n\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"newQuestionText\"></textarea>\n    </div>\n    <div>\n      <button class=\"btn btn-primary\" (click)=\"save()\">Add</button>\n      <button class=\"btn\" (click)=\"cancel()\">Cancel</button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/question/new-question/new-question.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/question/new-question/new-question.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuestionComponent", function() { return NewQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NewQuestionComponent = /** @class */ (function () {
    function NewQuestionComponent(matDialogRef, data) {
        this.matDialogRef = matDialogRef;
        this.data = data;
    }
    NewQuestionComponent.prototype.cancel = function () {
        this.matDialogRef.close();
    };
    NewQuestionComponent.prototype.save = function () {
        this.matDialogRef.close(this.newQuestionText);
    };
    NewQuestionComponent.prototype.ngOnInit = function () {
    };
    NewQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-question',
            template: __webpack_require__(/*! ./new-question.component.html */ "./src/app/question/new-question/new-question.component.html"),
            styles: [__webpack_require__(/*! ./new-question.component.css */ "./src/app/question/new-question/new-question.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/question-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/question/question-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: QuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRoutingModule", function() { return QuestionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/question/questions/questions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'categories/:category', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsComponent"] }
];
var QuestionRoutingModule = /** @class */ (function () {
    function QuestionRoutingModule() {
    }
    QuestionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], QuestionRoutingModule);
    return QuestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/question/question.module.ts":
/*!*********************************************!*\
  !*** ./src/app/question/question.module.ts ***!
  \*********************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/question/questions/questions.component.ts");
/* harmony import */ var _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-question/new-question.component */ "./src/app/question/new-question/new-question.component.ts");
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//question-routing.module */ "./src/app/question/question-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _question_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            declarations: [
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsComponent"],
                _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_3__["NewQuestionComponent"]
            ],
            entryComponents: [
                _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_3__["NewQuestionComponent"]
            ]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/question/questions/questions.component.css":
/*!************************************************************!*\
  !*** ./src/app/question/questions/questions.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-bar img {\r\n  width: 1em;\r\n  height: 1em;\r\n  cursor: pointer;\r\n}\r\n\r\n.status-bar {\r\n  height: 20px;\r\n  line-height: 20px;\r\n}\r\n\r\n.status-bar img:hover {\r\n  -webkit-transform: scale(1.2, 1.2);\r\n          transform: scale(1.2, 1.2);\r\n}\r\n\r\n.description {\r\n  color: dodgerblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.question-section {\r\n  margin-top: 20px;\r\n}\r\n\r\n.message {\r\n  margin-top: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\n.container {\r\n  padding-top: 130px;\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/question/questions/questions.component.html":
/*!*************************************************************!*\
  !*** ./src/app/question/questions/questions.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p><a class=\"prev-link\" routerLink=\"/categories\">Categories</a> >>\n    {{categoryTitle | capitalize}}</p>\n\n  <h3>Learn About: {{categoryTitle | capitalize}}</h3>\n  <button class=\"btn btn-primary\"\n    (click)=\"openDialog()\">New Question</button>\n  <div class=\"message\" *ngIf=\"!questions\">\n    Category doesn't contain any question!\n  </div>\n  <div class=\"question-section\">\n    <div *ngFor=\"let question of questions; let i=index\">\n      <div class=\"well\">\n        <a routerLink=\"questions/{{question._id}}\">\n          <p class=\"description\">{{question.description}}</p>\n        </a>\n        <p class=\"status-bar\">\n          <img (click)=\"incLikes(question._id)\" src=\"../../assets/like.png\"\n               title=\"Like\"> {{question.likes}}&nbsp;&nbsp;&nbsp;\n          <img (click)=\"incDislikes(question._id)\" class=\"dislike\"\n               src=\"../../assets/dislike.png\" title=\"Dislike\"> {{question.dislikes}}&nbsp;&nbsp;&nbsp;\n          <img (click)=\"openPromptDialog(question._id)\" src=\"../../assets/delete.png\"\n               title=\"Delete\">&nbsp;&nbsp;&nbsp; {{question.answersCount}} answers</p>\n        <hr>\n      </div>\n    </div>\n  </div>\n\n  <button class=\"btn btn-primary\"\n    (click)=\"goBack()\">Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/question/questions/questions.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/question/questions/questions.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_question_new_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-question/new-question.component */ "./src/app/question/new-question/new-question.component.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/question.service */ "./src/app/question/services/question.service.ts");
/* harmony import */ var _shared_confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/confirm-prompt/confirm-prompt.component */ "./src/app/shared/confirm-prompt/confirm-prompt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(questionService, route, location, matDialog) {
        this.questionService = questionService;
        this.route = route;
        this.location = location;
        this.matDialog = matDialog;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.getCategoryTitle();
        this.getQuestions();
    };
    QuestionsComponent.prototype.getCategoryTitle = function () {
        this.categoryTitle = this.route.snapshot.paramMap.get('category');
    };
    QuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getQuestions(this.categoryTitle).subscribe(function (res) {
            _this.questions = res;
            console.log(_this.questions);
        });
    };
    QuestionsComponent.prototype.incLikes = function (questionId) {
        var _this = this;
        this.questionService.incLikes(this.categoryTitle, questionId).subscribe(function (response) {
            if (response['success'] === true) {
                _this.questions[_this.questions.findIndex(function (obj) { return obj._id == questionId; })].likes += 1;
            }
            else {
                console.log('Failed to delete question');
            }
        });
    };
    QuestionsComponent.prototype.incDislikes = function (questionId) {
        var _this = this;
        this.questionService.incDislikes(this.categoryTitle, questionId).subscribe(function (response) {
            if (response['success'] === true) {
                _this.questions[_this.questions.findIndex(function (obj) { return obj._id == questionId; })].dislikes += 1;
            }
            else {
                console.log('Failed to delete question');
            }
        });
    };
    QuestionsComponent.prototype.deleteQuestion = function (data) {
        var _this = this;
        if (data.message === 'Yes') {
            this.questionService.deleteQuestion(this.categoryTitle, data.id).subscribe(function (response) {
                if (response['success'] === true) {
                    _this.questions = _this.questions.filter(function (obj) { return obj._id != data.id; });
                }
                else {
                    console.log('Failed to delete question');
                }
            });
        }
    };
    QuestionsComponent.prototype.openPromptDialog = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
            message: '',
            id: id
        };
        var dialogRef = this.matDialog.open(_shared_confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmPromptComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) { return _this.deleteQuestion(data); });
    };
    QuestionsComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuestionsComponent.prototype.updateQuestion = function () {
        var _this = this;
        if (this.newQuestionText === undefined ||
            this.newQuestionText.trim() === '') {
            return;
        }
        var question = {
            _id: '',
            description: this.newQuestionText,
            likes: 0,
            dislikes: 0,
            answersCount: 0
        };
        this.questionService.addQuestion(this.categoryTitle, question).subscribe(function (response) {
            if (response['success'] === true) {
                _this.getQuestions();
            }
            else {
                console.log('Failed to add question');
            }
        });
    };
    QuestionsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        var dialogRef = this.matDialog.open(_new_question_new_question_component__WEBPACK_IMPORTED_MODULE_4__["NewQuestionComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (questionText) { return _this.newQuestionText = questionText; }, function (error) { return console.log(error); }, this.updateQuestion.bind(this));
    };
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/question/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/question/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/question/services/question.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/question/services/question.service.ts ***!
  \*******************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    QuestionService.prototype.getQuestions = function (categoryTitle) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions";
        return this.http.get(URI).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['data']['questions']; }));
    };
    QuestionService.prototype.incLikes = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/likes";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, { headers: headers });
    };
    QuestionService.prototype.incDislikes = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/dislikes";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, { headers: headers });
    };
    QuestionService.prototype.deleteQuestion = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers });
    };
    QuestionService.prototype.addQuestion = function (categoryTitle, question) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, question, { headers: headers });
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/shared/confirm-prompt/confirm-prompt.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/confirm-prompt/confirm-prompt.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 300px;\r\n  height: 150px;\r\n}\r\n\r\nh4 {\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.action {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n  width: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/confirm-prompt/confirm-prompt.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-prompt/confirm-prompt.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>Are you sure want to perform the delete action?</h4>\n  <div class=\"action\">\n    <button class=\"btn btn-primary\" (click)=\"delete()\">Yes</button>\n    <button class=\"btn\" (click)=\"cancel()\">No</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/confirm-prompt/confirm-prompt.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-prompt/confirm-prompt.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmPromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPromptComponent", function() { return ConfirmPromptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmPromptComponent = /** @class */ (function () {
    function ConfirmPromptComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.id = data.id;
    }
    ConfirmPromptComponent.prototype.delete = function () {
        this.dialogRef.close({ message: 'Yes', id: this.id });
    };
    ConfirmPromptComponent.prototype.cancel = function () {
        this.dialogRef.close({ message: 'No', id: this.id });
    };
    ConfirmPromptComponent.prototype.ngOnInit = function () {
    };
    ConfirmPromptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-prompt',
            template: __webpack_require__(/*! ./confirm-prompt.component.html */ "./src/app/shared/confirm-prompt/confirm-prompt.component.html"),
            styles: [__webpack_require__(/*! ./confirm-prompt.component.css */ "./src/app/shared/confirm-prompt/confirm-prompt.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmPromptComponent);
    return ConfirmPromptComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-prompt/confirm-prompt.component */ "./src/app/shared/confirm-prompt/confirm-prompt.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            declarations: [
                _confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmPromptComponent"]
            ],
            exports: [
                _confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmPromptComponent"]
            ],
            entryComponents: [
                _confirm_prompt_confirm_prompt_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmPromptComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/validators/forbidden-names.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/validators/forbidden-names.directive.ts ***!
  \*********************************************************/
/*! exports provided: forbiddenValidatorFunction, ForbiddenNamesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenValidatorFunction", function() { return forbiddenValidatorFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenNamesDirective", function() { return ForbiddenNamesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function forbiddenValidatorFunction(names) {
    return function (control) {
        var value = '';
        if (control.value) {
            value = control.value.toLowerCase();
        }
        var forbidden = names.toLowerCase().trim()
            .split(',').includes(value);
        return forbidden ? { 'forbiddenName': true } : null;
    };
}
var ForbiddenNamesDirective = /** @class */ (function () {
    function ForbiddenNamesDirective() {
    }
    ForbiddenNamesDirective_1 = ForbiddenNamesDirective;
    ForbiddenNamesDirective.prototype.validate = function (control) {
        return forbiddenValidatorFunction(this.appForbiddenNames)(control);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appForbiddenNames'),
        __metadata("design:type", String)
    ], ForbiddenNamesDirective.prototype, "appForbiddenNames", void 0);
    ForbiddenNamesDirective = ForbiddenNamesDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appForbiddenNames]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ForbiddenNamesDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenNamesDirective);
    return ForbiddenNamesDirective;
    var ForbiddenNamesDirective_1;
}());



/***/ }),

/***/ "./src/app/validators/space-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/validators/space-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: spaceValidatorFunction, SpaceValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceValidatorFunction", function() { return spaceValidatorFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceValidatorDirective", function() { return SpaceValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function spaceValidatorFunction(control) {
    var forbidden = control.value.indexOf(' ') >= 0;
    return forbidden ? { 'forbiddenSpace': true } : null;
}
var SpaceValidatorDirective = /** @class */ (function () {
    function SpaceValidatorDirective() {
    }
    SpaceValidatorDirective_1 = SpaceValidatorDirective;
    SpaceValidatorDirective.prototype.validate = function (control) {
        return control.value ? spaceValidatorFunction(control) : null;
    };
    SpaceValidatorDirective = SpaceValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSpaceValidator]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: SpaceValidatorDirective_1,
                    multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], SpaceValidatorDirective);
    return SpaceValidatorDirective;
    var SpaceValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/validators/validator.module.ts":
/*!************************************************!*\
  !*** ./src/app/validators/validator.module.ts ***!
  \************************************************/
/*! exports provided: ValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorModule", function() { return ValidatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forbidden_names_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forbidden-names.directive */ "./src/app/validators/forbidden-names.directive.ts");
/* harmony import */ var _space_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-validator.directive */ "./src/app/validators/space-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ValidatorModule = /** @class */ (function () {
    function ValidatorModule() {
    }
    ValidatorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _forbidden_names_directive__WEBPACK_IMPORTED_MODULE_2__["ForbiddenNamesDirective"],
                _space_validator_directive__WEBPACK_IMPORTED_MODULE_3__["SpaceValidatorDirective"]
            ],
            exports: [
                _forbidden_names_directive__WEBPACK_IMPORTED_MODULE_2__["ForbiddenNamesDirective"],
                _space_validator_directive__WEBPACK_IMPORTED_MODULE_3__["SpaceValidatorDirective"]
            ]
        })
    ], ValidatorModule);
    return ValidatorModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\CRUDApp\CRUD-QuesAns\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map