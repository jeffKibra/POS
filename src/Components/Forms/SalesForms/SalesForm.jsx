import {
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import { RiSearchLine, RiAddFill } from "react-icons/ri";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      width: "300px",
      maxWidth: "90%",
    },
    input: {
      margin: `${theme.spacing(1)}px 0`,
      "&:first-child": {
        marginTop: 0,
      },
      "&:last-child": {
        marginBottom: 0,
      },
    },
    header: {
      textAlign: "center",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    codeButton: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
});

const schema = yup.object().shape({
  productCode: yup.string().required("*Required"),
  qty: yup
    .number("Quantity muxt be a number greater than zero(0)!")
    .typeError("Quantity must be a number!")
    .positive("Quantity must be greater than zero(0)! ")
    .integer()
    .required("*Required"),
  discount: yup.number().typeError("Quantity must be a number!"),
});

function SalesForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      discount: 0,
      qty: 1,
    },
  });
  console.log({ props });

  const {
    addSale,
    onCancel,
    selectProduct,
    handleBack,
    selectedProduct,
    searchingProduct,
  } = props;
  const { productCode, productName, unitPrice, BP } = selectedProduct;

  const classes = useStyles();
  const code = watch("productCode");
  const qty = watch("qty", 1);
  const discount = watch("discount");
  const sum = +unitPrice * +qty - discount;
  console.log({ code, qty, discount });

  function submitCode() {
    selectProduct(code);
  }

  function submit(data) {
    console.log({ data });
    addSale({ ...data, ...selectedProduct, sum });
  }

  console.log({ productName, unitPrice, BP });
  console.log({ errors });
  return (
    <div>
      <CardHeader
        classes={{
          content: classes.header,
        }}
        title="New Sale"
      />
      <CardContent style={{ display: "flex", flexDirection: "row" }}>
        <form onSubmit={handleSubmit(submit)}>
          {productName && unitPrice && BP ? (
            <>
              <SaleDetails
                productCode={productCode}
                productName={productName}
                BP={BP}
                unitPrice={+unitPrice}
                sum={sum}
              />{" "}
              <TextField
                className={classes.input}
                fullWidth
                label="Quantity"
                {...register("qty")}
                defaultValue="1"
                type="number"
                error={!!errors.qty}
                helperText={errors.qty?.message}
              />
              <TextField
                className={classes.input}
                fullWidth
                label="Discount"
                {...register("discount")}
                type="number"
                defaultValue={0}
                error={!!errors.discount}
                helperText={errors.discount?.message}
              />{" "}
              <div className={`${classes.buttonContainer} ${classes.input}`}>
                <Button onClick={handleBack} color="secondary">
                  back
                </Button>
                <Button endIcon={<RiAddFill />} type="submit">
                  add
                </Button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <TextField
                className={classes.input}
                fullWidth
                label="Product Code"
                {...register("productCode")}
                type="text"
                error={!!errors.productCode}
                helperText={
                  errors.productCode
                    ? errors.productCode?.message
                    : "click icon to scan barcode"
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton title="scan barcode">
                        <RiSearchLine />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className={`${classes.buttonContainer} ${classes.input}`}>
                <Button onClick={onCancel} color="secondary">
                  cancel
                </Button>
                <Button
                  onClick={submitCode}
                  endIcon={
                    searchingProduct ? (
                      <CircularProgress size="14px" color="secondary" />
                    ) : (
                      <RiSearchLine />
                    )
                  }
                >
                  proceed
                </Button>
              </div>
            </>
          )}
        </form>
      </CardContent>
    </div>
  );
}

SalesForm.propTypes = {
  addSale: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  selectProduct: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  selectedProduct: PropTypes.shape({
    productName: PropTypes.string,
    unitPrice: PropTypes.number,
    BP: PropTypes.number,
  }),
  searchingProduct: PropTypes.bool.isRequired,
};

SalesForm.defaultProps = {
  selectedProduct: {},
};

export default SalesForm;

function SaleDetails(props) {
  const classes = useStyles();
  const { productCode, productName, BP, unitPrice, sum } = props;

  return (
    <div className={classes.details}>
      <Typography variant="caption">{productName}</Typography>
      <Typography variant="caption">Product Code: {productCode}</Typography>
      <Typography variant="caption">BP : Ksh {BP}</Typography>
      <Typography variant="caption">Unit price: ksh {unitPrice}</Typography>
      <Typography variant="body2">Sub Total: ksh {sum}</Typography>
    </div>
  );
}
SaleDetails.defaultProps = {
  discount: 0,
};

SaleDetails.propTypes = {
  productName: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  BP: PropTypes.string.isRequired,
  unitPrice: PropTypes.string.isRequired,
  sum: PropTypes.number,
};
