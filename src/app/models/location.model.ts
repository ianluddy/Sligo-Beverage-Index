export class Location {
  constructor(
    public name: string,
    public formatted_address: string,
    public rating: number,
    public reviews: object[],
    public photos: object[],
    public place_id: string,
  ) { }
}
