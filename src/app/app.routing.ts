import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './core/guards/logged.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashLayoutComponent } from "./layouts/dash-layout/dash-layout.component";
import { RequestLayoutsComponent } from './layouts/request-layouts/request-layouts.component';
//Cambio a deechar
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dash/home',
    pathMatch: 'full',
  }, {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: 'dash',
    component: DashLayoutComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./layouts/dash-layout/dash-layout.module').then(m => m.DashLayoutModule),
        // canLoad: [LoggedGuard],
        // canActivate: [LoggedGuard]
      }
    ]
  },
  {
    path: 'onboarding',
    component: RequestLayoutsComponent,
    children: [
      {
        path: '',
        loadChildren : () => import('./layouts/request-layouts/request-layouts.module').then(m => m.RequestLayoutsModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    useHash: false,

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
