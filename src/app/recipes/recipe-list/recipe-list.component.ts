import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  recipes: Recipe[]

  ngOnInit() {

    this.recipeService.recipeChanged
    .subscribe((res: Recipe[]) => {
      this.recipes = res
    })

    this.recipes = this.recipeService.getRecipe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
