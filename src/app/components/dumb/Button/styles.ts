import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { color } from "app/themes/color";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "36px",
      width: "90px"
    },
    outlined: {
      border: `1px solid ${color.borderMain} !important`
    },
    contained: {
      boxShadow: "none !important"
    }
  })
);
