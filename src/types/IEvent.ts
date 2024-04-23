export interface IEvent {
  id: number;
  userId: number;
  title: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  total: number;
  occupied: number;
  price: number;
  cover: string;
}
