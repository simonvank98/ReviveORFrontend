import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogButton} from './model/dialog-button.model';
import {ModalDialogData} from './modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalDialogData) {}

  onButtonClicked(button: DialogButton): void {
    button.callback();
    this.dialogRef.close();
  }
}
