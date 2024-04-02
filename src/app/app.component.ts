import { Component, HostListener  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bujalla';
  isSticky: boolean = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPosition = window.pageYOffset;
    this.isSticky = scrollPosition >= 0; // Change 50 to the desired scroll position
  }

  items: MenuItem[] = [
    { label: 'Drzwi wejściowe', routerLink: '/outside-doors' },
    { label: 'Drzwi pokojowe', routerLink: '/inside-doors' },
    { label: 'Stoły', routerLink: '/tables' },
    { label: 'Tarcica', routerLink: '/planks' }
  ];
}
