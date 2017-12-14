/**
 роутинг
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/services/auth-guard.service';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'application', canActivate: [AuthGuard], loadChildren: 'app/application/application.module#ApplicationModule' },
    { path: '**', component: NotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule { }
