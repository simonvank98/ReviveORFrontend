import { ModalService } from './../../shared/modal/modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TradeInProcessService } from 'src/app/shared/services/trade-in-process.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent implements OnInit {

  @Output() nextClicked: EventEmitter<any> = new EventEmitter();
  @Output() backClicked: EventEmitter<any> = new EventEmitter();

  resetDialogOpen = false;

  constructor(private tradeInProcessService: TradeInProcessService, private modalService: ModalService, private router: Router) { }

  ngOnInit() {
  }

  onNextClicked() {
    this.nextClicked.emit();
  }

  onBackClicked() {
    this.backClicked.emit();
  }

  onResetClicked() {
    const dialog = this.modalService.createDialog('Confirmation', 'Are you sure you wish to reset your Trade-in progress?');
    dialog.addButton('No', () => {} );
    dialog.addButton('Yes', () => {
        this.tradeInProcessService.reset();
    });
    this.modalService.showDialog(dialog);
  }

  onDialogClosed(decision) {
    this.resetDialogOpen = false;
    if (decision) {
        this.tradeInProcessService.reset();
    }
  }

}
