import { Component } from '@angular/core';
import { LogoutComponent } from "../../shared/logout/logout.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [LogoutComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

}
