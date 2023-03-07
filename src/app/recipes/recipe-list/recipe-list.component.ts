import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();

  recipes: Recipes[] = [
    new Recipes(
      'a test recipes1111',
      'this is simple test recipes1',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    ),
    new Recipes(
      'a test recipes2222',
      'this is simple test recipes2',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    ),
  ];
  constructor() {
    console.log('constructer is called!');
    console.log(this.recipes);
  }
  ngOnInit() {}

  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }
}
