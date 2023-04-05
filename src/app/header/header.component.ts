import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../shared/storage.data.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private recpes: DataStoreService,
    private authServe: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authServe.user.subscribe((userdata) => {
      this.isAuthenticated = !!userdata;
      console.log(!userdata);
      console.log(!!userdata);
    });
  }

  onSave() {
    this.recpes.storeRecipes();
  }
  onfetch() {
    this.recpes.fetchRecipes().subscribe();
  }
}
