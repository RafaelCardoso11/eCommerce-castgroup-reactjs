import { useState, useEffect, useContext } from "react";
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
  const [productStateA, setProductState] = useState<Iproduct[]>([]);
  const { setProduct, productState } = useContext(GlobalContext);

  useEffect(() => {
    http
      .get("/products/" + id)
      .then((res) => {
        setProductState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCLick = () => {
    setProduct((res) => {
      return [...res, ...productStateA];
    });
  };
  useEffect(() => {
    console.log(productState);
  }, [productState]);
  return (
    <div className="container" id="products">
      {productStateA.map((product) => (
        <div className="container-product">
          <div className="container-product-img-product">
            <div className="img-product">
              <img src={product.picture} alt={product.title} />
            </div>
            <footer className="footer-img-container">
              <img src={product.picture} alt={product.title} />
              <img src={product.picture} alt={product.title} />
              <img src={product.picture} alt={product.title} />
            </footer>
          </div>
          <div className="product-content">
            <header className="header-product">
              <h1 className="title-product">{product.title}</h1>
              <div className="moreDevice">
                <h3 className="info-device">
                  Modelo: <strong>{product.brand}</strong>
                </h3>
                <h3 className="info-device">
                  Espaço de Memoria: <strong>{product.memory}</strong>
                </h3>
                <h3 className="info-device">
                  Tipo de chip: <strong>{product.chipType}</strong>
                </h3>
                <h3 className="info-device">
                  Estoque (<strong>{product.quantity}</strong>)
                </h3>
              </div>
              <div className="price-product">
                R${filterCorrency(Number(product.price))}
                <br></br>
                <p className="descont">
                  Ou 12x{filterCorrency12x(product.price) + ",00"}
                </p>
              </div>
              <Link to="/carrinho">
                <Button
                  variant="contained"
                  color="primary"
                  className="btn-addToCart"
                  onClick={() => handleCLick}
                >
                  <AddShoppingCartIcon className="iconCart" />+ Add to Car
                </Button>
              </Link>
            </header>
            <main className="description-container">
              <h1 className="title-description">Descrição</h1>
              <p className="description">{product.description}</p>
            </main>
          </div>
        </div>
      ))}
    </div>
  );
}
