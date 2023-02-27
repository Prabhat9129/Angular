export class Recipes {
  public name: string;
  public descrption: string;
  public ImagePath: string;

  constructor(name: string, des: string, imgPath: string) {
    this.name = name;
    this.descrption = des;
    this.ImagePath = imgPath;
  }
}
