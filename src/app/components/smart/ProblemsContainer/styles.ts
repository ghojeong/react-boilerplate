import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    appBar: {
      height: "48px",
      boxShadow: "none",
      color: "#000000",
      backgroundColor: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      paddingLeft: theme.spacing(2)
    },
    title: {
      fontWeight: "bold",
      color: "#4C4C4C"
    },
    bodyContainer: {
      height: `calc(100% - 48px)`,
      overflow: "auto"
    },
    circularProgress: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);
