import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="navbar">
      <h1>Angular Auth App</h1>
      <nav>
        <a routerLink="/register">Register</a>
        <a routerLink="/login">Login</a>
        <a routerLink="/profile">Profile</a>
      </nav>
    </header>

    <main class="shell">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 32px;
      background: #17324d;
      color: #fff;
    }
    h1 {
      margin: 0;
      font-size: 22px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    a {
      padding: 8px 12px;
      border-radius: 8px;
      text-decoration: none;
      background: rgba(255, 255, 255, 0.12);
    }
    .shell {
      width: min(760px, calc(100% - 32px));
      margin: 32px auto;
    }
    @media (max-width: 640px) {
      .navbar {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `]
})
export class AppComponent {}
