import { TableRow, Button, TableCell, ButtonGroup } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { GlobalContext } from "../../context";
import { useContext } from "react";
import { product } from "../../templates/CarShop/types";
import { filterCorrency } from "../../Pipes/filterCorrency";


export const ItemCart = (props: product) => {
  const { quantityItemCarState, setQuantityItemCar, productState, setProduct } =
    useContext(GlobalContext);
    let correncyTotal = props.price * props.quantity
  return (
    <TableRow>
      <TableCell component="th" scope="row" className="titleCart">
        <img src={props.picture} alt={props.title} className="img-itemCart" />
        {props.title}
      </TableCell>
      <TableCell className="item-row" align="center">
        R${filterCorrency(props.price)}
      </TableCell>
      <TableCell className="item-row" align="center">
        {props.quantity}
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setQuantityItemCar(quantityItemCarState - 1);
              let data = productState;
              data[0].quantity = data[0].quantity - 1;
              setProduct([...data]);
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>

          <Button
            aria-label="increase"
            onClick={() => {
              setQuantityItemCar(quantityItemCarState + 1);
              let data = productState;
              data[0].quantity = data[0].quantity + 1;
              setProduct([...data]);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </TableCell>
      <TableCell className="item-row" align="center">
        R${filterCorrency(correncyTotal)}
      </TableCell>
    </TableRow>
  );
};
