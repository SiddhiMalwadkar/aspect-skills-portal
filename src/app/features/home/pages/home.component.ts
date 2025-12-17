import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,      // ✅ marks this component as standalone
  imports: [CommonModule], // necessary for *ngIf, *ngFor, etc.
  template: `
    
  `,
  styleUrls: ['./home.component.scss'] // create this file if you want styles
})
export class HomeComponent {}
