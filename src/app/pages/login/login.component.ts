import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { LoginPayload } from '../../core/models/common.models';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})

export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string = '';
    router = inject(Router);

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
    ) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const payload: LoginPayload = this.loginForm.value;
            this.authService.login(payload).subscribe({
                next: (response) => {
                    this.errorMessage = '';
                    console.log('Login Successful', response);
                    this.router.navigate(['']);
                },
                error: (error) => {
                    this.errorMessage = 'Login failed, please check your credentials.';
                    console.log('Error during login', error);
                },
            });
        }
    }
}
