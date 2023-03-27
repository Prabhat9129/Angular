import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from '../recipes.model';
import { Recipeservices } from '../Recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipes[];
  constructor(
    private recipe: Recipeservices,
    private router: Router,
    private route: ActivatedRoute,
    private service: Recipeservices
  ) {}
  ngOnInit() {
    this.service.onChangeRecipe.subscribe((recipe: Recipes[]) => {
      this.recipes = recipe;
    });
    this.recipes = this.recipe.getRecipe();
  }

  onclicked() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
