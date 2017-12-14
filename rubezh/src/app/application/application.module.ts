import { MessegeService } from './services/messege.service';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { GridComponent } from './grid/grid.component';
import { ApplicationComponent } from './application.component';
import { ApplicationRouterModule } from './application-routing.module';
import { DialogLabelComponent } from './dialog-label/dialog-label.component';



@NgModule({
    imports: [
        SharedModule,
        ApplicationRouterModule,
    ],
    providers: [
        MessegeService
    ],
    declarations: [
        GridComponent,
        ApplicationComponent,
        DialogLabelComponent
    ],
    entryComponents: [
        DialogLabelComponent
    ]
})
export class ApplicationModule { }
