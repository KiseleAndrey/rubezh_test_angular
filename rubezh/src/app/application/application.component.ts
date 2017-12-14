
import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';

import { MessegeService } from './services/messege.service';
import { Label } from './grid/label.model';
import { DialogLabelComponent } from './dialog-label/dialog-label.component';



@Component({
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
    selector: 'app-application'
})

export class ApplicationComponent {
    constructor(private messege: MessegeService, private dialog: MatDialog) {
        this.messege.getLabel.subscribe((label: Label[]) => {
            this.openDialog(label);
        });
    }

    openDialog(label: Label[]) {
        const dialogRef = this.dialog.open<DialogLabelComponent>(DialogLabelComponent, {
            data: label,
            width: '400px',
            height: '400px',
        });
    }
}
