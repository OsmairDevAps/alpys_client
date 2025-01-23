export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  lastacess: string;
}
export interface IProduct {
  id: number;
  category: string;
  name: string;
  price: number;
  photo: string;
} 
export interface IOrder {
  id: number;
  client_name: string;
  phone_client: string;
  product_name: string;
  amount: number;
  price: number;
  isdelivery: boolean;
  deliveryfee: number;
  address: string;
  obs: string;
}
export type UserFormProps = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  passwordconfirmation?: string;
}