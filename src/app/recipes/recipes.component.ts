import { Component, OnInit } from '@angular/core';

import { Recipes } from './recipes.model';
import { Recipeservices } from './Recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [Recipeservices],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipes;
  constructor(private recipes: Recipeservices) {}
  ngOnInit() {
    this.recipes.recipSelected.subscribe((recipe: Recipes) => {
      this.selectedRecipe = recipe;
      console.log(recipe);
    });
  }
}
