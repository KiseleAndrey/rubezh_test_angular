import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Label } from '../grid/label.model';

@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.scss']
})
export class DialogLabelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogLabelComponent>, @Inject(MAT_DIALOG_DATA) public labels: Label[]) { }
  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
