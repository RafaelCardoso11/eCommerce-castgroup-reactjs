import { useState, createContext } from "react";
import {
  LoadProductsContextType,
  LoadProductsProvider,
  ProductType,
  QuantityType,
} from "./types";

export const GlobalContext = createContext({} as LoadProductsContextType);

export function Global(props: LoadProductsProvider) {
  const [productState, setProduct] = useState<ProductType[]>([]);
  const [quantityItemCarState, setQuantityItemCar] = useState<QuantityType>(0);
  return (
    <GlobalContext.Provider
      value={{
        productState,
        setProduct,
        quantityItemCarState,
        setQuantityItemCar,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
