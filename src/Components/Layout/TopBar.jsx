import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import PropTypes from "prop-types";

import { drawerWidth } from "../../constants/UI";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    appBar: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

function TopBar(props) {
  const classes = useStyles();
  const { openDrawer } = props;

  return (
    <header>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={openDrawer}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Tessery Designs
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

TopBar.propTypes = {
  open: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
};

export default TopBar;
