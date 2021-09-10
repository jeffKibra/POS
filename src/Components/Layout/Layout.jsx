import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import ResponsiveDrawer from "./ResponsiveDrawer";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout(props) {
  const { children } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <TopBar open={open} openDrawer={handleDrawerToggle} />
      <ResponsiveDrawer open={open} closeDrawer={handleDrawerToggle} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
