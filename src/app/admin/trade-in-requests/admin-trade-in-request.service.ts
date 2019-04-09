import {Injectable} from '@angular/core';
import {TradeInRequestModel} from './trade-in-request.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminTradeInRequestService {

  private requests: TradeInRequestModel[] = [
      {
      requestId: 1,
      userId: 1,
      status: 'Not ready yet',
      dateCreated: new Date('09-11-2019'),
      dateUpdated: new Date('05-05-2018'),
      jewelryName: 'Shellring',
      jewelryDescription: 'A shell shaped ring',
      jewelrySize: 'M',
      storyContent: 'I got this ring from my grandparents',
      storyTitle: 'Grandparents ring',
      tradeInRequestsImage: {
        requestId: 1,
        imagePath: 'https://theoceanrepublic.com/images/products/266/thumb/OR-8829.jpg'
      },
      tradeInRequestsJewelryType: {
        requestId: 1,
        broken: true,
        bent: false,
        missingPiece: true,
        scratched: false
      }
    },
    {
      requestId: 2,
      userId: 2,
      status: 'Done',
      dateCreated: new Date('08-01-2017'),
      dateUpdated: new Date('06-07-2019'),
      jewelryName: 'necklace',
      jewelryDescription: 'A necklace',
      jewelrySize: 'S',
      storyContent: 'Very nice necklace',
      storyTitle: 'Very nice',
      tradeInRequestsImage: {
        requestId: 2,
        imagePath: 'https://theoceanrepublic.com/images/products/281/thumb/OR-6848.jpg'
      },
      tradeInRequestsJewelryType: {
        requestId: 2,
        broken: false,
        bent: true,
        missingPiece: false,
        scratched: true
      }
    }
  ];

  constructor() {}

  public getAll() {
    return of(this.requests).pipe(delay(1000));
  }
}
