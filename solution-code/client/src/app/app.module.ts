import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full' },
  { path: 'dishes',  component: DishListComponent },
  { path: 'dishes/:id', component: SingleDishComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    SingleDishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
