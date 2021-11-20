import { Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductListing from "../../Components/UI/Cards/ProductListing";

import thumb from "../../statics/images/fire.jpg";

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
      <Typography variant="h5">Products</Typography>
      <Divider style={{ marginBottom: "8px" }} />
      <Grid container spacing={2}>
        <Grid item xs className={classes.item}>
          <ProductListing image={thumb} productName="product 1" price={449} />;
        </Grid>
        <Grid item xs className={classes.item}>
          <ProductListing image={thumb} productName="product 2" price={1000} />;
        </Grid>
        <Grid item xs className={classes.item}>
          <ProductListing image={thumb} productName="product 3" price={46} />;
        </Grid>
        <Grid item xs className={classes.item}>
          <ProductListing image={thumb} productName="product 4" price={760} />;
        </Grid>
        <Grid item xs className={classes.item}>
          <ProductListing image={thumb} productName="product 5" price={1199} />;
        </Grid>
      </Grid>
    </>
  );
}
