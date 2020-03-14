import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  header: { height: "66px" },
  bodyContainer: {
    flexGrow: 1,
    display: "flex",
    overflow: "auto"
  },
  bodyBox: {
    width: "100%",
    minHeight: "400px",
    display: "flex"
  },
  footer: { height: "75px" }
}));
