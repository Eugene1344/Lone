import { createAction, props } from "@ngrx/store";
import { ActionsTypes } from "./actionTypes";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";

export const registerAction = createAction(
  ActionsTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
  ActionsTypes.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionsTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorInterface}>()
)
