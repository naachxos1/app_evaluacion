import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Secciones', url: '/secciones', icon: 'list' },
    { title: 'Area Trabajo', url: '/apihome', icon: 'briefcase' },
    { title: 'Perfil', url: '/perfil-profesor', icon: 'person-circle' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public appApi = [
    { title: 'Inicio', url: '/apihome', icon: 'home'},
    { title: 'List', url: '/apilist', icon: 'people-circle' },
    { title: 'Update', url: '/apiupdate', icon: 'analytics' },

    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private router: Router) {}

  monstrarMenu() {
    return this.router.url !== '/login';
  }

  mostrarMenuApi() {
    const aux = ['apihome','apiadd','apidelete','apiupdate','apilist','apidetail']
    return aux.includes(this.router.url.substring(1))
    return this.router.url == '/apihome';
  }
}


export class AppComponents {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Secciones', url: '/seccion', icon: 'list' },
    //{ title: 'Listados', url: '/equipos', icon: 'people' },
    { title: 'Area Trabajo', url: '/apihome', icon: 'jobs' },
    { title: 'Perfil', url: '/perfil-profesor', icon: 'person-circle-outline' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public appApi = [
    { title: 'Inicio', url: '/apihome', icon: 'home'},
    { title: 'List', url: '/apilist', icon: 'people-circle' },
    //{ title: 'Add', url: '/apiadd', icon: 'people' },
    //{ title: 'Delete', url: '/apidelete', icon: 'people' },
    { title: 'Update', url: '/apiupdate', icon: 'analytics' },
    //{ title: 'Detail', url: '/apidetail', icon: 'medal' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private router: Router) {}

  monstrarMenu() {
    return this.router.url !== '/login';
  }

  mostrarMenuApi() {
    const aux = ['apihome','apiadd','apidelete','apiupdate','apilist','apidetail']
    return aux.includes(this.router.url.substring(1))
    return this.router.url == '/apihome';
  }
}
// ELIMINAMOS EL "/"

