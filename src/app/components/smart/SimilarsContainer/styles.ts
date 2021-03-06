import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { color } from "app/themes/color";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    appBar: {
      height: "48px",
      boxShadow: "none",
      color: color.textAppBar,
      backgroundColor: color.appBarBackground,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: theme.spacing(2),
      borderBottom: `1px solid ${color.borderLight}`
    },
    title: {
      color: color.textDark
    },
    bodyContainer: {
      height: `calc(100% - 48px)`,
      overflow: "auto",
      backgroundColor: color.bodyBackground
    },
    circularProgress: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    placeholder: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    placeholderDisabledBtn: {
      border: `1px solid ${color.borderMain} !important`,
      color: `${theme.palette.primary.main} !important`
    }
  })
);
