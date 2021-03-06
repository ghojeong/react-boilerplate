import { makeStyles } from "@material-ui/core/styles";
import { color } from "app/themes/color";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    minWidth: "1024px"
  },
  gridItem: {
    height: "100vh",
    overflow: "auto",
    borderRight: `2px solid ${color.borderMain}`
  },
  gridRightItem: {
    borderLeft: `8px solid ${color.borderLight}`
  }
});
