import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


  export class NavbarComponent {
  showCourses = false;
  openSection: string | null = null;

  toggleCourses(event: Event) {
    event.stopPropagation();
    this.showCourses = !this.showCourses;
    this.openSection = null;
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  closeCourses() {
    this.showCourses = false;
    this.openSection = null;
  }
}



