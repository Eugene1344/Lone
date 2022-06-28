import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {catchError, switchMap, map} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {of, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {loginAction, loginActionFailure, loginActionSuccess} from "../actions/login.action";

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({request}) => {
      return this.authService.login(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.persistanceService.set('accessToken', currentUser.token)
          return loginActionSuccess({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(loginActionFailure({errors: errorResponse.error.errors}))
        })
      )
    })
  ))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(loginActionSuccess),
      tap(() => {
        this.router.navigateByUrl('/')
      })
    ), {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router) {
  }
}
