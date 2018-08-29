import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  placeService: google.maps.places.PlacesService;

  // Sligo
  queryLat = 54.2766;
  queryLng = 8.4761;

  // 10 km radius
  queryRadius = 10000;

  constructor(
    private mapsAPILoader: MapsAPILoader,
  ) { }

  getLocations(queryString, callback) {
    this.mapsAPILoader.load().then(() => {
      this.placeService = new google.maps.places.PlacesService(document.createElement("div"));
      this.placeService.textSearch({
        location: new google.maps.LatLng(this.queryLat, this.queryLng),
        radius: this.queryRadius,
        query: queryString
      }, callback);
    });
  }

  getLocationDetails(locationId, callback) {
    this.mapsAPILoader.load().then(() => {
      this.placeService = new google.maps.places.PlacesService(document.createElement("div"));
      this.placeService.getDetails({ placeId: locationId }, callback);
    });
  }
}
