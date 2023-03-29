import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/indredient.model';
import { Shopingservice } from './ShoppingList.Service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit, OnDestroy {
  Ingredients: Ingredient[];
  shopServeSub: Subscription;
  constructor(private shopserve: Shopingservice) {}
  ngOnInit() {
    this.Ingredients = this.shopserve.getIngredients();
    this.shopServeSub = this.shopserve.newIngredient.subscribe(
      (ingredient: Ingredient[]) => {
        this.Ingredients = ingredient;
      }
    );
  }
  onEditItem(index: number) {
    this.shopserve.sartedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.shopServeSub.unsubscribe();
  }
}
