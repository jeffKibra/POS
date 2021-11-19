import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import { RiSearchLine } from "react-icons/ri";

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
  category: yup.string().required("*Required"),
  productName: yup.string().required("*Required"),
  productCode: yup.string().required("*Required"),
});

function ProductForm(props) {
  const { loading } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",

    resolver: yupResolver(schema),
  });

  const [variants, setVariants] = useState([1]);
  const n = +watch("productVariants", 1);
  console.log({ n, variants });

  useEffect(() => {
    const arr = [];

    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }

    setVariants(arr);
  }, [n]);

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
          title="Create Product"
        />
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <form onSubmit={handleSubmit(submit)}>
            <FormControl
              fullWidth
              error={!!errors.category}
              className={classes.input}
            >
              <InputLabel id="categories-label" htmlFor="categories">
                Select Category
              </InputLabel>
              <Select
                id="categories"
                labelId="categories-label"
                {...register("category")}
              >
                <MenuItem value="">
                  <em>select category</em>
                </MenuItem>
                <MenuItem value="plus">plus</MenuItem>
                <MenuItem value="minus">minus</MenuItem>
              </Select>
              <FormHelperText>
                {errors.category && errors.category?.message}
              </FormHelperText>
            </FormControl>

            <TextField
              className={classes.input}
              fullWidth
              label="Product Name"
              {...register("productName")}
              type="text"
              error={!!errors.productName}
              helperText={errors.productName?.message}
            />

            <TextField
              className={classes.input}
              fullWidth
              label="Product Variants"
              {...register("productVariants")}
              type="number"
              error={!!errors.productVariants}
              helperText={errors.productVariants?.message}
              defaultValue={1}
            />

            {variants.map((variant, i) => {
              return (
                <TextField
                  key={i}
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
              );
            })}

            <Button
              className={classes.input}
              fullWidth
              type="submit"
              endIcon={loading && <CircularProgress size={16} />}
            >
              save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductForm;
