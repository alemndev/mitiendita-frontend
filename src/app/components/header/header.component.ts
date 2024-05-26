import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';

interface IMenuItem {
  name: string;
  logged: boolean;
  userRole?: number;
  isButton?: boolean;
  icon?: string;
  routerLink?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuItems: IMenuItem[] = [
    {
      name: 'Iniciar sesión',
      logged: false,
      routerLink: 'login'
    },
    {
      name: 'Crear un administrador',
      logged: true,
      userRole: 1,
      routerLink: 'superadmin/createAdmin'
    },
    {
      name: 'Crear una tienda',
      logged: true,
      userRole: 2,
      routerLink: 'admin/createStore'
    },
    {
      name: 'Cerrar sesión',
      logged: true
    },
  ]
}