import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/indredient.model';
import { Recipeservices } from '../Recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: Recipeservices,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.formInit();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.service.updateRecipes(this.id, this.form.value);
    } else {
      this.service.addRecipes(this.form.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  addIngredient() {
    (<FormArray>this.form.get('ingredent')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
  get controls(): any {
    // a getter!
    return (<FormArray>this.form.get('ingredent')).controls;
  }
  formInit() {
    let name = '';
    let imagpath = '';
    let description = '';
    let recipeingredient: any = new FormArray([]);

    if (this.editMode) {
      const recipe = this.service.getrecipe(this.id);
      name = recipe.name;
      imagpath = recipe.ImagePath;
      description = recipe.descrption;

      if (recipe['Ingredients']) {
        for (let ingredient of recipe.Ingredients) {
          recipeingredient.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagpath: new FormControl(imagpath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredent: recipeingredient,
    });
  }
}
