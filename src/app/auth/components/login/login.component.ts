import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isSubmittingSelector, validationErrorsSelectors} from "../../store/selectors";
import {AuthService} from "../../services/auth.service";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";
import {LoginRequestInterface} from "../../types/loginRequest.interface";
import {loginAction} from "../../store/actions/login.action";

@Component({
  selector: 'lone-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorInterface | null>

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      email: '',
      password: ''
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.backendErrors$ = this.store.select(validationErrorsSelectors);
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}));
  }
}
