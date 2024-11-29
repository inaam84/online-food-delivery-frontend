export interface User {
    email: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface ApiResponse<T> {
    status: boolean;
    message?: string;
    error?: string;
    token?: string;
    data: T;
}