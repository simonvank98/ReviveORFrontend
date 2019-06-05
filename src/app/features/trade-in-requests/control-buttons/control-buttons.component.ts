import {ModalService} from '../../../shared/services/modal-service/modal.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TradeInProcessService} from 'src/app/features/trade-in-requests/trade-in-process.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.scss']
})
export class ControlButtonsComponent implements OnInit {

  @Output() nextClicked: EventEmitter<any> = new EventEmitter();
  @Output() backClicked: EventEmitter<any> = new EventEmitter();
  @Output() customClicked: EventEmitter<any> = new EventEmitter();

  @Input() customButtonText = '';

  constructor(private tradeInProcessService: TradeInProcessService, private modalService: ModalService, private router: Router) { }

  ngOnInit() {
  }

  onNextButtonClicked() {
    this.nextClicked.emit();
  }

  onBackButtonClicked() {
    this.backClicked.emit();
  }

  onCustomButtonClicked() {
    this.customClicked.emit();
  }

  onResetButtonClicked() {
    const dialog = this.modalService.createDialog('Confirmation', 'Are you sure you wish to reset your Trade-in progress?');
    dialog.addButton('No', () => {} );
    dialog.addButton('Yes', () => {
        this.tradeInProcessService.reset();
        this.router.navigate(['/trade-in']);
    });
    this.modalService.showDialog(dialog);
  }
}
