import React from "react";
import PropTypes from "prop-types";
import {
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";

import { Accordion, AccordionDetails, AccordionSummary } from "../UI/Accordion";
import { drawerWidth } from "../../constants/UI";

import * as routes from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: "100%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  selected: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.light,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  accordionSummary: {
    padding: 0,
    width: "100%",
    minHeight: 0,
    backgroundColor: theme.palette.primary.main,
  },
  accordionDetails: {
    padding: 0,
    color: theme.palette.common.black,
  },
  accordionList: {
    // backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    width: "100%",
  },
  white: {
    color: theme.palette.common.white,
  },
}));

function ResponsiveDrawer(props) {
  const { open, closeDrawer } = props;
  const classes = useStyles();

  const location = useLocation();

  const drawer = (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to={routes.CREATE_PRODUCT}
          selected={location.pathname === routes.CREATE_PRODUCT}
          classes={{
            root: classes.selected,
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem>
          <Accordion style={{ width: "100%" }}>
            <AccordionSummary
              classes={{ root: classes.accordionSummary }}
              expandIcon={<ArrowDropDown />}
            >
              <ListItemIcon className={classes.white}>
                <InboxIcon />
              </ListItemIcon>
              Products
            </AccordionSummary>

            <AccordionDetails
              classes={{
                root: classes.accordionDetails,
              }}
            >
              <List className={classes.accordionList}>
                <ListItem
                  button
                  component={Link}
                  to={routes.CREATE_PRODUCT}
                  selected={location.pathname === routes.CREATE_PRODUCT}
                  classes={{
                    root: classes.selected,
                  }}
                >
                  <ListItemText primary="Products" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={routes.PRODUCTS_LIST}
                  selected={location.pathname === routes.PRODUCTS_LIST}
                  classes={{
                    root: classes.selected,
                  }}
                >
                  <ListItemText primary="Create Product" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={closeDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default ResponsiveDrawer;
