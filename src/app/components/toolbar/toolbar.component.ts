import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Introduction',
        link: '/home',
        index: 0
      }, {
        label: 'Work Experience',
        link: '/work-exp',
        index: 1
      }, {
        label: 'Education',
        link: '/edu',
        index: 2
      }, {
        label: 'Extra Skills',
        link: '/extra',
        index: 3
      }, {
        label: 'Contact',
        link: 'contact',
        index: 4
      }
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex =
        this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
