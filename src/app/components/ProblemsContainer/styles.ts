import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    appBar: {
      height: "64px",
      boxShadow: "none",
      color: "#000000",
      backgroundColor: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      paddingLeft: theme.spacing(2)
    },
    bodyContainer: {
      height: `calc(100% - 64px)`,
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
