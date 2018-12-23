import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  setDarkTheme = true;

  title = 'WebsiteDevRepo';

  toggleDarkTheme() {
    this.setDarkTheme = !this.setDarkTheme;
  }
}
