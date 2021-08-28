import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    space: {
      height: (props) => {
        const { height } = props;
        const value = height ? height : 1;

        return theme.spacing(value);
      },
    },
  };
});

export default function VerticalSpace(props) {
  const classes = useStyles({ height: 0.5 });

  return <div className={classes.space} />;
}
