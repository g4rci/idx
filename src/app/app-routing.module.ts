
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', loadChildren: () => import(`./components/principal/principal.module`).then(m => m.PrincipalModule) },
  { path: 'auth', loadChildren: () => import(`./components/auth/auth-module.module`).then(m => m.AuthModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }