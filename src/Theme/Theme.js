import { createTheme, useTheme } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

export default function Theme(props) {
  const { children } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4e73df", //"#17a2b8",
      },
      secondary: {
        main: "#ffc107",
      },
      background: {
        default: "#eeeeee",
      },
      custom: {
        green: "#1cc88a",
        cyan: "#36b9cc",
        yellow: "#f6c23e",
      },
    },
    overrides: {
      // MuiListItem: {
      //   root: {
      //     "&$selected": {
      //       backgroundColor: useTheme().palette.secondary.light,
      //       "&:hover": {
      //         backgroundColor: useTheme().palette.secondary.main,
      //       },
      //     },
      //   },
      // },
      MuiListItemText: {
        primary: {
          fontSize: 12,
        },
      },
      MuiAccordion: {
        root: {
          "&:before": {
            content: "",
          },
        },
      },
    },
    props: {
      MuiAccordion: {
        elevation: 0,
      },
      MuiFab: {
        color: "primary",
      },
      MuiButton: {
        variant: "contained",
        color: "primary",
      },
      MuiButtonGroup: {
        variant: "contained",
        color: "secondary",
      },
      MuiTextField: {
        size: "small",
        color: "primary",
        variant: "outlined",
      },
      MuiFormControl: {
        size: "small",
        color: "primary",
        variant: "outlined",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
