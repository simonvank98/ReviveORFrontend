import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  models = [
        {
          'id': 1,
          'customer': 'Henk van Dijk',
          'date': '05-04-2019',
          'status': 'Ingestuurd ofzo'
        },
        {
          'id': 2,
          'customer': 'Hans Bertens',
          'date': '05-03-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 3,
          'customer': 'Mischa Bartels',
          'date': '04-03-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 4,
          'customer': 'Michiel Boere',
          'date': '01-03-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 5,
          'customer': 'Edward van Veggel',
          'date': '05-05-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 6,
          'customer': 'Charlotte Ipema',
          'date': '05-03-2018',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 7,
          'customer': 'Admiraal J a z z i c s',
          'date': '09-04-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 8,
          'customer': 'Koen Warner',
          'date': '05-03-2016',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 9,
          'customer': 'Remco Meisner',
          'date': '05-01-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 10,
          'customer': 'Roland Westveer',
          'date': '12-03-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 11,
          'customer': 'Klaas-Jan Mollema',
          'date': '11-04-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 12,
          'customer': 'Jeroen Rijsdijk',
          'date': '09-03-2019',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 13,
          'customer': 'Jeroen de Meij',
          'date': '01-08-2018',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 14,
          'customer': 'Willem van Vliet',
          'date': '01-06-2017',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 15,
          'customer': 'Herman van Haagen',
          'date': '07-11-2018',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 16,
          'customer': 'Jaap Haasnoot',
          'date': '12-12-2018',
          'status': 'Nog niet nagekeken ofzo'
        },
        {
          'id': 17,
          'customer': 'Robert van Breukelen',
          'date': '11-08-2018',
          'status': 'Nog niet nagekeken ofzo'
        }
      ];
  headers = ['Request no.', 'Customer', 'Request date', 'Status'];
  attributes = ['id', 'customer', 'date', 'status'];

  constructor() { }

  ngOnInit() {
  }

}
