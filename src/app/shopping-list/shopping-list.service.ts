import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  startEditing = new Subject<number>()

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
  getIngredients(){
    return this.ingredients
  }

  getIngredient(index: number){
    return this.ingredients[index]
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient)
  }

  updateIngredients(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
  }

  removeIngredients(index: number) {
    this.ingredients.splice(index,1)
  }

  constructor() { }
}




