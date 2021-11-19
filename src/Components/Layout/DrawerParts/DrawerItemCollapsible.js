import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";

import { useDrawerStyles } from "../ResponsiveDrawer";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../UI/Accordion";

function DrawerItemCollapsible(props) {
  const { Icon, summary, routes } = props;
  const classes = useDrawerStyles();

  const location = useLocation();

  return (
    <ListItem>
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          classes={{ root: classes.accordionSummary }}
          expandIcon={<ArrowDropDown />}
        >
          <ListItemIcon className={classes.white}>{Icon}</ListItemIcon>
          {summary}
        </AccordionSummary>

        <AccordionDetails
          classes={{
            root: classes.accordionDetails,
          }}
        >
          <List className={classes.accordionList}>
            {routes.map((obj, i) => {
              const { route, title } = obj;

              return (
                <ListItem
                  key={i}
                  button
                  component={Link}
                  to={route}
                  selected={location.pathname === route}
                  classes={{
                    root: classes.selected,
                  }}
                >
                  <ListItemText primary={title} />
                </ListItem>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
}

DrawerItemCollapsible.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default DrawerItemCollapsible;
