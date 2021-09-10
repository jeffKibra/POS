import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import { RiSearchLine, RiAddFill } from "react-icons/ri";

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
  };
});

const schema = yup.object().shape({
  productCode: yup.string().required("*Required"),
  quantity: yup.number().required("*Required"),
});

function SalesForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

  function submit(data) {
    console.log({ data });
  }

  console.log({ errors });
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          classes={{
            content: classes.header,
          }}
          title="Sales"
        />
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <form onSubmit={handleSubmit(submit)}>
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
                  <InputAdornment>
                    <IconButton title="scan barcode">
                      <RiSearchLine />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.input}
              fullWidth
              label="Quantity"
              {...register("quantity")}
              type="number"
              error={!!errors.quantity}
              helperText={errors.quantity?.message}
            />

            <Button
              className={classes.input}
              fullWidth
              type="submit"
              endIcon={<RiAddFill />}
            >
              add
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SalesForm;
