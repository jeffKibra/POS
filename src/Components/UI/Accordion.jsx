import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const Accordion = withStyles((theme) => ({
  root: {
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: 0,
    },
  },
  expanded: {},
}))(MuiAccordion);

export const AccordionSummary = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: 0,
    minHeight: 0,
    "&$expanded": {
      padding: 0,
      minHeight: 0,
      paddingBottom: "16px",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
    margin: 0,
    "&$expanded": {
      margin: 0,
    },
  },
  expandIcon: {
    paddingTop: "2px",
    paddingBottom: "2px",
    color: theme.palette.common.white,
  },
  expanded: {},
}))(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    // marginTop: "16px",
  },
}))(MuiAccordionDetails);
