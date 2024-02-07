import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  title = "Angulare Library"

  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Library',
        link: 'library',
        index: 0
      },
      {
        label: 'Menbers',
        link: 'members',
        index: 1
      }
    ];

  }

  ngOnInit() {
  }

}
