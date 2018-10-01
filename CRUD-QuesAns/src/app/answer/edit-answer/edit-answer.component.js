var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var EditAnswerComponent = (function () {
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
        core_1.Component({
            selector: 'app-edit-answer',
            templateUrl: './edit-answer.component.html',
            styleUrls: ['../new-answer/new-answer.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
    ], EditAnswerComponent);
    return EditAnswerComponent;
})();
exports.EditAnswerComponent = EditAnswerComponent;
//# sourceMappingURL=edit-answer.component.js.map