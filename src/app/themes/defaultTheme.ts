import { createMuiTheme } from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ABFF",
      light: "#66ccff",
      dark: "#006699",
      contrastText: "#ffffff"
    }
  },
  typography: {
    fontFamily: "Noto Sans KR"
  }
});
