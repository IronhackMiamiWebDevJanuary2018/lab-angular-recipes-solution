var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DishesService } from '../dishes.service';
var DishListComponent = (function () {
    function DishListComponent(dishesService) {
        this.dishesService = dishesService;
    }
    DishListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishesService.getDishes()
            .subscribe(function (dishes) {
            _this.dishes = dishes;
        }, function (err) {
            console.log(err);
        });
    };
    return DishListComponent;
}());
DishListComponent = __decorate([
    Component({
        selector: 'app-dish-list',
        templateUrl: './dish-list.component.html',
        styleUrls: ['./dish-list.component.css'],
        providers: [DishesService]
    }),
    __metadata("design:paramtypes", [DishesService])
], DishListComponent);
export { DishListComponent };
//# sourceMappingURL=../../../../src/app/dish-list/dish-list.component.js.map