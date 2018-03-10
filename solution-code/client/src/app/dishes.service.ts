import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DishesService {

  BASE_URL = "http://localhost:3000/api";
  constructor(private http: Http) { }

  getDishes(){
    return this.http.get(`${this.BASE_URL}/dishes`)
      .map(res => res.json())
      .catch(err => Observable.of(err))
  }

  getSingle(id){
    return this.http.get(`${this.BASE_URL}/dishes/${id}`)
      .map(res => res.json())
      .catch(err => Observable.of(err))
  }

  addIngredient(dishId, ingId, quantity){
    return this.http.post(`${this.BASE_URL}/dishes/${dishId}/ingredients/${ingId}/add`, { quantity })
      .map(res => res.json())
      .catch(err => Observable.of(err))
  }
}
