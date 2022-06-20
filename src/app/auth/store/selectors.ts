import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelectors = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
