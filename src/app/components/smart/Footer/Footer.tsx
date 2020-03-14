import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { steps } from "app/assets";
import { Grid, Button, CustomerCounts } from "app/components";
import { stepNextAction, stepBackAction } from "app/actions";
import { stepSelector, isLoadingSelector } from "app/selectors";

export const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentStep } = useSelector(stepSelector());
  const { isLoading } = useSelector(isLoadingSelector());

  const handleNext = () => {
    if (currentStep + 1 < steps.length) {
      dispatch(stepNextAction());
    }
  };
  const handleBack = () => {
    if (currentStep - 1 >= 0) {
      dispatch(stepBackAction());
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.leftGrid}>
        {currentStep > 0 && (
          <Button
            variant="outlined"
            disabled={currentStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            이전
          </Button>
        )}
      </Grid>
      <Grid item xs={8} className={classes.rightGrid}>
        <CustomerCounts />
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.nextButton}
          disabled={isLoading}
        >
          {currentStep === steps.length - 1 ? "발송" : "다음"}
        </Button>
      </Grid>
    </Grid>
  );
};
