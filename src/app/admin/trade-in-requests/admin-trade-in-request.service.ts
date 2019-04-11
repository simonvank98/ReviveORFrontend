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
      estimatedCredit: 5.00,
      dateCreated: new Date('09-11-2019'),
      dateUpdated: new Date('05-05-2018'),
      jewelryName: 'Shellring',
      additionalDescription: 'It fell once',
      jewelrySize: 'M',
      storyContent: 'I got this ring from my grandparents',
      storyTitle: 'Grandparents ring',
      tradeInRequestsImage: {
        requestId: 1,
        imagePath: ['https://theoceanrepublic.com/images/products/266/thumb/OR-8829.jpg',
          'https://theoceanrepublic.com/images/products/281/thumb/OR-6848.jpg',]
      },
      tradeInRequestsJewelryType: {
        requestId: 1,
        broken: true,
        bent: false,
        missingPiece: true,
        scratched: false
      },
      user: {
        userId: 1,
        name: 'Satches Raadhuis',
        email: 'satchezhuisraad@gmail.com',
        role: 'Schoonmaker'
        }
    },
    {
      requestId: 2,
      userId: 2,
      status: 'Done',
      estimatedCredit: 15.00,
      dateCreated: new Date('08-01-2017'),
      dateUpdated: new Date('06-07-2019'),
      jewelryName: 'necklace',
      additionalDescription: 'My dog ate it a couple times',
      jewelrySize: 'S',
      storyContent: 'Very nice necklace',
      storyTitle: 'Very nice',
      tradeInRequestsImage: {
        requestId: 2,
        imagePath: ['https://theoceanrepublic.com/images/products/281/thumb/OR-6848.jpg']
      },
      tradeInRequestsJewelryType: {
        requestId: 2,
        broken: false,
        bent: true,
        missingPiece: false,
        scratched: true
      },
      user: {
        userId: 2,
        name: 'Simon van Kouteren',
        email: 'simon123@gmail.com',
        role: 'Baas'
      }
    }
  ];

  constructor() {}

  public getAll() {
    return of(this.requests).pipe(delay(1000));
  }

  get(id) {
    return of(this.requests[id - 1]);
  }
}
