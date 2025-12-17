import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for ngIf, ngFor, etc.

@Component({
  selector: 'app-course-list',
  standalone: true,
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']  // ✅ SCSS file
})

export class CourseListComponent { }
