import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { ProductDiscount } from "../ProductDiscount";
import { ProductType } from "../types/ProductType";

import "./styles.scss";
import { filterCorrency } from "../../../Pipes/filterCorrency";

export const Product = (product: ProductType) => {

  return (
    <Card key={product.id} className="product">
      <CardActionArea className="content-product">
        <Link to={"/product/" + product.id}>
          <CardMedia
            image={product.picture}
            title={product.title}
            className="product-img"
          />
        </Link>

        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="titleProduct"
        >
          {product.title}
        </Typography>
        <CardActions className="container-bodyProduct">
          <Typography className="bodyProduct">R${filterCorrency(product.price)}</Typography>
          <ProductDiscount price={product.price} />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
