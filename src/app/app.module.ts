// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent  // ✅ import the standalone bootstrap component
  ],
  providers: [],
  bootstrap: []  // ❌ no bootstrap here
})
export class AppModule {}
