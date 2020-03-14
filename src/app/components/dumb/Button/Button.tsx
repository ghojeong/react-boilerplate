import React, { FC } from "react";
import { useStyles } from "./styles";
import MuiButton from "@material-ui/core/Button";

interface Props {
  active?: boolean;
  className?: string;
}
export const Button: FC<Props> = ({ children, active, className }) => {
  const classes = useStyles();

  if (true) {
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
