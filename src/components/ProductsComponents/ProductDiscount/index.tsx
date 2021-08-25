import { Typography } from "@material-ui/core";
import { filterCorrency12x } from "../../../Pipes/filterCorrency12x";
import { DiscountType } from "./FilterDiscountProduct";
import "./styles.scss";

export const ProductDiscount = (priceProduct: DiscountType) => {
  return (
    <Typography className="discount">
      12x R${filterCorrency12x(priceProduct.price) + ",00"}
    </Typography>
  );
};
