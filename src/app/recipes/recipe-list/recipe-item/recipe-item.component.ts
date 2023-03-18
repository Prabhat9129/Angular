import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../../../recipes/recipes.model';
import { Recipeservices } from '../../Recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipes;
  @Input() index: number;

  ngOnInit(): void {}

  // onSelected() {
  //   this.service.recipSelected.emit(this.recipe);
  // }
}
