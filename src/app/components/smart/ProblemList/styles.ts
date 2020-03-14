import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      maxHeight: `50vh - ${theme.spacing(10)}`,
      overflow: "auto"
    }
  })
);
