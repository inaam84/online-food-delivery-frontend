import { Component, effect, inject, Injector, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
    authService = inject(AuthService);
    isLoggedIn = this.authService.isLoggedIn();
    injector = inject(Injector);

    ngOnInit(): void {
        effect(() => {
            this.isLoggedIn = this.authService.isLoggedIn();
        }, {injector: this.injector});
    }
}
