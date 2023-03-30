import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStoreService } from '../shared/storage.data.service';
import { Recipes } from './recipes.model';
import { Recipeservices } from './Recipes.service';

@Injectable({ providedIn: 'root' })
export class recipeResolve implements Resolve<Recipes[]> {
  constructor(
    private dataStorage: DataStoreService,
    private recipeSevice: Recipeservices
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorage.fetchRecipes();
    const service = this.recipeSevice.getRecipe();
    if (service.length === 0) {
      return this.dataStorage.fetchRecipes();
    } else {
      return service;
    }
  }
}
