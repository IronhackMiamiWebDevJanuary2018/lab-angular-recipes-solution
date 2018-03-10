import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IngredientsService {

  BASE_URL = "http://localhost:3000/api";
  constructor(private http: Http) { }

  getIngredients(){
    return this.http.get(`${this.BASE_URL}/ingredients`)
      .map(res => res.json())
      .catch(err => Observable.of(err))
  }
}
