export class LocationDetails {
  constructor(
    public name: string,
    public formatted_address: string,
    public formatted_phone_number: string,
    public international_phone_number: string,
    public website: string,
    public email: string,
    public rating: number,
    public reviews: object[],
    public photos: object[],
    public types: object[],
    public address_components: object[],
    public opening_hours: object[],
  ) { }
}
