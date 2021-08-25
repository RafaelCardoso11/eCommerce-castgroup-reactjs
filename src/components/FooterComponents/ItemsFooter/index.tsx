import { ItemMenu } from "../ItemMenuFooter";
import { ItemType} from "../types";

export const ItemsFooter = () => {
  let itemsMenu: Array<ItemType>;
  itemsMenu = [
    {
      title: "Discovery",
      items: {
        item1: "New season",
        item2: "Terms e Conditions",
        item3: "Lorem ipsum dolor",
      },
    },
    {
      title: "About",
      items: {
        item1: "New season",
        item2: "Terms e Conditions",
        item3: "Lorem ipsum dolor",
      },
    },
    {
      title: "Info",
      items: {
        item1: "Terms e Conditions",
        item2: "Terms e Conditions",
        item3: "Terms e Conditions",
      },
    },
  ];

  return (
    <>
      {itemsMenu.map((item) => (
        <ItemMenu title={item.title} items={item.items} key={item.title} />
      ))}
    </>
  );
};
