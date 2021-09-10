import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  CircularProgress,
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

function CategoriesForm(props) {
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
          title="Create Category"
        />
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <form onSubmit={handleSubmit(submit)}>
            <TextField
              className={classes.input}
              fullWidth
              label="Category Name"
              {...register("category")}
              type="text"
              error={!!errors.category}
              helperText={errors.category?.message}
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

export default CategoriesForm;
