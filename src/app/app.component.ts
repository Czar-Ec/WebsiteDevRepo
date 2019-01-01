import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  setDarkTheme = true;

  title = 'CzarEc Portfolio';

  constructor(
    private iconReg: MatIconRegistry,
    sanitise: DomSanitizer
  ) {
    this.iconReg.addSvgIcon(
      'cog',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/cog.svg')
    );
    this.iconReg.addSvgIcon(
      'crescent',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/crescent.svg')
    );
    this.iconReg.addSvgIcon(
      'linkedin',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/linkedin.svg')
    );
    this.iconReg.addSvgIcon(
      'logo',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/logo.svg')
    );
    this.iconReg.addSvgIcon(
      'logotext',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/logotext.svg')
    );
    this.iconReg.addSvgIcon(
      'menu',
      sanitise.bypassSecurityTrustResourceUrl('assets/img/menu.svg')
    );
  }

  toggleDarkTheme() {
    this.setDarkTheme = !this.setDarkTheme;
  }
}
