import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';


@NgModule({
    imports: [
        CommonModule,
        AgGridModule.withComponents([]),
        MatDialogModule
    ],
    exports: [
        CommonModule,
        AgGridModule
    ]
})
export class SharedModule { }
