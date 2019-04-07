import {DialogButton} from './dialog-button.model';
import {ModalDialogData} from '../modal.service';

// noinspection JSAnnotator
export class ModalDialog implements ModalDialogData {
  public buttons: DialogButton[] = [];
  public width = '360px';

  constructor(public header = '', public content = '') {}

  addButton(buttonName, callback): DialogButton {
    const button = new DialogButton(buttonName, callback);
    this.buttons.push(button);
    return button;
  }
}
