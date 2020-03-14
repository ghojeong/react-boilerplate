import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "36px",
      width: "81px",
      fontSize: 14,
      fontWeight: "bold"
    },
    outlined: {
      border: "1px solid #E0E0E0 !important"
    },
    contained: {
      boxShadow: "none !important"
    },
    disabled: {
      border: "1px solid #E0E0E0 !important",
      color: "#00ABFF !important"
    }
  })
);
