import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService{

  constructor(private http: HttpClient,
              private recipeService: RecipeService) { }

  onStore(){
    const recipe = this.recipeService.getRecipe()
    this.http.put('https://ng-course-recipe-book-e13c9-default-rtdb.firebaseio.com/recipes.json',recipe)
    .subscribe(event => {
      console.log(event)
    })
  }

  onFetch(){
    return this.http.get<Recipe[]>('https://ng-course-recipe-book-e13c9-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      })
    }), tap(Response => {
      this.recipeService.setRecipe(Response)
    }))
  }
}
