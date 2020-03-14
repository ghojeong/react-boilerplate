import React, { FC } from "react";
import { useStyles } from "./styles";
import { Header, Footer, Box } from "app/components";

export const DefaultLayout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.bodyContainer}>
        <Box className={classes.bodyBox}>{children}</Box>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
