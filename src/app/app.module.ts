import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { DropDownDirective } from './shared/dropDown.directive';
import { Shopingservice } from './shoping-list/ShoppingList.Service';
import { AppRoutingModule } from './app-routing.model';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Recipeservices } from './recipes/Recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStoreService } from './shared/storage.data.service';
import { recipeResolve } from './recipes/recipe-resolve.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/spinnerComponent/spinner.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Shopingservice, Recipeservices, DataStoreService, recipeResolve],
  bootstrap: [AppComponent],
})
export class AppModule {}
