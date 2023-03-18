import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/indredient.model';
import { Shopingservice } from '../shoping-list/ShoppingList.Service';
import { Recipes } from './recipes.model';

@Injectable()
export class Recipeservices {
  recipSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes(
      'a test recipes1111',
      'this is simple test recipes1',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg',
      [new Ingredient('milk', 1), new Ingredient('lassi', 5)]
    ),
    new Recipes(
      'a test recipes2222',
      'this is simple test recipes2',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      [new Ingredient('water', 8), new Ingredient('vegitable', 6)]
    ),
  ];

  constructor(private rlservice: Shopingservice) {}

  getRecipe() {
    return this.recipes.slice();
  }

  getrecipe(index: number) {
    return this.recipes[index];
  }

  addIndredient(ingredient: Ingredient[]) {
    this.rlservice.addNewIngredient(ingredient);
  }
}
