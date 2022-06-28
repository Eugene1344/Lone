import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from "../../../auth/store/selectors";
import {CurrentUserInterface} from "../../types/currentUser.interface";
import {Store} from "@ngrx/store";

@Component({
  selector: 'lone-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface> | null;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
    this.isAnonymous$ = this.store.select(isAnonymousSelector);
    this.currentUser$ = this.store.select(currentUserSelector);
  }

}
