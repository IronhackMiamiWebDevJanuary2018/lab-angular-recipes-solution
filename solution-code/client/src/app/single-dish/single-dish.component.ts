import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../dishes.service';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css'],
  providers: [DishesService, IngredientsService]
})
export class SingleDishComponent implements OnInit {
  dish: any;
  ingredients: any;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.dishesService.getSingle(params['id'])
          .subscribe(
            dish => {
              this.dish = dish
            }
          )
      });
      this.getIngredients();
  }

  getIngredients(){
    this.ingredientsService.getIngredients()
      .subscribe(
        ingredients => {
          this.ingredients = ingredients
        }
      )
  }

  addIngredient(id, quantity){
    console.log(quantity)
    this.dishesService.addIngredient(this.dish._id, id, quantity.value)
      .subscribe(
        ingredients => {
          quantity.value = "";
          this.dish.ingredients = ingredients
        }
      )
  }
}
