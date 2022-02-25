import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent as AuthHeaderComponent } from './auth/header/header.component';
import { FooterComponent as AuthFooterComponent, FooterComponent } from './auth/footer/footer.component';
import { HeaderComponent as Auth2HeaderComponent } from './auth2/header/header.component';
import { FooterComponent as Auth2FooterComponent } from './auth2/footer/footer.component';
import { HeaderComponent as DashHeaderComponent } from './dash/header/header.component';
import { FooterComponent as DashFooterComponent } from './dash/footer/footer.component';
import { HeaderComponent as RequestHeaderComponent } from './request/header/header.component';
import { FooterComponent as RequestFooterComponent } from './request/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuLeftComponent } from './dash/menu-left/menu-left.component';
import { FooterComponent as AdminFooterComponent } from './admin/footer/footer/footer.component';
import { HeaderComponent as AdminHeaderComponent } from './admin/header/header/header.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    AuthFooterComponent,
    AuthHeaderComponent,
    DashFooterComponent,
    DashHeaderComponent,
    MenuLeftComponent,
    RequestHeaderComponent,
    RequestFooterComponent,
    AdminFooterComponent,
    AdminHeaderComponent,

  ],
  exports: [
    AuthFooterComponent,
    AuthHeaderComponent,
    DashFooterComponent,
    DashHeaderComponent,
    MenuLeftComponent,
    RequestHeaderComponent,
    RequestFooterComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
  ],
  providers: []
})
export class ComponentsModule { }
