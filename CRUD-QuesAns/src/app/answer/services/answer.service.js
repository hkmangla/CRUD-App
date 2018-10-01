var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var map_1 = require("rxjs/internal/operators/map");
var AnswerService = (function () {
    function AnswerService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    AnswerService.prototype.getAnswers = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers";
        return this.http.get(URI).pipe(map_1.map(function (res) { return res['data']; }));
    };
    AnswerService.prototype.getQuestionText = function (categoryTitle, questionId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/description";
        return this.http.get(URI).pipe(map_1.map(function (res) { return res['data']; }));
    };
    AnswerService.prototype.addAnswer = function (categoryTitle, questionId, answer) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers";
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, answer, { headers: headers });
    };
    AnswerService.prototype.editAnswer = function (categoryTitle, questionId, answerId, answertext) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId + "/text";
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        var retObj = {
            text: answertext
        };
        return this.http.put(URI, retObj, { headers: headers });
    };
    AnswerService.prototype.incLikes = function (categoryTitle, questionId, answerId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId + "/likes";
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, { headers: headers });
    };
    AnswerService.prototype.incDislikes = function (categoryTitle, questionId, answerId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId + "/dislikes";
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(URI, { headers: headers });
    };
    AnswerService.prototype.deleteAnswer = function (categoryTitle, questionId, answerId) {
        var URI = this.serverApi + "/cruddata/categories/" + categoryTitle + "/questions/" + questionId + "/answers/" + answerId;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers });
    };
    AnswerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AnswerService);
    return AnswerService;
})();
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map