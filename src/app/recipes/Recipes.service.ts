import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/indredient.model';
import { Shopingservice } from '../shoping-list/ShoppingList.Service';
import { Recipes } from './recipes.model';

@Injectable()
export class Recipeservices {
  onChangeRecipe = new Subject<Recipes[]>();
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
    // console.log(`getrecipes:${this.recipes[index]}`);

    return this.recipes[index];
  }

  setRecipe(recipe: Recipes[]) {
    this.recipes = recipe;
    this.onChangeRecipe.next(this.recipes.slice());
  }

  addIndredient(ingredient: Ingredient[]) {
    this.rlservice.addNewIngredient(ingredient);
  }

  addRecipes(recipe: Recipes) {
    this.recipes.push(recipe);
    this.onChangeRecipe.next(this.recipes.slice());
  }
  updateRecipes(index: number, newitem: Recipes) {
    // console.log({ 'new item': newitem });

    this.recipes[index] = newitem;
    // console.log({ SERVICE: this.recipes.slice() });

    this.onChangeRecipe.next(this.recipes.slice());
  }
  deleteReipe(index: number) {
    this.recipes.splice(index, 1);
    this.onChangeRecipe.next(this.recipes.slice());
  }
}
