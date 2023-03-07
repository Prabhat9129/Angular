import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/indredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  Ingredients: Ingredient[] = [
    new Ingredient('app', 45),
    new Ingredient('banaa', 56),
  ];
  constructor() {}
  ngOnInit(): void {}
  newItemAdded(Ingredient: Ingredient) {
    this.Ingredients.push(Ingredient);
  }
}
