export interface Booking {
  route: string;
  category: string;
  departDate: Date;
  totalSeat: number;
  seatNumber: number;
  seatAvailable: number;
  price: number;
  busImage: string;
  status: boolean;
}
