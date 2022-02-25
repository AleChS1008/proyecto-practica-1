import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import * as $ from 'jquery';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/h/inicio', title: 'Inicio',  icon: 'ni-tv-2 text-primary', class: '' },
];
declare var $: any;

@Component({
  selector: 'app-auth2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public focus;
  public userName;
  public langs = [ 'en', 'es' ];

  public langSelect = 'en';
  public listTitles: any[] = [];
  public location: Location;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private route: Router,
    private translate: TranslateService,

    ) {
    this.location = location;
    translate.setDefaultLang('en');
    translate.use('en');
  }

  async ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 1 );
    }

    return 'Inicio';
  }

  changeLang(lang) {
    this.translate.use(lang);
    this.langSelect = lang;
  }

}
