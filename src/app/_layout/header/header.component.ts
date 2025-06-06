import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      // { label: 'Drzwi zewnętrzne', routerLink: '/outside-doors' },
      // { label: 'Stoły', routerLink: '/tables' },
      // { label: 'Tarcica', routerLink: '/planks' },
      { label: 'Strona główna', routerLink: '/' },
      { label: 'Oferta', routerLink: '/offer' },
      { label: 'Galeria', routerLink: '/gallery' },
      { label: 'Kontakt', routerLink: '/contact' },
    ];
  }
}
