import {createAction,props} from "@ngrx/store";
import { ActionsTypes } from "./actionTypes";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

export const getCurrentUserAction = createAction(
  ActionsTypes.GET_CURRENT_USER,
)

export const getCurrentUserSuccessAction = createAction(
  ActionsTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(
  ActionsTypes.GET_CURRENT_USER_FAILURE
  ,
)
