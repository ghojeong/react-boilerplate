import React, { FC } from "react";
import { useStyles } from "./styles";
import MuiButton from "@material-ui/core/Button";
import { ButtonProps } from "@material-ui/core/Button";

interface Props extends ButtonProps {
  active?: boolean;
}
export const Button: FC<Props> = ({ active, ...btnProps }) => {
  const classes = useStyles();
  const { children, className, disabled, onClick } = btnProps;

  if (active) {
    return (
      <MuiButton
        {...btnProps}
        className={`${classes.root} ${classes.contained} ${className}`}
        color="primary"
        variant="contained"
        disabled={disabled}
        onClick={onClick}
      >
        <b>{children}</b>
      </MuiButton>
    );
  }

  return (
    <MuiButton
      className={`${classes.root} ${classes.outlined} ${className}`}
      color="primary"
      variant="outlined"
      disabled={disabled}
      onClick={onClick}
    >
      <b>{children}</b>
    </MuiButton>
  );
};
