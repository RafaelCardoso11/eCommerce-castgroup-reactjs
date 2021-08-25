import "./styles.scss";
import SecurityIcon from "@material-ui/icons/Security";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CheckIcon from "@material-ui/icons/Check";
import { CardItem } from "../CardItem";
export function CardComponent() {
  return (
    <div className="card">
      <CardItem
        title={"Compra segura."}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis eaque mollitia soluta distinctio tenetur est."
        }
        icon={<SecurityIcon className="iconCard" />}
      />
      <CardItem
        title={"Entrega imediata."}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis eaque mollitia soluta distinctio tenetur est."
        }
        icon={<ShoppingCartIcon className="iconCard" />}
      />
      <CardItem
        title={"Garantia de 1 ano."}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum debitis eaque mollitia soluta distinctio tenetur est."
        }
        icon={<CheckIcon className="iconCard" />}
      />
    </div>
  );
}
