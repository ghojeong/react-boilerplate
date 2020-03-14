import React, { FC } from "react";
import { useStyles } from "./styles";
import MuiButton from "@material-ui/core/Button";

interface Props {
  className?: string;
  active?: boolean;
  disabled?: boolean;
}
export const Button: FC<Props> = ({
  children,
  className,
  active,
  disabled
}) => {
  const classes = useStyles();

  if (disabled) {
    return (
      <MuiButton
        className={`${classes.root} ${classes.disabled} ${className}`}
        color="primary"
        variant="outlined"
        disabled
      >
        {children}
      </MuiButton>
    );
  }

  if (active) {
    return (
      <MuiButton
        className={`${classes.root} ${classes.contained} ${className}`}
        color="primary"
        variant="contained"
      >
        {children}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      className={`${classes.root} ${classes.outlined} ${className}`}
      color="primary"
      variant="outlined"
    >
      {children}
    </MuiButton>
  );
};
