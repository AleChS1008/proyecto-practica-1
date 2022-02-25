import { Routes } from '@angular/router';

export const RequestLayoutRoutes: Routes = [
  { path: '', loadChildren: () => import('../../pages/onboarding/onboarding.module').then(m => m.OnboardingModule) } ,
  { path: 'request', loadChildren: () => import('../../pages/request/request.module').then(m => m.RequestModule) } ,
  { path: 'data', loadChildren: () => import('../../pages/data/data.module').then(m => m.DataModule) } ,
  { path: 'contactanos', loadChildren: () => import('../../pages/contactanos/contactanos.module').then(m => m.ContactanosModule) } ,
  { path: 'monto_y_cuota', loadChildren:() => import('../../pages/monto-y-cuota/monto-y-cuota.module').then(m => m.MontoYCuotaModule) },
  { path: 'address', loadChildren: () => import('../../pages/address/address.module').then(m => m.AddressModule) },
  { path: 'contract', loadChildren: () => import('../../pages/contract/contract.module').then(m => m.ContractModule) },
  { path: 'firma-contrato', loadChildren: () => import('../../pages/firma-contrato/firma-contrato.module').then(m => m.FirmaContratoModule) },
  { path: 'id_card', loadChildren: () => import('../../pages/id-card/id-card.module').then(m => m.IdCardModule) },
];
