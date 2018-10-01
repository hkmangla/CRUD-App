var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var map_1 = require("rxjs/internal/operators/map");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    CategoryService.prototype.getCategoryTitles = function () {
        var URI = this.serverApi + "/cruddata/categories/titles";
        return this.http.get(URI).pipe(map_1.map(function (res) { return res['data'].map(function (val) { return val['title']; }); }));
    };
    CategoryService.prototype.getCategories = function () {
        var URI = this.serverApi + "/cruddata/categories";
        return this.http.get(URI).pipe(map_1.map(function (res) { return res['data']; }));
    };
    CategoryService.prototype.updateCategory = function (category) {
        var URI = this.serverApi + "/cruddata";
        if (category !== undefined && category !== null) {
            var headers = new http_1.HttpHeaders();
            headers.append('Content-Type', 'application/json');
            return this.http.post(URI, category, { headers: headers });
        }
    };
    CategoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
})();
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map