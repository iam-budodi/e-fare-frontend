export interface Booking {
  id: number;
  busName: string;
  busRoute: string;
  busCategory: string;
  departDate: Date;
  totalSeats: number;
  seatSelected: number;
  seatAvailable: number;
  price: number;
  imageUrl: string;
}
