import { MenuItem } from "@material-ui/core";
import './styles.scss'
export const ItemMenu = (props: any) => {
  return (
    <MenuItem className={"items " + props.color}>
      {props.icon}
      {props.name}
    </MenuItem>
  );
};
