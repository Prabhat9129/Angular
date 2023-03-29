import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipes } from '../recipes.model';
import { Recipeservices } from '../Recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipes[];
  isChangeSub: Subscription;
  constructor(
    private recipe: Recipeservices,
    private router: Router,
    private route: ActivatedRoute,
    private service: Recipeservices
  ) {}
  ngOnInit() {
    this.isChangeSub = this.service.onChangeRecipe.subscribe(
      (recipe: Recipes[]) => {
        this.recipes = recipe;
      }
    );
    this.recipes = this.recipe.getRecipe();
  }

  onclicked() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.isChangeSub.unsubscribe();
  }
}
