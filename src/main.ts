// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // must export Routes array

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // standalone routing provider
  ]
}).catch(err => console.error(err));