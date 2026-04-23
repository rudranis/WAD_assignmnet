import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <section class="card">
      <h2>Login User</h2>
      <form (ngSubmit)="login()">
        <label>Email</label>
        <input name="email" type="email" [(ngModel)]="email" required>

        <label>Password</label>
        <input name="password" type="password" [(ngModel)]="password" required>

        <button type="submit">Login</button>
      </form>

      <p class="error">{{ message }}</p>
      <a routerLink="/register">Create a new account</a>
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
    label {
      display: block;
      margin-top: 14px;
      font-weight: 700;
    }
    input {
      width: 100%;
      margin-top: 6px;
      padding: 10px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
    }
    button {
      width: 100%;
      margin-top: 18px;
      padding: 11px;
      border: 0;
      border-radius: 8px;
      background: #2563eb;
      color: #fff;
      font-weight: 700;
    }
    .error {
      color: #d92d20;
      font-weight: 700;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    if (this.userService.login(this.email, this.password)) {
      this.router.navigateByUrl('/profile');
      return;
    }

    this.message = 'Invalid email or password.';
  }
}
