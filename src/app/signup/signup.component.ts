import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  hide = true;
  hideConfirm = true;
  accountCreated = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { 'passwordMismatch': true };
  }


  onSubmit(): void {
    if (this.signupForm.valid) {
      const { username, password } = this.signupForm.value;
      this.authService.signup(username, password).subscribe(
        () => {
          alert('User created successfully!');
          this.accountCreated = true;
          // Optionally, redirect to login or another page
          setTimeout(() => {
            this.router.navigate(['/login']); // Redirect to login after a brief delay
          }, 5000); // Delay in milliseconds
        },
        error => {
          console.error('Error creating account', error);
          this.accountCreated = false;
          alert('Error creating account: ' + error.message || 'Unknown error');
      
        }
      );
    }
    
  }


}


