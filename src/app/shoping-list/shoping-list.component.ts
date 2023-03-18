import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/indredient.model';
import { Shopingservice } from './ShoppingList.Service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  Ingredients: Ingredient[];
  constructor(private shopserve: Shopingservice) {}
  ngOnInit() {
    this.Ingredients = this.shopserve.getIngredients();
    this.shopserve.newIngredient.subscribe((ingredient: Ingredient[]) => {
      this.Ingredients = ingredient;
    });
  }
}
