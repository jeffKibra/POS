import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "128px",
      //minWidth: "100%",
    },
    items: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    media: {
      height: 120,
    },
    header: {
      textAlign: "center",
    },
  };
});

function ProductListing(props) {
  const { image, productName, price } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />

        <CardContent className={classes.items}>
          <Typography variant="subtitle1">{productName}</Typography>
          <Typography variant="caption">Ksh {price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ProductListing.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductListing;
