import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LocationDetails } from '../../models/location-details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  locationId: string;
  locationDetails: LocationDetails;

  constructor(
    private apiService: ApiService,
    private applicationRef: ApplicationRef,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.locationId = params['locationId'];
    });
  }

  ngOnInit() {
    this.apiService.getLocationDetails(this.locationId, (place, status) => {
      this.locationDetails = place;
      if( this.locationDetails.photos != undefined )
        this.locationDetails.photos = this.locationDetails.photos.slice(0, 4);
      this.applicationRef.tick();
    });
  }
}
