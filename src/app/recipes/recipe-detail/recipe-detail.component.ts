import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipes } from '../recipes.model';
import { Recipeservices } from '../Recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipes;
  id: number;
  constructor(
    private resipes: Recipeservices,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.resipes.getrecipe(this.id);
    });
    console.log(this.recipe);
  }

  addIngredientoSL() {
    this.resipes.addIndredient(this.recipe.Ingredients);
  }
  onClicked() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {
    this.resipes.deleteReipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
