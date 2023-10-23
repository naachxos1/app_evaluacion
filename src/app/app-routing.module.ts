import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  ////////////////////////////////////////////////// Profesor ////////////////////////////////////////////////////////////////////////////////////
  {
    path: 'secciones',
    children: [
      {
        path: "",
        loadChildren: () => import('./appprofesor/pages/profesor/secciones/secciones-p.module').then( m => m.seccionesPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./appprofesor/pages/profesor/secciones/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },

  {
    path: 'home',
    loadChildren: () => import('./appprofesor/pages/profesor/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'agregar',
    loadChildren: () => import('./appprofesor/pages/profesor/secciones/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./appprofesor/pages/profesor/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'detallecard/:id',
    loadChildren: () => import('./appprofesor/pages/profesor/diseñocarta/diseñocarta.module').then( m => m.diseñocartaPageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./appprofesor/pages/profesor/api/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apidelete/:id',
    loadChildren: () => import('./appprofesor/pages/profesor/api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apiupdate/:id',
    loadChildren: () => import('./appprofesor/pages/profesor/api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./appprofesor/pages/profesor/api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'apidetail/:id',
    loadChildren: () => import('./appprofesor/pages/profesor/api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'perfil-profesor',
    loadChildren: () => import('./appprofesor/pages/profesor/perfil-profesor/perfil-profesor.module').then( m => m.PerfilProfesorPageModule)
  },
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 ////////////////////////////////////////////////// Alumno ////////////////////////////////////////////////////////////////////////////////////
 {
  path: 'mensajes',
  children: [
    {
      path: "",
      loadChildren: () => import('./appalumno/pages/alumno/mensajes/mensajes.module').then( m => m.MensajesPageModule)
    },
    {
      path: ':id',
      loadChildren: () => import('./appalumno/pages/alumno/mensajes/detalle/detalle.module').then( m => m.DetallePageModule)
    }
  ]
},
{
  path: 'home-alumno',
  loadChildren: () => import('./appalumno/pages/alumno/home/home-alumno.module').then( m => m.HomePageModule)
},
{
  path: 'usuarios-alumno',
  loadChildren: () => import('./appalumno/pages/alumno/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
},
{
  path: 'detallecard-alumno/:id',
  loadChildren: () => import('./appalumno/pages/alumno/diseñocarta/diseñocarta.module').then( m => m.diseñocartaPageModule)
},
{
  path: 'apihome-alumno',
  loadChildren: () => import('./appalumno/pages/alumno/api/home/home.module').then( m => m.HomePageModule)
},
{
  path: 'apiadd-alumno',
  loadChildren: () => import('./appalumno/pages/alumno/api/add/add.module').then( m => m.AddPageModule)
},
{
  path: 'apidelete-alumno/:id',
  loadChildren: () => import('./appalumno/pages/alumno/api/delete/delete.module').then( m => m.DeletePageModule)
},
{
  path: 'apiupdate-alumno/:id',
  loadChildren: () => import('./appalumno/pages/alumno/api/update/update.module').then( m => m.UpdatePageModule)
},
{
  path: 'apilist-alumno',
  loadChildren: () => import('./appalumno/pages/alumno/api/list/list.module').then( m => m.ListPageModule)
},
{
  path: 'apidetail-alumno/:id',
  loadChildren: () => import('./appalumno/pages/alumno/api/detail/detail.module').then( m => m.DetailPageModule)
},
{
  path: 'perfil-alumno',
  loadChildren: () => import('./appalumno/pages/alumno/perfil-alumno/perfil-profesor.module').then( m => m.PerfilProfesorPageModule)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
