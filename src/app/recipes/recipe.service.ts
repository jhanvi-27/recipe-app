import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = []

  setRecipe(recipe: Recipe[]){
    this.recipes = recipe
    this.recipeChanged.next(this.recipes)
  }

  getRecipe() {
    return this.recipes
  }

  getRecipes(index: number){
    return this.recipes[index]
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}

