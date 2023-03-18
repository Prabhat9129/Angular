import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/indredient.model';

export class Shopingservice {
  newIngredient = new EventEmitter<Ingredient[]>();
  private Ingredients: Ingredient[] = [
    new Ingredient('app', 45),
    new Ingredient('banaa', 56),
  ];
  getIngredients() {
    return this.Ingredients.slice();
  }

  newItemAdded(Ingredient: Ingredient) {
    this.Ingredients.push(Ingredient);
    this.newIngredient.emit(this.Ingredients.slice());
  }

  addNewIngredient(ingredient: Ingredient[]) {
    this.Ingredients.push(...ingredient);
    this.newIngredient.emit(this.Ingredients.slice());
  }
}
