import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  show(message: string, duration = 2000) {
    this.snackBar.open(message, '', {
      duration: duration,
    });
  }
}
