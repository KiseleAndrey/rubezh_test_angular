/**
 * Роутинг.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
    {
        path: '', component: ApplicationComponent,
        children: [
            { path: '', redirectTo: 'grid', pathMatch: 'full' },
            { path: 'grid', component: GridComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ApplicationRouterModule {

}
