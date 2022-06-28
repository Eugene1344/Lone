import { AuthStateInterface } from "../types/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register.action";
import {loginAction, loginActionFailure, loginActionSuccess} from "./actions/login.action";

export const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

export const authReducer = createReducer(
  initialState,
  on(registerAction,(state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(registerSuccessAction, (state,action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(registerFailureAction, (state,action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(loginAction,(state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(loginActionSuccess, (state,action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginActionFailure, (state,action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
)
