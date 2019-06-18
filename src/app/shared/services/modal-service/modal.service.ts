import {Injectable} from '@angular/core';
import {ModalComponent} from './modal.component';
import {DialogButton} from './model/dialog-button.model';
import {MatDialog} from '@angular/material';
import {ModalDialog} from './model/modal-dialog.model';
import {Observable} from 'rxjs';

export interface ModalDialogData {
  header: string;
  content: string;
  buttons: DialogButton[];
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialogService: MatDialog) {}

  createDialog(header: string, content: string): ModalDialog {
    return new ModalDialog(header, content);
  }

  confirm(message: string): Observable<boolean> {
    const dialog = this.createDialog('Confirmation', message);

    const confirmed = new Observable<boolean>(obs => {
      dialog.addButton('No', () => { obs.next(false); });
      dialog.addButton('Yes', () => { obs.next(true); }).buttonColor = 'primary';
    });

    this.showDialog(dialog);
    return confirmed;
  }

  showDialog(modalDialog: ModalDialog) {
    this.dialogService.open(ModalComponent, {
      width: modalDialog.width,
      data: modalDialog
    });
  }
}
