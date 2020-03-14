import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { color } from "app/themes/color";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      borderBottom: `8px solid ${color.borderLight}`
    },
    header: {
      display: "flex",
      justifyContent: "center"
    },
    problemType: {
      width: "82px",
      color: color.textLight,
      textAlign: "center",
      verticalAlign: "center",
      paddingTop: 8
    },
    unitName: {
      flexGrow: 1,
      color: color.textDark,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingTop: 8
    },
    button: {
      marginLeft: theme.spacing(1)
    },
    divider: {
      height: 2,
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: color.divider
    },
    body: {
      display: "flex"
    },
    idx: {
      height: "100%",
      width: "82px",
      color: color.textIdx,
      fontSize: 24,
      textAlign: "center"
    }
  })
);
