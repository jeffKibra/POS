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
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";

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
  subCategory: yup.string().required("*Required"),
  description: yup.string(),
});

function SubCategoriesForm(props) {
  const { loading } = props;
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
          title="Create Sub-category"
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
              label="Sub Category Name"
              {...register("subCategory")}
              type="text"
              error={!!errors.subCategory}
              helperText={errors.subCategory?.message}
            />

            <TextField
              className={classes.input}
              fullWidth
              multiline
              minRows={3}
              label="Description"
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
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

export default SubCategoriesForm;
