import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/indredient.model';
import { Shopingservice } from '../ShoppingList.Service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor(private shopserve: Shopingservice) {}
  ngOnInit(): void {}
  addNewItem() {
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const neIte = new Ingredient(name, amount);
    this.shopserve.newItemAdded(neIte);
  }
}
