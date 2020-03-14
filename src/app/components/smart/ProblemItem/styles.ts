import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    },
    header: {
      display: "flex",
      justifyContent: "center"
    },
    problemType: {
      width: "82px",
      color: "#9F9F9F",
      fontWeight: "bold",
      textAlign: "center",
      verticalAlign: "center",
      paddingTop: 8
    },
    unitName: {
      flexGrow: 1,
      color: "#4C4C4C",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingTop: 8
    },
    button: {
      marginLeft: theme.spacing(1)
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: "#D8D8D8"
    },
    body: {
      display: "flex"
    },
    idx: {
      height: "100%",
      width: "82px",
      color: "#02C7F2",
      fontWeight: "bold",
      fontSize: 24,
      textAlign: "center"
    }
  })
);
