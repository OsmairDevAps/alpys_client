export interface IProduct {
  id: number;
  name: string;
  price: number;
  photo: string;
} 
export interface IOrder {
  id: number;
  client_name: string;
  product_name: string;
  amount: number;
  price: number;
  isdelivery: boolean;
  deliveryfee: number;
  address: string;
  obs: string;
}