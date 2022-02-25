import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { DOCUMENT, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { UserService } from 'src/app/pages/my-account/services/user.service';
import { User } from 'src/app/shared/models/users.model';
declare var $: any;

@Component({
  selector: 'app-dash-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User | any
  public langs = [ 'en', 'es' ];
  public langSelect = 'en';
  public listTitles: any[] = [];
  public location: Location;
  constructor(
    private userService: UserService,
    location: Location,
    private translate: TranslateService,
    public overlayContainer: OverlayContainer,
    @Inject(DOCUMENT) private document: Document

    ) {
    this.location = location;
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

  changeLang(lang) {
    this.translate.use(lang);
    this.langSelect = lang;
  }


  logout(){
    sessionStorage.removeItem('token');
    window.location.reload();
  }

}
