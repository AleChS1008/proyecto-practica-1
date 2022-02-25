import { Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
    { path: 'sign-up', loadChildren: () => import('../../pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
    { path: 'sign-in', loadChildren: () => import('../../pages/sign-in/sign-in.module').then(m => m.SignInModule) },
    { path: 'forgot-password', loadChildren: () => import('../../pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
    { path: 'reset-password', loadChildren: () => import('../../pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
];
