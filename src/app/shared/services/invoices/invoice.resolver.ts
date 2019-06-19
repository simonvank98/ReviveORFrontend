import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {InvoiceService} from './invoice.service';
import {InvoiceModel} from './invoice.model';

 @Injectable()
 export class InvoiceResolver implements Resolve <InvoiceModel[]> {
     constructor(private invoiceService: InvoiceService) {}

     resolve(route: ActivatedRouteSnapshot,
             state: RouterStateSnapshot
     ): Observable<any>|Promise<any> {
          return this.invoiceService.getAllForSelf();
     }
}
