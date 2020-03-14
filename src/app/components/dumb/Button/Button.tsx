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

  if (disabled) {
    return (
      <MuiButton
        {...btnProps}
        className={`${classes.root} ${classes.disabled} ${className}`}
        color="primary"
        variant="outlined"
        onClick={onClick}
      >
        <b className={classes.children}>{children}</b>
      </MuiButton>
    );
  }

  if (active) {
    return (
      <MuiButton
        {...btnProps}
        className={`${classes.root} ${classes.contained} ${className}`}
        color="primary"
        variant="contained"
        onClick={onClick}
      >
        <b className={classes.children}>{children}</b>
      </MuiButton>
    );
  }

  return (
    <MuiButton
      className={`${classes.root} ${classes.outlined} ${className}`}
      color="primary"
      variant="outlined"
      onClick={onClick}
    >
      <b className={classes.children}>{children}</b>
    </MuiButton>
  );
};
