import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Restore clean path from redirect
const params = new URLSearchParams(window.location.search);
const redirectPath = params.get('redirect');
if (redirectPath) {
  window.history.replaceState({}, '', redirectPath);
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
