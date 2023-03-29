import { Component } from '@angular/core';
import { DataStoreService } from '../shared/storage.data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  constructor(private recpes: DataStoreService) {}
  onfetch() {
    this.recpes.storeRecipes();
  }
}
