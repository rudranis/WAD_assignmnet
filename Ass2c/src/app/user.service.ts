import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly usersKey = 'ass2cUsers';
  private readonly activeUserKey = 'ass2cActiveUser';

  register(user: User): string {
    const users = this.getUsers();
    const exists = users.some((item) => item.email === user.email);

    if (exists) {
      return 'Email already registered.';
    }

    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return 'Registration successful. Please login.';
  }

  login(email: string, password: string): boolean {
    const user = this.getUsers().find((item) => item.email === email && item.password === password);

    if (!user) {
      return false;
    }

    localStorage.setItem(this.activeUserKey, JSON.stringify(user));
    return true;
  }

  getActiveUser(): User | null {
    const user = localStorage.getItem(this.activeUserKey);
    return user ? JSON.parse(user) as User : null;
  }

  logout(): void {
    localStorage.removeItem(this.activeUserKey);
  }

  private getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]') as User[];
  }
}
