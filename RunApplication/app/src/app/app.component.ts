import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sideBarIsExpanded = false;

  toggleSidebar() {
    this.sideBarIsExpanded = !this.sideBarIsExpanded;
  }
}
