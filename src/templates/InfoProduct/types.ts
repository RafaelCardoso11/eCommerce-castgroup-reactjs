export type Iproduct = {
  id: number;
  brand: string;
  chipType: string;
  memory: string;
  picture: string;
  title: string;
  price: number;
  description: string;
  quantity: string;
}
export type IproductType = Array<Iproduct>;