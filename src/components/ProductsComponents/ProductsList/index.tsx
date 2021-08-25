import "./styles.scss";

import { useState, useEffect } from "react";
import { http } from "../../../services/product.service";
import { Product } from "../Product";
import { ProductType } from "../types/ProductType";

export function ProductsList() {
  const [productState, setProduct] = useState([]);
  useEffect(() => {
    http
      .get("/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="titleProducts">Smartphones 2021</h1>
      <p className="bodyProducts">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
        obcaecati, quam facere ab blanditiis autem incidunt dicta eligendi
        numquam laboriosam?
      </p>
      <div className="products">
        {productState.map((product: ProductType) => (
          <Product id={product.id} title={product.title} picture={product.picture} price={product.price} key={product.id} />
        ))}
      </div>
    </>
  );
}
