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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { Dashboard, Ballot } from "@material-ui/icons";

import DrawerItemCollapsible from "./DrawerParts/DrawerItemCollapsible";
import { drawerWidth } from "../../constants/UI";

import * as routes from "../../constants/routes";

export const useDrawerStyles = makeStyles((theme) => ({
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
  const classes = useDrawerStyles();

  const location = useLocation();

  const items = [
    {
      summary: "Products",
      Icon: <Ballot />,
      links: [
        {
          route: routes.PRODUCTS_LIST,
          title: "Products List",
        },
        {
          route: routes.NEW_PRODUCT,
          title: "New Product",
        },
        {
          route: routes.PRODUCTS_CATEGORIES,
          title: "Products Categories",
        },
        {
          route: routes.NEW_CATEGORY,
          title: "New Category",
        },
      ],
    },
    {
      summary: "Sales",
      Icon: <Ballot />,
      links: [
        {
          route: routes.NEW_SALE,
          title: "New Sale",
        },
        {
          route: routes.SALES_HISTORY,
          title: "Sales History",
        },
      ],
    },
    {
      summary: "Reports",
      Icon: <Ballot />,
      links: [
        {
          route: routes.DAILY_REPORT,
          title: "Daily Report",
        },
        {
          route: routes.MONTHLY_REPORT,
          title: "monthly report",
        },
      ],
    },
  ];

  const drawer = (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to={routes.DASHBOARD}
          selected={location.pathname === routes.DASHBOARD}
          classes={{
            root: classes.selected,
          }}
        >
          <ListItemIcon className={classes.white}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {items.map((item, index) => {
          const { summary, Icon, links } = item;
          return (
            <DrawerItemCollapsible
              summary={summary}
              Icon={Icon}
              routes={links}
            />
          );
        })}

        <ListItem
          button
          component={Link}
          to={routes.STOCK}
          selected={location.pathname === routes.STOCK}
          classes={{
            root: classes.selected,
          }}
        >
          <ListItemIcon className={classes.white}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Stock" />
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
