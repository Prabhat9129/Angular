import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/indredient.model';
import { Shopingservice } from '../ShoppingList.Service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subsubsription: Subscription;
  editingMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shopserve: Shopingservice) {}

  ngOnInit() {
    this.subsubsription = this.shopserve.sartedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editingMode = true;
        this.editedItem = this.shopserve.getEditedItem(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  addNewItem(form: NgForm) {
    const value = form.value;
    const neIte = new Ingredient(value.name, value.amount);
    if (this.editingMode) {
      this.shopserve.updateIngredient(this.editedItemIndex, neIte);
    } else {
      this.shopserve.newItemAdded(neIte);
    }
    this.editingMode = false;
    form.reset();
  }

  onReset() {
    this.slForm.reset();
    this.editingMode = false;
  }
  onDelete() {
    this.shopserve.deleteIngredient(this.editedItemIndex);
    this.onReset();
  }
  ngOnDestroy() {
    this.subsubsription.unsubscribe();
  }
}
