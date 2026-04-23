import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, RouterLink],
  template: `
    <section class="card">
      <ng-container *ngIf="user; else loginMessage">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <button type="button" (click)="logout()">Logout</button>
      </ng-container>

      <ng-template #loginMessage>
        <h2>No User Logged In</h2>
        <p>Please login to view the profile component.</p>
        <a routerLink="/login">Go to login</a>
      </ng-template>
    </section>
  `,
  styles: [`
    .card {
      padding: 28px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
    }
    h2 {
      margin-top: 0;
    }
    p {
      font-size: 17px;
    }
    button {
      margin-top: 14px;
      padding: 10px 16px;
      border: 0;
      border-radius: 8px;
      background: #17324d;
      color: #fff;
      font-weight: 700;
    }
  `]
})
export class ProfileComponent {
  user: User | null = this.userService.getActiveUser();

  constructor(private userService: UserService, private router: Router) {}

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
