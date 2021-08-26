import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import "./styles.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { product } from "./types";
import { ItemCart } from "../../components/ItemCart";

export type CartType = {
  quantity: number;
};
export function CarShop() {
  const { quantityItemCarState, setQuantityItemCar, productState } =
    useContext(GlobalContext);

  useEffect(() => {
    if (quantityItemCarState <= 0) {
      setQuantityItemCar(0);
    }
  });
  return (
    <section className="container">
      <div className="container-cart">
        <h1 className="title-page">Your cart items</h1>
        <Link to="/">
          <p className="returnShop">Back to shopping</p>
        </Link>
        <TableContainer component={Paper} className="table-container">
          <Table className="table-content" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="titleTable">Produto </TableCell>
                <TableCell className="titleTable" align="center">
                  Preço
                </TableCell>
                <TableCell className="titleTable" align="center">
                  Quantidade
                </TableCell>
                <TableCell className="titleTable" align="center">
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productState.map((row: product) => (
                <ItemCart
                  key={row.title}
                  picture={row.picture}
                  price={row.price}
                  title={row.title}
                  quantity={row.quantity}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <footer className="footerCart">
          <h1 className="subtotal">Sub-total R${"10000000"}</h1>
          <Button variant="contained" color="primary" className="btn-buyItems">
            Comprar
          </Button>
        </footer>
      </div>
    </section>
  );
}
