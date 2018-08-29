import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { ApplicationRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-beer-index',
  templateUrl: '../index/index.component.html'
})
export class BeerIndexComponent extends IndexComponent implements OnInit {

  beverageName = 'beer';
  beverageQuery = 'Pubs in Sligo, Ireland';
  moreLink = 'https://goo.gl/maps/7T2mxNNL7p82';

  constructor(
    apiService: ApiService,
    applicationRef: ApplicationRef
  ) {
    super(apiService, applicationRef);
  }
}
