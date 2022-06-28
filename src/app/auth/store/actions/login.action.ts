import {createAction,props} from "@ngrx/store";
import {ActionsTypes} from "./actionTypes";
import {LoginRequestInterface} from "../../types/loginRequest.interface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";

export const loginAction = createAction(
  ActionsTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
)

export const loginActionSuccess = createAction(
  ActionsTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginActionFailure = createAction(
  ActionsTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorInterface}>()
)
