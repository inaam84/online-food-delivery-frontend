import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterPayload } from '../../core/models/common.models';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    registerForm: FormGroup;
    errorMessage: string = '';
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
    ) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.registerForm.valid) {
            const payload: RegisterPayload = this.registerForm.value;
            this.authService.register(payload).subscribe({
                next: (response) => {
                    this.errorMessage = '';
                    console.log('Registration Successful', response);
                },
                error: (error) => {
                    this.errorMessage = 'Registration failed.';
                    console.log('Error during registration', error);
                },
            });
        }
    }
}
