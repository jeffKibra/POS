import {
  Card,
  CardContent,
  TextField,
  Button,
  CardHeader,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import PasswordInput from "../../UI/PasswordInput";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Value must be a valid email!")
    .required("Please Enter your Email"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password Must be atleast 8 Characters long and Must have One Character and One Number"
    ),
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: "300px",
      maxWidth: "90%",
    },
    input: {
      marginBottom: `${theme.spacing(3)}px`,
    },
    button: {
      margin: `${theme.spacing(3)}px 0`,
    },
    header: {
      textAlign: "center",
    },
  };
});

export default function LoginForm(props) {
  const { loading } = props;
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function handleFormSubmit(data) {
    console.log({ data });
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          classes={{
            content: classes.header,
          }}
          title="BARIKI BARIKIWA"
        />
        <CardContent>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <TextField
              {...register("email", {
                required: { value: true, message: "huahua" },
              })}
              className={classes.input}
              label="Email"
              name="email"
              type="email"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              fullWidth
              variant="outlined"
              size="small"
            />
            <PasswordInput
              register={register}
              errors={errors}
              fullWidth
              toggle
              label="Password"
              name="password"
            />
            <Button
              disabled={loading}
              type="submit"
              className={classes.button}
              variant="outlined"
              fullWidth
              endIcon={loading && <CircularProgress size={16} />}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
