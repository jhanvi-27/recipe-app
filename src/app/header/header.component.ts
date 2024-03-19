import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private dataStorage: DataStorageService,
              private authService: AuthService) {}

  isAuthenticated = false
  private userSub :Subscription

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false
    })
  }

  onSaveData(){
    this.dataStorage.onStore()
  }

  onFetchData(){
    this.dataStorage.onFetch().subscribe()
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe()
  }
}
