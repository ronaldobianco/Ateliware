import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout-component/layout-component.component';

const homeRoute = 'dashboard/search';
const routes: Routes = [
  { path: '', redirectTo: `${homeRoute}`, pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: `/${homeRoute}`, pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard.module').then(m => m.DashboardModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
