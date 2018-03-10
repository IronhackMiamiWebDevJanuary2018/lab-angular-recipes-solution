var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
var IngredientsService = (function () {
    function IngredientsService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000/api";
    }
    IngredientsService.prototype.getIngredients = function () {
        return this.http.get(this.BASE_URL + "/ingredients")
            .map(function (res) { return res.json(); })
            .catch(function (err) { return Observable.of(err); });
    };
    return IngredientsService;
}());
IngredientsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], IngredientsService);
export { IngredientsService };
//# sourceMappingURL=../../../src/app/ingredients.service.js.map