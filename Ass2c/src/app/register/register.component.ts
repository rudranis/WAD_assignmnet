import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <section class="card">
      <h2>Register User</h2>
      <form (ngSubmit)="register()">
        <label>Name</label>
        <input name="name" [(ngModel)]="user.name" required>

        <label>Email</label>
        <input name="email" type="email" [(ngModel)]="user.email" required>

        <label>Phone</label>
        <input name="phone" [(ngModel)]="user.phone" required>

        <label>Password</label>
        <input name="password" type="password" [(ngModel)]="user.password" required>

        <button type="submit">Register</button>
      </form>

      <p class="message">{{ message }}</p>
      <a routerLink="/login">Already registered? Login</a>
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
    .message {
      color: #116149;
      font-weight: 700;
    }
  `]
})
export class RegisterComponent {
  message = '';
  user: User = { name: '', email: '', phone: '', password: '' };

  constructor(private userService: UserService) {}

  register(): void {
    if (!this.user.name || !this.user.email || !this.user.phone || !this.user.password) {
      this.message = 'Please fill all fields.';
      return;
    }

    this.message = this.userService.register({ ...this.user });
    if (this.message.startsWith('Registration')) {
      this.user = { name: '', email: '', phone: '', password: '' };
    }
  }
}
