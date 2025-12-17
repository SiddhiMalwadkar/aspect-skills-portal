import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}