import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private progress;
  private authForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.authForm = new FormGroup({
      'userEmail': new FormControl('', [Validators.required, this.emailValidator()]),
    });
    this.authForm.valueChanges.delay(300).subscribe((x: any) => {
      console.log(x.userEmail);
    });
  }

  private emailValidator(): ValidatorFn {
    // tslint:disable-next-line:max-line-length
    const pattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,2}))$/;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : { 'authForm': true };
      }
    };
  }

  submit() {
    console.log(this.authForm);
    this.progress = true;
    this.authService.isAuth().subscribe(x => {
      this.authService.isWasAuth = true;
      this.progress = false;
      this.router.navigate(['application']);
    });
  }
}
