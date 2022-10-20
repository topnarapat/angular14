import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavigationEnd, Router } from "@angular/router";
import { filter, tap } from "rxjs/operators";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1, 1)',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scale(0.95, 0.95)',
        })
      ),
      transition('open => closed', [animate('75ms ease-in')]),
      transition('closed => open', [animate('100ms ease-out')]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  profileMenuOpen: any;
  get openCloseTrigger() {
    return this.profileMenuOpen ? 'open' : 'closed';
  }
  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  toggleMobileMenu: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}
  navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap(() => (this.profileMenuOpen = false))
  );

  ngOnInit(): void {
    initializeApp(firebaseConfig);
    this.navigationEnd$.subscribe();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    return this.authService.logout();
  }
}
