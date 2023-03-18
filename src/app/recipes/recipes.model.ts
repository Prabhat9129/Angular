import { Ingredient } from '../shared/indredient.model';

export class Recipes {
  public name: string;
  public descrption: string;
  public ImagePath: string;
  public Ingredients: Ingredient[];

  constructor(
    name: string,
    des: string,
    imgPath: string,
    indredient: Ingredient[]
  ) {
    this.name = name;
    this.descrption = des;
    this.ImagePath = imgPath;
    this.Ingredients = indredient;
  }
}
