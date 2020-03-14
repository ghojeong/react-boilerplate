import { createMuiTheme } from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ABFF",
      light: "#66CCFF",
      dark: "#006699",
      contrastText: "#FFFFFF"
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: "Noto Sans KR"
  }
});
