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
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../dishes.service';
import { IngredientsService } from '../ingredients.service';
var SingleDishComponent = (function () {
    function SingleDishComponent(route, dishesService, ingredientsService) {
        this.route = route;
        this.dishesService = dishesService;
        this.ingredientsService = ingredientsService;
    }
    SingleDishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.dishesService.getSingle(params['id'])
                .subscribe(function (dish) {
                _this.dish = dish;
            });
        });
        this.getIngredients();
    };
    SingleDishComponent.prototype.getIngredients = function () {
        var _this = this;
        this.ingredientsService.getIngredients()
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    SingleDishComponent.prototype.addIngredient = function (id, quantity) {
        var _this = this;
        console.log(quantity);
        this.dishesService.addIngredient(this.dish._id, id, quantity.value)
            .subscribe(function (ingredients) {
            quantity.value = "";
            _this.dish.ingredients = ingredients;
        });
    };
    return SingleDishComponent;
}());
SingleDishComponent = __decorate([
    Component({
        selector: 'app-single-dish',
        templateUrl: './single-dish.component.html',
        styleUrls: ['./single-dish.component.css'],
        providers: [DishesService, IngredientsService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        DishesService,
        IngredientsService])
], SingleDishComponent);
export { SingleDishComponent };
//# sourceMappingURL=../../../../src/app/single-dish/single-dish.component.js.map