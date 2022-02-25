import { Routes } from '@angular/router';

export const DashLayoutRoutes: Routes = [
    { path: 'home', loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule) },
    { path: 'mi-cuenta', loadChildren: () => import('../../pages/my-account/my-account.module').then(m => m.MyAccountModule) },
    { path: 'users', loadChildren: () => import('../../pages/users/users.module').then(m => m.UsersModule) },
    { path: 'orders', loadChildren: () => import('../../pages/order/order.module').then(m => m.OrderModule) },
    { path: 'products', loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule) },
    { path: 'purchases', loadChildren: () => import('../../pages/purchase/purchase.module').then(m => m.PurchaseModule) },
    { path: 'clients', loadChildren: () => import('../../pages/client/client.module').then(m => m.ClientModule)},
    { path: 'files', loadChildren: () => import('../../pages/files/files.module').then(m => m.FilesModule)},
    { path: 'aplications', loadChildren: () => import('../../pages/aplications/aplications.module').then(m => m.AplicationsModule)},
    { path: 'statistics', loadChildren: () => import('../../pages/statistics/statistics.module').then(m => m.StatisticsModule)},
];
