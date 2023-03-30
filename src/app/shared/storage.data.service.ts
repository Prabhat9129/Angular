import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipes } from '../recipes/recipes.model';
import { Recipeservices } from '../recipes/Recipes.service';
import { Ingredient } from './indredient.model';

@Injectable({ providedIn: 'root' })
export class DataStoreService {
  constructor(private http: HttpClient, private service: Recipeservices) {}
  storeRecipes() {
    const recipe = this.service.getRecipe();
    this.http
      .put(
        'https://ng-recipe-project-1253e-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json',
        recipe
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipes[]>(
        'https://ng-recipe-project-1253e-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json'
      )
      .pipe(
        map((Recipes) => {
          return Recipes.map((recipe) => {
            return {
              ...recipe,
              ingredient: recipe.Ingredients ? recipe.Ingredients : [],
            };
          });
        }),
        tap((res) => {
          this.service.setRecipe(res);
        })
      );
  }
}
