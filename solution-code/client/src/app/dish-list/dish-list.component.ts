import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  providers: [DishesService]
})
export class DishListComponent implements OnInit {
  dishes: any;
  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getDishes()
      .subscribe(
        dishes => {
          this.dishes = dishes
        },
        err => {
          console.log(err);
        }
      )
  }

}
