import React from "react";
import { useStyles } from "./styles";
import { Grid, ProblemsContainer, SimilarsContainer } from "app/components";

export const MainScreen = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullHeight}>
      <Grid item xs={6} className={classes.fullHeight}>
        <ProblemsContainer />
      </Grid>
      <Grid item xs={6} className={classes.fullHeight}>
        <SimilarsContainer />
      </Grid>
    </Grid>
  );
};
