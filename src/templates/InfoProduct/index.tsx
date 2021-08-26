import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { http } from "../../services/product.service";

import "./styles.scss";

import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Iproduct } from "./types";
import { filterCorrency12x } from "../../Pipes/filterCorrency12x";
import { filterCorrency } from "../../Pipes/filterCorrency";
import { GlobalContext } from "../../context";

export function InfoProduct() {
  const { id } = useParams<{ id?: string }>();
  const [productAllState, setProductState] = useState<Iproduct[]>([]);
  const [productApi, setProductApi] = useState<Iproduct>();
  const { setProduct } = useContext(GlobalContext);

  useEffect(() => {
    http
      .get("/products/" + id)
      .then((res: any) => {
        setProductState(res.data);
        setProductApi(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  const handleCLick = () => {
    setProduct((res: any) => {
      return [...res, productAllState];
    });
  };

  return (
    <div className="container" id="products">
      <div className="container-product">
        <div className="container-product-img-product">
          <div className="img-product">
            <img src={productApi?.picture} alt={productApi?.title} />
          </div>
          <footer className="footer-img-container">
            <img src={productApi?.picture} alt={productApi?.title} />
            <img src={productApi?.picture} alt={productApi?.title} />
            <img src={productApi?.picture} alt={productApi?.title} />
          </footer>
        </div>
        <div className="product-content">
          <header className="header-product">
            <h1 className="title-product">{productApi?.title}</h1>
            <div className="moreDevice">
              <h3 className="info-device">
                Modelo: <strong>{productApi?.brand}</strong>
              </h3>
              <h3 className="info-device">
                Espaço de Memoria: <strong>{productApi?.memory}</strong>
              </h3>
              <h3 className="info-device">
                Tipo de chip: <strong>{productApi?.chipType}</strong>
              </h3>
              <h3 className="info-device">
                Estoque (<strong>{productApi?.quantity}</strong>)
              </h3>
            </div>
            <div className="price-product">
              R${filterCorrency(Number(productApi?.price))}
              <br></br>
              <p className="descont">
                Ou 12x{filterCorrency12x(productApi?.price) + ",00"}
              </p>
            </div>
            <Link to="/carrinho">
              <Button
                variant="contained"
                color="primary"
                className="btn-addToCart"
                onClick={handleCLick}
              >
                <AddShoppingCartIcon className="iconCart" />+ Add to Car
              </Button>
            </Link>
          </header>
          <main className="description-container">
            <h1 className="title-description">Descrição</h1>
            <p className="description">{productApi?.description}</p>
          </main>
        </div>
      </div>
      
    </div>
  );
}
