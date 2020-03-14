import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    minWidth: "1024px"
  },
  gridItem: {
    height: "100vh",
    overflow: "auto"
  },
  gridRightItem: {
    borderLeft: "8px solid #F5F5F5"
  }
});
