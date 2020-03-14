import React from "react";
import { useStyles } from "./styles";
import { Box } from "app/components";

export const SimilarsContainer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div>문항 교체/추가 sticky</div>
      <div>Similars 리스트</div>
    </Box>
  );
};
