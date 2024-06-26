import { Routes } from '@angular/router';
import { WithoutSuperAdminComponent } from './pages/without-super-admin/without-super-admin.component';
import { IndexComponent } from './pages/index/index.component';
import { withoutSuperAdminGuard } from './guards/without-super-admin.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Mi Tiendita'
  },
  {
    path: 'withoutSuperAdmin',
    component: WithoutSuperAdminComponent,
    canActivate: [withoutSuperAdminGuard],
    title: 'Mi Tiendita - Creación de un super administrador'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Mi Tiendita - Inicio de sesión'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Mi Tiendita - Dashboard'
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
