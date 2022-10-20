import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '../types/Auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
        // alert('Login Successful');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('Credential does not match our record.');
      })
      .finally(() => (this.isLoading = false));
    // console.log(this.form);
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (form.password !== form.confirmpassword) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
    // console.log(this.form);
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  }

  constructor(private router: Router) {}
}
