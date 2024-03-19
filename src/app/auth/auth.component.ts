import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null
  isLoggedIn = false
  isSignUp = false

  constructor(private authService: AuthService,
              private router: Router) {}

  switchMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm){
    this.isLoading = true
    const email = form.value.email
    const password = form.value.password

    if(this.isLoginMode){
      this.authService.login(email, password).subscribe(res => {
        console.log(res)
        this.error = null
        this.isLoading = false
        this.isLoggedIn = true
        this.isSignUp = false
        this.router.navigate(['./recipes'])
      },error => {
        console.log(error)
        this.isLoading = false
        this.error = "ERROR: "+(error.error.error.message)
      })
    }
    else{
      this.authService.signUp(email, password).subscribe(res => {
        console.log(res)
        this.isLoading = false
        this.isLoggedIn = false
        this.isSignUp = true
      },errorRes => {
        console.log(errorRes)
        this.isLoading = false
        this.error = "Error: "+(errorRes.error.error.message)
      })
    }
    form.reset()
  }

  onHandleError(){
    this.error = null
  }

}
