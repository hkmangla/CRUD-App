var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NewAnswerComponent = (function () {
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
        core_1.Component({
            selector: 'app-new-answer',
            templateUrl: './new-answer.component.html',
            styleUrls: ['./new-answer.component.css']
        })
    ], NewAnswerComponent);
    return NewAnswerComponent;
})();
exports.NewAnswerComponent = NewAnswerComponent;
//# sourceMappingURL=new-answer.component.js.map