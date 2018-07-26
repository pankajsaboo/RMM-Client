import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/dashboards/dashboard1',
    pathMatch: 'full'
  }, {
    path: 'dashboards',
    loadChildren: './dashboards/dashboards.module#DashboardsModule'
  }, {
    path: 'material',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'apps',
    loadChildren: './apps/apps.module#AppsModule'
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'datatables',
    loadChildren: './datatables/datatables.module#DataTablesModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'charts',
    loadChildren: './charts/chartslib.module#ChartslibModule'
  },
  {
    path: '',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: 'container',
    loadChildren: './container/container.module#ContainerModule'
  },
  {
    path: 'storage-condition',
    loadChildren: './storage-condition/storage-condition.module#StorageConditionModule'
  },
  {
    path: 'document-type',
    loadChildren: './document-type/document-type.module#DocumentTypeModule'
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule'
  }]
}, {
  path: '',
  component: AppBlankComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
}, {
  path: '**',
  redirectTo: 'authentication/404'
}];
