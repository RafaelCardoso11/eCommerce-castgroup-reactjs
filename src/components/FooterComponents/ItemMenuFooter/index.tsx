import "./styles.scss";
import { ItemType } from "../types";
export const ItemMenu = (props: ItemType) => {
  return (
    <div className="item-footer">
      <h1 className="title-items">{props.title}</h1>
      <p className="item">{props.items.item1}</p>
      <p className="item">{props.items.item2}</p>
      <p className="item">{props.items.item3}</p>
    </div>
  );
};
