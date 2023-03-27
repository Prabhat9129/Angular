import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/indredient.model';

export class Shopingservice {
  newIngredient = new Subject<Ingredient[]>();
  sartedEditing = new Subject<number>();
  private Ingredients: Ingredient[] = [
    new Ingredient('app', 45),
    new Ingredient('banaa', 56),
  ];
  getIngredients() {
    return this.Ingredients.slice();
  }
  getEditedItem(index: number) {
    return this.Ingredients[index];
  }
  newItemAdded(Ingredient: Ingredient) {
    this.Ingredients.push(Ingredient);
    this.newIngredient.next(this.Ingredients.slice());
  }

  addNewIngredient(ingredient: Ingredient[]) {
    this.Ingredients.push(...ingredient);
    this.newIngredient.next(this.Ingredients.slice());
  }

  updateIngredient(index: number, newIndredient: Ingredient) {
    this.Ingredients[index] = newIndredient;
    this.newIngredient.next(this.Ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.Ingredients.splice(index, 1);
    this.newIngredient.next(this.Ingredients.slice());
  }
}
