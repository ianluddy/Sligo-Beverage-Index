import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { ApplicationRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-coffee-index',
  templateUrl: '../index/index.component.html'
})
export class CoffeeIndexComponent extends IndexComponent implements OnInit {

  beverageName = 'coffee';
  beverageQuery = 'Coffee shops in Sligo, Ireland';
  moreLink = 'https://goo.gl/maps/JTR6RpFGMv12';

  constructor(
    apiService: ApiService,
    applicationRef: ApplicationRef
  ) {
    super(apiService, applicationRef);
  }

}
