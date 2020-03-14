import React from "react";
import { useStyles } from "./styles";
import { Grid, ProblemsContainer, SimilarsContainer } from "app/components";

export const MainScreen = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.gridItem}>
        <ProblemsContainer />
      </Grid>
      <Grid item xs={6} className={classes.gridItem}>
        <SimilarsContainer />
      </Grid>
    </Grid>
  );
};
