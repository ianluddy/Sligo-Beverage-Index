import { Component, OnInit } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  beverageName: string;
  beverageQuery: string;
  moreLink: string;
  locations: Location[];

  constructor(
    private apiService: ApiService,
    private applicationRef: ApplicationRef,
  ) { }

  ngOnInit() {
    this.apiService.getLocations(this.beverageQuery, (results) => {
      this.locations = results.sort(function(a,b ) {
        return b.rating - a.rating // Sort by rating
      });
      this.applicationRef.tick();
    });
  }
}
