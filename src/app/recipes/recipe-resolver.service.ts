import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}

  resolve() {
    const recipe = this.recipeService.getRecipe()
    if(recipe.length === 0){
      return this.dataStorageService.onFetch() ;
    }
    else{
      return recipe ;
    }
  }
}
