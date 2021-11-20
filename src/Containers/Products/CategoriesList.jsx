import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    item: {
      display: "flex",
      justifyContent: "center",
    },
  };
});

export default function ProductsList(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5">Categories</Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>m</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="product category"
            secondary="category description"
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar>m</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="product category"
            secondary="category description"
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar>m</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="product category"
            secondary="category description"
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}
