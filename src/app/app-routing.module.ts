import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from './guards/vigilante.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [VigilanteGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/registro/registro.module').then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: 'add-post',
    loadChildren: () =>
      import('./pages/add-post/add-post.module').then(
        (m) => m.AddPostPageModule
      ),
  },
  {
    path: 'edit-page/:id',
    loadChildren: () =>
      import('./pages/edit-page/edit-page.module').then(
        (m) => m.EditPagePageModule
      ),
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./api/rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyPageModule)
  },
  {
    path: 'world-time',
    loadChildren: () => import('./api/world-time/world-time.module').then(m => m.WorldTimePageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./pages/lista-usuarios/lista-usuarios.module').then(m => m.ListaUsuariosPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'lista-tareas',
    loadChildren: () => import('./pages/lista-tareas/lista-tareas.module').then( m => m.ListaTareasPageModule)
  },
  {
    path: 'buscador',
    loadChildren: () => import('./pages/buscador/buscador.module').then( m => m.BuscadorPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
