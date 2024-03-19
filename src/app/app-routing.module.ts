import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const appRoutes: Routes=[
  {path:'', redirectTo: '/auth', pathMatch: "full"},
  {path:'auth', component: AuthComponent},
  {path:'recipes', loadChildren: () => import("./recipes/recipe.module").then(module => module.RecipeModule)},
  {path:'shopping-list', loadChildren: () => import("./shopping-list/shopping-list.module")
                                      .then(module => module.ShoppingListModule)},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
