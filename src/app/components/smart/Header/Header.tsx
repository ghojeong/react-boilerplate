import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import { steps } from "app/assets";
import { Stepper, Step, StepLabel } from "app/components";
import { stepSelector } from "app/selectors";

export const Header = () => {
  const classes = useStyles();
  const { currentStep } = useSelector(stepSelector());

  return (
    <Stepper activeStep={currentStep} className={classes.root}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
