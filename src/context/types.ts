import { ReactNode } from 'react';

export type LoadProductsProvider = {
  children: ReactNode;
};
export type ProductType = {
  picture: string;
  title: string;
  price: number;
  quantity: number;
};
export type product = ProductType[];

export type QuantityType = number;

export type LoadProductsContextType = {
  productState: product;
  setProduct: React.Dispatch<React.SetStateAction<product>>;

  quantityItemCarState: QuantityType;
  setQuantityItemCar: React.Dispatch<React.SetStateAction<QuantityType>>;
};