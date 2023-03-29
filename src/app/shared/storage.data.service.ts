import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipeservices } from '../recipes/Recipes.service';

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
}
