import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { ProfileComponent } from './app/profile/profile.component';
import { RegisterComponent } from './app/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((error) => console.error(error));
