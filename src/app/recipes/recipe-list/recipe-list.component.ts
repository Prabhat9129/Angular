import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipes[] = [
    new Recipes(
      'a test recipes',
      'this is simple test recipes',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    ),
    new Recipes(
      'a test recipes',
      'this is simple test recipes',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
