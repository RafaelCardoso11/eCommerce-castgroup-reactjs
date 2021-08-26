import "./styles.scss";
import { ProductsList } from "../../components/ProductsComponents/ProductsList";
import { ListSubMenu } from "../../components/SubMenu/ListSubMenu";
import { Carousel } from "../../components/CarouselComponents/Carousel";
import { CardComponent } from "../../components/CardsComponents/Card";


export function Home() {
  
  return (
    <div className="container" id="home">
      <div className="container-list">
        <ListSubMenu />
      </div>
      <div className="container-carousel">
        <Carousel />
      </div>
      <div className="container-cards">
        <CardComponent />
      </div>
      <div className="container-products" id="products">
        <ProductsList />
      </div>
    </div>
  );
}
