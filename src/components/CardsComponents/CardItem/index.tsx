import './styles.scss'
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
  },
  card: {
    width: "100%",
    boxShadow: "0 0 0",
  },
});

export const CardItem = (props: any) => {
  const classes = useStyles();
  return (
    <Card className="cardItem">
      <CardActionArea className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.icon}
            <Typography className="titleCard">{props.title}</Typography>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="bodyCard"
          >
           {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
